import React from 'react';
import { Users, Award, Globe, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Passionate about empowering rural women and preserving traditional crafts.'
    },
    {
      name: 'Meena Devi',
      role: 'Head of Artisan Training',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Former artisan turned trainer, leading skill development programs.'
    },
    {
      name: 'Santhosh Kumar',
      role: 'Mentor Coordinator',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Connecting experienced professionals with emerging women entrepreneurs.'
    },
    {
      name: 'Lakshmi Raman',
      role: 'Quality Assurance Lead',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ensuring every product meets international quality standards.'
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: '1000+',
      label: 'Women Empowered',
      description: 'Rural women trained and employed across Tamil Nadu'
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      number: '15+',
      label: 'Countries Reached',
      description: 'International markets where our products are sold'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      number: '50+',
      label: 'Awards Won',
      description: 'Recognition for social impact and product excellence'
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      number: '10,000+',
      label: 'Lives Impacted',
      description: 'Family members benefited from increased household income'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Kottravai</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are more than a platform—we are a movement dedicated to transforming lives, 
              preserving traditions, and creating sustainable opportunities for rural women across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower rural women by providing them with skills, training, and market access 
                  to transform their traditional crafts into sustainable livelihoods. We bridge the 
                  gap between ancient wisdom and modern opportunities, creating a platform where 
                  heritage meets innovation.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a world where every rural woman has the opportunity to become an 
                  entrepreneur, where traditional Indian crafts are celebrated globally, and where 
                  sustainable development creates thriving communities that preserve cultural heritage 
                  while embracing modern progress.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women working together"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Empowering Communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Measurable change that speaks to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate individuals driving the Kottravai movement forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Kottravai isn't just another e-commerce platform. We're a social enterprise 
              with a mission to create lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Purpose-Driven</h3>
              <p className="opacity-90">
                Every product sold directly supports a woman entrepreneur and her family, 
                creating sustainable livelihoods in rural communities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="opacity-90">
                We maintain international quality standards while preserving traditional 
                craftsmanship techniques passed down through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Globally Connected</h3>
              <p className="opacity-90">
                We connect rural artisans with global markets, showcasing the beauty 
                of Indian craftsmanship to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Movement</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're looking to support rural women, purchase authentic handcrafted products, 
            or become part of our mentorship network, there's a place for you in the Kottravai family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Shop Our Products
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;