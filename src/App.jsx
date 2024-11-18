import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductGallery from "./components/ProductGallery";
import products from "./data.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = products.filter(
    (product) =>
      (!category || product.category === category) &&
      product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <Navbar onSearch={setSearch} />
      <Filters
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />
      <ProductGallery products={filteredProducts} />
    </div>
  );
};

export default App;
