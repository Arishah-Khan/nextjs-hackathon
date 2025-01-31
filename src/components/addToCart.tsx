"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // Loader

export interface ProductCart {
  id: string;
  name: string;
  currency: string;
  description: string;
  image: any;
  price_id: string;
  price: number;
  originalPrice: number;
}

const AddToCart = ({
  id,
  name,
  currency,
  description,
  image,
  price_id,
  price,
}: ProductCart) => {
  const { addItem, handleCartClick, cartDetails, setItemQuantity } =
    useShoppingCart();

  const [currentQuantity, setCurrentQuantity] = useState(() => {
    const existingItem = cartDetails?.[id];
    return existingItem ? existingItem.quantity : 1;
  });

  const [loading, setLoading] = useState(false); // Loader state
  const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

  const incrementQuantity = () => {
    setCurrentQuantity((prev: number) => prev + 1);
  };

  const decrementQuantity = () => {
    setCurrentQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    setLoading(true); // Start loading

    // Check if cartDetails is available
    if (!cartDetails) {
      console.log("Cart not initialized yet.");
      setLoading(false);
      return;
    }

    try {
      const product = {
        name,
        id,
        quantity: currentQuantity,
        description,
        price: price , // Default to originalPrice if price is not available
        currency,
        image: imageUrl,
        sku: price_id,
      };

      const existingItem = cartDetails?.[id];

      if (existingItem) {
        setItemQuantity(id, currentQuantity);
        console.log(`Updated Quantity for ${name}:`, currentQuantity);
      } else {
        addItem(product);
        setItemQuantity(id, currentQuantity);
        console.log("New Product Added to Cart:", product);
      }

      const newPrice = price * currentQuantity; // Use price or originalPrice

      // Show success message with toast
      toast.success(`${name} added to cart! Total Price: $${newPrice.toFixed(2)}`);

      // Open the cart after adding
      setTimeout(() => {
        handleCartClick();
        setLoading(false); // Stop loading after cart opens
      }, 500);
    } catch (error) {
      toast.error("Failed to add item to cart.");
      setLoading(false);
    }
  };

  // To watch for cart changes and update the toast accordingly
  useEffect(() => {
    if (cartDetails) {
      console.log("Cart Details Updated:", cartDetails);
    }
  }, [cartDetails]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex items-center space-x-2 border-[1px] border-black">
          <Button
            onClick={decrementQuantity}
            className="bg-white rounded-none hover:bg-[#FF9F0D] border-r-[1px] border-black text-black w-10"
          >
            -
          </Button>
          <span className="text-xl px-2">{currentQuantity}</span>
          <Button
            onClick={incrementQuantity}
            className="bg-white rounded-none hover:bg-[#FF9F0D] border-l-[1px] border-black text-black w-10"
          >
            +
          </Button>
        </div>
        <div>
          <Button
            onClick={handleAddToCart}
            className="bg-[#FF9F0D] text-white w-full rounded-none border-white border-1 text-base md:text-lg flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <ClipLoader color="#fff" size={20} /> : "Add to Cart"}
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddToCart;
