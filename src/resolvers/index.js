const lists = require('./lists');
const movies = require('./movies');

const resolvers = {
  Query: {
    ...movies.Query,
  },
};

module.exports = {
  resolvers
};