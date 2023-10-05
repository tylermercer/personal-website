import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";


export const getStaticPaths = (async ({ paginate }) => {
const allCategories = ['faith', 'software'];

const allPosts = await getCollection('posts');
// For every tag, return a paginate() result.
// Make sure that you pass `{params: {tag}}` to `paginate()`
// so that Astro knows which tag grouping the result is for.
return allCategories.flatMap((category) => {
const filteredPosts = allPosts.filter((post) => checkCategory(post, category));
return paginate(filteredPosts, {
params: { tag: category },
pageSize: 10
});
});

// const posts = await getCollection("posts");
// return paginate(sortByDate(filterOutDraftsIfProduction(posts)), { pageSize: 5 });
}) satisfies GetStaticPaths;
