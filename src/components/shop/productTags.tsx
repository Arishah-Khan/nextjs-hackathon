import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  tags: string[];
}

const ProductTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const query = `*[_type == "food"]{tags}`;
        const products: Product[] = await client.fetch(query);  

        // Flatten the tags array and remove duplicates
        const allTags = products.flatMap((product) => product.tags);  
        const uniqueTags = [...new Set(allTags)]; 

        // Limit the tags to the first 9
        setTags(uniqueTags.slice(0, 9)); // Slice the array to only include the first 9 tags
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      }
    };

    fetchTags();
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Product Tags</h3>
      <div className=" flex flex-wrap justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag-item px-1 py-2  hover:border-b-2 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
