'use client'

import React, { useEffect, useState } from 'react';
import { CartIcon, CloseIcon, SearchIcon } from '@/assets/svg/exportSvg';
import { useProductStore } from '@/store/useProductStore';
import { useUIStore } from '@/store/useUIStore';
import Link from 'next/link';

const Navbar = () => {
  const { searchValue, setSearchValue, cartItems } = useProductStore(); // Get searchValue and setSearchValue from Zustand store

  const { openCart } = useUIStore();

  const [isHydrated, setIsHydrated] = useState(false);
  const { searchOpen, openSearch, closeSearch } = useUIStore()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value); // Update the searchValue in the Zustand store
  };
  // Mark component as hydrated after client mount
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="navbar-container flex justify-between items-center px-6 md:px-12 py-4 fixed top-0 w-full z-10 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="logo text-xl font-bold tracking-tight">
        <span className="text-black">LO</span>
        <span className="text-[#DD1E30]">LITO</span>
        <span className="text-black"> CYCLE</span>
      </Link>

      {/* User Icons */}
      <div className="user-actions flex items-center gap-4">
        <button className="search" aria-label="Search">
          {searchOpen ? (
            <div className="icon" onClick={closeSearch}>
              <CloseIcon />
            </div>
          ) :
            <div className="icon" onClick={openSearch}>
              <SearchIcon />
            </div>
          }

          <input
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search.."
            className={`search-field px-3 py-1.5 border border-gray-300 rounded-[25px] shadow-sm text-[14px] ${searchOpen ? "open" : "close"}`}
            type="text"
            name="search"
            id="search-input"
          />
        </button>

        {!searchOpen &&
          <button
            className="cart relative p-2 rounded-md cursor-pointer hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Cart"
            onClick={openCart}
          >
            {isHydrated && cartItems.length > 0 && (
              <div className="list-items absolute top-[-5px] right-[-5px] bg-[#DD1E30] shadow-lg w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-semibold select-none">
                {cartItems.length}
              </div>
            )}
            <CartIcon />
          </button>}
      </div>
    </div>
  );
};

export default Navbar;
