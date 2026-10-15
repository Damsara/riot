---
name: stance
description: Argue a product's marketing direction and choose one. Use when the builder wants a marketing direction, says "how do I market this", "what's our angle", "write the manifesto", brings a product with no docs/riot/manifesto.md, or asks to revise a direction that stopped working.
---

# Stance

Call the Skill tool with "riot-canon".

You are the chair. Follow riot-canon's checkpoints.md before running the ladder. A revision request enters Revise; an active checkpoint resumes its saved next step; a chosen manifesto with neither needs no new debate.

## Ladder

1. **Read the product.** README, package description, landing copy, `docs/napkin/*/spec.md` if present, recent commits. Draft section 1 and ask the builder to correct it in one line. If the repo says nothing, ask three things, one per message: what it does, for whom, and instead of what people use today. Save section 1 and its evidence pointers before advancing.
2. **Research.** Dispatch two sub-agents, audience and category, each with the pack and one job: the audience agent returns who it is for, named venues, verbatim complaints, and five or six marketing examples spanning safe to wild; the category agent returns five to eight competitors and the banned list. Accept pasted competitor URLs, audience threads, or reviews first, into both packs. Sequential fallback per canon. Writes sections 2 and 3, `stage: researched`.
3. **Taste.** One question per message, per canon's rounds. Show each research example, love / hate / nothing plus one line why; then ask the bar description, the origin story, and what annoys the builder about the category, all open, all kept verbatim. Writes section 4, `stage: tasted`.
4. **Candidates.** Write four briefs: the decoy is provocations.md's fixed text; three unsafe briefs built per provocations.md's rule, at least two citing a research finding. Dispatch four author sub-agents, each with the pack and one brief, using provocations.md's author brief template for the section 5 shape. Save the complete candidate pool in the checkpoint before advancing; reuse it on resume.
5. **Debate.** Round one, attack only: each of the three unsafe authors receives the other three candidates and writes one paragraph per rival (nine objections total; the decoy author writes none), the strongest reason the audience ignores it, no defence. Round two, dispatch the Cop in mode debate, per cop.md, with the four candidates and the nine objections. Sequential fallback per canon. Save each objection and the Cop verdict in the checkpoint before advancing. Writes section 8.
6. **Choose.** One table: name, enemy, kind of unsafe, recurring move, what it loses, the best objection against it, the Cop's verdict. Label the decoy as the safe baseline; recommend a challenger, but keep the baseline selectable. The builder picks one, merges two, or sends all three back once with one line added to every unsafe brief, and rungs 4 to 6 rerun once. Save the choice verbatim. For a merge, write one coherent Direction naming its source candidates, recurring move, and tradeoff; get the builder's confirmation before committing it. Where the Cop scrolled past all four, recommend the send-back and draft its line from the Cop's reasons; the builder may still pick.
7. **Write.** Sections 5 to 8 land; section 6 is written from the choice and section 4. Record a testable outcome for the direction: intended audience action, success signal, and a review point agreed with the builder. Commit using checkpoints.md, with `stage: chosen`; the first direction is version 1. Tell the builder the manifesto's path and the piece commands (`/riot-article`, `/riot-post`, `/riot-thread`, `/riot-video`, `/riot-launch`).

## Revise

Called by `/riot-revise` or an explicit request to revise the direction. Without a chosen manifesto, tell the builder to run `/riot-me`. Read section 9's results against the direction's success signal, distinguishing measured results from the Cop's prediction. Ask what changed or stopped working only when the request leaves that unclear.

Start a revision checkpoint per checkpoints.md. Inspect current product evidence and assess sections 1 to 4 individually: refresh changed product facts, audience, category research, or taste; preserve unaffected sections. Record the reason and evidence for each refresh or reuse. If the audience changed, refresh its examples and taste questions as needed. Use the working revision's sections in every pack. Then rerun rungs 4 to 7. A cancelled revision leaves the active manifesto intact.

## Exit

The manifesto is at `stage: chosen` with all nine sections. Section 7 carries every unchosen candidate, with the decoy labelled when rejected and each unsafe candidate's provocation. A merge records its source candidates as incorporated, not rejected. Section 8 carries the nine objections and the Cop's verdict. Section 4 holds the builder's words verbatim.
