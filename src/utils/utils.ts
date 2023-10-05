import { getCollection, type CollectionEntry } from "astro:content";
import { DateTime } from "luxon";
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import anchor from 'markdown-it-anchor';
import footnote from 'markdown-it-footnote';

const parser = new MarkdownIt({
    html: true,
    typographer: true
  }).use(anchor, {
    permalink: anchor.permalink.headerLink({
      safariReaderFix: true
    })
  }).use(footnote);

export function firstFive(collection: any[]) {
    return collection.slice(0, 5);
}

export function formatDateIso(date: Date) {
    return DateTime.fromJSDate(date).toISO();
}

export function formatPostDate(date: Date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
}

const now = new Date();

export function getPostDate(entry: CollectionEntry<'posts'>) {
    if (entry.data.date) {
        return entry.data.date;
    }
    else return now;
}

export function sortByDate(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    return entries.sort(
        (a, b) => {
            if (!(a.data.date)) return -1;
            if (!(b.data.date)) return 1;
            else return b.data.date.getTime() - a.data.date.getTime();
        });
}

export function filterOutDraftsIfProduction(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const isProduction = (import.meta.env.MODE === 'production');
    if (!isProduction) return entries;
    return entries.filter(
        (e: CollectionEntry<'posts'>) => (e.data.date && e.data.date < now)
    );
}

export async function getCategory(entry: CollectionEntry<'posts'>): Promise<CollectionEntry<'categories'> | undefined> {
    const categories = await getCollection('categories');
    const category = entry.id.split('/').at(0);
    if (!category) return undefined;
    return categories.find(c => c.data.slug === category);
}

export function checkCategory(entry: CollectionEntry<'posts'>, knownCategorySlug: string) {
    return entry.id.split('/').at(0) === knownCategorySlug;
}

export function renderMarkdown(markdown: string) {
    return sanitizeHtml(parser.render(markdown));
}

export type WithNextAndPrev<T> = {
    item: T,
    next?: T,
    prev?: T
}

export function toWithNextAndPrev<T>(items: T[], reverse: boolean = false): WithNextAndPrev<T>[] {
    return items.map((t, i, a) => ({
        item: t,
        next: reverse ? a[i-1] : a[i+1],
        prev: reverse ? a[i+1] : a[i-1]
    }));
}