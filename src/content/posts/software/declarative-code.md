---
title: What is Declarative Code?
description: A precise definition of a useful concept
# date: 2024-11-08 12:00:00.00
---

If you spend any amount of time writing web UI's, you're likely to have come across code that is described as _declarative_ or _imperative_, usually with declarative code being framed as a good thing and imperative code as a bad thing.

The difference between these two forms of code is often explained as "what" versus "how": _declarative_ code describes _what_ a thing is, whereas _imperative_ code describes _how_ a thing is done.

But that's pretty nebulous, and not very actionable.

A much better definition is given by Josh Morony in his excellent video ["A visual guide to why declarative code is better"](https://www.youtube.com/watch?v=ZnaThaXb7JM):

> Declarative code [is code] where the definition of a thing and how it can change over time is contained entirely within the declaration of that thing.

The building blocks of declarative code are _declarations_, whereas the building blocks of imperative code are _commands_ (i.e. [imperatives](https://www.merriam-webster.com/dictionary/imperative#dictionary-entry-2), as a noun).

Consider the following examples he gives in the video:

```js
const myObservable = someObservable$.pipe(
  map((val) => val * 2)
);

const mySignal = computed(() => someSignal() * 2);

const text = 'subscribe?';
```

Each of these is _declared_ in such a way that you know how you can expect it to change. In the first two cases, the thing changes when the underlying observable or signal's value changes. In the third case, the thing doesn't change---and that's clear from the declaration thanks to the use of `const`.

He then gives contrasting examples of imperative code:

```js
let text = 'subscribe?';
text = await somePromise();

let myVal;
myObservable$.subscribe((val) => {
  myVal = val
});
```

These two examples aren't bad as written here, but imagine if the second line of each was in some other file in your codebase. Things can quickly become much harder to understand.

Note that the second line of each of the examples of imperative code is a _command_ that changes the value declared on the previous line.

## A larger example

To illustrate how this looks in practice, and why it breaks down as your code becomes more involved, consider the following Javascript class for tracking a player's score history in a game:

```ts
class ScoreTracker {
  private _history: number[] = [];

  get history(): ReadonlyArray<number> {
    return this._history;
  }

  addScore(score: number): void {
    this._history.push(score);
  }
}

// Example usage:
const player = new ScoreTracker();
player.addScore(100);
player.addScore(150);
console.log(player.history);  // Output: [100, 150]
```

Right now this is a mix of declarative and imperative code:

- `history` is declarative. It's declaration indicates that it's a readonly-typed reference to `_history`.
- `addScore` is imperative; it's a command that adds a score to the history.

Note that imperative code makes sense for the `addScore` function, since it is conceptually a command (triggered by the user completing the game).

Let's add functionality to this class and see how imperative and declarative code styles differ as it grows. We'll start by adding a member for the user's high score, thinking imperatively:

```diff lang="ts"
 class ScoreTracker {
   private _history: number[] = [];
+  private _highScore: number = 0;

   get history(): ReadonlyArray<number> {
     return this._history;
   }
+  get highScore(): number {
+    return this._highScore;
+  }

   addScore(score: number): void {
     this._history.push(score);
+    if (score > this._highScore) {
+      this._highScore = score;
+    }
   }
 }
```

This works, but we've had to add code to three different places. Most notably, when we add a new score, we have to imperatively update `_highScore` if the new score is higher. But this behavior is, conceptually-speaking, part of the definition of the high score concept: the high score is the highest score the user has achieved so far. Wouldn't it be great if we could bundle that logic into the declaration of `highScore`?

It would be, but we've got a deadline to hit, and our manager has already assigned us the next two tickets: adding the user's most recent score to the display, and allowing them to reset all their data. Let's keep going the way things are---we don't want to lose that [sunk cost](https://en.wikipedia.org/wiki/Sunk_cost#Fallacy_effect), after all.

```diff lang="ts"
 class ScoreTracker {
   private _history: number[] = [];
   private _highScore: number = 0;
+  private _mostRecentScore: number | undefined; //Undefined if no scores yet

   get history(): ReadonlyArray<number> {
     return this._history;
   }
   get highScore(): number {
     return this._highScore;
   }
+  get mostRecentScore(): number {
+    return this._mostRecentScore;
+  }

   addScore(score: number): void {
     this._history.push(score);
+    this._mostRecentScore = score;
     if (score > this._highScore) {
       this._highScore = score;
     }
   }
+
+  reset(): void {
+    this._history.clear();
+    this._highScore = 0;
+  }
 }
```

Phew! We met our deadline. But oh no!! 😱 There's a bug in our code! We forgot to reset `this._mostRecentScore` in our `reset` function. 🤦‍♂️

Instead of just fixing that, let's rewrite this so we don't have to touch four different places each time we add a new feature in the future. Here's how we'd implement the high score, last score, and reset features declaratively:

```diff lang="ts"
 class ScoreTracker {
   private _history: number[] = [];

   get history(): ReadonlyArray<number> {
     return this._history;
   }
+  get highScore(): number {
+    return Math.max(...this._history);
+  }
+  get mostRecentScore(): number | undefined {
+    return this._history.at(-1);
+  }

   addScore(score: number): void {
     this._history.push(score);
   }
+
+  reset() {
+    this._history.clear();
+  }
 }
```

Much nicer! We captured the conceptual definition of `highScore` and `lastScore` in their declarations.

(Note that `reset` is still imperative---as with `addScore`, it's conceptually a command. But it's much simpler now, and doesn't need to be changed as we add new features.)

## The need for speed

Now, _before you jump to the comments section and eviscerate me_, there's a big downside here, most glaringly with `highScore`: each time we reference `highScore` in our code, the `Math.max` call will be re-evaluated, even if `_history` hasn't changed since the last time we used `highScore`! That's not great for our performance, especially as the user's score history grows larger.

To mitigate this, we have a couple options:

1. [Memoize](https://en.wikipedia.org/wiki/Memoization) functions like the `highScore` getter when they become expensive. Memoization is a way of making a function save its return value and return the same value if the parameters (the dependency of `_history`, in this case) haven't changed.
2. Wrap declarations like that of `highScore` in a reusable bit of logic that (1) caches the last return value until its dependencies _signal_ that they have changed and (2) signals to anything that depends on it that it has changed as well.

You might have guessed where this is going:

- Option 1 is what [React](https://react.dev/) does, via its [`useMemo` hook](https://react.dev/reference/react/useMemo), and, more recently, the experimental [React Compiler](https://react.dev/learn/react-compiler).
- Option 2 is what signals-based frameworks like [Solid](https://www.solidjs.com/) and the recently-released [Svelte 5](https://svelte.dev/blog/svelte-5-is-alive) do. The signaling behavior described above is where the term "signal" comes from.

## Use React, got it!

That's not _quite_ what I'm saying here.

There are many cases where the cost of imperative code (or naive declarative code) is [lower than the cost of a framework like React](/posts/software/free-lunches). For example, because there is (intentionally) comparatively little client-side JS, I've written all the client-side logic on [my website](/), [my wife's art site](https://evelynescobar.art), and my topical blog [Innerhelm](https://innerhelm.com) in vanilla, imperative JavaScript. This keeps my pages quick to load, and the unwieldiness of managing complex imperative logic serves as an incentive to keep things simple.

But for large, stateful applications, especially where there's a high degree of [inherent complexity](https://lawsofux.com/teslers-law/), using a frontend framework like React, Angular, Svelte, or Vue is an excellent way to keep your code declarative and easy to understand.

In the next post in this series (coming soon), we'll dive into how frontend web frameworks take declarativeness even further, by making UI itself declarative.
