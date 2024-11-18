import React from "react";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-  object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-800 font-bold">${product.price}</p>
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded mt-2"
        onClick={() => onViewDetails(product)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
