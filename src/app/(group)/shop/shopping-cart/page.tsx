"use client"

import Button from "@/components/button";
import HeroSection from "@/components/menu/heroSec";
import ShoppingCartPage from "@/components/shoppingCartTest";
import ShoppingCartModalTest from "@/components/shoppingCartTest";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
}

function ShoppingCart() {
  // Sample products data
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "Fresh Lime",
      image: "/images/shop1.png",
      price: 25.99,
      quantity: 1,
      rating: 4,
    },
    {
      id: 2,
      image: "/images/shop2.png",
      name: "Burger",
      price: 15.99,
      quantity: 2,
      rating: 3,
    },
    {
      id: 3,
      name: "Pizza",
      image: "/images/shop3.png",
      price: 30.99,
      quantity: 1,
      rating: 5,
    },
    {
      id: 4,
      name: "Sandwiches",
      image: "/images/shop4.png",
      price: 10.99,
      quantity: 3,
      rating: 4,
    },
    {
      id: 5,
      name: "Drink",
      image: "/images/shop6.png",
      price: 50.99,
      quantity: 1,
      rating: 2,
    },
  ]);

  // Handle remove product from cart
  const handleRemove = (id: number): void => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Calculate total for each product
  const calculateTotal = (price: number, quantity: number): number => {
    return price * quantity;
  };

  // Calculate total bill
  const totalBill = cart.reduce(
    (acc, product) => acc + calculateTotal(product.price, product.quantity),
    0
  );

  return (
    <main className="max-w-full mx-auto">
    <div className="bg-[#0d0d0d]">
      <HeroSection pageTitle="Shopping Cart" page="Shopping Cart" />
    </div>
{/*   
    <div className="container mx-auto  px-2 md:px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
  
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b text-sm sm:text-base">
              <th className="px-2 sm:px-4 py-2 text-left">Product</th>
              <th className="px-2 sm:px-4 py-2 text-left">Price</th>
              <th className="px-2 sm:-4 py-2 text-left">Quantity</th>
              <th className="px-2 sm:px-4 py-2 text-left">Total</th>
              <th className="px-2 :px-4 py-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="md:px-4 py-2 flex items-center md:gap-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px] sm:w-[70px] sm:h-[70px] pr-1"
                  />
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-xs sm:text-sm">{product.name}</div>
                    <div className="flex">
                      <Image
                        src="/images/star.png"
                        alt="star"
                        width={100}
                        height={50}
                        className="w-[40px] h-[10] sm:w-[100] sm:h-[20]"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">{product.price.toFixed(2)} $</td>
                <td className="px-2 md:px-4 py-2">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => {
                      const updatedCart = cart.map((item) =>
                        item.id === product.id
                          ? { ...item, quantity: parseInt(e.target.value) }
                          : item
                      );
                      setCart(updatedCart);
                    }}
                    min="1"
                    className="w-16 text-center border rounded"
                  />
                </td>
                <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                  {calculateTotal(product.price, product.quantity).toFixed(2)} $
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500 hover:text-red-700 text-center"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
        <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
          <label htmlFor="coupon" className="text-lg font-semibold">
            Coupon Code
          </label>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
          </p>
          <div className="flex justify-between items-center gap-4 mt-2">
            <input
              id="coupon"
              type="text"
              className="p-2 border rounded w-full lg:w-60"
              placeholder="Enter Coupon Code"
            />
            <Button text="Apply" bg="#FF9F0D" />
          </div>
        </div>
  
        <div className="flex flex-col text-right">
          <h2 className="text-xl font-bold">Total Bill</h2>
          <div className="mt-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="ml-4">{totalBill.toFixed(2)} $</span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-medium">Shipping:</span>
            <span className="ml-4">5.00 $</span>
          </div>
          <div className="mt-4 font-bold text-2xl">
            <span>Total:</span>
            <span className="ml-4">{(totalBill + 5).toFixed(2)} $</span>
          </div>
        </div>
      </div>
    </div> */}

    <ShoppingCartPage />
  </main>
  
  );
}

export default ShoppingCart;
