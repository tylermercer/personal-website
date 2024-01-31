export default function unMarkdown(raw: string): string {
    return raw
        ?.replace(/[\*_`]/g, '') //Remove ital & bold
        .replace(/\[(.*?)\]\(.*?\)/g, (_, p1) => p1) //Remove links
}