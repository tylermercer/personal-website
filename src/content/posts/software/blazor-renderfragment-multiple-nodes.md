---
title: Returning Multiple Root Nodes From a RenderFragment
description: The Blazor version of React's Fragment API
date: 2023-08-07 12:00:00.00
---

If you're coming to Blazor from a framework like React, you might encounter a
need for the equivalent of React's
[`Fragment`](https://react.dev/reference/react/Fragment), which allows you to
return a set of DOM nodes from a function, rather than being limited to
returning one node. At the time of this writing, searching for this (e.g.
"RenderFragment with multiple nodes") on Blazor's documentation site doesn't
yield any useful results, but there _is_ a way to do it!

You can put multiple root elements in a RenderFragment by surrounding them with
`<text>`. For example:

```razor
@code {
  private RenderFragment RenderThing(Thing thing)
  {
    return @<text>
              <p>@thing.Name</p>
              <p>@thing.Value</p>
          </text>;
  }
}
```

This is particularly useful when you can't or don't want to add a wrapping
element, such as when rendering a set of `<tr>` elements that will be included
in a table.

The `<text>` element, as
[documented in the Blazor docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-7.0#explicit-delimited-transition),
is provided for whitespace control and for explicitly delimiting what should be
rendered as HTML inside a code block. Normal HTML nodes (e.g. `<p>` and
`<div>`) are detected by the Razor parser, but HTML
[text nodes](https://developer.mozilla.org/en-US/docs/Web/API/Text) cannot be
distinguished from normal code, hence the name of the tag.
