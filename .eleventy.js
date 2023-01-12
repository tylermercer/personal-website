const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addWatchTarget("./src/sass/");

    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };