import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Kottravai
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Empowering rural women through sustainable craftsmanship and economic independence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Our Mission</h2>
            <p>
              Kottravai is dedicated to empowering rural women by providing them with the skills, resources, and market access needed to create sustainable livelihoods through traditional and modern craftsmanship.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              We envision a world where every rural woman has the opportunity to achieve economic independence while preserving and promoting traditional crafts and sustainable practices.
            </p>
            
            <h2>Our Values</h2>
            <ul>
              <li><strong>Empowerment:</strong> We believe in the power of women to transform their communities</li>
              <li><strong>Sustainability:</strong> We promote eco-friendly practices and materials</li>
              <li><strong>Tradition:</strong> We honor and preserve traditional crafting techniques</li>
              <li><strong>Innovation:</strong> We embrace modern approaches to enhance traditional crafts</li>
              <li><strong>Community:</strong> We build strong, supportive networks among our artisans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Involved</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Join Our Team
            </Link>
            <Link href="/donate" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;