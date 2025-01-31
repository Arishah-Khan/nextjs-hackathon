"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import CheckPage from "./checkout/check";
import { usePriceContext } from "@/contexts/payment-context";
import { ClipLoader } from "react-spinners"; 

const Checkout = () => {
  type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };

  interface CartDetails {
    [key: string]: Product;
  }

  const [selectedRate, setSelectedRate] = useState<any>(null);
  const [finalTotalPrice, setFinalTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const { cartDetails, totalPrice, clearCart } = useShoppingCart();
  const { setAmount } = usePriceContext();

  useEffect(() => {
    const storedDiscount = localStorage.getItem("cartDiscount");
    console.log("Stored Discount: ", storedDiscount);

    if (storedDiscount) {
      setDiscount(Number(storedDiscount));
    } else {
      setDiscount(0);
    }

    if (totalPrice !== undefined) {
      const finalPrice = Number(totalPrice) - discount;
      console.log("Calculated Final Price: ", finalPrice);
      setAmount(finalPrice); // Store in context

      // Log the value to check if it is being set correctly in context
      console.log("Amount set in context: ", finalPrice);
    }
  }, [totalPrice, discount, setAmount]);

  const router = useRouter();

  // Handle back to cart with loading state
  const backCart = () => {
    setLoading(true); // Set loading to true while navigating
    router.push("/shop/shopping-cart");
  };

  // Use a useEffect hook to disable the loading state when the page is fully loaded
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 500); // Adjust timer as necessary to simulate loading time
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="checkout-container max-w-5xl mx-auto p-2 md:p-6">
      {/* Show loading spinner when page is loading */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#ff9f0d" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Shipping Information */}
          <CheckPage />

          {/* Right Side - Product Details and Total */}
          <div className="product-details">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-4">
              {/* Render the headings once */}
              <div className="flex justify-between font-semibold">
                <div className="w-1/5 text-center">Image</div>
                <div className="w-1/5 text-center">Name</div>
                <div className="w-1/5 text-center">Quantity</div>
                <div className="w-1/5 text-center">Price</div>
                <div className="w-1/5 text-center">Total</div>
              </div>

              {cartDetails &&
                Object.entries(cartDetails || {}).map(([key, product]) => {
                  const item = product as Product;
                  const productTotal = item.quantity * item.price;
                  return (
                    <div key={key} className="flex justify-between items-center">
                      {/* Image Column */}
                      <div className="w-1/5 text-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width="20"
                          height="20"
                          className="w-12 h-12 md:w-16 md:h-16 object-cover"
                        />
                      </div>

                      {/* Name Column */}
                      <div className="w-1/5 text-center">
                        <span className="text-sm md:text-base">{item.name}</span>
                      </div>

                      {/* Quantity Column */}
                      <div className="w-1/5 text-center">
                        <span className="text-sm md:text-base">{item.quantity}</span>
                      </div>

                      {/* Price Column */}
                      <div className="w-1/5 text-center">
                        <span className="text-sm md:text-base">${item.price}</span>
                      </div>

                      {/* Total Column */}
                      <div className="w-1/5 text-center">
                        <span className="text-sm md:text-base">${productTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  );
                })}

              {/* Total Price for All Items */}
              <div className="flex justify-between font-semibold mt-4">
                <div className="w-1/5 text-center">Subtotal</div>
                <div>
                  ${Object.entries(cartDetails || {})
                    .reduce((acc, [key, product]) => {
                      const item = product as Product;
                      return acc + item.quantity * item.price;
                    }, 0)
                    .toFixed(2)}
                </div>
              </div>
            </div>

            {discount > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <p className="font-bold text-black">Discount:</p>
                <p>${discount.toFixed(2)}</p>
              </div>
            )}

            <div className="mt-4 border-t border-gray-300"></div>

            <div className="mt-6 flex justify-between items-center font-bold">
              <p>Total Price:</p>
              <p>${((totalPrice || 0) - discount).toFixed(2)}</p>
            </div>

            <button
              onClick={backCart}
              className="mt-6 w-full bg-[#ff9f0d] text-white py-2 rounded"
            >
              Back To Cart{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
