// "use client";

// import HeroSection from "@/components/menu/heroSec";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { useEffect, useState } from "react";

// interface Food {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   image: any;
// }

// const staticCategories = [
//   "Sandwich",
//   "Burger",
//   "Dessert",
//   "Drink",
//   "Pizza",
//   "Non Veg",
// ];

// export default function Shop() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

//   useEffect(() => {
//     fetchFilteredFoods();
//   }, [selectedCategory]);

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category === selectedCategory ? null : category);
//   };

//   const fetchFilteredFoods = async () => {
//     try {
//       const query = selectedCategory
//         ? `*[_type == "food" && category == $category]{
//             _id, name, category, price , originalPrice,image
//           }`
//         : `*[_type == "food"]{_id, name, category, price,image , originalPrice}`;
//       const params = { category: selectedCategory };

//       const foods = await client.fetch(query, params);
//       setFilteredFoods(foods);
//     } catch (error) {
//       console.error("Failed to fetch foods:", error);
//       setFilteredFoods([]);
//     }
//   };

//   return (
//     <main className="max-w-[1340px] mx-auto px-4 lg:px-0">
//       <div className="bg-[#0d0d0d]">
//         <HeroSection pageTitle="Our Shop" page="Shop" />
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Food Grid Section */}
//         <section className="flex-1 py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//           {filteredFoods.map((food: Food) => (
//             <Link href={`/shop/card/${food._id}`} key={food._id}>
//               <div className="p-4 rounded-lg cursor-pointer hover:shadow-lg bg-white">
//                 <Image
//                   src={food.image?.asset?._ref ? urlFor(food.image).url() : '/path/to/default-image.jpg'}
//                   alt={food.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg object-cover w-[140px] h-[100px] sm:w-[250px] sm:h-[200px]"
//                 />
//                 <h3 className="mt-4 text-lg font-bold">{food.name}</h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   {food.price ? (
//                     <>
//                       <p className="text-[#FF9F0D] text-lg font-semibold">${food.price}</p>
//                       <p className="line-through text-gray-500">${food.originalPrice}</p>
//                     </>
//                   ) : (
//                     <p className="text-[#FF9F0D] text-lg font-semibold">${food.originalPrice}</p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </section>

//         {/* Category Filter Section */}
//         <aside className="w-full lg:w-[300px] bg-[#1f1f1f] p-5 rounded-lg">
//           <h3 className="text-lg text-white mb-4">Filter by Category</h3>
//           <div className="space-y-3">
//             {staticCategories.map((category) => (
//               <div key={category} className="flex items-center">
//                 <input
//                   type="radio"
//                   id={category}
//                   name="category"
//                   checked={selectedCategory === category}
//                   onChange={() => handleCategoryChange(category)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={category} className="text-white">
//                   {category}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </aside>
//       </div>
//     </main>
//   );
// }

// "use client"

// import { useEffect, useState } from "react";
// import HeroSection from "@/components/menu/heroSec";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { FiSearch } from "react-icons/fi";

// interface Food {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   image: any;
//   tags: string[];
// }

// const staticCategories = [
//   "Sandwich",
//   "Burger",
//   "Dessert",
//   "Drink",
//   "Pizza",
//   "Non Veg",
// ];

// export default function Shop() {
//   const [allFoods, setAllFoods] = useState<Food[]>([]);
//   const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(2);
//   const itemsPerPage = 9; // Number of items per page
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   useEffect(() => {
//     const filtered =
//       selectedCategory === "All"
//         ? allFoods
//         : allFoods.filter((food) => food.category === selectedCategory);

//     // Now filter by search term
//     const searchFiltered = filtered.filter((food) =>
//       food.name.toLowerCase().includes(search.toLowerCase())
//     );

//     setFilteredFoods(searchFiltered);
//     setCurrentPage(1); // Reset to the first page when category or search changes
//   }, [selectedCategory, allFoods, search]); // Update the effect to run when search changes

//   const fetchFoods = async () => {
//     try {
//       const query = `*[_type == "food"]{_id, name, category, price, originalPrice, image , tags}`;
//       const foods = await client.fetch(query);
//       setAllFoods(foods);
//     } catch (error) {
//       console.error("Failed to fetch foods:", error);
//       setAllFoods([]);
//     }
//   };

//   const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
//   const maxVisiblePages = 3;

//   const handlePageChange = (page: number) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const getVisiblePages = () => {
//     const half = Math.floor(maxVisiblePages / 2);
//     const startPage = Math.max(1, currentPage - half);
//     const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
//     return Array.from(
//       { length: endPage - startPage + 1 },
//       (_, i) => startPage + i
//     );
//   };

//   const currentFoods = filteredFoods.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <main className="max-w-[1340px] mx-auto">
//       <div className="bg-white">
//         <HeroSection pageTitle="Our Shop" page="Shop" />
//       </div>

//       <div className="flex flex-wrap lg:flex-nowrap gap-8 py-10 px-5">
//         <section className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {currentFoods.map((food: Food) => (
//             <Link href={`/shop/card/${food._id}`} key={food._id}>
//               <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg">
//                 <Image
//                   src={
//                     food.image?.asset?._ref
//                       ? urlFor(food.image).url()
//                       : "/path/to/default-image.jpg"
//                   }
//                   alt={food.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg object-cover w-full h-[200px]"
//                 />
//                 <h3 className="mt-4 text-lg font-bold text-gray-800">
//                   {food.name}
//                 </h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   {food.price ? (
//                     <>
//                       <p className="text-[#FF9F0D] text-lg font-semibold">
//                         ${food.price}
//                       </p>
//                       <p className="line-through text-gray-500">
//                         ${food.originalPrice}
//                       </p>
//                     </>
//                   ) : (
//                     <p className="text-[#FF9F0D] text-lg font-semibold">
//                       ${food.originalPrice}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </section>

//         <aside className="w-full lg:w-[300px] bg-[#1f1f1f] p-5 rounded-lg mt-10 lg:mt-0">
//           {/* Search Bar */}
//           <div className="mb-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search Product"
//                 value={search}
//                 onChange={handleSearchChange}
//                 className="w-full p-3 pr-12 border border-[#E0E0E0] placeholder-[#E0E0E0] text-black focus:border-gray-300 focus:ring-gray-300 focus:ring-1 focus:outline-none"
//               />
//               <div className="bg-[#FF9F0D] absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12">
//                 <FiSearch className="text-white text-xl" />
//               </div>
//             </div>
//           </div>

//           <h3 className="text-lg text-white mb-4">Category</h3>
//           <div className="space-y-3">
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 id="All"
//                 name="category"
//                 checked={selectedCategory === "All"}
//                 onChange={() => setSelectedCategory("All")}
//                 className="mr-2"
//               />
//               <label htmlFor="All" className="text-white">
//                 All
//               </label>
//             </div>
//             {staticCategories.map((category) => (
//               <div key={category} className="flex items-center">
//                 <input
//                   type="radio"
//                   id={category}
//                   name="category"
//                   checked={selectedCategory === category}
//                   onChange={() => setSelectedCategory(category)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={category} className="text-white">
//                   {category}
//                 </label>
//               </div>
//             ))}
//           </div>

//           <div
//             style={{
//               backgroundImage: 'url("/images/bg.png")',
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               padding: "20px", 
//             }}
//             className="h-[280px] my-3"
//           >
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h3 className="text-white">Perfect Taste</h3>
//                 <h2 className="font-bold text-white">Classic Restaurant</h2>
//                 <h4 className="text-[#ff9f0d]">45.00$</h4>
//               </div>

//               <h5 className="text-white self-end">Shop Now</h5>
//             </div>
//           </div>


//         </aside>
//       </div>

//       <div className="flex justify-center items-center space-x-4 mt-10">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           «
//         </button>
//         {getVisiblePages().map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-3 py-2 ${
//               currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           »
//         </button>
//       </div>
//     </main>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/menu/heroSec";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FiSearch } from "react-icons/fi";

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: any;
  tags: string[];
  id:string
}

const staticCategories = [
  "Sandwich",
  "Burger",
  "Dessert",
  "Drink",
  "Pizza",
  "Non Veg",
];

export default function Shop() {
  const [allFoods, setAllFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 9; // Number of items per page
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFoods();
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? allFoods
        : allFoods.filter((food) => food.category === selectedCategory);

    // Now filter by search term
    const searchFiltered = filtered.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredFoods(searchFiltered);
    setCurrentPage(1); // Reset to the first page when category or search changes
  }, [selectedCategory, allFoods, search]); // Update the effect to run when search changes

  const fetchFoods = async () => {
    try {
      const query = `*[_type == "food"]{_id, name, category, price, originalPrice, image,id }`;
      const foods = await client.fetch(query);
      setAllFoods(foods);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
      setAllFoods([]);
    }
  };

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const maxVisiblePages = 3;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const half = Math.floor(maxVisiblePages / 2);
    const startPage = Math.max(1, currentPage - half);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main className="max-w-[1340px] mx-auto">
      <div className="bg-white">
        <HeroSection pageTitle="Our Shop" page="Shop" />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-8 py-10 px-5">
        <section className="order-2 md:order-1 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFoods.map((food: Food) => (
            <Link href={`/shop/card/${food.id}`} key={food.id}>
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
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Product"
                value={search}
                onChange={handleSearchChange}
                className="w-full p-3 pr-12 border border-[#E0E0E0] placeholder-[#E0E0E0] text-black focus:border-gray-300 focus:ring-gray-300 focus:ring-1 focus:outline-none"
              />
              <div className="bg-[#FF9F0D] absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12">
                <FiSearch className="text-white text-xl" />
              </div>
            </div>
          </div>

          <h3 className="text-lg text-black mb-4">Category</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="radio"
                id="All"
                name="category"
                checked={selectedCategory === "All"}
                onChange={() => setSelectedCategory("All")}
                className="mr-2"
              />
              <label htmlFor="All" className="text-black">
                All
              </label>
            </div>
            {staticCategories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="mr-2"
                />
                <label htmlFor={category} className="text-black">
                  {category}
                </label>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundImage: 'url("/images/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "20px", 
            }}
            className="h-[280px] my-3 hidden md:flex"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white">Perfect Taste</h3>
                <h2 className="font-bold text-white">Classic Restaurant</h2>
                <h4 className="text-[#ff9f0d]">45.00$</h4>
              </div>

              <h5 className="text-white self-end">Shop Now</h5>
            </div>
          </div>
        </aside>
      </div>

      <div className="flex justify-center items-center space-x-4 my-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 text-[#ff9f0d] rounded disabled:opacity-50"
        >
          «
        </button>
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 ${
              currentPage === page ? "bg-orange-500 text-white" : "bg-gray-100 text-[#ff9f0d]"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 text-[#ff9f0d] rounded disabled:opacity-50"
        >
          »
        </button>
      </div>
    </main>
  );
}
