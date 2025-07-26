import React from 'react';
import { Users, Heart, Zap, Globe, Award, TrendingUp } from 'lucide-react';

const WeAreCreators = () => {
  // Achievements as data for paragraph
  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: "Jul 2025",
      label: "Founded",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      number: "1000+",
      label: "Women Empowered",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      number: "15+",
      label: "Global Markets",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      number: "100%",
      label: "Made in India",
    }
  ];

  const values = [
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Innovation Meets Tradition",
      description: "Blending wisdom and new ideas."
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      title: "Empowerment Through Creation",
      description: "Every product uplifts a woman."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Sustainable Growth",
      description: "Building futures, respecting roots."
    }
  ];

  const cardClass =
    "bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-2xl px-5 py-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-w-[120px] max-w-[180px] mx-auto sm:mx-0";

  // Friendlier, clearer achievements paragraph
  const achievementsText =
    "We started our journey in June 2025. Since then, we've helped over 1000 women grow, reached markets across India, and every product we make is proudly Made in India.";

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Heading, mission, and value cards in a row */}
          <div className="flex-1 w-full flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We are <span className="text-purple-600">Creators</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Empowering rural women to turn skills into opportunity. Every handcrafted product is a step toward independence, pride, and a brighter future.
              </p>
              <p className="text-base text-purple-700 mb-6 font-medium">
                {achievementsText}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              {values.map((value, index) => (
                <div key={index} className={cardClass}>
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base text-center">{value.title}</h3>
                  <p className="text-gray-600 text-xs text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image only */}
          <div className="flex-1 w-full flex flex-col gap-8">
            <div className="relative w-full">
              <img
                src="/assets/creators.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Women creators at work"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-10 bg-purple-600 text-white p-5 rounded-xl shadow-lg flex flex-col items-center">
                <Heart className="h-8 w-8 mb-1" />
                <div className="text-xs font-medium">Creating with Purpose</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreCreators;