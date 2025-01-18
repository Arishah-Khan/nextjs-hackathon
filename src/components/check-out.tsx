"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

// Define the Product type
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [shippingRates, setShippingRates] = useState<any[]>([]); // State to hold shipping rates
  const [selectedRate, setSelectedRate] = useState<any>(null); // State to hold selected shipping rate
  const [finalTotalPrice, setFinalTotalPrice] = useState<number>(0); // State for final total including shipping

  const { cartDetails, totalPrice, clearCart } = useShoppingCart();

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const fetchShippingRates = async () => {
    const shippingDetails = {
      shippingInfo,  // Shipping Info
      cartDetails,   // Cart Details
    };

    try {
      const response = await fetch('/api/get-shipping-rates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shippingDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();  // Parse the JSON response
      console.log("API Response Data: ", data);

      if (data.success) {
        setShippingRates(data.rates);  // Set shipping rates in state
        // Set initial final total (including shipping) based on default rate
        if (data.rates.length > 0) {
          setSelectedRate(data.rates[0]);
          setFinalTotalPrice(totalPrice + data.rates[0].amount);
        }
      } else {
        console.error('Failed to fetch shipping rates:', data.error);
      }
    } catch (error) {
      console.error('Error during fetch request:', error);
    }
  };

  const handleShippingRateSelect = (rate: any) => {
    setSelectedRate(rate);  // Set the selected shipping rate
    setFinalTotalPrice(Number(totalPrice) + Number(rate.amount));
  };

  useEffect(() => {
    // Ensure the initial total is updated when `totalPrice` changes
    if (selectedRate) {
      setFinalTotalPrice(Number(totalPrice) + Number(selectedRate.amount));
    }
  }, [selectedRate, totalPrice]);

  const router = useRouter();

  const backCart = ()=>{
    router.push("/shop/shopping-cart")
  }

  const placedOrder = ()=>{
    router.push("/confirm")
  }



  return (
    <div className="checkout-container max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Shipping Information */}
        <div className="shipping-info">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            {/* Form inputs for shipping info */}
            <input
              type="text"
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleShippingChange}
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleShippingChange}
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleShippingChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address1"
              value={shippingInfo.address1}
              onChange={handleShippingChange}
              placeholder="Address Line 1"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address2"
              value={shippingInfo.address2}
              onChange={handleShippingChange}
              placeholder="Address Line 2"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="zip"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
              placeholder="Zip Code"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={backCart}
              className="bg-gray-300 px-6 py-2 rounded text-sm font-semibold"
            >
              Back to Cart
            </button>
          </form>
        </div>

        {/* Right Side - Product Details and Total */}
        <div className="product-details">
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
          <div className="space-y-4">
            {cartDetails && Object.entries(cartDetails).map(([key, product]) => {
              const item = product as Product;  // Type assertion to Product
              return (
                <div key={key} className="flex justify-between items-center">
                  <Image src={item.image} alt={item.name} width="20" height="20" className="w-16 h-16 object-cover" />
                  <span className="font-semibold">{item.name}</span>
                  <span>${item.price}</span>
                </div>
              );
            })}
          </div>

          {/* Subtotal */}
          <div className="mt-4">
            <p className="font-semibold">Subtotal: ${totalPrice}</p>
          </div>

          {/* Shipping Rates */}
          <div className="mt-4">
            <button
              onClick={fetchShippingRates}
              className="bg-[#FF9F0D] text-white px-6 py-2 rounded font-semibold"
            >
              Get Shipping Rates
            </button>

            {shippingRates.length > 0 && (
              <div className="mt-4">
                <h3>Select Shipping Option</h3>
                <ul className="space-y-2">
                  {shippingRates.map((rate, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name="shippingRate"
                          value={rate.service}
                          checked={selectedRate?.service === rate.service}
                          onChange={() => handleShippingRateSelect(rate)}
                        />
                        <span>{rate.service}: ${rate.amount}</span>
                        <p className="text-sm text-gray-600">
                          Estimated Delivery: {rate.estimated_days} days
                        </p>
                        <p className="text-sm text-gray-600">
                          Duration: {rate.duration_terms}
                        </p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Total */}
          {selectedRate && (
            <div className="mt-4">
              <p className="font-semibold">Total (including Shipping): ${finalTotalPrice}</p>
            </div>
          )}

          {/* Place Order Button */}
          <button
            onClick={placedOrder}
            className="bg-[#FF9F0D] text-white px-6 py-2 rounded font-semibold mt-6"
          >
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
