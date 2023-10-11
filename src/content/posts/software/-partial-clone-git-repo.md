---
title: Creating a Partial Clone of a Git Repo
description: A trick I use for writing on this site without being distracted by its code
---

## TL;DR

```bash
git clone -n --depth=1 --filter=tree:0 <your-repo-git-url>
git sparse-checkout set path/to/desired/folder
```

## WTWBAOTTP;EP

(That's "Well that was boring and overly to-the-point; explain please," in case
it wasn't obvious.)

First, the _dramatic backstory_.

I recently upgraded my computer, and after some thought, decided to turn my old
one into a writing-only device. The goal was to enable myself to focus more
deeply on my journaling, this blog, and my other writing. I removed everything
not related to writing from this device: accounts and bookmarks in my browser,
the messaging apps I use, the handful of games I had installed, and even the VS
Code extensions I use that don't relate to Markdown. (I use VS Code for my
writing for a few reasons, most notably (a) because I have yet to find a text
editor I like that supports the inline footnotes syntax I use, and (b) because I
have a large amount of muscle memory built up for getting around it, which
reduces the friction of writing.) I'm now left with a much-less-interesting VS
Code for my blog writing, [Notesnook](https://notesnook.com/) for my journaling,
and [Obsidian](https://obsidian.md/) for storing quotes from books and articles
that I might use in my writing.

But one big distractor remained: my personal site's code. I've spent so
many hours over the last six months rubbing the
[worry-stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/)
that is my site's implementation when I what I had _intended_ to be doing was
writing.

Being a gigantic git geek, I wondered if there was a way to use git to solve
this. Turns out, there is! (Kudos to Ciro Santilli for providing the solution in
[this answer on Stack Overflow](https://stackoverflow.com/a/52269934).)

There are two commands you'll need to run. Let's break down each of them.

## Step 1: Clone the repository

This isn't your standard git clone. Here we use `--filter` to specify the
objects (think versions of files) we want to download. Specifying `tree:0` as
the filter value means we don't want _anything_---at least, not until we say
which files we _do_ want. `--depth=1` means we don't want any commits other than
the most recent one. (Commits we or others make on the main branch will be
pulled when we `git pull`, but nothing older than the most recent commit at the
time of the clone will be downloaded, even on those subsequent pulls.)

```bash
git clone -n --depth=1 --filter=tree:0 <your-repo-url>
```

Replace `<your-repo-url>` with the URL you normally use for git clone. For
example, in my case, I used
`git@github.com:tylermercer/personal-website.git`.

## Step 2: Checkout the directory you want

This one uses
[the new-ish `sparse-checkout` command](https://www.git-scm.com/docs/git-sparse-checkout).
You can specify multiple folders if you would like, by listing them after the
`set` command, separated by spaces.

```bash
git sparse-checkout set path/to/a/folder path/to/another/folder
```

This will initialize a file in `your-repo/.git/info/sparse-checkout` with these
paths listed, which git will then use for updating your working-tree when you
checkout or pull. In my case, the path to the folder was `/src/content`, which
is where my Markdown files live.^[The path was actually different when I first
did the partial clone, because I did it prior to
[my migration to Astro last week](https://github.com/tylermercer/personal-website/pull/63).]

## Step 3: Enjoy your peace of mind

I suppose this depends on what you are using it for. But in my case, carving out
an interruption-free digital space for my writing was _so_ nice. I have
admittedly only written
[one article](https://tylermercer.net/posts/faith/certainty-and-uncertainty-as-elements-of-faith/)
other than this one since then, but I think it turned out better as a result of
the space I gave myself to focus deeply on it.

## Imperfections

I should note here that the resulting folder structure still preserves the
parent directories, which may be a downside for some use cases, such as mine. It
would be great if I could just have a `personal-website` folder containing the
contents of my `content` folder, right alongside the `.git` directory. Maybe git
will someday add that ability. But until then, this works well enough for me.
