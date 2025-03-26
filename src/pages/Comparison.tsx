import React from "react";
import { useComparison } from "../context/ComparisonContext";

const Comparison = () => {
  const { comparison, removeFromComparison } = useComparison();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Comparison List</h2>
      {comparison.length === 0 ? (
        <p>No products in the comparison list.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparison.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => removeFromComparison(product.id)}
                className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comparison;
