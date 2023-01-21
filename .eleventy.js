const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const anchor = require('markdown-it-anchor');

module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    eleventyConfig.addFilter("numCommas", function(value) {
      return value.toLocaleString()
    });

    let markdown = markdownIt({
      html: true,
      typographer: true
    }).use(anchor,  {
      permalink: anchor.permalink.linkInsideHeader({
        class: "heading-anchor",
        symbol: `
          <span class="sr-only">Jump to heading</span>
          <span aria-hidden="true">&para;</span>
        `,
        placement: 'before'
      })
    });
  
    eleventyConfig.setLibrary("md", markdown);

    eleventyConfig.addPassthroughCopy("./src/fonts/*");

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addFilter("pageScopedStyle", (filePathStem) => {
      var foo = ('/css' + (filePathStem === '/' ? '/index' : filePathStem) + '.css')
      console.log(foo)
      return foo
    });

    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };