import React, { useState } from 'react';
import { Users, Award, Globe, Heart, Lightbulb, MapPin, Layers3, Zap, BookOpen, ArrowRight, Star, Quote, Play, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

const OurStory = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Enhanced CTA Button Component
  const CTAButton = ({ to, children, variant = 'primary', size = 'md', className = '', onClick }: { to: string, children: React.ReactNode, variant?: string, size?: string, className?: string, onClick?: () => void }) => {
    const variants = {
      primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
      secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 shadow-md hover:shadow-lg',
      outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-md hover:shadow-lg'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <Link href={to}>
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  };

  // Unique Stats Card
  const StatCard = ({ number, label, icon, color }: { number: string, label: string, icon: React.ReactElement, color: string }) => (
    <div
      tabIndex={0}
      className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center focus-visible:ring-2 focus-visible:ring-purple-400 hover:scale-105"
    >
      <div className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full ${color} bg-opacity-20`}> 
        {React.cloneElement(icon, { className: 'h-8 w-8', color: undefined })}
      </div>
      <div className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">{number}</div>
      <div className="text-gray-700 text-base font-semibold">{label}</div>
    </div>
  );

  // Unique Hub Card
  const hubGradients = [
    'from-purple-100 to-pink-100',
    'from-yellow-100 to-orange-100',
    'from-pink-100 to-purple-100',
    'from-blue-100 to-purple-100',
  ];
  const HubCard = ({ hub, index }: { hub: any, index: number }) => (
    <div
      tabIndex={0}
      className={`group bg-gradient-to-br ${hubGradients[index % hubGradients.length]} rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col focus-visible:ring-2 focus-visible:ring-pink-400`}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md mr-4">
          {React.cloneElement(hub.icon, { className: 'h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform duration-300' })}
        </div>
        <h3 className="text-xl font-bold text-gray-900 flex-1">{hub.title}</h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1">{hub.desc}</p>
      <div className="flex items-center text-purple-600 text-base font-semibold group-hover:text-purple-700 transition-colors mt-auto">
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );

  // Unique Team Card
  const roleColors = {
    'Chief Mentor': 'bg-blue-500',
    'Co-Founder': 'bg-purple-500',
    'Co-Founder & CEO': 'bg-pink-500',
    'Advisors': 'bg-yellow-500',
    'Mentors': 'bg-green-500',
  };
  const TeamCard = ({ person }: { person: any }) => (
    <div
      tabIndex={0}
      className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center focus-visible:ring-2 focus-visible:ring-purple-400"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto ${(roleColors[person.role as keyof typeof roleColors]) || 'bg-purple-400'}`}> 
        {person.name.split(' ').map((n: string) => n[0]).join('')}
      </div>
      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${(roleColors[person.role as keyof typeof roleColors]) || 'bg-purple-400'} bg-opacity-80 text-white`}>{person.role}</span>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center">{person.desc}</p>
    </div>
  );

  // Unique Voices Card
  const QuoteCard = ({ quote, index }: { quote: any, index: number }) => (
    <div
      tabIndex={0}
      className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col focus-visible:ring-2 focus-visible:ring-pink-400 opacity-0 animate-fadein"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <Quote className="absolute -top-4 -left-4 h-16 w-16 text-purple-100 opacity-40 pointer-events-none" />
      <div className="flex-1">
        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{quote.text}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg mr-4">
            {quote.author.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{quote.author}</h4>
            <p className="text-gray-600 text-sm">{quote.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From rural kitchens to global markets — this is the journey of Kottravai, where every craft tells a story of empowerment, tradition, and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="500+" label="Women Empowered" icon={<Users />} color="bg-purple-500" />
            <StatCard number="15" label="Crafting Hubs" icon={<MapPin />} color="bg-pink-500" />
            <StatCard number="50+" label="Product Categories" icon={<Layers3 />} color="bg-yellow-500" />
            <StatCard number="1000+" label="Lives Impacted" icon={<Heart />} color="bg-blue-500" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Be part of a story that's changing lives, one craft at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/join" variant="outline" size="lg">
              Join Our Team
            </CTAButton>
            <CTAButton to="/donate" variant="secondary" size="lg">
              Support Our Mission
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;