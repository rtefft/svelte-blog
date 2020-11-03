const sveltePreprocess = require("svelte-preprocess");
const preprocessOptions = {
  sourceMap: true,
  postcss: {
    // require('autoprefixer')()
    plugins: [require("tailwindcss")],
  },
};

module.exports = {
  adapter: "@sveltejs/adapter-static",
  // preproccess https://github.com/sveltejs/language-tools/issues/397
  // tailwind https://github.com/chrisdhanaraj/svelte-tailwind-integration
  // https://dev.to/inalbant/a-simpler-way-to-add-tailwindcss-to-your-svelte-project-11ja
  preprocess: sveltePreprocess(preprocessOptions),
  // Export this to allow rollup.config.js to inherit the same preprocess options.
  preprocessOptions,
};
