import React from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Stay updated with the latest news, achievements, and stories from Kottravai.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Achievements</h3>
              <p className="text-gray-600 mb-4">Read about our recent successes and milestones in empowering rural women.</p>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Press Releases</h3>
              <p className="text-gray-600 mb-4">Official announcements and statements from our organization.</p>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-4">Inspiring stories of transformation and empowerment from our community.</p>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-700 mb-8">
            Get the latest news and updates delivered to your inbox.
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

export default News;