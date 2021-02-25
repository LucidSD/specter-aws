const createEndpointUrls = require('../utils/createEndPoints');

const endpointUrlBaseURL = 'trending';

const endpointUrls = [
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{media_type}/{time_window}`,
    name: 'getTrending'
  },
];

module.exports = createEndpointUrls(endpointUrls);
