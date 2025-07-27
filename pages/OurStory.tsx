import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Award, Globe, Heart, Lightbulb, MapPin, Layers3, Zap, BookOpen, ArrowRight, Star, Quote, Play, ExternalLink, X } from 'lucide-react';

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

    if (to && !onClick) {
      return (
        <Link
          href={to}
          className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        onClick={onClick ? onClick : () => console.log(`Navigate to: ${to}`)}
        className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
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
  const HubCard = ({ hub, index }) => (
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
      <blockquote className="text-gray-700 italic text-lg mb-4 leading-relaxed z-10">
        "{quote.text}"
      </blockquote>
      <div className="flex items-center mt-auto z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 border-2 border-white shadow-md">
          {quote.author.split(' ')[0][0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{quote.author.split(',')[0]}</div>
          <div className="text-xs text-gray-500">{quote.author.split(',').slice(1).join(',')}</div>
        </div>
      </div>
    </div>
  );

  // Data
  const stats = [
    { number: '1000+', label: 'Women Empowered', icon: <Users />, color: 'bg-purple-600' },
    { number: '25+', label: 'Rural Villages', icon: <MapPin />, color: 'bg-yellow-600' },
    { number: '10', label: 'Skill Hubs', icon: <Layers3 />, color: 'bg-pink-600' },
    { number: '150+', label: 'Product Lines', icon: <Award />, color: 'bg-blue-600' }
  ];

  const hubs = [
    {
      icon: <Zap />,
      title: 'Coconut Shell Craft Hub',
      desc: 'Transforming discarded coconut shells into beautiful, functional art pieces that celebrate sustainability and traditional craftsmanship.'
    },
    {
      icon: <Layers3 />,
      title: 'Banana Bark Hub',
      desc: 'Working with natural bark fibers to create elegant designs that bridge traditional techniques with modern aesthetics.'
    },
    {
      icon: <Award />,
      title: 'Weaving Hub',
      desc: 'Handcrafted baskets and textiles that tell stories of cultural heritage while connecting communities globally.'
    },
    {
      icon: <Globe />,
      title: 'Electronics Hub',
      desc: 'Bridging the digital divide through careful electronics assembly and modern technical skills training.'
    }
  ];

  const team = [
    { name: 'Sridhar Vembu', role: 'Chief Mentor', desc: 'Global advocate for rural innovation, driving technology-enabled transformation in rural communities.' },
    { name: 'Ananthan Ayyasamy', role: 'Co-Founder', desc: 'Community mobilizer connecting grassroots needs with scalable, sustainable solutions.' },
    { name: 'Karunya Gunavathy', role: 'Co-Founder & CEO', desc: 'Visionary leader transforming rural communities through dignified skill development programs.' },
    { name: 'V S Balajee & Ambi Moorthy', role: 'Advisors', desc: 'Experienced changemakers providing strategic guidance for community impact and growth.' },
    { name: '30+ Trainers', role: 'Mentors', desc: 'Diverse experts from electronics to traditional crafts, empowering women with valuable skills.' }
  ];

  const quotes = [
    { text: 'This is not charity. This is skill in motion.', author: 'Santhosh, Mentor, TASS' },
    { text: 'When my daughter saw my work online, she said, "Amma, you\'re famous!" That was everything.', author: 'Bhuvana, Artisan, Kottravai' },
    { text: 'It started with one bowl. It became a business. Then a movement.', author: 'Karunya Gunavathy, Co-Founder' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-xl shadow-2xl p-4 max-w-4xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <video
              src="/assets/avkottravai.mp4"
              controls
              autoPlay
              className="rounded-lg w-full h-auto max-h-[70vh]"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Makers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Movement</span>
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            We Are Not a Brand. We Are a Breakthrough.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            In villages where silence was once survival, women are now speaking with their hands. What you see as a handcrafted bowl is, to us, a revolution in disguise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/creators" size="lg">
              Meet the Makers <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton to="" variant="secondary" size="lg" onClick={() => setIsVideoOpen(true)}>
              <Play className="mr-2 h-5 w-5" /> Watch Stories
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section className="py-5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Beedi Dust to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Brilliance</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-red-300 via-yellow-300 via-purple-300 to-pink-300"></div>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12 relative">
              {/* Step 1 - Beedi Work */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center relative">
                      <Heart className="h-8 w-8 text-white" />
                      <div className="absolute inset-0 bg-red-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-200 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-bold text-red-700 mb-3 text-lg">The Struggle</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Smoke-filled rooms. Aching fingers. Endless rolling. Women trapped in cycles of survival, their dreams suffocating with each beedi.</p>
              </div>
              
              {/* Step 2 - Hope */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center relative">
                      <Lightbulb className="h-8 w-8 text-white" />
                      <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
                </div>
                <h3 className="font-bold text-yellow-700 mb-3 text-lg">The Yearning</h3>
                <p className="text-gray-700 text-sm leading-relaxed">In whispered conversations. In stolen glances at the sky. In calloused hands that still dared to dream of creating something beautiful.</p>
              </div>
              
              {/* Step 3 - The Spark */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
                      <Zap className="h-8 w-8 text-white animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
                </div>
                <h3 className="font-bold text-purple-700 mb-3 text-lg">The Awakening</h3>
                <p className="text-gray-700 text-sm leading-relaxed">One coconut shell. One lesson. One "yes, you can." The moment waste became wonder and doubt became determination.</p>
              </div>
              
              {/* Step 4 - Kottravai Rises */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-700 rounded-full flex items-center justify-center relative overflow-hidden">
                      <Award className="h-8 w-8 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-spin"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-200 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-bold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent mb-3 text-lg">The Revolution</h3>
                <p className="text-gray-700 text-sm leading-relaxed">2024: A goddess awakens. <span className="font-bold text-purple-700">Kottravai</span> — fierce protector, skilled creator, unstoppable force. The movement has a name, and her name is victory.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Today, Kottravai is home to creators, mentors, trainers, and believers across Tamil Nadu — all rooted in one purpose: <span className="font-semibold text-purple-700">To transform rural skill into global identity.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Name Meaning Section */}
      <section className="py-5 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why the Name <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">"Kottravai"</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>In ancient Sangam literature, Kottravai was the goddess of war, fertility, agriculture — and victory. A fierce mother. A bold protector.</p>
            <p>We chose her name not to sound powerful, but to remind every woman:</p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              You already are.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton to="/journey" size="lg">
              See the Journey <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton to="/legacy" variant="secondary" size="lg">
              Know the Legacy <BookOpen className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <div className="space-y-4 text-lg">
              <p>To bring rural craftsmanship to global shelves.</p>
              <p>To turn hidden labor into celebrated livelihood.</p>
              <p>To create dignified income, skill, and identity for <span className="font-bold">10,000+ rural women by 2030</span>.</p>
              <p className="text-xl font-bold mt-6">Not Made in Factories. Made in Futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Hubs Section */}
      <section className="py-5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hubs, Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Pride</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four specialized centers where traditional crafts meet modern innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {hubs.map((hub, index) => (
              <HubCard key={index} hub={hub} index={index} />
            ))}
          </div>
          <div className="text-center">
            <CTAButton to="/hubs">
              Explore Our Hubs <ExternalLink className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The People Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Platform</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries, mentors, and changemakers driving this movement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <TeamCard key={index} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className="py-5 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Movement</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real women transforming their communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
          <div className="text-center">
            <CTAButton to="" variant="primary" size="lg" onClick={() => setIsVideoOpen(true)}>
              <Play className="mr-2 h-5 w-5" /> Watch Stories
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              This isn't just our story.<br />
              <span className="text-yellow-200">This could be hers — waiting to begin.</span>
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Support a woman. Start a ripple. Buy her work. Share her craft. Tell her story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/shop" variant="outline">
                <Heart className="mr-2 h-5 w-5" /> Shop Now
              </CTAButton>
              <CTAButton to="/mentorship" variant="outline">
                <Lightbulb className="mr-2 h-5 w-5" /> Mentor Her
              </CTAButton>
              <CTAButton to="/spread" variant="outline">
                <Star className="mr-2 h-5 w-5" /> Spread the Word
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;