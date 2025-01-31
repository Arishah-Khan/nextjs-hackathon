import HeroSection from "@/components/menu/heroSec";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

import Image from "next/image";


import {
  Accordion,
} from "@/components/ui/accordion";

import { client } from "@/sanity/lib/client";
import AddToCart from "@/components/addToCart";
import Card from "@/components/restaurant/cards";
import WishlistButton from "@/components/addToWishList";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToWishlist from "@/components/addToWishList";


interface Card {
  _id: string;
  slug: string;
  image: any;
  name: string;
  originalPrice: string;
  price: string;
}

interface Product {
  slug: string;
  name: string;
  description: string;
  
  sku?: string;
  detailDescription: string;
  price: number;
  originalPrice: number;
  image: any;
  smallImages: string[];
  rating: number;
  reviews: number;
  category: string;
  benefits: string[];
  price_id: string;
  _id: string;
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    // console.log("Product ID:", id);

    const query = `*[_type == "food" && (slug == $slug || _id == $slug)]{
      slug,
      name,
      description,
      detailDescription,
      price,
      originalPrice,
      image,
      smallImages,
      rating,
      reviews,
      category,
      benefits,
    }`;

    const products: Product[] = await client.fetch(query, { slug });
    // console.log("Fetched Products:", products); // Debug: Check the fetched products

    if (!products || products.length === 0) {
      toast.error("Product not found.");
      return (
        <div className="text-center text-gray-500">Product not found.</div>
      );
    }

    const product = products[0];
    
    console.log("Updated Product:", product); 
    const cards = await client
      .fetch(
        `*[_type == "food"]{
      _id,
      slug,
      image,
      name,
      originalPrice,
      price
    }`
      )
      .catch((error) => {
        toast.error("Failed to fetch related products.");
        console.error("Failed to fetch products:", error);
        return []; 
      });

    return (
      <main className="max-w-[1340px] mx-auto">
        {/* Product Section */}
        <HeroSection pageTitle="Shop Details" page="Shop Details" />

        <div className="flex flex-col py-2 sm:py-8 lg:flex-row justify-center items-center px-2 gap-4">
          {/* Left Side: Images */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 mb-3 md:mb-5">
              {product?.smallImages.map((img, index) => (
                <Image
                  key={index}
                  src={urlFor(img).url()}
                  alt={`Small image ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-[55px] h-[55px] md:w-[80px] md:h-[80px]"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 flex flex-col items-center lg:items-start py-8">
              <div className="border rounded-lg overflow-hidden mb-4">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name || "Product Image"}
                  width={500}
                  height={500}
                  className="w-[250px] h-[230px] sm:w-[300px] sm:h-[280px] md:w-[420px] md:h-[380px]"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 justify-center items-center max-w-[600px]">
            <h1
              className="text-2xl md:text-3xl font-[700] mb-4"
              style={{ fontFamily: "Helvetica" }}
            >
              {product.name}
            </h1>
            <p
              className="text-gray-700 text-xs sm:text-sm md:text-base pb-4 mb-3"
              style={{ borderBottom: "2px solid #E0E0E0" }}
            >
              {product?.description}
            </p>

            <p className="font-semibold text-xl text-gray-900 mb-3">
              <span className="text-black" style={{ fontFamily: "Helvetica" }}>
                ${product.price}{" "}
              </span>{" "}
              <span className="line-through text-gray-500">
                ${product.originalPrice}{" "}
              </span>
            </p>
            <div className="flex items-center mb-2">
              {/* Stars icons */}
              <div className="flex items-center mr-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < product?.rating ? "#FF9F0D" : "#D1D5DB"} // color stars based on rating
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <div className="h-4 border-l-2 border-gray-300 mx-4"></div>

              <p className="text-gray-600 text-sm">{product?.rating} rating</p>

              <div className="h-4 border-l-2 border-gray-300 mx-4"></div>

              <p className="text-gray-600 text-sm">
                {product?.reviews} reviews
              </p>
            </div>

            <div
              className="flex items-center gap-4 pt-4 pb-6"
              style={{ borderBottom: "2px solid #E0E0E0" }}
            >


              <AddToCart
                key={product._id}
                id={product.slug}
                currency="PLN"
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                price_id={product.price_id}
              />

              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full"
              >
                .....
              </Accordion>
            </div>

            <div className="text-gray-600 text-sm flex flex-col gap-4">
              {/* Add to Wishlist Section */}
              {/* <div className="flex items-center gap-2 mt-4">
                <FaRegHeart className="text-lg text-[#4F4F4F]" />{" "}
                <span className="text-[#4F4F4F] text-base">
                  Add to Wishlist
                </span>
              </div> */}

 {/* Now passing data to AddToWishlist */}
 <AddToWishlist
        id={product._id}
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
      />

              {/* Category */}
              <div className="text-[#4F4F4F] text-base">
                Category: {product?.category}
              </div>

              {/* Social Media Icons in Circle */}
              <div
                className="flex gap-2 pb-5"
                style={{ borderBottom: "2px solid #E0E0E0" }}
              >
                {" "}
                <span className="text-[#4F4F4F] text-base">Share:</span>
                <div className="flex items-center justify-center w-6 h-6 bg-[#4F4F4F] text-white rounded-full">
                  <FaFacebookF className="text-base" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 bg-[#4F4F4F] text-white rounded-full">
                  <FaTwitter className="text-base" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 bg-[#4F4F4F] text-white rounded-full">
                  <FaInstagram className="text-base" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 bg-[#4F4F4F] text-white rounded-full">
                  <FaLinkedinIn className="text-base" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 bg-[#4F4F4F] text-white rounded-full">
                  <FaYoutube className="text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-6">
          {/* Description Button and Details */}
          <button className="bg-[#FF9F0D] px-4 py-2 rounded mb-4">
            Description
          </button>
          <p className="text-[#828282] max-w-[900px] text-xs sm:text-sm md:text-base">
            {product?.detailDescription}
          </p>

          {/* Benefits Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2 ">Key Benefits</h3>
            <ul className="list-disc pl-5 text-[#828282] text-xs sm:text-sm md:text-base">
              {product?.benefits?.length > 0 ? (
                product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))
              ) : (
                <li>No benefits listed</li>
              )}
            </ul>
          </div>
        </div>

        <section className="py-10 px-5">
          <Carousel>
            <CarouselContent className="flex justify-center items-center space-x-1">
              {cards.map((card: Card) => (
                <CarouselItem
                  key={card._id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Link href={`/shop/card/${card.slug || card._id}`}>
                    <div className="sm:p-4 rounded-lg cursor-pointer hover:shadow-lg">
                      <Image
                        src={urlFor(card.image).url()}
                        alt={card.name}
                        width={300}
                        height={200}
                        className="rounded-lg w-[150px] h-[150px] sm:w-[300px] sm:h-[200px] object-cover "
                      />
                      <h3 className="mt-4 text-base sm:text-lg font-bold">
                        {card.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                      {card.price ? (
                    <>
                      <p className="text-[#FF9F0D] text-lg font-semibold">
                        ${card.price}
                      </p>
                      <p className="line-through text-gray-500">
                        ${card.originalPrice}
                      </p>
                    </>
                  ) : (
                    <p className="text-[#FF9F0D] text-lg font-semibold">
                      ${card.originalPrice}
                    </p>
                  )}
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute bg-[#faf7f2] top-[-16%] sm:top-[-10%] left-[70%] sm:left-[80%] md:left-[85%] lg:left-[90%] transform z-10 m-4" />
            <CarouselNext className="absolute  top-[-16%] sm:top-[-10%] bg-[#FF9F0D] text-white right-0 sm:right-[1%]  transform z-10 m-4 ml-12" />
          </Carousel>
        </section>
      </main>
    );
  } catch (error) {
    toast.error("Error loading product details.");
    console.error("Error fetching product:", error);
    return (
      <div className="text-center text-red-500">
        Error loading product details.
      </div>
    );
  }
}

export default Page;
