import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const navigate = useNavigate();

  const handleCompare = () => {
    const existing = JSON.parse(localStorage.getItem("comparison") || "[]");
    const alreadyAdded = existing.find((p: any) => p.id === product.id);
    if (!alreadyAdded) {
      const updated = [...existing, product];
      localStorage.setItem("comparison", JSON.stringify(updated));
    }
    navigate("/comparison");
  };

  return (
    <div className="border rounded shadow-sm p-2 bg-white hover:shadow-md transition text-xs">
      <h5 className="text-sm font-medium mb-1">{product.name}</h5>
      <p className="text-xs text-gray-700">Price: ${product.price}</p>
      <p className="text-[11px] text-gray-500 mb-2">{product.description}</p>
      <button
        onClick={handleCompare}
        className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Compare
      </button>
    </div>
  );
};

export default ProductCard;