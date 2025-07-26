import React from 'react';

const faqs = [
  {
    question: 'How can I become a Kottravai artisan?',
    answer: 'We welcome women from rural areas who are interested in learning traditional crafts. Contact us through our mentorship program to learn about training opportunities.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship our products worldwide. Shipping costs and delivery times vary by location.'
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'All our products go through rigorous quality checks. Our artisans are trained to maintain high standards, and each product is inspected before shipping.'
  },
  {
    question: 'How can I support the movement?',
    answer: 'You can support us by purchasing our products, spreading awareness, becoming a mentor, or partnering with us for corporate social responsibility initiatives.'
  }
];

const Faq = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Frequently Asked Questions
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Your Questions, Answered
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Find answers to the most common questions about Kottravai, our products, and our mission.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Faq; 