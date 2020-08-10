var ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export/svelte-food-recommendation-app', // <-- replace yourproject with your repo name
  {
    branch: 'gh-pages',
    repo: 'https://github.com/bgibb95/svelte-food-recommendation-app.git',
    user: {
      name: 'Brendan',
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
