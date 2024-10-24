import React, { useEffect, useState } from "react";
import { CiDark, CiHeart, CiLight, CiSearch } from "react-icons/ci";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, onSearchChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <div className="border-b bg-white dark:bg-black">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between py-5">
          <h1 className="text-[18px] md:text-2xl  font-semibold cursor-pointer leading-2">
            Movie Verse
          </h1>
          <div>
            <div className="border flex items-center justify-between rounded-md px-2 md:px-4 py-2 md:py-[10px] bg-white">
              <input
                type="text"
                placeholder="Search by title"
                className="text-[12px] md:text-[14px] outline-none w-full"
                value={searchQuery}
                onChange={onSearchChange}
              />
              <CiSearch size={20} className="text-[#3D4C56] cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div>
              <CiHeart size={20} className="cursor-pointer text-[#3D4C56]" />
            </div>
            <div onClick={toggleTheme} className="cursor-pointer">
              {isDarkMode ? (
                <CiLight size={20} className="text-[#3D4C56]" />
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
