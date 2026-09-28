# piece demo: FocusFence, video, feature launch, screen recording, TikTok

Manifesto: `test/fixtures/manifesto.md` (stage: chosen, direction-version: 1). Occasion: feature launch, the 15 minute grace window. Format: video, screen recording, platform TikTok. Run by hand, no builder present, per RIOT-20.

## Step 3: first draft

| On screen | Said aloud | Seconds |
|---|---|---|
| Slack notification popping up: "Meeting declined" | This is the app that tells your coworker no so you don't have to. | 3 |
| Calendar view, a meeting request dropping into a blocked focus block, a 15:00 countdown starting | We help you protect your time so you can focus on what matters. | 4 |
| The requester's own priority list on screen, the declined meeting highlighted third | I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining. Not anymore. | 5 |
| The real auto-reply text, full screen: "Declined. Your own priority list ranks this meeting third. Grace window used." | Reading the reply text aloud, word for word. | 4 |

## Step 4: banned-list pass

Section 3's banned list: Reclaim.ai, Clockwise, and Calendly all pitch "smart scheduling" and "protect your time" in nearly the same sentence, all show a calm pastel calendar screenshot, and all avoid naming who is doing the over-booking.

- Cut and rewrite: row 2's said-aloud line, "We help you protect your time so you can focus on what matters," is the banned list's own phrase verbatim. Rewritten to "FocusFence waits 15 minutes, then it declines," which states the one mechanical fact only this product carries instead of a competitor's adjective.

Piece after this pass: row 2's said-aloud line reads "FocusFence waits 15 minutes, then it declines." The other three rows are unchanged.

## Step 5: positive check

Recurring move: present. The final row is the exact auto-reply text FocusFence sent, per section 5's Recurring move.

Spine: the third of the three things competitors cannot say, "it treats no as a feature to advertise rather than friction to smooth over" (section 5). The video's closing shot is FocusFence publishing its own decline on screen instead of hiding it, which is that exact move. Pass, no return to step 3.

## Step 6: unslop

- Scanned all four said-aloud lines against the tells: no em dashes, no curly quotes, no banned words, no bold-label bullets. Row 3's fragment "Not anymore." is deliberate roughness, the author's own voice, left alone per unslop's "what not to touch."
- No changes made in this pass.

## Step 7: Cop read

Dispatched one sub-agent on the haiku model (model: haiku, via the Agent tool's model override) with riot-canon's Cop brief, sections 1 to 4 of the fixture manifesto as the pack, the script table above, and "Mode: piece".

The reply below is verbatim, no em dashes were present so none were replaced.

```
Verdict: scrolled at line 2 | stopped at line 3
Scrolled: "FocusFence waits 15 minutes, then it declines." (feature mechanics, same as every competing app)
Stopped: line 3, "and then I'm the jerk for declining" (the actual social friction, not calendar tricks)
Sounds like: Direction. "the jerk for declining" owns the shame and boundary violation, where the category default glosses over it with "smart scheduling"
Person or model: model. "FocusFence waits 15 minutes, then it declines." is a feature spec without the breath of speech
```

One round of fixes on the line the Cop named: row 2's said-aloud line, "FocusFence waits 15 minutes, then it declines," is the line the Cop scrolled past and named as sounding like a model, a feature spec with no breath of speech. Rewritten to "Fifteen minutes. Then it declines." Two clipped sentences instead of one flat descriptive one, same fact, spoken rhythm instead of a spec. No other line touched, and no smoothing pass follows.

## Step 8: final piece

| On screen | Said aloud | Seconds |
|---|---|---|
| Slack notification popping up: "Meeting declined" | This is the app that tells your coworker no so you don't have to. | 3 |
| Calendar view, a meeting request dropping into a blocked focus block, a 15:00 countdown starting | Fifteen minutes. Then it declines. | 4 |
| The requester's own priority list on screen, the declined meeting highlighted third | I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining. Not anymore. | 5 |
| The real auto-reply text, full screen: "Declined. Your own priority list ranks this meeting third. Grace window used." | Reading the reply text aloud, word for word. | 4 |

Written to `test/fixtures/video-demo/2026-09-28-video-feature-launch.md`. Log line appended to `test/fixtures/video-demo/manifesto-after.md`, a copy of the fixture manifesto.
