'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');

  return (
    <div className="flex flex-col justify-center items-center w-full py-16 px-4 bg-green-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-700 mb-4">
        Thank you for your order!
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6">
{`        We're excited to serve you! Your total order amount is
`}        <span className="text-xl sm:text-2xl font-semibold text-orange-500">
          ${amount}
        </span>
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Your order will be processed soon!
        </h2>
        <p className="text-gray-600">
          We are preparing your food for delivery. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

// Wrap the component with Suspense
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}
