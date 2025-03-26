import React from "react";
import { useComparison } from "../context/ComparisonContext";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const CompareButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToComparison, removeFromComparison } = useComparison();

  return (
    <button
      onClick={() => addToComparison(product)}
      className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
    >
      Compare
    </button>
  );
};

export default CompareButton;
