import Image from "next/image";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className=" w-full h-[400px] rounded overflow-hidden shadow-lg  ">
      <Link href={`/movies/${movie.id}`} className="relative">
        <div className="w-full h-[300px]  overflow-hidden  relative">
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            className="object-cover  duration-300 ease-in-out  hover:scale-110"
          />
        </div>
        <div className="flex bg-black py-1 px-2 absolute bottom-0 right-0 items-center gap-1  ">
          <MdOutlineStar className="text-[#FFD600]" />
          <span className="text-sm text-white">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </Link>
      <div className="p-4">
        <Link
          href={`/movies/${movie.id}`}
          className="text-[16px] font-bold leading-tight hover:text-red-500 pb-3 transition-colors duration-300 line-clamp-2 dark:text-white text-black"
        >
          {movie.title}
        </Link>
        <p className="text-[12px] text-gray-600 dark:text-white ">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
