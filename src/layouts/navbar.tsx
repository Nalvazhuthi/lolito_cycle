'use client'
import { CartIcon, ProfileIcon, SearchIcon } from '@/assets/svg/exportSvg';
import { useProductStore } from '@/store/useProductStore';
import { useUIStore } from '@/store/useUIStore';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { cartItems } = useProductStore();

    const { openCart } = useUIStore()

    return (
        <div className="navbar-container flex justify-between items-center px-6 md:px-12 py-4 fixed top-0 w-full z-10 bg-white shadow-sm">

            {/* Logo */}
            <Link href="/" className="logo text-xl font-bold tracking-tight">
                <span className="text-black">LO</span>
                <span className="text-[#DD1E30]">LITO</span>
                <span className="text-black"> CYCLE</span>
            </Link>


            {/* Navigation Links */}
            {/* <div className="navs-wrapper hidden md:flex items-center gap-6">
                {['home', 'shop', 'pages', 'blog', 'contact us'].map((nav) => (
                    <Link
                        href={`/${nav.replace(/\s+/g, '-').toLowerCase()}`}
                        key={nav}
                        className="nav relative group capitalize text-sm font-medium cursor-pointer transition-all duration-200 text-black"
                    >
                        <span className="relative z-10">{nav}</span>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div> */}

            {/* User Icons */}
            <div className="user-actions flex items-center gap-4">
                <Link href="/profile" aria-label="Profile">
                    <ProfileIcon />
                </Link>
                <button className="search" aria-label="Search">
                    <SearchIcon />
                </button>
                <button
                    className="cart relative p-2 rounded-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-red-600"
                    aria-label="Cart"
                    onClick={openCart}
                >
                    {cartItems.length > 0 && (
                        <div className="list-items absolute top-[-5px] right-[-5px] bg-[#DD1E30] shadow-lg w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-semibold select-none">
                            {cartItems.length}
                        </div>
                    )}
                    <CartIcon />
                </button>



            </div>
        </div>
    );
};

export default Navbar;
