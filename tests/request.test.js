// const graphql = require('graphql');
const { mockServer, makeExecutableSchema, addMocksToSchema } = require('graphql-tools');
const { graphql } = require('graphql');
const supertest = require('supertest');
// const { typeDefs } = require('../src/types');
// const { resolvers } = require('../src/resolvers')
// const movieMock = require('./mocks/discoverMock.json');
const server = require('../src/server');

// const request = require('../src/utils/requests');


// beforeEach((done) => {
//   console.log('hello')
//   run();
// })

afterAll((done) => {
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
  .set('Accept', 'application/json')
  .expect(200)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    expect(res.body.data.getMovieById.id).toEqual('384018');
    done();
  })  
})

test('Testing searching for "Braing Damage"', (done) => {
  const searchMovieQuery = `
    query {
      searchMovies(searchParams: {query: "AVA", page: 1}) {
        results {
          id
          title
          release_date
        }
      }
    }
  `;
  request
  .post('/graphql')
  .send({query: searchMovieQuery})
  .set('Accept', 'application/json')
  .expect(200)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    expect(res.body.data.searchMovies.results[0].title).toEqual('Ava');
    done();
  })  
})