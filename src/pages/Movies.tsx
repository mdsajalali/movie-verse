"use client";

import React, { useState } from "react";
import useDataFetch from "@/hooks/useDataFetch";
import MovieCard from "@/components/MovieCard";
import Navbar from "./Navbar";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const data = useDataFetch(searchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <h1 className="text-[18px] font-medium py-10">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {data?.results && data.results.length > 0 ? (
            data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
