const lists = require('./lists');
const movie = require('./movie');
const search = require('./search');


const root = `
  type Query {
    root: String
  }
`;

const typeDefs = [root, movie, ...search];
module.exports = { typeDefs };