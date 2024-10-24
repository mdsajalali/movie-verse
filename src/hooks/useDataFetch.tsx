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

const useDataFetch = (searchQuery: string, page: number) => {
  const [data, setData] = useState<MovieResponse | null>(null);

  console.log("Data", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${
            searchQuery ? "search/movie" : "movie/popular"
          }?api_key=0889c6621047b8424affa20b1dd37dcf&query=${searchQuery}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (data?.results && result.results.length > 0) {
          result.results = [...data.results, ...result.results];
        }
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error); 
      }
    };

    fetchData();
  }, [searchQuery, page]);

  return data;
};

export default useDataFetch;
