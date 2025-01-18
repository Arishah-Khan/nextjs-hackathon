import { useState } from "react";

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

  const totalPrice = product.newPrice * quantity;

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 border border-[#828282] py-[5px] rounded">
      <button
        className="border-r border-[#828282] px-4 text-lg"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="px-4 text-lg">{quantity}</span>
      <button
        className="border-l border-[#828282] px-4 text-lg"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default YourComponent;
