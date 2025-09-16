'use client';

import React from 'react';
import Image from 'next/image';
import { useProductStore } from '@/store/useProductStore';
import { Product } from './shop';

export interface CardProps {
    product: Product
}


const Card = ({ product }: CardProps) => {
    const addToCart = useProductStore((state) => state.addToCart);

    const discountPercent = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
    const isNew = (new Date().getTime() - new Date(product.uploadedAt).getTime()) / (1000 * 60 * 60 * 24) <= 2;

    return (
        <div className="bg-white border relative border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between p-5">
            {/* Image */}
            <div className="relative">
                <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="object-contain w-full h-[220px]"
                />
            </div>

            {/* Badges */}
            {/* <div className="absolute w-full top-5 left-0 flex gap-1 justify-between"> */}
            {isNew && <div className="absolute top-5 left-0 text-white text-[11px] font-semibold px-3 py-1 text-center min-w-[60px] rounded-tr-md rounded-br-md bg-black">
                NEW!
            </div>}
            <div className="absolute top-5 right-0 bg-red-600 text-white text-[11px] font-semibold px-3 py-1 text-center min-w-[60px] rounded-tl-md rounded-bl-md">
                -{discountPercent}%
            </div>
            {/* </div> */}

            {/* Details */}
            <div className="flex flex-col gap-2 mt-4">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-2 text-base font-medium text-gray-800">
                    <span className="text-red-500 line-through text-sm">
                        ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-900 font-semibold">
                        ₹{product.price.toLocaleString()}
                    </span>
                </div>

                {/* Rating */}
                <div className="text-yellow-400 text-sm select-none">★★★★★</div>

                {/* Add to Cart */}
                <button
                    onClick={() => addToCart(product)}
                    className="mt-3 cursor-pointer bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-2.5 px-5 rounded-md transition-colors duration-300 w-full shadow-sm hover:shadow-md"
                >
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default Card;
