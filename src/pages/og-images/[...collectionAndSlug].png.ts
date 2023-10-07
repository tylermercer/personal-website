import { getCollection, getEntryBySlug, type ContentCollectionKey, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
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

const renderHtml = (content: CollectionEntry<'posts'> | CollectionEntry<'pages'>, category?: CollectionEntry<'categories'>) => {
    
    const { title, description } = content.data;
    const date: Date | undefined = ('date' in content.data) ? content.data.date : undefined;

    return `
        <style>
            ${styles}
        </style>
        <div class="root">
            <div class="pattern pattern-${category?.id || ''}">
                <h1 class="title">${title}</h1>
            </div>
            <div class="bg-container">
                <div class="description">${description}</div>
                ${date ? `<div class="dateline">${formatPostDate(date)} — Tyler Mercer</div>` : ''}
            </div>
        </div>
        `.trim();
}

export const GET: APIRoute = async ({ params }) => {
    const [ collectionRaw, slug ] = params.collectionAndSlug!.split(/\/(.*)/s);
    const collection = collectionRaw as ContentCollectionKey;

    const entry = await getEntryBySlug(collection, slug!!) as CollectionEntry<'posts'> | CollectionEntry<'pages'>;
    const category = (collection === 'posts') ? await getCategory(entry as CollectionEntry<'posts'>) : undefined;
    
    return new Response(
        //TODO: generate png using data
        renderHtml(entry, category)
    );
}