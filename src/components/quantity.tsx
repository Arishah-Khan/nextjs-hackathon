"use client";

import { useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Importing the loader spinner
import { toast } from "react-toastify"; // Importing toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

interface QuantityAdjusterProps {
  productId: string;
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void; // Prop to pass quantity change back to parent
}

const QuantityAdjuster: React.FC<QuantityAdjusterProps> = ({
  productId,
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  const increment = async () => {
    setLoading(true); // Start loading spinner
    try {
      setQuantity((prev) => {
        const newQuantity = prev + 1;
        onQuantityChange(newQuantity); // Notify parent about the updated quantity
        return newQuantity;
      });
      toast.success("Quantity increased successfully!"); // Show success toast
    } catch (error) {
      toast.error("Error increasing quantity!"); // Show error toast if something goes wrong
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const decrement = async () => {
    setLoading(true); // Start loading spinner
    try {
      setQuantity((prev) => {
        const newQuantity = Math.max(prev - 1, 1);
        onQuantityChange(newQuantity); // Notify parent about the updated quantity
        return newQuantity;
      });
      toast.success("Quantity decreased successfully!"); // Show success toast
    } catch (error) {
      toast.error("Error decreasing quantity!"); // Show error toast
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="quantity-adjuster flex items-center justify-center gap-2">
      <button
        onClick={decrement}
        className="p-2 bg-gray-200 text-lg font-bold rounded-lg hover:bg-gray-300"
        disabled={quantity <= 1 || loading} // Disable button while loading
      >
        {loading ? (
          <TailSpin color="#000" height={24} width={24} /> // Show spinner during loading
        ) : (
          "-"
        )}
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={increment}
        className="p-2 bg-gray-200 text-lg font-bold rounded-lg hover:bg-gray-300"
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

export default QuantityAdjuster;
