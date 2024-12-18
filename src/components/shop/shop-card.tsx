"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import HeroSection from "@/components/menu/heroSec";

// Importing icons for social media

interface product {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  mainImage: string;
  smallImages: string[];
  benefits: string[];  // Added field for key benefits
  ingredients: string[]; // Added field for ingredients (or any other useful info)
}

const products: product[] = [
  {
    id: "1",
    title: "Delicious Burger",
    description:
      "Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.",
    price: "$23.00",
    rating: 4.5,
    reviews: 22,
    category: "Fast Food",
    mainImage: "/images/shop1.png",
    smallImages: [
      "/images/shop2.png",
      "/images/shop3.png",
      "/images/shop4.png",
      "/images/shop5.png",
    ],
    benefits: ["Quick Meal", "Affordable", "Tasty", "Fresh Ingredients"],
    ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Pickles"],
  },
  {
    id: "2",
    title: "Cheesy Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus elit vitae justo interdum, non vehicula neque mollis. Nulla ac magna at sapien pellentesque gravida.",
    price: "$19.00",
    rating: 4.7,
    reviews: 35,
    category: "Pizza",
    mainImage: "/images/shop2.png",
    smallImages: [
      "/images/shop1.png",
      "/images/shop3.png",
      "/images/shop4.png",
      "/images/shop5.png",
    ],
    benefits: ["Cheese Lover's Dream", "Hot and Fresh", "Crunchy Crust", "Perfectly Seasoned"],
    ingredients: ["Tomato Sauce", "Mozzarella", "Parmesan", "Basil", "Olives"],
  },
  {
    id: "3",
    title: "Spicy Tacos",
    description:
      "Vivamus vulputate purus nec felis auctor, ac fermentum nisi venenatis. Integer vulputate felis et ante mollis, id hendrerit lorem dictum.",
    price: "$15.00",
    rating: 4.2,
    reviews: 18,
    category: "Mexican",
    mainImage: "/images/shop3.png",
    smallImages: [
      "/images/shop1.png",
      "/images/shop2.png",
      "/images/shop4.png",
      "/images/shop5.png",
    ],
    benefits: ["Spicy", "Flavorful", "Quick Bite", "Authentic Taste"],
    ingredients: ["Corn Tortilla", "Ground Beef", "Lettuce", "Sour Cream", "Chili Sauce"],
  },
  {
    id: "4",
    title: "Refreshing Drink",
    description:
      "Aenean sed velit mollis, facilisis est vel, venenatis mi. Cras ac lorem non purus eleifend lobortis. Etiam malesuada sapien vitae purus efficitur, at efficitur dui gravida.",
    price: "$8.00",
    rating: 4.0,
    reviews: 12,
    category: "Beverages",
    mainImage: "/images/shop4.png",
    smallImages: [
      "/images/shop1.png",
      "/images/shop2.png",
      "/images/shop3.png",
      "/images/shop5.png",
    ],
    benefits: ["Refreshing", "Hydrating", "Low Calorie", "Vibrant"],
    ingredients: ["Water", "Lemon", "Sugar", "Mint Leaves", "Ice"],
  },
  {
    id: "6",
    title: "Loaded Fries",
    description:
      "Ut placerat, velit ac mollis fermentum, purus risus hendrerit odio, non auctor nisi nisl nec libero. Pellentesque ut quam vel ante interdum placerat.",
    price: "$10.00",
    rating: 4.8,
    reviews: 45,
    category: "Snacks",
    mainImage: "/images/shop5.png",
    smallImages: [
      "/images/shop1.png",
      "/images/shop2.png",
      "/images/shop3.png",
      "/images/shop4.png",
    ],
    benefits: ["Crispy", "Loaded with Toppings", "Cheesy", "Satisfying"],
    ingredients: ["Potatoes", "Cheese Sauce", "Bacon", "Chives", "Sour Cream"],
  },
  // Add more products as needed...
];

type DetailProps = {
  params: {
    id: string;
  };
};

export default function ShopDetail({ params }: DetailProps) {
  if (!params || !params.id) {
    return <div>Post not found</div>;
  }

  const { id } = params;
  const post = products.find((product) => product.id === id); // Direct comparison

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="max-w-[1340px] mx-auto px-4 py-10">
      {/* Product Section */}
      <HeroSection pageTitle="Shop Details" page="Shop Details" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Images */}
        <div className="flex flex-col justify-center items-center gap-4">
          {post?.smallImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Small image ${index + 1}`}
              width={80}
              height={80}
              className="object-cover"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="border rounded-lg overflow-hidden mb-4">
            <Image
              src={post?.mainImage || ""}
              alt={post?.title || "Product Image"}
              width={500}
              height={500}
              className="w-[400px] h-[400px]"
            />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
          <p className="text-gray-700 mb-2">{post?.description}</p>
          <p className="text-[#FF9F0D] text-lg font-semibold mb-2">{post?.price}</p>
          <p className="text-gray-600 text-sm mb-4">
            {post?.rating} stars ({post?.reviews} reviews)
          </p>

          {/* Product Benefits Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Key Benefits</h3>
            <ul className="list-disc pl-6">
              {post?.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 text-sm">{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Ingredients or other information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-6">
              {post?.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600 text-sm">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 border px-4 py-2 rounded">
              <button className="border-r px-4 text-lg">-</button>
              <span className="px-4 text-lg">1</span>
              <button className="border-l px-4 text-lg">+</button>
            </div>

            <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded flex items-center gap-2">
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="text-gray-600 text-sm flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaFacebookF className="text-2xl text-blue-600" />
              <FaTwitter className="text-2xl text-blue-400" />
              <FaInstagram className="text-2xl text-pink-600" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
