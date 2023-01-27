const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const anchor = require('markdown-it-anchor');
const footnote = require('markdown-it-footnote');
const automaticNoopener = require('eleventy-plugin-automatic-noopener');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const brokenExternalLinks = require("eleventy-plugin-broken-links");
const ogImage = require('eleventy-plugin-og-image');
const fs = require('fs');

module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addPlugin(automaticNoopener, {
      noreferrer: true,
    });
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(ogImage, {
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
        ],
      },
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
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/faustina/files/*latin-{400,700}*.woff2': '/css/files' })

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addFilter("pageScopedStyle", (filePathStem) => {
      var foo = ('/css' + (filePathStem === '/' ? '/index' : filePathStem) + '.css')
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