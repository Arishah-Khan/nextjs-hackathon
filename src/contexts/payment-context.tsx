"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a type for the context value
interface PriceContextType {
  amount: number;
  setAmount: (amount: number) => void;
}

// Create a context
const PriceContext = createContext<PriceContextType | undefined>(undefined);

// Create a provider component
export const PriceProvider = ({ children }: { children: ReactNode }) => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <PriceContext.Provider value={{ amount, setAmount }}>
      {children}
    </PriceContext.Provider>
  );
};

// Create a custom hook to use the context
export const usePriceContext = (): PriceContextType => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePriceContext must be used within a PriceProvider');
  }
  return context;
};
