import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const stats = [
  { value: '1000+', label: 'Beedi Labours', color: 'text-purple-700' },
  { value: '100%', label: 'Made in India', color: 'text-pink-600' },
  { value: '24/7', label: 'Support', color: 'text-purple-700' },
];

const Hero = () => {
  return (
    <section id="home" className="relative py-6 bg-gradient-to-br from-purple-100 via-pink-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/40 via-white/0 to-white/0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Textual content */}
          <div className="space-y-10">
            {/* Intro: Icon + Tagline */}
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/motherwithchildvector.svg" alt="Mother with child icon" className="h-8 w-8" />
              <span className="text-purple-600 font-semibold tracking-wide text-xg">Handmade by rural women. Rooted in heritage. Powered by purpose.</span>
            </div>
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
              From Beedi Hands <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">To Global Brands</span>
            </h1>
            {/* Subheadline */}
            <p className="text-2xl text-gray-700 font-medium leading-relaxed mb-6">
              She never imagined her hands could hold power. Now, they craft pride.
            </p>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-8">
              <Link
                href="/shop"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center font-bold text-lg"
              >
                Shop Her Creations
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                href="/story"
                className="border-2 border-purple-600 text-purple-700 px-10 py-4 rounded-xl hover:bg-purple-50 transition-all font-bold text-lg text-center"
              >
                Meet the Makers
              </Link>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-6">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="text-base text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image card with glow */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 w-full max-w-2xl">
              <img
                src="/assets/tenkasi.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women craftsperson working on handmade products"
              />
              <div className="absolute -top-6 left-6 bg-white rounded-xl p-4 shadow-lg flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">Essence of Mother's Love</span>
              </div>
              <div className="absolute -bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">In Every Creation</span>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;