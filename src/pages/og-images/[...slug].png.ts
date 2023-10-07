import { getCollection, getEntryBySlug, type ContentCollectionKey } from "astro:content";
import { labelDrafts, sortByDate, filterOutDraftsIfProduction } from "../../utils/utils";
import type { APIRoute } from "astro";


export async function getStaticPaths() {
    const posts = labelDrafts(sortByDate(filterOutDraftsIfProduction(await getCollection("posts"))));
    const pages = await getCollection('pages');
    const toParams = (collection: string) => (entry: { slug: string }) => ({
        params: { slug: entry.slug, collection: 'posts' },
    });
    return posts
        .map(toParams('posts'))
        .concat(pages.map(toParams('pages')));
}

export const GET: APIRoute = async ({ params }) => {
    const { slug, collection } = params;
    const entry = await getEntryBySlug(collection as ContentCollectionKey, slug!!);
    return new Response(
        //TODO: generate png using slug
        JSON.stringify({
            collection,
            slug
        })
    );
}