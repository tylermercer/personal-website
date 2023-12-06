export default function unMarkdown(raw: string): string {
    return raw?.replace(/[\*_`]/g, '')
}