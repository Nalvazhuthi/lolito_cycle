'use client';

import React from 'react';
import Image from 'next/image';
import landingImage from '../assets/image/landing/cool-bicycle-studio.jpg';
import Shop from '@/components/shop';
import WhatsAppButton from '@/components/whatsAppButton';
import Footer from '@/components/Footer';
import CartList from '@/components/cartList';
import { useUIStore } from '@/store/useUIStore';

const Home = () => {
  const { isCartOpen, searchOpen } = useUIStore()

  return (
    <div className="landing-page relative w-full min-h-screen overflow-x-hidden pt-[60px] pb-0">

      <div className={`landing-image relative w-full h-[65vh] md:h-[75vh] sm:h-[60vh] z-0 transition-all duration-700 ease-in-out ${!searchOpen ? 'open' : 'close'}`}>
        <Image
          src={landingImage}
          alt="Cool bicycle in studio"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16 text-white z-10 transition-all duration-700 ease-in-out">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Top Speed Cycle - Azpire
          </h1>
          <p className="text-sm text-[#dbdbdb] sm:text-base md:text-lg max-w-lg sm:max-w-xl">
            The Top Speed Cycle is designed for speed lovers and urban commuters.
            Featuring a lightweight frame, precision gears, and premium brakes
            to elevate your ride.
          </p>
        </div>
      </div>




      {isCartOpen && <CartList />}

      {/* Shop Section */}
      <div className="shop-section bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-12">
        <Shop />
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
