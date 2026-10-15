---
mode: revise
base-version: 1
next-step: choose
send-backs: 0
---

# Working manifesto
---
product: focusfence
stage: chosen
docs-home: docs/riot
direction-version: 1
---

## 1. Product
FocusFence routes team purchase approvals in Slack. Each request records an owner, amount, deadline and status. Calendar auto-decline is no longer a product feature. Evidence: README.md, synthetic product fixture supplied for this test.

## 2. Audience and venues
unverified, synthetic acceptance-test research only. Operations leads chasing purchase approval owners. Synthetic complaint A: "The request is in Slack but nobody owns the yes." Synthetic complaint B: "I need to know who is holding the request, not another dashboard." Source: 05-research-test-input.md. No external venues verified.

## 3. Category default
unverified, synthetic acceptance-test category inputs. Comparison targets: Approveit, Jira Service Management, ServiceNow, Kissflow, Pipefy; current features not asserted. Banned list for this fixture: seamless, streamlined, ultimate, effortless. Source: 05-research-test-input.md.

## 4. Taste
Love, the r/ExperiencedDevs complaint thread: "because it's the first time I've seen someone admit the guilt is the actual product of a bad calendar, not the double-booking itself."
Hate, Reclaim.ai's launch video: "because it never once says the word 'no,' the whole video is about the calendar being nice about it."
Bar description, verbatim: "it's the app that tells your coworker no so you don't have to."
Origin story, verbatim: "I built this after declining my own skip-level's meeting by accident and getting a Slack message about it within four minutes."
What annoys the builder about the category, verbatim: "every one of these tools talks about time like it's a resource you optimize, not a boundary you enforce."


Historical calendar examples above are retained as history, not current audience evidence. New synthetic reactions, verbatim:
1. "nothing, clean screens don't tell me who owes an answer."
2. "love, show the missing owner without calling anyone lazy."
3. "hate, don't turn this into a public blame game."
4. "love, I want to see where the request stopped."
5. "love, just say who owns the yes."

Current bar description, verbatim: "It tells the team who owns the yes."

## 5. Direction
Name: The Bouncer. Enemy: the calendar tools that make protecting your time feel like a scheduling feature instead of a boundary. Kind of unsafe: FocusFence's pieces say "no" in the product's own voice, in public, instead of hiding the decline behind polite copy. Recurring move: every piece ends with the exact auto-reply text FocusFence sent to a real meeting request. Three things it can say that competitors cannot: it names the specific meeting that got declined, it admits the builder's own skip-level got declined once, and it treats "no" as a feature to advertise rather than friction to smooth over. What it is willing to lose: readers who manage other people's calendars for a living, and any comment calling the tool "rude." Provocation and finding: built from the r/ExperiencedDevs complaint that the guilt of declining is the real product gap (section 2).

## 6. Rules for pieces
One strong opinion per piece. The recurring move, the real auto-reply text, appears in every piece. The spine is always one of the three things, usually the specific declined meeting. At least one builder phrase from section 4 is reused per piece. Every sentence is checked against the section 3 banned list before it ships. The bundled unslop pass runs as a hard step. No smoothing pass after the Cop's read. The practical line holds: no false claims about FocusFence, no fabricated reviews or quotes, no attacks on named individuals.

## 7. Rejected candidates
The Concierge (decoy): the safest, most competent direction a good agency would sell, all convenience and no confrontation. Lost because the Cop scrolled past it without stopping.
The Productivity Priest: built from the seed move "turn the category's virtue into a vice" alone, research was thin for this brief. Lost because two of three objections said it moralized at the reader instead of showing the product.

## 8. Debate minutes
Sitting 1. Round one, nine objections: The Bouncer's authors argued The Concierge disappears into every other calendar app's sales page, that The Productivity Priest lectures instead of showing a real decline, and that the fourth candidate leaned on a stat nobody asked for. The Concierge's and Productivity Priest's authors raised parallel objections against The Bouncer and each other. Round two, the Cop: scrolled past The Concierge and The Productivity Priest, stopped on The Bouncer's real auto-reply text, called the "guilt as the product" framing the one true finding among the four. `sequential`, no sub-agents were available in this session.

## 9. Log
- 2026-09-20 · post · launch teaser on X · v1 · Cop: stopped on the real decline text, no fixes needed · result: 40 likes, three replies asking for early access
- 2026-09-25 · thread · reply to a Reclaim.ai launch thread · v1 · Cop: stopped on the second tweet, first tweet buried the hook behind a stat

# Evidence assessment
1. REFRESH: README.md changes personal calendar protection to team purchase approvals; no auto-decline claim survives.
2. REFRESH: synthetic user explicitly changes audience to operations leads chasing approval owners. Old venues cannot be assumed relevant.
3. REFRESH: calendar scheduling competitors no longer define this category; saved prior research remains historical.
4. PARTIAL REUSE: preserve the original origin story and dislike of euphemisms as historical builder words; ask new taste for team-approval examples and a current bar description. Do not silently reuse calendar reactions as new audience taste.
# Results assessment
Prior log contains 40 likes and three early-access replies, plus a Cop prediction. These are fixture observations, not fresh results, and measure the old calendar audience. No explicit old success signal or review point exists; no pass/fail inference about effectiveness is justified.

# Research provenance
TEST INPUT: synthetic research checkpoint completion for state testing. This is NOT independently researched market evidence, actual reviews, or verified complaints. Candidate generation and persistence are exercised from it; research accuracy is excluded.
Audience: operations leads who chase an owner for a purchase request. Synthetic complaint A: "The request is in Slack but nobody owns the yes." Synthetic complaint B: "I need to know who is holding the request, not another dashboard." Evidence pointers: 05-research-test-input.md#complaint-a and #complaint-b.
Unverified category comparison targets: Approveit, Jira Service Management, ServiceNow, Kissflow, Pipefy. No claim about these products' current features is established. Test banned list: seamless, streamlined, ultimate, effortless.
Synthetic taste examples: a calm approval dashboard, a missing-owner receipt, a blame-filled leaderboard, a request timeline, a blunt pending-owner label. They are scenario prompts, not real marketing citations.

# Complete candidate pool
## Candidate 1
Brief: the safest, most competent direction a good agency would sell

Name: Clear Approvals
Enemy: confusing request tracking.
Kind of unsafe: safe baseline, no provocation required.
Recurring move: show one request progressing from submitted to approved.
Three things competitors cannot say: unverified exclusivity; use only these grounded product specifics: Slack request owner; amount and deadline; visible approval status.
What it is willing to lose: readers who want public confrontation.
Provocation and finding: the safest, most competent direction a good agency would sell.

## Candidate 2
Brief: Name the enemy: invisible approval ownership. Synthetic complaint A, source 05-research-test-input.md#complaint-a.

Name: Who Owns Yes
Enemy: a pending request without a visible owner.
Kind of unsafe: call out missing ownership instead of praising productivity.
Recurring move: end on the request owner and the answer still needed, using a labelled demonstration.
Three things competitors cannot say: exclusivity unverified; product-specific spine options: request owner, deadline, and pending approval status from README.md.
What it is willing to lose: buyers who prefer neutral dashboard screenshots and comments calling direct ownership language blunt.
Provocation and finding: name the enemy; synthetic complaint A, 05-research-test-input.md#complaint-a.

## Candidate 3
Brief: Use the format nobody expects: a receipt for a pending decision. Synthetic complaint B, source 05-research-test-input.md#complaint-b.

Name: Receipt for Delay
Enemy: invisible waiting in a request queue.
Kind of unsafe: frame a pending answer as an unpaid receipt without accusing a named person.
Recurring move: a labelled demonstration receipt naming request, owner, deadline, and status.
Three things competitors cannot say: exclusivity unverified; grounded spine options are the request amount, owner and deadline visible in README.md.
What it is willing to lose: readers who dislike administrative paperwork jokes.
Provocation and finding: unexpected format; synthetic complaint B, 05-research-test-input.md#complaint-b.

## Candidate 4
Brief: Refuse the superlative: show one pending request, not a transformative-workflow promise. Thin synthetic research, seed-only third brief, explicitly marked.

Name: No Approval Theater
Enemy: inflated transformation promises.
Kind of unsafe: admit this is one approval request, not a company reinvention.
Recurring move: show one labelled pending request and stop there.
Three things competitors cannot say: exclusivity unverified; grounded spine options are Slack location, owner and approval status from README.md.
What it is willing to lose: enterprise buyers looking for a platform vision.
Provocation and finding: refuse the superlative, seed-only third brief because the synthetic research is thin.
# Saved objections
## Who Owns Yes author on Clear Approvals
"Show one request progressing" is the same dashboard tour I skip when I already know how a status field works.

## Who Owns Yes author on Receipt for Delay
A "receipt" makes me decode a joke before I can see whether anyone owns the decision.

## Who Owns Yes author on No Approval Theater
"Show one labelled pending request and stop there" leaves me staring at the very problem I opened Slack to escape.

## Receipt for Delay author on Clear Approvals
"Clear Approvals" could name every approval tool in the tab bar. There is nothing in that name that catches my eye.

## Receipt for Delay author on Who Owns Yes
"Who owns the yes" sounds like a manager looking for someone to blame; the builder explicitly hated a public blame leaderboard.

## Receipt for Delay author on No Approval Theater
"Not a company reinvention" answers a vendor claim I was not thinking about instead of my overdue purchase.

## No Approval Theater author on Clear Approvals
"Progressing from submitted to approved" skips the stalled middle where my request actually lives.

## No Approval Theater author on Who Owns Yes
An "owner and the answer still needed" might only identify someone I already know; knowing the owner does not produce an answer.

## No Approval Theater author on Receipt for Delay
An "unpaid receipt" suggests a payment tool, while the product README says purchase approvals. I could misunderstand the product in the first line.
# Saved Cop verdict
Verdict: scroll-past Clear Approvals / stop-on Who Owns Yes
Scroll-past: Clear Approvals. "Show one request progressing from submitted to approved" skips my stalled request. Receipt for Delay's "unpaid receipt" makes me expect payments. No Approval Theater's "not a company reinvention" answers a vendor instead of me.
Stop-on: Who Owns Yes. "The request owner and the answer still needed" points at synthetic complaint A's missing owner.
Objections: No Approval Theater's author on Clear Approvals is right about the stalled middle; its objection to Receipt for Delay is right about confusing payments. Receipt for Delay's author on Who Owns Yes is right about blame risk, given taste answer 3.

# Role execution
sequential. All author and Cop outputs above executed by this one agent. Not isolated or measured audience feedback.
