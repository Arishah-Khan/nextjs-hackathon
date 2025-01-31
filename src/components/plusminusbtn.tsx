import { useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Importing the loader spinner
import { toast } from "react-toastify"; // Importing toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// Define the prop types for the component
interface Product {
  newPrice: number;
  oldPrice: number;
  quantity: number;
  sku: string;
}

interface YourComponentProps {
  product: Product;
}

const YourComponent: React.FC<YourComponentProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  const totalPrice = product.newPrice * quantity;

  const handleIncrease = async () => {
    setLoading(true); // Start loading spinner
    try {
      setQuantity((prevQuantity) => prevQuantity + 1);
      toast.success("Quantity increased successfully!"); // Show success toast
    } catch (error) {
      toast.error("Error increasing quantity!"); // Show error toast if something goes wrong
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleDecrease = async () => {
    setLoading(true); // Start loading spinner
    if (quantity > 1) {
      try {
        setQuantity((prevQuantity) => prevQuantity - 1);
        toast.success("Quantity decreased successfully!"); // Show success toast
      } catch (error) {
        toast.error("Error decreasing quantity!"); // Show error toast
      } finally {
        setLoading(false); // Stop loading spinner
      }
    } else {
      toast.error("Quantity cannot be less than 1!"); // Show error toast if quantity is already 1
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="flex items-center gap-2 border border-[#828282] py-[5px] rounded">
      {/* Display the spinner when loading */}
      <button
        className="border-r border-[#828282] px-4 text-lg"
        onClick={handleDecrease}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <TailSpin color="#000" height={24} width={24} /> // Show spinner during loading
        ) : (
          "-"
        )}
      </button>
      <span className="px-4 text-lg">{quantity}</span>
      <button
        className="border-l border-[#828282] px-4 text-lg"
        onClick={handleIncrease}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <TailSpin color="#000" height={24} width={24} /> // Show spinner during loading
        ) : (
          "+"
        )}
      </button>
    </div>
  );
};

export default YourComponent;
