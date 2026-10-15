---
name: piece
description: Use when the builder wants a post, article, thread, video script, or launch post for a product that has a riot manifesto, says "write a post about", "draft the launch", "tweet this", or when a format wrapper calls it.
---

# piece

Call the Skill tool with "riot-canon".

## Format routing

Resolve the format from the explicit user request, otherwise the invoking wrapper. If both are present and conflict, ask which output they want. Direct invocation needs no wrapper; ask for the format only when the request is ambiguous. Load the matching reference from the installed wrapper directory by this table (read the file; the wrapper need not be invoked).

| Format | Wrapper | Reference within wrapper |
|---|---|---|
| post | riot-post | references/post.md |
| article | riot-article | references/article.md |
| thread | riot-thread | references/thread.md |
| video | riot-video | references/video.md |
| launch | riot-launch | references/launch.md |

A missing reference is a missing dependency: identify the file and stop before drafting.

## The loop

1. Read the manifesto and its checkpoint. No manifesto, or `stage` below `chosen`: tell the builder to run `/riot-me` and stop. If a revision is pending, finish or cancel it before drafting from the active direction.
2. Establish the occasion, required facts, intended reader action, and success signal. Infer what the request already supplies; ask at most two bundled questions for missing information, plus the format question if needed. Read the last five logged pieces that exist, noting repeated hooks, phrases, and arguments. Record unavailable history as a gap. Run the authorship preflight in riot-canon's final-check.md before step 3; a required human-authorship handoff skips to step 9 with the blocked status and reason defined there.
3. **First draft**, fast, in the Direction's voice: carry the recurring move, land one strong opinion, use section 4's voice without recycling a recent hook, and quote or echo an audience complaint from section 2 where it fits.
4. **Banned-list pass**: cut or rewrite every sentence that could sit on a competitor's page, against section 3.
5. **Positive check**: the recurring move is present, one of the three things competitors cannot say is the spine, the language reflects section 4, and the piece serves the intended reader action. Record one concrete voice cue, quoted or paraphrased, and any repetition deliberately retained. If a check fails, return to step 3 once; a second failure records an unresolved creative check and continues to review and validation as a blocked draft.
6. **Unslop**: run riot-canon's bundled unslop pass as a hard step.
7. **Cop read**: dispatch a sub-agent with the mode-piece inputs defined in riot-canon's Cop brief. Save the exact reviewed draft and verdict, then make one round of fixes on the lines it named. Sequential fallback: run the Cop's brief in this context. The Cop is the last creative review; the final validation below may correct factual or mechanical defects.
8. **Validate** the final text using riot-canon's final-check.md reference. Resolve that reference through the installed riot-canon skill, as for other shared references.
9. **Write** the piece and review record using riot-canon's manifesto format. Verify both files exist before appending their linked log entry; resume an interrupted write by repairing the missing file or log entry, without duplicating an existing entry.

## Exit

The piece and review record exist, the linked log entry appears exactly once, and the header records validation status. Only a draft with all final checks passed is ready; unresolved evidence or constraints produce a blocked draft with named gaps. The verdict identifies the reviewed draft, not an endorsement of later edits.
