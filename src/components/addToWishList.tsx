"use client"

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa"; // For the Wishlist icon

const WishlistButton = () => {
  const [wishlistCount, setWishlistCount] = useState(0); // Track the number of items in the wishlist

  // Function to add an item to the wishlist
  const handleAddToWishlist = () => {
    setWishlistCount((prevCount) => prevCount + 1); // Increment wishlist count
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <button onClick={handleAddToWishlist} className="flex items-center gap-2">
        <FaRegHeart className="text-lg text-[#4F4F4F]" /> {/* Wishlist Icon */}
        <span className="text-[#4F4F4F] text-base">Add to Wishlist</span>
      </button>
      {/* Display Wishlist Count */}
      {wishlistCount > 0 && (
        <span className="absolute top-0 right-0 text-xs text-white bg-[#FF9F0D] rounded-full w-4 h-4 flex justify-center items-center">
          {wishlistCount}
        </span>
      )}
    </div>
  );
};

export default WishlistButton;
