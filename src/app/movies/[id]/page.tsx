"use client";

import avatar from "../../../assets/avatar.png";
import useMovieFetch from "@/hooks/useMovieFetch";
import useCastFetch from "@/hooks/useCastFetch";
import Image from "next/image";
import useRecommendationFetch from "@/hooks/useRecommendationFetch";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import useWatchlist from "@/store/useWatchlist";
import toast from "react-hot-toast";

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

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface Recommendation {
  id: number;
  title: string;
  poster_path: string | null;
}

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const movieId = Number(params.id);
  const movie = useMovieFetch(movieId) as Movie;
  const castData = useCastFetch(movieId) as { cast: Cast[] };
  const recommendationData = useRecommendationFetch(movieId) as {
    results: Recommendation[];
  };

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const watchlist = useWatchlist((state) => state.watchlist);
  const addToWatchlist = useWatchlist((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlist(
    (state) => state.removeFromWatchlist
  );

  const alreadyInWatchlist = watchlist.some((movId) => movId === movieId);

  const handleClick = () => {
    if (alreadyInWatchlist) {
      removeFromWatchlist(movie.id);
      toast.success("Removed from watchlist!!");
    } else {
      addToWatchlist(movie.id);
      toast.success("Added to watchlist!!");
    }
  };

  return (
    <div className="dark:bg-[#201F31] opacity-95">
      <div className="max-w-[1328px]  opacity-95 w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div>
            {movie?.poster_path && (
              <div className="w-[300px] h-[400px]  overflow-hidden rounded relative">
                <Image
                  src={posterUrl}
                  alt={`${movie?.title} Poster`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[20px] md:text-2xl font-bold mt-4 text-black dark:text-white">
              {movie?.title}
            </h1>
            <p className="mt-2 text-gray-700 text-[14px] md:text-[16px]   dark:text-white">
              {movie?.overview}
            </p>
            <div className="mt-4">
              <h2 className="text-[18px] md:text-[20px] text-black dark:text-white font-semibold">
                Genres:
              </h2>
              <div className="flex flex-wrap mt-2">
                {movie?.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 text-black dark:text-white mb-2 px-3 py-1 text-sm dark:bg-black bg-black/10 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2  text-[14px] md:text-[16px] dark:text-white text-gray-500">
              Release Date: {movie?.release_date}
            </p>
            <button
              onClick={handleClick}
              className={`flex text-[16px]  items-center my-5 text-white font-medium py-3 px-4 rounded shadow-md transition duration-300 ${
                alreadyInWatchlist ? "bg-red-500" : "bg-black hover:bg-black/70"
              }`}
            >
              {!alreadyInWatchlist ? (
                <FaPlus size={12} className="mr-2" />
              ) : (
                <FaMinus size={12} className="mr-2" />
              )}
              {alreadyInWatchlist
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-[20px] md:text-2xl font-bold mb-4 text-black dark:text-white">
            Casts
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 md:gap-5">
            {castData?.cast?.map((cast) => (
              <div
                key={cast.id}
                className="flex gap-2  flex-col md:flex-row rounded sm:justify-between justify-center items-center hover:bg-black/20 duration-300 bg-black/10 dark:bg-black pt-3 pb-1 px-4"
              >
                {cast.profile_path ? (
                  <div className="size-14 overflow-hidden rounded-full relative">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                      fill
                      className="shadow-md mb-2 object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12  bg-gray-300 rounded-full flex items-center justify-center mb-2">
                    <div className="size-12 overflow-hidden  relative">
                      <Image
                        src={avatar}
                        alt={cast.name}
                        fill
                        className="shadow-md  object-cover"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h2 className="text-sm font-semibold text-black dark:text-white">
                    {cast.name}
                  </h2>
                  <p className="text-xs   dark:text-white text-gray-600">
                    {cast.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-[20px] md:text-2xl font-bold text-black dark:text-white mb-4">
            Recommended for you
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-4 md:gap-4 place-items-center">
            {recommendationData?.results?.slice(0, 12).map((movie) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
