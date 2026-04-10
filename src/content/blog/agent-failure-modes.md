---
title: "What AI Agents Are Bad At, and Why That Matters More Than What They’re Good At"
description: "A task in my system emitted task.picked_up every thirty seconds for nearly an hour before it finally failed. That taught me more about trust than any clean demo ever could."
category: "AI Systems"
date: 2026-04-08
image: /images/blog/agent-failure-modes/hero-banner.png
tags: ["AI", "AgenticAI", "Reliability", "Systems"]
draft: false
---

<hr>

<p>
A task in my system emitted <code>task.picked_up</code> every thirty seconds for nearly an hour before it finally died with <code>dispatch_failed:exit_1</code>.
</p>

<p>
From the outside it looked alive. Nothing useful was actually happening.
</p>

<p>
That incident taught me more about trusting AI agents than any clean demo ever could.
</p>

<p>
I trust my agent system more now than I did a month ago, not because it got smarter, but because it got less surprising. That is a much less glamorous standard than “capable,” but it turns out to be a far more useful one.
</p>

<p>
The real limiter on agent adoption is not raw capability. It is failure behavior. Not whether the first answer looks good, but whether the surrounding state transitions are coherent, bounded, and repairable when things go wrong.
</p>

<hr>

<h2>Capability is the easy story. Reliability is the real one.</h2>

<p>
I am not the only one seeing this. Martin Fowler is writing about harness engineering. GitHub is writing about failures at the boundaries between agents. Fine. I ended up in the same place the uglier way, by watching my own system look healthy while it quietly did the wrong thing.
</p>

<p>
Did the task really start? Did stale state leak into the next step? Did the retry logic understand what kind of failure actually happened? Did the recovery path reduce uncertainty, or create a second incident on top of the first?
</p>

<p>
That is the point where I either trust the system a little more, or stop believing what the dashboard says.
</p>

<hr>

<h2>False progress is worse than visible failure</h2>

<p>
The repeated fake pickup was one example, but not the only one. I also ran into tasks carrying terminal metadata from a previous lifecycle step. A task could move forward while still holding old fields like <code>failed_at</code>, <code>completed_at</code>, <code>result</code>, or <code>error</code>. It was both active and not active, depending on which field you looked at.
</p>

<p>
That kind of contradiction poisons everything around it. Humans read the queue wrong. Monitors react to the wrong thing. Retries fire on bad assumptions. Routing logic starts making decisions from contaminated state.
</p>

<p>
This is why I’ve stopped thinking about stale context as just a model problem. Sometimes it is a prompt problem. A lot of the time it is state hygiene. The fix was not more reasoning. It was scrubbing old terminal fields when the task changed lifecycle.
</p>

<p>
If those transitions are dirty, everything downstream gets harder to interpret.
</p>

<hr>

<h2>Retrying is not the same as recovering</h2>

<p>
I used to think retry logic was mostly a resilience problem. Now I think it is mostly a classification problem.
</p>

<p>
A confirmed <code>429</code> is not the same thing as a timeout. A timeout is not the same thing as a <code>503</code>. A provider brownout is not the same thing as either of those. If the system treats all three as “try again later,” it does not get stronger. It gets noisy.
</p>

<p>
That noise is expensive. Broken tasks keep waking up. Operators lose the plot. Spend drifts upward. The system looks busy while making itself harder to understand.
</p>

<p>
The better pattern ended up being much less magical. Rate limits defer differently from missing <code>Retry-After</code> responses. Timeouts fail fast. Brownouts trip a circuit breaker instead of spawning a parade of doomed retries. The policy feels less heroic, but it is much easier to trust because the failure type actually drives the response.
</p>

<hr>

<h2>The recovery path can be the bigger incident</h2>

<p>
One of the most useful lessons from the last month is that the original failure is often not the worst part. The recovery path is.
</p>

<p>
I saw repeated restart and wake churn at the control-plane level, with recovery actions colliding with live work, session locks, and draining states. The system was trying to pull itself back to health and, in the process, creating a second layer of instability.
</p>

<p>
That changed what I value in the system. If it restarts aggressively, re-arms itself too early, or treats wake attempts as proof of progress, it is not getting healthier. It is just generating motion while operators lose the thread.
</p>

<hr>

<h2>Boundary failures are where multi-agent systems get weird</h2>

<p>
This is also why I think “handoff failure” is too soft a phrase for what actually happens. The more concrete version is boundary failure.
</p>

<p>
In my system, that showed up through watcher noise and meta-task contamination. Tasks that existed only to monitor, alert, or re-check state could start behaving like first-class work unless the system explicitly excluded them. Once that happens, your queue stops being a clean picture of the workload. It becomes a blend of real work and self-generated commentary about the work.
</p>

<p>
That is not a small bookkeeping issue. It changes what operators think is happening. It changes what gets escalated. It changes what gets starved. A multi-agent system can look coordinated while quietly confusing its control layer with its execution layer.
</p>

<p>
That is the kind of failure that does not show up in a benchmark, but absolutely shows up in production.
</p>

<hr>

<h2>What changed</h2>

<p>
The biggest shift for me was simple. I stopped asking, “how do I make this smarter?” and started asking, “how do I make failure visible, bounded, and boring?”
</p>

<p>
That led to stricter state transitions, explicit integrity breadcrumbs, wake verification, retry rules by failure type, and cleaner separation between real work and monitoring noise.
</p>

<hr>

<h2>Trust is built on bounded failure, not clean demos</h2>

<p>
I do not need an agent system to be perfect. I need it to fail in ways I can understand.
</p>

<p>
I need bad states to be visible. I need retries to mean something. I need recovery paths that reduce uncertainty instead of multiplying it. That is the standard I now care about more than almost any capability claim.
</p>

<p>
I also do not think I have this fully solved. The part I still distrust most is recovery under overlapping failures, when a real task issue, a control-plane restart, and watcher activity all start colliding in the same window. That is still the zone where a system can surprise me.
</p>

<p>
But that is exactly the point. Trust is not “nothing breaks.” Trust is knowing where the system is still weak, containing that weakness, and making the failure surface legible enough to operate anyway.
</p>

<p>
That is why what AI agents are bad at matters more than what they are good at. Their strengths get your attention. Their failure behavior determines whether they deserve a place in a real operating environment.
</p>

<p>
The teams that get this right will not be the ones with the flashiest demos. They will be the ones that know their failure surface cold.
</p>
