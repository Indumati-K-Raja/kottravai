import React, { useState } from 'react';
import { Users, Heart, Lightbulb, Star, ExternalLink, Mail, ArrowRight, Gift, Mic, UserPlus, Building2, Handshake, UserCheck, BookOpen } from 'lucide-react';

const CTAButton = ({ onClick, children, variant = 'primary', size = 'md', className = '', type = 'button' }: { onClick?: () => void, children: React.ReactNode, variant?: 'primary' | 'secondary' | 'outline', size?: 'sm' | 'md' | 'lg', className?: string, type?: 'button' | 'submit' | 'reset' }) => {
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
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const JoinUs = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const joinOptions = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, title: 'Join as a Mentor',
      desc: 'Give Her a Skill. Change Her Story. Whether you’re a designer, engineer, baker, or business leader — your expertise can light the way. Mentorship at Kottravai isn’t about charity. It’s about channeling skill into self-reliance.',
      quote: '“When I taught her how to design a product line, I didn’t just teach — I learned. About resilience. About hunger to grow.”',
      author: 'Kavitha, Design Mentor, Chennai',
      cta: { label: 'Mentor a Woman', icon: <UserPlus className="ml-2 h-5 w-5" />, onClick: () => window.location.href = '/mentorship' }
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-500" />, title: 'Join as a Bulk Buyer / Retail Partner',
      desc: 'Stock Stories, Not Just Shelves. Looking for return gifts, corporate gifting, or retail tie-ups? With every bulk order, you empower a cluster of rural women with income, validation, and visibility. Customisation options and B2B pricing available — let’s co-create conscious commerce.',
      cta: { label: 'Partner With Us', icon: <Handshake className="ml-2 h-5 w-5" />, onClick: () => window.location.href = '/partner' }
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />, title: 'Join as a Volunteer',
      desc: 'Time is also a gift. You don’t need to be an expert to create impact. Help us sort raw materials, document artisan stories, manage logistics, or simply spend time at our hubs. Every small act adds up.',
      cta: { label: 'Volunteer With Kottravai', icon: <UserCheck className="ml-2 h-5 w-5" />, onClick: () => window.location.href = '/volunteer' }
    },
    {
      icon: <Gift className="h-8 w-8 text-purple-500" />, title: 'Join as a Donor',
      desc: 'Support Without Buying — Still Makes Change. Don’t need a product but want to make a difference? Your donation helps us fund tools, workshops, child care for artisans, and expand our reach to untouched villages.',
      cta: { label: 'Donate a Skill, a Day, or a Dream', icon: <Heart className="ml-2 h-5 w-5" />, onClick: () => window.location.href = '/donate' }
    },
    {
      icon: <Mic className="h-8 w-8 text-orange-500" />, title: 'Join as a Voice',
      desc: 'Be Her Amplifier. Sometimes the biggest gift is your voice. Share our stories. Talk about our mission. Feature us in your blog, podcast, newsletter. The more the world hears, the stronger she stands.',
      cta: { label: 'Request Media Kit', icon: <ExternalLink className="ml-2 h-5 w-5" />, onClick: () => window.location.href = '/media' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Join Us – Be Part of Her Rise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We’re Building More Than a Brand.<br />We’re Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Movement</span>.
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            And movements don’t grow alone. They grow with believers. With mentors. With markets. With people like you.
          </p>
          <CTAButton size="lg" onClick={() => document.getElementById('join-options')?.scrollIntoView({ behavior: 'smooth' })}>
            Choose How You’ll Join <ArrowRight className="ml-2 h-5 w-5" />
          </CTAButton>
        </div>
      </section>

      {/* Join Options */}
      <section id="join-options" className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {joinOptions.map((opt, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-4 flex justify-center">{opt.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{opt.title}</h2>
                <p className="text-gray-700 text-center mb-4">{opt.desc}</p>
                {opt.quote && (
                  <blockquote className="italic text-purple-700 text-center mb-4">{opt.quote}<br /><span className="block text-base text-gray-600 mt-2">— {opt.author}</span></blockquote>
                )}
              </div>
              <div className="text-center mt-4">
                <CTAButton size="md" onClick={opt.cta.onClick}>{opt.cta.label} {opt.cta.icon}</CTAButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Form / Expression of Interest */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Let’s Start This Together</h2>
          {submitted ? (
            <div className="text-center text-green-600 text-lg font-semibold py-8">
              Thank you for your interest! We’ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">I want to:</label>
                <select name="interest" value={form.interest} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Select an option</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Donate">Donate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div className="text-center">
                <CTAButton type="submit" size="lg">Let’s Start This Together <Mail className="ml-2 h-5 w-5" /></CTAButton>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everyone wants to change the world.<br />
            <span className="text-yellow-200">You actually can!</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join Kottravai.<br />It’s not a platform. It’s a future in the making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="outline" size="lg" onClick={() => window.location.href = '/shop'}>
              <Heart className="mr-2 h-5 w-5" /> Shop Her Work
            </CTAButton>
            <CTAButton variant="outline" size="lg" onClick={() => window.location.href = '/mentorship'}>
              <Lightbulb className="mr-2 h-5 w-5" /> Train a Woman
            </CTAButton>
            <CTAButton variant="outline" size="lg" onClick={() => window.location.href = '/donate'}>
              <Star className="mr-2 h-5 w-5" /> Fund a Future
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs; 