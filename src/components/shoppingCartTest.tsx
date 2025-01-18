// // import Image from "next/image";
// // import { useShoppingCart } from "use-shopping-cart";

// // // Define CartProduct if it's not part of the package
// // type CartProduct = {
// //   name: string;
// //   price: number;
// //   quantity: number;
// //   image: string; // Or use an optional type if it might be undefined
// // };

// // const ShoppingCartPage = () => {
// //   const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } = useShoppingCart();

// //   const typedCartDetails = cartDetails as Record<string, CartProduct>;

// //   return (
// //     <div className="container mx-auto px-2 md:px-4 py-6">
// //       <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

// //       {cartCount === 0 ? (
// //         <p className="text-lg text-gray-500">You do not have any items in your cart.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full table-auto">
// //             <thead>
// //               <tr className="border-b text-sm sm:text-base">
// //                 <th className="px-2 sm:px-4 py-2 text-left">Product</th>
// //                 <th className="px-2 sm:px-4 py-2 text-left">Price</th>
// //                 <th className="px-2 sm:px-4 py-2 text-left">Quantity</th>
// //                 <th className="px-2 sm:px-4 py-2 text-left">Total</th>
// //                 <th className="px-2 sm:px-4 py-2 text-left">Remove</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {typedCartDetails &&
// //                 Object.entries(typedCartDetails).map(([key, product]) => (
// //                   <tr key={key} className="border-b">
// //                     <td className="md:px-4 py-2 flex items-center md:gap-2">
// //                       <Image src={product.image || "/images/placeholder.png"} alt={product.name} width={70} height={70} />
// //                       <div className="flex flex-col justify-start items-start gap-2">
// //                         <div className="text-xs sm:text-sm">{product.name}</div>
// //                       </div>
// //                     </td>
// //                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
// //                       $ {product.price.toFixed(2)} 
// //                     </td>
// //                     <td className="px-2 md:px-4 py-2">
// //                       <div className="flex items-center justify-center gap-2">
// //                         <button
// //                           onClick={() => setItemQuantity(key, product.quantity - 1)}
// //                           className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
// //                           disabled={product.quantity <= 1}
// //                         >
// //                           -
// //                         </button>
// //                         <span className="text-lg">{product.quantity}</span>
// //                         <button
// //                           onClick={() => setItemQuantity(key, product.quantity + 1)}
// //                           className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </td>
// //                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
// //                       $ {(product.price * product.quantity).toFixed(2)} 
// //                     </td>
// //                     <td className="px-4 py-2">
// //                       <button onClick={() => removeItem(key)} className="text-red-500 hover:text-red-700 text-center">x</button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {/* Coupon and Total Section */}
// //       <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
// //         <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
// //           <label htmlFor="coupon" className="text-lg font-semibold">Coupon Code</label>
// //           <p className="text-sm text-gray-500">Enter your coupon code for discounts.</p>
// //           <div className="flex justify-between items-center gap-4 mt-2">
// //             <input id="coupon" type="text" className="p-2 border rounded w-full lg:w-60" placeholder="Enter Coupon Code" />
// //             <button className="bg-orange-500 text-white px-4 py-2 rounded">Apply</button>
// //           </div>
// //         </div>

// //         {/* Total Section */}
// //         <div className="flex flex-col text-right">
// //           <h2 className="text-xl font-bold">Total Bill</h2>
// //           <div className="mt-2">
// //             <span className="text-lg font-medium">Subtotal:</span>
// //             <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
// //           </div>
// //           <div className="mt-2">
// //             <span className="text-lg font-medium">Shipping:</span>
// //             <span className="ml-4">$5.00</span>
// //           </div>
// //           <div className="mt-4 font-bold text-2xl">
// //             <span>Total:</span>
// //             <span className="ml-4">${((totalPrice || 0) + 5).toFixed(2)}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };



// // export default ShoppingCartPage;










// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useShoppingCart } from "use-shopping-cart";

// type CartProduct = {
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const ShoppingCartPage = () => {
//   const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } = useShoppingCart();
//   const typedCartDetails = cartDetails as Record<string, CartProduct>;

//   const router = useRouter(); // Use router for page redirection

//   const handleCheckout = () => {
//     // Redirect user to the checkout page
//     router.push('/checkout');  // Checkout page URL (you can customize this as per your routes)
//   };

//   return (
//     <div className="container mx-auto px-2 md:px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

//       {cartCount === 0 ? (
//         <p className="text-lg text-gray-500">You do not have any items in your cart.</p>
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
//                       <Image src={product.image || "/images/placeholder.png"} alt={product.name} width={70} height={70} />
//                       <div className="flex flex-col justify-start items-start gap-2">
//                         <div className="text-xs sm:text-sm">{product.name}</div>
//                       </div>
//                     </td>
//                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
//                       $ {product.price.toFixed(2)} 
//                     </td>
//                     <td className="px-2 md:px-4 py-2">
//                       <div className="flex items-center justify-center gap-2">
//                         <button
//                           onClick={() => setItemQuantity(key, product.quantity - 1)}
//                           className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
//                           disabled={product.quantity <= 1}
//                         >
//                           -
//                         </button>
//                         <span className="text-lg">{product.quantity}</span>
//                         <button
//                           onClick={() => setItemQuantity(key, product.quantity + 1)}
//                           className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
//                       $ {(product.price * product.quantity).toFixed(2)} 
//                     </td>
//                     <td className="px-4 py-2">
//                       <button onClick={() => removeItem(key)} className="text-red-500 hover:text-red-700 text-center">x</button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Coupon and Total Section */}
//       <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
//         <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
//           <label htmlFor="coupon" className="text-lg font-semibold">Coupon Code</label>
//           <p className="text-sm text-gray-500">Enter your coupon code for discounts.</p>
//           <div className="flex justify-between items-center gap-4 mt-2">
//             <input id="coupon" type="text" className="p-2 border rounded w-full lg:w-60" placeholder="Enter Coupon Code" />
//             <button className="bg-orange-500 text-white px-4 py-2 rounded">Apply</button>
//           </div>
//         </div>

//         {/* Total Section */}
//         <div className="flex flex-col text-right">
//           <h2 className="text-xl font-bold">Total Bill</h2>
//           <div className="mt-2">
//             <span className="text-lg font-medium">Subtotal:</span>
//             <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
//           </div>
//           <div className="mt-2">
//             <span className="text-lg font-medium">Shipping:</span>
//             <span className="ml-4">$5.00</span>
//           </div>
//           <div className="mt-4 font-bold text-2xl">
//             <span>Total:</span>
//             <span className="ml-4">${((totalPrice || 0) + 5).toFixed(2)}</span>
//           </div>
//         </div>
//       </div>

//       {/* Proceed to Checkout Button */}
//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={handleCheckout}
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCartPage;




"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

// Define CartProduct if it's not part of the package
type CartProduct = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const ShoppingCartPage = () => {
  const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } = useShoppingCart();
  const typedCartDetails = cartDetails as Record<string, CartProduct>;
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const router = useRouter(); // Use router for page redirection

  const handleCheckout = () => {
    router.push('/check-out');  // Checkout page URL (you can customize this as per your routes)
  };

  // Handle coupon application
  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.10); // 10% discount
    } else if (couponCode === "DISCOUNT20") {
      setDiscount(0.20); // 20% discount
    } else if (couponCode === "DISCOUNT30") {
      setDiscount(0.30); // Free shipping (doesn't change total but could be shown in shipping)
    } else {
      setDiscount(0);
      alert("Invalid coupon code!");
    }
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
                      <Image src={product.image || "/images/placeholder.png"} alt={product.name} width={60} height={60} />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="text-xs sm:text-sm">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                    $ {product.price}
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setItemQuantity(key, product.quantity - 1)}
                          className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-lg">{product.quantity}</span>
                        <button
                          onClick={() => setItemQuantity(key, product.quantity + 1)}
                          className="text-lg font-bold border rounded w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      $ {(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-2">
                      <button onClick={() => removeItem(key)} className="text-red-500 hover:text-red-700 text-center">x</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Coupon and Total Section */}
      <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
        <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
          <label htmlFor="coupon" className="text-lg font-semibold">Coupon Code</label>
          <p className="text-sm text-gray-500">Enter your coupon code for discounts.</p>
          <p className="text-sm text-gray-500">Available Coupons: DISCOUNT10, DISCOUNT20, DISCOUNT30</p>
          <div className="flex justify-between items-center gap-4 mt-2">
            <input 
              id="coupon" 
              type="text" 
              className="p-2 border rounded w-full lg:w-60" 
              placeholder="Enter Coupon Code" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)} 
            />
            <button onClick={handleCouponApply} className="bg-orange-500 text-white px-4 py-2 rounded">Apply</button>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex flex-col text-right">
          <h2 className="text-xl font-bold">Total Bill</h2>
          <div className="mt-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-medium">Discount:</span>
            <span className="ml-4">${((totalPrice || 0) * discount).toFixed(2)}</span>
          </div>
          <div className="mt-4 font-bold text-2xl">
            <span>Total:</span>
            <span className="ml-4">${(((totalPrice || 0)) - ((totalPrice || 0) * discount)).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Proceed to Checkout Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
