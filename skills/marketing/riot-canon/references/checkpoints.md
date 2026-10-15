> canon-version: 2026-10
> Persist expensive work and pending decisions, including revisions, without losing an active direction.

# Checkpoints

Keep `<docs home>/checkpoint.md` beside the manifesto. Its frontmatter carries `mode: kickoff | revise`, `base-version: <n>`, `next-step: product | research | taste | candidates | debate | choose | commit`, and `send-backs: 0 | 1`. Its body holds the working manifesto, pending question and answers, candidate briefs and complete outputs, objections keyed by author and rival, verdict, and confirmed choice as they become available. Create the checkpoint before starting new work. During kickoff, mirror completed sections and the coarse stage to the manifesto; during revision, write only to the working copy. Save each completed result before advancing `next-step`; skip saved work on resume and request only missing outputs. A partial research or taste step keeps its completed material and unanswered questions.

## Resume validation

Treat `next-step` as a hint until its prerequisites are checked. Check the saved working sections, candidate pool, unique author/rival objection pairs and Cop verdict before presenting a choice; also check confirmed choice and outcome/review point before commit. If a saved step is ahead of its evidence, set it to the earliest incomplete rung and complete only the missing work. For example, a choose checkpoint with seven objections resumes debate for the two missing pairs and then obtains the verdict; it does not ask the builder to choose yet. Preserve valid candidates and existing objections. If the saved content is ambiguous, record the ambiguity and ask only for the information needed to resolve it.

Without a checkpoint, use the existing manifesto: `none` resumes the first incomplete product/research task, `researched` resumes taste, `tasted` resumes candidates, and `chosen` is complete. Inspect existing section 8 for saved candidate/debate work before creating missing checkpoint fields. Preserve legacy files and mark unavailable material as missing rather than reconstructing it as fact.

## Revision

Before changing an active manifesto, save its exact contents to `history/v<base-version>.md` and create a working copy in the checkpoint. Reuse an existing identical snapshot; a differing snapshot at that path requires resolving the conflict before writing. Record the evidence assessment for each of sections 1 to 4 in the working copy. The active manifesto remains usable as the prior version, but new pieces wait until the revision is committed or explicitly cancelled. Cancellation archives the checkpoint and leaves the active manifesto unchanged.

## Send-back

Before a permitted send-back, archive the current candidate pool, objections, verdict and builder feedback within the checkpoint, increment `send-backs`, clear the active pool and debate outputs, and set `next-step: candidates`. A resume then generates only the new pool. Once the allowance is used, offer a choice, an explicit cancellation, or leave the decision pending; never silently start another pool.

## Commit

A complete candidate pool and debate, a confirmed choice (including any merge), and an outcome/review point are prerequisites. Assemble the completed manifesto from the checkpoint. For a revision, retain the old log and rejected history, move the prior Direction to Rejected with its version, and set the version to `base-version + 1`; kickoff sets version 1. Preserve the full prior rules and research in the history snapshot.

Save `next-step: commit` before replacing the manifesto. Re-read the saved manifesto to verify the choice, version, sections and history. Archive the checkpoint only after this succeeds. If interrupted after replacement, compare it with the intended checkpoint result and finish archiving; never increment the version again. A changed base version or unexpected file content is a conflict to resolve before replacement. Archive completed or cancelled checkpoints under a unique history filename so later sessions cannot mistake them for pending work.
