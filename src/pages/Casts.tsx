"use client";
import { getMovieCast } from "@/app/actions/movies";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [castsData, setCastData] = useState<Cast[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getMovieCast(movieId);
      setCastData(result.cast);
      setLoading(false);
    })();
  }, [movieId]);

  return (
    <>
      {loading &&
        [...Array(10)].map((_, index) => {
          return (
            <div
              className="animate-pulse rounded-md p-3 w-full md:h-[70px] bg-gray-200 flex flex-col md:flex-row justify-between items-center gap-2"
              key={index}
            >
              <div className="size-14 block rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="w-[120px] md:w-[80px] lg:w-[120px] h-4 rounded-sm bg-gray-300"></div>
                <div className="w-[80px] md:w-[60px] lg:w-[80px] h-3.5 rounded-sm bg-gray-300"></div>
              </div>
            </div>
          );
        })}
      {castsData.length > 0 &&
        castsData?.map((cast: Cast) => (
          <div
            key={cast.id}
            className="flex gap-2 flex-col md:flex-row rounded sm:justify-between justify-center items-center hover:bg-black/20 duration-300 bg-black/10 dark:bg-black py-2 px-4"
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
