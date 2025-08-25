import { type CollectionEntry } from "astro:content";
import getLinkDate from "./getLinkDate";

export const filterOutFutureLinksIfProduction = (entries: CollectionEntry<'links'>[]): CollectionEntry<'links'>[] => {
    const isProduction = (import.meta.env.MODE === 'production');
    if (!isProduction) return entries;
    const now = new Date();
    return entries.filter(entry => {
        const entryDate = getLinkDate(entry.slug);
        return entryDate <= now;
    });
}