import unMarkdown from "lib/unMarkdown";

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

export default function combineDescriptionItems(items: string[]) {
    return formatter.format(items
        .map(unMarkdown)
        .map((t, i) => i === 0 ? t : t.replace(/^([A-Z])/, (_, p) => p.toLowerCase())));
}