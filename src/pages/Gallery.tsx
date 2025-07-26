import React from 'react';

const images = [
  'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5650072/pexels-photo-5650072.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6207350/pexels-photo-6207350.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
];

const Gallery = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Gallery
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Moments from the Movement
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Explore photos of our artisans, products, events, and community impact.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg bg-white/80">
            <img src={img} alt="Kottravai Gallery" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Gallery; 