/* eslint-disable consistent-return */
const listEndpoint = require('../../endpoints/listEndpoint');

const resolvers = {
  Query: {
    getListById: async (obj, args) => {
      try {
        const response = await listEndpoint.getList({ 
          pathParameters: { 
            movie_id: args.movie_id 
          } 
        })
        return response.data;
      } catch(e) {
        console.log('ERROR!');
      }
    }
  },
  List: {
    createList: (obj, args) => {
      try {
        const response = listEndpoint.create();
        return response.data
      } catch(e) {
        console.log('BOO HOOOOO');
      }
    }
  }
}

module.exports = resolvers;