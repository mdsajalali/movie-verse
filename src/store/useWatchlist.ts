import { create } from "zustand";

interface WatchlistState {
  watchlist: number[];
  addToWatchlist: (movieId: number) => void;
  removeFromWatchlist: (movieId: number) => void;
}

const useWatchlist = create<WatchlistState>((set) => {
  const initialWatchlist: number[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("watchlist") || "[]") || []
      : [];

  return {
    watchlist: initialWatchlist,
    addToWatchlist: (movieId) => {
      set((state) => {
        const newWatchlist = [...state.watchlist, movieId];
        if (typeof window !== "undefined") {
          localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
        }
        return { watchlist: newWatchlist };
      });
    },
    removeFromWatchlist: (movieId) => {
      set((state) => {
        const newWatchlist = state.watchlist.filter((id) => id !== movieId);
        if (typeof window !== "undefined") {
          localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
        }
        return { watchlist: newWatchlist };
      });
    },
  };
});

export default useWatchlist;
