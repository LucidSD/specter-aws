/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express = require('express');
import movieEndpoint from './endpoints/movieEndPoint';

const app = express();
app.set('trust proxy', 1);

// app.use(morgan('dev'));
// app.use(helmet());
// app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// app.get('/movie', async (req, res) => {
//   const movie = movieEndpoint;
//   const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
//   res.json(movieDetails);
// });

app.get('/movie/:id', async (req, res) => {
  const movie = movieEndpoint;
  console.log(`movie id: ${req.params.id}`);
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: req.params.id } });
  res.json(movieDetails);
});

// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;
