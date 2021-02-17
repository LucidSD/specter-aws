const createEndpointUrls = require('../../utils/createEndPoints');

const endpointUrlBaseURL = 'movie';

const endpointUrls = [
  {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/account_states`,
    name: 'getAccountStates',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/alternative_titles`,
    name: 'getAlternativeTitles',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/credits`,
    name: 'getCredits',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/keywords`,
    name: 'getKeywords',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/release_dates`,
    name: 'getReleaseDates',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/videos`,
    name: 'getVideos',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/translations`,
    name: 'getTranslations',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/recommendations`,
    name: 'getRecommendations',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/similar`,
    name: 'getSimilarMovies',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/reviews`,
    name: 'getReviews',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/lists`,
    name: 'getLists',
  }, {
    type: 'POST',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/rating`,
    name: 'rateMovie',
  }, {
    type: 'DELETE',
    endpointUrl: `${endpointUrlBaseURL}/{movie_id}/rating`,
    name: 'deleteRating',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/latest`,
    name: 'getLatest',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/now_playing`,
    name: 'getNowPlaying',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/popular`,
    name: 'getPopular',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/top_rated`,
    name: 'getTopRated',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/upcoming`,
    name: 'getUpcoming',
  }, {
    type: 'GET',
    endpointUrl: `${endpointUrlBaseURL}/changes`,
    name: 'getChangeList',
  },
];

module.exports = createEndpointUrls(endpointUrls);
