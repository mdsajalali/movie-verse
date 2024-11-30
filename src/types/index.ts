// page params type
export interface PageProps {
  params: {
    id: string;
  };
}

// Movie card type
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieCardProps {
  movie: Movie;
}

// Navbar props
export interface NavbarProps {
  searchQuery: string;
  onSearchChange: (e: string) => void;
  setPage: (num: number) => void;
}

// Watch list props
export interface WatchListCardProps {
  movie: number;
  handleDelete: (movieId: number) => void;
  watchlist: number[];
  index: number;
}

// single movie props
export interface SingleMovieCardProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genres: Genre[];
}

// cast type
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

// movie props
export interface MovieProps {
  movieId: number;
}

// genre props
export interface Genre {
  id: number;
  name: string;
}

// movie props
export interface TMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genres: Genre[];
}

// recommendation props
export interface RecommendationProps {
  id: number;
  title: string;
  poster_path: string | null;
}
