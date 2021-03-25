/* eslint-disable consistent-return */
const searchEndpoint = require('../../endpoints/searchEndpoint');

const resolvers = {
  Query: {
    searchMovies: async (obj, args) => {
      try {
        const searchResults = await searchEndpoint.searchMovies(
          { 
            urlParams: args.searchParams
        });
        return searchResults.data;
      } catch(e) {
        console.log(e);
      }
    }
  },
}

module.exports = resolvers;