# vibecheck: a /riot-me run

Reconstructed on 2026-09-28 from a real session's inputs and real sub-agent output; the rungs were run by hand, not by the shipped skill. Builder answers are verbatim. The Cop's verdict is Haiku's verbatim reply. One exception: rung 6's pick, "Round Four. That's the one I'd actually post," is the chair's assumption standing in for the builder's words, since the live choose step did not happen.

## 1. The chair reads the product

Chair checked the repo: a starter README that says nothing about the product, no package description, no landing copy, no `docs/napkin/*/spec.md`, no product-shaped commit message. Per canon's fallback for a repo that says nothing, the chair asked what it does, who it is for, and what people use instead, in one message.

Chair: "What does it do, who is it for, and what do people use instead today?"

Builder: "VibeCheck is basically a drinking game app that creates its own questions for a group of users and gives like DAs and asks questions about the users in the group. Basically it's a drinking game that's like do or drink or something like that with different modes."

Chair's reading, drafted from that paragraph: "DAs" read as dares, generated about the people in the group rather than dealt from a fixed deck; comparable in kind to Do or Drink and the Picolo / Psych / "Most Likely To" family, with modes. Who it is for and what they use instead were not stated in the paragraph itself; carried forward as a draft for research to confirm.

Writes section 1.

## 2. Research: two sub-agents dispatched

Audience sub-agent and category sub-agent, each with the pack and one job, per canon's fan-out. Real dispatch output: `docs/research/vibecheck-landscape.md`.

Audience agent: friend groups at pre-drinks or house parties, currently using a physical Do or Drink deck, Picolo, Psych, or someone making up questions. Named venues: TikTok #drinkinggame, r/BacchusDrinkingGame. The repetition complaint carried into section 2, verbatim: Do or Drink App Store, BroadwayPunk1, "you'll see a lot of repeats after that, often in the same game" (https://apps.apple.com/us/app/do-or-drink-drinking-game/id1457844294).

Category agent: eight competitors profiled against a target of five to eight. The banned list runs to ten claims, each traced to a quote; claim 4 is "it's THE ultimate party game," Do or Drink and Truth or Drink both using the word "ultimate" verbatim. A fourth line the agent flagged as worth carrying forward: an Apple Developer Forums thread stating Apple tightened App Store guidelines against drinking games around 2020, grandfathering Picolo, Drink Roulette, and iPuke by name while rejecting new submissions (https://developer.apple.com/forums/thread/649488).

Writes sections 2 and 3, `stage: researched`.

## 3. Taste

Per canon's rounds, one example per message, love / hate / nothing plus a one-line why, kept verbatim.

Chair: "Feeld. Love, hate, or nothing?"
Builder: "nothing."

Chair: "Jackbox on Product Hunt. Love, hate, or nothing?"
Builder: "nothing, too safe and kiddy for a drinking game"

Chair: "Do or Drink's TikTok. Love, hate, or nothing?"
Builder: "love, real people reacting is the whole point"

Chair: "Cards Against Humanity. Love, hate, or nothing?"
Builder: "love, it doesn't take itself seriously at all"

Chair: "Heads Up! Love, hate, or nothing?"
Builder: "nothing, fake quotes feel like a gimmick"

Chair: "Describe VibeCheck the way you'd describe it at a bar."
Builder: "It's a drinking card game that gives you embarrassing questions and forces you to drink."

Chair: "What's the origin, the night this idea came from?"
Builder: "It was a night with my friends and I wanted to make like a drinking game so I thought of this" and "We were actually pretty bored and we were playing like Uno and stuff like that and we wanted something more chaotic."

Chair: "What annoys you about the category?"
Builder: "The questions are repetitive, they look very similar to each other and the deck has only an limited number of questions, it doesn't have an unlimited number of questions that kind of generate by their own."

Writes section 4, `stage: tasted`.

## 4. Candidates: four briefs, dispatched to four author sub-agents

The decoy is provocations.md's fixed text; the three unsafe briefs are built per provocations.md's rule, at least two citing a research finding. From `test/fixtures/cop-dry-run/candidates.md`:

- **The Life of the Party** (decoy): no provocation by design, the safest, most competent direction a good agency would sell.
- **Round Four**: built on the seeds "admit the flaw first" and "take the complaint everyone has and make it the whole pitch," citing the Do or Drink and Picolo App Store reviews that name the repeats problem directly (section 2).
- **The Grandfather Clause**: built on the seed "the platform risk nobody mentions," citing the Apple Developer Forums thread on the 2020 policy tightening (section 2).
- **The Sober Friend**: built on the seeds "the sober friend" and "make the disclaimer the product," citing Drink Roulette's "drink responsibly" disclaimer with no designated-driver or non-alcoholic mode built into any of the eight profiled apps (section 2).

Once per run.

## 5. Debate: round one, nine objections; round two, the Cop

Round one, attack only, one paragraph per rival, no defence. Summarized from `test/fixtures/cop-dry-run/objections.md`:

- Round Four's author on The Life of the Party: "endless" and "ultimate" are lines the audience has already scrolled past on every other app in the category.
- Round Four's author on The Grandfather Clause: a builder-forum story, not a party story; answers a question nobody at the table is asking.
- Round Four's author on The Sober Friend: opens on the wrong person for the group that came to drink, reads as an apology before round one.
- The Grandfather Clause's author on The Life of the Party: "the ultimate way to level up any party" is Do or Drink's own line, already seen twice this week.
- The Grandfather Clause's author on Round Four: admitting the repeats problem reads like the sentence right before a paywall.
- The Grandfather Clause's author on The Sober Friend: a designated-driver mode reads like a wellness pivot, not a reason to open the app tonight.
- The Sober Friend's author on The Life of the Party: promises the category already breaks, per the same repetition complaints this research turned up.
- The Sober Friend's author on Round Four: hands the audience the exact worry they had about every other app, with no proof beyond the claim.
- The Sober Friend's author on The Grandfather Clause: platform risk is a founder's worry, not a reason to start a round tonight.

Round two, the Cop, dispatched, mode debate, model haiku (claude-haiku, via the Agent tool's model override), per `cop.md`, given the pack, the four candidates, and the nine objections. Verbatim from `test/fixtures/cop-dry-run/verdict.md`:

```
Verdict: scroll-past The Life of the Party / stop-on Round Four

Scroll-past: The Life of the Party. "The ultimate way to level up any party." I already scrolled past this on Do or Drink.

Stop-on: Round Four. "You'll see a lot of repeats after that, often in the same game." That's my actual complaint. Closes showing the fresh question generated instead.

Objections right: Round Four's author on The Life of the Party (generic language), The Grandfather Clause (builder-forum story, not party story), The Sober Friend (sounds like apology); Grandfather Clause's author on The Life of the Party (already-used line), The Sober Friend (wellness pivot); Sober Friend's author on The Life of the Party (empty promise), The Grandfather Clause (adds platform risk). Wrong: Grandfather Clause's author on Round Four (the admission works); Sober Friend's author on Round Four (proof is shown).
```

No rerun was needed: the verdict names a scroll-past and a stop-on with reasons grounded in the pack, and it is neither polite nor generic.

Writes section 8.

## 6. Choose

| Name | Enemy | Kind of unsafe | Recurring move | What it loses | Best objection against it | Cop's verdict |
|---|---|---|---|---|---|---|
| ~~The Life of the Party~~ | boring parties | not unsafe at all | opens on a friend group's best night | nothing, built to lose no one | repeats Do or Drink's own "ultimate" line | scroll-past |
| Round Four | apps that run dry by round three and never admit it | admits the flaw before a reviewer can | closes on the exact question generated fresh | readers who want proof before they try it | Sober Friend's author: no proof beyond the claim (the Cop ruled it wrong: proof is shown) | stop-on |
| The Grandfather Clause | Apple's own quiet 2020 policy | names the platform gatekeeper nobody else admits | names the exact rule survived that week | readers who want reassurance it is safe forever | Round Four's author: a builder-forum story, not a party story | loses on objections, not named a stop-on |
| The Sober Friend | the category's disclaimer with no feature behind it | markets straight at the one person not drinking | includes a version of the question for the sober friend | readers who came only for the drinking half | Grandfather Clause's author: reads like a wellness pivot | loses on objections, not named a stop-on |

Chair: "The Cop stopped on Round Four and scrolled past The Life of the Party outright; both remaining unsafe briefs lost at least two of their three objections. My recommendation is Round Four."

Builder: "Round Four. That's the one I'd actually post."

## 7. Write

Sections 5 to 8 land; section 6 is written from the choice and section 4. `stage: chosen`, `direction-version: 1`.

Chair: "The manifesto is at `docs/riot/manifesto.md`. Next, write a piece: `/riot-article`, `/riot-post`, `/riot-thread`, `/riot-video`, or `/riot-launch`."

See `test/fixtures/stance-demo/manifesto.md` for the state this run produces.

## What this run taught the skill

- Rung 1 now asks what it does, who it is for, and what people use instead, rather than a single open "what is it," because a builder's own paragraph rarely separates those three on its own.
- Research sub-agents now carry a search budget of about sixty searches and write what they have under a Gaps heading when it runs out, rather than filling the gap with an unmarked guess, because the real research pass behind this run exhausted a 200-search budget before finding a thread example and said so; the shipped rule caps each agent lower and makes the Gaps heading mandatory.
- Stance rung 6 now names the all-scroll-past case explicitly, recommending the send-back with a line drafted from the Cop's own reasons, because the Cop stopping cleanly on one candidate here was the easy case; the revise demo (`test/fixtures/revise-demo/transcript.md`) is the run where all four candidates lost.
