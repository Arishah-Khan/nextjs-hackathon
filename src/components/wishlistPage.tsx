"use client"; 

import { useWishlist } from "@/contexts/wishListContext";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners"; // Import the spinner component
import { useState } from "react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [loading, setLoading] = useState<string | null>(null); // To track which item is being removed

  const handleRemove = (id: string) => {
    setLoading(id); // Set the loading state to the item's id
    removeFromWishlist(id);
    toast.success("Item removed from wishlist!");
    setLoading(null); // Reset loading state after action
  };

  return (
    <div>
      <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen wrapper">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#252B42]">
          Your Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            Your wishlist is empty. Start adding some items!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-4"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-lg">${item.price}</p>
                  
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-md hover:from-red-600 hover:to-pink-600 transition-colors duration-300"
                    disabled={loading === item.id} // Disable the button when loading
                  >
                    {loading === item.id ? (
                      <BeatLoader color="white" size={10} /> // Show spinner when removing
                    ) : (
                      "Remove"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </div>
    </div>
  );
}
