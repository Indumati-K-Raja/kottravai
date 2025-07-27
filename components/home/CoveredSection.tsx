import React from 'react';
import { ShieldCheck, MessageCircle, Smile } from 'lucide-react';
import Link from 'next/link';

const cards = [
  // Features
  {
    icon: <MessageCircle className="h-10 w-10 text-purple-600 bg-purple-100 rounded-full p-2" />, // Fast Support
    title: 'Fast Support',
    description: 'Real people, real help. We’re here for you—always.',
    color: 'from-purple-50 to-purple-100',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-600 bg-green-100 rounded-full p-2" />, // Safe + Secure
    title: 'Safe + Secure',
    description: 'Your payments are protected. Our artisans are accountable.',
    color: 'from-green-50 to-green-100',
  },
  {
    icon: <Smile className="h-10 w-10 text-pink-600 bg-pink-100 rounded-full p-2" />, // Easy to Use
    title: 'Easy to Use',
    description: 'No jargon. Just a caring, simple experience.',
    color: 'from-pink-50 to-pink-100',
  },
  // Explore
  {
    icon: <span className="text-3xl">🛍️</span>,
    title: 'Shop Products',
    description: 'Browse handcrafted items made by our creators',
    color: 'from-purple-100 to-purple-50',
    to: '/shop',
  },
  {
    icon: <span className="text-3xl">🏭</span>,
    title: 'Visit Hubs',
    description: 'Explore our crafting hubs across Tamil Nadu',
    color: 'from-green-100 to-green-50',
    to: '/hubs',
  },
  {
    icon: <span className="text-3xl">👩‍🎨</span>,
    title: 'Meet Creators',
    description: 'Connect with talented women entrepreneurs',
    color: 'from-pink-100 to-pink-50',
    to: '/creators',
  },
  {
    icon: <span className="text-3xl">🎓</span>,
    title: 'Join Programs',
    description: 'Learn skills through our mentorship programs',
    color: 'from-orange-100 to-orange-50',
    to: '/mentorship',
  },
];

const CoveredSection = () => {
  return (
    <section className="py-5 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kottravai has you covered</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our promises and explore all that our empowering platform offers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card, idx) => {
            if (card.to) {
              return (
                <Link
                  key={card.title}
                  href={card.to}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-lg border border-purple-100 p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-base font-medium">{card.description}</p>
                </Link>
              );
            } else {
              return (
                <div
                  key={card.title}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-lg border border-purple-100 p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-base font-medium">{card.description}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="text-center">
                      <Link href="/shop" className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors font-semibold text-lg">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoveredSection; 