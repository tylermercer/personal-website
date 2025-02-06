export default function getLinkDate(slug: string) {
    return new Date(slug.slice(0, slug.lastIndexOf("-")) + "T00:00-07:00");
};