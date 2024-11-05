---
title: Unlaunching
description: Choosing focus by pulling the plug on a project I love
#date: 2024-10-03 9:03:00.00
#imgForInnerhelmVersion: https://upload.wikimedia.org/wikipedia/commons/8/81/Vingtmillelieue00vern_orig_0437_1.jpg
crosspostToInnerhelm: true
---

I spent the last six months building a web application called [Logwise](https://logwise.tylermercer.net). It's an app for logging things: sleep quality, focus levels, research insights, health symptoms, or anything else you'd like to monitor over time and understand better. It works offline (via [Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and allows you to easily change the schema of your logs over time without data loss (via [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling project for me---the kind that I wake up thinking about, and for which I have a constant flow of exciting ideas.

But I've decided to open-source and archive the repo, and to throw away my roadmap.[^throwing-away] I'm "unlaunching" Logwise---declaring it done, and putting it out into the world like a launch, but with the intent to put a firm lid on the project.

## A tale of two projects

At the beginning of this year, I started a writing project called [Innerhelm](https://innerhelm.com). Innerhelm explores _agency thinking_, which is the habit of thinking as an agent, capable of making choices and influencing the world, rather than as an object that is merely acted upon.

Logwise emerged from the same place that Innerhelm did. My college studies consisted of a blending of psychology and computer science, with the intent to create software that helped people live intentionally. In fact, this time last year, Logwise and Innerhelm were still the same project in my head: a _self-authorship app_ that would facilitate reflection and intentionality through templated journaling. As I explained in [the first Innerhelm post](https://innerhelm.com/posts/where-innerhelm-began/), I eventually decided to make Innerhelm solely a writing project:

> \[W]riting about these ideas seemed like the most strategic step forward. It is sufficiently open-ended that I can follow the idea where it leads, while still being concrete enough to share meaningfully with others (which is itself helpful in the exploration).

But, with [the birth of my daughter](/posts/a-different-kind-of-hello-world) earlier this year, the utility of a templated-journaling app was brought to mind again. There's a lot to keep track of when you're caring for a newborn, if you are so inclined: feedings, diaper changes[^diapers], sleep quality, etc. My wife and I used an existing app for these things, but I found that there were other things I wanted to log as well, which the app didn't support---things like our mental health, how much sleep we were getting, and moments with our daughter that we wanted to remember. I needed an app that was more malleable.

On top of that, late-night bottle feedings gave me a lot of time to hyperfocus on how I would build such an app. By the time our lives (and sleep schedules) had begun to stabilize, I was champing at the bit to start coding.
## Andy Matuschak

Andy Matuschak is a software engineer, designer, and researcher exploring _tools for thought_---software interfaces designed to expand and extend how humans can think. He spends some of his time in theory-land, writing, in both short and long form, about the science and mechanics that govern this space:: ideas like [programmable attention](https://notes.andymatuschak.org/zPpaHZYKuBPyoDtgcsiZ9RV) and [enabling environments](https://notes.andymatuschak.org/Enabling_environment). He also spends a portion of his time in engineering-land, creating experimental tools for thought such as [Orbit](https://withorbit.com/).

At a high level, there's a parallel between Matuschak's work and the work I was trying to do (in kind, if not in quality or depth). Logwise, like Orbit, was engineering-heavy and theory-light. Innerhelm, like Matuschak's research, was the reverse.

Trying to make progress on both meant reconciling the tension between these two modes of thinking. As Matuschak observes, [they are mutually exclusive](https://notes.andymatuschak.org/z7RGGgVdDVHXkzJ6BVFKws8):

> In practice, it’s quite difficult to think deeply about theories while in the midst of a significant software development project. And it’s hard to build momentum on software development when spending much of one’s day in reflection and writing.
> 
> ...
> 
> In March 2020, I wrote a list of research questions for the Mnemonic medium, then embarked on building Orbit. Writing now in October 2020, I’ve not made any meaningful progress on any of those research questions.[^parallelism]

To make things worse, [switching costs between them are high](https://notes.andymatuschak.org/zD2oDSCgLEyM4xDhjRLXtuH):

> In my experience, it’s quite costly to switch between those two mental states. I’ve not had much success dividing up my days or even my weeks into “building” and “thinking” times.

In summary, there's a sizeable obstacle to be overcome in moving an engineering project and a writing project forward at the same time. This is where I found myself in August: having made a lot of progress on Logwise, but having not written for---or even thought about---Innerhelm in months.

Matuschak, being a researcher whose specifically intended output is research-informed software, had good reason to want to reconcile this tension between two projects. Did I?
## Explore vs Exploit

In ["Almost everyone I’ve met would be well-served thinking more about what to focus on"](https://www.henrikkarlsson.xyz/p/multi-armed-bandit), writer Henrik Karlsson unpacks a different tension---the tradeoffs between exploring new paths forward and following a known good one.

Drawing from probability theory, Karlsson describes what is known as the _multi-armed bandit problem_. In it, a gambler sets out to maximize his returns at a slot machine (known as a "one-armed bandit"), but this machine is different than most. This is a multi-armed bandit---a slot machine with many levers, each of which gives a different likelihood of a payout.

The gambler's solution lies in navigating the tradeoffs between *exploring* (trying new levers) and *exploiting* (pulling the best lever he's found so far). But this dilemma isn't exclusively the purview of Lovecraftian casinos---it also maps onto the problem space I found myself in, of determining how best to use my time and energy.

As Karlsson points out, the main risk is not that of finding a bad balance between exploring and exploiting---it's _spending too much time pulling a bad lever_:

> People tend to gravitate to different sides of the explore/exploit spectrum. If you are high on openness, like I am, exploring comes easy. But it is harder to make a commitment and exploit what you’ve learned about yourself and the world. Other people are more committed, but risk being too conventional in their choices. They miss better avenues for their effort. **Most, however, tend to do less than optimal of both—not exploring, not exploiting; but doing things out of blind habit, and half-heartedly.**[^emphasis]

Logwise, as it turns out, was the wrong lever.
## 

- TLDR as above
- Juggling two projects
- Introduce Andy Matuschak
- Draw parallel between Matuschak and myself
	- Explain Innerhelm, and Logwise's connection to it
	- Use quote about switching costs (March and October one)
- Matuschak had good reason to want to reconcile his experience switching between two projects. Did I?
- The non-essentialist lie that you can do it all
- Explore vs exploit
- The biggest risk is not finding a bad balance between exploring and exploiting. The biggest risk is _spending too much time pulling a sub-optimal lever_.
- Why Logwise was the wrong lever
	- _Essentialism_
		- Contributing at highest impact 
			- Innerhelm higher than Logwise (more on this later)
		- But was this just because I hadn't yet shipped Logwise?
		- "If it's not hell yes, it should be a no." Logwise _felt_ like a yes!
	- Diminished self
		- This was a "quietly destructive act wrapped in \[a] cloak of creation." (_Irresistible_)
		- As I saw over a year ago
		- Matuschak's experience with this
		- Contrast with expanded self when writing
			- Journal entry about writing that changes who I am
	- Partly was due to hyperfocus
		- Reinforced through focusing on functionality---a poor proxy of software quality---over actual usefulness
	- Karlsson's subconscious writing thoughts vs my very-much-conscious, life-decaying engineering thinking
		- Writing gets me closer to real life, whereas in engineering mode it is abstracted away
		- (Footnote) Work doesn't have the same problem, since I don't have complete creative control over my projects there. The highly collaborative nature of the work puts a limit on how much progress I can make on my own, especially outside of working hours.
	- Why was I pursuing this project at all? Hyperfocus and the semi-addictive nature of building a working thing explained why I _continued_, but why had I _started_ this project? What were my higher-level reasons for wanting to build Logwise? Surely there would be something more meaningful at that level of motivation.
		- There wasn't.
		- Mimetic desire explains Logwise's facade of "yes" (_Wanting_)
			- My long-term goals with Logwise were highly mimetic. At the heart of it, I wanted to create a widely-used app, because that was what I've seen modeled by people I look up to. That core mimesis was surrounded by derivative goals, like making the app financially viable, but the central focus of the project was not about money; it was about achieving the status of "I've built a successful app." And the reason I sought for that status was because of mimesis. This mimetic desire leeches off of my values-motivated desire to make something that is useful---but I've already done that in Innerhelm
		- The "yes-ness" was inarticulable.
		- I was not being agentic---I was riding, not driving. Ironic for someone ostensibly exploring agency thinking!
	- Aversion to quitting (maybe)
		- [TODO] Unpack Kohn's essay
	- Jony Ive on focus (maybe move lower?)
		- (Maybe tie in ideas from Brian Lee at LegalZoom)
		- Focusing on the known good outcome of Innerhelm made this clearer
		- Grandpa's gratitude (just mention him as one of my readers)
- What I'm doing about it
	- "Law of Holes"
	- Switching didn't work, as mentioned before
	- Higher order agency, which I've mentioned before
		- I would create a bright line rule
		- Rubin on the power of habits to reduce decisional load
		- By open-sourcing Logwise and writing publicly about this decision, I've created a _commitment pact_.
			- (Footnote) Open-sourcing also satisfies my compulsion to not "waste" crystallized knowledge.
		- It also leverages our inherent bias for consistency as humans to enforce my decision.
			- Maybe quote Kahneman from Thinking Fast and Slow here?
	- Even continuing to _use_ the application while not working on it had proved risky. Reimplementing in Obisidian
- Conclusion
	- I worried that I would feel constrained---like "a wild bull caught in a net," to borrow a metaphor from Isaiah. But I haven't.
		- Karlsson: "as a person for whom narrow focus is against my instincts, the most remarkable thing about it is how rich it feels"
	- Takeaways:
		- Not everything that feels compelling is worth spending time on
		- Challenge your assumptions. "The only way someone can be of help to you..."

[^throwing-away]: I should note that I didn't delete the Todoist project with my roadmap for Logwise; I only archived it. I had a lot of knowledge and resources captured in my notes there, and, despite my minimalist approach to _physical_ possessions, I struggle to discard conceptual ones such as crystallized knowledge. But archiving the project satisfies the requirement of intentionally making it hard to pick the project up again.

[^diapers]: Logging diaper changes---and which of those were diaper _failures_---led surprisingly quickly to holding strong opinions about diaper brands. Something I wouldn't have anticipated a year ago! 

[^parallelism]: If you replace "the mnemonic medium" with "agency thinking," "Orbit" with "Logwise," and "2020" with "2024," this describes my situation exactly. Amusingly, even the months are correct.

[^emphasis]: Emphasis mine.