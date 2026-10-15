import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { KNOWN_FORMATS, parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skills = path.join(root, "skills/marketing");
const read = (file) => fs.readFileSync(path.join(skills, file), "utf8");
const canon = (name) => read(`riot-canon/references/${name}.md`);

test("every output format has one explicit route to an existing wrapper reference", () => {
  const routes = [...read("piece/SKILL.md").matchAll(/^\| (\w+) \| (riot-[a-z]+) \| (references\/[a-z]+\.md) \|$/gm)];
  assert.deepEqual(routes.map((route) => route[1]).sort(), [...KNOWN_FORMATS].sort());
  for (const [, format, wrapper, reference] of routes) {
    assert.equal(wrapper, `riot-${format}`);
    assert.equal(reference, `references/${format}.md`);
    assert.equal(parseFrontmatter(read(`${wrapper}/SKILL.md`)).fields.name, wrapper);
    assert.ok(read(`${wrapper}/${reference}`).includes("## Format question"));
  }
  assert.match(read("piece/SKILL.md"), /Direct invocation needs no wrapper/);
});

test("the isolated piece critic receives every manifesto section its judgment requires", () => {
  const inputs = canon("cop").split("**Mode: piece.**")[1].split("## What you answer")[0];
  assert.match(inputs, /Direction \(section 5\)/);
  assert.match(inputs, /Rules for pieces \(section 6\)/);
  assert.match(inputs, /intended reader action/);
  assert.match(inputs, /exact draft/);
  assert.match(inputs, /Missing input:/);
  assert.match(read("piece/SKILL.md"), /mode-piece inputs defined in riot-canon's Cop brief/);
});

test("the debate's author selection matches the nine directed objections in the example", () => {
  const stance = read("stance/SKILL.md");
  assert.match(stance, /each of the three unsafe authors receives the other three candidates/);
  assert.match(stance, /decoy author writes none/);
  const objections = fs.readFileSync(path.join(root, "test/fixtures/revise-demo/transcript.md"), "utf8");
  const pairs = [...objections.matchAll(/^### (.+)'s author, on (.+)$/gm)].map((m) => [m[1], m[2]]);
  assert.equal(pairs.length, 9);
  assert.equal(new Set(pairs.map(([author]) => author)).size, 3);
  assert.equal(new Set(pairs.map((pair) => pair.join(" -> "))).size, 9);
  assert.ok(pairs.every(([author, rival]) => author !== rival && !author.includes("Life of the Party")));
});

test("revision refreshes evidence while preserving a recoverable active version", () => {
  const revision = read("stance/SKILL.md").split("## Revise")[1].split("## Exit")[0];
  assert.match(revision, /assess sections 1 to 4 individually/);
  assert.match(revision, /working revision's sections in every pack/);
  const checkpoints = canon("checkpoints");
  assert.match(checkpoints, /save its exact contents to `history\/v<base-version>\.md`/);
  assert.match(checkpoints, /base-version \+ 1/);
  assert.match(checkpoints, /never increment the version again/);
  assert.match(checkpoints, /Cancellation archives the checkpoint and leaves the active manifesto unchanged/);
});

test("resumption preserves partial outputs and router recognizes pending revisions", () => {
  const checkpoints = canon("checkpoints");
  assert.match(checkpoints, /next-step: product \| research \| taste \| candidates \| debate \| choose \| commit/);
  assert.match(checkpoints, /skip saved work on resume and request only missing outputs/);
  assert.match(checkpoints, /Save `next-step: commit` before replacing the manifesto/);
  assert.match(read("ask-riot/SKILL.md"), /pending checkpoint takes precedence/);
  assert.match(read("piece/SKILL.md"), /revision is pending, finish or cancel it before drafting/);
});

test("selection supports the baseline and confirmed merges without fixed loser counts", () => {
  const stance = read("stance/SKILL.md");
  assert.match(stance, /keep the baseline selectable/);
  assert.match(stance, /For a merge, write one coherent Direction/);
  assert.match(stance, /get the builder's confirmation before committing/);
  assert.match(stance, /source candidates as incorporated, not rejected/);
  assert.doesNotMatch(stance, /Section 7 carries the three candidates not chosen/);
});

test("final validation follows creative review and precedes persistence", () => {
  const piece = read("piece/SKILL.md");
  const steps = [...piece.matchAll(/^\d+\. \*\*(Cop read|Validate|Write)\*\*/gm)].map((m) => m[1]);
  assert.deepEqual(steps, ["Cop read", "Validate", "Write"]);
  const checks = canon("final-check");
  assert.match(checks, /every factual product, competitor, metric, quotation, or first-person experience claim/);
  assert.match(checks, /An `unverified` marker is a research gap/);
  assert.match(checks, /character counts per post/);
  assert.match(checks, /validation-status: ready.*all applicable checks pass/);
  assert.match(checks, /validation-status: blocked/);
});

test("review records distinguish corrected drafts and unknown legacy validation", () => {
  const schema = canon("manifesto-format");
  assert.match(schema, /exact Cop-reviewed draft and verdict, post-review edits/);
  assert.match(schema, /validation status is unknown, never inferred ready/);
  assert.match(schema, /adding a numeric suffix when either that piece or its companion review already exists/);
  assert.match(schema, /identified by its piece path and is appended once/);
  assert.match(schema, /metric or observation, time window, source/);
});

test("all format references defer changing platform rules to primary-source checks", () => {
  for (const format of KNOWN_FORMATS) {
    const reference = read(`riot-${format}/references/${format}.md`);
    assert.match(reference, /official requirements, editorial preferences, and unverified heuristics/);
    assert.match(reference, /final-check\.md/);
  }
  assert.match(canon("final-check"), /current primary sources at use time/);
  assert.match(read("riot-launch/references/launch.md"), /working hosted demo or runnable repository/);
  assert.doesNotMatch(read("riot-launch/references/launch.md"), /link the repo, not a landing page/);
});

test("all reference revisions use one canon stamp", () => {
  const stamps = [];
  for (const skill of fs.readdirSync(skills)) {
    const dir = path.join(skills, skill, "references");
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir).filter((name) => name.endsWith(".md"))) {
      stamps.push(fs.readFileSync(path.join(dir, name), "utf8").split("\n")[0]);
    }
  }
  assert.ok(stamps.length > 0);
  assert.equal(new Set(stamps).size, 1);
});

test("a send-back replaces the active pool without discarding its history", () => {
  const checkpoints = canon("checkpoints");
  assert.match(checkpoints, /archive the current candidate pool, objections, verdict and builder feedback/);
  assert.match(checkpoints, /increment `send-backs`, clear the active pool and debate outputs/);
  assert.match(checkpoints, /never silently start another pool/);
});

test("saved steps cannot bypass incomplete debate or commit prerequisites", () => {
  const checkpoints = canon("checkpoints");
  assert.match(checkpoints, /Treat `next-step` as a hint/);
  assert.match(checkpoints, /unique author\/rival objection pairs and Cop verdict/);
  assert.match(checkpoints, /choose checkpoint with seven objections resumes debate/);
  assert.match(read("ask-riot/SKILL.md"), /earliest unfinished step rather than blindly repeating/);
});

test("human-authorship venues branch before generating submission copy", () => {
  const piece = read("piece/SKILL.md");
  const preflight = piece.indexOf("Run the authorship preflight");
  assert.ok(preflight > 0 && preflight < piece.indexOf("3. **First draft**"));
  assert.match(canon("final-check"), /cop-verdict: not-run \(human authorship required\)/);
  assert.match(canon("final-check"), /Do not treat human approval of generated text as human authorship/);
  assert.match(read("riot-launch/references/launch.md"), /prohibit generated post text and generated or AI-edited comments/);
});

test("artifact recovery distinguishes new drafts, resumes and orphan reviews", () => {
  const schema = canon("manifesto-format");
  assert.match(schema, /either that piece or its companion review already exists/);
  assert.match(schema, /On an explicit resume, use the supplied saved path/);
  assert.match(schema, /ask which operation is intended before writing/);
});
