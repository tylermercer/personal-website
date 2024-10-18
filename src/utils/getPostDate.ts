import { type CollectionEntry } from "astro:content";

export default function getPostDate(entry: CollectionEntry<'posts'>) {
    if (entry.data.date) {
        return entry.data.date;
    }
    else return new Date(); //must be function-scoped to get current date on CF Workers
}
