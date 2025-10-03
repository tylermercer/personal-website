import type { APIRoute } from "astro";

export const prerender = false;

interface MattermostPayload {
    channel_id: string;
    channel_name: string;
    team_domain: string;
    team_id: string;
    post_id: string;
    text: string;
    timestamp: string;
    token: string;
    trigger_word: string;
    user_id: string;
    user_name: string;
}

async function getPageTitle(url: string): Promise<string> {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const title = html.match(/<title>(.*?)<\/title>/)?.[1];
        return title || url;
    } catch (e) {
        return url;
    }
}

function ok() {
    return new Response("OK", { status: 200 });
}

function composeFileText(title: string, link: string, description: string) {
    
        const timestamp = new Date().toISOString();
        const fileName = `${timestamp}.md`;
        const markdown = `---
link: "${link}"
title: "${title}"
---

${description}
`;
        return { fileName, markdown };
}

async function toBase64(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}


export const POST: APIRoute = async ({ request, locals }) => {
    const { env } = locals.runtime;
    try {
        const body = (await request.json()) as MattermostPayload;

        
        if (body.token !== env.MATTERMOST_WEBHOOK_TOKEN) {
            return new Response("Unauthorized: bad token", { status: 403 });
        }
        
        if (body.user_name !== "tyler") {
            return ok(); // silently ignore
        }
        const allowedChannels = ["code", "design", "ai-random"];
        if (!allowedChannels.includes(body.channel_name)) {
            return ok(); // silently ignore
        }

        const [link, ...rest] = body.text.trim().split(/\s+/);
        if (rest.length < 1) {
            return ok(); // silently ignore
        }
        const description = rest.join(" ").trim();

        try {
            new URL(link);
        } catch {
            return ok(); // silently ignore
        }

        if (/@\w+/.test(description)) {
            return ok(); // silently ignore
        }

        const title = await getPageTitle(link);

        const { fileName, markdown } = composeFileText(title, link, description);

        const repo = "tylermercer/personal-website"
        const branch = "main";
        const githubToken = env.GITHUB_CONTENTS_WRITE_TOKEN!;

        const apiUrl = `https://api.github.com/repos/${repo}/contents/posts/${fileName}`;

        const content = await toBase64(markdown);

        const res = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${githubToken}`,
                "Content-Type": "application/json",
                "User-Agent": "astro-handler",
                Accept: "application/vnd.github.v3+json",
            },
            body: JSON.stringify({
                message: `Add post from Mattermost (${body.channel_name})`,
                content,
                branch,
            }),
        });

        if (!res.ok) {
            const err = await res.text();
            return new Response(`GitHub error: ${err}`, { status: 500 });
        }

        return ok();
    } catch (err: any) {
        return new Response(`Server error: ${err.message}`, { status: 500 });
    }
};
