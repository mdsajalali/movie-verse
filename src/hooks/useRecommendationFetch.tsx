import { useState, useEffect } from "react";

const useRecommendationFetch = (movieId: number) => {
  interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
  }

  interface RecommendationResponse {
    results: Movie[];
  }

  const [recommendation, setRecommendation] =
    useState<RecommendationResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=0889c6621047b8424affa20b1dd37dcf`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: RecommendationResponse = await response.json();
        setRecommendation(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  return recommendation;
};

export default useRecommendationFetch;
