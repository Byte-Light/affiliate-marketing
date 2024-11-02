"use client";
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading and Subheading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover Top Products & Boost Your Earnings!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore our top recommended products and start earning through our affiliate program.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/categories">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-colors">
              Browse Categories
            </button>
          </Link>
          <Link href="/blog">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-colors">
              Read Our Blog
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
