import { envConfig } from "@/config/envConfig";

// Utility function to filter out movies by excluded genres
const filterExcludedGenres = (
  movies: { genre_ids: number[] }[],
  excludedGenres: number[]
) => {
  return movies?.filter(
    (movie) =>
      !movie.genre_ids.some((genreId) => excludedGenres.includes(genreId))
  );
};

export const getAllMovies = async (searchQuery: string, page: number) => {
  try {
    const res = await fetch(
      `${envConfig.baseApi}/${
        searchQuery ? "search/movie" : "movie/popular"
      }?api_key=0889c6621047b8424affa20b1dd37dcf&query=${searchQuery}&page=${page}`
    );

    const result = await res.json();

    // Filter out romantic and drama movies
    const filteredMovies = filterExcludedGenres(result.results, [10749, 18]);

    return { ...result, results: filteredMovies };
  } catch {
    throw new Error("Failed to fetch movies");
  }
};

export const getMovieById = async (movieId: number) => {
  try {
    const res = await fetch(
      `${envConfig.baseApi}/movie/${movieId}?api_key=0889c6621047b8424affa20b1dd37dcf`,
      { cache: "no-store" }
    );

    const result = await res.json();

    return result; // No filtering needed for single movie fetch
  } catch {
    throw new Error("Failed to fetch movie");
  }
};

export const getMovieCast = async (movieId: number) => {
  try {
    const res = await fetch(
      `${envConfig.baseApi}/movie/${movieId}/credits?api_key=0889c6621047b8424affa20b1dd37dcf`
    );

    const result = await res.json();

    return result; // No filtering needed for cast details
  } catch {
    throw new Error("Failed to fetch movie cast");
  }
};

export const getRecommendedMovies = async (movieId: number) => {
  try {
    const res = await fetch(
      `${envConfig.baseApi}/movie/${movieId}/recommendations?api_key=0889c6621047b8424affa20b1dd37dcf`
    );

    const result = await res.json();

    // Filter out romantic and drama movies
    const filteredMovies = filterExcludedGenres(result.results, [10749, 18]);

    return { ...result, results: filteredMovies };
  } catch {
    throw new Error("Failed to fetch recommended movies");
  }
};
