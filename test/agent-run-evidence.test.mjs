import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

// These checks inspect retained outputs of real agent runs. They do not invoke
// a model or turn archived responses into a claim of repeatable model behavior.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../examples/agent-runs/artifacts/evidence");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

test("real run corrected the final overlong text, preserving the reviewed draft", () => {
  const before = read("final-count/reviewed-draft.txt");
  const expanded = read("final-count/post-review-expanded.txt");
  const final = read("final-count/final.txt");
  for (const s of [before, expanded, final]) assert.match(s, /^[\x00-\x7f]*$/);
  assert.ok(expanded.trim().length > 180);
  assert.ok(final.trim().length <= 180);
  assert.equal(final, before);
});

test("real run preserved legacy bytes and made repeated resume idempotent", () => {
  assert.equal(read("persistence/before/legacy.md"), read("persistence/docs/riot/pieces/2026-10-15-post-old.md"));
  assert.equal(read("persistence/after-resume/manifesto.md"), read("persistence/after-second-resume/manifesto.md"));
  const manifest = read("persistence/docs/riot/manifesto.md");
  const pieces = [...manifest.matchAll(/piece: \[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  assert.equal(pieces.length, 2);
  assert.equal(new Set(pieces).size, 2);
  for (const file of pieces) {
    assert.ok(fs.existsSync(path.join(root, "persistence/docs/riot", file)));
    assert.ok(fs.existsSync(path.join(root, "persistence/docs/riot", file.replace(/\.md$/, ".review.md"))));
  }
});

test("real HN retest emitted a blocked human-authorship handoff", () => {
  const artifact = parseFrontmatter(read("hn-rerun/docs/riot/pieces/2026-10-16-launch-hosted-demo.md"));
  assert.equal(artifact.fields["validation-status"], "blocked");
  assert.equal(artifact.fields["cop-verdict"], "not-run (human authorship required)");
  assert.match(artifact.body, /^# Internal planning handoff/m);
});

test("real partial-pack Cop run refused to infer the missing direction", () => {
  assert.match(read("cop/partial-pack-prompt.txt"), /4\. Taste/);
  const response = read("cop/partial-pack-response.txt");
  assert.match(response, /^Missing input: active Direction \(section 5\), Rules for pieces \(section 6\)/);
  assert.doesNotMatch(response, /Verdict:/);
});

const stateRoot = path.resolve(root, "../../state/artifacts");
const state = (p) => fs.readFileSync(path.join(stateRoot, p), "utf8");

test("real revision preserved v1 and recovery did not advance v2 again", () => {
  assert.equal(state("revision-commit/00-manifesto-before.md"), state("revision-commit/docs/riot/history/v1.md"));
  const after = state("revision-commit/docs/riot/manifesto.md");
  assert.equal(after, state("revision-commit/20-manifesto-after-replacement-before-crash.md"));
  assert.equal(parseFrontmatter(after).fields["direction-version"], "2");
  assert.equal(state("revision-cancel/00-manifesto-before.md"), state("revision-cancel/docs/riot/manifesto.md"));
  const log = (text) => text.split("## 9. Log")[1];
  assert.equal(log(after), log(state("revision-commit/00-manifesto-before.md")));
});

test("real merge and safe choice retain the intended selected/rejected distinction", () => {
  const merge = state("merge/docs/riot/manifesto.md");
  assert.match(merge, /Source candidates: Round Four and The Grandfather Clause, incorporated/);
  const rejected = merge.split("## 7. Rejected candidates")[1].split("## 8.")[0];
  assert.match(rejected, /The Life of the Party \(decoy, safe baseline\)/);
  assert.match(rejected, /The Sober Friend/);
  assert.match(rejected, /incorporated as source candidates.*not rejected/);
  const baseline = state("baseline/docs/riot/manifesto.md");
  assert.match(baseline.split("## 5. Direction")[1].split("## 6.")[0], /The Life of the Party/);
  assert.doesNotMatch(baseline.split("## 7. Rejected candidates")[1].split("## 8.")[0], /The Life of the Party/);
});

const pieceRoot = path.resolve(root, "../../piece");
test("real positive draft uses executed demo output and fits its checked target", () => {
  const load = (p) => fs.readFileSync(path.join(pieceRoot, p), "utf8");
  const artifact = parseFrontmatter(load("direct/docs/riot/pieces/2026-10-16-post-direct.md"));
  assert.equal(artifact.fields["validation-status"], "ready");
  assert.match(artifact.body, /^[\x00-\x7f]*$/);
  assert.ok(artifact.body.trim().length <= 280);
  assert.ok(artifact.body.includes(load("direct/demo-output.txt").trim()));
  assert.match(artifact.body, /demo simulates/);
  for (const scenario of ["never-repeats", "testimonial", "first-person", "repetition-outcome"]) {
    const draft = parseFrontmatter(load(`${scenario}/docs/riot/pieces/2026-10-16-post-${scenario}.md`));
    assert.equal(draft.fields["validation-status"], "blocked");
    assert.doesNotMatch(draft.body, /never repeats|saved me ten hours|got promoted/i);
  }
});
