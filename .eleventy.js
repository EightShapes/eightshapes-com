const marked = require("marked"),
  stripIndent = require("strip-indent"),
  Nunjucks = require("nunjucks"),
  readingTime = require("eleventy-plugin-reading-time"),
  pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {
  // Nunjucks Filter
  eleventyConfig.addNunjucksFilter("updateobj", function (obj, key, value) {
    if (obj === undefined) {
      obj = {};
    }
    obj[key] = value;
    return obj;
  });

  eleventyConfig.addNunjucksFilter("markdown", function (
    string,
    includeWrapper,
    wrapperClass
  ) {
    var renderedMarkup = marked(stripIndent(string)),
      configWrapperClass = "esds-markdown-wrap",
      configIncludeMarkdownWrapper = false;

    // If includeWrapper is set when the filter is called, use that value, otherwise use config defaults
    includeWrapper =
      typeof includeWrapper === "undefined"
        ? configIncludeMarkdownWrapper
        : includeWrapper;

    // If a wrapperClass is set when the filter is called, use that value, otherwise use config defaults
    wrapperClass =
      typeof wrapperClass === "undefined" ? configWrapperClass : wrapperClass;

    if (includeWrapper) {
      renderedMarkup =
        '<div class="' + wrapperClass + '">' + renderedMarkup + "</div>";
    }

    const env = new Nunjucks.Environment();

    return env.filters.safe(renderedMarkup);
    //   return renderedMarkup;
  });

  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);

  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy({ "src/_scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/_images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/_icons": "icons" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/esds-library/dist": "dependencies",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/esds-library/dist/esds.svg": "icons/esds.svg",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@eightshapes/esds-code-snippet/dist": "dependencies",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@webcomponents/custom-elements/custom-elements.min.js":
      "dependencies/custom-elements.min.js",
  });
  eleventyConfig.addWatchTarget("./templates");
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "numeric", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      // Add a new filter using formatting tokens.
      timeZone: "z",
    },
  });

  eleventyConfig.addCollection("alphabeticalPosts", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        return item.data.title !== undefined && item.url.includes("/articles");
      })
      .sort(function (a, b) {
        return b.data.title - a.data.title;
      });
  });

  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
  };
};
