const logger = require('./utils/loggerHelpers');
const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const run = async() => {
  const app = express();
  const movieRoute = require('./api/movie/movieRoute');

  app.use(express.json());
  app.use('/movie', movieRoute);

  app.get('/', (req, res) => {
    res.json({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
  });

  logger.info('starting server');
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(`Listening: http://localhost:${port}`);
  });

  
  
  // app.use(morgan('dev'));
  

  // app.use('/api/v1', api);

  // app.use(middlewares.notFound);
  // app.use(middlewares.errorHandler);
}
module.exports = { run };