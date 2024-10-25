import { useState, useEffect } from "react";
export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface CastData {
  cast: CastMember[];
}

const useCastFetch = (movieId: number) => {
  const [cast, setCast] = useState<CastData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0889c6621047b8424affa20b1dd37dcf`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setCast(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  return cast;
};

export default useCastFetch;
