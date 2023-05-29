---
title: Colophon
layout: page
description: About this site
eleventyExcludeFromCollections: true
---

This website is built using [Eleventy](https://11ty.dev) and hosted on
[Cloudflare Pages](https://pages.cloudflare.com/).

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
* [Cloudflare Analytics](https://developers.cloudflare.com/analytics/web-analytics/)
  for simple, privacy-preserving analytics.

I deploy the site via a GitHub Actions workflow that builds the site daily and
deploys it to Cloudflare.

_Last deployed on {{ metadata.builtAt }}._
