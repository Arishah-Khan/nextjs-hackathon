"use client";

import { useState } from "react";
import { useWishlist } from "@/contexts/wishListContext"; // Import your context
import { toast } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // For loading spinner

const AddToWishlist = ({
  id,
  name,
  description,
  image,
  price,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}) => {
  const { addToWishlist } = useWishlist(); // Destructure addToWishlist function
  const [loading, setLoading] = useState(false); // Loading state

  const handleAddToWishlist = async () => {
    setLoading(true); // Set loading to true while adding to wishlist

    try {
      // Add to wishlist functionality
      addToWishlist({
        id,
        name,
        description,
        price,
        quantity: 1, // Default quantity for items in wishlist
        imageUrl: image, // Image URL
        inStock: true, // Assuming the item is in stock
        stock: 10, // Adjust stock as needed
      });

      // Show success notification using toast
      toast.success(`${name} added to your wishlist!`);

    } catch (error) {
      // Handle error
      toast.error("Failed to add item to wishlist.");
    } finally {
      setLoading(false); // Stop loading after operation
    }
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="btn btn-primary w-full flex items-center justify-center"
      disabled={loading} // Disable the button while loading
    >
      {loading ? <ClipLoader color="#fff" size={20} /> : "Add to Wishlist"}
    </button>
  );
};

export default AddToWishlist;
