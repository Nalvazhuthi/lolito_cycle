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
    {
      image: landingImage1,
      title: "Top Speed - Strength with Style",
      description: "Strong high tensil frames meet striking water decal colours , built to perform and designed to stand out . Engineered for riders who demand more ."
    },
    {
      image: landingImage2,
      title: "Azpire - Built for Bold Riders",
      description:
        `Whether on city streets or rugged trails, AZPIRE delivers the perfect blend of power, control, and style – made for riders who aspire for more.\nCrafted with premium high tensile frames & finished with sleek water decal colours.`
    }
  ];
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


    </div>
  );
};

export default Home;










