---
title: Unlaunching
description: Killing a project that I absolutely love
#date: 2024-10-03 9:03:00.00
---

I spent the last six months building a web application called
[Logwise](https://logwise.tylermercer.net). It's an app for logging
things---sleep quality, focus levels, research insights, health symptoms, or
anything else you'd like to monitor over time. It works offline (thanks to
[Dexie](https://dexie.org/) and [Dexie Cloud](https://dexie.org/cloud/)) and
allows you to change the schema of your logs over time without data loss (thanks
to
[persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure)).

It's been a compelling project for me---the kind that I wake up thinking about,
and for which I have a constant flow of exciting ideas.

But I've decided to open-source and archive the repo and throw away my
roadmap.[^throwing-away] I'm "unlaunching" it.

It's something that I've been debating doing for a couple weeks now. At the
beginning of August, when I was in mentally waist-deep in this project.

When I first picked up Innerhelm again, I made visible progress quickly by
writing down my thoughts as atomic evergreen notes in an Obsidian vault. This
was energizing and fruitful---the more I wrote down, the more thoughts I had and
the more resources I added to my queue. Writing atoms felt a lot easier than
writing weekly newsletters back in the first few months of the year had been. I
felt creative and insightful and mentally engaged with life as a whole.

That lasted about a week and a half. Beginning around September 10, I slowly
drifted back into engineering-brain. I think there were a few reasons for this:

* Logwise was still something I wanted to make progress on, in particular
  because I was still using it (somewhat---but noticeably less than when I was
  working on it consistently) and thus was still seeing ways I could improve it.
  I also kept seeing tools and libraries (e.g. SimpleWebAuthn) that could help
  me with things I had on Logwise's roadmap. Each new thing I came across was a
  honeypot trap for my Logwise-focused engineering brain.
* Isabella experienced a major sleep regression around this time. This impacted
  my sleep as well, hindering my cognition and creativity. It also directly
  impacted the time I could put into writing, since it seemed better for my
  well-being overall to sleep in when I could instead of waking up early to
  write.
* Work was profoundly unfulfilling at this point, and I often ended the workday
  with an itch to write code that I felt good about, in a project where I felt a
  high degree of autonomy.

I picked up Logwise again and made a few changes. I was able to maintain some of
my Innerhelm writing (specifically, my daily notes practice where I capture new
ideas), but writing new atoms required a lot more cognitive capacity and
presence than I was giving to it. Losing momentum on that habit was also a
discouragement in itself, forming a vicious cycle.

After another week, I had all but stopped writing entirely.... again.

I began to wonder if switching back and forth between Innerhelm and Logwise was
not something I could do as freely as I had hoped when I initially decided to
pick up Innerhelm again. My brain seemed to have an addiction-like,
hyperfocus-heavy relationship to my engineering projects specifically, which
made switching *to* them easy but switching *away* from them
hard.[^writing-friction] I also recognized that, in general, when I'm in
engineering hyperfocus mode, my side project thinking bleeds heavily into the
rest of my life. My mental focus narrows, mental presence in other domains (e.g.
my relationships with Evelyn and Isabella) gets much harder, and I feel less
emotionally healthy overall.

But I resisted the idea of shuttering Logwise completely. It was still a viable
product idea, even if just for me and (hypothetically) others for whom it could
be a good fit. I fell prey to the sunk cost fallacy: I had spent more than six
months working on it---I couldn't just throw all that work away.

Over the last couple days, I've reconsidered that assessment. I've been thinking
about how I can put an end to Logwise without feeling like the last six months
were completely wasted. Here's my plan:

* I've downgraded the domain to a subdomain of my personal site.
* I exported my data as a JSON file. Since I'm keeping the app itself online I
  could technically keep using it for my personal logging needs, but it would be
  very difficult to avoid thinking about ways it could be extended. (As of this
  writing, my Logwise Todoist project has more than 300 tasks in it.) Instead,
  I'm going to reimplement Logwise's features in Obsidian, via a couple plugins
  (Dataview and a plugin that lets you set specific docs to open in preview mode
  by default).
* I've open-sourced and archived the repo. This allows me to preserve the
  knowledge and ideas that I crystalized in Logwise's code, while
  [closing that open loop](https://notes.andymatuschak.org/Close_open_loops). I
  can make short blog posts on this blog about various techniques I used in
  Logwise, linking to and drawing snippets from the actual code I used. But,
  because it is archived, I've weakened the temptation to keep working on it. It
  being archived also sends a clear signal to people who might use it that it
  won't be updated.
* I'm going to write up my reasons for unlaunching on my personal blog. This
  will act as a commitment device to keep me from reneging on my decision.
  Interestingly, it could also be a potential funnel for new Innerhelm
  subscribers, since this decision is an example of Innerhelm's concept of
  higher order agency.
  
Having decided that, I feel simultaneously nervous and reenergized. I'm looking
forward to putting more energy into Innerhelm, and not getting nerd-sniped by my
own project anymore.

[^throwing-away]: Ok, that's not fully true; I just archived the project in
Todoist. But I'm intentionally making it hard to pick the project up again.

[^writing-friction]: Admittedly, there's more to this difficulty than just the
addictiveness of engineering projects. My brain has been conditioned over the
years to treat writing as a high-stress, adrenaline-fueled, deadline-motivated
activity. I'm working on reconditioning myself to have a healthier relationship
with it, but that is a topic for a different post.
