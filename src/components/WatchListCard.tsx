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
      className="mb-10 flex items-center justify-between gap-5 bg-white p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-5">
        {movieData?.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={`${movieData?.title} Poster`}
            width={100}
            height={150}
            className="rounded-lg"
            layout="intrinsic"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold mt-4">{movieData?.title}</h1>
          <p className="mt-2 text-gray-500">
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
