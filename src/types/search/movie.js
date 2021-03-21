const typeDefs = `
  input SearchParams {
    page: Int
    include_adult: Boolean
    primary_release_year: Int
    year: Int
    query: String
    region: String
  }

  type SearchResult {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: String
    id: Int
    original_title: String
    original_language: String
    title: String
    backdrop_path: String
    popularity: Int
    vote_count: Int
    video: Boolean
    vote_average: Int
  }

  type SearchResults {
    page: Int
    total_result: Int
    total_pages: Int
    results: [SearchResult]
  }

  extend type Query {
    searchMovies(searchParams: SearchParams): SearchResults 
  }
`;

module.exports = typeDefs;