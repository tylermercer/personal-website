// Adapted from Nunjuck's wordcount filter implementation

export default function countWords(str: string): number {
    const words = str?.split(`\n[^`).at(0)?.match(/\w+/g);
    return words?.length ?? 0;
}
