import { WhatsAppIcon } from '@/assets/svg/exportSvg'
import React from 'react'

const WhatsAppButton = () => {
    // Access env variable directly here
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8778066961"; 
    const message = encodeURIComponent("Hello! I would like to chat."); // Optional default message

    const handleClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <div className='fixed bottom-4 right-4 z-50 cursor-pointer'>
            <button
                onClick={handleClick}
                className='flex cursor-pointer items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300'
                type="button"
            >
                <div className="icon">
                    <WhatsAppIcon />
                </div>
                <span className='text-sm font-medium'>Chat with us</span>
            </button>
        </div>
    )
}

export default WhatsAppButton
