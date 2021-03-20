/* eslint-disable consistent-return */
const movieEndpoint = require('../../endpoints/movieEndpoint');

const resolvers = {
  Query: {
    getMovieById: async (obj, args) => {
      try {
        const movieDetails = await movieEndpoint.getDetails(
          { 
            pathParameters: { movie_id: 384018 }
        });
        return movieDetails.data;
      } catch(e) {
        console.log(e);
      }
    }
  },
  // List: {
  //   createList: (obj, args) => {
  //     try {
  //       const response = listEndpoint.create();
  //       return response.data
  //     } catch(e) {
  //       console.log('BOO HOOOOO');
  //     }
  //   }
  // }
}

module.exports = resolvers;