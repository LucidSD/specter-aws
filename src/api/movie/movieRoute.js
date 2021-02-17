const router = require('express').Router();
const movieEndpoint = require('./movieEndPoint');

const movie = movieEndpoint;

router.get('/', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
  res.json(movieDetails);
}).get('/:id', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: req.params.id } });
  res.send({
    message: movieDetails
  });
}).get('/images/:id', async (req, res) => {
  const movieImages = await movie.getImages({ pathParameters: { movie_id: req.params.id } });
  res.send({
    message: movieImages
  });
});

module.exports = router;
