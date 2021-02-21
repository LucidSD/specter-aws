const createEndpointUrls = require('../utils/createEndPoints');

const endpointUrlBaseURL = 'discover';

const endpointUrls = [
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/movie`,
    name: 'getMovies',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/tv`,
    name: 'getTV',
  }
];

module.exports = createEndpointUrls(endpointUrls);
