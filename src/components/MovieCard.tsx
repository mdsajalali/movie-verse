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

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="group max-w-xs rounded overflow-hidden shadow-lg  ">
      <Link href={`/movies/${movie.id}`} className="relative">
        <Image
          src={posterUrl}
          alt={movie.title}
          width={400}
          height={200}
          className="object-cover duration-300"
        />
        <div className="flex bg-black py-1 px-2 absolute bottom-0 right-0 items-center gap-1  ">
          <MdOutlineStar className="text-[#FFD600]" />
          <span className="text-sm text-white">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-bold hover:text-blue-500 transition-colors duration-300">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
