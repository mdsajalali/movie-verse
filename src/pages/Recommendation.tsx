"use client";
import RecommendationData from "@/data/RecommendationData";
import Image from "next/image";
import Link from "next/link";

interface RecommendationProps {
  id: number;
  title: string;
  poster_path: string | null;
}

interface MovieProps {
  movieId: number;
}

const Recommendation = ({ movieId }: MovieProps) => {
  const [recommendationMovie, recIsLoading] = RecommendationData(movieId);

  if (recIsLoading) {
    return (
      <div className="flex items-center  justify-center h-screen">
        <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid" />
      </div>
    );
  }
  return (
    <>
      {recommendationMovie?.slice(0, 12).map((movie: RecommendationProps) => (
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className="w-full h-[300px] overflow-hidden rounded relative"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="flex bg-black py-1 px-2 absolute bottom-0 right-0 items-center gap-1">
            <span className="text-sm text-white">{movie.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Recommendation;
