"use client";
import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/lib/subCurrency";
import { toast } from "react-toastify"; // Toast for error messages
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // Loader for button

const CheckoutPage = ({ amount }: { amount: number }) => {
  console.log(window.location.host);

  const myhost = window.location.host;
  let URL = myhost === "localhost:3000" ? "http://localhost:3000" : "https://stripe-payment-one-nu.vercel.app";

  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load payment details.");
        setLoading(false);
      });
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      toast.error("Stripe is not initialized.");
      setLoading(false);
      return;
    }

    const { error: submitErrors } = await elements.submit();
    if (submitErrors) {
      toast.error(submitErrors.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${URL}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Payment successful!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      {clientSecret && <PaymentElement />}
      <button className="w-full bg-black text-white py-2 mt-5 flex items-center justify-center" disabled={loading}>
        {loading ? <ClipLoader color="#fff" size={20} /> : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutPage;
