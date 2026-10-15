---
name: riot-canon
description: riot's shared rules. Use whenever a riot discipline runs, or when reading or writing a riot manifesto or a piece.
---

# riot canon

## The manifesto

Find `<docs home>/manifesto.md` (docs home defaults to `docs/riot`; the manifesto's own `docs-home:` line overrides it). Read it before anything else, then follow [checkpoints.md](references/checkpoints.md) to resume from the saved next step. No manifesto means a new product: create one at `stage: none` with the format in [manifesto-format.md](references/manifesto-format.md), and tell the builder the path. Append within a session; supersede a direction with a new one rather than editing history.

## Rounds

A **round** is every question whose prerequisites are settled, asked together, one per message, at most **five**. During manifesto-building rounds, ask a question only if its answer changes a line in the manifesto. Piece-specific format, evidence and outcome questions follow the piece workflow. Ask about the past ("the last time that happened") rather than the future. Look up what the repo or the web can answer first; dispatch a sub-agent for it where the harness has them.

Use answers the builder already supplied; ask again only when they conflict or leave a consequential ambiguity. Where the answer is a judgement call you can draft yourself, state the draft and ask the builder to confirm or correct it:

```
❓ Q1 · <title>: <question>
➡️ <your draft, one to three sentences>
```

Otherwise offer two to four options with your pick marked, plus "not sure, you pick":

```
❓ Q2 · <title>: <question>
a) <option> (pick)
b) <option>
c) not sure, you pick
```

Story questions (the origin, the bar description, what annoys the builder about the category) are asked open, with no options and no draft. "Not sure" takes your pick: log it under Open questions in section 8 as assumed, not decided. A builder's question gets answered, then the original question is asked again in plainer words.

## The pack

When a sub-agent is dispatched, it receives manifesto sections 1 to 4 plus a one-paragraph state summary you write. It receives nothing from the conversation.

## Fan-out and fallback

Dispatch sub-agents with the words "dispatch a sub-agent" and the pack, one job each. Where the harness has no sub-agents, run the same prompts one after another in this context, in the order given, and write `sequential` into the manifesto's Debate minutes for that sitting. Where there is no web access, write `unverified` at the top of any research and carry that mark into every citation of it. Each research sub-agent has a search budget of about sixty searches; when it runs out, it writes what it has and lists what it could not find under a Gaps heading rather than filling the gap. Before dispatch, the builder may paste competitor URLs, audience threads, or reviews; these go into the pack as primary material.

## Budgets

Two fan-outs per stance run (research, candidates); two relayed debate rounds; about twenty minutes of the builder's attention, most of it in taste and choosing.

## Words

The concepts riot thinks with are defined in [leading-words.md](references/leading-words.md). Use the word, in the manifesto and in your own reasoning, and say what it means in plain words to the builder.

## The practical line

No false claims about the product, no fabricated reviews or testimonials or press quotes, no attacks on private individuals. This is a practical rule, not a taste judgement: those three things get a builder banned from the venues the research just found.

## Where each reference lives

- The manifesto file format: [manifesto-format.md](references/manifesto-format.md)
- riot's leading words: [leading-words.md](references/leading-words.md)
- The bundled unslop pass: [unslop.md](references/unslop.md)
- Launch venue rules: [venues.md](references/venues.md)
- The Cop's brief: [cop.md](references/cop.md)
- The provocation seed list: [provocations.md](references/provocations.md)
- Session recovery and revision: [checkpoints.md](references/checkpoints.md)
- Final evidence and format validation: [final-check.md](references/final-check.md)
