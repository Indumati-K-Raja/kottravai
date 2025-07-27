import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'How Rural Women Are Redefining Entrepreneurship',
    date: '2024-07-10',
    summary: 'Stories and strategies from the field: how Kottravai’s creators are building businesses and changing lives.',
    cta: { label: 'Read More', href: '#' }
  },
  {
    title: 'Sustainable Craft: The Future of Handmade',
    date: '2024-06-28',
    summary: 'Why eco-friendly materials and traditional skills are the next big thing in global markets.',
    cta: { label: 'Read More', href: '#' }
  },
  {
    title: 'Mentorship That Matters',
    date: '2024-06-15',
    summary: 'How mentors and mentees at Kottravai are learning from each other and growing together.',
    cta: { label: 'Read More', href: '#' }
  }
];

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Kottravai Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Stories, Insights & Inspiration
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Explore our latest blog posts on rural entrepreneurship, sustainable craft, and women’s empowerment.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 text-purple-600">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{post.title}</h2>
              <p className="text-gray-700 text-center mb-4">{post.summary}</p>
            </div>
            <div className="text-center mt-4">
              <a href={post.cta.href} className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {post.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Blog; 