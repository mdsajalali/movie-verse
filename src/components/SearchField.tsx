import { NavbarProps } from "@/types";
import { CiSearch } from "react-icons/ci";

const SearchField = ({ searchQuery, onSearchChange, setPage }: NavbarProps) => {
  return (
    <div>
      <div className="border flex items-center dark:border-[#111] justify-between rounded-md px-2 md:px-4 py-2 md:py-[10px] bg-white dark:bg-[#333] dark:text-white">
        <input
          type="text"
          placeholder="Search by title"
          className="text-[12px] md:text-[14px] outline-none w-full bg-transparent"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setPage(1);
          }}
        />
        <CiSearch
          size={20}
          className="text-[#3D4C56] dark:text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchField;
