# riot-skills

## 0.1.0

Tooling (installer, validator, CI, changesets) adapted from napkin (https://github.com/Damsara/napkin).

- Add riot-canon: the manifesto format, rounds, the pack, fan-out and fallback, the bundled unslop pass, and launch venue rules that every riot discipline reads.
- Add stance (the ladder from a product to a chosen marketing direction) and `/riot-me`, its kickoff wrapper.
- Add the Cop's brief (`references/cop.md`) and the provocation seed list (`references/provocations.md`) to riot-canon, plus a dry run against a real product proving both shapes.
- Add `piece`, the discipline that turns a chosen manifesto into one unit of content (draft, banned-list pass, positive check, unslop, the Cop's read, write and log), and `/riot-post`, the wrapper for one short post on X, LinkedIn, Bluesky, or Threads.
- Add `/riot-article`, the wrapper for a long-form article on dev.to, Medium, Hashnode, or a self-hosted blog, and `/riot-thread`, the wrapper for a thread on X or a carousel on LinkedIn.
- Add `/riot-video` (a shot-column script for YouTube long-form, Shorts, TikTok, or Reels) and `/riot-launch` (a launch post for one named venue, checked row by row against riot-canon's venue rules), both written from the manifesto and read by the Cop.
- Add `/riot-revise`, the wrapper that reopens a manifesto once its pieces go flat or the product changes: it calls stance's Revise section to demote the current direction, argue four new candidates, and choose again.
- Add `/ask-riot`, the router that reads a product's manifesto and names the next command: `/riot-me` to resume the kickoff, `/riot-post`, `/riot-thread`, `/riot-article`, `/riot-video`, or `/riot-launch` for the next piece, `/riot-revise` once pieces have gone flat.
