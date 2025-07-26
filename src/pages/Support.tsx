import React from 'react';
import { HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react';

const supportTopics = [
  {
    title: 'Order Support',
    desc: 'Questions about your order, shipping, or returns.',
    cta: { label: 'Get Help', href: '#' }
  },
  {
    title: 'Product Information',
    desc: 'Learn more about our products, materials, and care instructions.',
    cta: { label: 'View Details', href: '#' }
  },
  {
    title: 'Become a Mentor',
    desc: 'Interested in mentoring? Find out how you can help.',
    cta: { label: 'Mentor FAQ', href: '#' }
  },
  {
    title: 'Contact Support',
    desc: 'Still need help? Reach out to our support team.',
    cta: { label: 'Contact Us', href: '/contact' }
  }
];

const Support = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Support & Help Center
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How can we help you?
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Find answers to common questions or reach out to our team for support.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {supportTopics.map((topic, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{topic.title}</h2>
              <p className="text-gray-700 text-center mb-4">{topic.desc}</p>
            </div>
            <div className="text-center mt-4">
              <a href={topic.cta.href} className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {topic.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Support; 