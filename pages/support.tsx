import React from 'react';
import Link from 'next/link';

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Us
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            There are many ways you can support our mission to empower rural women.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-4">Your financial support helps us provide training and resources to rural women.</p>
              <Link href="/donate" className="text-purple-600 hover:text-purple-700 font-medium">
                Donate Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">Share your skills and time to help us achieve our mission.</p>
              <Link href="/volunteer" className="text-purple-600 hover:text-purple-700 font-medium">
                Volunteer Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-600 mb-4">Partner with us to create greater impact in rural communities.</p>
              <Link href="/partner" className="text-purple-600 hover:text-purple-700 font-medium">
                Partner With Us →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shop</h3>
              <p className="text-gray-600 mb-4">Purchase handcrafted products and support our artisans directly.</p>
              <Link href="/shop" className="text-purple-600 hover:text-purple-700 font-medium">
                Shop Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-4">Help us raise awareness about our mission and impact.</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-4">Become part of our team and contribute to our mission.</p>
              <Link href="/join" className="text-purple-600 hover:text-purple-700 font-medium">
                Join Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700 mb-8">
            Have questions about how you can support us? Contact our team.
          </p>
          <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Support;