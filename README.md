# riot

Marketing skills for coding agents. Reads a product, argues four directions against each other, writes a manifesto, then writes pieces that sound like the builder and unlike the category.

## Install

Two ways in, pick one.

**Claude Code plugin** (managed, auto-updating):

```bash
/plugin marketplace add Damsara/riot
/plugin install riot-skills@riot
```

**skills.sh** (editable copies; Claude Code, Cursor, Codex, Copilot and others):

```bash
npx riot-skills
```

## Which skill do I use?

### Rules underneath

| Skill | Use it for |
|---|---|
| [`riot-canon`](./skills/marketing/riot-canon/SKILL.md) | The shared rules every riot discipline reads: manifesto format, rounds, the pack, fallback, unslop, venues. |

### Starting from a product

| Skill | Use it for |
|---|---|
| [`/riot-me`](./skills/marketing/riot-me/SKILL.md) | Take a product to a marketing manifesto: read, research, taste, four directions argued, one chosen. |
| [`stance`](./skills/marketing/stance/SKILL.md) | Auto-fires during `/riot-me` to run the ladder: research, taste, debate, choose. |

### Writing a piece

| Skill | Use it for |
|---|---|
| [`/riot-post`](./skills/marketing/riot-post/SKILL.md) | One short post (X, LinkedIn, Bluesky, Threads) written from the manifesto and read by the Cop. |
| [`piece`](./skills/marketing/piece/SKILL.md) | Auto-fires from any format wrapper to run the loop: draft, banned-list pass, unslop, the Cop's read. |

## Develop this repository

```bash
pnpm install --frozen-lockfile
pnpm validate
pnpm test
pnpm package:check
```

## License

MIT
