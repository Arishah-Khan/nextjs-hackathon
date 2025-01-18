"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define the Chef interface
interface Chef {
  _id: string;
  name: string;
  position: string;
  specialty: string;
  image: any;
  description: string;
  available: boolean;
}

function ChefPage() {
  // Define the state with type `Chef[]` (array of Chef objects)
  const [chefs, setChefs] = useState<Chef[]>([]);

  const fetchChefs = async () => {
    try {
      const query = `*[_type == "chef"]{_id, name, position, specialty, image, description, available}`;
      const fetchedChefs = await client.fetch(query);
      setChefs(fetchedChefs); // Update state with fetched chefs
    } catch (error) {
      console.error("Failed to fetch chefs:", error);
      setChefs([]); // In case of error, set chefs to an empty array
    }
  };

  useEffect(() => {
    fetchChefs(); // Fetch chefs when the component mounts
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className=" rounded-lg  p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                width={300}
                height={200}
                className="md:w-[280px] md:h-[300px] object-contain rounded-lg mb-4"
                />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{chef.name}</h2>
            <p className="text-gray-500 text-sm sm:text-base">{chef.position}</p>
            <p className="text-gray-400 text-xs sm:text-sm">{chef.specialty}</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">{chef.description}</p>
            {chef.available ? (
              <p className="text-green-500 text-xs sm:text-sm mt-2">Currently Active</p>
            ) : (
              <p className="text-red-500 text-xs sm:text-sm mt-2">Currently Inactive</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChefPage;
