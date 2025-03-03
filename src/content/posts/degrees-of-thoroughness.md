---
title: Degrees of Thoroughness
description: Towards an effective personal writing process
date: 2025-03-03 12:00:00
---
A few months back, I came across [some (unnamed?) person's thoughts on procrastination](https://learnhowtolearn.org/how-i-cured-procrastination/) and how they overcame it. They argue that procrastination is a limbic response where your brain tries to defer pain to avoid it, but by so doing makes it more intense. That intensity reinforces the deferral behavior---clearly, your brain reasons, if it was _that bad_, it was a good thing to defer. This becomes "a vicious cycle of pushing off work, leading to higher peak pain, leading to pushing off work more, leading to even more peak pain, etc. Every iteration of this cycle your brain gets another dose of suffering and further associates work with pain."

This "limbic response" model resonated strongly with my personal experience with procrastinated. When I read this, I realized this vicious cycle had poisoned my relationship with writing specifically. I procrastinated basically every essay in school, writing them in an adrenaline-fueled panic over the last two or three hours before the deadline (and they typically turned out decent enough to get good grades, which only served to further reinforce the habit). By the time I graduated, I had more or less accepted that putting off my essays to the last minute was just how I wrote good essays.

When I started my blog [_Innerhelm_](https://innerhelm.com) last year, I fell back to that strategy again, writing each newsletter in a mad scramble each Thursday night (since, initially, I had promised to send a new newsletter each Thursday). I didn't enjoy subjecting myself to that weekly dose of adrenaline, and I realized that dumping my nascent thoughts into a rushed newsletter was not giving me time to refine my ideas. Furthermore, unlike my writing in school, where the pressure of a grade led me to at least come up with an outline in my head before sitting down to write, these newsletters were pretty off-the-cuff, and as such weren't even the sort of writing I felt good about. I [pivoted to publishing less frequently](https://innerhelm.com/newsletters/a-change-in-cadence/), but I still didn't know how to write well without deadlines, and I wound up just not writing at all for most of last year.

But once I realized that my procrastination of my writing was a vicious cycle of self-reinforcing fear, I saw that this rushed approach to writing _wasn't_ a fundamental part of how I write; it was something I had *learned*, and something which I could, with effort, unlearn. I needed to figure out how to approach my writing similarly to how I approached my coding projects, like Logwise—by breaking it into small, rewarding chunks that I could complete frequently, instead of a big stressful crunch-time effort.

## An emergent process

At this point, you might be expecting me to say "here's how I solved it." Unfortunately, I haven't arrived at a complete solution yet---hence why I haven't written anything for _Innerhelm_ since publishing ["Unlaunching"](/posts/software/unlaunching/) last December. But I realized that there's a pattern to how I wrote "Unlaunching" that could provide a healthier, more incremental alternative to the deadline-fueled procrastination I've done in the past.

In broad strokes, here's the process I followed in writing "Unlaunching," and which I'm considering using going forward:

1. Brain dump my initially-congealed thoughts about the topic, journal entry style. 
2. Think more about those ideas, and make a list of all the quotes and resources (as text, not as links) that seem relevant as I think about it.
3. Think more, and write out an outline with references to points and quotes from the brain dump and quotes list.
4. Tackle the outline piecemeal, but in order, so I can adapt it organically as I go through it.
5. Run the completed essay by my review group (a handful of friends whose critical judgment I trust and who I can rely on for candid feedback).
6. Tighten based on the feedback (by making a list of feedback tasks and addressing a few in each sitting).

## Degrees of thoroughness

Thinking about this further, I realized something nice about it: I have a _thing_ after each step, and a potentially-publishable _thing_ after three of those steps (1, 4, and 6). This makes it an iterative, incremental approach to writing, rather than an all-or-nothing waterfall-style approach, which lowers the risk and activation energy of tackling a given piece. It offers three low-friction early ejection points (after steps 1, 4, and 5) and two higher-friction points (I could write a simple essay based on what I have after step 2 or 3).

In a sense, it's a set of three degrees of thoroughness:
1. Written
2. Written based on an outline
3. Written based on an outline and reviewed by others

Some writing—such as [my post about my linkblog](/posts/software/linkblog/), or this post—only deserves to be a 1 or 2. Other writing, such as "Unlaunching," I want to be a 3.

But, importantly, the incrementality of this approach offers a smooth upgrade path. If I were so inclined, I could "upgrade" this post to a 3 by refining the outline, reassembling the thoughts I already have here according to that outline, and running it by my review group for feedback.

I used to write everything in one sitting in part because writing in stages seemed like more work. But that's a bit like saying waterfall software development is less work than Agile software development. What you eliminate in "work," you end up taking on as risk and stress instead. You run the risk of wasting the _whole thing_ (like my early Innerhelm newsletters) instead of just wasting parts of it (such as the parts from the brain dump that I don't include in the outlined essay, or the parts of the outlined essay that I cut based on feedback).

## Fine-tuning

There are some additional levers I'm trying to pull in my writing this year, to make this process work even better than it did for "Unlaunching." One is to _avoid ending a writing session at a clean break point between steps_.

As an example, if I brain dump my thoughts in a given writing session, I'll quickly throw a few quotes into a new document before wrapping up, and pick up there the next day. If I write an outline in a given session, I'll write the first paragraph or two in that outline in the same session.

The purpose here is to avoid aligning the beginning of each step (which has a higher mental activation energy) with the beginning of a writing session (where my momentum is lowest). Instead, by tackling the beginning of each step at the *end* of a writing session, I can align high-activation energy points in the process with the times when I have _high_ momentum. Additionally, the [Zeigarnik effect](https://en.wikipedia.org/wiki/Zeigarnik_effect), which says that uncompleted things stick in the mind more durably than completed ones, will help me thread each session into the next one and keep the mental loop open.

Another is to make each step in the above process _showable_. In working on Logwise, I found that my mornings were effective in part because I usually had something I could show my wife or send to my brothers after each morning's work. This meant that a given morning of work satisfied all three core motivations of Self-Determination Theory: autonomy, competence, and relatedness. (Procrastination-based writing, by contrast, was _low_ in all three of these areas.) Following the above process should help with autonomy and competence, but relatedness is harder to achieve because my in-progress writing is hard to share with others.

To address this, I've created a separate deploy pipeline for Innerhelm that makes my drafts shareable at a preview URL (similar to how PR previews work, but without needing a PR). This mechanism also serves as a way for me to get feedback on my writing from my review group.
## Conclusion

I'm curious to see how well this process works for me. I think if I can do (part of) one of those steps each morning as I write, I can probably turn out good essays at a better pace than I have so far. I'm also hopeful that doing so consistently (and [persistently](https://innerhelm.com/posts/persistence)) will help heal my relationship with writing and retrain my brain to view it as enjoyable rather than stressful.

I'll write a follow-up post with the results of this experiment later on in the year.
