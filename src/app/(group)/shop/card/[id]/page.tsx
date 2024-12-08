"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import HeroSection from "@/components/menu/heroSec";
import Link from "next/link";
import { useRouter } from 'next/navigation';

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
      "Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus elit vitae justo interdum.",
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
      "Vivamus vulputate purus nec felis auctor, ac fermentum nisi venenatis. Integer vulputate felis.",
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
      "Aenean sed velit mollis, facilisis est vel, venenatis mi. Cras ac lorem non purus eleifend lobortis.",
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
    id: "5",
    title: "Loaded Fries",
    description:
      "Ut placerat, velit ac mollis fermentum, purus risus hendrerit odio, non auctor nisi nisl nec libero.",
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
  {
    id: "6",
    title: "Grilled Sandwich",
    description:
      "Mauris hendrerit vehicula lacus. Proin feugiat eu lorem eget tempor. Curabitur sed ligula malesuada.",
    price: "$12.00",
    rating: 4.6,
    reviews: 28,
    category: "Sandwiches",
    mainImage: "/images/shop6.png",
    smallImages: [
      "/images/shop7.png",
      "/images/shop8.png",
      "/images/shop9.png",
      "/images/shop10.png",
    ],
    benefits: ["Healthy", "Filling", "Delicious", "Easy to Eat"],
    ingredients: ["Whole Grain Bread", "Turkey", "Lettuce", "Tomato", "Mustard"],
  },
  {
    id: "7",
    title: "Chocolate Cake",
    description:
      "Phasellus fermentum orci at eros porttitor, vel tincidunt urna mattis. Nunc vehicula euismod urna.",
    price: "$25.00",
    rating: 4.9,
    reviews: 50,
    category: "Desserts",
    mainImage: "/images/shop7.png",
    smallImages: [
      "/images/shop6.png",
      "/images/shop8.png",
      "/images/shop9.png",
      "/images/shop10.png",
    ],
    benefits: ["Rich Taste", "Moist Texture", "Perfect for Parties", "Decadent"],
    ingredients: ["Chocolate", "Flour", "Butter", "Sugar", "Eggs"],
  },
  {
    id: "8",
    title: "Fruit Smoothie",
    description:
      "Cras euismod leo eget sapien facilisis, id hendrerit justo vestibulum. Donec id libero vel ex.",
    price: "$7.00",
    rating: 4.5,
    reviews: 15,
    category: "Beverages",
    mainImage: "/images/shop8.png",
    smallImages: [
      "/images/shop6.png",
      "/images/shop7.png",
      "/images/shop9.png",
      "/images/shop10.png",
    ],
    benefits: ["Nutritious", "Natural Sweetness", "Vitamins", "Energizing"],
    ingredients: ["Banana", "Berries", "Yogurt", "Honey", "Ice"],
  },
  {
    id: "9",
    title: "Crispy Chicken Wings",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    price: "$14.00",
    rating: 4.7,
    reviews: 40,
    category: "Fast Food",
    mainImage: "/images/shop9.png",
    smallImages: [
      "/images/shop10.png",
      "/images/shop11.png",
      "/images/shop12.png",
      "/images/shop13.png",
    ],
    benefits: ["Crispy Skin", "Juicy Meat", "Flavorful Spices", "Perfect Snack"],
    ingredients: ["Chicken", "Spices", "Flour", "Oil", "Herbs"],
  },
  {
    id: "10",
    title: "Veggie Wrap",
    description:
      "Curabitur vitae velit ut sapien fringilla bibendum ac nec sem. Integer at erat sed urna.",
    price: "$9.00",
    rating: 4.4,
    reviews: 20,
    category: "Healthy",
    mainImage: "/images/shop10.png",
    smallImages: [
      "/images/shop11.png",
      "/images/shop12.png",
      "/images/shop13.png",
      "/images/shop14.png",
    ],
    benefits: ["Healthy", "Convenient", "Fresh Vegetables", "Tasty"],
    ingredients: ["Tortilla", "Avocado", "Lettuce", "Carrots", "Hummus"],
  },
  {
    id: "11",
    title: "Pepperoni Pizza",
    description:
      "Donec ultricies malesuada quam. Etiam suscipit, felis quis vehicula euismod, augue ex iaculis ipsum.",
    price: "$18.00",
    rating: 4.8,
    reviews: 60,
    category: "Pizza",
    mainImage: "/images/shop11.png",
    smallImages: [
      "/images/shop10.png",
      "/images/shop12.png",
      "/images/shop13.png",
      "/images/shop14.png",
    ],
    benefits: ["Savory", "Crispy Crust", "Perfectly Seasoned", "Cheesy"],
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni", "Oregano", "Chili Flakes"],
  },
  {
    id: "12",
    title: "Ice Cream Sundae",
    description:
      "Nam quis augue et metus ultrices accumsan. Nulla eu tortor vehicula, consequat mi et, tincidunt.",
    price: "$5.00",
    rating: 4.9,
    reviews: 33,
    category: "Desserts",
    mainImage: "/images/shop12.png",
    smallImages: [
      "/images/shop10.png",
      "/images/shop11.png",
      "/images/shop13.png",
      "/images/shop14.png",
    ],
    benefits: ["Sweet", "Cool", "Creamy", "Toppings Galore"],
    ingredients: ["Ice Cream", "Chocolate Sauce", "Sprinkles", "Whipped Cream", "Cherries"],
  },
  {
    id: "13",
    title: "Grilled Salmon",
    description:
      "Fusce sed ipsum sit amet sapien tincidunt gravida. Mauris vehicula tristique ex, et condimentum elit.",
    price: "$22.00",
    rating: 4.6,
    reviews: 25,
    category: "Seafood",
    mainImage: "/images/shop13.png",
    smallImages: [
      "/images/shop12.png",
      "/images/shop11.png",
      "/images/shop10.png",
      "/images/shop14.png",
    ],
    benefits: ["Rich in Omega-3", "Light Meal", "Tasty Marinade", "Healthy"],
    ingredients: ["Salmon", "Lemon", "Garlic", "Parsley", "Olive Oil"],
  },
  {
    id: "14",
    title: "Gourmet Salad",
    description:
      "Donec viverra, ipsum a tincidunt bibendum, risus orci gravida risus, a vestibulum metus risus ut quam.",
    price: "$12.00",
    rating: 4.3,
    reviews: 20,
    category: "Healthy",
    mainImage: "/images/shop14.png",
    smallImages: [
      "/images/shop13.png",
      "/images/shop12.png",
      "/images/shop11.png",
      "/images/shop10.png",
    ],
    benefits: ["Healthy Choice", "Low Calories", "Fresh Ingredients", "Delicious"],
    ingredients: ["Lettuce", "Spinach", "Cherry Tomatoes", "Cucumbers", "Feta Cheese", "Olive Oil"],
  },
];


type DetailProps = {
  params: {
    id: string;
  };
};

const similarProducts = [
  {
    id: 2,
    image: "/images/shop6.png",
    title: "Cheesy Pizza",
    price: "$19.00",
  },
  {
    id: 3,
    image: "/images/shop7.png",
    title: "Spicy Tacos",
    price: "$15.00",
  },
  {
    id: 4,
    image: "/images/shop8.png",
    title: "Refreshing Drink",
    price: "$8.00",
  },
  {
    id: 5,
    image: "/images/shop1.png",
    title: "Loaded Fries",
    price: "$10.00",
  },
];

export default function ShopDetail({ params }: DetailProps) {

  const router = useRouter();

  const handleClick = () => {
    router.push("/shop/shopping-cart"); // Replace '/new-page' with your desired path
  };
  if (!params || !params.id) {
    return <div>Post not found</div>;
  }

  const { id } = params;
  const post = products.find((product) => product.id === id); // Direct comparison

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="max-w-[1340px] mx-auto">
      {/* Product Section */}
      <HeroSection pageTitle="Shop Details" />

      <div className="flex flex-col py-2 sm:py-8 lg:flex-row justify-center items-center px-2 gap-4">
        {/* Left Side: Images */}
        <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          {post?.smallImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Small image ${index + 1}`}
              width={80}
              height={80}
              className="object-cover w-[55px] h-[55px] sm:w-[80px] sm:h-[80px]"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex flex-col items-center lg:items-start py-8">
          <div className="border rounded-lg overflow-hidden mb-4">
            <Image
              src={post?.mainImage || ""}
              alt={post?.title || "Product Image"}
              width={500}
              height={500}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
            />
          </div>
        </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex-1 justify-center items-center max-w-[600px]">
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
            <div className="flex items-center gap-2 border px-2 sm:px-4 py-2 rounded">
              <button className="border-r px-4 text-lg">-</button>
              <span className="px-4 text-lg">1</span>
              <button className="border-l px-4 text-lg">+</button>
            </div>

            <button className="bg-[#FF9F0D] text-white px-2 sm:px-6 py-2 rounded flex items-center gap-2"  onClick={handleClick}>
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

      <div className="mt-12 px-6">
        {/* Description Button and Details */}
        <button className="bg-[#FF9F0D] px-4 py-2 rounded mb-4">
          Description
        </button>
        <p className="text-gray-700">{post?.description}</p>

        {/* Benefits Section */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Key Benefits</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Freshly made with the finest ingredients</li>
            <li>
              Perfectly balanced taste with a combination of veggies and sauce
            </li>
            <li>Affordable and delicious</li>
            <li>Ideal for a quick snack or meal</li>
          </ul>
        </div>
      </div>


      <h2 className="text-xl font-bold mt-8 mb-4 text-center">Similar Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts.map((item) => (
          <Link href={`/shop/card/${item.id}`} key={item.id}>
            <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-[140px] h-[100px] sm:w-[250px] sm:h-[200px] "
              />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="text-[#FF9F0D] text-lg font-semibold">
                {item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
