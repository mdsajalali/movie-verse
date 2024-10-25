"use client";

import useMovieFetch from "@/hooks/useMovieFetch";
import useCastFetch from "@/hooks/useCastFetch";
import Image from "next/image";
import useRecommendationFetch from "@/hooks/useRecommendationFetch";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import useWatchlist from "@/store/useWatchlist";
import toast, { Toaster } from "react-hot-toast";

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
    <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center gap-5">
        <div>
          {movie?.poster_path && (
            <Image
              src={posterUrl}
              alt={`${movie?.title} Poster`}
              width={500}
              height={450}
              className="rounded-lg shadow-md"
              layout="responsive"
            />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-4">{movie?.title}</h1>
          <p className="mt-2 text-gray-700">{movie?.overview}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Genres:</h2>
            <div className="flex flex-wrap mt-2">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 mb-2 px-3 py-1 text-sm bg-blue-200 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-gray-500">
            Release Date: {movie?.release_date}
          </p>
          <button
            onClick={handleClick}
            className={`flex items-center my-5 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ${
              alreadyInWatchlist
                ? "bg-red-400"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {!alreadyInWatchlist ? (
              <FaPlus className="mr-2" />
            ) : (
              <FaMinus className="mr-2" />
            )}
            {alreadyInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-2xl font-bold mb-4">Casts</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-5">
          {castData?.cast?.map((cast) => (
            <div key={cast.id} className="flex flex-col items-center">
              {cast.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                  width={80}
                  height={50}
                  className="shadow-md mb-2"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <h2 className="text-sm font-semibold">{cast.name}</h2>
              <p className="text-xs text-gray-600">{cast.character}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Recommended for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {recommendationData?.results?.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={80}
                height={50}
                className="shadow-md mb-2"
                layout="responsive"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
