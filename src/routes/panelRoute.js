const router = require('express').Router();

const discover = require('../endpoints/discoverEndpoint');
const trending = require('../endpoints/trendingEndpoint');


router.get('/', async (req, res) => {
  let results;
  if(req.query.panel === 'popular') {
    // get popular movies
    // get popular tv (for streaming & tv & actor & genre)
    // merge list
    results = await discover.getMovies(
      { 
        urlParams: { 
          sort_by: 'popularity.desc',
          append_to_response: 'images'
        }
      }
    )
    // get popular tv
  } else if(req.query.panel === 'trending') {
    results = await trending.getTrending(
      { 
        pathParameters: { 
          media_type: 'all',
          time_window: 'day'
        }
      }
    )
  }
  res.send(results);
})

module.exports = router;
