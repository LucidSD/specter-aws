/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const logger = require('./modules/logger');
const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

const movieRoute = require('./api/movie/movieRoute');
// app.use(morgan('dev'));
app.use('/movie', movieRoute);
app.use(express.json());
// logger.info('test');
app.get('/', (req:any, res: any) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});


// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export {};
