const router = require('express').Router();
const movieEndpoint = require('./movieEndPoint');

const movie = movieEndpoint;

router.get('/', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
  res.send(movieDetails);
}).get('/:id', async (req, res) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: req.params.id } });
  res.send(movieDetails);
});

module.exports = router;
