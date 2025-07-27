import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Home, ArrowRight } from 'lucide-react';

const CTAButton = ({ onClick = () => {}, children, variant = 'primary', size = 'md', className = '', type = 'button' }: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const variants: Record<'primary' | 'secondary' | 'outline', string> = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-md hover:shadow-lg'
  };
  const sizes: Record<'sm' | 'md' | 'lg', string> = {
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Contact Us – Let’s Talk. We’re Listening.
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Got a question? A story? An idea?
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            We’d love to hear from you.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a customer with feedback, a mentor with wisdom, a partner with possibilities, or a woman with a dream — this space is yours.
          </p>
          <CTAButton size="lg" onClick={() => {
            const el = document.getElementById('contact-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Send Us a Message <ArrowRight className="ml-2 h-5 w-5" />
          </CTAButton>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Details Card */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Kottravai HQ</h3>
                  <p className="text-gray-600">
                    Vaazhai Incubator Campus<br />
                    Puliyangudi, Tenkasi, Tamil Nadu – 627855
                  </p>
                  <a href="https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-600 hover:underline mt-2 text-sm">
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 97870 30811</p>
                  <CTAButton variant="secondary" size="sm" className="mt-2" onClick={() => window.open('tel:+919787030811')}>Call Us</CTAButton>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@kottravai.in</p>
                  <CTAButton variant="secondary" size="sm" className="mt-2" onClick={() => window.open('mailto:support@kottravai.in')}>Email Us</CTAButton>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Support Hours</h3>
                  <p className="text-gray-600">
                    Monday – Saturday: 9:00 AM to 6:00 PM IST<br />
                    Sunday: Email-only support (we rest too!)
                  </p>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay connected. Stay inspired.</h3>
              <div className="flex space-x-4 justify-center">
                <a href="https://instagram.com/kottravai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-pink-600"><Instagram className="h-7 w-7" /></a>
                <a href="https://facebook.com/kottravai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-pink-600"><Facebook className="h-7 w-7" /></a>
                <a href="https://twitter.com/kottravai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-pink-600"><Twitter className="h-7 w-7" /></a>
                <a href="https://linkedin.com/company/kottravai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-pink-600"><Linkedin className="h-7 w-7" /></a>
              </div>
              <CTAButton variant="secondary" size="sm" className="mt-4 w-full" onClick={() => window.open('https://instagram.com/kottravai')}>Follow the Movement</CTAButton>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl" id="contact-form">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Let’s Begin a Conversation</h2>
            {submitted ? (
              <div className="text-center text-green-600 text-lg font-semibold py-8">
                Thank you for reaching out! A real human from our team will respond soon. Until then, thank you for believing in her journey.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us more..."
                  />
                </div>
                <CTAButton type="submit" size="lg" className="w-full" onClick={() => {}}>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </CTAButton>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section (unchanged) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Kottravai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How can I become a Kottravai artisan?</h3>
                <p className="text-gray-600">
                  We welcome women from rural areas who are interested in learning traditional crafts. 
                  Contact us through our mentorship program to learn about training opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What products do you offer?</h3>
                <p className="text-gray-600">
                  We offer a wide range of handcrafted products including coconut shell crafts, 
                  textiles, pottery, jewelry, organic food products, and home decor items.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship our products worldwide. Shipping costs and delivery times vary 
                  by location. Contact us for specific shipping information.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How do you ensure product quality?</h3>
                <p className="text-gray-600">
                  All our products go through rigorous quality checks. Our artisans are trained 
                  to maintain high standards, and each product is inspected before shipping.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Can I visit your facilities?</h3>
                <p className="text-gray-600">
                  Yes, we welcome visitors to our head office and training centers. 
                  Please contact us in advance to schedule a visit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How can I support the movement?</h3>
                <p className="text-gray-600">
                  You can support us by purchasing our products, spreading awareness, 
                  becoming a mentor, or partnering with us for corporate social responsibility initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">She’s building her future.<br />Thank you for being a part of it.</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Kottravai, every interaction is more than a message.<br />It’s a bridge — between cities and villages, between questions and action, between intention and impact.<br />Thank you for reaching out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="secondary" size="md" onClick={() => window.location.href = '/'}>
              <Home className="mr-2 h-5 w-5" /> Return to Home
            </CTAButton>
            <CTAButton variant="secondary" size="md" onClick={() => window.location.href = '/shop'}>
              <MessageCircle className="mr-2 h-5 w-5" /> Explore Her Work
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;