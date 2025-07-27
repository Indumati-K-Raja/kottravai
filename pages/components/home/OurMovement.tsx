import React from 'react';

const OurMovement = () => (
  <section className="relative overflow-hidden">
    {/* Vertical accent bar */}
    <div className="absolute left-0 top-0 h-full w-2  rounded-r-3xl shadow-xl" style={{zIndex: 1}}></div>
    <div className="relative max-w-4xl mx-auto px-4 z-10 ">
      <div className="flex flex-col md:flex-row items-center bg-white/90 rounded-3xl shadow-2xl border-l-8 border-purple-600 border-2 border-purple-200 p-0 md:p-0 overflow-hidden">
        
        {/* Right: Main content */}
        <div className="flex-1 p-8 md:p-12 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6 tracking-tight text-center" style={{letterSpacing: '.02em'}}>Our Movement</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
            This is not just a product. It’s a second chance.
            For decades, she rolled beedis in silence — inhaling smoke, hiding talent, losing health.
            Today, through Kottravai, those same hands shape bowls, baskets, toys, and tools — each one a declaration:
          </p>
          <div className="mt-8 flex flex-col items-center">
            <blockquote className="text-2xl font-bold italic text-pink-500 border-l-4 border-pink-400 pl-6 py-4 bg-pink-50 rounded-xl shadow-sm max-w-xl mx-auto text-center">
              I am more than survival. I am skill, I am strength, I am the future.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurMovement; 