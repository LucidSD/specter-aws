const dotend = require('dotenv');
const dotenv = require('dotenv');
const parseEndpoint = require('./parseEndpoint');
const request = require('./requests');
const logger = require('./loggerHelpers');

dotenv.config();

const createEndpoint = (type, endpointUrl) => {
  logger.info('creating endpoint...');
  
  return async (options) => {
    const urlParams = new URLSearchParams({
      api_key: process.env.API_KEY
    });
    let response;
    let body;
    let parsedEndpoint;
    if (options.pathParameters) {
      parsedEndpoint = parseEndpoint(endpointUrl, options.pathParameters);
    }
    // logger.debug(JSON.stringify(options.query))
    if(options.urlParams) {
      Object.entries(options.urlParams).forEach(([key, value]) => {
        urlParams.append(key,value)
      })
    }
    
    switch (type) {
      case 'GET': {
        logger.info(`GET REQUEST ${parsedEndpoint} params: ${urlParams.toString()}`);
        response = await request(parsedEndpoint || endpointUrl, urlParams.toString() )
        body = await response.json();
        logger.debug(JSON.stringify(body));
        break;
      }
      default: {
        throw new Error('Not a valid request type');
      }
     
    }
    return {
      data: body,
    };
  };
};

module.exports = (endpoints) => {
  const root = {};
  endpoints.forEach((endpoint) => {
    logger.info(`CREATING ENPOINT FOR ${endpoint.name}`)

    root[endpoint.name] = createEndpoint(endpoint.type, endpoint.endpointUrl);
  });
  return root;
};
