import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"; // For toast notifications
import { ClipLoader } from "react-spinners"; // For spinner loader

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ search, onSearchChange }: SearchBarProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchChange(value); // Update the parent state
    setError(null); // Clear previous errors
    setIsLoading(true); // Show the spinner

    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

      // Example of error handling
      if (value === "error") {
        throw new Error("Search query is invalid");
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message); // Show error toast
    } finally {
      setIsLoading(false); // Hide the spinner
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for foods..."
        value={search}
        onChange={handleSearchChange}
        className="border p-2 rounded-full w-full"
      />
      {isLoading && (
        <div className="absolute right-2 top-2">
          <ClipLoader size={20} color="#3498db" />
        </div>
      )}
      <FiSearch className="absolute right-2 top-2 text-xl text-gray-500" />
    </div>
  );
};

export default SearchBar;
