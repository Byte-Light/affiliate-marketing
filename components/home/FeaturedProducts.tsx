"use client";
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "A short description of Product 1 goes here.",
    image: "/images/product1.jpg",
    link: "/products/product1"
  },
  {
    id: 2,
    name: "Product 2",
    description: "A short description of Product 2 goes here.",
    image: "/images/product2.jpg",
    link: "/products/product2"
  },
  {
    id: 3,
    name: "Product 3",
    description: "A short description of Product 3 goes here.",
    image: "/images/product3.jpg",
    link: "/products/product3"
  }
];

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <Link href={product.link}>
                  <button className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
