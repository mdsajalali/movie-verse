"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import useWatchlist from "@/store/useWatchlist";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";

const Navbar = () => {
  const watchlist = useWatchlist((state) => state.watchlist);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="border-b dark:border-black/10 bg-white dark:bg-[#201F31]">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between py-5">
          <Link href="/">
            <h1 className="text-[18px] md:text-2xl font-semibold dark:text-white text-black cursor-pointer leading-tight">
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
              {isClient && watchlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-[17px] h-[17px] flex items-center justify-center">
                  {watchlist.length}
                </span>
              )}
            </Link>
            {/* Theme switcher */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
