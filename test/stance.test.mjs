import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const formatPath = path.join(root, "skills", "marketing", "riot-canon", "references", "manifesto-format.md");
const demoPath = path.join(root, "test", "fixtures", "stance-demo", "manifesto.md");
const stancePath = path.join(root, "skills", "marketing", "stance", "SKILL.md");
const riotMePath = path.join(root, "skills", "marketing", "riot-me", "SKILL.md");

// Same section-list logic as manifesto-format.test.mjs: read the nine section
// names from manifesto-format.md rather than hardcoding them, so a drift
// between the format and this demo fixture fails the test.
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

function sectionBody(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`^##\\s+\\d+\\.\\s+${escaped}$([\\s\\S]*?)(?=^##\\s+\\d+\\.|$(?![\\s\\S]))`, "m"));
  return match ? match[1] : "";
}

test("the demo manifesto's section headings match manifesto-format.md, in order", () => {
  const format = fs.readFileSync(formatPath, "utf8");
  const demo = fs.readFileSync(demoPath, "utf8");
  assert.deepEqual(headingNamesFromManifesto(demo), sectionNamesFromFormat(format));
});

test("the demo manifesto is at stage chosen, direction-version 1", () => {
  const demo = fs.readFileSync(demoPath, "utf8");
  const parsed = parseFrontmatter(demo);
  assert.ok(parsed, "demo manifesto is missing frontmatter");
  assert.equal(parsed.fields.stage, "chosen");
  assert.equal(parsed.fields["direction-version"], "1");
});

test("the demo manifesto's Rejected candidates carries the decoy plus two unsafe candidates naming their provocation", () => {
  const demo = fs.readFileSync(demoPath, "utf8");
  const body = sectionBody(demo, "Rejected candidates");
  const entries = body.split(/\r?\n/).filter((line) => line.trim());
  assert.equal(entries.length, 3, `expected 3 rejected candidates, found ${entries.length}`);
  const decoys = entries.filter((entry) => /\(decoy\)/i.test(entry));
  assert.equal(decoys.length, 1, "expected exactly one entry marked (decoy)");
  for (const entry of entries.filter((entry) => !/\(decoy\)/i.test(entry))) {
    assert.match(entry, /built on the provocation/i, `unsafe entry missing its provocation: ${entry}`);
  }
});

test("the demo manifesto's Debate minutes names a verdict", () => {
  const demo = fs.readFileSync(demoPath, "utf8");
  const body = sectionBody(demo, "Debate minutes");
  assert.match(body, /Verdict:/);
});

test("riot-me's wrapper body is exactly one Skill line calling stance", () => {
  const content = fs.readFileSync(riotMePath, "utf8");
  const parsed = parseFrontmatter(content);
  assert.ok(parsed, "riot-me is missing frontmatter");
  const bodyLines = parsed.body.split(/\r?\n/).filter((line) => line.trim());
  assert.deepEqual(bodyLines, ['Call the Skill tool with "stance".']);
});

test("stance/SKILL.md opens with the riot-canon call and mentions every rung's stage word", () => {
  const content = fs.readFileSync(stancePath, "utf8");
  const parsed = parseFrontmatter(content);
  assert.ok(parsed, "stance is missing frontmatter");
  assert.match(parsed.body.trim(), /^#\s+Stance\r?\n\r?\nCall the Skill tool with "riot-canon"\./);
  for (const stageWord of ["researched", "tasted", "chosen"]) {
    assert.ok(parsed.body.includes(stageWord), `stance/SKILL.md is missing stage word: ${stageWord}`);
  }
});
