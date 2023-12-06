import { type CollectionEntry } from "astro:content";

const now = new Date();

export default function isDraft(entry: CollectionEntry<'posts'>): boolean {
    return !(entry.data.date && entry.data.date < now);
}
