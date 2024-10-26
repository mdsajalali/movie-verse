import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
}

const MoviesData = (searchQuery: string, page: number) => {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const { isLoading } = useQuery({
    queryKey: ["movies", searchQuery, page],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          searchQuery ? "search/movie" : "movie/popular"
        }?api_key=0889c6621047b8424affa20b1dd37dcf&query=${searchQuery}&page=${page}`
      );
      const result = await res.json();
      if (result.results?.length > 0) {
        if (searchQuery && page === 1) {
          setMovieData(result.results);
        } else {
          setMovieData([...movieData, ...result.results]);
        }
      }

      return result;
    },
  });

  return [movieData, isLoading];
};

export default MoviesData;
