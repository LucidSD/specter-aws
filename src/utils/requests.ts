const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const request = (url: any) => {
  const baseUrl = 'https://api.themoviedb.org/3/';
  console.log(`calling: ${baseUrl}${url}?api_key=${process.env.API_KEY}`);
  const response = fetch(`${baseUrl}${url}?api_key=${process.env.API_KEY}`);
  return response;
};

export default request;
