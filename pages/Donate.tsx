import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Mail, ArrowRight } from 'lucide-react';

const Donate = () => {
  const [form, setForm] = useState({ name: '', email: '', amount: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Donate to Kottravai
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Gift, Her Future
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            Every donation helps a rural woman gain skills, tools, and hope. Thank you for believing in her journey.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Make a Donation</h2>
          {submitted ? (
            <div className="text-center text-green-600 text-lg font-semibold py-8">
              Thank you for your generous support! Your donation will help empower more women through Kottravai.
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
                <label className="block text-gray-700 font-semibold mb-1">Amount (INR)</label>
                <input type="number" name="amount" value={form.amount} onChange={handleChange} required min="100" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 text-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-left max-w-xl mx-auto">
            <li>Funds training workshops for new women artisans</li>
            <li>Provides tools, raw materials, and safety equipment</li>
            <li>Supports child care and healthy meals for artisans’ children</li>
            <li>Helps us reach more villages and expand our impact</li>
            <li>Enables mentorship, business training, and market access</li>
          </ul>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Thank you for making a difference.</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your support is more than a donation — it’s a lifeline, a skill, a future. For questions about giving, contact us at <a href="mailto:support@kottravai.in" className="text-purple-600 underline">support@kottravai.in</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-white text-purple-700 border-2 border-purple-600 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300">
              Return Home <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/shop" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Her Work <Mail className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
