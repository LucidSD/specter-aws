const dotenv = require('dotenv');
const express = require('express');
const ExpressRedisCache = require('express-redis-cache')
const logger = require('./utils/loggerHelpers');

dotenv.config();

// const cache = ExpressRedisCache({
//   expire: 30, // optional: expire every 10 seconds
// })

const run = async () => {
  const app = express();
  const movieRoute = require('./routes/movieRoute');
  const panelRoute = require('./routes/panelRoute');
  const testRoute = require('./routes/testRoute')
  app.use(express.json());
  // app.use('/panel',  cache.route(), panelRoute);
  // app.use('/movie',  cache.route(), movieRoute);
  
  app.use('/panel', panelRoute);
  app.use('/movie', movieRoute);
  app.use('/test', testRoute);
  // app.get('/', greet);

  logger.info('starting server');
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(`Listening: http://localhost:${port}`);
  });

  // app.use(morgan('dev'));
  
  // app.use(middlewares.notFound);
  // app.use(middlewares.errorHandler);
}
module.exports = { run };