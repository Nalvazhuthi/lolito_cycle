'use client';

import React, { useState } from 'react';
import Regulardropdown from './regulardropdown';
import Card from './card';
import { products } from '@/data/products';
import { useProductStore } from '@/store/useProductStore';

const Shop = () => {
  const [selected, setSelected] = useState('Sort by Date');
  const { searchValue } = useProductStore(); // Get searchValue from Zustand store

  // 🔃 Apply sort based on dropdown selection
  const sortedProducts = [...products].sort((a, b) => {
    switch (selected) {
      case 'Sort by Name':
        return a.name.localeCompare(b.name);
      case 'Sort by Price':
        return a.price - b.price;
      case 'Sort by Date':
        return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(); // Most recent first
      case 'Sort by Popularity':
        return b.price - a.price; // Placeholder logic: more expensive = more "popular"
      default:
        return 0;
    }
  });

  // 🔍 Filter products based on search value (case insensitive)
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="shop-container px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="heading flex items-center sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <div className="results text-[#808080] text-sm sm:text-base">
          Showing all {filteredProducts.length} results
        </div>

        <div className="layout-settings flex items-center gap-4">
          <Regulardropdown
            label=""
            options={['Sort by Date', 'Sort by Name', 'Sort by Price', 'Sort by Popularity']}
            value={selected}
            onChange={setSelected}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-wrapper transition-all duration-500 ease-in-out grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
