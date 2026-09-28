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

### Utilities

| Skill | Use it for |
|---|---|
| [`/ask-riot`](./skills/marketing/ask-riot/SKILL.md) | Not sure where you are with a product's marketing? Reads the manifesto and names the next command. |

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
| [`/riot-article`](./skills/marketing/riot-article/SKILL.md) | Long-form for dev.to, Medium, Hashnode, or your own blog, written from the manifesto and read by the Cop. |
| [`/riot-thread`](./skills/marketing/riot-thread/SKILL.md) | A thread or carousel (X, LinkedIn), hook first, one beat per line, written from the manifesto and read by the Cop. |
| [`/riot-video`](./skills/marketing/riot-video/SKILL.md) | A video script with a shot column (on screen, said aloud, duration), written from the manifesto and read by the Cop. |
| [`/riot-launch`](./skills/marketing/riot-launch/SKILL.md) | A launch post for one named venue (Product Hunt, Show HN, a subreddit, Indie Hackers), checked against the venue's rules and read by the Cop. |
| [`piece`](./skills/marketing/piece/SKILL.md) | Auto-fires from any format wrapper to run the loop: draft, banned-list pass, unslop, the Cop's read. |

### When pieces go flat

| Skill | Use it for |
|---|---|
| [`/riot-revise`](./skills/marketing/riot-revise/SKILL.md) | Reopen the manifesto when pieces have gone flat or the product changed: demote the current direction, argue four new candidates, choose again. |

## Develop this repository

```bash
pnpm install --frozen-lockfile
pnpm validate
pnpm test
pnpm package:check
```

## License

MIT
