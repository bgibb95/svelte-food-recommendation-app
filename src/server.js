import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const basePath = process.env.NODE_ENV === 'development' ? '/' : 'svelte-food-recommendation-app';

polka() // You can also use Express
  .use(basePath, compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
