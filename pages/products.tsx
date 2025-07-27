import React from 'react';
import Link from 'next/link';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Handcrafted with love and purpose by rural women artisans.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product categories will be displayed here */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coconut Shell Creations</h3>
              <p className="text-gray-600 mb-4">Beautiful bowls, spoons, and decorative items made from coconut shells.</p>
              <Link href="/shop?category=coconut" className="text-purple-600 hover:text-purple-700 font-medium">
                View Products →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Banana Bark Decor</h3>
              <p className="text-gray-600 mb-4">Eco-friendly wall hangings and home decor items.</p>
              <Link href="/shop?category=banana" className="text-purple-600 hover:text-purple-700 font-medium">
                View Products →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coir Weavings</h3>
              <p className="text-gray-600 mb-4">Traditional baskets and storage solutions made from coir.</p>
              <Link href="/shop?category=weaving" className="text-purple-600 hover:text-purple-700 font-medium">
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;