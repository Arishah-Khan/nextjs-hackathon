import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  tags: string[];
}

const ProductTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setIsLoading(true); // Start loading
        const query = `*[_type == "food"]{tags}`;
        const products: Product[] = await client.fetch(query);

        const allTags = products.flatMap((product) => product.tags);
        const uniqueTags = [...new Set(allTags)];

        setTags(uniqueTags.slice(0, 9));
      } catch (error) {
        toast.error("Failed to fetch tags!"); // Show toast on error
        console.error("Failed to fetch tags:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchTags();
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Product Tags</h3>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-[#FF9F0D] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag-item px-1 py-2 hover:border-b-2 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductTags;
