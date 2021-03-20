const lists = require('./lists');
const movies = require('./movies');


const root = `
  type Query {
    root: String
  }
`;

const typeDefs = [root, movies];
module.exports = { typeDefs };