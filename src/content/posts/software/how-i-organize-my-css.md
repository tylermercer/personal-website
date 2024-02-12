---
title: How I Organize My CSS
description: Yet another CSS architecture paradigm. (I know, I know...)
date: 2024-02-09 12:00:00
---

As I was building out [Innerhelm](https://innerhelm.com), I made some CSS
organization decisions that, so far, I'm quite happy with. I recently
reorganized my personal site's styles to follow the same pattern. I thought I
would explain it and its rationale in a post.

I have five CSS "layers."^[These are only conceptual layers---they don't use
[the new CSS Layers API](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers).
Maybe they should? I haven't dabbled with Layers yet so I'm not too sure how
they work, or if Astro's component scoped styles could be put into one.] Listed
in order of increasing specificity:

1. The theme, as CSS custom properties applied to the `:root`
2. The base styles---styles that apply to raw elements, e.g. `p` and `h1`.
3. Layout classes, based on [Every Layout](https://every-layout.dev/), prefixed
   with `l-`.
4. Utility classes, prefixed with `u-`.^[Technically these are the same
   specificity as the layouts, but I import their source file after importing
   the layout file, so that they occur later in the source order and thus take
   precedence]
5. Component-scoped styles
   ([via Astro](https://docs.astro.build/en/guides/styling/#scoped-styles)),
   with attribute-based scoping (which increases their specificity above the
   other layers).

Each of the first four layers has its own SCSS source file.

For an example of how this looks in practice, check out [the home page's source Astro file](https://github.com/tylermercer/personal-website/blob/b9477ffc2621c5999002fb840166263c097d764e/src/pages/index.astro).

I like this organization a lot, for a few reasons:

1. **I can immediately tell where a given class is defined.** It has a prefix?
   It's a layout or utility, depending on the prefix. It doesn't? It's a
   component scoped style and I just need to scroll down.

2. **I can easily jump to the relevant source files.** For example, to go to the
   source file for `u-pattern` in VS Code, I just do `Ctrl+P, "util", Enter`.

3. **Selectors with higher reach have lower specificity.** This concept was
   formalized by Harry Roberts as
   [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/),
   and also appears in the [CUBE CSS](https://cube.fyi/) methodology I used
   previously. This makes specificity easy to manage and avoids specificity
   fights or the need for overrides like `!important`. Also, following this rule
   has a side-effect of making it easy to inspect and tweak things via the CSS
   inspector in my browser's Dev Tools.

4. **It's powered by CSS custom properties**, which makes it easy to change
   design tokens to tweak the whole site at once.

5. **It's compositional, while still fully embracing the strengths of
   component-scoped styles.** Component-scoped style classes are "first-class
   citizens"---any class without a prefix is a component-scoped class.

   Using component-scoped styles
   [solves all the problems that frameworks like Tailwind claim to solve](https://pdx.su/blog/2023-07-26-tailwind-and-the-death-of-craftsmanship/),
   without the crufty HTML and driving-a-car-from-the-outside vibe. I can use
   the full expressive power of CSS, embracing the cascade instead of treating
   it like a quirk to be patched over.

6. Because every class that's used across multiple files has a prefix, **it's
   easy to find the usages of that class**. I can find all usages of `u-pattern`
   easier than I could find usages of `pattern`---the latter would have many
   false-positive search results in my codebase.

   (I could possibly use an extension like
   [CSS Navigation](https://github.com/pucelle/vscode-css-navigation/) or
   [CSS Peek](https://github.com/pranaygp/vscode-css-peek) to eliminate the
   false positives, but, from my understanding, those would fail to find usages
   that don't occur directly in HTML, such as a class that is dynamically chosen
   in
   [the component script of an Astro component](https://docs.astro.build/en/basics/astro-components/#the-component-script).)

I know what you're thinking: **_"But does it scale?"_**

Good question. I don't know yet. Scanning over Chris Coyier's
[Scalable CSS](https://chriscoyier.net/2023/01/17/scalable-css/) scorecard, it
seems like it _would_ meet those requirements, but given that I've only used it
on these two comparatively-small sites so far, I'm not sure. I'll update this
post if my thoughts on its scalability change over time.

Also, before anyone asks, I'm intentionally _not_ going to give this
organization an acronym, because I want to avoid
[this thing that happens](https://codepen.io/chriscoyier/post/a-weird-thing-that-happens). These
patterns are just what works for
me.^[On Innerhelm I also use a full [Utopia](https://utopia.fyi/)-powered
responsive space and type system, but I haven't added that here yet. I just have
a few responsive type sizes.]
