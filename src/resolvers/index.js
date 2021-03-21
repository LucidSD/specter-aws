const lists = require('./lists');
const movies = require('./movies');
const search = require('./search');

const resolvers = {
  Query: {
    ...movies.Query,
    ...search.Query,
  },
};

module.exports = {
  resolvers
};