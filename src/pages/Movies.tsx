"use client";

import { getAllMovies } from "@/services/movies";
import MovieCard from "@/components/MovieCard";
import SearchField from "@/components/SearchField";
import { useEffect, useState } from "react";
import { Movie } from "@/types";

const Movies = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      if (movies.length === 0) setLoading(true);
      const result = await getAllMovies(searchQuery, page);

      if (page === 1) {
        setMovies(result.results);
      } else {
        setMovies([...movies, ...result?.results]);
      }

      setTotalPages(result.total_pages);

      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);

  const handleSearchChange = (t: string) => {
    setSearchQuery(t);
  };

  return (
    <div className="bg-white dark:shadow dark:bg-[#201F31] opacity-95">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between gap-5">
          <div className="py-10 flex flex-col items-start gap-2">
            <h1 className="text-[20px] md:text-2xl text-black dark:text-white font-bold">
              Movies
            </h1>
            <p className="dark:text-gray-200 text-xs sm:text-base text-[#848484]">
              Showing {page} pages of {totalPages}
            </p>
          </div>

          <SearchField
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            setPage={setPage}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 md:gap-4 place-items-center">
          {loading &&
            movies.length === 0 &&
            [...Array(10)].map((_, i) => (
              <div
                className="animate-pulse p-3 w-full aspect-[3/4] rounded-sm bg-gray-200 flex flex-col justify-end"
                key={i}
              >
                <div className="h-6 mb-2 bg-gray-300 w-[140px] rounded-sm"></div>
                <div className="h-4 bg-gray-300 w-[80px] rounded-sm"></div>
              </div>
            ))}
          {!loading &&
            movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie as Movie} />
            ))}
          {!loading && movies.length === 0 && (
            <p className="text-black dark:text-white">No movies found</p>
          )}
        </div>
        <div className="flex justify-center pt-10 pb-16">
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-300 transition duration-300"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
