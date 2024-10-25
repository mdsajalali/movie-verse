import useMovieFetch from "@/hooks/useMovieFetch";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface WatchListCardProps {
  movie: number;
  handleDelete: (movieId: number) => void;
  watchlist: number[];
  index: number;
}

const WatchListCard: React.FC<WatchListCardProps> = ({
  movie,
  handleDelete,
  watchlist,
  index,
}) => {
  const movieData = useMovieFetch(movie);

  return (
    <div
      key={watchlist[index]}
      className="mb-10 flex items-center justify-between gap-5 bg-white dark:bg-black/30 p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-5">
        {movieData?.poster_path && (
          <div className="w-[100px] h-[150px] relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={`${movieData?.title} Poster`}
              fill
              className="rounded object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-[20px] text-black dark:text-white font-semibold mt-4">
            {movieData?.title}
          </h1>
          <p className="mt-2 text-[16px] text-gray-500">
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
