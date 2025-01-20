// components/SearchBar.tsx
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ search, onSearchChange }: SearchBarProps) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Product By Name"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-3 pr-12 border border-[#E0E0E0] placeholder-[#E0E0E0] text-black focus:border-gray-300 focus:ring-gray-300 focus:ring-1 focus:outline-none"
        />
        <div className="bg-[#FF9F0D] absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12">
          <FiSearch className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
