---
title: Free Lunches in Frontend Dev
description: We can have developer velocity and meet the performance needs of marginal users at the same time
date: 2023-04-06 9:00:00.00
---

Alex Russell's ["The Market For Lemons"](https://infrequently.org/2023/02/the-market-for-lemons/)
has really been making the rounds lately. If you haven't read it, I recommend it.
There have been some very well-worded responses, like Laurie Voss's
["The case for frameworks."](https://seldo.com/posts/the_case_for_frameworks);
together they've made for an interesting conversation, which I've learned a lot from.

I particularly like where Laurie starts: comparing the current web dev industry,
with React having such a strong presence, to a [hawk-dove game](https://en.wikipedia.org/wiki/Chicken_(game)):

> The finding [of simulated hawk-dove games] is that you can throw in
> any number of hawks and doves to start with but for a given
> quantity of resources you will always end up at the same mix of hawks and doves,
> a point of equilibrium known as an
> [evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy).
>
> All you need to take away from this to understand the argument I'm about to make is that:
> while a world of doves all cooperating with each other would be nicer,
> indeed the best possible world,
> it is not the world you end up with because it is not **stable**.
> It only takes a single hawk to show up to throw it out of whack.
>
> How this translates to the world of software is:
> it is my assertion that the world as it exists is a world in a relatively stable equilibrium.
> Reality is complicated, so there aren't just two teams of hawks and doves,
> there are tens of millions of software developers out there,
> all working relatively independently and in their own best interests
> with different priorities and resources and trade-offs.
> The result is the world we see, and despite it being not the best possible world
> depending on your own priorities, **the equilibrium exists for completely rational reasons**.
>
> So: there is no secret cabal of charismatic influencers
> destroying what would be a perfect world without them.
> We cannot blame anybody for the state of things. We created this world ourselves, collectively.
> If we want to change the status quo, we need to understand the rational
> forces of self-interest that created it.
> We have to change the game, not just yell at the players.

I fully agree with this! People tend to behave in predictable, explainable ways.^[I'm hesitant to use the word "rational" because I don't think I can say "people are rational" _and_ reference Dan Ariely's book _Predictably Irrational_ in the same post and still take myself seriously.] Understanding people's behavior from a point of "we're all trying the best we can" is a much healthier way to approach things than pointing fingers at some specific group as a scapegoat for our general responsibility in these problems.

Some of his other claims, though, had me scratching my head. For example, he claims that "most React proponents will tell you that not every website needs to be a React app," but in my experience that's precisely where the problem lies. The _entire selling point_ of React meta-frameworks like Remix and NextJS is that you can use them for everything. For example, NextJS [includes a blog as one of it's starter templates](https://vercel.com/templates/next.js/blog-starter-kit). There is no good reason for a blog to be rendered client-side using React, regardless of whether it uses SSR. In the case of a blog especially, [hydration is pure overhead](https://www.builder.io/blog/hydration-is-pure-overhead). The same goes for [docs sites](https://vercel.com/templates/next.js/documentation-starter-kit). NextJS and Remix are hammers--useful, certainly, but abjectly _not_ the right answer for every problem, unless you squint hard enough that screws, eye-bolts, wing-nuts, and your mobile users' big toes all look like nails.

## Directed Laziness

At the end of the day, I agree with Laurie: developers aren't stupid for using React. Rather, developers are _efficiently lazy_ for using React, and laziness is in many respects a highly valuable attribute for developers. (Heck, I started my web dev journey with React. I believe that the component-based thinking I learned from it makes me a better developer.) However, in this specific case, our laziness as developers, combined with the propaganda--and sometimes [outright hostility](https://fediverse.zachleat.com/@zachleat/109830047951867907)--from certain React proponents, has led our industry into a mire.

Time to vote with our feet and step out of the mud together:

- Frameworks like SvelteKit, Solid, Qwik, Preact, and Astro are all becoming increasingly mature and robust, and solve many of the same problems as React, without the JS weight. We can use our influential voices as developers to push for the adoption of those frameworks (which can even happen incrementally in some cases) over the JS heavy ones.
- We can choose to value the marginal user, and test what we build on lower-end devices and network conditions.
- We can focus on [learning web development principles](https://www.zachleat.com/twitter/1074776108422307840/) rather than learning an abstraction on top of the web. In [Alex's words](https://changelog.com/jsparty/263), "I promise you, there’s life after the framework that you love right now."
- We can contribute to open-source projects that will help leaner frameworks compete with the bundle-size giants like React. (In my experience, there is a particular need for headless and accessible component libraries.)

## Free as in Lunch

The really good news about all of this is that there is plenty of room in this hawks-and-doves game for what psychologist Dan Ariely calls^[Dan Ariely, [_Predictably Irrational_](https://www.amazon.com/dp/0061854549)] a "free lunch" -- a place of mutual benefit. A situation in which both the hawks and doves can prosper beyond where they currently are now. Tools like Astro are demonstrating that we can have developer velocity _and_ meet the performance needs of marginal users. Users and devs can _both_ be better off by favoring the incremental adoption of complexity over out-of-the-gate bloat.

We can even invite those who make a living pushing React (and other JS hogs, though they're not nearly as prevalent) as the One True Way to adjust their perspective and come with us. Who knows? Maybe they'll come 'round.

---

## Further Reading:

* [Healthcare, Selling Lemons, and the Price of Developer Experience | CSS-Tricks](https://css-tricks.com/healthcare-selling-lemons-and-the-price-of-developer-experience/)
* [Why We're Breaking Up with CSS-in-JS](https://bradfrost.com/blog/link/why-were-breaking-up-with-css-in-js/)