// const graphql = require('graphql');
const { mockServer, makeExecutableSchema, addMocksToSchema } = require('graphql-tools');
const { graphql } = require('graphql');
const supertest = require('supertest');
const { typeDefs } = require('../src/types');
const { resolvers } = require('../src/resolvers')
const movieMock = require('./mocks/discoverMock.json');
const server = require('../src/app');


// beforeEach((done) => {
//   console.log('hello')
//   run();
// })

afterEach((done) => {
  server.close();
  done();
});

// const movieEndpoint = require('../src/endpoints/movieEndpoint');
// const {Response} = jest.requireActual('node-fetch');

// beforeAll(() => jest.spyOn(global, 'fetch'))

const request = supertest(server);

test('Testing getMovieById', (done) => {
  const movieByIdQuery = `
    query {
      getMovieById(movie_id: 384018) {
        id
        title
      }
    }
  `;
  request
  .post('/graphql')
  .send({query: movieByIdQuery})
  .set('Accept', 'application/graphql')
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.data.getMovieById.id).toEqual('384018');
    done();
  })  
})