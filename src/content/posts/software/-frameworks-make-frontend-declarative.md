---
title: Frameworks Make Frontend Declarative
description: The killer feature
# date: 2023-08-07 12:00:00.00
---
 _Making frontend [declarative](/software/declarative-code)_ is the primary benefit of most JavaScript view frameworks, including [React](https://react.dev), [Vue](https://vuejs.org), [Angular](https://angular.dev), [Svelte](https://svelte.dev), and [Solid](https://solidjs.com). In my experience, advocates for "vanilla JS" approaches to web application development overlook this fact.

In this post, I'm using the following definition of declarative code, from [this video by Josh Morony](https://www.youtube.com/watch?v=ZnaThaXb7JM) (which I also shared in the post linked above):

> Declarative code [is code] where the definition of a thing and how it can change over time is contained entirely within the declaration of that thing.

The building blocks of declarative code are _declarations_, whereas the building blocks of imperative code are _commands_. 

With those ideas in mind, there are two ways to approach frontend JS:
1. Imperatively, typically using JQuery or vanilla JS
2. Declaratively, using either an established framework or a hand-rolled framework-like abstraction.

While HTML is naturally declarative, vanilla JS is purely imperative. **Any attempt to connect your logic and data to your view _without_ creating or using a framework-like abstraction will be imperative.** It has to be, because, out of the box, the only mechanism JS gives you to connect data with view is _a set of commands_: things like `el.innerText = ...` and `el.setAttribute(...)`.[^signals]

Take a look at this example from Noam Rosenthal's article ["What Web Frameworks Solve: The Vanilla Alternative"](https://www.smashingmagazine.com/2022/02/web-frameworks-guide-part2/):

```html
<form name="contactForm">
  <input name="showErrors" type="checkbox" hidden />
  <fieldset name="names">
     <input name="name" />
     <output name="error"></output>
  </fieldset>
  <fieldset name="emails">
     <input name="email" />
     <output name="error"></output>
  </fieldset>
</form>

<script>
  function setErrorMessage(section, message) {
  document.forms.contactForm.elements[section].elements.error.value = message;
  }
  function setShowErrors(show) {
  document.forms.contactForm.elements.showErrors.checked = show;
  }
</script>

<style>
   input[name="showErrors"]:not(:checked) ~ * output[name="error"] {
      display: none;
   }
</style>
```
 
The declarations of the error messages (the two instances of `output` in the HTML) do not contain how they could change over time. That information is elsewhere entirely, in the script, where it's expressed imperatively (as commands to set the message and the shown state). As such, the error messages are not fully declarative. If you want to know how they change, you have to scan through all the code and look for references to them.

Contrast that with a simple implementation in React[^react]:

```jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '' });

  const setErrorMessage = (section, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [section]: message,
    }));
  };

  return (
    <form name="contactForm">
      <input
        name="showErrors"
        type="checkbox"
        checked={showErrors}
        hidden
      />
      <fieldset name="names">
        <input name="name" />
        <output name="error">
          {errors.name}
        </output>
      </fieldset>
      <fieldset name="emails">
        <input name="email" />
        <output name="error">
          {errors.email}
        </output>
      </fieldset>
    </form>
  );
};

export default ContactForm;
```

Now the definition of each `output` _declares_ that it is dependent on a member of the `errors` state. If that state changes, you can expect the `output` to change too.

You might point out that this isn't _fully_ declarative---we still have the commands `setErrorMessage` and `setShowErrors`---and you'd be right. Even with declarative UI, you have places where you need to change state in response to the user's input. The user's input is conceptually a command, not a declaration, so it is necessarily represented imperatively in our code.

To show where declarativeness really shines, let's add an indicator of the _count_ of errors to our form. Here's the vanilla version:

```html
<form name="contactForm">
  <input name="showErrors" type="checkbox" hidden />
  <fieldset name="names">
     <input name="name" />
     <output name="error"></output>
  </fieldset>
  <fieldset name="emails">
     <input name="email" />
     <output name="error"></output>
  </fieldset>
  <output name="count"></output>
</form>

<script>
  let count = 0;
  function setCount(newCount) {
	  count = newCount;
	  document.forms.contactForm.elements.output.value = `${count} errors`;
  }
  function setErrorMessage(section, message) {
	const old = document.forms.contactForm.elements[section].elements.error.value;
	document.forms.contactForm.elements[section].elements.error.value = message;
	if (message && !old) {
		setCount(count + 1);
	}
	if (old && !message) {
		setCount(count - 1);
	}
  }
  function setShowErrors(show) {
  document.forms.contactForm.elements.showErrors.checked = show;
  }
</script>
```

Phew! We needed a variable to track the count, a new function to make the count reflect in the UI, and conditional checks to update the count when the errors are set.

Most notably, we had to add these changes _in three different places_: the DOM, the list of functions, and the internals of `setErrorMessage`. The concept of "the count of error messages" is not clearly captured in any one place.

This isn't _that_ bad for this simple example, but you can start to see how imperative UI code would become unwieldy as your application gets more complex.

Once again, here's the same thing implemented in React:

```jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '' });

  const setErrorMessage = (section, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [section]: message,
    }));
  };

const errorCount = Object.values(errors).filter(e => e).length;

  return (
    <form name="contactForm">
      <input
        name="showErrors"
        type="checkbox"
        checked={showErrors}
        hidden
      />
      <fieldset name="names">
        <input name="name" />
        <output name="error">
          {errors.name}
        </output>
      </fieldset>
      <fieldset name="emails">
        <input name="email" />
        <output name="error">
          {errors.email}
        </output>
      </fieldset>
      <output>{errorCount} errors</output>
    </form>
  );
};

export default ContactForm;
```

That's it!

Note that, once again, everything you need to know about the new output is contained in its declaration. "Oh, it's an output showing the `errorCount` value followed by 'errors'."

But wait, our definition of "declarative" said that how a thing changes over time should be captured entirely within the thing's declaration. Doesn't this violate that, since I have to go to the declaration of `errorCount` to get the full picture of how the output changes?

The answer is no, because `errorCount` is a separate _thing_.

Everything you need to know about the `output`---specifically, that it displays `errorCount`---is contained in the `output`'s definition. And everything you need to know about `errorCount` is contained in _its_ definition: it is the count of the truthy errors. Thanks to [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)), we can dive as deeply as we need to into the thing we're looking at---without needing to search through the whole codebase for where it might be changed.

_This_ is why frameworks have taken the frontend world by storm since React hit the scene in 2013: they make frontend view and state declarative.

[^react]: While I've criticized React for [its impact on frontend performance](/software/free-lunches) in the past, I'm using it here because it is the [prototypal](https://en.wikipedia.org/wiki/Prototype_theory) frontend framework---when people think "frontend framework", they usually think of React first, even if they don't use it themselves.

[^signals]: There is some interesting work being done to bring declarative state management to vanilla JavaScript, such as the in-progress [JavaScript Signals proposal](https://github.com/tc39/proposal-signals). But those efforts haven't landed yet, and they don't currently provide ways to bind their declarative state primitives to the DOM.
