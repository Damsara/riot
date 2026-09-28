---
format: launch
occasion: launch on Show HN
direction-version: 1
cop-verdict: stopped on the r/ExperiencedDevs complaint line, no fixes needed
---

Title: Show HN: FocusFence, it declines your meetings and shows you why

Body: FocusFence is the app that tells your coworker no so you don't have to. It watches your Google Calendar focus blocks and your Slack messages, waits 15 minutes in case the request gets pulled, then declines and replies with the requester's own stated priority list. Real decline from this morning: "Declined. Your own priority list ranks this meeting third. Grace window used." The r/ExperiencedDevs complaint that stuck with me: "I block Tuesday mornings every week and someone always finds a way to book over it, and then I'm the jerk for declining." FocusFence takes the jerk part off you and hands it to the app. Source: github.com/focusfence/focusfence, MIT licensed, run it with npm install && npm start. Would love your feedback in the comments.

First comment: Built this after declining my own skip-level's meeting by accident and getting a Slack message about it within four minutes. How: a Slack app plus the Google Calendar API watch a focus block, hold a 15 minute grace window, then post the decline with the requester's own priorities pulled from a stored list. Why: every calendar tool talks about time like a resource you optimize, not a boundary you enforce, so FocusFence enforces it and shows the receipt.
