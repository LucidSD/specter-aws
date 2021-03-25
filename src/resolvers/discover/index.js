const discoverEndpoint = require('../../endpoints/discoverEndpoint');

const resolvers = {
  Query: {
    discoverMovies: async (obj, args) => {
      try {
        const discoverResults = await discoverEndpoint.getMovies(
          { 
            urlParams: args.searchParams
          }
        );
        return discoverResults.data;
      } catch(e) {
        console.log(e);
      }
    }
  },
}

module.exports = resolvers;