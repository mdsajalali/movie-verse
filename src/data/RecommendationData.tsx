import { useQuery } from "@tanstack/react-query";

const RecommendationData = (movieId: number) => {
  const { data: recommendationMovie, isLoading: isRecLoading } = useQuery({
    queryKey: ["recommendationMovie", movieId],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=0889c6621047b8424affa20b1dd37dcf`
      );
      const result = await res.json();

      return result;
    },
  });

  return [recommendationMovie?.results, isRecLoading];
};

export default RecommendationData;
