const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  //eleventyConfig.addPassthroughCopy("img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy('assets');
	eleventyConfig.addPassthroughCopy('content/blog/**/*.png');

  eleventyConfig.addPassthroughCopy('css');

  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  //eleventyConfig.addPassthroughCopy("**/*.jpg");

	// Render templates in different templates formats
	eleventyConfig.addPlugin(EleventyRenderPlugin);

	// Render web components
	eleventyConfig.addPlugin(pluginWebc);

	// Enable syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight);

	// Enable RSS
  eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addWatchTarget("./content/blog/");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"webc",
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		//markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		//htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			//data: "../_data",          // default: "_data"
			output: "_site"
		},
	};
};
