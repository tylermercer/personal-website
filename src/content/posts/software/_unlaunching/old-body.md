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

## A plan

Having made that decision, I took several steps to put an end to Logwise without feeling like my work on it over the last six months was completely wasted. Here's what I've done:

* I've downgraded the app's domain to a subdomain of my personal site.[^subdomains]
* I exported my personal data from the app. Since I'm keeping the app itself online, I could theoretically continue using it for my personal logging needs, but it would be very difficult to avoid thinking about ways it could be extended. (As of this writing, my Logwise Todoist project has more than 300 tasks in it.) Instead, I'm going to reimplement Logwise's features in Obsidian, via a couple plugins.
* I've open-sourced and archived the repo. This allows me to preserve the knowledge and ideas that I crystalized in Logwise's code, while [closing that open loop](https://notes.andymatuschak.org/Close_open_loops). I can make short blog posts on this blog about various techniques I used in Logwise, linking to and drawing snippets from the actual code I used. But, because it is archived, I've weakened the temptation to keep working on it. It being archived also sends a clear signal to people who might use it that it won't be updated.
* I've written up my reasons for unlaunching on my personal blog, in this blog post you're reading. In addition to facilitating the above reflection, this acts as a public commitment device_[^commitment-device] to keep me from reneging on my decision.

[^writing-friction]: Admittedly, there's more to this difficulty than just the addictiveness of engineering projects. My brain has been conditioned over the years to treat writing as a high-stress, adrenaline-fueled, deadline-motivated activity. I'm actively reconditioning myself to have a healthier relationship with it, but that is a topic for a different post.

[^subdomains]: See ["Domain Sins of My Youth"](https://blog.jim-nielsen.com/2023/domain-sins-of-my-youth/) by Jim Nielsen and ["Use Subdomains"](https://chriscoyier.net/2023/09/21/use-subdomains/) by Chris Coyier

[^commitment-device]: See [_Indistractible_](https://www.nirandfar.com/indistractable/) by Nir Eyal.
