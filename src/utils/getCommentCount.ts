// @ts-expect-error
const commentJsonMap = globalThis.jamCommentsStore;

const commentCountMap = new Map<string, number>();

export default function getCommentCount(slug: string) {
    if (commentCountMap.has(slug)) return commentCountMap.get(slug)!;
    const comments = commentJsonMap.get(slug) ?? '[]';
    const count = JSON.parse(comments).length;
    commentCountMap.set(slug, count);
    return count;
}