---
title: Unlaunching
description: Choosing focus through agentic quitting
date: 2024-12-23 9:03:00.00
featured: true
---

Earlier this year I spent seven months building a web application called [Logwise](https://logwise.tylermercer.net) in my spare time. It's an app for logging things: sleep quality, focus levels, health symptoms, or anything else you'd like to monitor over time and understand better. It works offline (via [Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and allows you to easily change the schema of your logs over time without data loss (via [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling side project for me---the kind that I wake up thinking about, and for which I've had a constant flow of exciting ideas.

But I've decided to open-source and archive [the code repository](https://github.com/tylermercer/logwise), and to throw away my roadmap.[^throwing-away] I'm "unlaunching" Logwise: putting it out into the world, but with the intent of ending it---launching in a negative direction. This essay explains why.

## A tale of two projects

At the beginning of this year, I started another project, a blog and newsletter called [Innerhelm](https://innerhelm.com). Innerhelm explores _agency thinking_, which is the habit of thinking as an agent, capable of making choices and influencing the world, rather than thinking as an object that is merely acted upon.

Innerhelm and Logwise have a common background. My college studies consisted of a blending of psychology and computer science, with the intent to create software that helped people live intentionally. Both projects emerged from this intent. In fact, until September 2023, Logwise and Innerhelm were a single project idea: a _self-authorship app_ that would facilitate reflection and intentionality through templated journaling.

As I explained in [the first Innerhelm post](https://innerhelm.com/posts/where-innerhelm-began/), I eventually decided to make Innerhelm solely a writing project. But with [the birth of my daughter](/posts/faith/a-different-kind-of-hello-world) earlier this year, the utility of a templated-journaling app was brought to mind again. There's a lot you might want to keep track of when you're caring for a newborn: feedings, diaper changes,[^diapers] sleep quality, etc. My wife and I used an existing app for these things, but I found that there were other things I wanted to log as well, which the app didn't support---things like our mental health, how much sleep we were getting, and moments with our daughter that we wanted to remember. I needed an app that was more *malleable*---something I could adapt to my specific needs.[^malleable]

On top of that, late-night bottle feedings gave me a lot of time to think about how I would build such an app. By the time our lives (and sleep schedules) had begun to stabilize, I was chomping at the bit to start building.

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

As such, there's a significant obstacle to be overcome in moving an engineering project and a writing project forward at the same time. This is reflected in where I found myself this fall: having made a lot of progress on Logwise, but having not written for (or even thought about!) Innerhelm in months.

Matuschak, being a researcher whose intended output is research-informed software, had good reason to want to reconcile this tension between two projects. Did I?

## Explore and exploit

In his essay ["Almost everyone I’ve met would be well-served thinking more about what to focus on"](https://www.henrikkarlsson.xyz/p/multi-armed-bandit), writer Henrik Karlsson unpacks another tension---the tradeoffs between exploring new paths forward and following a known good one.

Drawing from probability theory, Karlsson describes what is known as the _multi-armed bandit problem_. In it, a gambler plays a slot machine (known as a "one-armed bandit"), but this machine is different than most. This is a "multi-armed bandit"---a slot machine with many levers, each of which gives a different likelihood of a payout.

The gambler's solution lies in navigating the tradeoffs between *exploring* (trying new levers) and *exploiting* (pulling the best lever he's found so far). By nature, different people tend to do different amounts of each of these activities:

> If you are high on openness, like I am, exploring comes easy. But it is harder to make a commitment and exploit what you’ve learned about yourself and the world. Other people are more committed, but risk being too conventional in their choices. They miss better avenues for their effort. **Most, however, tend to do less than optimal of both—not exploring, not exploiting; but doing things out of blind habit, and half-heartedly.**[^emphasis]

In other words, the main risk is not that of striking a bad balance between exploring and exploiting---it's _spending too much time pulling a bad lever_.

But that doesn't mean we can just pick the best lever and pull it. Exploration is necessary in order to identify a good lever in the first place. The key is to pick a strategy that allows us to explore various options initially and zero-in on the best levers over time, while minimizing the total time spent pulling lower-payout levers.

## Logwise's cost

The multi-armed bandit mental model, as it is usually rendered, describes each lever as being essentially defined in only one dimension: potential payout. But when using this model for evaluating different ways to spend one's time, we also have to consider _cost_.

The obvious cost to Logwise was _opportunity cost_. What opportunities was I giving up to work on Logwise? 

Innerhelm, as mentioned above, was one of them: when I was heads-down on Logwise, I couldn't make any progress on Innerhelm, because of the mutual exclusion between those two thinking styles described by Matuschak. And the high switching cost between them gives the "lever" of Logwise a surprising cross-lever effect: after pulling the Logwise lever, the Innerhelm lever cannot be pulled while the Logwise lever slowly returns to the top again! 

Logwise was what Matuschak would describe as an "open loop":

> Tasks left undone, observations left unrecorded, replies yet to be written—these swirl about our minds, as if we’re rehearsing them over and over again to make sure they’re not forgotten.[^zeigarnik]

Deep focus on a subject involves defending a loop on that subject from the other loops---small ones, like tasks, and big ones, like Logwise---that would crowd it out. This requires [a system for closing open loops](https://notes.andymatuschak.org/Close_open_loops), but it also requires you to be careful about which loops you open in the first place. Karlsson encountered this as he became a writer:

> Unintentionally, I [used to] tell my brain to focus on [unimportant things]—a conflict in a TV series I was watching, for instance. I would watch an episode before bed, and the cliffhanger would open a loop in my head. That loop would be churning in my head as I slept; I woke to a blank page. I don’t have time for that anymore. I make sure to always have an open loop concerning my writing. And I close every other loop—by wrapping it up as fast as I can, or by writing it down on a list, or, preferably, not opening the loop at all.
> 
### A close-resistant loop

But part of what made Logwise's loop so pernicious was that it was fiendishly difficult to close. Compared to projects like this website or Innerhelm, Logwise had so much more _depth_, in a dangerous way---there's so much more for my engineering brain to get absorbed in with an application than with a content site.

Part of this is because of the unbounded size of software applications. In the software engineering industry, "finished software" is almost oxymoronic---a sort of [unobtanium](https://en.wikipedia.org/wiki/Unobtainium) that only appears in jokes. Even after six months of working on it, Logwise was nowhere _near_ finished. Each task I marked off usually paralleled two or three new ideas or opportunities that I added to my backlog.[^content-sites]

This meant that the overall pull of the project was _stronger_ the more I worked on it (whereas when building content sites like Innerhelm, passing a baseline level of completion leads to a steep diminishment in pull). In the depths of this project, that pull masqueraded as a good thing---the momentum and increased vision acted as a psychological reward.

But this reward was actually pathological. As Adam Alter explains in _Irresistible_:

> \[W]here substance addictions are nakedly destructive, many behavioral addictions are quietly destructive acts wrapped in cloaks of creation.

Certainly, not all software hobby projects are deserving of being labeled an addiction, but Logwise was for me. The good feeling of having produced some measurable addition to the project each time I worked on it acted as a "cloak of creation" that masked its "quietly destructive" effects on my overall life.

Logwise's cost wasn't just _high_, it was _deceptively_ high. Logwise _seemed_ low-cost when I was engaged with it, but when I stepped back to look at it more objectively, the cost was quite substantial. The illusory reward of it's strong pull actually took me further away from the person I wanted to be.

### A diminishment of self

As mentioned, an obvious negative effect of this strong pull was that I made no progress at all on Innerhelm during this time. But another significant side effect was a diminishment of self.

In all honesty, I recognized this effect over a year ago, when I was working on [an essay on this site](/posts/faith/certainty-and-uncertainty-as-elements-of-faith/). I wrote this in my journal on September 9th, 2023:

> [F]ocusing on building an app makes me possessive of my time and angry when I don't get to work on it (and often angry when I do, because of how slow it goes). But when my focus is on my writing, I feel expanded, more emotionally healthy, and a lot more patient with changes to our schedule that limit my time to write.

I hadn't *forgotten* this when I started Logwise; I just figured with better emotional management I could mitigate these negative effects. To a certain point, I was right---I was able to keep my frustration at a lack of time or progress from becoming anger---but there was still a gradual but noticeable emotional deadening that I experienced as I was immersed in Logwise. This is part of why I couldn't make progress on Innerhelm, even at a conceptual level, while I was working on Logwise. My ability to think abstractly about life was severely hindered. I was detached from reality, in a sense, viewing it through the lifeless technical abstractions of an app.

Turns out, I'm not the only one who experiences this. Here's Matuschak again:

> When I’m deep in software development, reaching flow[^flow] on a daily basis, my mind narrows to a kind of tunnel-vision, totally fixated on the software systems and their problems. ... I find this effect increasingly unpleasant on a personal level. When I’m in this state, I feel my sense of self shrinking. I become unreflective. Creative thoughts cease to arise. I find writing difficult. And so on.

The emotional deadening, detached worldview, and semi-addicted cognition I experienced did more than just limit my progress on Innerhelm. It affected all areas of life. Notably, I was less present as a father, husband, and friend.

Writing, on the other hand, changes how I think, how I see the world, how I relate to others, and who I am. An example is the aforementioned essay on faith: the ideas and connections that I formed as I thought through and refined that essay have changed how I apply the concepts of faith, uncertainty, and humility in my day-to-day life. Innerhelm has had similar effects, leading me to discover new conceptual tools with which I could interact meaningfully with the world. 

But, because of the mutual exclusion between writing and app-development modes of thought, I was totally locked out of those benefits while I was working on Logwise.

As a result, Logwise had a twofold negative effect on my psyche: it *directly* led to a costly diminishment of self, as Matuschak observed with his engineering work, and its cross-lever suppressive effects *indirectly* prevented me from picking up the kind of thought-work that could have pushed back against that diminishment.

## Logwise's payout

Now let's consider payout. The payout of an opportunity is measured differently based on the category of opportunity. For a sales opportunity, for example, the potential payout would be how much the customer would pay if they accepted a deal.

In my case, the payout was the impact and benefit of making progress on a particular project. Did it get me closer to where I authentically wanted to be in life? And did this payout compensate for the aforementioned costs of cognitive absorption and diminishment of self?

### Mimetic desire 

In [_Wanting: The Power of Mimetic Desire in Everyday Life_](https://www.amazon.com/Wanting-Power-Mimetic-Desire-Everyday/dp/1250262488/), author Luke Burgis explains French polymath and philosopher Rene Girard's theory of _mimetic desire_. According to Girard's theory, humans learn what they want primarily through imitating others' desires. When we interact with someone we trust or look up to, we unwittingly make them a model of desire. We want what they want, *because* they want it, and then unconsciously retrofit a supporting rationale onto that imitated desire.[^reasonable] This mimesis, according to Burgis, is like gravity: it's invisible, pervasive, and affects everyone. It's a powerful influence---and one that is _more_ powerful when we aren't aware of it.

Since learning about this idea, I've started to look for it in myself. And I haven't needed to look far. Notably, my long-term goals with Logwise were highly mimetic. Beyond simply creating something useful for myself, I wanted to create a widely-used app, because that was something I've seen modeled by people I respect.[^app-models-of-desire] That core mimesis was surrounded by derivative goals, like making the app financially viable, but the central focus of the project was not about money; it was about achieving the status of "I've built a successful app." And the reason I sought for that status was mimesis.

Interestingly, this mimetic desire hid itself behind my more-authentic desire to [make something that is useful](https://innerhelm.com/posts/where-innerhelm-began/#:~:text=i%E2%80%99ve%20always%20had%20an%20urge%20to%20make%20useful%20things). Until I recognized mimetic desire in myself, it _seemed_ like my core motivation in building Logwise was this authentic desire. 

Of course, mimetic desire also applies to my writing for Innerhelm---there are models from whom I've learned that desire, too.[^writing-models-of-desire] But if I look past the obstructive mimetic desire behind both options, I can see that Innerhelm is much more aligned with my authentic desires than Logwise was. (That claimed goal of creating something useful? I had already done that in Innerhelm: from early on, one of my readers frequently expressed that my ideas were making a difference in his life.)

By following my mimetic desire blindly, I was failing to act agentically---I was riding, not driving. Ironic for someone trying to explore agency thinking!

## Measuring costs and payouts

How do we measure these costs and payouts? Our hypothetical gambler would measure them monetarily, but applying it to how to spend one's time is more complex. There's not a simple scale on which we can rank the payout and cost of the things we do.

As mentioned previously, Logwise was low payout because the desires it fulfilled were merely mimetic. A high payout activity like Innerhelm, on the other hand, aligns with my authentic desires.[^mimetic-and-authentic]

When thinking about our authentic desires, we often render them as long-term goals---e.g. "I work hard because I want to provide a good future for my family." But this doesn't help much in terms of comparing ways to spend our time, since each option is likely to have its own long-term goal attached.

A mental model that can be more useful here is _personal values_. Different people have different conceptions of what personal values are, but I like the definition given by Russ Harris in _The Happiness Trap_: our values are "how we want to be, what we want to stand for, and how we want to relate to the world around us."

With that definition in mind, here are some of my personal values:
- Investing in important relationships (including, as mentioned previously, as a husband, father, and friend)
- Thinking and living agentically
- Being curious about things that matter (as measured against my other values)

Compared with Innerhelm and other priorities such as my family, Logwise didn't measure up against these values. The effects of mimetic desire, my brain's quasi-addicted relationship to Logwise, and the diminishment of self that I experienced meant that Logwise was a _net negative_---it cost more than it paid out, taking me _further_ from the kind of person I want to be, instead of closer to it.

## Unlaunching

Realizing the steep cost and low payout of Logwise made the optimal path clear: "unlaunching" Logwise. Furthermore, I'm taking steps to keep me from opening that loop again.

Firstly, I've open-sourced [the code](https://github.com/tylermercer/logwise) and archived the GitHub repository containing it. Archiving the repository serves to (1) preserve the code in case I need to reference it for other things, (2) signal to others that Logwise isn't under active development, and especially (3) make it hard for me to pick up again---I would have to un-archive the code, set up my local development environment again, etc.[^todoist]

Second, I've decided not even to _use_ Logwise. This was a hard decision, but I found in my unsuccessful efforts to straddle both projects that even just using the app would cause that close-resistant loop to re-open. Instead, I've implemented a similar logging setup using [Obsidian](https://obsidian.md). It's not nearly as ergonomic, but it meets my needs.

Third, I've written this essay. Writing out my reasoning behind this decision explicitly reinforces it in my own mind. I'm reminded of a quote by Mary Ruefle:[^lamport]

> I used to think I wrote because there was something I wanted to say[, ...] but I know now I continue to write because I have not yet heard what I have been listening to.

In addition to helping me "hear" these ideas, this essay serves as what behavioral design writer Nir Eyal calls a [commitment pact](https://www.nirandfar.com/making-accountability-pacts/)---a clear agreement with an undesirable consequence (embarrassment, in my case) for not following through. Having written out this essay leverages my brain's [inherent bias for consistency](https://fs.blog/commitment-consistency-bias/) to enforce my decision.

In this way, I'm using _higher-order agency_---decisions that affect my decisions---to make it easier to follow through on my intent.

## Agentic quitting

As I wrote in the last Innerhelm blog post before starting on Logwise, [persistence is an important part of being agentic](https://innerhelm.com/posts/persistence). But I've discovered that quitting can be agentic as well.

Admittedly, writing is a uniquely focus-demanding activity. Writers throughout time [have taken extreme measures to eliminate distractions](https://www.newyorker.com/culture/annals-of-inquiry/what-kind-of-writer-is-chatgpt#:~:text=These%20mental%20demands%20may%20help%20to%20explain%20the%20eccentric%20habits%20of%20writers)[^writing-computer] and enable deep work, and the nature of writing is such that this narrowing-down pays significant dividends. Other areas of human endeavor, such as business or athleticism, may derive more value from juggling competing demands than writing does.

Furthermore, exploration---pulling multiple different levers---is still intensely valuable, especially early on. You can't confidently identify a high-output lever to focus on until you've tried a few, often in quick succession or concurrently. It's also good to explore adjacent levers over time, even after you've found a good lever; even an endeavor that has proved valuable can be improved upon. But, once you've learned a given activity is low-value, you will benefit from quitting that activity.

Our culture typically frames persistence as hard and worthwhile, and quitting as easy and unrewarding. But, [as author and lecturer Alfie Kohn points out](https://www.alfiekohn.org/article/downside-grit/), quitting can often be quite difficult:

> To know when to pull the plug requires the capacity to adopt a long-term perspective.  Continuing to do what you’ve been doing often represents the path of least resistance, so it can take guts to cut your losses.
 
I believe agentic quitting is, for most people, a dormant superpower—a practice that yields significant dividends but is underused.
## Conclusion

In a society where we often wear our busyness as a badge of honor, being intentional about what you _won't_ do can be refreshing and energizing. Agentic quitting of less-important things unlocks time, energy, and mental resources to put towards the things that _are_ important.

Not everything that feels compelling is worth spending time on. Challenge your assumptions about the payouts and costs of the various things you do, and take both a short-term and long-term view as you evaluate them.

As I considered this decision to unlaunch Logwise, I worried that I would feel uncomfortably constrained---like "a wild bull [caught] in a net," to borrow a metaphor from [Isaiah](https://www.churchofjesuschrist.org/study/scriptures/ot/isa/51?lang=eng&id=p20#p20). But I haven't.

On the contrary, I've felt more grounded, more curious, and more free. Zooming in on my writing has made the intricacies found in that portion of [the infinitely-detailed fractal of truth](/posts/all-writing-is-reductionistic/) all the more interesting.[^still-open] As Karlsson puts it:

> [A]s a person for whom narrow focus is against my instincts, the most remarkable thing about it is how rich it feels.

I have to say I agree.

[^throwing-away]: I should note that I didn't delete the Todoist project with my roadmap for Logwise; I only archived it. I had a lot of knowledge and resources captured in my notes there, and, despite my minimalist approach to _physical_ possessions, I struggle to discard conceptual ones such as crystallized knowledge. But archiving the project serves to make it hard to pick the project up again---a form of desirable difficulty.

[^diapers]: Logging diaper changes---and which of those were diaper _failures_---led surprisingly quickly to holding strong opinions about diaper brands. Something I wouldn't have anticipated a year ago! 

[^parallelism]: If you replace "the mnemonic medium" with "agency thinking," "Orbit" with "Logwise," and "2020" with "2024," this describes my situation exactly. Amusingly, even the months are correct.

[^emphasis]: Emphasis mine.

[^content-sites]: Content sites, however, are much easier to reasonably declare completed, after which further modifications are typically small. This is how web development agencies work---by completing entire websites, delivering them to their client, and, for the most part, moving on. This model does not typically work in software engineering contexts unless you have an in-house team of engineers that can continue development where the agency left off.

[^flow]: Matuschak mentions [flow](https://en.wikipedia.org/wiki/Flow_(psychology)), the concept named and studied by psychologist Mihaly Csikszentmihalyi, who believed flow to be the source of lasting happiness. As someone with ADHD, my experience with Logwise was much closer to [hyperfocus](https://en.wikipedia.org/wiki/Hyperfocus) than to flow. Hyperfocus, which some people describe as "ADHD's superpower", is in my experience often quite unpleasant---a sort of quasi-addicted state where I can't mentally put something down.
	
	To use a contrived metaphor: the way I experience it, flow is like water skiing, but hyperfocus is like wiping out while water skiing but your hand is glued to the rope and the people driving the boat don't stop.

[^reasonable]: I'm reminded of a quote by Benjamin Franklin: "So convenient a thing it is to be a *reasonable* creature, since it enables one to find or make a reason for everything one has a mind to do." 

[^app-models-of-desire]: Amir Salihefendić (creator of [Todoist](https://todoist.com)), Christina Willner and Mark Tucker (creators of [Amazing Marvin](https://amazingmarvin.com/)), and Rob Walling ([founder of Drip and serial SaaS bootstrapper](https://robwalling.com/)), among others.

[^writing-models-of-desire]: Notably, Henrik Karlsson and Andy Matuschak (who I quoted in this essay), along with Nick Wignall, Anne-Laure le Cunff, James Clear, Adam Grant, and others.

[^todoist]: I've done the same with the Todoist project that contained Logwise's roadmap. Archiving it allows me to consult the links and other resources I had gathered there if needed in the future, while preventing me from adding, updating, or completing tasks.

[^still-open]: Part of this is due to the fact that Innerhelm itself is still, [by design](https://innerhelm.com/posts/where-innerhelm-began/), open-ended:
	
	> [F]ocusing on writing about these ideas seemed like the most strategic step forward. It is sufficiently open-ended that I can follow the idea where it leads, while still being concrete enough to share meaningfully with others (which is itself helpful in the exploration).
	
[^writing-computer]: One such extreme measure I've taken myself was to turn an old laptop into a dedicated writing device, as I explained in ["Creating a Partial Clone of a Git Repo"](/posts/software/partial-clone-git-repo/). (I'm writing this essay on that device.)

[^lamport]: From _Madness, Rack, and Honey_. Quoted by Mandy Brown in her blog post ["Why We Write"](https://aworkinglibrary.com/writing/why-we-write).
	
	Also relevant is this quote from eminent computer scientist Leslie Lamport: "If you're thinking without writing, you only think you're thinking."

[^malleable]: These ideas are expanded and formalized by [the Malleable Systems Collective](https://malleable.systems), which catalogs and experiments with malleable software.

[^zeigarnik]: This tendency of open loops to stick in the mind is called [the Zeigarnik effect](https://en.wikipedia.org/wiki/Zeigarnik_effect).

[^mimetic-and-authentic]: It's worth noting that authentic desires are not necessarily non-mimetic. I can point to individuals who modeled my authentic desires for me just as I can point to models behind the inauthentic desires I mentioned earlier. The key is that while all or almost all desires are mimetic to some degree, not all desires are authentic, and it's the authentic ones that we want to focus on.
