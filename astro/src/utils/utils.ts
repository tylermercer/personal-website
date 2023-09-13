import type { CollectionEntry } from "astro:content";
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