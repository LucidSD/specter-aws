interface Movie {
  getDetails(args: Movie.GetDetails): Movie[];
}

namespace Movie {
  interface Common {
    pathParameters: {
      movie_id: number | string;
    };
  }
  interface GetDetails extends Common {
    query?: {
      append_to_response?: string;
    };
  }
}

declare class MovieDB {
  public movie: Movie;
}

export = MovieDB;
