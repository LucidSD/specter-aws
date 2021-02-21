const router = require('express').Router();
const discoverEndpoint = require('../endpoints/discoverEndpoint');


router.get('/', async (req, res) => {
  const discover = discoverEndpoint;
  let results;
  if(req.query.panel === 'popular') {
    // get popular movies
    // get popular tv (for streaming & tv & actor & genre)
    // merge list
    results = await discover.getMovies(
      { 
        query: { 
          sort_by: 'popularity.desc',
          append_to_response: 'images'

        }
      }
    )
    // get popular tv
  }
  res.send(results);
})

module.exports = router;
