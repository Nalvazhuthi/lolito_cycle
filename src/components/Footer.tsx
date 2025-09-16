import { FacebookIcon, InstagramIcon, WhatsappSmallIcon } from '@/assets/svg/exportSvg';
import React from 'react';

const Footer = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8778066961";

  const message = encodeURIComponent("Hello! I would like to chat."); // Optional default message

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 pb-24 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Lolito Cycle</h2>
          <p className="text-sm text-gray-400">
            Premium bicycles and gear for road warriors, city riders, and trail blazers.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/top-speed-cycle" className="hover:text-white transition">Top Speed Cycle</a></li>
            <li><a href="/azpire-cycle" className="hover:text-white transition">Azpire Cycle</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@lolitocycle.com</li>
            <li>Phone: +91 8778066961</li>
            <li>Location: Tiruvallur district of Tamil Nadu, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon hover:text-blue-500">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon hover:text-pink-400">
              <InstagramIcon />
            </a>

            <a href="/" onClick={handleClick}
              target="_blank" rel="noopener noreferrer" className="icon hover:text-green-400">
              <WhatsappSmallIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lolito Cycle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
