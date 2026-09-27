#!/usr/bin/env node
// Repository invariants for riot. Every rule here is stated in CLAUDE.md.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const DISCIPLINES = new Set(["riot-canon", "stance", "piece"]);
export const WRAPPERS = new Set([
  "riot-me",
  "riot-revise",
  "riot-article",
  "riot-post",
  "riot-thread",
  "riot-video",
  "riot-launch",
]);
export const ROUTER = "ask-riot";
export const CANON = "riot-canon";
export const USER_INVOKED = new Set([...WRAPPERS, ROUTER]);
export const PROMOTED = [...DISCIPLINES, ...WRAPPERS, ROUTER];
export const KNOWN_FORMATS = ["article", "post", "thread", "video", "launch"];

const SKILLS_DIR = path.join("skills", "marketing");
const EM_DASH = "\u2014";

function listFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(absolutePath));
    else files.push(absolutePath);
  }
  return files;
}

function parseValue(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;
  const fields = {};
  const errors = [];
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const field = line.match(/^([a-z0-9-]+):\s*(.*)$/);
    if (!field) {
      errors.push(`invalid frontmatter line: ${line}`);
      continue;
    }
    fields[field[1]] = parseValue(field[2]);
  }
  return { fields, errors, body: content.slice(match[0].length) };
}

export function validateSkillDocument({ relativePath, content }) {
  const errors = [];
  const parsed = parseFrontmatter(content);
  if (!parsed) return [`${relativePath}: missing YAML frontmatter`];
  errors.push(...parsed.errors.map((error) => `${relativePath}: ${error}`));

  const folderName = path.basename(path.dirname(relativePath));
  const { name, description } = parsed.fields;
  if (!name) errors.push(`${relativePath}: missing name`);
  else {
    if (name !== folderName) errors.push(`${relativePath}: name "${name}" does not match folder "${folderName}"`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push(`${relativePath}: name must be lowercase-hyphen`);
  }
  if (!description) errors.push(`${relativePath}: missing description`);
  else if (description.length >= 1536) errors.push(`${relativePath}: description must be under 1536 characters`);

  const kind = DISCIPLINES.has(name) ? "discipline" : WRAPPERS.has(name) ? "wrapper" : name === ROUTER ? "router" : undefined;
  if (!kind) errors.push(`${relativePath}: skill is not classified in the repository invariants`);

  const flag = parsed.fields["disable-model-invocation"];
  if (kind === "discipline" && flag !== undefined) errors.push(`${relativePath}: disciplines must omit disable-model-invocation`);
  if ((kind === "wrapper" || kind === "router") && flag !== "true") {
    errors.push(`${relativePath}: user-invoked skills must set disable-model-invocation: true`);
  }

  const bodyLines = parsed.body.split(/\r?\n/).filter((line) => line.trim());
  if (kind === "wrapper") {
    if (bodyLines.length > 4) errors.push(`${relativePath}: wrapper body has ${bodyLines.length} non-empty lines; maximum is 4`);
    for (const line of bodyLines) {
      if (!/^Call the Skill tool with "[a-z0-9-]+"\.?$/.test(line.trim())) {
        errors.push(`${relativePath}: wrapper line is not a Skill tool call: ${line.trim()}`);
      }
    }
  }
  if (kind === "discipline" && name !== CANON && !parsed.body.includes(`Call the Skill tool with "${CANON}"`)) {
    errors.push(`${relativePath}: disciplines must open by calling the Skill tool with "${CANON}"`);
  }
  if (/\.\.\//.test(content)) errors.push(`${relativePath}: contains a ../ path; reach other skills through the Skill tool`);
  for (const bare of content.matchAll(/(?<=^|\s)\/(stance|piece|riot-canon)\b(?![.-])/gm)) {
    errors.push(`${relativePath}: bare slash reference "${bare[0]}" to a discipline; use the Skill tool phrasing`);
  }
  if (content.includes(EM_DASH)) errors.push(`${relativePath}: contains an em-dash`);

  return errors;
}

function validateOpenaiYaml(rootDirectory, name, kind, errors) {
  const relativePath = path.join(SKILLS_DIR, name, "agents", "openai.yaml");
  const absolutePath = path.join(rootDirectory, relativePath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`${relativePath}: missing`);
    return;
  }
  const content = fs.readFileSync(absolutePath, "utf8");
  if (!/display_name:\s*"[^"]+"/.test(content)) errors.push(`${relativePath}: missing interface.display_name`);
  if (!/short_description:\s*"[^"]+"/.test(content)) errors.push(`${relativePath}: missing interface.short_description`);
  const hasPolicy = /allow_implicit_invocation:\s*false/.test(content);
  if (kind === "discipline" && hasPolicy) errors.push(`${relativePath}: disciplines must not set allow_implicit_invocation: false`);
  if (kind !== "discipline" && !hasPolicy) errors.push(`${relativePath}: user-invoked skills must set policy.allow_implicit_invocation: false`);
}

function isExternalLink(link) {
  return /^[a-z][a-z0-9+.-]*:/i.test(link) || link.startsWith("#");
}

// Every skill may carry references/ (not just canon). Every reference file
// opens with a canon-version stamp; this returns the reference files found
// so the caller can also apply the per-skill cardinality rule.
function validateReferenceStamps(rootDirectory, skillsDirectory, name, errors) {
  const referencesDirectory = path.join(skillsDirectory, name, "references");
  if (!fs.existsSync(referencesDirectory)) return [];
  const files = listFiles(referencesDirectory).filter((file) => file.endsWith(".md"));
  for (const absolutePath of files) {
    const relativePath = path.relative(rootDirectory, absolutePath);
    const firstLine = fs.readFileSync(absolutePath, "utf8").split(/\r?\n/)[0] ?? "";
    if (!/^> canon-version: \d{4}-\d{2}$/.test(firstLine)) {
      errors.push(`${relativePath}: first line must be > canon-version: YYYY-MM`);
    }
  }
  return files;
}

// Every relative markdown link in a SKILL.md or a reference file must
// resolve to a file that actually exists.
function validateLinks(rootDirectory, absolutePath, errors) {
  const relativePath = path.relative(rootDirectory, absolutePath);
  const content = fs.readFileSync(absolutePath, "utf8");
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const link = match[1].trim();
    if (!link || isExternalLink(link)) continue;
    const [linkPath] = link.split("#");
    if (!linkPath) continue;
    const resolved = path.resolve(path.dirname(absolutePath), linkPath);
    if (!fs.existsSync(resolved)) errors.push(`${relativePath}: broken link to ${link}`);
  }
}

export function validateRepository(rootDirectory) {
  const errors = [];
  const skillsDirectory = path.join(rootDirectory, SKILLS_DIR);
  const skillNames = [];

  for (const directory of fs.readdirSync(skillsDirectory, { withFileTypes: true })) {
    if (!directory.isDirectory()) continue;
    const name = directory.name;
    const relativePath = path.join(SKILLS_DIR, name, "SKILL.md");
    const absolutePath = path.join(rootDirectory, relativePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`${relativePath}: missing SKILL.md`);
      continue;
    }
    skillNames.push(name);
    errors.push(...validateSkillDocument({ relativePath, content: fs.readFileSync(absolutePath, "utf8") }));
    const kind = DISCIPLINES.has(name) ? "discipline" : WRAPPERS.has(name) ? "wrapper" : "router";
    validateOpenaiYaml(rootDirectory, name, kind, errors);
    validateLinks(rootDirectory, absolutePath, errors);

    // Any skill may carry references/. riot-canon may carry any number of
    // them; every other skill carries at most one, named for a known format.
    const referenceFiles = validateReferenceStamps(rootDirectory, skillsDirectory, name, errors);
    for (const absoluteReferencePath of referenceFiles) validateLinks(rootDirectory, absoluteReferencePath, errors);
    if (name !== CANON) {
      if (referenceFiles.length > 1) {
        errors.push(`${SKILLS_DIR}/${name}/references: only ${CANON} may carry more than one reference file`);
      } else if (referenceFiles.length === 1) {
        const basename = path.basename(referenceFiles[0], ".md");
        if (!KNOWN_FORMATS.includes(basename)) {
          errors.push(`${SKILLS_DIR}/${name}/references/${basename}.md: not a known format (${KNOWN_FORMATS.join(", ")})`);
        }
      }
    }
  }

  // README and router stay in sync with whatever skills exist right now.
  const readme = fs.readFileSync(path.join(rootDirectory, "README.md"), "utf8");
  for (const name of skillNames) {
    if (!readme.includes(`./${SKILLS_DIR}/${name}/SKILL.md`)) errors.push(`README.md: missing catalog link for ${name}`);
  }
  const routerPath = path.join(skillsDirectory, ROUTER, "SKILL.md");
  if (fs.existsSync(routerPath)) {
    const router = fs.readFileSync(routerPath, "utf8");
    for (const name of WRAPPERS) {
      if (skillNames.includes(name) && !router.includes(`/${name}`)) errors.push(`${ROUTER}: missing route for /${name}`);
    }
  }

  // plugin.json lists exactly the skills that exist on disk right now; the
  // promoted set grows one skill ticket at a time.
  const plugin = JSON.parse(fs.readFileSync(path.join(rootDirectory, ".claude-plugin", "plugin.json"), "utf8"));
  const pluginSkills = [...(plugin.skills ?? [])].map((entry) => entry.replace(/^\.\//, "")).sort();
  const expected = skillNames.map((name) => `${SKILLS_DIR}/${name}`).sort();
  if (JSON.stringify(pluginSkills) !== JSON.stringify(expected)) {
    errors.push(`plugin.json: skills must list exactly the promoted set (${expected.join(", ")})`);
  }

  // Prose rules: no em dashes anywhere under skills/, or in README.md.
  for (const absolutePath of listFiles(skillsDirectory)) {
    const relativePath = path.relative(rootDirectory, absolutePath);
    if (fs.readFileSync(absolutePath, "utf8").includes(EM_DASH)) errors.push(`${relativePath}: contains an em-dash`);
  }
  if (readme.includes(EM_DASH)) errors.push("README.md: contains an em-dash");

  // Examples carry the manifesto-based transcript.
  const examplesDirectory = path.join(rootDirectory, "examples");
  if (fs.existsSync(examplesDirectory)) {
    for (const entry of fs.readdirSync(examplesDirectory, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (!fs.existsSync(path.join(examplesDirectory, entry.name, "transcript.md"))) {
        errors.push(`examples/${entry.name}: missing transcript.md`);
      }
    }
  }

  // Package and release metadata.
  const packageJson = JSON.parse(fs.readFileSync(path.join(rootDirectory, "package.json"), "utf8"));
  if (!/^pnpm@\d+\.\d+\.\d+$/.test(packageJson.packageManager ?? "")) errors.push("package.json: packageManager must pin pnpm");
  if (!fs.existsSync(path.join(rootDirectory, "pnpm-lock.yaml"))) errors.push("pnpm-lock.yaml: missing canonical lockfile");
  if (fs.existsSync(path.join(rootDirectory, "package-lock.json"))) errors.push("package-lock.json: remove competing npm lockfile; pnpm is canonical");
  for (const scriptName of ["validate", "test", "package:check"]) {
    if (!packageJson.scripts?.[scriptName]) errors.push(`package.json: missing ${scriptName} script`);
  }
  if (plugin.version !== packageJson.version) errors.push(`plugin.json: version ${plugin.version} drifted from package.json ${packageJson.version}`);
  const changelog = fs.readFileSync(path.join(rootDirectory, "CHANGELOG.md"), "utf8");
  if (!changelog.includes(`## ${packageJson.version}`)) errors.push(`CHANGELOG.md: missing current version ${packageJson.version}`);

  return errors;
}

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = validateRepository(rootDirectory);
  if (errors.length) {
    console.error(errors.map((error) => `✗ ${error}`).join("\n"));
    process.exitCode = 1;
  } else {
    const skillCount = fs
      .readdirSync(path.join(rootDirectory, SKILLS_DIR), { withFileTypes: true })
      .filter((entry) => entry.isDirectory()).length;
    console.log(`Validated ${skillCount} skills.`);
  }
}
