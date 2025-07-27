import React from 'react';
import { ArrowRight, Smartphone, Download, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 w-full">
            <h2 className="text-4xl font-extrabold text-purple-700">
              Join the Kottravai Movement
            </h2>
            <h3 className="text-2xl font-semibold text-gray-900">
              Not just a customer. A changemaker.
            </h3>
            <p className="text-xl text-gray-700 opacity-90 leading-relaxed">
              Every click here funds a future. Every bowl, every bag, every lamp — handcrafted by women rewriting their stories. Shop with soul. Uplift a dream.
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center my-6">
              <div className="flex-grow border-t border-purple-100"></div>
              <span className="mx-4 text-lg text-purple-400 font-semibold tracking-wide select-none">Quick Actions</span>
              <div className="flex-grow border-t border-purple-100"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link to="/shop" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl active:scale-100 transition-all flex items-center justify-center font-bold text-lg border-2 border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300">
                <ArrowRight className="mr-3 h-6 w-6" />
                Shop Now
              </Link>
              <Link to="/partner" className="flex-1 bg-gradient-to-r from-white to-pink-50 text-purple-700 px-8 py-4 rounded-xl shadow-lg hover:bg-purple-50 hover:scale-105 hover:shadow-2xl active:scale-100 transition-all flex items-center justify-center font-bold text-lg border-2 border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300">
                <Download className="mr-3 h-6 w-6" />
                Partner with Us
              </Link>
              <Link to="/mentorship" className="flex-1 bg-gradient-to-r from-pink-100 to-purple-50 text-pink-700 px-8 py-4 rounded-xl shadow-lg hover:bg-pink-200 hover:scale-105 hover:shadow-2xl active:scale-100 transition-all flex items-center justify-center font-bold text-lg border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300">
                <HeartHandshake className="mr-3 h-6 w-6" />
                Donate a Skill
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;