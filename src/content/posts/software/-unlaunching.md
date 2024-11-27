---
title: Unlaunching
description: Choosing focus by pulling the plug on a project I love
#date: 2024-10-03 9:03:00.00
#imgForInnerhelmVersion: https://upload.wikimedia.org/wikipedia/commons/8/81/Vingtmillelieue00vern_orig_0437_1.jpg
crosspostToInnerhelm: true
---

Earlier this year I spent seven months building a web application called [Logwise](https://logwise.tylermercer.net). It's an app for logging things: sleep quality, focus levels, research insights, health symptoms, or anything else you'd like to monitor over time and understand better. It works offline (via [Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and allows you to easily change the schema of your logs over time without data loss (via [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling project for me---the kind that I wake up thinking about, and for which I have a constant flow of exciting ideas.

But I've decided to open-source and archive [the code repository](https://github.com/tylermercer/logwise), and to throw away my roadmap.[^throwing-away] I'm "unlaunching" Logwise: putting it out into the world, but with the intent of ending it---launching in a negative direction.

## A tale of two projects

At the beginning of this year, I started a different project, a writing project called [Innerhelm](https://innerhelm.com). Innerhelm explores _agency thinking_, which is the habit of thinking as an agent, capable of making choices and influencing the world, rather than thinking as an object that is merely acted upon.

Innerhelm and Logwise have a common background. My college studies consisted of a blending of psychology and computer science, with the intent to create software that helped people live intentionally. Both projects emerged from this intent. In fact, this time last year, Logwise and Innerhelm were a single project idea: a _self-authorship app_ that would facilitate reflection and intentionality through templated journaling.

As I explained in [the first Innerhelm post](https://innerhelm.com/posts/where-innerhelm-began/), I eventually decided to make Innerhelm solely a writing project:

> \[W]riting about these ideas seemed like the most strategic step forward. It is sufficiently open-ended that I can follow the idea where it leads, while still being concrete enough to share meaningfully with others (which is itself helpful in the exploration).

But, with [the birth of my daughter](/posts/a-different-kind-of-hello-world) earlier this year, the utility of a templated-journaling app was brought to mind again. There's a lot to keep track of when you're caring for a newborn, if you're so inclined: feedings, diaper changes,[^diapers] sleep quality, etc. My wife and I used an existing app for these things, but I found that there were other things I wanted to log as well, which the app didn't support---things like our mental health, how much sleep we were getting, and moments with our daughter that we wanted to remember. I needed an app that was more [malleable](https://malleable.systems/mission).

On top of that, late-night bottle feedings gave me a lot of time to think about how I would build such an app. By the time our lives (and sleep schedules) had begun to stabilize, I was champing at the bit to start building.
## Andy Matuschak

Andy Matuschak is a software engineer, designer, and researcher exploring _tools for thought_---software interfaces designed to expand and extend how humans can think. He spends some of his time in theory-land, writing, in both short and long form, about the science and mechanics that govern this space: ideas like [programmable attention](https://notes.andymatuschak.org/zPpaHZYKuBPyoDtgcsiZ9RV) and [enabling environments](https://notes.andymatuschak.org/Enabling_environment). He also spends a portion of his time in engineering-land, creating experimental tools for thought such as [Orbit](https://withorbit.com/).

At a high level, there's a parallel between Matuschak's work and the work I was trying to do (in kind, if not in quality or depth). Logwise, like Orbit, was engineering-heavy and theory-light. Innerhelm, like Matuschak's research, was the reverse.

Trying to make progress on both meant reconciling the tension between these two variants of thought-work. As Matuschak observes, [they are mutually exclusive](https://notes.andymatuschak.org/z7RGGgVdDVHXkzJ6BVFKws8):

> In practice, it’s quite difficult to think deeply about theories while in the midst of a significant software development project. And it’s hard to build momentum on software development when spending much of one’s day in reflection and writing.
> 
> ...
> 
> In March 2020, I wrote a list of research questions for the Mnemonic medium, then embarked on building Orbit. Writing now in October 2020, I’ve not made any meaningful progress on any of those research questions.[^parallelism]

To make things worse, [switching costs between them are high](https://notes.andymatuschak.org/zD2oDSCgLEyM4xDhjRLXtuH):

> In my experience, it’s quite costly to switch between those two mental states. I’ve not had much success dividing up my days or even my weeks into “building” and “thinking” times.

In summary, there's a significant tension to be overcome in moving an engineering project and a writing project forward at the same time. This is where I found myself this fall: having made a lot of progress on Logwise, but having not written for---or even thought about---Innerhelm in months.

Matuschak, being a researcher whose specifically-intended output is research-informed software, had good reason to want to reconcile this tension between two projects. Did I?
## Explore and exploit

In ["Almost everyone I’ve met would be well-served thinking more about what to focus on"](https://www.henrikkarlsson.xyz/p/multi-armed-bandit), writer Henrik Karlsson unpacks a different tension---the tradeoffs between exploring new paths forward and following a known good one.

Drawing from probability theory, Karlsson describes what is known as the _multi-armed bandit problem_. In it, a gambler plays a slot machine (known as a "one-armed bandit"), but this machine is different than most. This is a "multi-armed bandit"---a slot machine with many levers, each of which gives a different likelihood of a payout.

The gambler's solution lies in navigating the tradeoffs between *exploring* (trying new levers) and *exploiting* (pulling the best lever he's found so far). By nature, different people tend to do different amounts of each of these activities:

> If you are high on openness, like I am, exploring comes easy. But it is harder to make a commitment and exploit what you’ve learned about yourself and the world. Other people are more committed, but risk being too conventional in their choices. They miss better avenues for their effort. **Most, however, tend to do less than optimal of both—not exploring, not exploiting; but doing things out of blind habit, and half-heartedly.**[^emphasis]

In other words, the main risk is not that of striking a bad balance between exploring and exploiting---it's _spending too much time pulling a bad lever_.

Compared with Innerhelm and other priorities such as my family, Logwise was a bad lever.
## Logwise had a high cost and a low payout

The multi-armed bandit mental model, as it is usually rendered, describes each lever as being essentially defined in only one dimension: potential payout. That is, the intent of exploring and exploiting is simply to find the lever with the best payout.

In reality, there's more to consider when examining different ways to spend one's time---most notably, there are _costs_ associated with each activity. Logwise, in particular, had a deceptively high cost: it _seemed_ low-cost when I was engaged with it, but when I stepped back to look at it more objectively, the cost was quite substantial.
### Logwise's high cost

The obvious cost was _opportunity cost_. What opportunities was I giving up to work on Logwise? 

Innerhelm, as mentioned above, was one of them: when I was heads-down on Logwise, I couldn't make any progress on Innerhelm, because of the mutual exclusion between those two thinking styles described by Matuschak. And the high switching cost between them gives the "lever" of Logwise a surprising cross-lever effect: after pulling the Logwise lever, the Innerhelm lever cannot be pulled while the Logwise lever slowly returns to the top again!

Logwise was what Matuschak would describe as an "open loop":

> Tasks left undone, observations left unrecorded, replies yet to be written—these swirl about our minds, as if we’re rehearsing them over and over again to make sure they’re not forgotten.

Deep focus on a subject involves defending a loop on that subject from the other loops---small ones, like tasks, and big ones, like Logwise---that would crowd it out. This requires [a system for closing open loops](https://notes.andymatuschak.org/Close_open_loops), but it also requires you to be careful about which loops you open in the first place. Karlsson encountered this as he became a writer:

> Unintentionally, I [used to] tell my brain to focus on [unimportant things]—a conflict in a TV series I was watching, for instance. I would watch an episode before bed, and the cliffhanger would open a loop in my head. That loop would be churning in my head as I slept; I woke to a blank page. I don’t have time for that anymore. I make sure to always have an open loop concerning my writing. And I close every other loop—by wrapping it up as fast as I can, or by writing it down on a list, or, preferably, not opening the loop at all.

#### A close-resistant loop

But part of what made Logwise's loop so pernicious was that it was fiendishly difficult to close. I have a hard time putting down coding projects, especially ones where I have complete creative control. And compared to coding projects like this website or Innerhelm, Logwise had so much more _depth_---there's so much more for my engineering brain to get absorbed in with an application than with a content site.

Part of this is because of the unbounded size of software applications. In the software engineering industry, "completed software" is almost oxymoronic---a sort of [unobtanium](https://en.wikipedia.org/wiki/Unobtainium) that only appears in jokes. Even after six months of working on it, Logwise was nowhere _near_ completed. Each task I marked off usually paralleled two or three new ideas or opportunities that I added to my backlog.[^content-sites]

This meant that the overall pull of the project was _stronger_ the more I worked on it (whereas with my content sites, passing a baseline level of completion leads to a steep diminishment in pull). In the depths of the project, this seems erroneously like a good thing---the momentum itself is a psychological reward. But this reward was actually pathological. As Adam Alter explains in _Irresistible_:

> \[W]here substance addictions are nakedly destructive, many behavioral addictions are quietly destructive acts wrapped in cloaks of creation.

Certainly, not all software hobby projects are deserving of being labeled an addiction, but Logwise was for me. The good feeling of having produced some measurable addition to the project each time I worked on it acted as a "cloak of creation" that masked its "quietly destructive" effects on my overall life.
#### A diminishment of self

- [ ] Pick up here, with diminished self, hyperfocus, and subconscious vs conscious thoughts bullets

As mentioned before, the original multi-armed bandit mental model only considers payout. But even when examined through that lens, Logwise was a worse lever than Innerhelm.

- Why Logwise was the wrong lever
	- Deceptively high cost
	- Deceptively low output 
		- Mimetic desire
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
	- Persistence is agentic, but quitting can be too.
		- Persistence essay from Innerhelm
		- Kohn's essay
	- I worried that I would feel constrained---like "a wild bull caught in a net," to borrow a metaphor from Isaiah. But I haven't.
		- Karlsson: "as a person for whom narrow focus is against my instincts, the most remarkable thing about it is how rich it feels"
	- Takeaways:
		- Not everything that feels compelling is worth spending time on
		- Challenge your assumptions. "The only way someone can be of help to you..."

Unused:
- The non-essentialist lie that you can do it all


[^throwing-away]: I should note that I didn't delete the Todoist project with my roadmap for Logwise; I only archived it. I had a lot of knowledge and resources captured in my notes there, and, despite my minimalist approach to _physical_ possessions, I struggle to discard conceptual ones such as crystallized knowledge. But archiving the project satisfies the requirement of intentionally making it hard to pick the project up again.

[^diapers]: Logging diaper changes---and which of those were diaper _failures_---led surprisingly quickly to holding strong opinions about diaper brands. Something I wouldn't have anticipated a year ago! 

[^parallelism]: If you replace "the mnemonic medium" with "agency thinking," "Orbit" with "Logwise," and "2020" with "2024," this describes my situation exactly. Amusingly, even the months are correct.

[^emphasis]: Emphasis mine.

[^content-sites]: Content sites, however, are much easier to reasonably declare completed, after which further modifications are typically small. This is how web development agencies work---by completing entire websites, delivering them to their client, and, for the most part, moving on. This model does not typically work in software engineering contexts unless you have an in-house team of engineers that can continue development where the agency left off.
