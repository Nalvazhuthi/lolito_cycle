'use client';

import React, { useState } from 'react';
import Regulardropdown from './regulardropdown';
import Card from './card';
import cycleimage from '../assets/image/cycles/cycle-1.png';
import { StaticImageData } from 'next/image';


export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string | StaticImageData;
  quantity: number;
  uploadedAt: string; // Can be 'Date' if you parse it later
}

const Shop = () => {
  const [selected, setSelected] = useState('Sort by Date');

  const products: Product[] = [
    {
      id: 1,
      name: 'Hero Sprint Cycle',
      price: 7499,
      originalPrice: 9399,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-10',
    },
    {
      id: 2,
      name: 'Azpire Road Warrior',
      price: 12999,
      originalPrice: 15999,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-11',
    },
    {
      id: 3,
      name: 'Top Speed Velocity X',
      price: 10499,
      originalPrice: 12499,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-12',
    },
    {
      id: 4,
      name: 'Hero Urban Trail MTB',
      price: 8499,
      originalPrice: 9999,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-13',
    },
    {
      id: 5,
      name: 'Azpire X100 Adventure',
      price: 11499,
      originalPrice: 13999,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-14',
    },
    {
      id: 6,
      name: 'Top Speed Racer Pro',
      price: 9999,
      originalPrice: 11999,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-15',
    },
    {
      id: 7,
      name: 'Hero Eco City Rider',
      price: 6999,
      originalPrice: 8499,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-15',
    },
    {
      id: 8,
      name: 'Azpire Gravel Crusher',
      price: 13499,
      originalPrice: 15999,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-15',
    },
    {
      id: 9,
      name: 'Top Speed Urban Commuter',
      price: 8999,
      originalPrice: 10499,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-16',
    },
    {
      id: 10,
      name: 'Hero Trail Blazer Pro',
      price: 11999,
      originalPrice: 14499,
      image: cycleimage,
      quantity: 1,
      uploadedAt: '2025-09-16',
    },
  ];

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

  return (
    <div className="shop-container px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="heading flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="results text-[#808080] text-sm sm:text-base">
          Showing all {products.length} results
        </div>

        <div className="layout-settings flex items-center gap-4">
          <Regulardropdown
            label=""
            options={[
              'Sort by Date',
              'Sort by Name',
              'Sort by Price',
              'Sort by Popularity',
            ]}
            value={selected}
            onChange={setSelected}
          />

          {/* View Toggle */}
          {/* <div className="view-wrapper flex items-center gap-2">
            <button
              className={`p-2 border rounded ${view === 'grid' ? 'bg-black text-white' : 'border-gray-300'}`}
              onClick={() => setView('grid')}
              title="Grid View"
            >
              <GridIcon />
            </button>
            <button
              className={`p-2 border rounded ${view === 'list' ? 'bg-black text-white' : 'border-gray-300'}`}
              onClick={() => setView('list')}
              title="List View"
            >
              <ListIcon />
            </button>
          </div> */}

        </div>
      </div>

      {/* Product Cards */}
      <div
        className={"product-wrapper transition-all duration-500 ease-in-out grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}
      >
        {sortedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div >
  );
};

export default Shop;
