---
title: A Curious Bookmarklet
description: A bookmarkable snippet of code for curious nerds like me
---

**_(Big circus voice)_** Do you ever find yourself wanting to link to a specific
section on a webpage? ("Umm... maybe once?" - you, probably) Do you wish you
could, with just one click, see all of the HTML `id` attributes that exist on a
page? ("Definitely not") Well _have I got a script for you!_

I'm a weirdo who likes to link to specific parts of a page.^[No, Google Chrome,
I don't mean via [Text Fragments](https://web.dev/articles/text-fragments)---I
mean the old way, that actually required web devs to care about URL design and
doesn't
[expose a privacy risk](https://github.com/WICG/scroll-to-text-fragment/issues/76).]
I've actually popped open the browser DevTools on more than one occasion to see
if a section heading in an article had an ID that I could link to---and often
this is successful, because many content management systems output headings with
an auto-generated id (usually in kebab-case, e.g. the heading "**My Heading**"
would have the id `my-heading`).

Yesterday I finally got tired of needing to do this manually, so I decided to
write a bookmarklet^[A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)
is a small piece of JavaScript code that runs in a webpage when you click on a
bookmark in your browser.] for it. Here's the script:

```js
(function () {
    document.querySelectorAll("#bookmarkletModal")
        .forEach(block => block.remove());

    let linksAsHtml = Array.from(document.querySelectorAll('[id]'))
        .map(el => window.location.toString().split('#')[0] + '#' + el.id)
        .reduce((acc, cur) => `${acc}<p><a href="${cur}">${cur}</a></p>`, '');

    let modalElement = `
      <div id="bookmarkletModal">
        <button id="bookmarkletModal-closeBtn">
          Close
        </button>
        ${linksAsHtml}
        <style>
            #bookmarkletModal
            {
                display: block;
                width: 100%;
                background-color: lightgray;
                color: black;
                padding: 30px 0px 20px 30%;
                position:relative;
                line-height: 18px;
                font-size: 16px;
                font-family: helvetica,serif;
            }
            #bookmarkletModal p {
                margin-bottom: 1rem;
            }
            #bookmarkletModal p a {
                color: blue;
            }
            #bookmarkletModal p a:hover {
                color: darkblue;
            }
            #bookmarkletModal-closeBtn {
                position: absolute;
                top: 20px;
                right: 20px;
                border: 1px solid black;
                padding: 10px 15px;
                cursor:pointer;
                background-color: white;
                color: black;
            }
        </style>
    </div>`;
    
    document.body.insertAdjacentHTML("afterBegin", modalElement);
    document.querySelector("#bookmarkletModal-closeBtn")
        .addEventListener("click", (e) => {
            document.querySelector("#bookmarkletModal").remove();
        }
    )
})()
```

**TODO: Breakdown**

**TODO: provide bookmarklet as link**

**TODO: finish post**
