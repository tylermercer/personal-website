// Adapted from Nunjuck's wordcount filter implementation

export default function countWords(html: string): number {
    const str = html.replace(/<[^>]*>/g, ' ').trim();
    const words = (str) ? str.match(/\w+/g) : null;
    return (words) ? words.length : 0;
}
