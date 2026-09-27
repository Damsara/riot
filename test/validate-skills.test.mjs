import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateRepository } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

// A minimal tree that satisfies every validateRepository check on its own:
// one wrapper skill (riot-post) carrying its one references/post.md.
function makeFixture(fixtureName) {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), `riot-validate-${fixtureName}-`));

  writeFile(
    path.join(fixtureRoot, "package.json"),
    JSON.stringify(
      {
        name: "riot-skills",
        version: "0.1.0",
        packageManager: "pnpm@10.28.1",
        scripts: { validate: "node scripts/validate-skills.mjs", test: "node --test", "package:check": "true" },
      },
      null,
      2
    )
  );
  writeFile(path.join(fixtureRoot, "pnpm-lock.yaml"), "lockfileVersion: '9.0'\n");
  writeFile(path.join(fixtureRoot, "CHANGELOG.md"), "# riot-skills\n\n## 0.1.0\n\nFixture release.\n");
  writeFile(
    path.join(fixtureRoot, ".claude-plugin", "plugin.json"),
    JSON.stringify({ name: "riot-skills", version: "0.1.0", skills: ["./skills/marketing/riot-post"] }, null, 2)
  );
  writeFile(path.join(fixtureRoot, "README.md"), "# riot\n\n[riot-post](./skills/marketing/riot-post/SKILL.md)\n");
  writeFile(
    path.join(fixtureRoot, "skills", "marketing", "riot-post", "SKILL.md"),
    '---\nname: riot-post\ndescription: Write one short post for the manifesto direction.\ndisable-model-invocation: true\n---\nCall the Skill tool with "piece".\n'
  );
  writeFile(
    path.join(fixtureRoot, "skills", "marketing", "riot-post", "agents", "openai.yaml"),
    'interface:\n  display_name: "Riot post"\n  short_description: "Write a short post"\npolicy:\n  allow_implicit_invocation: false\n'
  );
  writeFile(
    path.join(fixtureRoot, "skills", "marketing", "riot-post", "references", "post.md"),
    "> canon-version: 2026-09\nRules for one short post: length band, hook position, what the platform punishes.\n"
  );

  return fixtureRoot;
}

test("a non-canon skill with references/post.md passes", () => {
  const fixtureRoot = makeFixture("post-passes");
  assert.deepEqual(validateRepository(fixtureRoot), []);
});

test("a wrapper with five Skill lines fails", () => {
  const fixtureRoot = makeFixture("five-lines");
  writeFile(
    path.join(fixtureRoot, "skills", "marketing", "riot-post", "SKILL.md"),
    '---\nname: riot-post\ndescription: Write one short post for the manifesto direction.\ndisable-model-invocation: true\n---\n' +
      'Call the Skill tool with "piece".\n'.repeat(5)
  );
  const errors = validateRepository(fixtureRoot);
  assert.ok(errors.some((error) => /maximum is 4/.test(error)), errors.join("\n"));
});

test("an em dash in a reference fails", () => {
  const fixtureRoot = makeFixture("em-dash");
  writeFile(
    path.join(fixtureRoot, "skills", "marketing", "riot-post", "references", "post.md"),
    "> canon-version: 2026-09\nRules for one short post, hook first \u2014 then the beat.\n"
  );
  const errors = validateRepository(fixtureRoot);
  assert.ok(errors.some((error) => /contains an em-dash/.test(error)), errors.join("\n"));
});

test("sync-plugin-version --check exits non-zero on a marketplace.json version mismatch", () => {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "riot-sync-mismatch-"));
  writeFile(path.join(fixtureRoot, "package.json"), JSON.stringify({ name: "riot-skills", version: "0.2.0" }, null, 2));
  writeFile(path.join(fixtureRoot, ".claude-plugin", "plugin.json"), JSON.stringify({ name: "riot-skills", version: "0.2.0" }, null, 2));
  writeFile(
    path.join(fixtureRoot, ".claude-plugin", "marketplace.json"),
    JSON.stringify({ name: "riot", plugins: [{ name: "riot-skills", source: "./", version: "0.1.0" }] }, null, 2)
  );
  fs.cpSync(path.join(root, "scripts", "sync-plugin-version.mjs"), path.join(fixtureRoot, "scripts", "sync-plugin-version.mjs"));

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "sync-plugin-version.mjs"), "--check"], {
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
});
