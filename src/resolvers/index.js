const lists = require('./lists');
const movies = require('./movies');
const search = require('./search');
const discover = require('./discover');
const resolvers = {
  Query: {
    ...movies.Query,
    ...search.Query,
    ...discover.Query
  },
};

module.exports = {
  resolvers
};