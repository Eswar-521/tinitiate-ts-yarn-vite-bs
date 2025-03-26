import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  description: `This is a description for Product ${i + 1}`,
}));

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Catalog</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name, price, or description..."
          className="w-full p-2 border border-gray-300 rounded-l"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
