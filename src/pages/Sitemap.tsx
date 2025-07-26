import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Our Story', to: '/story' },
  { label: 'Join Us', to: '/join' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Creators', to: '/creators' },
  { label: 'Hubs', to: '/hubs' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Donate', to: '/donate' },
  { label: 'Partner', to: '/partner' },
  { label: 'Media Kit', to: '/media' },
  { label: 'Events', to: '/events' },
  { label: 'News', to: '/news' },
  { label: 'Support', to: '/support' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
];

const Sitemap = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Sitemap
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Explore Kottravai
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Find your way around our platform with this complete list of pages.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {links.map((link, i) => (
          <Link key={i} to={link.to} className="block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl text-lg font-semibold text-purple-700 hover:text-pink-600 text-center transition-all duration-300">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Sitemap; 