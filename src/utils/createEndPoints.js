const parseEndpoint = require('./parseEndpoint');
const request = require('./requests');
const logger = require('../utils/loggerHelpers');

const createEndpoint = function (type, endpointUrl) {
  logger.debug('creating endpoint...');
  return async (options) => {
    let response;
    let parsedEndpoint;
    if (options.pathParameters) {
      parsedEndpoint = parseEndpoint(endpointUrl, options.pathParameters);
    }
    // eslint-disable-next-line default-case
    switch (type) {
      case 'GET': {
        logger.debug(`GET REQUEST ${parsedEndpoint}`);
        response = await request(parsedEndpoint)
          .then((res) => res.json());
        break;
      }
    }
    return {
      data: response,
    };
  };
};

module.exports = (endpoints) => {
  const root = {};
  endpoints.forEach((endpoint) => {
    root[endpoint.name] = createEndpoint(endpoint.type, endpoint.endpointUrl);
  });
  return root;
};
