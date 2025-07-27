import React from 'react';
import { Calendar, MapPin, Package, Users, Zap } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      date: '2024-06',
      title: 'Planning Phase',
      description: 'Kottravai movement conceptualized and planning begins',
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      status: 'completed',
      details: 'Market research, team formation, and initial funding secured'
    },
    {
      date: '2024-12',
      title: 'Platform Launch',
      description: 'Kottravai platform goes live with first creators',
      icon: <Package className="h-6 w-6 text-purple-600" />,
      status: 'completed',
      details: 'Website launched, first 50 creators onboarded'
    },
    {
      date: '2025-06',
      title: 'Product Launch',
      description: 'Official product launch and brand announcement',
      icon: <Package className="h-6 w-6 text-orange-600" />,
      status: 'upcoming',
      details: 'Major marketing campaign, media coverage, and partnerships'
    },
    {
      date: '2025-06-25',
      title: 'Coconut Hub Launch',
      description: 'Coconut Crafting Hub officially opens in Tenkasi',
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      status: 'upcoming',
      details: 'Physical hub with training facilities and production center'
    },
    {
      date: '2025-08',
      title: 'Weaving Hub Launch',
      description: 'Traditional Weaving Hub opens in Madurai',
      icon: <MapPin className="h-6 w-6 text-gray-400" />,
      status: 'planned',
      details: 'Second hub focusing on traditional textile crafts'
    },
    {
      date: '2025-10',
      title: 'Electronics Hub Launch',
      description: 'Modern Electronics Hub opens in Chennai',
      icon: <MapPin className="h-6 w-6 text-gray-400" />,
      status: 'planned',
      details: 'Technology-focused hub for electronic accessories'
    },
    {
      date: '2026-01',
      title: '10,000 Creators',
      description: 'Reach milestone of 10,000 empowered creators',
      icon: <Users className="h-6 w-6 text-gray-400" />,
      status: 'planned',
      details: 'Expansion across multiple states in India'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'upcoming': return 'bg-orange-500';
      case 'planned': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'upcoming': return 'Upcoming';
      case 'planned': return 'Planned';
      default: return 'Planned';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to empowerment - track our progress as we build India's own industrial movement
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-full ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        {milestone.icon}
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                        milestone.status === 'upcoming' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {getStatusText(milestone.status)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 mb-3">{milestone.description}</p>
                    <p className="text-sm text-gray-500">{milestone.details}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white ${getStatusColor(milestone.status)}`}></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-gray-900">{milestone.date}</span>
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Journey</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us as we build the future of rural entrepreneurship in India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Become a Creator
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                Support the Movement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;