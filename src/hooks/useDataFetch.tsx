import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

interface MovieResponse {
  results: Movie[];
}

const useDataFetch = (searchQuery: string) => {
  const [data, setData] = useState<MovieResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${
            searchQuery ? "search/movie" : "movie/popular"
          }?api_key=0889c6621047b8424affa20b1dd37dcf&query=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return data;
};

export default useDataFetch;
