// components/Shop.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/menu/heroSec";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import SearchBar from "@/components/shop/searchBar";
import CategoryFilter from "@/components/shop/category";
import Pagination from "@/components/shop/pagination";
import PriceRange from "@/components/shop/range";
import LatestProducts from "@/components/shop/latestProduct";
import ProductTags from "@/components/shop/productTags";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"; // Importing spinner for loading state

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: any;
  tags: string[];
  slug: string;
}

export default function Shop() {
  const [allFoods, setAllFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(800);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state
  const errorShown = useRef(false);

  useEffect(() => {
    fetchFoods(); // Fetch data on initial load
  }, []);

  useEffect(() => {
    // Filtering logic based on selected category, search, and price range
    const filteredByCategoryAndSearch = allFoods.filter((food) => {
      const matchesCategory =
        selectedCategory === "All" || food.category === selectedCategory;
      const matchesSearch = food.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const priceFiltered = filteredByCategoryAndSearch.filter(
      (food) => food.originalPrice >= minPrice && food.originalPrice <= maxPrice
    );

    setFilteredFoods(priceFiltered);
    setCurrentPage(1); // Reset page to 1 when filter changes
  }, [selectedCategory, search, minPrice, maxPrice, allFoods]);

  const fetchFoods = async () => {
    setIsLoading(true); // Set loading state to true before fetching data
    try {
      const query = `*[_type == "food"]{_id, name, category, price, originalPrice, image, slug}`;
      const foods = await client.fetch(query);

      if (!foods.length) {
        throw new Error("No food items found.");
      }

      setAllFoods(foods); // Set fetched foods data
    } catch (error: any) {
      console.error("Error caught:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false); // Set loading state to false after fetching is done
    }
  };

  useEffect(() => {
    if (error && !errorShown.current) {
      toast.error(`Error: ${error}`); // Show toast for errors
      errorShown.current = true;
    }
  }, [error]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="max-w-[1340px] mx-auto">
      <div className="bg-white">
        <HeroSection pageTitle="Our Shop" page="Shop" />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-8 px-1 py-2 md:py-10 md:px-5">
        <section className="order-2 md:order-1 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && (
            <div className="flex justify-center items-center h-full w-full">
              <ClipLoader size={50} color="#FF9F0D" loading={isLoading} />
            </div>
          )}

          {!isLoading && filteredFoods.length === 0 && (
            <div className="text-center text-lg font-semibold text-gray-500">
  No food items found matching your criteria.
  </div>
          )}

          {!isLoading &&
            filteredFoods.length > 0 &&
            currentFoods.map((food) => (
              <Link href={`/shop/card/${food.slug}`} key={food.slug}>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg">
                  <Image
                    src={
                      food.image?.asset?._ref
                        ? urlFor(food.image).url()
                        : "/path/to/default-image.jpg"
                    }
                    alt={food.name}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    {food.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {food.price ? (
                      <>
                        <p className="text-[#FF9F0D] text-lg font-semibold">
                          ${food.price}
                        </p>
                        <p className="line-through text-gray-500">
                          ${food.originalPrice}
                        </p>
                      </>
                    ) : (
                      <p className="text-[#FF9F0D] text-lg font-semibold">
                        ${food.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </section>

        <aside className="order-1 md:order-2 w-full lg:w-[300px] bg-white p-5 rounded-lg mt-10 lg:mt-0">
          <SearchBar search={search} onSearchChange={setSearch} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Other filters */}

          <PriceRange
            onRangeChange={(min, max) => {
              setMinPrice(min);
              setMaxPrice(max);
            }}
          />

          <h2 className="text-lg font-bold mt-3">Latest Product</h2>
          <LatestProducts />

          <ProductTags />
        </aside>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
