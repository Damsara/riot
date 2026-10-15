> canon-version: 2026-10
> The manifesto file format: frontmatter, the nine sections, the log line, and the piece file header. The only place these are defined.

# Manifesto format

`<docs home>/manifesto.md`, docs home defaulting to `docs/riot`. Frontmatter:

```
---
product: <slug>
stage: none | researched | tasted | chosen
docs-home: docs/riot
direction-version: <n>
---
```

Sections, in this order:

1. **Product**: one paragraph, from the repo, corrected by the builder. Written by the chair at stance rung 1.
2. **Audience and venues**: who it is for, where they gather, cited; includes verbatim audience complaints with URLs. Written by the audience research sub-agent at stance rung 2.
3. **Category default**: the banned list. What every competitor says, the tone they share, the formats they use, the words they overuse; five to eight competitors, cited, or `unverified` at the top. Written by the category research sub-agent at stance rung 2.
4. **Taste**: the builder's love / hate / nothing reactions with their one-line why, verbatim; the builder's own phrases (the bar description, the origin story, what annoys them about the category), verbatim. Written from the builder's answers at stance rung 3.
5. **Direction**: the chosen candidate. Name; enemy; kind of unsafe (derived); the recurring move; three things it can say that competitors cannot; what it is willing to lose (which readers, which kind of comment); the provocation and finding it was built on; intended audience action, success signal, and review point. Written by the chair at stance rung 7, from the debate and the builder's choice.
6. **Rules for pieces**: one strong opinion per piece; the recurring move appears; at least one of the three things competitors cannot say is the spine; the language reflects the builder's voice without compulsory phrase repetition; the banned list is checked; unslop runs; the Cop is the last creative review, followed by final validation; the practical line. Written by the chair at stance rung 7, from the choice and section 4.
7. **Rejected candidates**: each with the provocation it was built on and one line on why it lost. Superseded directions land here on revise, with their version number. Written by the chair at stance rung 6, and again on revise.
8. **Debate minutes**: per sitting, the nine objections and the Cop's verdict. Written by the chair during stance rung 5.
9. **Log**: one line per piece: date, format, occasion, direction version, the Cop's verdict, and an optional `result:` sentence the builder adds by hand. Includes links to the piece and review record, intended outcome, and validation status. Written by the piece discipline at completion; `result:` added later, by hand.

The manifesto is append-only in spirit. A revise adds a new Direction with the next version number and moves the old one to Rejected; history is never edited.

Log line shape (section 9), one per piece:

```
- <date> · <format> · <occasion> · v<direction-version> · Cop: <verdict> · piece: <relative link> · review: <relative link> · outcome: <action and signal> · validation: <ready | blocked> [· result: <metric or observation, time window, source>]
```

Piece file header shape, at the top of every file in `docs/riot/pieces/`:

```
---
format: <article | post | thread | video | launch>
occasion: <one line>
direction-version: <n>
cop-verdict: <one line, referring to the reviewed draft>
validation-status: ready | blocked
---
```

## Piece files and review record

New pieces use `<docs home>/pieces/<date>-<format>-<slug>.md`. Reserve a unique path, adding a numeric suffix when either that piece or its companion review already exists; update an existing piece only when explicitly revising that piece. Store its review at the same stem with `.review.md` instead of `.md`. The review contains the intended reader action and success signal, voice cue and repetition assessment, exact Cop-reviewed draft and verdict, post-review edits, claim evidence, platform checks with sources and checked dates, and final status with any unresolved checks. A log entry is identified by its piece path and is appended once. On an explicit resume, use the supplied saved path or an unambiguous unfinished review record instead of reserving a new path. If a slug alone could mean either new work or resumption, ask which operation is intended before writing. Preserve the existing pair while resolving that ambiguity.

Legacy pieces with the original four header fields and logs without links remain readable; their validation status is unknown, never inferred ready. Add current fields only when revalidating or revising them. Legacy directions gain an outcome and review point when next used, using the builder's supplied goal or an explicitly recorded assumption.

For legacy Rules for pieces, retain product-specific voice and creative choices, but apply the current canon's operational rules for evidence, review inputs and final validation. Record any conflict in the review instead of silently treating an old no-edit rule as a waiver of factual checks.
