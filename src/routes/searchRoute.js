const router = require('express').Router();
const searchEndpoint = require('../endpoints/searchEndpoint');
const logger = require('../utils/loggerHelpers')

const search = searchEndpoint;

router.get('/', async (req, res) => {
  const searchResults = await search.searchMulti({ urlParams: { query: req.query.searchTerm, page: req.query.page }});
  res.send(searchResults);
}).get('/movies', async (req, res) => {
  // const searchResults = await search.searchMulti({ pathParameters: { query: 384018 } });
  logger.info(req);
  // res.send(movieDetails);
});

module.exports = router;
