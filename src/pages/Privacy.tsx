import React from 'react';

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Privacy Policy
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Your Privacy Matters
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Learn how we protect your data and respect your privacy at Kottravai.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy (Sample)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-left">
          <li>We collect only the information necessary to process your orders and provide our services.</li>
          <li>Your data is stored securely and never sold to third parties.</li>
          <li>We use cookies to enhance your browsing experience.</li>
          <li>You can request to view, update, or delete your personal data at any time.</li>
          <li>For questions about privacy, contact us at support@kottravai.in.</li>
        </ul>
        <p className="text-gray-500 text-sm mt-6">This is a sample privacy policy. Please consult your legal advisor for a full version.</p>
      </div>
    </section>
  </div>
);

export default Privacy; 