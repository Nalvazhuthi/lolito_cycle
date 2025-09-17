'use client';

import React from 'react';
import Image from 'next/image';
import landingImage1 from '../assets/image/landing/cool-bicycle-studio.jpg';
import landingImage2 from '../assets/image/landing/pascal-meier-v-lou6eJYWg-unsplash.jpg'
import Shop from '@/components/shop';
import WhatsAppButton from '@/components/whatsAppButton';
import Footer from '@/components/Footer';
import CartList from '@/components/cartList';
import { useUIStore } from '@/store/useUIStore';
import Slider from '@/components/slider';

const Home = () => {
  const { isCartOpen, searchOpen } = useUIStore()
  const LandingSliderData = [
    { image: landingImage1, title: "Top Speed Cycle", description: "The Top Speed Cycle is designed for speed lovers and urban commuters. Featuring a lightweight frame, precision gears, and premium brakes to elevate your ride." },
    { image: landingImage2, title: "Azpire", description: "The Top Speed Cycle is designed for speed lovers and urban commuters. Featuring a lightweight frame, precision gears, and premium brakes to elevate your ride." }
  ]
  return (
    <div className="landing-page relative w-full min-h-screen overflow-x-hidden pt-[60px] pb-0">

      <Slider data={LandingSliderData} />

      {isCartOpen && <CartList />}

      {/* Shop Section */}
      <div className="shop-section bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-12">
        <Shop />
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
      F
    </div>
  );
};

export default Home;










