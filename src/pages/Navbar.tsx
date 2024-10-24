import React from "react";
import { CiDark, CiHeart, CiSearch } from "react-icons/ci";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="border-b">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="flex items-center justify-between py-5">
          <h1 className="text-[18px] md:text-2xl font-semibold cursor-pointer leading-2">
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
            <div>
              <CiDark size={20} className="cursor-pointer text-[#3D4C56]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
