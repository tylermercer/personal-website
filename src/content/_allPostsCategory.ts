import type { CollectionEntry } from "astro:content";

const category = {
    data: {
        title: "All Posts",
        description: "My writings and thoughts",
    },
} as CollectionEntry<"categories">;

export default category;