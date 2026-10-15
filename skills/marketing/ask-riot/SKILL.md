---
name: ask-riot
description: "Not sure where you are with a product's marketing? Reads the manifesto and names the next command."
disable-model-invocation: true
---

# Ask Riot

Find every `manifesto.md` under the docs home (default `docs/riot`; a manifesto's `docs-home:` line overrides). For each, read its `stage` and any adjacent `checkpoint.md`, and say where that product stands. Name exactly one command per product and offer to run it; with several products, ask which one first.

## By stage
- A pending checkpoint takes precedence: inspect its saved outputs using the Resume validation rules in riot-canon's checkpoints.md reference. Recommend `/riot-revise` for a revision or `/riot-me` for a kickoff, naming the earliest unfinished step rather than blindly repeating `next-step`.
- No manifesto, or stage `none`, `researched`, or `tasted`: the kickoff is not done or is mid-way; `/riot-me` resumes from the manifesto.
- Stage `chosen`: ask one question, "What is the occasion?"
  - A launch on a named venue: `/riot-launch`.
  - A feature, a rant, or a reply: `/riot-post` by default, `/riot-thread` when the builder has more than one beat, `/riot-article` when they want to make an argument at length, `/riot-video` when they will be on camera or recording the screen.
  - "The pieces have gone flat" or "the product changed": `/riot-revise`.

## Confusable pairs
- `/riot-revise` vs `/riot-me`: revise refreshes changed evidence and argues new directions; `/riot-me` starts or resumes a kickoff.
- `/riot-post` vs `/riot-thread`: one idea in one post, or one idea in several beats.
- `/riot-launch` vs `/riot-post`: launch is checked against a venue's rules; a post is not.
