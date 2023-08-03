---
title: Returning Multiple Root Nodes From a RenderFragment in Blazor
description: An obscure but useful trick
draft: true
---

If you're coming to Blazor from a framework like React, you might encounter a need for the Blazor
equivalent of React's `[Fragment](https://react.dev/reference/react/Fragment)`. Searching for this
(e.g. "RenderFragment with multiple nodes") on the documentation site doesn't yield any useful results,
but there _is_ a way to do it!

You can put multiple root elements in a RenderFragment by surrounding them with `<text>`. E.g.:

```razor
private RenderFragment RenderThing(Thing thing)
{
  return @<text>
            <p>@thing.Name</p>
            <p>@thing.Value</p>
         </text>;
}
```

This is particularly useful when you can't or don't want to add a wrapping element, e.g.
when rendering a set of <tr> elements that will be included in a table.

The `<text>` element, as
[documented in the Blazor docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-7.0#explicit-delimited-transition),
is intended to be used for whitespace control and for explicitly delimiting what should be
rendered as HTML inside a code block. (Normal HTML nodes (e.g. `<p>` and `<div>`) are detected
by the Razor parser, but text nodes cannot be distinguished from normal code, hence the name of this tag.)
This use case, however, is not documented.
