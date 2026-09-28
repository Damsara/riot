import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const formatPath = path.join(root, "skills", "marketing", "riot-canon", "references", "manifesto-format.md");
const fixturePath = path.join(root, "test", "fixtures", "manifesto.md");

// The section list lives once, in manifesto-format.md's numbered list. Both
// assertions below read it from there rather than hardcoding the nine
// names, so a drift between the format and the fixture fails the test.
function sectionNamesFromFormat(content) {
  const names = [];
  for (const match of content.matchAll(/^\d+\.\s+\*\*([^*]+)\*\*/gm)) names.push(match[1]);
  return names;
}

function headingNamesFromManifesto(content) {
  const names = [];
  for (const match of content.matchAll(/^##\s+\d+\.\s+(.+)$/gm)) names.push(match[1].trim());
  return names;
}

test("manifesto-format.md defines exactly nine sections", () => {
  const format = fs.readFileSync(formatPath, "utf8");
  const names = sectionNamesFromFormat(format);
  assert.equal(names.length, 9, `expected 9 sections, found ${names.length}: ${names.join(", ")}`);
});

test("the fixture manifesto carries the required frontmatter keys", () => {
  const content = fs.readFileSync(fixturePath, "utf8");
  const parsed = parseFrontmatter(content);
  assert.ok(parsed, "fixture manifesto is missing frontmatter");
  for (const key of ["product", "stage", "docs-home", "direction-version"]) {
    assert.ok(parsed.fields[key], `fixture manifesto is missing frontmatter key: ${key}`);
  }
  assert.match(parsed.fields.stage, /^(none|researched|tasted|chosen)$/);
});

test("the fixture manifesto's section headings match manifesto-format.md, in order", () => {
  const format = fs.readFileSync(formatPath, "utf8");
  const expectedNames = sectionNamesFromFormat(format);
  const fixture = fs.readFileSync(fixturePath, "utf8");
  const actualNames = headingNamesFromManifesto(fixture);
  assert.deepEqual(actualNames, expectedNames, "fixture headings drifted from manifesto-format.md's section list");
});

test("the fixture manifesto logs at least two pieces", () => {
  const content = fs.readFileSync(fixturePath, "utf8");
  const logSection = content.split(/^## 9\. Log$/m)[1] ?? "";
  const logLines = logSection.split(/\r?\n/).filter((line) => line.trim().startsWith("-"));
  assert.ok(logLines.length >= 2, `expected at least 2 log lines, found ${logLines.length}`);
});
