---
title: GUID Golf
description: A mini adventure in minified code
date: 2023-06-02 21:00:00.00
---
A few months back I was digging through the minified source of a webpage, and I
came across an interesting way to create a GUID:[^unsafe-random]

```javascript
var b = (a) => a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)
```

I was really surprised at how it was minified---seemed like a really clever
minifier if it was able to rewrite a simple callback function into a recursion
and a ternary operator just to shave off a few characters.

I figured the part with the numbers added together was probably not that
different than the unminified version, and was able to find something similar in
[this article about GUID generation](https://www.moreonfew.com/how-to-generate-uuid-in-javascript/),
which contains a code comment mentioning
[this Stack Overflow answer](https://stackoverflow.com/a/2117523). The question
for that answer has [another answer](https://stackoverflow.com/a/7061193) with
the code I was looking for, and that answer cited
[this GitHub Gist](https://gist.github.com/982883). It had to laugh when I saw
that it wasn’t minified---it was golfed. "Clever minifier" indeed---a clever
_human_ minifier.

[^unsafe-random]: I recognize that this isn’t a
"proper" GUID because it relies on `Math.random()`. As
[Stack Overflow user broofa puts it](https://stackoverflow.com/a/2117523),
"solutions based on `Math.random()` do not provide good uniqueness guarantees."
But the website in question didn’t need very good uniqueness guarantees for what
it was doing.