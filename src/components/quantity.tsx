"use client";

import { useState } from "react";

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

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity); // Notify parent about the updated quantity
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(prev - 1, 1);
      onQuantityChange(newQuantity); // Notify parent about the updated quantity
      return newQuantity;
    });
  };

  return (
    <div className="quantity-adjuster flex items-center justify-center gap-2">
      <button
        onClick={decrement}
        className="p-2 bg-gray-200 text-lg font-bold rounded-lg hover:bg-gray-300"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={increment}
        className="p-2 bg-gray-200 text-lg font-bold rounded-lg hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantityAdjuster;
