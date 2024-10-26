"use client";
import CastsData from "@/data/CastsData";
import Image from "next/image";
import avatar from "../assets/avatar.png";

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface MovieProps {
  movieId: number;
}

const Casts = ({ movieId }: MovieProps) => {
  const [castsData, isCastLoading] = CastsData(movieId);

  if (isCastLoading) {
    return (
      <div className="flex items-center   justify-center h-screen">
        <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid" />
      </div>
    );
  }
  return (
    <>
      {castsData?.map((cast: Cast) => (
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
    </>
  );
};

export default Casts;
