import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Community Manager',
    location: 'Tenkasi, Tamil Nadu',
    desc: 'Lead local outreach, events, and partnerships for Kottravai’s rural hubs.',
    cta: { label: 'Apply Now', href: '#' }
  },
  {
    title: 'Content Writer',
    location: 'Remote',
    desc: 'Craft stories, blog posts, and social media content to amplify our movement.',
    cta: { label: 'Apply Now', href: '#' }
  },
  {
    title: 'Product Designer',
    location: 'Chennai',
    desc: 'Work with artisans to design new handcrafted products for global markets.',
    cta: { label: 'Apply Now', href: '#' }
  }
];

const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Careers at Kottravai
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Join Our Team & Make a Difference
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Explore open roles and help us build a movement for rural women’s empowerment.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 text-purple-600">
                <Briefcase className="h-6 w-6" />
                <span className="font-semibold">{job.location}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{job.title}</h2>
              <p className="text-gray-700 text-center mb-4">{job.desc}</p>
            </div>
            <div className="text-center mt-4">
              <a href={job.cta.href} className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {job.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Careers; 