import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: { id: number; name: string }[];
}

const useMovieFetch = (movieId: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=0889c6621047b8424affa20b1dd37dcf`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Movie = await response.json();
        setMovie(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  return movie;
};

export default useMovieFetch;
