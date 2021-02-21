const fetch = require('node-fetch');
const logger = require('./loggerHelpers');

const baseUrl = process.env.TMDB_BASE_URL;

const request = (url, query) => {
  logger.debug(`fetching: ${baseUrl}/${url}}?${query}`);
  return fetch(`${baseUrl}/${url}?${query}`);
};

module.exports = request;
