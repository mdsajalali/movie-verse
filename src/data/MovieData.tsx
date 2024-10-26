import { useQuery } from "@tanstack/react-query";

const MovieData = (movieId: number) => {
  const { data: movie, isLoading: isMovieLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0889c6621047b8424affa20b1dd37dcf`
      );
      const result = await res.json();

      return result;
    },
  });

  return [movie, isMovieLoading];
};

export default MovieData;
