---
title: Links Should Be Self-Explanatory
description: A simple accessibility tip for writing content on the web
date: 2023-04-22 19:00:00.00
---
An interesting tip about links on the web from
[this article about accessibility from design firm Varvet](https://www.varvet.com/blog/how-to-annoy-all-moose-a-little-less-by-building-accessible-websites/):

> Links should be self explanatory. Using "Click here" or "Read more" as link
> text makes the destination a mystery if you’re navigating a page by jumping
> through its links, which is often what screen reader users do. Ambiguous links
> is the third most problematic item on the web (after CAPTCHAs and Flash)
> according to a WebAIM Screen Reader User Survey.

Admittedly, the article is a bit dated—I'm skeptical that Flash is still a top
accessibility concern on the web—but, as far as I can tell, the behavior of
screenreaders has not changed.

In cases where "Read more" really is preferable, you can use `aria-labelledby`
to point the link to some other element (like a card heading) that contains a
better description of what the link leads to. (But only do this when necessary!
Remember,
[no ARIA is better than bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#noariaisbetterthanbadaria).)

Descriptive link text is also
[good for SEO, according to BloggingX](https://bloggingx.com/outbound-links/)
(at least when it comes to outbound links).
