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

function rmDir(dirPath, removeSelf) {
  let files;
  try { files = fs.readdirSync(dirPath); }
  catch(e) { return; }
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
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addCollection("category", function(collectionApi) {
      //Order categories by count
      let count = (c) => collectionApi.getFilteredByGlob(`src/posts/${c.data.category}/*`).length;
      return collectionApi
            .getFilteredByTag("category")
            .sort((c1, c2) => count(c2) - count(c1))
    });

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

    eleventyConfig.on('eleventy.before', () => {
      rmDir('./dist/og-images'); // empty OG directory
    });

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
    })

    let md = markdownIt({
      html: true,
      breaks: true,
      linkify: true
    })

    eleventyConfig.addFilter("md", (raw) => {
      return raw && md.renderInline(raw);
    })

    eleventyConfig.addFilter("unmd", (raw) => {
      return raw?.replace(/[\*_`]/g, '')
    })

    eleventyConfig.addFilter("postDate", (date) => {
      return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter('dateIso', date => {
      return DateTime.fromJSDate(date).toISO();
    });

    eleventyConfig.addFilter("numCommas", function(value) {
      return value.toLocaleString()
    });

    let markdown = markdownIt({
      html: true,
      typographer: true
    }).use(anchor,  {
      permalink: anchor.permalink.headerLink({
        safariReaderFix: true
      })
    }).use(footnote);
  
    eleventyConfig.setLibrary("md", markdown);

    eleventyConfig.addPassthroughCopy({ "./src/_static/*" : "/" });
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/figtree/files/*latin-{400,700}*.woff2': '/css/files' })
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/faustina/files/*latin-{300,400,700}*.woff2': '/css/files' })

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addFilter("pageScopedStyle", (filePathStem) => {
      var foo = ('/css' + (filePathStem === '/' ? '/index' : filePathStem.substring(3)) + '.css')
      console.log(foo)
      return foo
    });

    eleventyConfig.addPlugin(brokenExternalLinks, { broken: "error" });

    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };