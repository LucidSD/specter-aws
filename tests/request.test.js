
const {Response} = jest.requireActual('node-fetch');

const movieEndpoint = require('../src/endpoints/movieEndpoint');
const movieMock = require('./mocks/movieMock');

beforeAll(() => jest.spyOn(global, 'fetch'))


it('Testing movie endpoint', async () => {
  global.fetch.mockResolvedValue(Promise.resolve(new Response(JSON.stringify(movieMock))));

  const movie = movieEndpoint;

  const movieDetails = await movie.getDetails({ pathParameters: { movie_id: 384018 } });
  console.log(movieDetails.data);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(movieDetails.data.title).toEqual('The Market: A Tale of Trade');
});


// const discoverEndpoint = require('../src/endpoints/discoverEndpoint');
// const discoverMock = require('./mocks/discoverMock');

// it('testing discover endpoint', async () => {
//   fetch.mockResolvedValue(Promise.resolve(new Response(JSON.stringify(discoverMock))));

//   const discover = discoverEndpoint;

//   const discoverMovies = await discover.getMovies({ query: { sort_by: 'popularity.desc',}});

//   expect(fetch).toHaveBeenCalledTimes(1);
//   expect(discoverMovies.data.results[0].title).toEqual('Space Sweepers');
// });