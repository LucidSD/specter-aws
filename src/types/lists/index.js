const typeDefs = `
  input ListItem {
    id: ID!
    movie_id: Int!
  }
  type List {
    id: ID!
    created_by: String!
    description: String
    favorite_count: Int
    results: [Movie]!
    item_count: Int!
    name: String!
    poster_path: String
  }
  input ListFields {
    name: String!
    description: String
  }
  input EditListParameters {
    items: [ListItem]
  }
  extend type Query {
    getListById(id: ID!): List
  }
  type Mutation {
    createList(id: ID, fields: ListFields!): List
    addMovieToList(id: ID!, params: EditListParameters!): List
  }
`;

module.exports = typeDefs;