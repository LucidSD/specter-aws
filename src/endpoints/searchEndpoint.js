const createEndpointUrls = require('../utils/createEndPoints');

const endpointUrlBaseURL = 'search';

const endpointUrls = [
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/movie`,
    name: 'searchMovies',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/tv`,
    name: 'searchTV',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/person`,
    name: 'searchPeople',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/company`,
    name: 'searchCompanies',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/collections`,
    name: 'searchCollections',
  },
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/multi`,
    name: 'searchMulti',
  }
];

module.exports = createEndpointUrls(endpointUrls);
