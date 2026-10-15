# Artifact acceptance results

Executed 2026-10-16 by the assigned isolated acceptance agent using filesystem-loaded Riot skills and explicitly supplied synthetic product evidence. No production skill edits, no publishing. These are agent execution artifacts with Python used for writes, counts and hashes, not a production Riot runtime test. The Cop received only the explicit synthetic pack and brief; no repo fixture direction was consulted. There was no additional nested agent call.

| Scenario | Actual result | Evidence |
|---|---|---|
| Cop missing input | PASS: refused verdict and named missing inputs | [prompt](evidence/cop/missing-input-prompt.txt), [response](evidence/cop/missing-input-response.txt) |
| Cop sections 1 to 4 supplied, 5 and 6 omitted | PASS: only missing Direction and Rules named, no invented verdict | [partial pack](evidence/cop/partial-pack-prompt.txt), [response](evidence/cop/partial-pack-response.txt) |
| Cop complete input | PASS: grounded five-line verdict, under 150 words | [pack and draft](evidence/cop/complete-input-prompt.txt), [verdict](evidence/cop/complete-input-response.txt) |
| Final edit exceeds target | PASS: exact final expansion measured 383 ASCII graphemes against 180 target, mechanically corrected to 128 | [prompt](evidence/final-count/input-prompt.txt), [counts](evidence/final-count/counts.json), [expanded](evidence/final-count/post-review-expanded.txt), [final](evidence/final-count/final.txt) |
| Hosted demo, no repository | PASS for narrow no-repository requirement; overall BLOCKED for human authorship and public deployment evidence | [HTTP observation](evidence/hosted-demo/observation.md), [actual response](evidence/hosted-demo/response.json), [primary checks](evidence/sources.md) |
| HN baseline | FOUND early-authorship gap, never asserted ready | [prompt](evidence/hn-baseline/input-prompt.txt), [actual finding](evidence/hn-baseline/output.md) |
| HN after parent fix | PASS: blocked planning handoff, creative loop skipped, pair saved then linked once | [fresh prompt](evidence/hn-rerun/input-prompt.txt), [handoff](evidence/hn-rerun/docs/riot/pieces/2026-10-16-launch-hosted-demo.md), [review](evidence/hn-rerun/docs/riot/pieces/2026-10-16-launch-hosted-demo.review.md), [manifesto](evidence/hn-rerun/docs/riot/manifesto.md) |
| Required source unavailable | PASS: actual Threads HTTP 429 leaves blocked work, no fabricated verification | [prompt](evidence/unavailable-source/input-prompt.txt), [output](evidence/unavailable-source/output.md), [source results](evidence/sources.md) |
| Legacy four-field piece | PASS: unchanged SHA256, status unknown | [before](evidence/persistence/before/legacy.md), [after](evidence/persistence/docs/riot/pieces/2026-10-15-post-old.md), [hash checks](evidence/persistence/checks.json) |
| Same slug twice | PASS: distinct unsuffixed and -2 pairs, first pair unchanged | [first request](evidence/persistence/request-1.txt), [new request](evidence/persistence/request-2.txt), [checks](evidence/persistence/checks.json) |
| Pair saved before log | PASS: explicit path resume repairs missing log | [interruption](evidence/persistence/interrupted/manifesto.md), [resume prompt](evidence/persistence/resume-prompt.txt), [resumed](evidence/persistence/after-resume/manifesto.md) |
| Resume already logged | PASS: second resume byte-identical manifest | [first resume](evidence/persistence/after-resume/manifesto.md), [second resume](evidence/persistence/after-second-resume/manifesto.md), [checks](evidence/persistence/checks.json) |
| Companion-only collision after fix | PASS: reserves stem, new request gets -2; original review hash retained | [prompt](evidence/orphan/input-prompt.txt), [before](evidence/orphan/before.json), [after](evidence/orphan/after.json), [checks](evidence/orphan/checks.json) |
| Slug-only ambiguity after fix | PASS: clarification returned, no mutation | [prompt](evidence/ambiguous/input-prompt.txt), [question](evidence/ambiguous/output.txt), [checks](evidence/ambiguous/checks.json) |

Boundary: the hosted service is real but localhost-only and synthetic. No claim of public deployment, real customer use, measured attention, or full HN launch eligibility. Official Bluesky sources were unreadable, so corrected post remains blocked despite passing its editorial length target. [Collision ambiguity and minimal fix](evidence/persistence/observations.md): explicit operation identity is needed; the parent added a slug-ambiguity question and companion collision rule, then these were exercised.

Reproduction artifacts: [first execution script](execute.py) and [follow-up execution script](finish.py) preserve exact inputs and the filesystem operations used. Scripts encode the agent's actual chosen outputs; they are not model-response mocks claimed as independent model runs.

Independent tool verification: all saved Markdown links resolve; Cop verdict is 50 words; final ASCII count 128 and expanded count 383; legacy and repeated-resume files match byte-for-byte; HN handoff is blocked and logged exactly once. Snapshot folders carry companion copies solely to preserve relative-link readability. Temporary localhost service stopped after observation.
