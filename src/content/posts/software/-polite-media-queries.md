---
title: Polite Media Queries
description: Making media queries noncompetitive
---
I came across an interesting CSS pattern in [this article by Manuel Matuzovic](https://web.dev/articles/website-navigation) a while back. Beginning in the ["Hiding the List"](https://web.dev/articles/website-navigation#hiding_the_list) section, he adds a media query that only sets component-scoped custom properties. The non-media-query code then defers to those media query overrides via `var()` with a fallback argument, e.g. `flex-direction: var(--nav-list-layout, column);`.

It took me a bit to realize how cool this is—the media query doesn’t need to compete in specificity with the selectors that set the properties it’s overriding! Instead, the selectors opt-in to the override for each property. This means the media query can specify those properties with simple, low-specificity selectors (like `nav` and `ul` in this example). The opt-in nature of the override also makes it clearer which properties are overridden.

- [ ] Connect to Svelte’s component styles props implementation—in this case, the parent setting the props is the browser window.
- [ ] Draw parallel to theme variables
- [ ] Give simple example