// "use client";

// import { Button } from "@/components/ui/button";
// import { urlFor } from "@/sanity/lib/image";
// import { useShoppingCart } from "use-shopping-cart";
// import { useState, useEffect } from "react";

// export interface ProductCart {
//   id: string;
//   name: string;
//   description: string;
//   currency: string;
//   image: any;
//   price_id: string;
//   price: number;
//   originalPrice: number;
// }

// const AddToCart = ({
//   id,
//   name,
//   currency,
//   description,
//   image,
//   price_id,
//   price,
//   originalPrice,
// }: ProductCart) => {
//   const { addItem, handleCartClick, cartDetails,setItemQuantity } = useShoppingCart();
//   const [currentQuantity, setCurrentQuantity] = useState(1);

//   const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

//   const incrementQuantity = () => {
//     setCurrentQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setCurrentQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   const product = {
//     name,
//     id,
//     quantity: currentQuantity,
//     description,
//     price: price,
//     currency,
//     image: imageUrl,
//     sku: price_id, // Unique identifier
//   };



//   const handleAddToCart = () => {
//     // Prepare the product object
//     const product = {
//       name,
//       id,
//       quantity: currentQuantity,
//       description,
//       price: price,
//       currency,
//       image: imageUrl,
//       sku: price_id, // Unique identifier
//     };
  
//     // Check if the item already exists in the cart
//     const existingItem = cartDetails?.[product.id];
  
//     if (existingItem) {
//       // Update quantity if item exists
//       const updatedQuantity = existingItem.quantity + currentQuantity;
//       setItemQuantity(product.id, updatedQuantity); // Manually set the quantity
//       console.log(`Updated Quantity for ${product.name}:`, updatedQuantity);
//     } else {
//       // Add new product if it doesn't exist
//       addItem(product); // Add the product
//       console.log("New Product Added to Cart:", product);
//     }
  
//     // Open the cart for viewing
//     handleCartClick();
//   };
  
  
//   // Log cartDetails whenever it changes
//   useEffect(() => {
//     console.log("Cart Details Updated:", cartDetails);
//   }, [cartDetails]);
  
  
  
  

  
  
  

//   return (
//     <div>
//       <div className="flex items-center space-x-2">
//         <Button
//           onClick={decrementQuantity}
//           className="bg-gray-300 text-black w-10"
//         >
//           -
//         </Button>
//         <span className="text-xl">{currentQuantity}</span>
//         <Button
//           onClick={incrementQuantity}
//           className="bg-gray-300 text-black w-10"
//         >
//           +
//         </Button>
//       </div>

//       <Button
//         onClick={handleAddToCart}
//         className="bg-black text-white w-full mt-4"
//       >
//         Add to Cart
//       </Button>
//     </div>
//   );
// };

// export default AddToCart;



"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";

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
  originalPrice,
}: ProductCart) => {
  const { addItem, handleCartClick, cartDetails, setItemQuantity } = useShoppingCart();
  // const [currentQuantity, setCurrentQuantity] = useState(1);

  const [currentQuantity, setCurrentQuantity] = useState(() => {
    const existingItem = cartDetails?.[id];
    return existingItem ? existingItem.quantity : 1;
  });

  const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

  const incrementQuantity = () => {
    setCurrentQuantity((prev:number) => prev + 1);
  };

  const decrementQuantity = () => {
    setCurrentQuantity((prev:number) => (prev > 1 ? prev - 1 : 1));
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

    // Check if item exists in cartDetails
    const existingItem = cartDetails?.[id];

    if (existingItem) {
      // Update existing item quantity
      const updatedQuantity = currentQuantity;
      setItemQuantity(id, updatedQuantity);
      console.log(`Updated Quantity for ${name}:`, updatedQuantity);
    } else {
      // Add item and set quantity explicitly
      addItem(product);
      setItemQuantity(id, currentQuantity); // Ensure correct quantity
      console.log("New Product Added to Cart:", product);
    }

    // Open the cart
    handleCartClick();
  };

  useEffect(() => {
    console.log("Cart Details Updated:", cartDetails);
  }, [cartDetails]);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={decrementQuantity}
          className="bg-gray-300 hover:bg-[#FF9F0D] text-black w-10"
        >
          -
        </Button>
        <span className="text-xl">{currentQuantity}</span>
        <Button
          onClick={incrementQuantity}
          className="bg-gray-300 hover:bg-[#FF9F0D] text-black w-10"
        >
          +
        </Button>
      </div>

      <Button
        onClick={handleAddToCart}
        className="bg-black text-white w-full mt-4"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;





