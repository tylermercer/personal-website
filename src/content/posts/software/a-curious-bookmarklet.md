---
title: A Curious Bookmarklet
description: A bookmarkable snippet of code for curious nerds like me
---

**_(Big circus voice)_** Do you ever find yourself wanting to link to a specific
section on a webpage? ("Umm... maybe once?" - you, probably) Do you wish you
could, with just one click, see which elements on a page have `id`s? ("... no?")
Well _have I got a script for you!_

Ok, bad jokes aside, I'm a weirdo who likes to link to specific parts of a page.
(No, Google Chrome, I don't mean via
[Text Fragments](https://web.dev/articles/text-fragments)---I mean the old way,
that actually required web devs to care about URL design and doesn't
[expose a privacy risk](https://github.com/WICG/scroll-to-text-fragment/issues/76).)
I've actually popped open the browser DevTools on more than one occasion to see if
a heading in an article had an ID that I could link to.

Today I finally snapped, and made it easier for myself to extract these IDs and
their links, via a bookmarklet! Here's the script:

```js
navigator.clipboard.writeText(
    Array.from(document.querySelectorAll('[id]'))
    .map(el => window.location.toString().split('#')[0] + '#' + el.id)
    .reduce((acc, cur) => `${acc}\n${cur}`))
```

**TODO: finish post**
