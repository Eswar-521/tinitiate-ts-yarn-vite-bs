import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useComparison } from "../context/ComparisonContext";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToWishlist } = useWishlist();
  const { addToComparison } = useComparison();

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => addToWishlist(product)}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add to Wishlist
        </button>
        <button
          onClick={() => addToComparison(product)}
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
