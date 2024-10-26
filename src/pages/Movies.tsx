"use client";

import React, { useState } from "react";
import useDataFetch from "@/hooks/useDataFetch";
import MovieCard from "@/components/MovieCard";
import SearchField from "@/components/SearchField";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const data = useDataFetch(searchQuery, page);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="bg-white dark:shadow dark:bg-[#201F31] opacity-95">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-[20px] md:text-2xl  text-black dark:text-white font-bold  py-10">
            Movies
          </h1>

          <SearchField
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 md:gap-4 place-items-center">
          {data?.results && data.results.length > 0 ? (
            data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="  text-black dark:text-white">No movies found</p>
          )}
        </div>
        <div className="flex justify-center pt-10 pb-16">
          <button
            onClick={() => setPage(page + 1)}
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-300 transition duration-300"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
