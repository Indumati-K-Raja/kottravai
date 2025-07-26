import React from 'react';
import { Download, FileText, Mail, ArrowRight } from 'lucide-react';

const mediaAssets = [
  {
    title: 'Press Release (PDF)',
    desc: 'Official press release about Kottravai’s mission and impact.',
    href: '#',
    icon: <FileText className="h-7 w-7 text-purple-600" />
  },
  {
    title: 'Brand Assets (ZIP)',
    desc: 'Download our logo, color palette, and brand guidelines.',
    href: '#',
    icon: <Download className="h-7 w-7 text-pink-600" />
  },
  {
    title: 'Media Contact',
    desc: 'Reach out to our media team for interviews or information.',
    href: 'mailto:media@kottravai.in',
    icon: <Mail className="h-7 w-7 text-blue-600" />
  }
];

const Media = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Media Kit & Brand Assets
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          For Press, Partners & Storytellers
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Download our latest press releases, brand assets, and get in touch with our media team.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {mediaAssets.map((asset, i) => (
          <a key={i} href={asset.href} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300" target={asset.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer">
            <div className="mb-4">{asset.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{asset.title}</h2>
            <p className="text-gray-700 mb-4">{asset.desc}</p>
            <span className="inline-flex items-center px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-300">
              Download / Contact <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default Media; 