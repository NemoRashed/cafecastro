"use client";

import { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/images/logoblack.png";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-full 
      transition-all duration-300 backdrop-blur-lg border border-white/20 shadow-lg
      ${isScrolled ? "bg-white/90" : "bg-white/80 hover:bg-white/70"}`}
    >
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-12 h-16">
        {/* Logo (Left) */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Go to homepage"
        >
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Company Logo"
            className="w-20 md:w-36"
          />
        </Link>

        {/* Desktop Menu (Center) */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#menu">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#testimonials">Contact</NavLink>
          <NavLink href="#location">Testimonials</NavLink>
        </div>

        {/* Book Table Button (Right) */}
        <Link
          href="#booking"
          className="hidden md:block px-5 py-2 rounded-full text-white bg-[#182e28] hover:bg-[#b99154] transition-all"
        >
          Book Table
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#182e28]" />
          ) : (
            <Menu className="h-6 w-6 text-[#182e28]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-lg transition-all duration-300 rounded-xl
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </MobileNavLink>
          <MobileNavLink href="#location" onClick={() => setIsMenuOpen(false)}>
            Location
          </MobileNavLink>
          <Link
            href="#booking"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center text-white bg-[#182e28] hover:bg-[#b99154] transition-all px-5 py-2 rounded-full"
          >
            Book Table
          </Link>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-[#182e28] hover:text-[#b99154] transition-colors duration-300 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-[#182e28] hover:text-[#b99154] transition-colors duration-300 font-medium block py-2"
  >
    {children}
  </Link>
);
