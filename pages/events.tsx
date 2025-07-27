import React from 'react';
import Link from 'next/link';

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Join us at our upcoming events and workshops to learn more about our mission.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Craft Workshops</h3>
              <p className="text-gray-600 mb-4">Learn traditional crafting techniques from our skilled artisans.</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Next Workshop: December 15, 2024</p>
                <p>Location: Rural Crafting Hub</p>
              </div>
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                Register Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exhibition</h3>
              <p className="text-gray-600 mb-4">View and purchase handcrafted products from our women artisans.</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Next Exhibition: January 20, 2025</p>
                <p>Location: Community Center</p>
              </div>
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">Skill development programs for rural women in various crafts.</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Next Program: February 10, 2025</p>
                <p>Location: Training Center</p>
              </div>
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-700 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;