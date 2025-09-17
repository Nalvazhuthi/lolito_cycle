"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useUIStore } from "@/store/useUIStore";

// Slide type
interface Slide {
    image: StaticImageData | string;
    title: string;
    description: string;
}

interface SliderProps {
    data: Slide[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
    const [isTransitioning, setIsTransitioning] = useState(true);
    const { searchOpen } = useUIStore()

    // Clone first & last slides for looping
    const slides = [data[data.length - 1], ...data, data[0]];

    const goToNext = () => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(true);
    };

    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle infinite loop reset
    const handleTransitionEnd = () => {
        if (currentIndex === slides.length - 1) {
            // At clone of first → jump to real first
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            // At clone of last → jump to real last
            setIsTransitioning(false);
            setCurrentIndex(slides.length - 2);
        }
    };

    // Whenever transition is turned off, re-enable it on the next tick
    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <div className={`landing-image relative w-full h-[65vh] md:h-[75vh] sm:h-[60vh] z-0 transition-all duration-700 ease-in-out ${!searchOpen ? 'open' : 'close'}`}>
            {/* Slides */}
            <div
                className={`flex ${isTransitioning
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                    }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-full h-[65vh] md:h-[75vh] sm:h-[60vh]"
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-16 text-white z-10">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index + 1)} // +1 because of clones
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index + 1 ? "bg-white" : "bg-gray-400/70"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
