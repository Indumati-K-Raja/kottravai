import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Kottravai Wins National Social Impact Award',
    date: '2024-07-01',
    summary: 'Kottravai was recognized for empowering over 1,000 rural women through sustainable entrepreneurship.',
    cta: { label: 'Read More', href: '#' }
  },
  {
    title: 'New Hub Launch in Madurai',
    date: '2024-06-15',
    summary: 'Our latest weaving hub opens, bringing new opportunities to women artisans in the region.',
    cta: { label: 'Read More', href: '#' }
  },
  {
    title: 'Kottravai Partners with Global Retailer',
    date: '2024-05-20',
    summary: 'A new partnership will bring Kottravai products to international markets.',
    cta: { label: 'Read More', href: '#' }
  }
];

const News = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          News & Announcements
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Latest Updates from Kottravai
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Stay up to date with our latest achievements, partnerships, and stories from the field.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((item, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 text-purple-600">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">{item.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{item.title}</h2>
              <p className="text-gray-700 text-center mb-4">{item.summary}</p>
            </div>
            <div className="text-center mt-4">
              <a href={item.cta.href} className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {item.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default News; 