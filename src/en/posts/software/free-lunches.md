---
title: Free Lunches in Frontend Dev
description: We can have developer velocity _and_ meet the performance needs of marginal users
draft: true
---

Alex Russell's article
["The Market For Lemons"](https://infrequently.org/2023/02/the-market-for-lemons/)
made quite a stir when he posted it a few months back. If you haven't read it, I
recommend it. There have been some very well-worded responses, like Laurie
Voss's
["The case for frameworks"](https://seldo.com/posts/the_case_for_frameworks);
together they've made for an interesting conversation, which I've learned a lot
from and thought about a lot.

To summarize, Russell's article accuses React, other JS-heavy frontend
frameworks, and their proponents of bogging down the web development industry
with slow page load times and high rates of poor usability and performance.
Voss's article responds to that claim by highlighting the rational reasons
behind the popularity of React.

I like where Voss starts with his article: he compares the current web dev
industry, with React having such a strong presence, to a
[hawk-dove game](https://en.wikipedia.org/wiki/Chicken_(game)):

> The finding [of simulated hawk-dove games] is that you can throw in any number
> of hawks and doves to start with but for a given quantity of resources you
> will always end up at the same mix of hawks and doves, a point of equilibrium
> known as an evolutionarily stable strategy.
>
> All you need to take away from this to understand the argument I'm about to
> make is that: while a world of doves all cooperating with each other would be
> nicer, indeed the best possible world, it is not the world you end up with
> because it is not **stable**. It only takes a single hawk to show up to throw
> it out of whack.
>
> How this translates to the world of software is: it is my assertion that the
> world as it exists is a world in a relatively stable equilibrium. Reality is
> complicated, so there aren't just two teams of hawks and doves, there are tens
> of millions of software developers out there, all working relatively
> independently and in their own best interests with different priorities and
> resources and trade-offs. The result is the world we see, and despite it being
> not the best possible world depending on your own priorities, **the
> equilibrium exists for completely rational reasons**.
>
> So: there is no secret cabal of charismatic influencers destroying what would
> be a perfect world without them. We cannot blame anybody for the state of
> things. We created this world ourselves, collectively. If we want to change
> the status quo, we need to understand the rational forces of self-interest
> that created it.

This is a great point, and one we would do well to remember more often. People
tend to behave in predictable, explainable ways.^[ I'm hesitant to use the word
"rational" because I don't think I can say "people are rational" _and_ reference
Dan Ariely's book _Predictably Irrational_ and still take myself seriously. ]
Understanding people's behavior from a point of "we're all trying the best we
can" is a much healthier way to approach things than pointing fingers at some
specific group as a scapegoat for our general responsibility in these problems.

## Implicit Trade-Offs

Shortly after making this point, though, Voss makes the claim that "most React
proponents will tell you that not every website needs to be a React app." He
also claims that developers "know that they are making ... trade-offs when they
pick React." I believe these claims are true for some React developers, but this
is probably a minority. It seems to me that many developers and firms choose
React simply because it is familiar and popular.^[ See
["The self-fulfilling prophecy of React"](https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react)
by Josh Collinsworth. "React isn’t great at anything except being popular." ]
Most of the trade-offs Voss mentions are then chosen _implicitly_, not
explicitly, because alternatives haven't been sincerely considered.

One point of evidence for these tradeoffs being chosen implicitly is the
comparatively low usage of [Preact](https://preactjs.com/) compared to that of
React. Preact has a React-compatible API---with `preact/compat`, you can replace
React with Preact in an existing React project.^[ See
["Switching to Preact"](https://preactjs.com/guide/v10/switching-to-preact).
Admittedly, in full-stack frameworks like Next.js, this gets significantly
hairier, but [it can still be done](https://joyofcode.xyz/next-bundle-size).
Furthermore, there are still people using React without a meta-framework (even
though
[the docs imply otherwise](https://wasp-lang.dev/blog/2023/03/17/new-react-docs-pretend-spas-dont-exist)).
] If people were carefully considering the trade-offs of different framework
choices, wouldn't a lot of them decide that Preact's much smaller bundle size
(4.2kb minified and gzipped---_one tenth_ of the size of React!^[ From
Bundlephobia: [Preact](https://bundlephobia.com/package/react-dom@18.2.0) vs
[React](https://bundlephobia.com/package/react-dom@18.2.0) ]) and better
performance^[See the [JS Framework Benchmark](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_112.0.5615.49.html)
by Krauest] make it a better choice?

### "React === The Web"

I think this _modus operandi_ of "just use React" exists largely because of bad
framing in education and framework branding.

Many bootcamps and online courses teach React development before teaching core
web development principles (if they teach the core principles at all). They
churn out graduates who can build things with React but would freeze up if you
asked them to make a nontrivial web project without it.

On the framework side, the entire selling point of React meta-frameworks like
Remix and Next.js is that you can use them for everything. Like the educators
mentioned above, the framework authors implicitly frame React as the One True
Way to build for the web. For example,
[Next.js includes a blog as one of it's starter templates](https://vercel.com/templates/next.js/blog-starter-kit).
I am skeptical that there's ever a good reason for a blog to be rendered
client-side using React, regardless of whether it uses SSR. In the case of a
blog especially,
[hydration is pure overhead](https://www.builder.io/blog/hydration-is-pure-overhead).
(Even if your blog needs richer features like commenting and user accounts,
those features can be provided as [islands of interactivity] rather than by
rendering the entire page, most of which is a document, from JS.) The same goes
for
[docs sites](https://vercel.com/templates/next.js/documentation-starter-kit).
But there's an implicit premise in the branding and documentation of frameworks
like Next.js and Remix that you should use them for any kind of project.

Client-heavy React frameworks like Next.js and Remix are hammers---useful,
certainly, (especially for business-to-business, auth-gated SaaS applications)
but abjectly _not_ the right answer for every problem, unless you squint hard
enough that screws, eye-bolts, and your mobile users' big toes all look like
nails. But they have consistently branded themselves as universal solutions, in
a way that, I believe, has mislead many developers, especially ones who don't
take it upon themselves to seriously consider options outside the "React
bubble."

## Unfortunate Side Effects of Sensible Thinking

Now, to be clear, I don't think educators or framework marketers are maliciously
scheming to keep hapless developers in the React bubble. Returning to Voss's
point about the equilibrium existing for rational reasons, educators and
framework authors have a lot of rational reasons to focus on React. The
ecosystem is huge, and the market for React developers is equally massive. But
by not actively pointing developers to other, non-React web dev approaches when
those solutions would be better suited to the task at hand, they've perpetuated
that status quo.

As pointed out by Voss, developers aren't irrational or stupid for using React
either.^[I actually started my web dev journey with React, and I'm grateful for
it. I believe that the component-based thinking I learned from it makes me a
better developer. ] Rather, developers are _efficiently lazy_ for using React,
and laziness is in many respects a highly valuable attribute for developers.
However, in this specific case, our laziness as developers, combined with the
bad framing^[And sometimes
[outright hostility](https://fediverse.zachleat.com/@zachleat/109830047951867907)]
from certain React proponents and educators, has led our industry into a mire.

## Free as in Lunch

The good news about all of this is that there is plenty of room in this
hawks-and-doves game for what psychologist Dan Ariely
calls^[Dan Ariely, [_Predictably Irrational_](https://www.amazon.com/dp/0061854549)]
a "free lunch"---a place of mutual benefit based on a heightened understanding
of why the differing parties behave as they do. From his book _Predictably
Irrational_:

> According to the assumptions of standard economics, all human decisions are
> rational and informed, motivated by an accurate concept of the worth of all
> goods and services and the amount of happiness (utility) all decisions are
> likely to produce. Under this set of assumptions, everyone in the marketplace
> is trying to maximize profit and striving to optimize his experiences. As a
> consequence, economic theory asserts that there are no free lunches—if there
> were any, someone would have already found them and extracted all their value.

Sounds like Voss's description of the web dev industry---a stable equilibrium
driven by rational decisions. Note that in this context, the "utility" includes
both UX and DX (developer experience), and stems from decisions made by
developers, framework authors, firms, etc.

Ariely continues:

> Behavioral economists, on the other hand, believe that people are susceptible
> to irrelevant influences from their immediate environment (which we call
> context effects), irrelevant emotions, shortsightedness, and other forms of
> irrationality....
>
> What good news can accompany this realization? The good news is that these
> mistakes also provide opportunities for improvement. If we all make systematic
> mistakes in our decisions, then why not develop new strategies, tools, and
> methods to help us make better decisions and improve our overall well-being?
>
> That’s exactly the meaning of free lunches from the perspective of behavioral
> economics—the idea that there are tools, methods, and policies that can help
> all of us make better decisions and as a consequence achieve what we desire.

The free lunches, in the web development sense, are situations in which both
users and devs can have a better experience than they do in this "market for
lemons," and the tools and practices that help us create those situations.

I think there are a few things we can do to move towards those free lunches.

As developers:

- We can focus on learning web development
  principles^[See [this tweet from Zach Leatherman](https://www.zachleat.com/twitter/1074776108422307840/)]
  rather than learning an abstraction on top of the web. In
  [Russell's words](https://changelog.com/jsparty/263), "I promise you, there’s
  life after the framework that you love right now."
- We can explore and learn how to use performance-focused frameworks to broaden
  our skills and add tools to our mental toolboxes. Frameworks like
  [SvelteKit](https://kit.svelte.dev/), [Solid](https://www.solidjs.com/),
  [Qwik](https://qwik.builder.io/) /
  [QwikCity](https://qwik.builder.io/docs/qwikcity/), and
  [Preact](https://preactjs.com/) are all becoming increasingly mature and
  robust, and provide a similar DX to that of React-based frameworks, without
  the JS weight.
- We can practice building things _without_ web frameworks. Vanilla web
  technologies are becoming increasingly powerful and are not as unwieldy as you
  might think. [Chris Ferdinandi](https://gomakethings.com) has some great
  material on building with vanilla web tech. I personally love tackling a
  project without a framework when it makes sense to---after doing lots of work
  in framework-based projects, it feels like a breath of fresh
  air.^[I do still use build tools in these projects---most notably [Astro](https://astro.build)
  and [Eleventy](https://11ty.dev).]
- We can use our influential voices as developers to push for the adoption of
  lighter frameworks (which can even happen incrementally in some cases) over
  the JS heavy ones.
- We can choose to value the marginal user, and test what we build on lower-end
  devices and network conditions.
- We can contribute to open-source projects that will help leaner frameworks
  compete with and integrate with the bundle-size giants like React. (In my
  experience, there is a particular need for headless, accessible component
  libraries.)

As educators and framework or library authors:

- We can emphasize the importance of picking a well-suited tool for the job. (I
  say "a well-suited tool" rather than "the best tool" intentionally---there is
  often not a "best" tool for a specific job any more than there is a single
  tool that does all jobs well.)
- We can make our tools and frameworks interoperable, especially with the
  dominant React ecosystem. Preact, as mentioned above, is a good example of
  this.
- We can focus on reducing the "magic" and complexity in our systems to the bare
  minimum. [Eleventy](https://11ty.dev) is an excellent example of this. It does
  one thing well, and relies on plugins and community-built starters to add
  non-core functionality on top of that.
- We can increase awareness of _other_ tools that increase interoperability and
  facilitate picking a well suited tool for the job.

There are a couple frameworks in particular that I think are doing these things
remarkably well: Astro and Qwik.

## Framework Example #1: Astro

[Astro](https://astro.build) is a build tool known for its "islands
architecture" that hydrates individual framework components rather than
hydrating the whole page.

It does a great job of specifying that it _isn't_ the best fit for every
project. From ["Why Astro"](https://docs.astro.build/en/concepts/why-astro/)
(emphasis mine):

> Astro was designed for building content-rich websites. This includes most
> marketing sites, publishing sites, documentation sites, blogs, portfolios, and
> some ecommerce sites.
>
> By contrast, most modern web frameworks are designed for building web
> applications. These frameworks work best for building more complex,
> application-like experiences in the browser: logged-in admin dashboards,
> inboxes, social networks, todo lists, and even native-like applications like
> Figma and Ping.
>
> ...
>
> **If your project falls into the second “application” camp, Astro might not be
> the right choice for your project… and that’s okay!** Check out Next.js for a
> more application-focused alternative to Astro.

(Look at that! They even point people to Next.js for application use cases. But
the Next.js docs don't point you to Astro for content sites, because that would
contradict violate Next.js' implicit "React === the web" premise.)

Astro also does a great job of providing interoperability in a way that is
geared towards its specific use case: You can use Astro's integrations to render
React, Svelte, Vue, Preact, Solid, or Lit components within your site. These
components can be marked as "islands" of interactivity to make them hydrate on
the client, but by default they render only on the server. This allows Astro to
lean in to their 0-JS-by-default strength while still providing support for
developers who are familiar with the dominant React ecosystem.

Personally, I've found working in Astro to be a breath of fresh air. I've
particularly enjoyed working without framework components--being able to
encapsulate style, markup, and logic for a component all in one file but in a
way that still feels "vanilla" is _so_ nice. It feels like I've emerged from
[Plato's cave](https://en.wikipedia.org/wiki/Allegory_of_the_cave) and seen
HTML's ideal form.

## Framework Example #2: Qwik

[Qwik](https://qwik.builder.io/) is a newer JS framework that uses a React-like
syntax, combined with signals like you can find in
[Solid](https://www.solidjs.com/guides/reactivity) and, more recently,
[Preact](https://preactjs.com/guide/v10/signals/) and
[Angular](https://angular.io/guide/signals).

But the seriously awesome part of Qwik is what it calls "resumability." From [the
Qwik docs](https://qwik.builder.io/docs/concepts/resumable/):

> Resumability is about pausing execution in the server and resuming execution
> in the client without having to replay and download all of the application
> logic.
> 
> A good mental model is that Qwik applications at any point in their
> lifecycle can be serialized and moved to a different VM instance (server to
> browser). There, the application simply resumes where the serialization
> stopped. No hydration is required. This is why we say that Qwik applications
> don't hydrate; they resume.

This means that components that only need JS on the server (e.g. a top nav bar
that has no JS-powered interactivity) don't need to run JS on the client at all!
Qwik is able to ship to the browser just the parts that are actually needed
for interactivity. It can even defer those parts individually, e.g. only running
the JS file for a click listener for a button once the button is interacted
with.^[See ["Prefetching"](https://qwik.builder.io/docs/concepts/progressive/) in the Qwik
docs]

These superpowers make it possible to build increasingly large applications
without an ever-increasing bundle size and time-to-interactive---what Qwik calls
["O(1) applications."](https://www.builder.io/blog/our-current-frameworks-are-on-we-need-o1)

Qwik also provides
[a React adapter](https://www.npmjs.com/package/@builder.io/qwik-react) to allow
you to use React components in your Qwik projects, much like Astro does. This
allows Qwik developers to tap into React's ecosystem and could even facilitate
porting large React applications to Qwik.

## Free Lunches Mean A Better Web for All

By learning and teaching more tools than just the hammer of React, we can apply
a well-suited tool to each problem and move so much faster---and make better,
more resilient web experiences. Tools like Astro and Qwik are demonstrating
that we can have developer experience and velocity _and_ meet the performance
needs of marginal users. Users and devs can _both_ be better off if we choose
incremental adoption of complexity instead of out-of-the-gate bloat.

Ultimately, the problem of the "market for lemons" is a behavioral design
problem: how can we leverage the current system, and the motivations of the
various people that comprise it, to unlock greater utility for our users? As
developers especially, we all want to create useful, valuable things for others.
But in this case, the challenge we face in order to do so is not merely
technical. We need to, as Voss puts it "change the game, not just yell at the
players."

---

## Further Reading:

* [Healthcare, Selling Lemons, and the Price of Developer Experience | CSS-Tricks](https://css-tricks.com/healthcare-selling-lemons-and-the-price-of-developer-experience/)
* [Why We're Breaking Up with CSS-in-JS](https://bradfrost.com/blog/link/why-were-breaking-up-with-css-in-js/)
