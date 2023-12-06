// Adapted from Nunjuck's wordcount filter implementation

export default function countWords(str: string): number {
    const words = (str) ? str.match(/\w+/g) : null;
    return (words) ? words.length : 0;
}
