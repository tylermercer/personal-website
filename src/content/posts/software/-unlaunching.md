---
title: Unlaunching
description: Killing a project that I absolutely love
#date: 2024-10-03 9:03:00.00
#imgForInnerhelmVersion: https://upload.wikimedia.org/wikipedia/commons/8/81/Vingtmillelieue00vern_orig_0437_1.jpg
---

I spent the last six months building a web application called [Logwise](https://logwise.tylermercer.net). It's an app for logging things---sleep quality, focus levels, research insights, health symptoms, or anything else you'd like to monitor over time. It works offline (thanks to [Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and allows you to change the schema of your logs over time without data loss (thanks to [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling project for me---the kind that I wake up thinking about, and for which I have a constant flow of exciting ideas.

But I've decided to open-source and archive the repo, and to throw away my roadmap.[^throwing-away] I'm "unlaunching" it---declaring it done, and putting it out there like a launch, but with the intent to put a firm lid on the project.

At the beginning of August, when I was absorbed in this project, I realized that I was not in a good place mentally. As I wrote in my journal at that time:

**TODO: explain the negative mental state I was in better than this journal snippet does**

> I've been thinking exclusively about my app ... and while the progress I've made on it has been satisfying, it doesn't feed my soul.
>
> I need to write. Specifically, I need to write in ways that change how I think, how I see the world, and who I am. I've realized that that's what writing---good, thorough writing---does for me. An example is my essay ["Certainty and Uncertainty as Elements of Faith"](https://tylermercer.net/posts/faith/certainty-and-uncertainty-as-elements-of-faith/), which I published on my personal website last September. The ideas and connections that I formed as I thought through and refined that essay have changed how I approach the concepts of faith, uncertainty, and humility. *Innerhelm*, as a project, has had similar effects, but I've stopped writing for it, and as such have stopped reaping the intellectual and spiritual benefits.
>
> Building something cool, useful, and challenging in Logwise is satisfying, but not in the right ways. It doesn't lead me to discovering new tools with which I can interact with the world, and learning and growing in truth and understanding.
>
> I've gotta start writing again---the kind of writing that refines my thinking.

## Making a first pass

**TODO: explain my initial thinking about splitting my time**

I picked up Innerhelm again on August 31. Initially, I made visible progress quickly, by writing down my thoughts as atomic evergreen notes in an Obsidian vault. This was energizing and fruitful---the more I wrote, the more thoughts I had and the more resources I added to my queue. Writing these "atoms" felt a lot easier than writing weekly newsletters back in the first few months of the year had been. I felt creative and insightful and mentally engaged with the concepts I was exploring, and with life as a whole.

That lasted about a week and a half. Beginning around September 10, I slowly drifted back into the myopic, quasi-addicted state of mind that I had found myself in before.

I think there were a few reasons for this:

* Logwise was still something I wanted to make progress on, in particular because I was still using it (somewhat---but noticeably less than when I was working on it consistently) and thus was still seeing ways I could improve it. I also kept seeing tools and libraries (e.g. SimpleWebAuthn) that could help me with things I had on Logwise's roadmap. Each new thing I came across was a honeypot trap for my Logwise-focused engineering brain.
* My 8-month-old daughter experienced a major sleep regression around this time. This impacted my sleep as well, hindering my cognition and creativity. It also directly impacted the time I could put into writing, since it seemed better for my well-being overall to sleep in when I could instead of waking up early to write.
* Work was profoundly unfulfilling at this point, and I often ended the workday with an itch to write code that I felt good about, in a project where I felt a high degree of autonomy.

I picked up Logwise again and made a few changes. I was able to maintain some of my Innerhelm writing (specifically, my daily notes practice where I capture new ideas), but writing new evergreen notes required a lot more cognitive capacity and presence than I was giving to it. Losing momentum on that habit was also a discouragement in itself, forming a vicious cycle.

After another week, I had all but stopped writing entirely.... again. 🤦‍♂️

## Reevaluating

I began to wonder if switching back and forth between Innerhelm and Logwise was not something I could do as freely as I had hoped when I initially decided to pick up Innerhelm again. My brain seemed to have an addiction-like, hyperfocus-heavy relationship to my engineering projects specifically, which made switching *to* them easy but switching *away* from them hard.[^writing-friction] **TODO: move this next bit earlier** I also recognized that, in general, when I'm in engineering hyperfocus mode, my side project thinking bleeds heavily into the rest of my life. My mental focus narrows, mental presence in other domains (e.g. my relationships with my wife and daughter) gets much harder, and I feel less emotionally healthy overall.

I resisted the idea of shuttering Logwise completely. It was still a viable product idea, even if just for me and (hypothetically) others for whom it could be a good fit. I fell prey to the sunk cost fallacy: I had spent more than six months working on it---I couldn't just throw all that work away.

**TODO: tie in nonessentialism thinking**

Over the last couple days, I've reconsidered that assessment.

**TODO: tie in these ideas:**

[Karlsson](https://www.henrikkarlsson.xyz/p/multi-armed-bandit):

> People tend to gravitate to different sides of the explore/exploit spectrum. If you are high on openness, like I am, exploring comes easy. But it is harder to make a commitment and exploit what you’ve learned about yourself and the world. Other people are more committed, but risk being too conventional in their choices. They miss better avenues for their effort. Most, however, tend to do less than optimal of both—not exploring, not exploiting; but doing things out of blind habit, and half-heartedly.

> Perform experiments. By this I don’t mean do random things. I mean, STATE YOUR ASSUMPTIONS and FIND WAYS TO TEST IF THEY ARE FALSE. Most of the time, the slot machine of an experiment yields nothing. But that’s ok. A few will rearrange the world around you. \[In this case, I was implicitly testing certain assumptions by building Logwise. I needed to face up to the fact that they were false.\]

> When \[becoming a father] ate about half my time, I had to force myself to make priorities: *I would care for \[my daughter], I would write, and I would say no to everything else*. Narrowing my life like this, at least doubled how much I could achieve. When I had more time, I had spread myself too thin to get stuff done.

> Jony Ives: "One of the things Steve \[Jobs] would say \[to me] because he was worried I wasn’t focused — he would say, “How many things have you said no to?” I would tell him I said no to this. And I said no to that. But he knew I wasn’t interested in doing those things. There was no *sacrifice* in saying no \[to those things]. What focus means is saying no to something that with every bone in your body you think is a phenomenal idea, you wake up thinking about it, but you say no to it because you are focusing on something else"

> These days, I’ll spend the afternoon playing with the kids, doing the dishes, repairing the houses—being busy in a mind-clearing way. Then, when I sit down to write the next morning, I can type 700 words without thinking. The ideas have been churning in my head, just below the surface of conscious thought, and come fully formed.
> 
> When I was younger, I was never this lucky. It is partly because I was less skilled. But it is also partly because I would interrupt the nonconscious processing back then. Unintentionally, I would tell my brain to focus on something else—a conflict in a TV series I was watching, for instance. I would watch an episode before bed, and the cliffhanger would open a loop in my head. That loop would be churning in my head as I slept; I woke to a blank page. I don’t have time for that anymore. I make sure to always have an open loop concerning my writing. And I close every other loop—by wrapping it up as fast as I can, or by writing it down on a list, or, preferably, not opening the loop at all.

> as a person for whom narrow focus is against my instincts, the most remarkable thing about it is how rich it feels

Matuschak ([Mental states of deep software development and deep research thinking are mutually exclusive](https://notes.andymatuschak.org/z7RGGgVdDVHXkzJ6BVFKws8), [Switching costs are high between software development and research thinking](https://notes.andymatuschak.org/zD2oDSCgLEyM4xDhjRLXtuH), [Focused software development work is self-abnegating](https://notes.andymatuschak.org/zPgc12cKuwjrRzEnbr2a8uK))

> In practice, it’s quite difficult to think deeply about theories while in the midst of a significant software development project. And it’s hard to build momentum on software development when spending much of one’s day in reflection and writing.

> In March 2020, I wrote a list of research questions for the Mnemonic medium, then embarked on building Orbit. Writing now in October 2020, I’ve not made any meaningful progress on any of those research questions. At some point I’ll need to execute a “hard switch” back to thinking about those questions again, at which point it’ll be difficult for me to take on any significant new features for Orbit.

> Worse: at least in my experience, it’s quite costly to switch between those two mental states. I’ve not had much success dividing up my days or even my weeks into “building” and “thinking” times. \[I think this is because of what Karlsson wrote about loops.]

> When I’m deep in software development, reaching flow on a daily basis, my mind narrows to a kind of tunnel-vision, totally fixated on the software systems and their problems. ... I find this effect increasingly unpleasant on a personal level. When I’m in this state, I feel my sense of self shrinking. I become unreflective. Creative thoughts cease to arise. I find writing difficult. And so on.

Me ([2023-09-19](obsidian://open?vault=personal-writing&file=Spiritual%20Notes%2FJournal%2F2023-09-19), [2024-08-01](obsidian://open?vault=personal-writing&file=Spiritual%20Notes%2FJournal%2F2024-08-01))

> Yesterday I was pondering on my way to work and realized something startling: focusing on building an app makes me possessive of my time and angry when I don't get to work on it (and often angry when I do, because of how slow it goes). But when my focus is on my writing, I feel expanded, more emotionally healthy, and a lot more patient with changes to our schedule that limit my time to write.

> I've been thinking exclusively about my app in the mornings, and while the progress I've made on it has been satisfying, it doesn't feed my soul.
> 
> I need to write. Specifically, I need to write about eternal truths in ways that change how I think, how I see the world, and who I am. I've realized that that's what writing---good, thorough writing---does for me. An example is my essay ["Certainty and Uncertainty as Elements of Faith"](<https://tylermercer.net/posts/faith/certainty-and-uncertainty-as-elements-of-faith/>), which I published on my personal website last September. The ideas and connections that I formed as I thought through and refined that essay have changed how I approach the concepts of faith, uncertainty, and humility. [*Innerhelm*](<https://innerhelm.com/>), as a project, has had similar effects, but I've stopped writing for it, and as such have stopped reaping the intellectual and spiritual benefits.
> 
> Building something cool, useful, and challenging in Logwise is satisfying, but not in the right ways. It doesn't lead me to discovering new tools with which I can interact with the world, and learning and growing in truth and understanding.
> 
> I've gotta start writing again---the kind of writing that refines my thinking.

Kohn ([The Downside of “Grit” (Commentary)](https://www.alfiekohn.org/article/downside-grit/)]):

> To begin with, not everything is worth doing, let alone doing for extended periods, and not everyone who works hard is pursuing something worthwhile.  People who are up to no good often have grit to spare.  Persistence is just one of many attributes that can sometimes be useful for reaching a (good or bad) outcome, so it’s the choice of goal that ought to come first and count more.

> Hence the proverbial Law of Holes:  When you’re in one, stop digging.

> Gritty people sometimes exhibit what psychologists call “nonproductive persistence”: They try, try again even though the result may be either unremitting failure or “a costly or inefficient success that could have been easily surpassed by alternative courses of action,” as Dean McFarlin at the State University of New York and his colleagues put it in the Journal of Personality.  Even if you don’t crash and burn by staying the course, you may not fare nearly as well as if you had stopped, reassessed, and tried something else.

> The benefits of knowing when not to persist extend not only to the outcomes of a decision but to the effects on the individual who made it.  Following a year-long study of adolescents, Canadian researchers Gregory Miller and Carsten Wrosch concluded that those “who can disengage from unattainable goals enjoy better well-being…and experience fewer symptoms of everyday illness.”

> To know when to pull the plug requires the capacity to adopt a long-term perspective.  Continuing to do what you’ve been doing often represents the path of least resistance, so it can take guts to cut your losses.  That’s as important a message to teach one’s children as the usefulness of perseverance.

> Even the achievement claims seem less persuasive when you look closely.  Are more A’s given to students who report that they put off doing what they enjoy until they finish their homework (as one study found)?  Sure. In other words, those who do what they’ve been told,  regardless of whether it’s satisfying or sensible, are rewarded by those who told them to do it. \[Maybe tie in _Wanting_ here. I was "told" what to do by the models I emulated.]

> \[Duckworth's] value judgment, in other words, is that children should spend their time trying to improve at one thing rather than exploring, and becoming reasonably competent at, several things.  But for anyone who favors breadth and variety in life, no reason has been offered to prefer a life of specialization. \[Karlsson's approach makes a lot more sense. Focus is more valuable when your exploration has helped you determine _what_ to focus on.]

Rubin ([_Better Than Before_](obsidian://open?vault=resource-notes&file=Books%2FBetter%20Than%20Before)) — habits reduce mental load, and bright line rules can enforce habits

> To achieve greater clarity in my actions, I often invoke a "bright- line rule," a useful concept from law. A bright-line rule is a clearly defined rule or standard that eliminates any need for interpretation or decision making; for example, observing the Sabbath, or using The New York Times Manual of Style and Usage to decide grammar questions, or never buying bottled water, or answering every email within twenty-four hours, or calling home every Sunday night are bright-line rules.

> **TODO: get quote from intro about habits reducing mental load**

McKeown ([_Essentialism_](obsidian://open?vault=resource-notes&file=Books%2FEssentialism)) — I had to choose that which was most essential; I couldn't do it all.

> 

Burgis ([_Wanting_](obsidian://open?vault=resource-notes&file=Books%2FWanting))

> **TODO: get _Wanting_ book** 

My long-term goals with Logwise were highly mimetic. At the heart of it, I wanted to create a widely-used app, because that was what I've seen modeled by people I look up to. That core mimesis was surrounded by derivative goals, like making the app financially viable, but the central focus of the project was not about money; it was about achieving the status of "I've built a successful app." And the reason I sought for that status was because of mimesis. This mimetic desire leeches off of my values-motivated desire to make something that is useful---but I've already done that in Innerhelm. From very early on in that project, my grandfather would reply to my newsletters sharing how he found what I wrote useful. It's easy to discount this because it fails the stereotypically-named ["Mom Test"](https://www.amazon.com/Mom-Test-customers-business-everyone-ebook/dp/B01H4G2J1U), but his gratitude was genuine. That's more than I've ever recieved for Logwise, or anything else "app-ish" that I've built.


Adam Alter ([_Irresistible_](obsidian://open?vault=resource-notes&file=Books%2FIrresistible))

> \[W]here substance addictions are nakedly destructive, many behavioral addictions are quietly destructive acts wrapped in cloaks of creation.

Having made that decision, I took several steps to put an end to Logwise without feeling like my work on it over the last six months was completely wasted. Here's what I've done:

* I've downgraded the app's domain to a subdomain of my personal site.[^subdomains]
* I exported my personal data from the app. Since I'm keeping the app itself online, I could theoretically continue using it for my personal logging needs, but it would be very difficult to avoid thinking about ways it could be extended. (As of this writing, my Logwise Todoist project has more than 300 tasks in it.) Instead, I'm going to reimplement Logwise's features in Obsidian, via a couple plugins.
* I've open-sourced and archived the repo. This allows me to preserve the knowledge and ideas that I crystalized in Logwise's code, while [closing that open loop](https://notes.andymatuschak.org/Close_open_loops). I can make short blog posts on this blog about various techniques I used in Logwise, linking to and drawing snippets from the actual code I used. But, because it is archived, I've weakened the temptation to keep working on it. It being archived also sends a clear signal to people who might use it that it won't be updated.
* I've written up my reasons for unlaunching on my personal blog, in this blog post you're reading. In addition to facilitating the above reflection, this acts as a public commitment device_[^commitment-device] to keep me from reneging on my decision.

**TODO: write conclusion**

[^throwing-away]: Ok, that's not fully true. I didn't delete my Todoist project; I only archived it. But I'm intentionally making it hard to pick the project up again.

[^writing-friction]: Admittedly, there's more to this difficulty than just the addictiveness of engineering projects. My brain has been conditioned over the years to treat writing as a high-stress, adrenaline-fueled, deadline-motivated activity. I'm actively reconditioning myself to have a healthier relationship with it, but that is a topic for a different post.

[^subdomains]: See ["Domain Sins of My Youth"](https://blog.jim-nielsen.com/2023/domain-sins-of-my-youth/) by Jim Nielsen and ["Use Subdomains"](https://chriscoyier.net/2023/09/21/use-subdomains/) by Chris Coyier

[^commitment-device]: See [_Indistractible_](https://www.nirandfar.com/indistractable/) by Nir Eyal.
