---
name: piece
description: Use when the builder wants a post, article, thread, video script, or launch post for a product that has a riot manifesto, says "write a post about", "draft the launch", "tweet this", or when a format wrapper calls it.
---

# piece

Call the Skill tool with "riot-canon".

The wrapper that called this discipline names the format; read the format reference it named next.

## The loop

1. Read the manifesto. No manifesto, or `stage` below `chosen`: tell the builder to run `/riot-me` and stop.
2. Ask at most two questions: the occasion, and any fact the piece must carry. The format reference may add one more, format-specific question.
3. **First draft**, fast, in the Direction's voice: carry the recurring move, land one strong opinion, reuse at least one builder phrase from section 4, and quote or echo an audience complaint from section 2 where it fits.
4. **Banned-list pass**: cut or rewrite every sentence that could sit on a competitor's page, against section 3.
5. **Positive check**: the recurring move is present, one of the three things competitors cannot say is the spine, and at least one builder phrase from section 4 survived step 4. Fail any and return to step 3, not to editing.
6. **Unslop**: run riot-canon's bundled unslop pass as a hard step.
7. **Cop read**: dispatch a sub-agent with riot-canon's Cop brief, the pack, and the piece, mode piece. One round of fixes on the lines it named, nothing else. No smoothing pass after. Sequential fallback: run the Cop's brief in this context.
8. **Write** the piece to `<docs home>/pieces/<date>-<format>-<slug>.md` with the header from riot-canon's manifesto format, and append the log line to section 9.

## Exit

The piece file exists with its four header fields set, the log line is appended, and the Cop's verdict is recorded in both places.
