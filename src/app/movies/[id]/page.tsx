"use client";

import React from "react";
import useMovieFetch from "@/hooks/useMovieFetch";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const movie = useMovieFetch(Number(params.id));
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  console.log("movie", movie);

  return (
    <div className="max-w-[1328px] w-full flex items-center gap-5 py-10 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
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
      </div>
    </div>
  );
};

export default Page;
