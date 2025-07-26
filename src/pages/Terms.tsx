import React from 'react';

const Terms = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Terms & Conditions
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Our Commitment & Your Rights
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Please read our terms and conditions carefully before using our platform or purchasing our products.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service (Sample)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-left">
          <li>All products are handcrafted and may have slight variations.</li>
          <li>Orders are subject to availability and confirmation.</li>
          <li>Returns and exchanges are accepted within 7 days of delivery.</li>
          <li>Personal data is handled securely and never shared with third parties.</li>
          <li>By using our site, you agree to our privacy policy and terms.</li>
        </ul>
        <p className="text-gray-500 text-sm mt-6">For full terms and privacy policy, please contact us at support@kottravai.in.</p>
      </div>
    </section>
  </div>
);

export default Terms; 