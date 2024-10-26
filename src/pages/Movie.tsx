"use client";

import { getMovieById } from "@/app/actions/movies";
import useWatchlist from "@/store/useWatchlist";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

interface MovieProps {
  movieId: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genres: Genre[];
}

const Movie = ({ movieId }: MovieProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const watchlist = useWatchlist((state) => state.watchlist);
  const addToWatchlist = useWatchlist((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlist(
    (state) => state.removeFromWatchlist
  );

  const alreadyInWatchlist = watchlist.some((movId) => movId === movieId);

  const handleClick = () => {
    if (!movie) return;

    if (alreadyInWatchlist) {
      removeFromWatchlist(movie.id);
      toast.success("Removed from watchlist!!");
    } else {
      addToWatchlist(movie.id);
      toast.success("Added to watchlist!!");
    }
  };

  useEffect(() => {
    (async () => {
      const result = await getMovieById(movieId);
      setMovie(result);
      setIsLoading(false);
    })();
  }, [movieId]);

  return (
    <>
      <div>
        <div className="w-[300px] h-[400px] overflow-hidden rounded relative">
          {movie?.poster_path && !isLoading && (
            <Image
              src={posterUrl}
              alt={`${movie?.title} Poster`}
              fill
              className="object-cover"
            />
          )}
          {isLoading && (
            <div className="animate-pulse w-full h-full bg-gray-200 rounded-md"></div>
          )}
        </div>
      </div>
      {isLoading && (
        <div className="animate-pulse flex flex-col items-start w-full max-w-xl">
          <div className="h-7 mb-3 w-32 rounded-md bg-gray-200"></div>
          <div className="w-full mb-1.5 h-16 bg-gray-200 rounded-md"></div>
          <div className="w-full mb-5 h-20 bg-gray-200 rounded-md"></div>
          <div className="h-6 mb-3 w-20 rounded-md bg-gray-200"></div>
          <div className="flex gap-2 mb-3">
            <div className="h-6 w-20 rounded-full bg-gray-200"></div>
            <div className="h-6 w-20 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-5 mb-3 w-40 rounded-md bg-gray-200"></div>
          <div className="h-8 mb-3 w-36 rounded-md bg-gray-200"></div>
        </div>
      )}
      {!isLoading && (
        <div>
          <h1 className="text-[20px] md:text-2xl font-bold mt-4 text-black dark:text-white">
            {movie?.title}
          </h1>
          <p className="mt-2 text-gray-700 text-[14px] md:text-[16px] dark:text-white">
            {movie?.overview}
          </p>
          <div className="mt-4">
            <h2 className="text-[18px] md:text-[20px] text-black dark:text-white font-semibold">
              Genres:
            </h2>
            <div className="flex flex-wrap mt-2">
              {movie?.genres?.map((genre: Genre) => (
                <span
                  key={genre.id}
                  className="mr-2 text-black dark:text-white mb-2 px-3 py-1 text-sm dark:bg-black bg-black/10 rounded-full"
                >
                  {genre?.name}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-[14px] md:text-[16px] dark:text-white text-gray-500">
            Release Date: {movie?.release_date}
          </p>
          <button
            onClick={handleClick}
            className={`flex text-[16px] items-center my-5 text-white font-medium py-3 px-4 rounded shadow-md transition duration-300 ${
              alreadyInWatchlist ? "bg-red-500" : "bg-black hover:bg-black/70"
            }`}
          >
            {!alreadyInWatchlist ? (
              <FaPlus size={12} className="mr-2" />
            ) : (
              <FaMinus size={12} className="mr-2" />
            )}
            {alreadyInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      )}
    </>
  );
};

export default Movie;
