---
title: Free Lunches in Frontend Dev
description: We can have developer velocity _and_ meet the performance needs of marginal users
date: 2023-04-06 9:00:00.00
---

Alex Russell's article ["The Market For Lemons"](https://infrequently.org/2023/02/the-market-for-lemons/)
has been making the rounds lately. If you haven't read it, I recommend it.
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

This is a great point, and one we would do well to remember more often.
People tend to behave in predictable, explainable ways.^[
    I'm hesitant to use the word "rational" because I don't think I
    can say "people are rational" _and_ reference Dan Ariely's book
    _Predictably Irrational_ in the same post and still take myself
    seriously.
    ]
Understanding people's behavior from a point of "we're all trying the best we can"
is a much healthier way to approach things than pointing fingers at some specific group
as a scapegoat for our general responsibility in these problems.

## Implicit Trade-Offs

Shortly after making this point, though, he makes the claim that
"most React proponents will tell you that not every website needs to be a React app."
He also claims that developers "know that they are making ... trade-offs when they pick React."
I believe these claims are true for some React developers, but this is probably a minority.
It seems to me that many developers and firms choose React simply because it is familiar and popular.^[
    See ["The self-fulfilling prophecy of React"](https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react)
    by Josh Collinsworth. "React isn’t great at anything except being popular."
]
Most of the trade-offs Laurie mentions are then chosen _implicitly_, not explicitly,
because alternatives haven't been sincerely considered.

One point of evidence for these tradeoffs being chosen implicitly
is the comparatively low usage of Preact vs React.
Preact has a React-compatible API---with `preact/compat`, you can replace React with
Preact in an existing React project.^[
    See ["Switching to Preact"](https://preactjs.com/guide/v10/switching-to-preact).
    Admittedly, in full-stack frameworks like Next.js, this gets significantly hairier,
    but [it can still be done](https://joyofcode.xyz/next-bundle-size).
    Furthermore, there are still people using React without a meta-framework
    (even though [the docs imply otherwise](https://wasp-lang.dev/blog/2023/03/17/new-react-docs-pretend-spas-dont-exist)).
    ]
If people were carefully considering the trade-offs of different framework choices,
wouldn't a lot of them decide that Preact's much smaller bundle size (4.2kb
minified and gzipped---_one tenth_ of the size of React!^[
    From Bundlephobia: [Preact](https://bundlephobia.com/package/react-dom@18.2.0)
    vs [React](https://bundlephobia.com/package/react-dom@18.2.0)
])
and better performance^[See the [JS Framework Benchmark](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_112.0.5615.49.html) by Krauest] make it a better choice?

Rather than being explicitly chosen, I think this _modus operandi_ of
"just use React" exists largely because of
bad framing in two areas: education and framework branding.

### "React === The Web" in Education

Many bootcamps teach React development before teaching core web development principles
(if they teach the core principles at all).
They churn out graduates who can build things with React
but would freeze up if you handed them an HTML file in a text editor
and asked them to make a simple project using plain JavaScript.

Many online instructors also perpetuate this thinking.
**TODO: finish this part**

### "React === The Web" in Framework Branding

The entire selling point of React meta-frameworks like Remix and Next.js
is that you can use them for everything. 
Like the educators mentioned above, the framework authors implicitly frame
React as the One True Way to build for the web.
For example, [Next.js includes a blog as one of it's starter templates](https://vercel.com/templates/next.js/blog-starter-kit).
I am skeptical that there's ever a good reason for a blog to be
rendered client-side using React, regardless of whether it uses SSR.
In the case of a blog especially, [hydration is pure overhead](https://www.builder.io/blog/hydration-is-pure-overhead).
The same goes for [docs sites](https://vercel.com/templates/next.js/documentation-starter-kit).
But there's an implicit premise in the branding and documentation of frameworks like Next.js and Remix that you should use them for any kind of project.

As an example of _avoiding_ an implicit premise like this, [Astro](https://astro.build) does a
great job of specifying that it _isn't_ the best fit for every project.
From ["Why Astro"](https://docs.astro.build/en/concepts/why-astro/) (emphasis mine):

> Astro was designed for building content-rich websites.
> This includes most marketing sites, publishing sites, documentation sites,
> blogs, portfolios, and some ecommerce sites.
> 
> By contrast, most modern web frameworks are designed for building web applications.
> These frameworks work best for building more complex, application-like experiences
> in the browser: logged-in admin dashboards, inboxes, social networks, todo lists,
> and even native-like applications like Figma and Ping.
>
> ...
> 
> **If your project falls into the second “application” camp,**
> **Astro might not be the right choice for your project… and that’s okay!**
> Check out Next.js for a more application-focused alternative to Astro.

(Look at that! They even point people to Next.js for application use cases.
But you won't see the Next.js docs pointing you to Astro for content
sites---that would violate Next.js' implicit "React === the web" premise.)

Frameworks like Next.js and Remix are hammers---useful, certainly,
(especially for business-to-business, auth-gated SaaS applications)
but abjectly _not_ the right answer for every problem, unless you squint
hard enough that screws, eye-bolts, wing-nuts, and your mobile users'
big toes all look like nails. But they have consistently branded themselves as
universal solutions, in a way that, I believe, has mislead many developers,
especially ones who don't take it upon themselves to seriously consider options
outside the "React bubble."

## Unfortunate Side Effects of Sensible Thinking

Now, to be clear, I don't think educators or framework authors or marketers are
maliciously scheming to keep hapless developers in the React bubble.
Returning to Laurie's point about the equilibrium existing for rational reasons,
educators and framework authors have a lot of rational reasons to focus on React.
The ecosystem is huge, and the market for React developers is equally massive.
But by not actively pointing developers to other, non-React web dev approaches when those
solutions would be better suited to the task at hand, they've perpetuated that status quo.

## Directed Laziness

At the end of the day, I agree with Laurie:
developers aren't stupid for using React.
Rather, developers are _efficiently lazy_ for using React, and laziness is in many
respects a highly valuable attribute for developers.
(Heck, I started my web dev journey with React.
I believe that the component-based thinking I learned from it makes me a better developer.)
However, in this specific case, our laziness as developers, combined with the
propaganda---and sometimes
[outright hostility](https://fediverse.zachleat.com/@zachleat/109830047951867907)---from
certain React proponents and educators, has led our industry into a mire.

Time to vote with our feet and step out of the mud together:

- Frameworks like SvelteKit, Solid, Qwik, Preact, and Astro are all becoming
  increasingly mature and robust, and solve many of the same problems as React,
  without the JS weight.
  We can use our influential voices as developers to push for the adoption of those frameworks
  (which can even happen incrementally in some cases) over the JS heavy ones.
- We can choose to value the marginal user, and test what we build on lower-end
  devices and network conditions.
- We can focus on [learning web development principles](https://www.zachleat.com/twitter/1074776108422307840/)
  rather than learning an abstraction on top of the web.
  In [Alex's words](https://changelog.com/jsparty/263),
  "I promise you, there’s life after the framework that you love right now."
- We can contribute to open-source projects that will help leaner frameworks compete
  with the bundle-size giants like React.
  (In my experience, there is a particular need for headless, accessible component libraries.)

## Free as in Lunch

The good news about all of this is that there is plenty of room in this hawks-and-doves
game for what psychologist Dan Ariely calls^[Dan Ariely, [_Predictably Irrational_](https://www.amazon.com/dp/0061854549)]
a "free lunch"---a place of mutual benefit based on a heightened understanding of
why the differing parties behave as they do. A situation in which both the hawks
and doves can prosper beyond where they currently are now.
By learning more tools than just the hammer of React, we can apply the best
tool to each problem and move so much faster---and make better,
more resilient products to boot.
Tools like Astro, for example, are demonstrating that we can have developer
experience and velocity _and_ meet the performance needs of marginal users.
Users and devs can _both_ be better off if we choose incremental adoption of complexity
instead of out-of-the-gate bloat.

We can even invite those who make a living pushing React as the One True Way to adjust their perspective and come with us. Who knows? Maybe they'll come 'round.

---

## Further Reading:

* [Healthcare, Selling Lemons, and the Price of Developer Experience | CSS-Tricks](https://css-tricks.com/healthcare-selling-lemons-and-the-price-of-developer-experience/)
* [Why We're Breaking Up with CSS-in-JS](https://bradfrost.com/blog/link/why-were-breaking-up-with-css-in-js/)