---
title: Component Architecture Tips for Blazor Developers
description: Borrowing useful mental models from React for fun and profit
---

Some principles that apply to component-based UI frameworks like React, which are good to know for working in Blazor:

## [Prefer composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

Reaching for inheritance to solve a problem with Blazor components
is usually the wrong approach. Practice thinking in composition ("what other components is this component composed of?") instead of inheritance.[^fp]

## [Don’t sync state. Derive it!](https://kentcdodds.com/blog/dont-sync-state-derive-it)

If you are constantly having to remember to update one piece of state
(e.g. the status of the steps passed into a Stepper) when another piece of state changes (e.g. the step you’re currently on), that’s a good sign that one of those pieces of state should be derived from the other (e.g. `private List<Step> Steps => /* compute step statuses for current step */`).

## Use [Compound Components](https://www.smashingmagazine.com/2021/08/compound-components-react/)

Compound components can allow you to create elegant component APIs when you have complex UI. For example, consider how the following Stepper components differ in ease of use:

```razor
<Stepper steps="@_steps"/>
...
private List<StepData> _steps = new List<StepData>()
{
  new StepData
  {
    Label = "Foo",
    State = StepState.Completed
  },
  new StepData
  {
    Label = "Bar",
    State = StepState.Current
  },
  new StepData
  {
    Label = "Baz",
    State = StepState.Future,
    Hidden = true
  },
}
private void ChangePage()
{
 // Now I have to go update the steps, which may involve skipping hidden steps conditionally.... Urgh
}
```

versus

```razor
<Stepper CurrentPage="@_currentPage">
  <Step Name="Foo" Value="@MyPageEnum.Foo"/>
  <Step Name="Bar" Value="@MyPageEnum.Bar"/>
  <Step Name="Baz" Value="@MyPageEnum.Baz" Show="@false"/>
</Stepper>

private MyPageEnum _currentPage = MyPageEnum.Foo;

private void ChangePage()
{
  _currentPage = /* new page Enum value */
  // * slaps Easy button *
}
```

## Consider the ideal API

As a generalization of the above point, **consider the ideal API for your components.** This is how I arrived at the cleaner Stepper API above. Ask yourself, "if we could have the perfect stepper component, thinking only as a user of that component, what would it look like?" Then go implement that API.

Sometimes the ideal API will be prohibitively difficult to implement, but overall this is a good rule of thumb that I find leads me towards cleaner component APIs.

(See [this talk by Jenn Creighton](https://www.youtube.com/watch?v=L38FYURPHDo) for more on creating clean component APIs.))

[^fp]: This is in some ways a gateway drug for functional programming. You may begin to develop a loathing for OOP. 😉
