---
title: Unlaunching
description: Killing a project that I absolutely love
#date: 2024-10-03 9:03:00.00
#imgForInnerhelmVersion: https://upload.wikimedia.org/wikipedia/commons/8/81/Vingtmillelieue00vern_orig_0437_1.jpg
---

I spent the last six months building a web application called [Logwise](https://logwise.tylermercer.net). It's an app for logging things---sleep quality, focus levels, research insights, health symptoms, or anything else you'd like to monitor over time. It works offline (thanks to [Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and allows you to change the schema of your logs over time without data loss (thanks to [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling project for me---the kind that I wake up thinking about, and for which I have a constant flow of exciting ideas.

But I've decided to open-source and archive the repo and throw away my roadmap.[^throwing-away] I'm "unlaunching" it---declaring it done and putting it out there like a launch, but with the intent to put a firm lid on the project.

At the beginning of August, when I was in absorbed in this project, I realized that I was not in a good place mentally. As I wrote in my journal at that time:

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

* [Karlsson: Almost everyone I’ve met would be well-served thinking more about what to focus on](https://www.henrikkarlsson.xyz/p/multi-armed-bandit)
* [Matuschak: Mental states of deep software development and deep research thinking are mutually exclusive](https://notes.andymatuschak.org/z7RGGgVdDVHXkzJ6BVFKws8)
* [Matuschak: Switching costs are high between software development and research thinking](https://notes.andymatuschak.org/zD2oDSCgLEyM4xDhjRLXtuH)
* [Matuschak: Focused software development work is self-abnegating](https://notes.andymatuschak.org/zPgc12cKuwjrRzEnbr2a8uK)
* [Journal: 2023-09-19](obsidian://open?vault=personal-writing&file=Spiritual%20Notes%2FJournal%2F2023-09-19) — initial insight of a different relationship with writing than with app-building
* [Journal: 2024-08-01](obsidian://open?vault=personal-writing&file=Spiritual%20Notes%2FJournal%2F2024-08-01) — I need to write again
* [Kohn: The Downside of “Grit” (Commentary)](https://www.alfiekohn.org/article/downside-grit/)
* Gretchen Rubin in _Better than Before_ — habits reduce mental load, and bright line rules can
  enforce habits.
* Greg McKeown in _Essentialism_ — I had to choose that which was most essential.
* Luke Burgis in _Wanting_ — My long-term goals with Logwise were highly mimetic. At the heart of it, I wanted to create a widely-used app, because that was what I've seen modeled by people I look up to. That core mimesis was surrounded by derivative goals, like making the app financially viable, but the central focus of the project was not about money; it was about achieving the status of "I've built a successful app." And the reason I sought for that status was because of mimesis. This mimetic desire leeches off of my values-motivated desire to make something that is useful---but I've already done that in Innerhelm. From very early on in that project, my grandfather would reply to my newsletters sharing how he found what I wrote useful. It's easy to discount this because it fails the stereotypically-named ["Mom Test"](https://www.amazon.com/Mom-Test-customers-business-everyone-ebook/dp/B01H4G2J1U), but his gratitude was genuine. That's more than I've ever recieved for Logwise, or anything else "app-ish" that I've built.
* Adam Alter in _Irresistible_: "where substance addictions are nakedly destructive, many behavioral addictions are quietly destructive acts wrapped in cloaks of creation."

Having made that decision, I took several steps to put an end to Logwise without feeling like my work on it over the last six months was completely wasted. Here's what I've done:

* I've downgraded the app's domain to a subdomain of my personal site.[^subdomains]
* I exported my personal data from the app. Since I'm keeping the app itself online, I could theoretically continue using it for my personal logging needs, but it would be very difficult to avoid thinking about ways it could be extended. (As of this writing, my Logwise Todoist project has more than 300 tasks in it.) Instead, I'm going to reimplement Logwise's features in Obsidian, via a couple plugins.
* I've open-sourced and archived the repo. This allows me to preserve the knowledge and ideas that I crystalized in Logwise's code, while [closing that open loop](https://notes.andymatuschak.org/Close_open_loops). I can make short blog posts on this blog about various techniques I used in Logwise, linking to and drawing snippets from the actual code I used. But, because it is archived, I've weakened the temptation to keep working on it. It being archived also sends a clear signal to people who might use it that it
  won't be updated.
* I've written up my reasons for unlaunching on my personal blog in this article. This will act as a public commitment device_[^commitment-device] to keep me from reneging on my decision.
  
I feel simultaneously nervous and reenergized. I'm looking forward to putting more energy into Innerhelm, and not getting nerd-sniped by my own project anymore.

**TODO: make conclusion more betterer**

[^throwing-away]: Ok, that's not fully true. I didn't delete my Todoist project; I only archived it. But I'm intentionally making it hard to pick the project up again.

[^writing-friction]: Admittedly, there's more to this difficulty than just the addictiveness of engineering projects. My brain has been conditioned over the years to treat writing as a high-stress, adrenaline-fueled, deadline-motivated activity. I'm actively reconditioning myself to have a healthier relationship with it, but that is a topic for a different post.

[^subdomains]: See ["Use Subdomains"](https://chriscoyier.net/2023/09/21/use-subdomains/) by Chris Coyier

[^commitment-device]: See [_Indistractible_](https://www.nirandfar.com/indistractable/) by Nir Eyal.
