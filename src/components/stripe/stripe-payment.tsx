"use client";

import convertToSubCurrency from '@/lib/subCurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './checkout';
import { usePriceContext } from '@/contexts/payment-context';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment: React.FC = () => {
    const { amount } = usePriceContext(); // Access the amount from context
  
    // Log the amount to check if it's available
    console.log("Amount from context: ", amount);
  
    // Ensure amount is valid and greater than 0
    if (amount <= 0 || !amount) {
      return <div>Error: Invalid amount</div>; // Or handle the error however you want
    }
  
    return (
      <div className='py-5'>
        <Elements
          stripe={stripePromise}
          options={{
            mode: 'payment',
            amount: convertToSubCurrency(amount), // Convert to the right sub-currency
            currency: 'usd',
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </div>
    );
  };
  

export default StripePayment;
