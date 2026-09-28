> canon-version: 2026-09
> The bundled unslop pass. Run this on every draft before it ships; riot carries its own copy so the step never depends on an installed skill.

# unslop

## The pass

1. Read the draft once, start to finish, without editing.
2. Scan line by line against the tells below. Mark every hit.
3. Rewrite each hit in place. Keep the meaning and the author's intended tone; do not soften an opinion while fixing a tell.
4. Check rhythm: read it aloud in your head. If every sentence runs the same length, break some up and let others run long.
5. Check for missing soul: does it read like a person with an opinion, or a summary that lists facts? Add a reaction where one is missing, in the author's voice.
6. Self-audit: ask "what makes this obviously AI generated?" Fix whatever answer comes up, even off this list.
7. Confirm nothing under "what not to touch" got smoothed over in steps 3 to 6. Revert anything that did.

## Tells

Banned words: delve, crucial, pivotal, testament, tapestry, landscape (abstract), showcase, underscore, vibrant, intricate, foster/fostering, leverage, utilize, robust, seamless, additionally, garner, enhance, enduring. Test: swap in "use", "help", "many", or "is"; if the meaning survives, it's a banned word.

Abstract jargon nouns: substrate, wedge, vector, locus, vantage, nexus, primitive (as noun), harness (as metaphor), surface (as in "API surface"), bedrock, scaffolding (as metaphor), modality, paradigm, gold-plating, ratchet (as metaphor), evacuate (for moving code), endgame, north star, flywheel. Test: does the word name a real, concrete thing, or just gesture at one? Replace a gesture.

Fancy "is": serves as, stands as, boasts, features. Test: swap in plain "is" or "has"; it always still works.

"Not just X, but Y." Test: delete "not just X, but"; if the point survives on Y alone, cut the frame.

Rule of three. Test: count the list. Use the real number, not a forced three.

Synonym cycling. Test: does the same thing get a new name every mention in one paragraph? Pick one name, repeat it.

False ranges. Test: "from X to Y" where X and Y aren't points on one real scale. List them as two examples instead.

Vague attribution. Test: "experts say" or "reports suggest" with no name. Name the source or cut the sentence.

Puffery and formulaic arcs: "pivotal moment", "testament to", "despite challenges, continues to thrive". Test: would the sentence read the same in any other piece about anything? Cut it, or replace it with the specific fact underneath.

Em dashes and curly quotes. Test: any em dash or curly quote. Replace with a period, comma, or straight quote. Zero tolerance.

Colon as connector. Test: a colon linking a setup and a payoff mid-sentence instead of introducing a real list. Rewrite as one plain sentence.

Bold-label bullets. Test: does the bold lead-in just restate the sentence after it ("**Speed:** It is faster")? Cut the label, or give the payoff new information the label didn't already say.

Title case headings and decorative emoji. Test: are headings capitalized like a book title, or does a bullet open with an emoji that adds nothing? Sentence-case the heading, drop the emoji.

Rhythm tells. Test: do three or more consecutive sentences or bullets share identical length and shape? Break the pattern.

Sycophancy and filler: "Great question!", "You're absolutely right!", "Let me know if...", "in order to" for "to", "due to the fact that" for "because", stacked hedges ("could potentially possibly"), generic closers ("the future looks bright"). Test: does the line exist only to manage feelings or pad the sentence, with zero information if cut? Cut it.

Feeling words instead of facts. Test: name the mechanism or the number instead of the vibe ("seamless integration" becomes what actually happens when it fails or succeeds).

## What not to touch

- The author's real phrases, even odd or informal ones, if they carry meaning.
- Deliberate roughness: unfinished thoughts, asides, fragments left in for texture.
- Strong opinions, hot takes, blunt judgments. Sharpen the wording if it's a tell; never the stance.
- Genuine first person and "I think" framing.
- Uneven structure that reflects how the author actually thinks, as opposed to a template's uniform structure.

## riot-specific

riot pieces are allowed to be rough, wrong, and opinionated; that is the point of the format. This pass removes the model's tells and nothing else. It never smooths tone, never rounds a hot take into a balanced one, and never adds a hedge the author didn't write. If a sentence is blunt, keep it blunt: make sure the bluntness is the author's, not a template's.

Distilled from `~/.claude/skills/unslop/SKILL.md` and `chatgpt-web.md`, paraphrased, not excerpted.
