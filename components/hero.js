"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Pic1 from "@/images/pic1.jpg";
import Pic2 from "@/images/pic2.jpg";
import Pic3 from "@/images/pic3.jpg";

const images = [Pic1, Pic2, Pic3];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt="Café ambiance"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg border border-white/20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">
            Welcome to <span className="text-[#deae65]">Café Castro</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-8 animate-fade-in-delay">
            Experience the perfect blend of artisanal coffee and a cozy
            ambiance.
          </p>
          <button
            className="bg-[#deae65] hover:bg-[#182e28] text-white px-10 py-4 rounded-full text-lg 
            font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            Book table
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
