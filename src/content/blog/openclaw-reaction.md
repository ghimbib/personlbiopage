---
title: "I Emailed a SaaS Company With Feedback. They Said No. So I Built It Myself."
description: "When 'doesn't fit our model' becomes 'fine, I'll build my own model.' A real story about agency, AI agents, and never asking for permission again."
date: 2026-03-21
image: /images/blog/openclaw-reaction/hero-banner.png
tags: ["AI", "AgenticAI", "BuildInPublic", "SaaS", "Productivity"]
draft: false
---

A friend of mine emailed a scheduling app called FlowSavvy a few months ago. He'd been using it daily, had specific ideas about how it could work better for him, and took the time to write thoughtful feedback. Not a complaint. A real suggestion, the kind product teams say they want.

Their response was polite. Professional. And firm: "Thanks for the feedback, but this doesn't fit our product model."

His workflow wasn't profitable enough to build for. His use case was valid but not valuable to them. He was an edge case, and edge cases don't ship.

He didn't know it at the time, but that email was the last time he'd ask a product for permission to use it his way.

![The response: doesn't fit our product model](/images/blog/openclaw-reaction/3-rejection.png)

---

## The stack you're already paying for

Before I explain what happened next, think about your own setup for a second.

You probably have a project manager. A CRM, or at least a spreadsheet pretending to be one. A calendar app. A task manager. A note-taking tool. Maybe a separate app for client follow-ups. Another one for scheduling meetings.

Each one does its thing. None of them talk to each other the way your brain needs them to.

So you build bridges. Zapier automations. Manual copy-paste between apps. "If this, then that" rules that break the moment your workflow changes. You become the integration layer, the human API connecting twelve tools that were never designed to work together.

The cost isn't just the $100 to $200 per month in subscriptions, though that's real. The cost is context-switching. Every time you alt-tab between apps, you lose the thread. Every time you manually move a task from your project manager to your calendar, you're doing work the system should be doing for you.

Here's the fundamental problem: each of those tools was built for everyone. Which means it was built for no one specific. Your workflow is yours. Their product model is theirs. And when those two things diverge, you lose. Not them. You.

No single tool is the villain. The system is.

![What you pay for vs what you build](/images/blog/openclaw-reaction/2-stack-comparison.png)

---

## What an evening of building actually feels like

My friend and I sat down one evening and built his system from scratch. Not a SaaS product. Not an app with a login screen. A set of AI agents, each with a specific role, running on his machine.

Within a few hours, he had a PM agent. Not a project management tool. A PM. Something that understands what tasks are open, what's overdue, and what matters today. It reads his task list and makes judgment calls about priority, not based on a flag he set three weeks ago and forgot about, but based on deadlines, dependencies, and what he's actually working on.

Then the scheduler clicked into place. The PM tells the scheduler about open tasks, and they show up in his calendar. Not because he dragged them there. Because the system knows they need to happen and finds time for them.

Then the CRM. He tracks clients and contacts, and when a follow-up is due, the system tells the scheduler to block time for it. The system remembers that he hasn't talked to a client in two weeks. He didn't remember. It did.

Then the CRM and scheduler started talking to each other. A client he hadn't contacted in twelve days? The CRM flagged it, the scheduler blocked thirty minutes on Thursday, and a prep note appeared with context from their last conversation. He didn't ask for any of that. The system inferred it from the pattern: client relationship cooling, follow-up overdue, calendar has a gap Thursday afternoon.

Then the dashboard. A single view showing everything: open tasks, client follow-ups, project statuses, agent activity. Not because he configured forty-seven widgets. Because the agents report their status to one place.

"I am so excited," he told me. And he meant it. Not in the way people say they're excited about a new app they'll forget in a week. Excited in the way you get when something finally works the way your brain always wanted it to.

The calendar integration isn't configured yet. Some pieces are rough. But that's the point. It's a system he can keep improving, not a product that shipped a version he's stuck with until the next update cycle.

---

## The moment it clicks

Somewhere around hour four, he went quiet for a minute. Then he said something I've been thinking about since:

"I feel like I can replace most productivity SaaS out there with my own solution. That's adapted to me."

This isn't arrogance. It's recognition. The things those SaaS tools do are not magic. They're patterns. Store data, trigger reminders, sort by priority, surface what's relevant. AI agents can do all of that. The difference is they can do it your way.

Think about what that means for the tools you use right now:

Your calendar app schedules meetings by time slot. An agent could schedule around your energy levels, protecting mornings for deep work and clustering meetings in the afternoon, adapting when your patterns change.

Your CRM tracks last contact date. An agent tracks relationship context: what you discussed, what they care about, when the conversation felt warm versus transactional. It ranks follow-ups by relationship health, not just recency.

Your task manager assigns priority based on a label you set manually. An agent triages by deadline, dependency, your actual capacity today, and what you've been procrastinating on. Not a static flag. A living assessment.

![The paradigm shift: from user to owner](/images/blog/openclaw-reaction/4-paradigm.png)

The paradigm shift is disorienting the first time you feel it: you're not a user anymore. You're the product owner. You decide the features. You decide the workflow. When something doesn't work, you don't file a ticket and wait six months. You fix it tonight. The product roadmap is whatever you need next Tuesday.

"Only thing that makes me nervous is the horror stories out there," he said. "But I'll just need to reinforce the guardrails, maybe?"

Fair. AI agents with too much autonomy can go sideways. Guardrails matter. You set boundaries on what each agent can and can't do. You review their work before it goes anywhere consequential. The system is powerful, not autonomous. You're still the decision-maker.

But here's the thing: the risk of an agent doing something unexpected is still lower than the certainty of a tool that refuses to adapt to you. One is a risk you can manage. The other is a limitation you can't.

---

## Fuck that then

That brings us back to FlowSavvy.

"I emailed FlowSavvy and gave them feedback and they said it doesn't fit our model."

Here's what "doesn't fit our model" really means: your workflow isn't profitable enough to build for. Your needs are valid, but not valuable. To them.

Every feature request form you've ever filled out, every feedback email you've ever sent, every "we'll pass this along to the team" response you've ever received; they were all saying the same thing. We decide what this tool does. You decide whether to use it.

![Fuck that then. Higgins will build it himself.](/images/blog/openclaw-reaction/5-thesis.png)

And he did. He built a scheduling system that does exactly what he asked FlowSavvy to do. It adapts when his workflow changes, because he controls the logic. No feature request form. No product roadmap he can't influence. No "sorry, that doesn't fit our model."

It took an evening. The same amount of time FlowSavvy's support team probably spent crafting their polite rejection.

![What they really mean vs what you can do about it](/images/blog/openclaw-reaction/6-translation.png)

Every SaaS product you use is someone else's opinion about how you should work. Sometimes that opinion is right. Often it's close enough. But when it's not, and if you've ever felt that gap between what a tool does and what you need it to do, you now have an alternative that didn't exist two years ago.

---

## You don't need permission

Think about the last time you submitted feedback to a tool you use every day. Did they build it? Or are you still waiting?

That gap between "what this tool does" and "what I need it to do" is where agents live. Not in some future version of AI. Right now. With free models, running on your laptop, built in an evening.

Not everyone needs to build a full system. Most people won't. But knowing you can, from scratch, in one sitting, for free? That changes the power dynamic between you and every product you pay for. The next time a tool tells you "that doesn't fit our model," you have a real option that isn't "accept it" or "switch to a competitor who will eventually say the same thing."

You don't need their permission to build the thing you need.

![You don't need permission to build the thing you need.](/images/blog/openclaw-reaction/7-closing.png)
