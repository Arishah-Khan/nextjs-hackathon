"use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useShoppingCart } from "use-shopping-cart";
// import { useState } from "react";
// import { Button } from "./ui/button";
// import DiscountSection from "./ui/discount";

// type CartProduct = {
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const ShoppingCartPage = () => {
//   const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } =
//     useShoppingCart();
//   const typedCartDetails = cartDetails as Record<string, CartProduct>;
//   const [couponCode, setCouponCode] = useState<string>("");
//   const [discount, setDiscount] = useState<number>(0);

//   const router = useRouter();

//   const handleCheckout = () => {
//     router.push("/check-out");
//   };

//   // Handle coupon application
//   const handleCouponApply = () => {
//     if (couponCode === "DISCOUNT10") {
//       setDiscount(0.1);
//     } else if (couponCode === "DISCOUNT20") {
//       setDiscount(0.2); // 20% discount
//     } else if (couponCode === "DISCOUNT30") {
//       setDiscount(0.3);
//     } else {
//       setDiscount(0);
//       alert("Invalid coupon code!");
//     }
//   };

//   return (
//     <div className="container mx-auto px-2 md:px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

//       {cartCount === 0 ? (
//         <p className="text-lg text-gray-500">
//           You do not have any items in your cart.
//         </p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b text-sm sm:text-base">
//                 <th className="px-2 sm:px-4 py-2 text-left">Product</th>
//                 <th className="px-2 sm:px-4 py-2 text-left">Price</th>
//                 <th className="px-2 sm:px-4 py-2 text-left">Quantity</th>
//                 <th className="px-2 sm:px-4 py-2 text-left">Total</th>
//                 <th className="px-2 sm:px-4 py-2 text-left">Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {typedCartDetails &&
//                 Object.entries(typedCartDetails).map(([key, product]) => (
//                   <tr key={key} className="border-b">
//                     <td className="md:px-4 py-2 flex items-center md:gap-2">
//                       <Image
//                         src={product.image || "/images/placeholder.png"}
//                         alt={product.name}
//                         width={60}
//                         height={60}
//                       />
//                       <div className="flex flex-col justify-start items-start gap-2">
//                         <div className="text-xs sm:text-sm">{product.name}</div>
//                       </div>
//                     </td>
//                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
//                       $ {product.price}
//                     </td>
//                     <td className="px-2 md:px-4 py-2">
//                       <div className="flex items-center justify-center">
//                         <Button
//                           onClick={() =>
//                             setItemQuantity(key, product.quantity - 1)
//                           }
//                           className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black w-8"
//                         >
//                           -
//                         </Button>
//                         <span className="text-xl border-t-[1px] border-b-[1px] border-black px-2 py-[4px]">{product.quantity}</span>
//                         <Button
//                           onClick={() =>
//                             setItemQuantity(key, product.quantity + 1)
//                           }
//                           className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black w-8"
//                         >
//                           +
//                         </Button>
//                       </div>
//                     </td>
//                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
//                       $ {(product.price * product.quantity).toFixed(2)}
//                     </td>
//                     <td className="px-4 py-2">
//                       <button
//                         onClick={() => removeItem(key)}
//                         className="text-red-500 hover:text-red-700 text-center"
//                       >
//                         x
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Coupon and Total Section */}
//       <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
//         {/* Discount Section */}
//         <DiscountSection
//           couponCode={couponCode}
//           setCouponCode={setCouponCode}
//           handleCouponApply={handleCouponApply}
//         />

//         {/* Total Section */}
//         <div className="flex flex-col text-right justify-center md:w-[500px]">
//           <h2 className="text-xl text-start font-bold">Total Bill</h2>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium text-start">Subtotal:</span>
//             <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
//           </div>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium">Discount:</span>
//             <span className="ml-4">
//               ${((totalPrice || 0) * discount).toFixed(2)}
//             </span>
//           </div>
//           <div className="mt-4 font-bold text-2xl text-start">
//             <span>Total:</span>
//             <span className="ml-4">
//               ${((totalPrice || 0) - (totalPrice || 0) * discount).toFixed(2)}
//             </span>
//           </div>
//           <div className="mt-6 flex justify-center bg-[#FF9F0D]">
//             <button
//               onClick={handleCheckout}
//               className="text-white px-6 py-3 rounded-lg text-xl"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCartPage;


import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import DiscountSection from "./ui/discount";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CartProduct = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const ShoppingCartPage = () => {
  const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } =
    useShoppingCart();
  const typedCartDetails = cartDetails as Record<string, CartProduct>;
  const [couponCode, setCouponCode] = useState<string>(""); 
  const [discount, setDiscount] = useState<number>(0); 
  const router = useRouter();

  useEffect(() => {
    setDiscount(0); // Reset discount to 0 when the page loads
  }, []);
  
  // Only set the discount when the coupon is applied
  const handleCouponApply = () => {
    let newDiscount = 0;
  
    if (couponCode === "DISCOUNT10") {
      newDiscount = 0.1;
    } else if (couponCode === "DISCOUNT20") {
      newDiscount = 0.2;
    } else if (couponCode === "DISCOUNT30") {
      newDiscount = 0.3;
    } else {
      alert("Invalid coupon code!");
    }
  
    if (newDiscount > 0) {
      localStorage.setItem('cartDiscount', newDiscount.toString()); // Save percentage as string
      setDiscount(newDiscount);  // Set discount only after applying coupon
    }
  };
  
  const handleCheckout = () => {
    // Save the discount amount to localStorage before proceeding to checkout
    const discountAmount = (totalPrice || 0) * discount;
    localStorage.removeItem('cartDiscount');
    localStorage.setItem('cartDiscount', JSON.stringify(discountAmount)); 

    router.push("/check-out");
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

      {cartCount === 0 ? (
        <p className="text-lg text-gray-500">You do not have any items in your cart.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b text-sm sm:text-base">
                <th className="px-2 sm:px-4 py-2 text-left">Product</th>
                <th className="px-2 sm:px-4 py-2 text-left">Price</th>
                <th className="px-2 sm:px-4 py-2 text-left">Quantity</th>
                <th className="px-2 sm:px-4 py-2 text-left">Total</th>
                <th className="px-2 sm:px-4 py-2 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {typedCartDetails &&
                Object.entries(typedCartDetails).map(([key, product]) => (
                  <tr key={key} className="border-b">
                    <td className="md:px-4 py-2 flex items-center md:gap-2">
                      <Image
                        src={product.image || "/images/placeholder.png"}
                        alt={product.name}
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="text-xs sm:text-sm">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      $ {product.price}
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="flex items-center justify-center">
                        <Button
                          onClick={() =>
                            setItemQuantity(key, product.quantity - 1)
                          }
                          className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black w-8"
                        >
                          - 
                        </Button>
                        <span className="text-xl border-t-[1px] border-b-[1px] border-black px-2 py-[4px]">{product.quantity}</span>
                        <Button
                          onClick={() =>
                            setItemQuantity(key, product.quantity + 1)
                          }
                          className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black w-8"
                        >
                          + 
                        </Button>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      $ {(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => removeItem(key)}
                        className="text-red-500 hover:text-red-700 text-center"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
        <DiscountSection
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          handleCouponApply={handleCouponApply}
        />

        <div className="flex flex-col text-right justify-center md:w-[500px]">
          <h2 className="text-xl text-start font-bold">Total Bill</h2>
          <div className="mt-2 text-start flex justify-between">
            <span className="text-lg font-medium text-start">Subtotal:</span>
            <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
          </div>
          <div className="mt-2 text-start flex justify-between">
            <span className="text-lg font-medium">Discount:</span>
            <span className="ml-4">${((totalPrice || 0) * discount).toFixed(2)}</span>
          </div>
          <div className="mt-4 font-bold text-2xl text-start">
            <span>Total:</span>
            <span className="ml-4">
              ${((totalPrice || 0) - (totalPrice || 0) * discount).toFixed(2)}
            </span>
          </div>
          <div className="mt-6 flex justify-center bg-[#FF9F0D]">
            <button
              onClick={handleCheckout}
              className="text-white px-6 py-3 rounded-lg text-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
