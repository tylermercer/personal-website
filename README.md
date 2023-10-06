# Personal Website

My personal website, built with [Astro](https://astro.build) 🚀

## Information Architecture

`/` The root -- shows the most recent posts, a link to each collection, and a
link to each tag. "Category" and "Tags" sections may be links in themselves

* `/about` The about page. Not a post
* `/posts` The "all posts" list. Also shows the links to the two collections
  * `/posts/faith` The faith collection page. Shows the list of posts in this collection
    * `/posts/faith/[slug]` An individual post
  * `/posts/software` The software collection page. Shows the list of posts in this collection
    * `/posts/software/[slug]` An individual post

All pages will have a header with a link to `/` and `/about`. Posts will have a
breadcrumbs that shows the pages in their hierarchy.
