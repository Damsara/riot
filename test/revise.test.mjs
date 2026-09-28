import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const riotRevisePath = path.join(root, "skills", "marketing", "riot-revise", "SKILL.md");
const stancePath = path.join(root, "skills", "marketing", "stance", "SKILL.md");
const beforePath = path.join(root, "test", "fixtures", "revise-demo", "manifesto-before.md");
const afterPath = path.join(root, "test", "fixtures", "revise-demo", "manifesto-after.md");

// Same section-list logic as stance.test.mjs: read section headings out of
// the manifesto rather than hardcoding them.
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

test("riot-revise's wrapper body is exactly one Skill line calling stance", () => {
  const content = fs.readFileSync(riotRevisePath, "utf8");
  const parsed = parseFrontmatter(content);
  assert.ok(parsed, "riot-revise is missing frontmatter");
  const bodyLines = parsed.body.split(/\r?\n/).filter((line) => line.trim());
  assert.deepEqual(bodyLines, ['Call the Skill tool with "stance".']);
});

test("stance/SKILL.md has a Revise heading", () => {
  const content = fs.readFileSync(stancePath, "utf8");
  assert.match(content, /^##\s+Revise$/m);
});

test("the revise demo's after-manifesto is at stage chosen, direction-version 2", () => {
  const after = fs.readFileSync(afterPath, "utf8");
  const parsed = parseFrontmatter(after);
  assert.ok(parsed, "after-manifesto is missing frontmatter");
  assert.equal(parsed.fields.stage, "chosen");
  assert.equal(parsed.fields["direction-version"], "2");
});

test("the revise demo's Rejected candidates carries the superseded v1 Direction plus the new decoy and two new unsafe losers", () => {
  const after = fs.readFileSync(afterPath, "utf8");
  const body = sectionBody(after, "Rejected candidates");
  const entries = body.split(/\r?\n/).filter((line) => line.trim());

  // Section 7 is append-only: v1's own rejected candidates stay ahead of the
  // "(v1, superseded)" line, which marks where this revise's pool begins.
  const supersededIndex = entries.findIndex((entry) => /\(v1, superseded\)/i.test(entry));
  assert.notEqual(supersededIndex, -1, "expected an entry marked (v1, superseded)");
  assert.match(entries[supersededIndex], /Round Four/, "the superseded entry must name Round Four");

  const newLosers = entries.slice(supersededIndex + 1);
  assert.equal(newLosers.length, 3, "expected 3 new losers after the superseded marker");

  const decoys = newLosers.filter((entry) => /\(decoy\)/i.test(entry));
  assert.equal(decoys.length, 1, "expected exactly one new loser marked (decoy)");

  const unsafeLosers = newLosers.filter((entry) => !/\(decoy\)/i.test(entry));
  assert.equal(unsafeLosers.length, 2, "expected 2 unsafe new losers");
  for (const entry of unsafeLosers) {
    assert.match(entry, /built on the provocation/i, `unsafe new loser missing its provocation: ${entry}`);
  }
});

test("the revise demo's Debate minutes gains a Sitting 2 alongside Sitting 1, with two verdicts", () => {
  const after = fs.readFileSync(afterPath, "utf8");
  const body = sectionBody(after, "Debate minutes");
  assert.match(body, /Sitting 1/);
  assert.match(body, /Sitting 2/);
  const verdicts = body.match(/Verdict:/g) ?? [];
  assert.equal(verdicts.length, 2, `expected 2 "Verdict:" lines, found ${verdicts.length}`);
});

test("the revise demo's Log section is kept intact from before to after", () => {
  const before = fs.readFileSync(beforePath, "utf8");
  const after = fs.readFileSync(afterPath, "utf8");
  assert.equal(sectionBody(after, "Log"), sectionBody(before, "Log"));
});

test("the revise demo's sections 1 to 4 are byte-identical between before and after", () => {
  const before = fs.readFileSync(beforePath, "utf8");
  const after = fs.readFileSync(afterPath, "utf8");
  for (const heading of ["Product", "Audience and venues", "Category default", "Taste"]) {
    assert.equal(sectionBody(after, heading), sectionBody(before, heading), `section "${heading}" drifted between before and after`);
  }
});

test("the revise demo's before and after manifestos share the same section headings, in order", () => {
  const before = fs.readFileSync(beforePath, "utf8");
  const after = fs.readFileSync(afterPath, "utf8");
  assert.deepEqual(headingNamesFromManifesto(after), headingNamesFromManifesto(before));
});
