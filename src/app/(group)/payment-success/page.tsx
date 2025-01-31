"use client"

import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import HeroSection from "@/components/menu/heroSec";

interface IParams {
  searchParams: {
    amount: number;
  };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="max-w-[1340px] mx-auto ">
      <div className="bg-[#0d0d0d] py-6">
        <HeroSection pageTitle="Payment Success Page" page="Payment Success" />
      </div>

      <div className="text-center w-full py-8">
        <h1 className="text-xl sm:text-3xl  lg:text-4xl font-semibold text-black mb-4">
        Your Order is Confirmed! Enjoy Your Meal for Just <span className="text-[#ff8d12] font-bold">${searchParams.amount}!</span>
        </h1>
    
      </div>
    </main>
  );
};

export default PaymentSuccess;
