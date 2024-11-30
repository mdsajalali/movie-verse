export const getAllMovies = async (searchQuery: string, page: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${
        searchQuery ? "search/movie" : "movie/popular"
      }?api_key=0889c6621047b8424affa20b1dd37dcf&query=${searchQuery}&page=${page}`
    );

    const result = await res.json();

    return result;
  } catch {
    throw new Error("Failed to fetch movies");
  }
};

export const getMovieById = async (movieId: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0889c6621047b8424affa20b1dd37dcf`
    );

    const result = await res.json();

    return result;
  } catch {
    throw new Error("Failed to fetch movie");
  }
};

export const getMovieCast = async (movieId: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0889c6621047b8424affa20b1dd37dcf`
    );

    const result = await res.json();

    return result;
  } catch {
    throw new Error("Failed to fetch movie cast");
  }
};

export const getRecommendedMovies = async (movieId: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=0889c6621047b8424affa20b1dd37dcf`
    );

    const result = await res.json();

    return result;
  } catch {
    throw new Error("Failed to fetch recommended movies");
  }
};
