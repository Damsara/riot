# Workflow acceptance scenarios

These define the acceptance scenarios for the 2026-10 workflow. A subsequent [real-agent run](agent-runs/transcript.md) records executed inputs, artifacts, initial failures and targeted retests. The automated workflow-contract tests check routing, input requirements and persistence contracts. Run the scenarios below through each supported host before claiming behavioral compatibility; retain prompts, actual tool inputs, files, verdicts and unmet criteria. Use temporary product folders, synthetic evidence explicitly labelled as such, and no publication tools.

## Direct invocation

Given a chosen manifesto and the request "write an X post announcing the documented export feature," invoke piece without a wrapper.

Expected: resolves post to riot-post/references/post.md, establishes the reader action and success signal, inspects recent pieces, and supplies sections 1 to 6 plus the draft and intended action to the Cop. A missing reference stops drafting with its path. A request for an article while invoking riot-post asks which format is intended.

## Isolated Cop

Pass sections 1 to 4 and a piece, omitting Direction and Rules. Expected: Missing input, not a guessed voice verdict. Retry with the required inputs. Preserve the exact reviewed text and verdict separately from later corrections. A positive verdict does not waive evidence checks.

## Interrupted choice

Save four candidates and all nine objections with next-step choose. Start a fresh session with only the product directory and "continue."

Expected: reads the saved candidates and verdict, asks the outstanding choice, and does not research or generate candidates again. With only seven objections saved, request the two missing author/rival pairs before advancing. The decoy author contributes none.

## Product change

Start from a chosen v1 manifesto for a personal calendar tool. Provide synthetic product evidence that it now serves team administrators with approval-based scheduling, and request revision.

Expected: preserves v1 exactly in history, refreshes Product, Audience and affected Category evidence, and uses the working revision in every pack. Reuses unaffected taste only with a recorded reason. The active manifesto remains v1 until confirmation. Cancellation leaves v1 unchanged. After confirmation, the version becomes v2 once, the old log survives, and v1 is archived. A session interrupted after replacement but before checkpoint archival finishes the archive without creating v3.

## Merge and safe baseline

Choose two challenger candidates to merge. Expected: one coherent direction with one recurring move and a stated tradeoff is confirmed before commit; both source candidates are marked incorporated and only unchosen alternatives are rejected. In a separate run, select the safe baseline; the three challengers become rejected candidates. A fixed count of three rejections must not be imposed on a merge.

## Unsupported promise

Provide only evidence that prompts are generated, then request "no question ever repeats." Expected: narrow or remove the guarantee, or save a blocked draft requiring evidence. Repeat with an invented customer quotation and a first-person event that never happened; neither becomes ready copy merely because the Cop likes it. Internal uncertainty notes stay in the review record.

## Final constraints and venue

Draft a post within its target limit, then make a Cop edit that pushes it over the limit. Expected: counts the final text using the target's counting rules and corrects or blocks it. For Show HN, a directly usable hosted demo remains eligible for consideration without a public repository, but current human-authorship rules require an internal planning handoff rather than generated submission copy. Record the current official source and verification date. With required sources inaccessible, preserve the blocked draft and precise unresolved checks.

## Repetition and outcome

Provide five recent pieces using the same opening and the request "get three qualified beta testers this week." Expected: proposes a different hook while preserving voice, supports an appropriate reader action, and records that success signal. Reuse of a signature phrase must be deliberate. Results later identify the actual observation, window and source; the Cop's reaction is never recorded as a conversion result.

## Legacy and interrupted writes

Load a legacy chosen manifesto and four-field piece. Expected: preserves the files and treats missing validation as unknown. New drafts receive a review record and status. Two same-day pieces with the same slug receive different paths. If interrupted after saving files but before logging, resume adds one linked entry; if already logged, it adds none.

## Desk-review result

On 2026-10-16, each expected branch above was traced to the revised routing, checkpoints, Cop inputs, final-check and artifact-format instructions. This verifies that the branches are specified and internally connected. It does not demonstrate model obedience, cross-host installation, live audience performance, or completed publication checks for any historical fixture.
