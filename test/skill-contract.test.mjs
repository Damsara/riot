import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateRepository, parseFrontmatter, WRAPPERS, ROUTER, CANON, KNOWN_FORMATS } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = path.join(root, "skills", "marketing");
const EM_DASH = "\u2014";

function existingSkillNames() {
  if (!fs.existsSync(skillsDir)) return [];
  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function skillBody(name) {
  const content = fs.readFileSync(path.join(skillsDir, name, "SKILL.md"), "utf8");
  return parseFrontmatter(content)?.body ?? "";
}

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(absolutePath));
    else files.push(absolutePath);
  }
  return files;
}

// All of these assertions iterate over whatever skills currently exist under
// skills/marketing, so they hold on the empty tree just as they will once
// each skill is promoted.

test("the repository satisfies its skill and release contracts", () => {
  assert.deepEqual(validateRepository(root), []);
});

test("every wrapper (riot-*, except ask-riot) calls only Skill tool lines, at most four", () => {
  for (const name of existingSkillNames()) {
    if (!WRAPPERS.has(name)) continue;
    const bodyLines = skillBody(name)
      .split(/\r?\n/)
      .filter((line) => line.trim());
    assert.ok(bodyLines.length <= 4, `${name}: wrapper body must be at most 4 lines`);
    for (const line of bodyLines) {
      assert.match(line.trim(), /^Call the Skill tool with "[a-z0-9-]+"\.?$/, `${name}: wrapper line must be a Skill tool call`);
    }
  }
});

test("ask-riot, when present, names every wrapper folder in its body", () => {
  const names = existingSkillNames();
  if (!names.includes(ROUTER)) return;
  const router = fs.readFileSync(path.join(skillsDir, ROUTER, "SKILL.md"), "utf8");
  for (const name of names) {
    if (!WRAPPERS.has(name)) continue;
    assert.match(router, new RegExp(`\\b${name}\\b`), `${ROUTER} must name ${name}`);
  }
});

test("ask-riot's no-manifesto line names exactly one /riot- command", () => {
  const names = existingSkillNames();
  if (!names.includes(ROUTER)) return;
  const router = fs.readFileSync(path.join(skillsDir, ROUTER, "SKILL.md"), "utf8");
  const line = router.split(/\r?\n/).find((candidate) => candidate.includes("No manifesto"));
  assert.ok(line, `${ROUTER} must have a line mentioning "No manifesto"`);
  const commands = line.match(/\/riot-[a-z-]+/g) ?? [];
  assert.deepEqual(commands, ["/riot-me"], `${ROUTER}'s "No manifesto" line must name exactly /riot-me`);
});

test("non-canon skills carry at most one references/<format>.md; riot-canon may carry any", () => {
  for (const name of existingSkillNames()) {
    const referencesDir = path.join(skillsDir, name, "references");
    if (!fs.existsSync(referencesDir)) continue;
    if (name === CANON) continue;
    const files = fs.readdirSync(referencesDir).filter((file) => file.endsWith(".md"));
    assert.ok(files.length <= 1, `${name}: at most one reference file`);
    if (files.length === 1) {
      const format = files[0].replace(/\.md$/, "");
      assert.ok(KNOWN_FORMATS.includes(format), `${name}: ${files[0]} is not a known format`);
    }
  }
});

test("no em dashes anywhere under skills/ or in README.md", () => {
  const files = fs.existsSync(skillsDir) ? walk(skillsDir) : [];
  files.push(path.join(root, "README.md"));
  for (const file of files) {
    assert.ok(!fs.readFileSync(file, "utf8").includes(EM_DASH), `${path.relative(root, file)}: contains an em dash`);
  }
});

test("sync-plugin-version --check agrees with package.json", () => {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "sync-plugin-version.mjs"), "--check"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
});
