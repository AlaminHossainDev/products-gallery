import React from "react";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-orange-500 text-white px-4 py-4 flex justify-between items-center rounded-sm shadow-lg">
      <h1 className="text-3xl font-bold uppercase">Dnamics Product Gallery</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="rounded px-2 py-2 text-black w-96"
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
