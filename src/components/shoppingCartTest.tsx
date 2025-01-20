// "use client";

// import { useShoppingCart } from "use-shopping-cart";
// import { useState, useEffect } from "react";
// import { Button } from "./ui/button";
// import DiscountSection from "./ui/discount";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

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

//   useEffect(() => {
//     setDiscount(0); 
//   }, []);
  
//   const handleCouponApply = () => {
//     let newDiscount = 0;
  
//     if (couponCode === "DISCOUNT10") {
//       newDiscount = 0.1;
//     } else if (couponCode === "DISCOUNT20") {
//       newDiscount = 0.2;
//     } else if (couponCode === "DISCOUNT30") {
//       newDiscount = 0.3;
//     } else {
//       alert("Invalid coupon code!");
//     }
  
//     if (newDiscount > 0) {
//       localStorage.setItem('cartDiscount', newDiscount.toString()); 
//       setDiscount(newDiscount);  
//     }
//   };
  
//   const handleCheckout = () => {
//     const discountAmount = (totalPrice || 0) * discount;
//     localStorage.removeItem('cartDiscount');
//     localStorage.setItem('cartDiscount', JSON.stringify(discountAmount)); 

//     router.push("/check-out");
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

//       <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
//         <DiscountSection
//           couponCode={couponCode}
//           setCouponCode={setCouponCode}
//           handleCouponApply={handleCouponApply}
//         />

//         <div className="flex flex-col text-right justify-center md:w-[500px]">
//           <h2 className="text-xl text-start font-bold">Total Bill</h2>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium text-start">Subtotal:</span>
//             <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
//           </div>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium">Discount:</span>
//             <span className="ml-4">${((totalPrice || 0) * discount).toFixed(2)}</span>
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


// "use client";

// import { useShoppingCart } from "use-shopping-cart";
// import { useState, useEffect } from "react";
// import { Button } from "./ui/button";
// import DiscountSection from "./ui/discount";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast , ToastContainer } from "react-toastify"; // Import toastify

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

//   useEffect(() => {
//     setDiscount(0);
//   }, []);

//   const handleCouponApply = () => {
//     let newDiscount = 0;
  
//     if (couponCode === "DISCOUNT10") {
//       newDiscount = 0.1;
//       toast.success("Coupon DISCOUNT10 applied successfully!", {
//         position: "bottom-left",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } else if (couponCode === "DISCOUNT20") {
//       newDiscount = 0.2;
//       toast.success("Coupon DISCOUNT20 applied successfully!", {
//         position: "bottom-left",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } else if (couponCode === "DISCOUNT30") {
//       newDiscount = 0.3;
//       toast.success("Coupon DISCOUNT30 applied successfully!", {
//         position: "bottom-left",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } else {
//       // Show error message using toast instead of alert
//       toast.error("Invalid coupon code!", {
//         position: "bottom-left",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     }
  
//     if (newDiscount > 0) {
//       localStorage.setItem('cartDiscount', newDiscount.toString());
//       setDiscount(newDiscount);
//     }
//   };
  

//   const handleCheckout = () => {
//     const discountAmount = (totalPrice || 0) * discount;
//     localStorage.removeItem('cartDiscount');
//     localStorage.setItem('cartDiscount', JSON.stringify(discountAmount));

//     router.push("/check-out");
//   };

//   // Function to display toast notification
//   const handleRemoveItem = (productId: string) => {
//     removeItem(productId);
//     toast.success("Item removed from the cart!"); // Show success toast
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
//                         onClick={() => handleRemoveItem(key)} // Use custom function to show toast
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

//       <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
//         <DiscountSection
//           couponCode={couponCode}
//           setCouponCode={setCouponCode}
//           handleCouponApply={handleCouponApply}
//         />

//         <div className="flex flex-col text-right justify-center md:w-[500px]">
//           <h2 className="text-xl text-start font-bold">Total Bill</h2>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium text-start">Subtotal:</span>
//             <span className="ml-4">${(totalPrice || 0).toFixed(2)}</span>
//           </div>
//           <div className="mt-2 text-start flex justify-between">
//             <span className="text-lg font-medium">Discount:</span>
//             <span className="ml-4">${((totalPrice || 0) * discount).toFixed(2)}</span>
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

//       {/* Toast Container */}
//       <ToastContainer />    </div>
//   );
// };

// export default ShoppingCartPage;


"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import DiscountSection from "./ui/discount";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert

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
    setDiscount(0);
  }, []);

  const handleCouponApply = () => {
    let newDiscount = 0;

    if (couponCode === "DISCOUNT10") {
      newDiscount = 0.1;
      Swal.fire({
        icon: "success",
        title: "Coupon Applied!",
        text: "Coupon DISCOUNT10 applied successfully!",
        toast: true,
        position: "bottom-left",
        timer: 3000,
        showConfirmButton: false,
      });
    } else if (couponCode === "DISCOUNT20") {
      newDiscount = 0.2;
      Swal.fire({
        icon: "success",
        title: "Coupon Applied!",
        text: "Coupon DISCOUNT20 applied successfully!",
        toast: true,
        position: "bottom-left",
        timer: 3000,
        showConfirmButton: false,
      });
    } else if (couponCode === "DISCOUNT30") {
      newDiscount = 0.3;
      Swal.fire({
        icon: "success",
        title: "Coupon Applied!",
        text: "Coupon DISCOUNT30 applied successfully!",
        toast: true,
        position: "bottom-left",
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Coupon!",
        text: "The coupon code you entered is invalid.",
        toast: true,
        position: "bottom-left",
        timer: 3000,
        showConfirmButton: false,
      });
    }

    if (newDiscount > 0) {
      localStorage.setItem("cartDiscount", newDiscount.toString());
      setDiscount(newDiscount);
    }
  };

  const handleCheckout = () => {
    const discountAmount = (totalPrice || 0) * discount;
    localStorage.removeItem("cartDiscount");
    localStorage.setItem("cartDiscount", JSON.stringify(discountAmount));

    router.push("/check-out");
  };

  // Function to display SweetAlert on item removal
  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
    Swal.fire({
      icon: "success",
      title: "Item Removed!",
      text: "Item removed from the cart!",
      toast: true,
      position: "bottom-left",
      timer: 3000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

      {cartCount === 0 ? (
        <p className="text-lg text-gray-500">You do not have any items in your cart.</p>
      ) : (
        <div className="">
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
                    <td className="md:px-4 py-2 flex flex-col justify-center md:justify-start md:flex-row items-center md:gap-2">
                      <Image
                        src={product.image || "/images/placeholder.png"}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="text-xs sm:text-sm">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      $ {product.price}
                    </td>
                    <td className="px-1 md:px-4 py-1">
                      <div className="flex items-center justify-center md:justify-start">
                        <Button
                          onClick={() =>
                            setItemQuantity(key, product.quantity - 1)
                          }
                          className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black h-5 px-2 w-4 md:h-8 md:w-8"
                        >
                          -
                        </Button>
                        <span className="text-sm md:text-xl border-t-[1px] border-b-[1px] border-black px-2 md:py-[2px] ">{product.quantity}</span>
                        <Button
                          onClick={() =>
                            setItemQuantity(key, product.quantity + 1)
                          }
                          className="bg-white rounded-none hover:bg-[#FF9F0D] border-[1px] border-black text-black h-5 px-2 w-4 md:h-8 md:w-8"
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
                        onClick={() => handleRemoveItem(key)} // Use custom function to show SweetAlert
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

