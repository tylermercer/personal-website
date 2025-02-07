import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.LINK_SERVER_API_URL;
const CHANNEL_IDS = ['code', 'tiizogn38br55pxog8ki67zzta', 'design']; // Replace with actual channel IDs
const OUTPUT_DIR = './src/content/links';
const AUTH_TOKEN = process.env.LINK_SERVER_TOKEN;

async function fetchPosts(channelId) {
    const response = await fetch(`${BASE_URL}/${channelId}/posts?since=${new Date('2025-01-01').getTime()}`, {
        headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` }
    });
    if (!response.ok) {
        console.error(`Failed to fetch posts for channel ${channelId}:`, response.statusText, await response.json());
        return null;
    }
    return response.json();
}

function filterLinks(posts) {
    return Object.values(posts).filter(post => console.log(post.user_id) && post.message.startsWith('http'));
}

function savePostToFile(post, index) {
    const date = new Date(post.create_at).toISOString().split('T')[0];
    const filename = `${date}-${String(index).padStart(3, '0')}.md`;
    const filePath = path.join(OUTPUT_DIR, filename);

    // fs.writeFileSync(filePath, post.message, 'utf-8');
    console.log(`Saved: ${filename}`);
}

async function processChannels() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    let fileIndex = 1;
    
    for (const channelId of CHANNEL_IDS) {
        const data = await fetchPosts(channelId);
        if (!data) continue;
        
        const links = filterLinks(data.posts);
        for (const link of links) {
            savePostToFile(link, fileIndex++);
        }
    }
}

processChannels().catch(console.error);
