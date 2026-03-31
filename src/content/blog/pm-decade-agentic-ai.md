---
title: "I've Been a PM for 10 Years. Building an AI Fleet Used Skills I Didn't Know I Had."
description: "The skills that make agentic AI work aren't new. They're PM fundamentals: writing specs, sequencing sprints, defining done, running retros. Here's what a decade of product management taught me about running a 9-agent AI fleet."
date: 2026-03-28
image: /images/blog/pm-decade-agentic-ai/hero-banner.png
tags: ["AI", "AgenticAI", "ProductManagement", "BuildInPublic"]
draft: false
---

---

## The mistake I'd already made before

The most expensive mistake I made running an AI fleet was one I'd made before, years earlier, in sprint planning. I dispatched two agents in parallel on work that had a hidden dependency. Product built a go-to-market strategy while Research was still running competitive intelligence.

Research finished 40 minutes later. Its findings contradicted three of Product's core assumptions. I'd built a strategy on incomplete market data because I didn't sequence the work correctly.

In sprint planning, the fix is a dependency field in the backlog. In agent orchestration, the fix is a `dependsOn` field in the task JSON. The orchestrator holds dependent tasks until upstream work completes. The instinct that caught the problem wasn't something I learned from an AI course. It was something I learned from years of managing cross-functional product teams.

---

## The parallel nobody's drawing

Every "AI Product Manager" job description I read lists prompt engineering, LLM basics, and familiarity with AI tools. That's the wrong frame.

The skills that make agentic AI work aren't new. They're PM fundamentals: writing specs that survive handoff, sequencing work with dependencies, defining "done" before execution starts, running retrospectives that change behavior instead of filling a Confluence page.

I've been running a 9-agent AI fleet for three months, orchestrating three SaaS products simultaneously. The biggest mistakes weren't technical. They were classic PM failures wearing new clothes.

---

## Writing specs for machines

Every agent in the fleet has a file called SOUL.md. It defines the agent's identity, behavioral rules, voice, decision logic, and escalation paths. It includes worked examples: here's the wrong way to handle this, here's the right way.

It took me three rewrites of one agent's SOUL.md before I recognized what I was doing. I was writing a PRD. Not for an engineer. For a model.

The failure modes are identical. Ambiguous acceptance criteria in a PRD means the engineer builds something that technically meets the spec but misses the intent. Same with agent instructions. Over-specify and the system is brittle. Leave out edge cases and the happy path works while everything else breaks.

The test is the same one I've used for a decade: if I handed this to someone with no context about my business, who will interpret every word literally, would they build the right thing? The audience changed. The craft didn't.

---

## Sprint planning with JSON files

The fleet runs on a queue system. Four JSON files, one per agent group. Each task has a priority level (P0 through P3), a dependency field, a complexity score, and routing metadata.

This is a sprint board. The vocabulary changed. The discipline didn't.

Every bad sprint planning failure mode showed up in the queue within the first month. Over-committed capacity: dispatching 12 tasks when the agent can process 3 before context degrades. Under-specified deliverables: an agent that can't start because the task description is three words long. Priority inflation: everything's P1, so nothing is urgent.

On one particularly chaotic day, before the deduplication guard was in place, eight tasks got dispatched twice. One agent produced stale output that a downstream agent consumed without knowing it was a duplicate.

The fix wasn't technical. It was process: before starting any task, check the completed array first. If it's already done, log it and stop. That's not an AI innovation. That's the PM habit of checking the board before picking up a new ticket.

---

## Defining "done" before anyone starts

"Write a good resume" is the agent equivalent of "make it user-friendly." Both feel clear. Both are useless.

Early in the fleet's life, I dispatched resume-tailoring tasks with minimal constraints. The output looked professional. It also contained fabricated metrics, borrowed accomplishments from the wrong employer, and inflated domain expertise that wouldn't survive a behavioral interview.

The agent wasn't lying. It was optimizing for the objective I gave it: make a good resume. I didn't define what "good" meant.

The fix was a QA standard. Six binary checks per resume. Every bullet classified as TRACEABLE (maps to a verified fact), STRETCH (logical bridge, flagged for review), or FABRICATED (hard fail). The standard exists in writing before any evaluation runs. This is acceptance criteria, written by a PM, executed by a QA agent.

---

## Retros that survive restarts

Agents start every session with zero working memory. Whatever they learned last session is gone unless you wrote it down.

It's the same problem teams have with retrospectives. The retro surfaces three good insights. Nobody encodes them. Six weeks later, the same retro, same problem.

The fleet uses a file called PATTERNS.md. After every task, agents add 1 to 3 patterns: what worked, what to avoid, what to suggest. Every new session starts by reading it. When I correct an agent mid-session, its behavioral spec gets updated right then, not next sprint.

This is the retro that actually changes behavior. Surface the learning, encode it in writing, reference it before the next cycle. The difference is that agents will actually read the doc.

---

## What doesn't transfer

Not everything maps cleanly. Two PM instincts actively slowed me down.

First: consensus-building. PMs get alignment before committing. In agent orchestration, the orchestrator decides and dispatches. The fix was uncomfortable: dispatch first, review output after. Move alignment from the input layer to the validation layer.

Second: strategic ambiguity. A good PRD leaves room for engineering judgment. You specify the "what" and let the team figure out the "how."

Agents interpret ambiguity as permission. "Use your best judgment" in a SOUL.md produces output you didn't want and can't predict. The new instinct: over-specify, include examples, include anti-patterns. Treat every edge case as if it will happen on the first run. With agents, it will.

---

## The orchestra changed. The orchestrator didn't.

The next time you run a sprint planning meeting, notice the instincts. Sequencing. Dependencies. Scope. "What does done look like?"

Those aren't PM skills that AI will replace. They're the skills that make AI work. Every agentic system I've seen fail, failed for PM reasons: unclear specs, ignored dependencies, no quality gate, no persistent learning.

I spent three months discovering that "AI product management" is the old discipline applied to a new medium. The specs are SOUL.md files instead of PRDs. The sprint board is a JSON queue instead of Jira. The retro is PATTERNS.md instead of a Miro board.

Different vocabulary. Same instincts. The orchestra changed. The orchestrator's job didn't.
