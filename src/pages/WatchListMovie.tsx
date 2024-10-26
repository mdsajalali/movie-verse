"use client";

import useWatchlist from "@/store/useWatchlist";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import WatchListCard from "@/components/WatchListCard";

const WatchListMovie = () => {
  const watchlist = useWatchlist((state) => state.watchlist);
  const removeFromWatchlist = useWatchlist(
    (state) => state.removeFromWatchlist
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDelete = (movieId: number) => {
    removeFromWatchlist(movieId);
    toast.success(`Deleted from watchlist!`);
  };

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid" />
      </div>
    );
  }

  return (
    <>
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
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full size-12 border-t-4 border-red-500 border-solid" />
        </div>
      )}
    </>
  );
};

export default WatchListMovie;
