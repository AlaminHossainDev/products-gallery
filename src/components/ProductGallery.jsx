import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductGallery = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({ category: "", sort: "default", search: "" });

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Sort products
    if (filters.sort === "priceLowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "priceHighToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    // Search products
    if (filters.search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [filters, products]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>
      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default ProductGallery;
