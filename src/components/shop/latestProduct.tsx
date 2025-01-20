import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: any;
  tags: string[];
  slug: string;
  rating: number; 
}

const LatestProducts = () => {
  const [products, setProducts] = useState<Food[]>([]); 

  useEffect(() => {
    const fetchLatestFoodsByTag = async () => {
      try {
        const query = `*[_type == "food" && "latest" in tags]{slug, name, price, originalPrice, image, rating} | order(_createdAt desc)`;
        const foods = await client.fetch(query);
        setProducts(foods);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
        setProducts([]);
      }
    };

    fetchLatestFoodsByTag();
  }, []);

  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-wrap gap-2 py-6">
      {products.map((food) => (
                    <Link href={`/shop/card/${food.slug}`} key={food.slug}>

        <div
          key={food._id}
          className="flex flex-row justify-center items-center"
        >
          <div className="">
            <Image
              src={
                food.image?.asset?._ref
                  ? urlFor(food.image).url()
                  : "/path/to/default-image.jpg"
              }
              alt={food.name}
              width={50}
              height={50}
              className="w-16 h-16 object-cover rounded-lg"
            />
          </div>

          <div className="ml-4 ">
            <h3 className="font-semibold text-base text-gray-800">{food.name}</h3>

            <div className=" flex">{renderStars(food.rating)}</div>

            <div className=" flex justify-start items-center gap-2">
              {food.price ? (
                <>
                  <p className="text-[#FF9F0D] text-sm font-semibold">
                    ${food.price}
                  </p>
                  <p className="line-through text-sm text-gray-500">
                    ${food.originalPrice}
                  </p>
                </>
              ) : (
                <p className="text-[#FF9F0D] text-sm font-semibold">
                  ${food.originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestProducts;
