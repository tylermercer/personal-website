import { getCollection, type CollectionEntry } from "astro:content";
import { DateTime } from "luxon";

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
    if ('date' in entry.data) {
        return entry.data.date;
    }
    else return now;
}

export function sortByDate(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    return entries.sort(
        (a, b) => ('date' in b.data) ?
            (('date' in a.data) ?
                (b.data.date.getTime() - a.data.date.getTime()) :
                now.getTime()) :
            0);
}

export function filterOutDraftsIfProduction(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const isProduction = (import.meta.env.MODE === 'production');
    if (!isProduction) return entries;
    return entries.filter(
        (e: CollectionEntry<'posts'>) => !('draft' in e.data && e.data.draft) && !('date' in e.data && e.data.date > now)
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