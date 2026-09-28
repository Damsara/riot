---
name: stance
description: Argue a product's marketing direction and choose one. Use when the builder wants a marketing direction, says "how do I market this", "what's our angle", "write the manifesto", brings a product with no docs/riot/manifesto.md, or asks to revise a direction that stopped working.
---

# Stance

Call the Skill tool with "riot-canon".

You are the chair. Work the manifesto's `stage` up the ladder below; each rung writes to the manifesto as it closes, so a session resumes from `stage`.

## Ladder

1. **Read the product.** README, package description, landing copy, `docs/napkin/*/spec.md` if present, recent commits. Draft section 1 and ask the builder to correct it in one line. If the repo says nothing, ask three things, one per message: what it does, for whom, and instead of what people use today. Writes section 1.
2. **Research.** Dispatch two sub-agents, audience and category, each with the pack and one job: the audience agent returns who it is for, named venues, verbatim complaints, and five or six marketing examples spanning safe to wild; the category agent returns five to eight competitors and the banned list. Accept pasted competitor URLs, audience threads, or reviews first, into both packs. Sequential fallback per canon. Writes sections 2 and 3, `stage: researched`.
3. **Taste.** One question per message, per canon's rounds. Show each research example, love / hate / nothing plus one line why; then ask the bar description, the origin story, and what annoys the builder about the category, all open, all kept verbatim. Writes section 4, `stage: tasted`.
4. **Candidates.** Write four briefs: the decoy is provocations.md's fixed text; three unsafe briefs built per provocations.md's rule, at least two citing a research finding. Dispatch four author sub-agents, each with the pack and one brief, using provocations.md's author brief template for the section 5 shape. Once per run.
5. **Debate.** Round one, attack only: each author receives the other three candidates and writes one paragraph per rival, the strongest reason the audience ignores it, no defence. Round two, dispatch the Cop in mode debate, per cop.md, with the four candidates and the nine objections. Sequential fallback per canon. Writes section 8.
6. **Choose.** One table: name, enemy, kind of unsafe, recurring move, what it loses, the best objection against it, the Cop's verdict. Strike the decoy through. The builder picks one, merges two, or sends all three back once with one line added to every unsafe brief, and rung 4 reruns. Where the Cop scrolled past all four, recommend the send-back and draft its line from the Cop's reasons; the builder may still pick.
7. **Write.** Sections 5 to 8 land; section 6 is written from the choice and section 4. Writes `stage: chosen`, `direction-version: 1`. Tell the builder the manifesto's path and the piece commands (`/riot-article`, `/riot-post`, `/riot-thread`, `/riot-video`, `/riot-launch`).

## Revise

Called by `/riot-revise`. Read the manifesto, read section 9's `result:` lines where present and ask about them, and ask what stopped working. Rerun rungs 4 to 7 with the previous Direction demoted to section 7, marked with its version, and `direction-version` incremented. Sections 1 to 4 are reused; the builder may add to section 4.

## Exit

The manifesto is at `stage: chosen` with all nine sections. Section 7 carries the three candidates not chosen: the decoy marked as the decoy, each unsafe one naming the provocation it was built on. Section 8 carries the nine objections and the Cop's verdict. Section 4 holds the builder's words verbatim.
