---
title: Creating a Partial Clone of a Git Repo
description: A trick I use for writing on this site without being distracted by its code
date: 2024-02-22 12:00:00
---

<details>
<summary class="h4">TL;DR</summary>

```bash
git clone -n --depth=1 --filter=tree:0 <your-repo-git-url>
git sparse-checkout set path/to/desired/folder
```

</details>

I recently upgraded my computer, and, after some thought, decided to turn my old
one into a writing-only device. The goal was to use higher-order agency
thinking---decisions that shape one's
decisions^[I wrote about this topic briefly in the [Feb 8 Innerhelm newsletter](https://innerhelm.com/newsletters/frustration-optimism-and-identity/#higher-order-agency-thinking),
and am planning on writing a longer Innerhelm blog post about it at some
point.]---to enable myself to focus more deeply on my journaling, this blog,
[Innerhelm](https://innerhelm.com), and my other writing. I removed everything
not related to writing from this device: accounts and bookmarks in my browser,
the messaging apps I use, the handful of games I had installed, and even the VS
Code extensions I use that don't relate to Markdown. (I use VS Code for my
writing for a few reasons, most notably (a) because I have yet to find a text
editor I like that supports the inline footnotes syntax I use, and (b) because I
have a large amount of muscle memory built up for getting around it, which
reduces the friction of writing.)

I was left with a much-less-interesting VS Code for my blog writing,
[Notesnook](https://notesnook.com/) for my journaling, and
[Obsidian](https://obsidian.md/) for storing quotes from books and articles that
I might use in my writing.

But one big distractor remained: my personal site's code. I've spent so many
hours tweaking this site's design and implementation like [one would rub a
worry-stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/)---not
out of genuine need but as an escape from the "should" of writing. Because my
posts are stored as Markdown files in an Astro content collection, the code that
renders those posts is _right there_, singing its siren song to me, luring me
into the rocks of comfort-coding when my intended goal was to write.

Being the git geek that I am, I wondered if there was a way to use git to "tie
myself to the mast" by only cloning the folder that contains my posts. Turns
out, there is! (Kudos to Ciro Santilli for providing the solution in
[this answer on Stack Overflow](https://stackoverflow.com/a/52269934).)

There are two commands you'll need to run. Let's break down each of them.

## Step 1: Clone the repository

```bash
git clone -n --depth=1 --filter=tree:0 <your-repo-url>
```

This isn't your standard-issue git clone command. Here we use `--filter` to
specify the objects (think versions of files) we want to download. Specifying
`tree:0` as the filter value means we don't want _anything_---at least, not
until we say which files we _do_ want. `--depth=1` means we don't want any
commits other than the most recent one. (Commits we or others make on the main
branch will be pulled when we `git pull`, but nothing older than the most recent
commit at the time of the clone will be downloaded, even on those subsequent
pulls.)

Replace `<your-repo-url>` with the URL you normally use for git clone. For
example, in my case, I used
`git@github.com:tylermercer/personal-website.git`.

## Step 2: Checkout the directory you want

```bash
git sparse-checkout set path/to/a/folder path/to/another/folder
```

This one uses
[the new-ish `sparse-checkout` command](https://www.git-scm.com/docs/git-sparse-checkout).
You can specify multiple folders if you would like, by listing them after the
`set` command, separated by spaces.

This will initialize a file in `your-repo/.git/info/sparse-checkout` with these
paths listed, which git will then use for updating your working-tree when you
checkout or pull. In my case, the path to the folder was `/src/content`, which
is where my Markdown files live.^[The path was actually different when I first
did the partial clone, because I did it prior to
[my migration to Astro](https://github.com/tylermercer/personal-website/pull/63).]

## Step 3: Enjoy your peace of mind

I suppose this depends on what you are using it for. But in my case, carving out
an interruption-free digital space for my writing has been so nice.

## Imperfections

I should note here that the resulting folder structure still preserves the
parent directories, which may be a downside for some use cases, such as mine. It
would be great if I could just have a `personal-website` folder containing the
contents of my `content` folder, right alongside the `.git` directory. Maybe git
will someday add that ability. But until then, this works well enough for me.
