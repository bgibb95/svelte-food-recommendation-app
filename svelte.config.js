// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    scss: true
  })
  // ...other svelte options
};
