const express = require('express');

const dotenv = require('dotenv');
const logger = require('./utils/loggerHelpers');

dotenv.config();

const app = express();

const movieRoute = require('./api/movie/movieRoute');
// app.use(morgan('dev'));
app.use('/movie', movieRoute);
app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

logger.info('starting server');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Listening: http://localhost:${port}`);
});
