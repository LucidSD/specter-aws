const dotenv = require('dotenv');
const fetch = require('node-fetch');
const logger = require('./loggerHelpers');

const baseUrl = process.env.TMDB_BASE_URL;
dotenv.config();

const request = (url) => {
  
  logger.debug(`${baseUrl}${url}?api_key=${process.env.API_KEY}`);
  const response = fetch(`${baseUrl}/${url}?api_key=${process.env.API_KEY}`);
  return response;
};

module.exports = request;
