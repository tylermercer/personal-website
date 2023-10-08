import { getCollection, getEntryBySlug, type ContentCollectionKey, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
import { html as htmlToSatori } from "satori-html";
import satori from "satori";
import sharp from "sharp";

import styles from './_styles.css?raw';
import faustina from '@fontsource/faustina/files/faustina-latin-400-normal.woff';
import figtree from '@fontsource/figtree/files/figtree-latin-700-normal.woff';

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

    return (`
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
        `.trim());
}

export const GET: APIRoute = async ({ params }) => {
    const [collectionRaw, slug] = params.collectionAndSlug!.split(/\/(.*)/s);
    const collection = collectionRaw as ContentCollectionKey;

    const entry = await getEntryBySlug(collection, slug!!) as CollectionEntry<'posts'> | CollectionEntry<'pages'>;
    const category = (collection === 'posts') ? await getCategory(entry as CollectionEntry<'posts'>) : undefined;

    const renderedHtml = renderHtml(entry, category);

    const svg = await satori(htmlToSatori(renderedHtml), {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'Figtree',
                data: figtree,
                weight: 700,
                style: 'normal',
            },
            {
                name: 'Faustina',
                data: faustina,
                weight: 400,
                style: 'normal',
            },
            {
                name: 'Faustina',
                data: faustina,
                weight: 300,
                style: 'normal',
            },
        ],
    });

    const responseData = await sharp(Buffer.from(svg)).png().toBuffer();
    
    return new Response(responseData, {
        status: 200,
        headers: {
        "Content-Type": "image/png",
        },
    });
}