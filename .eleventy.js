const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const anchor = require('markdown-it-anchor');
const footnote = require('markdown-it-footnote');
const automaticNoopener = require('eleventy-plugin-automatic-noopener');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenExternalLinks = require("eleventy-plugin-broken-links");
const ogImage = require('eleventy-plugin-og-image');
const rss = require('@11ty/eleventy-plugin-rss');
const { EleventyHtmlBasePlugin, EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const fs = require('fs');

const translations = require('./src/_data/i18n');

const BUILD_DRAFTS = !(process.env.NODE_ENV === 'production');

console.log(BUILD_DRAFTS ? "Building Drafts" : "Excluding Drafts");

function rmDir(dirPath, removeSelf) {
  let files;
  try { files = fs.readdirSync(dirPath); }
  catch (e) { return; }
  if (files.length > 0)
    for (let i in files) {
      const filePath = `${dirPath}/${files[i]}`;
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath, true);
    }
  if (removeSelf)
    fs.rmdirSync(dirPath);
}

function localeUrl(url, languageCode) {
  if (!url || !url.startsWith('/')) {
    return url; // Return original URL if it's not internal
  }
  const engCodePattern = /^\/en\//; // Regex pattern for two-letter EN code at the beginning of the string
  const hasEngLanguageCode = engCodePattern.test(url)
  if (hasEngLanguageCode) {
    // Strip language code
    return url.substring(3)
  }
  else {
    const langCodePattern = /^\/[a-z]{2}\//; // Regex pattern for two-letter language code at the beginning of the string
    const hasLanguageCode = langCodePattern.test(url);
    if (hasLanguageCode || !languageCode || languageCode === 'en') {
      return url;
    } else {
      return `/${languageCode}${url}`;
    }
  }
}

module.exports = function (eleventyConfig) {
  /* Constants */
  const now = new Date();

  /* Layout Aliases */
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('feed-rss', 'layouts/feeds/rss.njk');
  eleventyConfig.addLayoutAlias('feed-json', 'layouts/feeds/json.njk');
  eleventyConfig.addLayoutAlias('collection', 'layouts/collection.njk');
  eleventyConfig.addLayoutAlias('not-found', 'layouts/not-found.njk');

  /* Markdown setup */
  let markdown = markdownIt({
    html: true,
    typographer: true
  }).use(anchor, {
    permalink: anchor.permalink.headerLink({
      safariReaderFix: true
    })
  }).use(footnote);
  eleventyConfig.setLibrary("md", markdown);

  /* Custom Collections */
  eleventyConfig.addCollection("category", function (collectionApi) {
    //Order categories by count
    let count = (c) => collectionApi.getFilteredByGlob(`src/${c.page.lang}/posts/${c.data.category}/*`).length;
    return collectionApi
      .getFilteredByTag("category")
      .sort((c1, c2) => count(c2) - count(c1))
  });

  /* Plugins */
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      'es': 'en'
    }
  });
  eleventyConfig.addPlugin(automaticNoopener, {
    noreferrer: true,
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(brokenExternalLinks, { broken: "warn" });
  eleventyConfig.addPlugin(ogImage, {
    generateHTML: (url) => url,
    satoriOptions: {
      fonts: [
        {
          name: 'Figtree',
          data: fs.readFileSync('./node_modules/@fontsource/figtree/files/figtree-all-700-normal.woff'),
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Faustina',
          data: fs.readFileSync('./node_modules/@fontsource/faustina/files/faustina-all-400-normal.woff'),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Faustina',
          data: fs.readFileSync('./node_modules/@fontsource/faustina/files/faustina-all-300-normal.woff'),
          weight: 300,
          style: 'normal',
        },
      ],
    },
  });

  /* Filters and Shortcodes*/

  /* - Utilities*/
  eleventyConfig.addFilter('firstFive', function (collection) {
    return collection.slice(0, 5);
  });
  eleventyConfig.addFilter("trimTrailingIndex", (filePathStem) => {
    return filePathStem.endsWith('/index') ? filePathStem.slice(0, -6) : filePathStem;
  });

  /* - i18n */
  eleventyConfig.addFilter('byLang', function (collection, lang = this.page.lang) {
    return collection.filter(item => item.data.lang === lang);
  });
  eleventyConfig.addFilter("stripDefaultLocale", (path) => {
    return path?.startsWith('/en') ? path.substring(3) : path;
  });

  /* - styles */
  eleventyConfig.addFilter("pageScopedStyle", (filePathStem) => {
    var foo = ('/css' + (filePathStem === '/' ? '/index' : filePathStem.substring(3)) + '.css')
    console.log(foo)
    return foo
  });

  /* - markdown */
  let md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.addFilter("md", (raw) => {
    return raw && md.renderInline(raw);
  });
  eleventyConfig.addFilter("unmd", (raw) => {
    return raw?.replace(/[\*_`]/g, '')
  });

  /* - date and number Formatting */
  eleventyConfig.addFilter("postDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter('dateIso', date => {
    return DateTime.fromJSDate(date).toISO();
  });
  eleventyConfig.addFilter("numCommas", function (value) {
    return value.toLocaleString()
  });

  /* - sharing */
  eleventyConfig.addShortcode("shareLink", function (platform, url, title) {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
        case 'email':
          return `mailto:?body=${encodeURIComponent(`${title}\n${url}`)}`;
      default:
        throw new Error(`Invalid platform: ${platform}`);
    }
  })

  /* Computed Data */
  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      const isDraftOrFuture = (('draft' in data && data.draft !== false) || data.page.date > now);
      if (isDraftOrFuture && !BUILD_DRAFTS) {
        console.log("skipping " + data.title)
        return false;
      }
      return data.permalink;
    }
  });
  eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function () {
    return (data) => {
      // Always exclude from non-watch/serve builds
      const isDraftOrFuture = (('draft' in data && data.draft !== false) || data.page.date > now);
      if (isDraftOrFuture && !BUILD_DRAFTS) {
        console.log("excluding " + data.title)
        return true;
      }

      return data.eleventyExcludeFromCollections;
    }
  });
  eleventyConfig.addGlobalData("eleventyComputed.safeUrl", function() {
    return (data) => data.page.url || data.page.filePathStem || '';
  });

  /* Filesystem */
  eleventyConfig.addPassthroughCopy({ "./public/*": "/" });
  eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/figtree/files/*latin-{400,700}*.woff2': '/css/files' });
  eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/faustina/files/*latin-{300,400,700}*.woff2': '/css/files' });
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.on('eleventy.before', () => {
    rmDir('./dist/og-images'); // empty OG directory
  });

  /* Post-Processing Transforms */
  eleventyConfig.addTransform("addLocaleUrlFilter", function (content) {
    if (this.inputPath.endsWith(".md")) {
      return content.replace(/(<a\s+(?:[^>]*?\s+)?href=(["']))(.*?)(\2)/g, (match, prefix, quote, url) => {
        const localizedUrl = localeUrl(url, this.page.lang);
        return `${prefix}${localizedUrl}${quote}`;
      });
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};