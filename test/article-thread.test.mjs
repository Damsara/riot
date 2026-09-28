import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = path.join(root, "skills", "marketing");

function skillBody(name) {
  const content = fs.readFileSync(path.join(skillsDir, name, "SKILL.md"), "utf8");
  return parseFrontmatter(content)?.body ?? "";
}

function logLines(content) {
  const section = content.split(/^## 9\. Log$/m)[1] ?? "";
  return section.split(/\r?\n/).filter((line) => line.trim().startsWith("-"));
}

for (const name of ["riot-article", "riot-thread"]) {
  test(`${name}'s body is exactly one Skill tool call to piece`, () => {
    const lines = skillBody(name)
      .split(/\r?\n/)
      .filter((line) => line.trim());
    assert.equal(lines.length, 1);
    assert.equal(lines[0].trim(), 'Call the Skill tool with "piece".');
  });

  test(`${name} carries exactly one reference file`, () => {
    const referencesDir = path.join(skillsDir, name, "references");
    const files = fs.readdirSync(referencesDir);
    assert.equal(files.length, 1);
  });
}

test("riot-article carries references/article.md, and it opens with the canon-version stamp", () => {
  const referencesDir = path.join(skillsDir, "riot-article", "references");
  const files = fs.readdirSync(referencesDir);
  assert.deepEqual(files, ["article.md"]);
  const content = fs.readFileSync(path.join(referencesDir, "article.md"), "utf8");
  assert.match(content.split(/\r?\n/)[0], /^> canon-version: \d{4}-\d{2}$/);
});

test("riot-thread carries references/thread.md, and it opens with the canon-version stamp", () => {
  const referencesDir = path.join(skillsDir, "riot-thread", "references");
  const files = fs.readdirSync(referencesDir);
  assert.deepEqual(files, ["thread.md"]);
  const content = fs.readFileSync(path.join(referencesDir, "thread.md"), "utf8");
  assert.match(content.split(/\r?\n/)[0], /^> canon-version: \d{4}-\d{2}$/);
});

test("article.md states the three-title-options rule and mentions listicles", () => {
  const content = fs.readFileSync(path.join(skillsDir, "riot-article", "references", "article.md"), "utf8");
  assert.match(content, /three title options/);
  assert.match(content.toLowerCase(), /listicle/);
});

for (const [format, slug] of [
  ["article", "why-we-built-it"],
  ["thread", "feature-launch"],
]) {
  const demoDir = path.join(root, "test", "fixtures", `${format}-demo`);

  test(`the ${format} demo piece file carries the four header fields`, () => {
    const content = fs.readFileSync(path.join(demoDir, `2026-09-28-${format}-${slug}.md`), "utf8");
    const parsed = parseFrontmatter(content);
    assert.ok(parsed, `demo ${format} piece is missing frontmatter`);
    for (const key of ["format", "occasion", "direction-version", "cop-verdict"]) {
      assert.ok(parsed.fields[key], `demo ${format} piece is missing frontmatter key: ${key}`);
    }
  });

  test(`${format}-demo/manifesto-after.md's Log has exactly one more line than the fixture manifesto's, and it logs a ${format} at v1`, () => {
    const before = logLines(fs.readFileSync(path.join(root, "test", "fixtures", "manifesto.md"), "utf8"));
    const after = logLines(fs.readFileSync(path.join(demoDir, "manifesto-after.md"), "utf8"));
    assert.equal(after.length, before.length + 1, `${format}-demo/manifesto-after.md must log exactly one more piece`);
    const newLine = after[after.length - 1];
    assert.match(newLine, new RegExp(`\\b${format}\\b`));
    assert.match(newLine, /\bv1\b/);
  });
}
