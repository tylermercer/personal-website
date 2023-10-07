import { getCollection, getEntryBySlug, type ContentCollectionKey, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
import { html } from "satori-html";
import styles from './_styles.css?raw';

import { labelDrafts, sortByDate, filterOutDraftsIfProduction, getCategory, formatPostDate } from "../../utils/utils";

export async function getStaticPaths() {
    const posts = labelDrafts(sortByDate(filterOutDraftsIfProduction(await getCollection("posts"))));
    const pages = await getCollection('pages');
    const toParams = (collection: string) => (entry: { slug: string }) => ({
        params: { collectionAndSlug: `${collection}/${entry.slug}` },
    });
    return posts
        .map(toParams('posts'))
        .concat(pages.map(toParams('pages')));
}

export const GET: APIRoute = async ({ params }) => {
    const [ collectionRaw, slug ] = params.collectionAndSlug!.split(/\/(.*)/s);
    const collection = collectionRaw as ContentCollectionKey;

    const entry = await getEntryBySlug(collection, slug!!) as CollectionEntry<'posts'> | CollectionEntry<'pages'>;
    
    return new Response(
        //TODO: generate png using slug
        JSON.stringify({
            slug,
            collection,
            title: entry.data.title
        })
    );
}