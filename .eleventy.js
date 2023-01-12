module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/style.css");
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };