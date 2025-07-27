import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/assets/logo.png" alt="Kottravai Logo"  style={{objectFit: 'contain'}} />
            </Link>
            </div>
            <p className="text-gray-400">
            A Platform Powered by Purpose.
Handmade by Women. Made for the World.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-400 hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-gray-400 hover:text-white transition-colors">
                  Creators
                </Link>
              </li>
              <li>
                <Link to="/hubs" className="text-gray-400 hover:text-white transition-colors">
                  Hubs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy & Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-400 text-sm">
                  Kottravai Head Office, Vaazhai Incubator Campus, Puliyangudi, Tenkasi
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-400">+91 97870 30811</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-400">support@kottravai.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            A Platform Powered by Purpose | Copyrighted 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;