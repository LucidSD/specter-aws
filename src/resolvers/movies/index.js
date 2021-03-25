/* eslint-disable consistent-return */
const movieEndpoint = require('../../endpoints/movieEndpoint');
const logger = require('../../utils/loggerHelpers');

const resolvers = {
  Query: {
    movie: async (obj, args) => {
      try {
        
        const movieDetails = await movieEndpoint.getDetails(
          { 
            pathParameters: { 
              movie_id: args.movie_id,
            },
            urlParams: { 
              append_to_response: args.appendToResponse || ''
            }
        });
        return movieDetails.data;
      } catch(e) {
        console.log(e);
      }
    }
  },
  // Movie: {
  //   credit: async (parent, args) => {
  //     const movieDetails = await movieEndpoint.getDetails(
  //       { 
  //         pathParameters: { 
  //           movie_id: args.movie_id,
  //         },
  //         urlParams: { 
  //           append_to_response: 'videos'
  //         }
  //     });
  //     return movieDetails.data;
  //   },
  // }
}

module.exports = resolvers;