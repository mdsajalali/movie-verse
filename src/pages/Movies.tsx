"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import SearchField from "@/components/SearchField";
import MoviesData from "@/data/MoviesData";
interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const [movies, isLoading] = MoviesData(searchQuery, page);

  if (isLoading && Array.isArray(movies) && movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid"></div>
      </div>
    );
  }

  const handleSearchChange = (t: string) => {
    setSearchQuery(t);
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
            setPage={setPage}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 md:gap-4 place-items-center">
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie as Movie} />
            ))
          ) : (
            <p className="text-black dark:text-white">No movies found</p>
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
