# Personal Website

My personal website, built with [Astro](https://astro.build) 🚀

## Information Architecture

`/` The root -- shows the most recent posts and a
link to each tag. "Tags" sections may be links in themselves

* `/about` The about page. Not a post
* `/posts` The "all posts" list. Also shows the links to the two collections
  * `/posts/[slug]` An individual post

All pages will have a header with a link to `/` and `/about`. Posts will have a
breadcrumbs that shows the pages in their hierarchy.
