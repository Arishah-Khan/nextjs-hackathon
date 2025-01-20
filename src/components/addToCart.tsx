

// "use client";

// import { Button } from "@/components/ui/button";
// import { urlFor } from "@/sanity/lib/image";
// import { useShoppingCart } from "use-shopping-cart";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// export interface ProductCart {
//   slug: string;
//   name: string;
//   description: string;
//   currency: string;
//   image: any;
//   price_id: string;
//   price: number;
//   originalPrice: number;
// }

// const AddToCart = ({
//   slug,
//   name,
//   currency,
//   description,
//   image,
//   price_id,
//   price,
// }: ProductCart) => {
//   const { addItem, handleCartClick, cartDetails, setItemQuantity } =
//     useShoppingCart();

//     console.log(setItemQuantity)

//   const [currentQuantity, setCurrentQuantity] = useState(() => {
//     const existingItem = cartDetails?.[slug];
//     return existingItem ? existingItem.quantity : 1;
//   });

//   const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

//   const incrementQuantity = () => {
//     setCurrentQuantity((prev: number) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setCurrentQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleAddToCart = () => {
//     const product = {
//       name,
//       slug,
//       quantity: currentQuantity,
//       description,
//       price: price,
//       currency,
//       image: imageUrl,
//       sku: price_id,
//     };

//     const existingItem = cartDetails?.[slug];

//     if (existingItem) {
//       const updatedQuantity = currentQuantity;
//       setItemQuantity(slug, updatedQuantity);
//       console.log(`Updated Quantity for ${name}:`, updatedQuantity);
//     } else {
//       addItem(product);
//       setItemQuantity(slug, currentQuantity); // Ensure correct quantity
//       console.log("New Product Added to Cart:", product);
//     }

//     const totalPrice = price * currentQuantity;


    // toast.success(`${name} added to cart! Quantity: ${currentQuantity} | Total Price: $${totalPrice.toFixed(2)}`, {
    //   position: "bottom-left", 
    //   autoClose: 3000, 
    //   hideProgressBar: true, 
    //   closeOnClick: true, 
    //   pauseOnHover: true, 
    //   draggable: true, 
    // });

//     // Open the cart
//     handleCartClick();
//   };

//   useEffect(() => {
//     console.log("Cart Details Updated:", cartDetails);
//   }, [cartDetails]);

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-4">
//         <div className="flex items-center space-x-2 border-[1px] border-black">
//           <Button
//             onClick={decrementQuantity}
//             className="bg-white rounded-none hover:bg-[#FF9F0D] border-r-[1px] border-black text-black w-10"
//           >
//             -
//           </Button>
//           <span className="text-xl px-2">{currentQuantity}</span>
//           <Button
//             onClick={incrementQuantity}
//             className="bg-white rounded-none hover:bg-[#FF9F0D] border-l-[1px] border-black text-black w-10"
//           >
//             +
//           </Button>
//         </div>
//         <div>
//           <Button
//             onClick={handleAddToCart}
//             className="bg-[#FF9F0D] text-white w-full rounded-none border-white border-1 text-base md:text-lg"
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;

"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";


export interface ProductCart {
  id: string;
  name: string;
  description: string;
  currency: string;
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

  const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

  const incrementQuantity = () => {
    setCurrentQuantity((prev: number) => prev + 1);
  };

  const decrementQuantity = () => {
    setCurrentQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const product = {
      name,
      id,
      quantity: currentQuantity,
      description,
      price: price,
      currency,
      image: imageUrl,
      sku: price_id,
    };

    const existingItem = cartDetails?.[id];

    if (existingItem) {
      const updatedQuantity = currentQuantity;
      setItemQuantity(id, updatedQuantity);
      console.log(`Updated Quantity for ${name}:`, updatedQuantity);
    } else {
      addItem(product);
      setItemQuantity(id, currentQuantity); 
      console.log("New Product Added to Cart:", product);
    }

    const newPrice = price * currentQuantity;

    // Use SweetAlert to show a success message
    Swal.fire({
      title: `${name} added to cart!`,
      text: `Quantity: ${currentQuantity} | Total Price: $${newPrice.toFixed(2)}`,
      icon: "success", // This will show a green checkmark icon
      confirmButtonText: "OK",
    });
  

    // Open the cart
    handleCartClick();
  };

  useEffect(() => {
    console.log("Cart Details Updated:", cartDetails);
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
            className="bg-[#FF9F0D] text-white w-full rounded-none border-white border-1 text-base md:text-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;



// "use client";

// import { Button } from "@/components/ui/button";
// import { urlFor } from "@/sanity/lib/image";
// import { useShoppingCart } from "use-shopping-cart";
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export interface ProductCart {
//   slug: string;
//   name: string;
//   description: string;
//   currency: string;
//   image: any;
//   price_id: string;
//   price: number;
//   originalPrice: number;
// }

// const AddToCart = ({
//   slug,
//   name,
//   currency,
//   description,
//   image,
//   price_id,
//   price,
// }: ProductCart) => {
//   const { addItem, handleCartClick, cartDetails, setItemQuantity } =
//     useShoppingCart();

//   // Get the existing quantity from cartDetails and set initial quantity to 1 if not found
//   const [currentQuantity, setCurrentQuantity] = useState(() => {
//     const existingItem = cartDetails?.[slug];
//     return existingItem ? existingItem.quantity : 1;
//   });

//   useEffect(() => {
//     console.log("Cart Details:", cartDetails);
//     console.log("Current Quantity:", currentQuantity);
//   }, [cartDetails, currentQuantity]);

//   const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

//   const incrementQuantity = () => {
//     setCurrentQuantity((prev: number) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setCurrentQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleAddToCart = () => {
//     const product = {
//       name,
//       slug,
//       quantity: currentQuantity,
//       description,
//       price: price,
//       currency,
//       image: imageUrl,
//       sku: price_id,
//     };

//     const existingItem = cartDetails?.[slug];

//     if (existingItem) {
//       // If the item is already in the cart, update the quantity
//       const updatedQuantity = currentQuantity;
//       setItemQuantity(slug, updatedQuantity);  // Update quantity in the cart
//       console.log(`Updated Quantity for ${name}:`, updatedQuantity);
//     } else {
//       // Add new product to the cart
//       addItem(product);
//       setItemQuantity(slug, currentQuantity); // Ensure correct quantity
//       console.log("New Product Added to Cart:", product);
//     }

    // const totalPrice = price * currentQuantity;

    // // Show a success toast
    // toast.success(`${name} added to cart! Quantity: ${currentQuantity} | Total Price: $${totalPrice.toFixed(2)}`, {
    //   position: "bottom-left",
    //   autoClose: 3000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });

//     // Open the cart after adding an item
//     handleCartClick();
//   };

//   useEffect(() => {
//     console.log("Cart Details Updated:", cartDetails);
//   }, [cartDetails]);

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-4">
//         <div className="flex items-center space-x-2 border-[1px] border-black">
//           <Button
//             onClick={decrementQuantity}
//             className="bg-white rounded-none hover:bg-[#FF9F0D] border-r-[1px] border-black text-black w-10"
//           >
//             -
//           </Button>
//           <span className="text-xl px-2">{currentQuantity}</span>
//           <Button
//             onClick={incrementQuantity}
//             className="bg-white rounded-none hover:bg-[#FF9F0D] border-l-[1px] border-black text-black w-10"
//           >
//             +
//           </Button>
//         </div>
//         <div>
//           <Button
//             onClick={handleAddToCart}
//             className="bg-[#FF9F0D] text-white w-full rounded-none border-white border-1 text-base md:text-lg"
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
