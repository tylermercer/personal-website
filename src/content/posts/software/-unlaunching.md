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

But part of what made Logwise's loop so pernicious was that it was fiendishly difficult to close. Compared to projects like this website or Innerhelm, Logwise had so much more _depth_---there's so much more for my engineering brain to get absorbed in with an application than with a content site.

Part of this is because of the unbounded size of software applications. In the software engineering industry, "finished software" is almost oxymoronic---a sort of [unobtanium](https://en.wikipedia.org/wiki/Unobtainium) that only appears in jokes. Even after six months of working on it, Logwise was nowhere _near_ finished. Each task I marked off usually paralleled two or three new ideas or opportunities that I added to my backlog.[^content-sites]

This meant that the overall pull of the project was _stronger_ the more I worked on it (whereas when building content sites like Innerhelm, passing a baseline level of completion leads to a steep diminishment in pull). In the depths of this project, that pull masqueraded as a good thing---the momentum and increased vision acted as a psychological reward. But this reward was actually pathological. As Adam Alter explains in _Irresistible_:

> \[W]here substance addictions are nakedly destructive, many behavioral addictions are quietly destructive acts wrapped in cloaks of creation.

Certainly, not all software hobby projects are deserving of being labeled an addiction, but Logwise was for me. The good feeling of having produced some measurable addition to the project each time I worked on it acted as a "cloak of creation" that masked its "quietly destructive" effects on my overall life.
#### A diminishment of self

As mentioned, an obvious negative effect of this strong pull was that I made no progress at all on Innerhelm during this time. But another significant side effect was a diminishment of self.

In all honesty, recognized this effect over a year ago, when I was working on my essay ["Certainty and Uncertainty as Elements of Faith."](https://tylermercer.net/posts/faith/certainty-and-uncertainty-as-elements-of-faith/) I wrote this in my journal on September 9th, 2023:

> Yesterday I was pondering on my way to work and realized something startling: focusing on building an app makes me possessive of my time and angry when I don't get to work on it (and often angry when I do, because of how slow it goes). But when my focus is on my writing, I feel expanded, more emotionally healthy, and a lot more patient with changes to our schedule that limit my time to write.

I hadn't forgotten this when I started Logwise; I just figured with better emotional management I could mitigate these negative effects. To a certain point, I was right---I was able to keep my frustration at a lack of time or progress from becoming anger---but there was still a gradual but noticeable emotional deadening that I experienced as I was immersed in Logwise. This is part of why I couldn't make progress on Innerhelm, even at a conceptual level, while I was working on Logwise. My ability to think abstractly about life was severely hindered. I was detached from reality, in a sense, viewing it through the lifeless technical abstractions of an app.

Turns out, I'm not the only one who experiences this. Here's Matuschak again:

> When I’m deep in software development, reaching flow[^flow] on a daily basis, my mind narrows to a kind of tunnel-vision, totally fixated on the software systems and their problems. ... I find this effect increasingly unpleasant on a personal level. When I’m in this state, I feel my sense of self shrinking. I become unreflective. Creative thoughts cease to arise. I find writing difficult. And so on.

Writing---good, thorough writing---feeds my soul: it changes how I think, how I see the world, and who I am. An example is the aforementioned essay on faith: the ideas and connections that I formed as I thought through and refined that essay have changed how I apply the concepts of faith, uncertainty, and humility in my day-to-day life. Innerhelm has had similar effects, leading me to discover new conceptual tools with which I could interact meaningfully with the world. 

But, because of the mutual exclusion between writing and app-development modes of thought, I was totally locked out of those benefits while I was working on Logwise.

As a result, Logwise had a twofold negative effect on my psyche: it *directly* led to a diminishment of self, and it's cross-lever suppressive effects *indirectly* prevented me from picking up the kind of thought-work that could have pushed back against that diminishment.

## Logwise's low payout

As mentioned before, the original multi-armed bandit mental model only considers payout, not cost. But even when examined through a payout lens, Logwise was a worse lever than Innerhelm.

The payout of an opportunity is measured differently based on the context. For a sales opportunity, the potential payout would be how much the customer would pay if they accepted a deal.

In my case, the payout was the impact and benefit of making progress on a particular project. Did it get me closer to where—and who—I want to be in life? And did this payout compensate for the aforementioned costs of cognitive absorption and diminishment of self?

## Rene Girard was right

In [_Wanting: The Power of Mimetic Desire in Everyday Life_](https://www.amazon.com/Wanting-Power-Mimetic-Desire-Everyday/dp/1250262488/), author Luke Burgis explains French polymath and philosopher Rene Girard's theory of _mimetic desire_. According to Girard's theory, humans learn what they want primarily through imitating others' desires. When we interact with someone we trust or look up to, we unwittingly make them a model of desire---we want what they want, *because* they want it, and then unconsciously retrofit a logical rationale to support that imitated desire.[^reasonable] This mimesis, according to Burgis, is like gravity: it's invisible, pervasive, and affects everyone.

This is a claim that most people reject out-of-hand because of its uncomfortable implications. But mimetic desire is important to understand, because it's a powerful influence---and one that is substantially _more_ powerful when we turn a blind eye to it.

Since learning about this idea, I've started to look for it in myself. And I haven't needed to look far. Notably, my long-term goals with Logwise were highly mimetic. At the heart of it, I wanted to create a widely-used app, because that was something I've seen modeled by people I respect.[^app-models-of-desire] That core mimesis was surrounded by derivative goals, like making the app financially viable, but the central focus of the project was not about money; it was about achieving the status of "I've built a successful app." And the reason I sought for that status was because of mimesis.

Interestingly, this mimetic desire hid itself behind my values-motivated desire to [make something that is useful](https://innerhelm.com/posts/where-innerhelm-began/#:~:text=i%E2%80%99ve%20always%20had%20an%20urge%20to%20make%20useful%20things). I had already done that in Innerhelm---from early on, one reader in particular expressed that my ideas were making a difference in his life---but this values-motivated desire became a façade in front of the unconscious mimesis. Until I recognized mimetic desire in myself, it _seemed_ like I was values-driven in working on Logwise.

By following my mimetic desire blindly, I was not acting agentically---I was riding, not driving. Ironic for someone ostensibly exploring agency thinking!

Of course, mimetic desire also applies to my writing for Innerhelm---there are models from whom I've learned that desire, too.[^writing-models-of-desire] But if I look past the obstructive mimetic desire at play in both options, I can see that Innerhelm is much more aligned with my deeper desires---desires that stem from my personal values rather than from mimesis---than Logwise was.

## What I'm doing about it

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
- _Essentialism_
	- Contributing at highest impact 
		- Innerhelm higher than Logwise (more on this later)
	- But was this just because I hadn't yet shipped Logwise?
	- "If it's not hell yes, it should be a no." Logwise _felt_ like a yes!
- Why was I pursuing this project at all? Hyperfocus and the semi-addictive nature of building a working thing explained why I _continued_, but why had I _started_ this project? What were my higher-level reasons for wanting to build Logwise? Surely there would be something more meaningful at that level of motivation.
- Nut graf (which I've decided I don't need because I don't want to write this as news): 
	- [Persistence is often agentic](https://innerhelm.com/posts/persistence). I've discovered that quitting can be too. I believe agentic quitting is, for most people, a dormant superpower—a practice that yields significant dividends but is underused.


[^throwing-away]: I should note that I didn't delete the Todoist project with my roadmap for Logwise; I only archived it. I had a lot of knowledge and resources captured in my notes there, and, despite my minimalist approach to _physical_ possessions, I struggle to discard conceptual ones such as crystallized knowledge. But archiving the project satisfies the requirement of intentionally making it hard to pick the project up again.

[^diapers]: Logging diaper changes---and which of those were diaper _failures_---led surprisingly quickly to holding strong opinions about diaper brands. Something I wouldn't have anticipated a year ago! 

[^parallelism]: If you replace "the mnemonic medium" with "agency thinking," "Orbit" with "Logwise," and "2020" with "2024," this describes my situation exactly. Amusingly, even the months are correct.

[^emphasis]: Emphasis mine.

[^content-sites]: Content sites, however, are much easier to reasonably declare completed, after which further modifications are typically small. This is how web development agencies work---by completing entire websites, delivering them to their client, and, for the most part, moving on. This model does not typically work in software engineering contexts unless you have an in-house team of engineers that can continue development where the agency left off.

[^flow]: Matuschak mentions [flow](https://en.wikipedia.org/wiki/Flow_(psychology)), the concept named and studied by psychologist Mihaly Csikszentmihalyi, who believed flow to be the source of lasting happiness. As someone with ADHD, my experience with Logwise was much closer to [hyperfocus](https://en.wikipedia.org/wiki/Hyperfocus) than to flow. Hyperfocus, which some people describe as "ADHD's superpower", is in my experience often quite unpleasant---a sort of quasi-addicted state where I can't mentally put something down.
	
	To use a contrived metaphor: the way I experience it, flow is like water skiing, but hyperfocus is like wiping out while water skiing but your hand is glued to the rope and the people driving the boat don't stop.

[^reasonable]: I'm reminded of a quote by Benjamin Franklin: "So convenient a thing it is to be a *reasonable* creature, since it enables one to find or make a reason for everything one has a mind to do." 

[^app-models-of-desire]: Amir Salihefendić (creator of [Todoist](https://todoist.com)), Christina Willner and Mark Tucker (creators of [Amazing Marvin](https://amazingmarvin.com/)), and Rob Walling ([founder of Drip and serial SaaS bootstrapper](https://robwalling.com/)), among others.

[^writing-models-of-desire]: Notably, Henrik Karlsson and Andy Matuschak (who I quoted in this essay), along with Nick Wignall, Anne-Laure le Cunff, James Clear, Adam Grant, and others.
