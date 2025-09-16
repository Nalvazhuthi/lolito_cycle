'use client';
import Image, { StaticImageData } from "next/image";
import React, { useState, useRef } from "react";

const ImageSlider = ({ images }: { images: StaticImageData[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        if (containerRef.current) {
            const { offsetWidth } = containerRef.current;
            containerRef.current.scrollTo({
                left: offsetWidth * index,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) scrollToIndex(activeIndex - 1);
    };

    const handleNext = () => {
        if (activeIndex < images.length - 1) scrollToIndex(activeIndex + 1);
    };

    return (
        <div className="relative w-full h-full">
            {/* Slider */}
            <div
                ref={containerRef}
                className="image-slider h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth overflow-x-hidden"
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-full flex justify-center items-center snap-center transition-all duration-500`}
                    >
                        <Image
                            src={img}
                            width={500}
                            height={400}
                            className={`w-auto object-cover align-middle transition-all duration-500 ${activeIndex === index ? "h-[70%]" : "h-[60%] opacity-70"
                                }`}
                            alt="slider-image"
                        />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
            >
                ▶
            </button>
        </div>
    );
};

export default ImageSlider;



// in images i have only 3 when i reach end it should display 1 and loop endlessly