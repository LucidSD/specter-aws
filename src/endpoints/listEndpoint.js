const createEndpointUrls = require('../utils/createEndPoints');

const endpointUrlBaseURL = 'list';

const endpointUrls = [
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{list_id}`,
    name: 'getList',
  },
  {
    type: 'POST',
    endpoint: `${endpointUrlBaseURL}`,
    name: 'createList',
  },{
    type: 'POST',
    endpoint: `${endpointUrlBaseURL}/{list_id}/add_item`,
    name: 'addMovieToList',
  },
];

module.exports = createEndpointUrls(endpointUrls);
