const createEndpoints = require('../../utils/createEndPoints');

const endpointBaseURL = 'movie';

const endpoints = [
  {
    type: 'GET',
    endpointUrl: `${endpointBaseURL}/{movie_id}`,
    name: 'getDetails',
  },
];

module.exports = createEndpoints(endpoints);
