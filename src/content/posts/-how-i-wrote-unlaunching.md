---
title: Degrees of Thoroughness
description: Towards a flexible and effective personal writing process
---
A few months back, I came across [some (unnamed?) person's thoughts on procrastination](https://learnhowtolearn.org/how-i-cured-procrastination/) and how they overcame it. They argue that procrastination is a "limbic response" where your brain tries to defer pain to avoid it, but by so doing makes it more intense. That intensity reinforces the deferral behavior---clearly if it was _that bad_, it was a good thing to defer. This becomes "a vicious cycle of pushing off work, leading to higher peak pain, leading to pushing off work more, leading to even more peak pain, etc. Every iteration of this cycle your brain gets another dose of suffering and further associates work with pain."

I realized this pattern had poisoned my relationship with writing specifically. I procrastinated basically every essay in school (and they typically turned out decently enough regardless, which only served to further reinforce the habit). By the time I graduated, I had more or less accepted that putting off my essays to the last minute was just how I wrote good essays.

When I started _Innerhelm_ last year, I fell back to that strategy again, writing each newsletter in a mad scramble each Thursday night---since, initially, I had promised to send a new newsletter each Thursday. (Unlike my writing in school, where the pressure of a grade led me to at least come up with an outline in my head before sitting down to write, these newsletters were pretty off-the-cuff, and as such weren't even the sort of writing I felt good about.) I really didn't enjoy falling back into that habit, and I realized that dumping my nascent thoughts into a rushed newsletter was not giving me time to refine them. I decided to [pivot to publishing less frequently](https://innerhelm.com/newsletters/a-change-in-cadence/). But I still didn't know how to write well without deadlines, and (coupled with the distraction of Logwise) I wound up just not writing at all.

But once I saw procrastination as a vicious cycle of self-reinforcing fear, I realized this rushed approach to writing _wasn't_ just a fundamental part of how I write; it was something I had *learned*, and which I could, with effort, unlearn. I needed to figure out how to make it more like how I approach my coding projects, like Logwise—small, rewarding chunks that I could complete frequently, instead of big stressful crunch-time effort.

At this point, you might be expecting me to say "here's how I solved it." Unfortunately, I haven't arrived at a complete solution yet---hence why I haven't written anything for _Innerhelm_ since publishing "Unlaunching" last December. But I realized the other day that there's an emergent pattern to how I wrote "Unlaunching" that could be a healthier alternative to deadline-fueled procrastination writing.

In broad strokes, here's how I wrote "Unlaunching":

1. Brain dump my initially-congealed thoughts about the topic, journal entry style. 
2. Think more, and list all the quotes and resources (as text, not as links) that seem relevant as I think about it.
3. Think more, and write out an outline with references to points and quotes from the brain dump and quotes list
4. Tackle the outline piecemeal, but probably in order so it can adapt organically as I go through it. Do less than I want to in each sitting.
5. Run the completed essay by my review group.
6. Tighten based on feedback (by making a list of feedback tasks and addressing a few in each sitting).

**TODO: continue from here**

I think if I can try to do (part of) one of those steps each morning as I write I could probably turn out essays at a better pace than I have so far. Although the first point should probably be done ad-hoc, maybe framed as a hypothesis in my Obsidian workspace (rather than in a daily note or something).

One thing I like about this process is that I have three low-friction early ejection points (I could ship what I have after steps 1, 4, or 5, if I wanted to) and two higher-friction points (I could write a simple essay based on what I have after step 2 or 3).

Another way to think about this, which I might adopt because it's lower in activation energy, is to think about each step (combining steps 2-4 into one step, and steps 5-6 into one step) as an optional level up in thoroughness:
1. Written
2. Written based on an outline
3. Written based on an outline and reviewed by others
Some writing—such as [my post about my linkblog](/posts/linkblog), or this post—only deserves to be a 1.

---

Been thinking a lot about how [this thread](https://chat.mercerfamily.page/mercer-family/pl/w91gonurr7dg8ezagscs6sne8r) connects to Innerhelm over the last week. (TL;DR my high-stress, high-procrastination writing style in college poisoned my relationship to writing.) I've had some interesting thoughts about what makes my relationship to code different, how those ideas relate to my core motivations (autonomy, competence, and relatedness), and how I can leverage those things to heal the poisoning:
* I break coding tasks into bite-sized subtasks, using my subtasks-heavy loosely ordered list approach in Todoist, as [mentioned previously](https://chat.mercerfamily.page/mercer-family/pl/7os4tsuh67nd7rqzsaddbmte4w). This lowers the difficulty of (1) knowing what to do for a specific top-level task and (2) deciding which task to work on, while still preserving my autonomy. And overall, the Todoist approach I use feels highly autonomous because I can quickly demote and promote various tasks as my thinking about the project changes.
* I have something _showable_ quickly when I code. In part, this flows out of the nature of coding (especially UI coding), but it's also related to the above point; small atomic subtasks usually result in demonstrable increments in what I'm building, even within the space of an hour or two in the morning. I often find myself wrapping up my morning coding and then going to show Eve what I've changed. Even if it's something small (like adding the rename-collision functionality in Logwise yesterday), the fact that I can say "look what I did!" gives me a satisfying competence and relatedness hit.

So I need to bring those two things into my Innerhelm work, and do so in a way that avoids the panic-stress my brain associates with writing, so I can show my brain that writing is actually fun:
* I've reorganized my Innerhelm writing project, and it's working ok so far, but I realized I also need to put "bugfixes" and other low-hanging fruit into the top-level queue. Things like writing in my daily notes in Journote, writing a practice elevator-pitch for agency thinking (something I'm trying to do repeatedly, to get better at it), etc. I also want to add exploration tasks for exploring questions and ideas, framed as small completable chunks, e.g. "gather a few resources about children and agency thinking" or "write an outline of questions to explore about higher-order-agency". And I think in some cases, lifting these _out_ of their related article task---rendering them as prerequisites rather than as subtasks---can help me knock them off as small atomic chunks.
* Showability is trickier, but I had a thought about it today: I'm gonna make a separate GitHub pipeline that changes whatever draft I last worked on to have a `pubDate` (which makes it included in the build output) and publishes the site to `wip.innerhelm.pages.dev`. Then that site will always have a working draft of whichever post/page I last worked on, which I can show to Eve and others for feedback, validation, and that relatedness/competence hit I get from showing off my code.

We'll see how well it works!

---

https://learnhowtolearn.org/how-i-cured-procrastination/

Really liked the ideas in the procrastination article especially: 

> [Procrastination is] a limbic response to anticipated pain – i.e. the primitive/fundamental part of your brain (“monkey brain”) sees pain and wants to avoid it, taking tremendously stressful amounts of willpower to overcome.
> 
> But.. work is clearly extremely beneficial, so your brain shouldn’t dislike it – there’s some disconnect there, and wherever there’s a disconnect in a system, there’s a root cause to identify and try to fix.
> 
> I realized that procrastination is because of a vicious cycle of pushing off work, leading to higher peak pain, leading to pushing off work more, leading to even more peak pain, etc. Every iteration of this cycle your brain gets another dose of suffering and further associates work with pain.

I realized this pattern has poisoned my relationship with writing specifically. I did it for basically every essay in school, whereas with coding I only did that occasionally. I need to figure out how to make it more like how I approach my coding projects—small, rewarding chunks that I can complete frequently, instead of big stressful crunch-time effort.

Something else interesting is that my scripture study isn't poisoned this way, because I don't see it as an obligation to write a Big Thing that Needs To Be Done. I just write what comes to me as I study.

Maybe there's a middle ground I can find where I'm still planning what I'll write but not approaching it as a Big Thing like I did in school. But even "Write a paragraph about X" is paradoxically more paralyzing than spontaneously writing a paragraph about X. The poisoning runs deep.