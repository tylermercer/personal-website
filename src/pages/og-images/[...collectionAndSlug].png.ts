import { getCollection, getEntryBySlug, type ContentCollectionKey, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";

import sortByDate from "../../utils/sortByDate";
import filterOutDraftsIfProduction from "../../utils/filterOutDraftsIfProduction";
import labelDrafts from "../../utils/labelDrafts";
import getCategory from "../../utils/getCategory";
import renderer from "./_og-utils/renderer";
import { filterOutCrossSitePosts } from "@utils/filterOutCrossSitePosts";

export async function getStaticPaths() {
    const posts = labelDrafts(sortByDate(filterOutDraftsIfProduction(filterOutCrossSitePosts(await getCollection("posts")))));
    const pages = await getCollection('pages');
    const toParams = (collection: string) => (entry: { slug: string }) => ({
        params: { collectionAndSlug: `${collection}/${entry.slug}` },
    });
    return posts
        .map(toParams('posts'))
        .concat(pages.map(toParams('pages')));
}

export const GET: APIRoute = async ({ params }) => {
    const [collection, slug] = params.collectionAndSlug!.split(/\/(.*)/s);

    const entry = await getEntryBySlug(collection as unknown as ContentCollectionKey, slug!!) as CollectionEntry<'posts'> | CollectionEntry<'pages'>;
    const category = (collection === 'posts') ? await getCategory(entry as CollectionEntry<'posts'>) : undefined;

    return await renderer.renderOgImage({
        options: {
            props: {
                ...entry.data,
                category: category?.id,
                cacheBust: 2,
            }
        }
    });
}