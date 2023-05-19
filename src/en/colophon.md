---
title: Colophon
layout: page
description: About this site
eleventyExcludeFromCollections: true
---

This website is built using [Eleventy](https://11ty.dev) and hosted on
[Netlify](https://netlify.com). It uses no JavaScript, and currently
[gets a perfect score on pagespeed.web.dev](https://pagespeed.web.dev/analysis/http-tylermercer-net/qf9qmvfmyi?form_factor=mobile).
(Hopefully I can keep it that way as I add features!)

Some other resources I used as part of this site:

* [Sass](https://sass-lang.com/) for styling, with a setup inspired by
  [Stephanie Eckle's 11ty-sass-skeleton template](https://github.com/5t3ph/11ty-sass-skeleton).
* [Fontsource](https://fontsource.org) for self-hosting the two webfonts:
  * [Figtree](https://www.erikdkennedy.com/projects/figtree.html), designed by
    by [Erik Kennedy](https://www.erikdkennedy.com/)
  * [Faustina](https://www.omnibus-type.com/fonts/faustina/), designed by
    Alfonso Garcia and [Omnibus-Type](https://www.omnibus-type.com/)
* [Satori](https://github.com/vercel/satori) for generating OG images from HTML
  (via
  [this excellent 11ty plugin](https://www.npmjs.com/package/eleventy-plugin-og-image))

I deploy the site via a GitHub Actions workflow that builds the site and deploys
to Netlify. Last run: {{ metadata.builtAt }}