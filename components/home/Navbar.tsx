"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              MyAffiliateSite
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/categories" className="hover:text-gray-200 transition-colors">Categories</Link>
            <Link href="/blog" className="hover:text-gray-200 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</Link>
            <Link href="/categories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Categories</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
