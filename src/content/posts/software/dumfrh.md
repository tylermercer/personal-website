---
title: DUMFRH
description: The yin to YAGNI’s yang
date: 2023-10-11 12:00:00.00
---

Software development is
[all about trade-offs](https://www.forbes.com/sites/forbestechcouncil/2020/12/16/trade-offs-in-software-engineering/).
Every choice of technology, every architecture, and every implementation comes
with a downside. Decisions must be made by carefully weighing these tradeoffs.
There are no silver bullets.[^tradeoffs]

The age-old principle of YAGNI is no-different. YAGNI—which stands for "you
ain’t gonna need it"—is a rule of thumb for avoiding wasting time on
speculative features that you think you might need someday. There are a lot of
good reasons to apply this heuristic. As
[Martin Fowler points out](https://www.martinfowler.com/bliki/Yagni.html), any
time spent building out extra features instead of shipping the functionality you
first set out to build is time that your users aren’t benefiting from that
functionality. This is, arguably, the entire point of choosing agile over
waterfall development. You ship quickly and often, get feedback quickly and
often, and iterate on that feedback.

But, as Josh Morony describes in
["Why does the average app kind of suck?"](https://www.youtube.com/watch?v=Mfyh2WmNfr0),
an overemphasis on simple and direct solutions to the immediate problem at hand
can lead to code that is difficult to refactor and maintain. An overzealous
application of YAGNI can lead you to write "just get it working" solutions.
This leads me to the point of this article:

**Don’t unnecessarily make future requirements harder.**

DUMFRH. That’s YAGNI’s foil.

Now, before you drive me out of town with pitchforks and torches for criticizing
the time-old doctrine of YAGNI, hear me out—DUMFRH isn’t the _opposite_ of
YAGNI. It’s more like the proton to YAGNI’s electron. Both should be kept in
mind when you’re building new code.

YAGNI’s intent is to prevent wasted work on future features, which may or may
not actually be needed. DUMFRH’s intent is to keep you _mindful_ of potential
future needs, and to structure what you are _currently_ building in a way that
won’t make those potential future needs harder to meet. They’re like the two
ends of a tightrope walker’s pole—the weight of each end is balanced by the
other. If you cut off one end of the pole, your high-strung funambulist is
likely to be quite upset.

Fowler hints at this idea in his aforementioned article about YAGNI, and provides
a good strategy for finding a way to satisfy both rules of thumb:

> One approach I use when mentoring developers in this situation is to ask them
> to imagine the refactoring they would have to do later to introduce the
> capability when it’s needed. Often that thought experiment is enough to
> convince them that it won’t be significantly more expensive to add it later.
> Another result from such an imagining is to _add something that’s easy to do
> now, adds minimal complexity, yet significantly reduces the later cost_.

That italicized bit? That’s DUMFRH.

As a simple example, the other day I created a simple `ITimer` interface that
wrapped C#'s native
[System.Threading.Timer](https://learn.microsoft.com/en-us/dotnet/api/system.threading.timer?view=net-7.0)
class so that I could easily mock it in tests. (This was in a project that was
unfortunately not running .NET 8, which provides a
[time abstraction](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8#time-abstraction)
that can be mocked.) The logic I was using it for did not make use of the
Timer’s `state` parameter, so an overzealous application of YAGNI would have
meant I would omit that parameter since I don’t need it right now and am likely
to not need it in the future. Considering it through a DUMFRH lens led me to add
that parameter to my interface to support that future potential usage, since it
added negligible complexity to the code I was writing. However, if I had gone
out of my way to implement every single method or operation supported by C#'s
Timer on my `ITimer` interface, I would have been violating the YAGNI principle.

Put another way, YAGNI tends to constrain _how much_ you build, whereas DUMFRH
constrains _how_ you build it.

When there’s a cheap way to make future requirements easier ("cheap" meaning
"quick to implement and introducing no additional future maintenance cost"), you
should probably do it. DUMFRH.[^name]

[^tradeoffs]: That’s not to say there aren’t obviously better
choices in certain situations. Building this site in Astro instead of Blazor,
for example, is obviously better when you consider its content-heavy nature and
my goal of avoiding unnecessary bloat.

[^name]: Yes, it is phonetically a garbage acronym, but
is "YAGNI" really that much better? 😆