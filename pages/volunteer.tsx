import React from 'react';
import Link from 'next/link';

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Make a difference in the lives of rural women through your skills and dedication.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Craft Training</h3>
              <p className="text-gray-600 mb-4">Share your crafting skills and help train rural women in traditional and modern techniques.</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Teaching traditional crafts</li>
                <li>• Introducing modern techniques</li>
                <li>• Quality control training</li>
              </ul>
              <Link href="/join" className="text-purple-600 hover:text-purple-700 font-medium">
                Apply Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Support</h3>
              <p className="text-gray-600 mb-4">Help promote our products and mission through various marketing channels.</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Social media management</li>
                <li>• Content creation</li>
                <li>• Market research</li>
              </ul>
              <Link href="/join" className="text-purple-600 hover:text-purple-700 font-medium">
                Apply Now →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Support</h3>
              <p className="text-gray-600 mb-4">Assist with day-to-day operations and help manage our programs effectively.</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Data entry and management</li>
                <li>• Event coordination</li>
                <li>• Documentation support</li>
              </ul>
              <Link href="/join" className="text-purple-600 hover:text-purple-700 font-medium">
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our team of dedicated volunteers and help us empower rural women through sustainable craftsmanship.
          </p>
          <Link href="/join" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Start Volunteering
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;