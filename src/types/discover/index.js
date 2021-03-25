const typeDefs = `
  input DiscoverSearchParams {
    # language:
    # region:
    sort_by: String
    # certification_country:
    # certification: String
    # certification:.lte: String
    # certification:.gte: String
    # include_adult: Boolean
    # include_video: Boolean
    # page: Int
    # primary_release_year:
    # primary_release_date:.gte
    # primary_release_date:.lte
    # release_date:.gte
    # release_date:.lte
    # optional:
    # with_release_type:
    # year:
    # vote_count:.gte
    # integer:
    # vote_count:.lte
    # vote_average:.gte
    # vote_average:.lte
    # with_cast:
    # with_crew:
    # with_people:
    # with_companies: [String]
    # with_genres: [String]
    # without_genres: [String]
    # with_keywords: [String]
    # without_keywords: [String]
    # with_runtime:.gte
    # optional:
    # with_runtime:.lte: 
    # with_original_language:
    # with_watch_providers:
    # watch_region:
  }

  extend type Query {
    discoverMovies(searchParams: DiscoverSearchParams): SearchResults 
  }
`;
module.exports = typeDefs;