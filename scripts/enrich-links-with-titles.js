import fetch from 'node-fetch';
import { load as loadHTML } from 'cheerio';
import matter from 'gray-matter';


import fs from 'fs/promises';
import path from 'path';

/**
 * Fills missing titles in markdown files using <title> from their link URL.
 * @param {string[]} markdownFiles - Array of Markdown file contents
 * @returns {Promise<string[]>} - Updated Markdown file contents
 */
async function fillMissingTitles(markdownFiles) {
  const updatedFiles = [];

  for (const content of markdownFiles) {
    const parsed = matter(content);
    const { title, link } = parsed.data;

    if (!title && link) {
      try {
        console.log(`Fetching title for ${link}`);
        const response = await fetch(link);
        const html = await response.text();

        const $ = loadHTML(html);
        const docTitle = $('title').first().text().trim();

        if (docTitle) {
          parsed.data.title = docTitle;
          const updated = matter.stringify(parsed.content, parsed.data);
          updatedFiles.push(updated);
          continue;
        }
      } catch (err) {
        console.error(`Failed to fetch title from ${link}:`, err);
      }
    }

    // If no changes needed or fetch failed
    updatedFiles.push(content);
  }

  return updatedFiles;
}

const dir = './src/content/links'; // Folder with your .md files
const filenames = await fs.readdir(dir);
const markdownFiles = await Promise.all(
  filenames.map(f => fs.readFile(path.join(dir, f), 'utf8'))
);

const updatedFiles = await fillMissingTitles(markdownFiles);

// Write back to disk
await Promise.all(updatedFiles.map((content, i) =>
  fs.writeFile(path.join(dir, filenames[i]), content)
));

console.log('Titles updated where needed.');
