---
title: Using Partytown to run Cloudflare Analytics in a Web Worker
description: Boost your blog's Pagespeed score with this one weird trick
draft: true
---
Today [my brother](https://danmercer.net) shared
[this article](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)
about Partytown's clever way of communicating from a web worker to the main
thread synchronously. [Partytown](https://partytown.builder.io/) is a library
that enables you to easily move third-party scripts to a worker thread to
improve main-thread performance. (It's maintained by the people behind Qwik,
which I mentioned in
["Free Lunches in Frontend Dev."](https://tylermercer.net/posts/software/free-lunches/))

This got me wondering if I could move Cloudflare Web Analytics off of the main
thread on this site. Cloudflare Web Analytics is a great analytics platform, but
adding it caused my site to lose its perfect score on
[pagespeed.web.dev](https://pagespeed.web.dev). So, turning a willfully blind
eye to [Goodhart's Law](https://en.wikipedia.org/wiki/Goodhart%27s_law), I
decided to give Partytown a shot.

My site is built using Eleventy^[ You can read more about how this site was
built in [it's colophon](/colophon/). ]. At the time of this writing, Partytown
does not have an integration for Eleventy, so I turned to
[the HTML section of the docs](https://partytown.builder.io/html) instead. It
proved to be pretty straightfoward, once I found the different steps I needed to
take (which required me to consult several other places in the docs in addition
to that page).

Here's how you can do the same for your website.

## Add the Partytown script as an inline script

First off, install `@builder.io/partytown` using NPM or your package manager of
choice. This package includes a script that we'll need to inline in our page.

To access the Partytown script source from within your site's templating in
Eleventy, you can add it as global data. In your site's `_data` folder, create a
[JS data file](https://www.11ty.dev/docs/data-js/) called `partytown.js`, with
the following contents:

```js
const { partytownSnippet } = require('@builder.io/partytown/integration');
module.exports = {
    snippet: partytownSnippet()
};
```

In your site's `head`, add the following. Make sure it is placed before any third-party script tags.

```html
<script>
      {% raw %}{{- partytown.snippet | safe -}}{% endraw %}
</script>
```

(Note: I'm using the
[Nunjucks templating language](https://www.11ty.dev/docs/languages/nunjucks/)
here.)

**_TODO: exlplain that this will look different in other frameworks._**

Move your Cloudflare Analytics script tag to immediately follow this new script
tag, and add a `type` attribute of `text/partytown`. This allows Partytown to
find and offload this script. Your document head should now look like this:^[ I
left the `defer` attribute as recommended by the Cloudflare docs, but I'm not
actually sure it does anything when Partytown is running your scripts. If anyone
knows the answer to this, please [shoot me an email!](/contact/)]

```html
<head>
    <!-- Other contents... -->
    <script>
      {% raw %}{{- partytown.snippet | safe -}}{% endraw %}
    </script>
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "..."}'></script>
</head>
```

## Copy Partytown's other JS files into your built site

## Self-serve Cloudflare Web Analytics
