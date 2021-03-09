const router = require('express').Router();
const movieEndpoint = require('../endpoints/movieEndpoint');
const logger = require('../utils/loggerHelpers')

const movie = movieEndpoint;

router.get('/', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
  logger.info(movieDetails);
  res.send(movieDetails);
}).get('/:id', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: req.params.id } });
  res.send(movieDetails);
}).get('/images/:id', async (req, res) => {
  const movieImages = await movie.getImages({ pathParameters: { movie_id: req.params.id } });
  res.send(movieImages);
});

module.exports = router;
