/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

const express = require('express');

const dotenv = require('dotenv');
const logger = require('./utils/loggerHelpers');

dotenv.config();

const app = express();

const movieRoute = require('./api/movie/movieRoute');
// app.use(morgan('dev'));
app.use('/movie', movieRoute);
app.use(express.json());
app.get('/', (req:any, res: any) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});


// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);
logger.warn('Warning Message! %j', {
  addlInfo1: 'Some helpful text',
  addlInfo2: 12345,
  addlInfo3: {
    nestedInfo: 'BAM',
  },
});
logger.info('starting server');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export {};
