import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const copPath = path.join(root, "skills", "marketing", "riot-canon", "references", "cop.md");
const provocationsPath = path.join(root, "skills", "marketing", "riot-canon", "references", "provocations.md");
const fixturesDir = path.join(root, "test", "fixtures", "cop-dry-run");
const DECOY_LINE = "the safest, most competent direction a good agency would sell";

test("cop.md names both modes and carries both fenced output shapes", () => {
  const content = fs.readFileSync(copPath, "utf8");
  assert.match(content, /Mode: debate/);
  assert.match(content, /Mode: piece/);
  const fencedBlocks = [...content.matchAll(/```\n([\s\S]*?)```/g)].map((match) => match[1]);
  assert.equal(fencedBlocks.length, 2, "expected exactly two fenced output shapes");
  assert.match(fencedBlocks[0], /Verdict:/);
  assert.match(fencedBlocks[1], /Verdict:/);
});

test("provocations.md has at least ten H3 seeds and the decoy line verbatim", () => {
  const content = fs.readFileSync(provocationsPath, "utf8");
  const seeds = content.match(/^###\s+.+$/gm) ?? [];
  assert.ok(seeds.length >= 10, `expected at least 10 H3 seeds, found ${seeds.length}`);
  assert.ok(content.includes(DECOY_LINE), "decoy line must appear verbatim");
});

function candidateNames() {
  const content = fs.readFileSync(path.join(fixturesDir, "candidates.md"), "utf8");
  return [...content.matchAll(/^Name:\s*(.+?)\.\s*$/gm)].map((match) => match[1]);
}

test("the dry-run debate verdict names a scroll-past, a stop-on, and at least one candidate", () => {
  const verdict = fs.readFileSync(path.join(fixturesDir, "verdict.md"), "utf8");
  assert.match(verdict, /Verdict:/);
  const names = candidateNames();
  assert.ok(names.length > 0, "candidates.md must carry at least one Name: line");
  assert.ok(names.some((name) => verdict.includes(name)), "verdict.md must mention at least one candidate name from candidates.md");
});
