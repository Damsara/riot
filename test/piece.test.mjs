import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = path.join(root, "skills", "marketing");
const demoDir = path.join(root, "test", "fixtures", "piece-demo");

function skillBody(name) {
  const content = fs.readFileSync(path.join(skillsDir, name, "SKILL.md"), "utf8");
  return parseFrontmatter(content)?.body ?? "";
}

function logLines(content) {
  const section = content.split(/^## 9\. Log$/m)[1] ?? "";
  return section.split(/\r?\n/).filter((line) => line.trim().startsWith("-"));
}

test("riot-post's body is exactly one Skill tool call to piece", () => {
  const lines = skillBody("riot-post")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  assert.equal(lines.length, 1);
  assert.equal(lines[0].trim(), 'Call the Skill tool with "piece".');
});

test("riot-post carries exactly one reference file, references/post.md", () => {
  const referencesDir = path.join(skillsDir, "riot-post", "references");
  const files = fs.readdirSync(referencesDir);
  assert.deepEqual(files, ["post.md"]);
});

test("piece/SKILL.md opens with the riot-canon call and names its steps", () => {
  const body = skillBody("piece");
  const firstInstruction = body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith("#"));
  assert.equal(firstInstruction, 'Call the Skill tool with "riot-canon".', "piece must open with the riot-canon call");
  const lower = body.toLowerCase();
  for (const word of ["banned", "unslop", "cop", "log"]) {
    assert.ok(lower.includes(word), `piece/SKILL.md is missing the word "${word}"`);
  }
});

test("the demo piece file carries the four header fields", () => {
  const content = fs.readFileSync(path.join(demoDir, "2026-09-28-post-feature-launch.md"), "utf8");
  const parsed = parseFrontmatter(content);
  assert.ok(parsed, "demo piece is missing frontmatter");
  for (const key of ["format", "occasion", "direction-version", "cop-verdict"]) {
    assert.ok(parsed.fields[key], `demo piece is missing frontmatter key: ${key}`);
  }
});

test("manifesto-after.md's Log has exactly one more line than the fixture manifesto's, and it logs a post at v1", () => {
  const before = logLines(fs.readFileSync(path.join(root, "test", "fixtures", "manifesto.md"), "utf8"));
  const after = logLines(fs.readFileSync(path.join(demoDir, "manifesto-after.md"), "utf8"));
  assert.equal(after.length, before.length + 1, "manifesto-after.md must log exactly one more piece");
  const newLine = after[after.length - 1];
  assert.match(newLine, /\bpost\b/);
  assert.match(newLine, /\bv1\b/);
});
