/* eslint-disable consistent-return */
const searchEndpoint = require('../../endpoints/searchEndpoint');
const discoverEndpoint = require('../../endpoints/discoverEndpoint');

const resolvers = {
  Query: {
    searchDiscover: async (obj, args) => {
      try {
        const searchResults = await searchEndpoint.searchMovies(
          { 
            urlParams: { query: args.searchParams.query }
        });
        return searchResults.data;
      } catch(e) {
        console.log(e);
      }
    }
  },
}

module.exports = resolvers;