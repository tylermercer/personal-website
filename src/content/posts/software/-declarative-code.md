---
title: What is Declarative Code?
description: A succinct explanation of a useful concept
# date: 2023-08-07 12:00:00.00
---

If you spend any amount of time writing web UI's, you are likely to have come across code that is described as _declarative_ or _imperative_, usually with declarative code being framed as a good thing and imperative code as a bad thing.

The difference between these two forms of code is often explained as "what" versus "how": _declarative_ code declares _what_ a thing is, whereas _imperative_ code is _how_ a thing is done.

But that's still pretty nebulous, and not very actionable. A much better definition is given by Josh Morony in his excellent video ["A visual guide to why declarative code is better"](https://www.youtube.com/watch?v=ZnaThaXb7JM):

> Declarative code [is code] where the definition of a thing and how it can change over time is contained entirely within the declaration of that thing.

He gives examples of what this looks like and a great explanation of why this is better in practice in the video; I recommend watching it. But, for completeness, here's a simple example:

```js
```

## Component frameworks make UI declarative

As an aside, I believe _making UI declarative_ is the primary benefit of basically all front-end JavaScript frameworks. In my experience, advocates for "vanilla JS" approaches to web application development tend to overlook this fact. As theoretically admirable as [vanilla JS](https://gomakethings.com/), [stable-DOM](https://calendar.perfplanet.com/2022/an-html-first-mental-model/) application code is, it's imperative, because it's built using imperative APIs.[^byof] This means it quickly gets hard to reason about on large projects. This difficulty is why most software engineers reach for a framework when building web applications, especially on teams---few teams want to manage the headache of a mostly-imperative web UI codebase. (Wrapping your head around a large codebase as a new hire is hard enough with a declarative framework; it would be substantially harder with an imperative vanilla application.)

That said, there is some interesting work being done to bring declarativeness over to vanilla JavaScript, such as the in-progress [JavaScript Signals proposal](https://github.com/tc39/proposal-signals). But those efforts haven't really landed yet, and they don't provide ways to bind their declarative state primitives to HTML.

[^byof]: Either that, or you've successfully built your own framework that makes those imperative APIs declarative.
