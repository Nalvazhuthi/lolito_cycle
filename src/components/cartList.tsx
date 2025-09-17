'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useProductStore } from '@/store/useProductStore';
import { CloseIcon, DeleteIcon } from '@/assets/svg/exportSvg';
import { useUIStore } from '@/store/useUIStore';
import Regulardropdown from './regulardropdown';

const CartList = () => {
    const { cartItems, removeFromCart, updateCartQuantity } = useProductStore();
    const { closeCart } = useUIStore();

    const cartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                closeCart();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeCart]);

    const handleQuantityChange = (id: number, newQuantity: string) => {
        const quantity = parseInt(newQuantity, 10);
        if (quantity > 0) {
            updateCartQuantity(id, quantity);
        }
    };

    return (
        <div
            ref={cartRef}
            className="cart-list fixed top-0 right-0 h-full w-[400px] bg-white bg-opacity-90 shadow-2xl z-50 border-l border-gray-300"
            style={{ backdropFilter: 'blur(12px)' }}
        >
            {/* Close Button */}
            <div className="flex justify-end p-5 border-b border-gray-200">
                <button
                    onClick={closeCart}
                    className="icon text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    aria-label="Close cart"
                >
                    <CloseIcon />
                </button>
            </div>

            {/* Cart Content */}
            <div className="h-full px-6 py-5 space-y-6 overflow-y-auto max-h-[calc(100%-70px)]">
                {cartItems.length === 0 ? (
                    <div className="py-20 text-center text-gray-400 italic font-medium select-none">
                        Your cart is empty. Shop now!
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-5 border-b border-gray-100 py-6 last:border-b-0"
                            >
                                {/* Image */}
                                <div className="w-24 h-24 relative rounded-md border border-gray-200 overflow-hidden bg-white shadow-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 flex flex-col gap-1.5 justify-between">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="heading flex justify-between items-center gap-1">
                                            <h4 className="text-base font-semibold text-gray-900 line-clamp-1">
                                                {item.name}
                                            </h4>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="icon text-sm text-red-600 hover:text-red-700 hover:underline transition"
                                            >
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold ">
                                            ₹{item.price.toLocaleString()}
                                        </p>

                                        {/* Quantity Dropdown */}
                                        <div className="max-w-[180px]">
                                            <Regulardropdown
                                                label="Quantity"
                                                options={["1", "2", "3", "4", "5"]}
                                                value={item.quantity.toString()}
                                                onChange={(newQuantity) =>
                                                    handleQuantityChange(item.id, newQuantity)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-sm font-semibold text-gray-800">
                                            Total: ₹{(item.price * item.quantity).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Total */}
                        <div className="pt-5 mt-5 border-t border-gray-200 text-right text-lg font-bold text-gray-900">
                            Total: ₹
                            {cartItems
                                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                .toLocaleString()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartList;

