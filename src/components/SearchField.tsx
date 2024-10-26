import { CiSearch } from "react-icons/ci";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (e: string) => void;
  setPage: (num: number) => void;
}

const SearchField = ({ searchQuery, onSearchChange, setPage }: NavbarProps) => {
  return (
    <div>
      <div className="border flex items-center justify-between rounded-md px-2 md:px-4 py-2 md:py-[10px] bg-white">
        <input
          type="text"
          placeholder="Search by title"
          className="text-[12px] md:text-[14px] outline-none w-full"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setPage(1);
          }}
        />
        <CiSearch size={20} className="text-[#3D4C56] cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchField;
