const { DateTime } = require("luxon");

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