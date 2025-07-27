import React from 'react';

const features = [
  {
    icon: '💜',
    title: 'A Platform with a Pulse',
    description: 'Every purchase supports a real woman, her family, and her future.'
  },
  {
    icon: '🌱',
    title: 'Sustainable by Default',
    description: 'We turn what others discard into opportunity and pride.'
  },
  {
    icon: '🎓',
    title: 'Trained, Not Trapped',
    description: 'Women here are skilled, empowered, and building their own destinies.'
  },
  {
    icon: '🔗',
    title: 'Every Shell Has a Story',
    description: 'Scan, connect, and meet the maker behind every product.'
  }
];

const cardColors = [
  'from-purple-100 to-purple-50',
  'from-green-100 to-green-50',
  'from-pink-100 to-pink-50',
  'from-orange-100 to-orange-50',
];

const WhyKottravai = () => {
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Kottravai</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="block font-semibold text-purple-700 mb-2">Because every purchase is a vote for dignity.</span>
            <span className="block mt-2">Kottravai uplifts, connects, and inspires women to shape their destinies.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${cardColors[index]} rounded-2xl shadow-lg border border-purple-100 p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-base font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKottravai;