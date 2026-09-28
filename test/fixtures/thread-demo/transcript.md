# piece demo: FocusFence, thread, feature launch, X

Manifesto: `test/fixtures/manifesto.md` (stage: chosen, direction-version: 1). Occasion: feature launch, the 15 minute grace window. Format: thread, platform X. Run by hand, no builder present, per RIOT-19.

## Step 3: first draft

1/ FocusFence just shipped something most calendar tools would never ship: a countdown to telling you no.

2/ Drop a meeting into someone's focus block and a 15 minute grace window starts. It's smart scheduling that protects your time the second the window closes, same as every other calendar app claims to do.

3/ Every engineering manager on r/ExperiencedDevs has said some version of this: "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining."

4/ FocusFence is the app that tells your coworker no so you don't have to. It doesn't hide behind a vague "time conflict."

5/ Here's what actually goes out when the grace window closes: "Declined. Your own priority list ranks this meeting third. Grace window used."

6/ That's not a scheduling feature. That's a boundary, enforced by software, in public.

## Step 4: banned-list pass

Section 3's banned list: Reclaim.ai, Clockwise, and Calendly all pitch "smart scheduling" and "protect your time" in nearly the same sentence, all show a calm pastel calendar screenshot, and all avoid naming who is doing the over-booking.

- Rewrite tweet 2: "It's smart scheduling that protects your time the second the window closes, same as every other calendar app claims to do" uses the banned list's own two phrases, "smart scheduling" and "protects your time," word for word, and then admits it's the same as the competitors, the opposite of what this tweet needs to do. Rewritten to "Nothing smart about it, it's a timer, and it ends in a decline," which states the one fact only this product does instead of borrowing the category's adjective.

Thread after this pass: tweet 2 becomes "Drop a meeting into someone's focus block and a 15 minute grace window starts. Nothing smart about it, it's a timer, and it ends in a decline." Tweets 1, 3, 4, 5, 6 are unchanged.

## Step 5: positive check

Recurring move: present. Tweet 5 is the exact auto-reply text FocusFence sent, per section 5's Recurring move.

Spine: the third of the three things competitors cannot say, "it treats no as a feature to advertise rather than friction to smooth over" (section 5). Tweet 6's closing line, publishing the decline as a boundary rather than hiding it, is that exact move. Pass, no return to step 3.

## Step 6: unslop

- No em dashes or curly quotes were present.
- "That's not a scheduling feature. That's a boundary, enforced by software, in public." is a deliberate parallel structure in the Direction's own voice (matching the bar description's flatness), not a model tell; left alone, per unslop's "what not to touch."
- No bold-label bullets, no "not just X but Y," no filler transitions between tweets.

Thread after unslop: unchanged from the end of step 4.

## Step 7: Cop read

Dispatched one sub-agent on the haiku model (claude-haiku, via the Agent tool's model override) with riot-canon's Cop brief, sections 1 to 4 of the fixture manifesto as the pack, the thread above, and "Mode: piece".

The reply below is verbatim; no em dashes were present so none were replaced.

```
Verdict: didn't scroll | stopped at tweet 3
Scrolled: didn't
Stopped: tweet 3. "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining."
Sounds like: Direction. "That's not a scheduling feature. That's a boundary, enforced by software, in public."
Person or model: person. "Nothing smart about it, it's a timer, and it ends in a decline."
```

One round of fixes on the lines the Cop named: the Cop named no line as a problem, it stopped on tweet 3 and confirmed the closing line sounds like the Direction. No fixes needed. No smoothing pass follows.

## Step 8: final piece

1/ FocusFence just shipped something most calendar tools would never ship: a countdown to telling you no.

2/ Drop a meeting into someone's focus block and a 15 minute grace window starts. Nothing smart about it, it's a timer, and it ends in a decline.

3/ Every engineering manager on r/ExperiencedDevs has said some version of this: "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining."

4/ FocusFence is the app that tells your coworker no so you don't have to. It doesn't hide behind a vague "time conflict."

5/ Here's what actually goes out when the grace window closes: "Declined. Your own priority list ranks this meeting third. Grace window used."

6/ That's not a scheduling feature. That's a boundary, enforced by software, in public.

Written to `test/fixtures/thread-demo/2026-09-28-thread-feature-launch.md`. Log line appended to `test/fixtures/thread-demo/manifesto-after.md`, a copy of the fixture manifesto.
