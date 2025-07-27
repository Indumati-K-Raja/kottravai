import React from 'react';
import Link from 'next/link';

const Partner = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Join us in our mission to empower rural women and preserve traditional crafts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partnerships</h3>
                  <p className="text-gray-600 mb-4">Partner with us to support rural women empowerment and sustainable development.</p>
                  <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">NGO Collaborations</h3>
                  <p className="text-gray-600 mb-4">Work together with other organizations to create greater impact in rural communities.</p>
                  <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Partnerships</h3>
                  <p className="text-gray-600 mb-4">Collaborate on research and development projects related to rural empowerment.</p>
                  <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Type
                    </label>
                    <select
                      id="type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option>Select partnership type</option>
                      <option>Corporate Partnership</option>
                      <option>NGO Collaboration</option>
                      <option>Academic Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Proposal
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Submit Partnership Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;