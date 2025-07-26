import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Women Makers Summit 2024',
    date: '2024-08-15',
    location: 'Tenkasi, Tamil Nadu',
    description: 'A gathering of rural women entrepreneurs, mentors, and partners to celebrate achievements and share new ideas.',
    cta: { label: 'Register', href: '#' }
  },
  {
    title: 'Kottravai Product Showcase',
    date: '2024-09-10',
    location: 'Chennai',
    description: 'Showcasing the latest handcrafted products and innovations from our artisan network.',
    cta: { label: 'Learn More', href: '#' }
  },
  {
    title: 'Skill-Building Workshop',
    date: '2024-10-05',
    location: 'Puliyangudi',
    description: 'Hands-on training for new and aspiring women artisans. Open to all skill levels.',
    cta: { label: 'Sign Up', href: '#' }
  }
];

const Events = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Events & Gatherings
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Join Our Movement in Action
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Discover upcoming events, workshops, and celebrations that bring our community together.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 text-purple-600">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">{event.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{event.title}</h2>
              <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 text-center mb-4">{event.description}</p>
            </div>
            <div className="text-center mt-4">
              <a href={event.cta.href} className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {event.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Events; 