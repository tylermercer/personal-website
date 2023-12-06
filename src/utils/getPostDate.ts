import { type CollectionEntry } from "astro:content";

const now = new Date();

export default function getPostDate(entry: CollectionEntry<'posts'>) {
    if (entry.data.date) {
        return entry.data.date;
    }
    else return now;
}
