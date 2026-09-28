# piece demo: FocusFence, article, why we built it, dev.to

Manifesto: `test/fixtures/manifesto.md` (stage: chosen, direction-version: 1). Occasion: why we built it. Format: article, platform dev.to. Run by hand, no builder present, per RIOT-19.

## Step 3: first draft

Title options:
1. Why FocusFence Says No Instead of Being Nice About It
2. I Declined My Skip-Level's Meeting by Accident, So I Built a Tool That Does It on Purpose
3. The Calendar Tools You Use Won't Say the Word "No"

I declined my own skip-level's meeting by accident once, and got a Slack message about it within four minutes. That's the moment FocusFence started, because nothing about those four minutes felt like a scheduling problem.

FocusFence helps you protect your time so you can focus on what matters, and it does that through smart scheduling like every other calendar app on the market.

Reclaim, Clockwise, and Calendly all sell that same promise behind the same calm pastel calendar screenshot, and none of them will say the actual bug out loud: somebody has to be the one who says no, and none of these tools want to be that somebody.

Read r/ExperiencedDevs on any given week and you'll find the real complaint: "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining." The guilt isn't a side effect of a bad calendar. It is the actual product gap.

FocusFence closes it by taking the guilt off the person and putting it on the software. Drop a meeting into someone's focus block and a 15 minute grace window starts. If nothing changes, FocusFence declines it and shows its work: "Declined. Your own priority list ranks this meeting third. Grace window used."

It's the app that tells your coworker no so you don't have to. Not politely. Not vaguely. With the requester's own stated priorities, thrown back at the meeting they just tried to book.

## Step 4: banned-list pass

Section 3's banned list: Reclaim.ai, Clockwise, and Calendly all pitch "smart scheduling" and "protect your time" in nearly the same sentence, all show a calm pastel calendar screenshot, and all avoid naming who is doing the over-booking.

- Cut: "FocusFence helps you protect your time so you can focus on what matters, and it does that through smart scheduling like every other calendar app on the market." This sentence uses the banned list's two signature phrases, "protect your time" and "smart scheduling," word for word, and then says the quiet part out loud, that FocusFence is "like every other calendar app." Cut entirely; the following paragraph already makes the competitor contrast, and this sentence added nothing FocusFence-specific.

Article after this pass: the paragraph above is removed. The piece now opens with the origin story, moves straight to the Reclaim/Clockwise/Calendly critique, then the audience complaint, the mechanism, and the closing bar phrase, unchanged from the draft.

## Step 5: positive check

Recurring move: present. The piece ends with the exact auto-reply text FocusFence sent, per section 5's Recurring move.

Spine: the third of the three things competitors cannot say, "it treats no as a feature to advertise rather than friction to smooth over" (section 5). The closing paragraph, publishing the decline with the requester's own priorities thrown back at them instead of a vague "time conflict," is that exact move. Pass, no return to step 3.

## Step 6: unslop

- No em dashes or curly quotes were present.
- "Not politely. Not vaguely." is a deliberate three-beat structure in the Direction's own flat voice, not a model tell; left alone, per unslop's "what not to touch."
- No bold-label bullets, no "not just X but Y," no filler transitions between paragraphs.

Article after unslop: unchanged from the end of step 4.

## Step 7: Cop read

Dispatched one sub-agent on the haiku model (claude-haiku, via the Agent tool's model override) with riot-canon's Cop brief, sections 1 to 4 of the fixture manifesto as the pack, the article above, and "Mode: piece".

The reply below is verbatim; no em dashes were present so none were replaced.

```
Verdict: scrolled at "FocusFence closes it by taking the guilt..." | stopped at "Not politely. Not vaguely."
Scrolled: "Drop a meeting into someone's focus block and a 15 minute grace window starts..." Language shifted to spec sheet.
Stopped: "Not politely. Not vaguely. With the requester's own stated priorities, thrown back at the meeting they just tried to book." The "thrown back at" is how a frustrated person talks, not marketing copy.
Sounds like: Direction. "The guilt isn't a side effect of a bad calendar. It is the actual product gap." Names the actual gap, not the softened frame competitors use.
Person or model: person. "None of these tools want to be that somebody." The annoyed personification is distinctly human.
```

One round of fixes on the line the Cop named, nothing else: "Drop a meeting into someone's focus block and a 15 minute grace window starts." reads like a spec sheet, procedural steps rather than a person talking. Rewritten to "You get 15 minutes, then it declines for you," which states the same mechanism in the same flat, second-person voice as the piece's opening and closing lines. No other line was touched. No smoothing pass follows.

## Step 8: final piece

I declined my own skip-level's meeting by accident once, and got a Slack message about it within four minutes. That's the moment FocusFence started, because nothing about those four minutes felt like a scheduling problem.

Reclaim, Clockwise, and Calendly all sell that same promise behind the same calm pastel calendar screenshot, and none of them will say the actual bug out loud: somebody has to be the one who says no, and none of these tools want to be that somebody.

Read r/ExperiencedDevs on any given week and you'll find the real complaint: "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining." The guilt isn't a side effect of a bad calendar. It is the actual product gap.

FocusFence closes it by taking the guilt off the person and putting it on the software. You get 15 minutes, then it declines for you, and shows its work: "Declined. Your own priority list ranks this meeting third. Grace window used."

It's the app that tells your coworker no so you don't have to. Not politely. Not vaguely. With the requester's own stated priorities, thrown back at the meeting they just tried to book.

Written to `test/fixtures/article-demo/2026-09-28-article-why-we-built-it.md`. Log line appended to `test/fixtures/article-demo/manifesto-after.md`, a copy of the fixture manifesto.
