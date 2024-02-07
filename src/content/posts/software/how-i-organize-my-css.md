---
title: How I Organize My CSS
description: Yet another CSS architecture paradigm. (I know, I know...)
date: 2024-02-09 12:00:00
---

I reorganized my personal site to use the CSS patterns I used for
[Innerhelm](https://innerhelm.com), and thought I would explain them in a post.

I have five CSS "layers." (Note that these are only informal layers---they don't
use
[the new CSS Layers API](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers).^[
But maybe they should be? I haven't dabbled with Layers yet so I'm not too sure
how they work, or if Astro's component scoped styles could be put into one.])
Listed in order of increasing specificity:

1. The theme, as CSS custom properties
2. The base styles---styles that apply to raw elements, e.g. `p` and `h1`.
3. Layout classes, based on [Every Layout](https://every-layout.dev/), prefixed
   with `l-`.
4. Utility classes, prefixed with `u-`. (Technically these are the same
   specificity as the layouts, but they occur later in the source order so they
   take precedence).
5. Component-scoped styles.

I like this architecture a lot, for a few reasons:

* I can immediately tell where a given class is defined
* I can jump to the definition comparatively easily (e.g. to go to
  `utilities.scss` in VS Code it's just `Ctrl+P, "util", Enter`).
* It follows the higher-reach-selectors-should-have-lower-specificity rule (like
  [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
  and [CUBE CSS](https://cube.fyi/) do).
  * This has a side-effect of making it easy to see what's going on via the CSS inspector.
* It's powered by CSS custom properties, which makes it easy to change design
  tokens to tweak the whole site at once.
* It's compositional, while still fully embracing the strengths of
  component-scoped styles. Component-scoped style classes are "first-class citizens"---any class without
  a prefix is a component-scoped class.
  * Leveraging component-scoped styles means it
    [solves all the problems that frameworks like Tailwind claim to solve](https://pdx.su/blog/2023-07-26-tailwind-and-the-death-of-craftsmanship/),
    without the crufty HTML and driving-a-car-from-the-outside vibe. I can use
    the full expressive power of CSS.

I'm intentionally _not_ going to give it a kitschy acronym, because I want to
avoid
[this weird thing that happens](https://codepen.io/chriscoyier/post/a-weird-thing-that-happens).
These patterns are just what works for me.

(On Innerhelm I also use a full [Utopia](https://utopia.fyi/)-powered responsive
space and type system, but I haven't added that here yet. I just have a few
responsive type sizes.)
