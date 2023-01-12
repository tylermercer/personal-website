module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

    eleventyConfig.addWatchTarget("./src/sass/");

    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };