"use client"

import { useState } from "react";

interface Rate {
    service: string;
    amount: string;  // Assuming the rate is a string. If it's a number, change to 'number'
  }
  
  const ShippingForm = () => {
    const [shippingInfo, setShippingInfo] = useState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: ''
    });
  
    const [cartDetails, setCartDetails] = useState([
      { id: 1, name: 'Item 1', length: 10, width: 10, height: 10, weight: 2, quantity: 1 },
      // Add more items as needed
    ]);
  
    // Define the type of the rates array to resolve the 'service' and 'amount' properties
    const [rates, setRates] = useState<Rate[]>([]); // This fixes the 'service' and 'amount' error
    const [labelUrl, setLabelUrl] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Prepare request data
      const requestData = { shippingInfo, cartDetails };
  
      try {
        const response = await fetch('/api/generateLabel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });
  
        const data = await response.json();
  
        if (data.success) {
          // Set rates and label URL
          setRates(data.rates);
          setLabelUrl(data.label_url);
        } else {
          // Handle error
          setError(data.error || 'An error occurred');
        }
      } catch (err) {
        setError('Failed to communicate with the backend');
      }
    };
  
    return (
      <div>
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={shippingInfo.name}
            onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            value={shippingInfo.city}
            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="State"
            value={shippingInfo.state}
            onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
          />
          <input
            type="text"
            placeholder="Zip"
            value={shippingInfo.zip}
            onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
          />
          <input
            type="text"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={shippingInfo.phone}
            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
          />
          
          <button type="submit">Get Rates and Label</button>
        </form>
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        {rates.length > 0 && (
          <div>
            <h3>Shipping Rates</h3>
            <ul>
              {rates.map((rate, index) => (
                <li key={index}>
                  {rate.service}: ${rate.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {labelUrl && (
          <div>
            <h3>Your Shipping Label</h3>
            <a href={labelUrl} target="_blank" rel="noopener noreferrer">
              View/Download Label
            </a>
          </div>
        )}
      </div>
    );
  };
  
  export default ShippingForm;
  