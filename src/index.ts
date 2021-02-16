// import DataController from './DataController';

// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

// export default class TmdbWrapper {
//   public movie = movieEndpoint;
//   public constructor(apiKey: string) {
//     const data = DataController.getInstance();
//     data.set('apiKey', apiKey);
//   }

//   public setApiKey(apiKey: string): void {
//     DataController.getInstance().set('apiKey', apiKey);
//   }

//   public setLanguage(language: string): void {
//     DataController.getInstance().set('language', language);
//   }
// }

// // ES6 Style
// // import MovieDB from 'node-themoviedb';
// const mdb = new TmdbWrapper('test-api-key');
// const movie =  mdb.movie.getDetails(args);
// module.exports = TmdbWrapper;
// module.exports.default = TmdbWrapper;
