import trimTrailingSlash from "./trimTrailingSlash";

// @ts-expect-error
const commentHtmlMap = globalThis.jamCommentsStore as Map<string, string>;

const commentCountMap = new Map<string, number>();

export default function getCommentCount(slug: string) {
    if (commentCountMap.has(slug)) return commentCountMap.get(slug)!;

    // commentHtmlMap contains the HTML from JamComments, which contains the comment count
    // as a data attribute. We extract it using a simple regex.
    const comments = commentHtmlMap.get(trimTrailingSlash(slug)) ?? 'data-jam-comments-count="0"';

    const match = comments.match(/data-jam-comments-count="(\d+)"/);

    if (match) {
        const count = parseInt(match[1]!, 10);
        commentCountMap.set(slug, count);
        return count;
    } else {
        // The commentHtmlMap contains HTML for the slug, but that HTML
        // unexpectedly doesn't contain a comment count.
        throw new Error(`Comment count not found for slug: ${slug}`);
    }
}