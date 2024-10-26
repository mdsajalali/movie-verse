import { useQuery } from "@tanstack/react-query";

const CastsData = (movieId: number) => {
  const { data: castsData, isLoading: isCastLoading } = useQuery({
    queryKey: ["castsData", movieId],
    queryFn: async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0889c6621047b8424affa20b1dd37dcf`
      );
      const result = await res.json();

      return result;
    },
  });

  return [castsData?.cast, isCastLoading];
};

export default CastsData;
