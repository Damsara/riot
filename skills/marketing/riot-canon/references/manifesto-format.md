> canon-version: 2026-09
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
5. **Direction**: the chosen candidate. Name; enemy; kind of unsafe (derived); the recurring move; three things it can say that competitors cannot; what it is willing to lose (which readers, which kind of comment); the provocation and finding it was built on. Written by the chair at stance rung 7, from the debate and the builder's choice.
6. **Rules for pieces**: one strong opinion per piece; the recurring move appears; at least one of the three things competitors cannot say is the spine; at least one of the builder's phrases from section 4 is reused; the banned list is checked; unslop runs; no smoothing pass after the Cop's read; the practical line. Written by the chair at stance rung 7, from the choice and section 4.
7. **Rejected candidates**: each with the provocation it was built on and one line on why it lost. Superseded directions land here on revise, with their version number. Written by the chair at stance rung 6, and again on revise.
8. **Debate minutes**: per sitting, the nine objections and the Cop's verdict. Written by the chair during stance rung 5.
9. **Log**: one line per piece: date, format, occasion, direction version, the Cop's verdict, and an optional `result:` sentence the builder adds by hand. Written by the piece discipline at its step 8; `result:` added later, by hand.

The manifesto is append-only in spirit. A revise adds a new Direction with the next version number and moves the old one to Rejected; history is never edited.

Log line shape (section 9), one per piece:

```
- <date> · <format> · <occasion> · v<direction-version> · Cop: <verdict> [· result: <sentence>]
```

Piece file header shape, at the top of every file in `docs/riot/pieces/`:

```
---
format: <article | post | thread | video | launch>
occasion: <one line>
direction-version: <n>
cop-verdict: <one line>
---
```
