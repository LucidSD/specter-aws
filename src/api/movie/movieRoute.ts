import movieEndpoint from './movieEndPoint';

const router = require('express').Router();
const movie = movieEndpoint;

router.get('/', async (req: any, res: any) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
  res.send(movieDetails);
}).get('/:id', async (req: any, res: any) => {
  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: req.params.id } });
  res.send(movieDetails);
});

module.exports = router;
