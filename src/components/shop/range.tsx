"use client";

import React, { useState } from "react";

interface PriceRangeProps {
  onRangeChange: (min: number, max: number) => void;
}

export default function PriceRange({ onRangeChange }: PriceRangeProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(800);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "min") {
      const min = Number(value);
      setMinPrice(min);
      onRangeChange(min, maxPrice);
    } else {
      const max = Number(value);
      setMaxPrice(max);
      onRangeChange(minPrice, max);
    }
  };

  return (
    <div className="price-range p-4 border rounded-lg">
      <h3 className="text-orange-500 font-bold mb-2">Filter by Price</h3>
      <div className="flex items-center gap-2">
        <input
          type="range"
          name="max"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={handleSliderChange}
          className="w-full accent-orange-500"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm">From: ${minPrice}</span>
        <span className="text-sm">To: ${maxPrice}</span>
      </div>
    </div>
  );
}
