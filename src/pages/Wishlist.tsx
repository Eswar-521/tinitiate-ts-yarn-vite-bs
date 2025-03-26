import React from "react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No products in the wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => removeFromWishlist(product.id)}
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

export default Wishlist;
