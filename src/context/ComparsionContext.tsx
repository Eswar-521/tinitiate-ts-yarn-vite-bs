import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface ComparisonContextType {
  comparison: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (id: number) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [comparison, setComparison] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    setComparison((prev) => [...prev, product]);
  };

  const removeFromComparison = (id: number) => {
    setComparison((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ComparisonContext.Provider value={{ comparison, addToComparison, removeFromComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) throw new Error("useComparison must be used within a ComparisonProvider");
  return context;
};
