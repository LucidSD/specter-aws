const parseEndpoint = require('./parseEndpoint');
const request = require('./requests');
const logger = require('./loggerHelpers');

const createEndpoint = (type, endpointUrl) => {
  logger.info('creating endpoint...');
  return async (options) => {
    let response;
    let responseJSON;
    let parsedEndpoint;
    if (options.pathParameters) {
      parsedEndpoint = parseEndpoint(endpointUrl, options.pathParameters);
    }
    // eslint-disable-next-line default-case
    switch (type) {
      case 'GET': {
        logger.debug(`GET REQUEST ${parsedEndpoint}`);
        response = await request(parsedEndpoint)
        responseJSON = await response.json();
        break;
      }
    }
    return {
      data: responseJSON,
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
