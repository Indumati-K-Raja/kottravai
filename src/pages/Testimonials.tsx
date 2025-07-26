import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Bhuvana',
    role: 'Artisan, Kottravai',
    quote: 'When my daughter saw my work online, she said, “Amma, you’re famous!” That was everything.'
  },
  {
    name: 'Santhosh',
    role: 'Mentor, TASS',
    quote: 'This is not charity. This is skill in motion.'
  },
  {
    name: 'Karunya Gunavathy',
    role: 'Co-Founder',
    quote: 'It started with one bowl. It became a business. Then a movement.'
  }
];

const Testimonials = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Voices of Change
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Hear from the women, mentors, and partners who are shaping the Kottravai movement.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
            <Quote className="h-8 w-8 text-purple-400 mb-4" />
            <blockquote className="text-gray-700 italic text-lg mb-4 leading-relaxed">“{t.quote}”</blockquote>
            <div className="text-sm font-semibold text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Testimonials; 