const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const request = (url) => {
  const baseUrl = 'https://api.themoviedb.org/3/';
  const response = fetch(`${baseUrl}${url}?api_key=${process.env.API_KEY}`);
  return response;
};

module.exports = request;
