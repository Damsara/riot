import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = path.join(root, "skills", "marketing");
const videoDemoDir = path.join(root, "test", "fixtures", "video-demo");
const launchDemoDir = path.join(root, "test", "fixtures", "launch-demo");

function skillBody(name) {
  const content = fs.readFileSync(path.join(skillsDir, name, "SKILL.md"), "utf8");
  return parseFrontmatter(content)?.body ?? "";
}

function logLines(content) {
  const section = content.split(/^## 9\. Log$/m)[1] ?? "";
  return section.split(/\r?\n/).filter((line) => line.trim().startsWith("-"));
}

for (const name of ["riot-video", "riot-launch"]) {
  test(`${name}'s body is exactly one Skill tool call to piece`, () => {
    const lines = skillBody(name)
      .split(/\r?\n/)
      .filter((line) => line.trim());
    assert.equal(lines.length, 1);
    assert.equal(lines[0].trim(), 'Call the Skill tool with "piece".');
  });
}

test("riot-video carries exactly one reference file, references/video.md, with the canon stamp", () => {
  const referencesDir = path.join(skillsDir, "riot-video", "references");
  const files = fs.readdirSync(referencesDir);
  assert.deepEqual(files, ["video.md"]);
  const firstLine = fs.readFileSync(path.join(referencesDir, "video.md"), "utf8").split(/\r?\n/)[0];
  assert.equal(firstLine, "> canon-version: 2026-09");
});

test("riot-launch carries exactly one reference file, references/launch.md, with the canon stamp", () => {
  const referencesDir = path.join(skillsDir, "riot-launch", "references");
  const files = fs.readdirSync(referencesDir);
  assert.deepEqual(files, ["launch.md"]);
  const firstLine = fs.readFileSync(path.join(referencesDir, "launch.md"), "utf8").split(/\r?\n/)[0];
  assert.equal(firstLine, "> canon-version: 2026-09");
});

test("the video demo piece contains a table with the three shot-column names", () => {
  const content = fs.readFileSync(path.join(videoDemoDir, "2026-09-28-video-feature-launch.md"), "utf8");
  assert.match(content, /On screen/);
  assert.match(content, /Said aloud/);
  assert.match(content, /Seconds/);
});

test("the launch demo transcript contains a venue-check record with at least one rewritten row", () => {
  const content = fs.readFileSync(path.join(launchDemoDir, "transcript.md"), "utf8");
  assert.match(content, /Venue: Show HN/);
  assert.match(content, /Rule: /);
  assert.match(content, /Line checked: /);
  assert.match(content, /Result: rewritten to/);
});

for (const [demoDir, fileName] of [
  [videoDemoDir, "2026-09-28-video-feature-launch.md"],
  [launchDemoDir, "2026-09-28-launch-show-hn.md"],
]) {
  test(`the demo piece ${fileName} carries the four header fields`, () => {
    const content = fs.readFileSync(path.join(demoDir, fileName), "utf8");
    const parsed = parseFrontmatter(content);
    assert.ok(parsed, `${fileName} is missing frontmatter`);
    for (const key of ["format", "occasion", "direction-version", "cop-verdict"]) {
      assert.ok(parsed.fields[key], `${fileName} is missing frontmatter key: ${key}`);
    }
  });
}

test("video-demo manifesto-after.md's Log has exactly one more line than the fixture's, and it logs a video at v1", () => {
  const before = logLines(fs.readFileSync(path.join(root, "test", "fixtures", "manifesto.md"), "utf8"));
  const after = logLines(fs.readFileSync(path.join(videoDemoDir, "manifesto-after.md"), "utf8"));
  assert.equal(after.length, before.length + 1, "manifesto-after.md must log exactly one more piece");
  const newLine = after[after.length - 1];
  assert.match(newLine, /\bvideo\b/);
  assert.match(newLine, /\bv1\b/);
});

test("launch-demo manifesto-after.md's Log has exactly one more line than the fixture's, and it logs a launch at v1", () => {
  const before = logLines(fs.readFileSync(path.join(root, "test", "fixtures", "manifesto.md"), "utf8"));
  const after = logLines(fs.readFileSync(path.join(launchDemoDir, "manifesto-after.md"), "utf8"));
  assert.equal(after.length, before.length + 1, "manifesto-after.md must log exactly one more piece");
  const newLine = after[after.length - 1];
  assert.match(newLine, /\blaunch\b/);
  assert.match(newLine, /\bv1\b/);
});
