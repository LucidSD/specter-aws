const dotenv = require('dotenv');
const express = require('express');
const logger = require('./utils/loggerHelpers');

dotenv.config();

const run = async() => {
  const app = express();
  const movieRoute = require('./routes/movieRoute');
  const panelRoute = require('./routes/panelRoute');
  app.use(express.json());
  app.use('/panel', panelRoute);
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
  
  // app.use(middlewares.notFound);
  // app.use(middlewares.errorHandler);
}
module.exports = { run };