"use client";

import useWatchlist from "@/store/useWatchlist";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiDark, CiHeart, CiLight } from "react-icons/ci";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const watchlist = useWatchlist((state) => state.watchlist);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="border-b dark:border-black/10 bg-white dark:bg-[#201F31]">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between py-5">
          <Link href="/">
            <h1 className="text-[18px] md:text-2xl  font-semibold dark:text-white text-black cursor-pointer leading-tight">
              Movie Verse
            </h1>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/watchlist"
              className="relative flex justify-center items-center"
            >
              <CiHeart
                size={25}
                className="cursor-pointer text-[#3D4C56] dark:text-white"
              />
              {watchlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-[17px] h-[17px] flex items-center justify-center">
                  {watchlist.length}
                </span>
              )}
            </Link>

            <div onClick={toggleTheme} className="cursor-pointer">
              {isDarkMode ? (
                <CiLight size={20} className="text-[#3D4C56] dark:text-white" />
              ) : (
                <CiDark size={20} className="text-[#3D4C56]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
