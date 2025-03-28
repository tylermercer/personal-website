export default function slugify(str: string) {
    return str.replace(/[^a-z0-9]+/gi, '-').replace(/-+/g, '-').toLowerCase();
}