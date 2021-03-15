const router = require('express').Router();
const logger = require('../utils/loggerHelpers')

const movieMock = require('../../tests/mocks/movieMock.json');
const discoverMock = require('../../tests/mocks/discoverMock.json');
const trendingMock = require('../../tests/mocks/trendingMock.json');
const searchMock = require('../../tests/mocks/searchMock.json');


router.get('/movie', async (req, res) => {
  res.send(movieMock);
}).get('/panel', async (req, res) => {
  if(req.query.panel === 'popular') {
    res.send(discoverMock);
  } else if (req.query.panel === 'trending') {
    res.send(trendingMock);
  }
}).get('/search', async (req, res) => {
  res.send(searchMock);
});

module.exports = router;
