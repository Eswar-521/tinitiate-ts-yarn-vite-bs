import React from "react";
import { useWishlist } from "../context/WishlistContext";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const WishlistButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToWishlist } = useWishlist();

  return (
    <button
      onClick={() => addToWishlist(product)}
      className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
