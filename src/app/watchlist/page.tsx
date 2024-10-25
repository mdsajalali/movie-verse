"use client";

import useWatchlist from "@/store/useWatchlist";
import { toast, Toaster } from "react-hot-toast";
import WatchListCard from "@/components/WatchListCard";

const Page: React.FC = () => {
  const watchlist = useWatchlist((state) => state.watchlist);
  const removeFromWatchlist = useWatchlist(
    (state) => state.removeFromWatchlist
  );

  const handleDelete = (movieId: number) => {
    console.log(`Attempting to delete movie with ID: ${movieId}`);
    removeFromWatchlist(movieId);
    toast.success(`Deleted from watchlist!`);
  };

  return (
    <div className=" dark:bg-[#201F31] opacity-95">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10">
        {watchlist.length > 0 ? (
          watchlist.map((movieId, index) => (
            <WatchListCard
              key={index}
              movie={movieId}
              handleDelete={handleDelete}
              watchlist={watchlist}
              index={index}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No movies in your watchlist.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
