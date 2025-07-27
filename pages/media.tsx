import React from 'react';
import Link from 'next/link';

const Media = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Media & Press
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Stay updated with our latest news, press releases, and media coverage.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Press Releases</h3>
              <p className="text-gray-600 mb-4">Latest announcements and official statements from Kottravai.</p>
              <Link href="/news" className="text-purple-600 hover:text-purple-700 font-medium">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media Coverage</h3>
              <p className="text-gray-600 mb-4">Articles and features about our work in various media outlets.</p>
              <Link href="/news" className="text-purple-600 hover:text-purple-700 font-medium">
                Read More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
              <p className="text-gray-600 mb-4">Visual stories of our work and the women we empower.</p>
              <Link href="/gallery" className="text-purple-600 hover:text-purple-700 font-medium">
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
          <p className="text-xl text-gray-700 mb-8">
            For press inquiries, interviews, or media partnerships, please contact us.
          </p>
          <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Contact Media Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Media;