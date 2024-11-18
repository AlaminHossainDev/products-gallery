import React from "react";

const Filters = ({ onCategoryChange, onSortChange }) => {
  return (
    <div className="bg-gray-100 p-4 flex gap-4">
        <span className="px-3 py-2 text-3xl font-bold text-orange-600 uppercase">Select the Categories</span>
      <select
        className="border px-5 py-2"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Phone">Phone</option>
        <option value="Watch">Watch</option>
      </select>

      <select
        className="border px-3 py-2"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
