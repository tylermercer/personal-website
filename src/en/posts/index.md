---
title: All Posts
description: My writings and thoughts
eleventyExcludeFromCollections: true
layout: collection
permalink: "en/posts/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"
pagination: 
    data: collections.posts
---