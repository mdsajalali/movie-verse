"use client";
import { envConfig } from "@/config/envConfig";
import { getRecommendedMovies } from "@/services/movies";
import { MovieProps, RecommendationProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Recommendation = ({ movieId }: MovieProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<RecommendationProps[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const result = await getRecommendedMovies(movieId);
      setRecommendations(result.results);
      setIsLoading(false);
    })();
  }, [movieId]);

  return (
    <>
      {recommendations.length > 0 &&
        recommendations?.slice(0, 12).map((movie: RecommendationProps) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="w-full h-[300px] overflow-hidden rounded relative"
          >
            <Image
              src={`${envConfig.baseImageApi}/${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="flex bg-gradient-to-t from-black/60 font-medium to-black/10 w-full h-full py-2 px-2 absolute bottom-0 right-0 items-end gap-1">
              <span className="text-sm text-white">{movie.title}</span>
            </div>
          </Link>
        ))}
      {isLoading &&
        [...Array(12)].map((_, i) => (
          <div
            className="animate-pulse p-2 w-full aspect-[3/4] rounded-sm bg-gray-200 flex flex-col justify-end"
            key={i}
          >
            <div className="h-5 mb-2 bg-gray-300 w-[140px] rounded-sm"></div>
          </div>
        ))}
    </>
  );
};

export default Recommendation;
