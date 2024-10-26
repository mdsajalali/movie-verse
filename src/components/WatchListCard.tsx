import MovieData from "@/data/MovieData";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface WatchListCardProps {
  movie: number;
  handleDelete: (movieId: number) => void;
  watchlist: number[];
  index: number;
}

const WatchListCard = ({
  movie,
  handleDelete,
  watchlist,
  index,
}: WatchListCardProps) => {
  const [movieData, isMovieLoading] = MovieData(movie);

  if (isMovieLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid" />
      </div>
    );
  }

  return (
    <div
      key={watchlist[index]}
      className="mb-10 flex items-center justify-between gap-5 bg-white dark:bg-black/30 p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-5">
        {movieData?.poster_path && (
          <div className="w-[100px]  h-[120px] md:h-[150px] relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={`${movieData?.title} Poster`}
              fill
              className="rounded object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-[18px] md:text-[20px] text-black dark:text-white font-semibold mt-4">
            {movieData?.title}
          </h1>
          <p className="mt-2 text-[14px] md:text-[16px] text-gray-500">
            Release Date: {movieData?.release_date}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleDelete(watchlist[index])}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default WatchListCard;
