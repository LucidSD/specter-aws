const lists = require('./lists');
const movie = require('./movie');
const search = require('./search');
const discover = require('./discover');


const root = `
  type Query {
    root: String
  }
`;

const typeDefs = [root, movie, ...search, discover];
module.exports = { typeDefs };