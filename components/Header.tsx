"use client"

import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { Toggler } from "./Toggler";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="px-4 lg:px-6 h-14 flex items-center bg-black text-white"
      suppressHydrationWarning={true}
    >
      <Link href="/" className="flex items-center justify-center text-2xl">
        La<span className="text-emerald-200 font-bold">P</span>hElper
      </Link>

      <nav className="ml-auto lg:flex lg:items-center hidden">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 link">
          Home
        </Link>
        <Link href="#templates" className="text-sm font-medium hover:underline underline-offset-4 link">
          Templates
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4 link">
          Pricing
        </Link>
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 link">
          About Us
        </Link>
        <Link href="/signup" className="text-sm font-medium hover:underline underline-offset-4 link">
          Sign Up
        </Link>
      </nav>

      {/* Mobile Menu Icon (Hamburger) */}
      <button
        className="block lg:hidden text-white focus:outline-none ml-auto"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle mobile menu" // Accessibility improvement
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-black text-white z-50">
          <div className="flex flex-col items-center py-4">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 mb-2">
              Home
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:underline underline-offset-4 mb-2">
              Templates
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4 mb-2">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 mb-2">
              About Us
            </Link>
            <Link href="/signup" className="text-sm font-medium hover:underline underline-offset-4 mb-2">
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <Toggler />
    </header>
  );
};

export default Header;
