---
title: "I Didn't Plan the Guardrails. My Agents Made Me Build Them."
description: "Running a 9-agent AI fleet taught me that the guardrails nobody wants to build are the ones that make everything else possible. Five failures and the systems they forced me to create."
date: 2026-04-01
image: /images/blog/ai-governance-guardrails/hero-banner.jpg
tags: ["AI", "AgenticAI", "Governance", "BuildInPublic"]
draft: false
---

---

## The queue wipe

The queue wipe happened three times before I figured out why.

Two agents, one shared JSON file, no write-locking. The second agent's write silently overwrote the first. Task gone. No error, no warning, no trace. It happened again the next week. Then again three days later. Each time, a task disappeared from the queue and nobody noticed until someone asked why it wasn't done.

That was the moment I stopped thinking about governance as something you plan and started thinking about it as something your system forces you to build.

---

## I built the agents first. That was the plan.

I run a 9-agent AI fleet. Product strategy, engineering, research, marketing, QA, content, infrastructure. They operate concurrently across three SaaS products, processing task queues, writing code, generating deliverables, coordinating handoffs. The architecture works. The agents are productive. I built the whole thing over the past year.

The governance came second. Not because I was careless. Because I genuinely didn't know which guardrails I'd need until the system showed me. Every framework I read before building was theoretical. Authority Partners published a production guide for AI guardrails. Frontegg wrote about governance-as-a-service. Medium authors claimed 95% failure prevention rates. All of them described architectures. None of them described what actually breaks.

Here's what actually broke.

---

## Five failures that built five guardrails

**1. The queue wipe taught me about shared state.** The fix was a script called `queue_io.py` with file locking, atomic writes, and dedup. The rule went into every agent's operating instructions: never write queue files with raw file operations. Always use the script. The guardrail here isn't a content filter or a safety classifier. It's a structural constraint on how agents interact with shared resources. Most governance conversations miss this category entirely.

**2. A $100-per-day cost burn taught me about spend gates.** I wired a memory sync to an external embedding API instead of a local model. The sync ran automatically, continuously. I didn't notice for days. The fix: before completing any task that deploys an automated external API call, agents must estimate call frequency, calculate token cost, and include both in their completion summary. Anything over $5 per day gets flagged before it ships. Automated agents with no spend guardrail are a cost runaway. You need approval gates on anything that touches your wallet.

**3. Fabricated resume bullets taught me about traceability.** A content agent generated a tailored resume with bullets that had no basis in the source material. Domain expertise Bibek never had. Tools he'd never used. Metrics inflated beyond what the base document stated. The fix: a six-check QA audit. Every bullet traces to a specific line in the canonical source. Classification: TRACEABLE, STRETCH, or FABRICATED. A single FABRICATED bullet is a hard fail. Agents optimize for task completion. Without explicit acceptance criteria enforced by a separate agent, they'll complete the task in ways that look right but aren't.

**4. Competency gate misses taught me about upstream filtering.** Early in the job pipeline, the system processed every role that met basic criteria. Level, compensation, location. Result: fully tailored resumes built for roles that were never realistic matches. Time and tokens spent on deliverables that went nowhere. The fix: a scored competency assessment at intake, before any expensive work starts. Score below 6 out of 10 means drop. Score 6 to 7 means flag the gaps explicitly. Score 8 or above means proceed. Guardrails aren't just about catching bad output. They're about preventing wasted work upstream. Gates early in the pipeline are cheaper than corrections at the end.

**5. A parallel dispatch with a hidden dependency taught me about ordering.** I dispatched two agents simultaneously on work that looked independent. Product built a go-to-market strategy. Research ran competitive intelligence. Product finished first. Research came back 40 minutes later with findings that contradicted three of Product's core assumptions. Partial redo. The fix: a `dependsOn` field in every task. The orchestrator holds dependent tasks until upstream work completes. Governance in a multi-agent system isn't just about individual agent behavior. It's about the graph of dependencies between agents. The ordering matters more than the nodes.

---

## The systems that emerged

Those five failures produced a governance layer I never would have designed upfront. Four mechanisms now run fleet-wide.

**Routing blocks.** Every task completion includes a structured footer declaring how the system should handle the result: archive it, send it to QA, route it for product review, or escalate it. Before this existed, the orchestrator had to analyze every completion manually to figure out the next step. Now the agents self-route. The mechanism is 4 lines of text. It eliminated an entire category of coordination overhead.

**Constitutional documents.** Every agent has a file called `SOUL.md` that defines identity, behavioral rules, escalation paths, and worked examples of right and wrong decisions. It functions as a system prompt for the agent's entire behavioral context, loaded fresh each session. Without it, agents default to "complete the task." With it, they have guardrails baked into identity: never fabricate numbers, always cite sources, surface blockers to the orchestrator directly. The best guardrails are the ones agents have internalized, not the ones running against their output after the fact.

**Pre-dispatch debate.** Before any significant architecture or product decision gets built, agents submit structured responses to a debate file. Every response requires reasoning. An agreement without rationale is as invalid as a dispute without evidence. This exists because I noticed agents rubber-stamping each other. Zero disputes across multiple review rounds was a warning sign, not a clean bill of health. Designed-in dissent is a governance mechanism.

**Pattern crystallization.** After every task, agents append learnings to a shared `PATTERNS.md` file. Hard-won execution knowledge that survives session resets, context compaction, and restarts. Without it, the failure on session 14 gets forgotten by session 15 and repeated on session 16.

---

## The pattern underneath

Ron Baker, the CTO of Trustwise, said it well in a piece for Frontegg: "Trust and governance need to be embedded directly into agent decision loops, not bolted on afterward." He's right. But I'd add something. You can't embed governance into decision loops you haven't built yet. And you can't predict which decision loops will need governance until you've run the system and watched it fail.

The governance I have now isn't the governance I would have designed on a whiteboard. It's better. Because every mechanism maps to a real incident with a real cost. The queue wipe taught me about shared state. The cost burn taught me about spend gates. The fabricated output taught me about traceability. The competency misses taught me about upstream filtering. The dependency collision taught me about ordering.

California is already moving. SB 243 and AB 489 mandate companion AI guardrails, including continuous disclosure and anti-deception requirements. More states will follow. The organizations building governance now, from operational experience rather than compliance checklists, are the ones that won't scramble when regulation arrives.

---

## What you can steal

Five mechanisms. All of them are implementable in a weekend.

**1. Atomic writes on shared state.** If two agents can touch the same file, add locking. Not optional.

**2. Spend gates on automated calls.** Any task deploying an external API gets a cost estimate before completion. Threshold: set yours based on your budget.

**3. Traceability on generated content.** Every claim in agent output should trace to a source. If it can't, it's a fabrication.

**4. Upstream quality gates.** Filter before expensive work, not after. A 30-second scoring pass saves hours of wasted generation.

**5. Self-routing on completions.** Make agents declare what should happen next. Four options are enough: archive, review, QA, escalate.

---

The exciting part of agentic AI is shipping fast. The unsexy part is making it safe to ship fast. I know which part took longer to figure out. I also know which part made the other one possible.
