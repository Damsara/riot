# piece demo: FocusFence, post, feature launch, X

Manifesto: `test/fixtures/manifesto.md` (stage: chosen, direction-version: 1). Occasion: feature launch, the 15 minute grace window. Format: post, platform X. Run by hand, no builder present, per RIOT-18.

## Step 3: first draft

FocusFence just shipped a smart new grace window: 15 minutes before we auto-decline whatever landed in your focus block. We help you protect your time so you can focus on what matters. And yeah, it's the app that tells your coworker no so you don't have to. Today's real decline: "Declined. Your own priority list ranks this meeting third. Grace window used."

## Step 4: banned-list pass

Section 3's banned list: Reclaim.ai, Clockwise, and Calendly all pitch "smart scheduling" and "protect your time" in nearly the same sentence, all show a calm pastel calendar screenshot, and all avoid naming who is doing the over-booking.

- Cut: "We help you protect your time so you can focus on what matters." This is the banned list's own phrase, word for word, plus the calm, no-stakes filler ("focus on what matters") that sits under every competitor's pastel screenshot. Nothing in it is specific to FocusFence.
- Rewrite: "FocusFence just shipped a smart new grace window" becomes "FocusFence waits 15 minutes, then it declines." "Smart" echoes "smart scheduling" from the banned list; the replacement states the one fact only this product does, not an adjective a competitor would use too.

Piece after this pass: FocusFence waits 15 minutes, then it declines. And yeah, it's the app that tells your coworker no so you don't have to. Today's real decline: "Declined. Your own priority list ranks this meeting third. Grace window used."

## Step 5: positive check

Recurring move: present. The piece ends on the exact auto-reply text FocusFence sent, per section 5's Recurring move.

Spine: the third of the three things competitors cannot say, "it treats no as a feature to advertise rather than friction to smooth over" (section 5). The piece's whole second half is FocusFence publishing its own decline instead of hiding it, which is that exact move. Pass, no return to step 3.

## Step 6: unslop

- The label "Today's real decline:" restates what follows and adds nothing new, the bold-label-bullet tell. Rewritten to "Sent this morning:", which adds real information (timing) the quote doesn't already carry.
- No em dashes or curly quotes were present. "And yeah," is the author's own voice and is left alone, per unslop's "what not to touch."

Piece after unslop: FocusFence waits 15 minutes, then it declines. And yeah, it's the app that tells your coworker no so you don't have to. Sent this morning: "Declined. Your own priority list ranks this meeting third. Grace window used."

## Step 7: Cop read

Dispatched one sub-agent on the haiku model (claude-haiku, via the Agent tool's model override) with riot-canon's Cop brief, sections 1 to 4 of the fixture manifesto as the pack, the piece above, and "Mode: piece".

The reply below is verbatim except for two em dashes, replaced with periods per this repo's zero-tolerance em-dash rule, with capitalization adjusted where a new sentence now starts; no other wording changed.

```
Verdict: scrolled at nowhere | stopped at "Your own priority list ranks this meeting third"
Scrolled: didn't
Stopped: at the message itself. "Your own priority list ranks this meeting third. Grace window used." That's boundary enforcement, not protection. It's throwing the person's own words back at them.
Sounds like: Direction. "Your own priority list ranks this meeting third" is not about the calendar being smart or nice; it's about the requester's stated priorities being enforced against them. Different from the category default's "protect your time" passivity.
Person or model: person. "Sent this morning." Specific timestamp detail from someone who actually uses or built this, not explaining why you should care, just showing you what happens.
```

One round of fixes on the lines the Cop named: the Cop named no line as a problem, it scrolled past nothing and stopped on the piece's own closing line. No fixes needed. No smoothing pass follows.

## Step 8: final piece

FocusFence waits 15 minutes, then it declines. And yeah, it's the app that tells your coworker no so you don't have to. Sent this morning: "Declined. Your own priority list ranks this meeting third. Grace window used."

Written to `test/fixtures/piece-demo/2026-09-28-post-feature-launch.md`. Log line appended to `test/fixtures/piece-demo/manifesto-after.md`, a copy of the fixture manifesto.
