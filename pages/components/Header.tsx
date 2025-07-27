import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, ChevronDown } from 'lucide-react';

const joinUsLinks = [
  { to: '/join', label: 'Join Us' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/creators', label: 'Creator' },
  { to: '/hubs', label: 'Hubs' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/donate', label: 'Donate' },
  { to: '/partner', label: 'Partner' },
];
const mediaLinks = [
  { to: '/media', label: 'Media Kit' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/support', label: 'Support' },
  { to: '/terms', label: 'Terms' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRefs = {
    join: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
  };

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  };

  // Close dropdowns on outside click (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openDropdown &&
        dropdownRefs[openDropdown as 'join' | 'media']?.current &&
        !dropdownRefs[openDropdown as 'join' | 'media'].current!.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // Keyboard accessibility for desktop dropdowns
  const handleDropdownKey = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="bg-white shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/assets/logo.png" alt="Kottravai Logo" className="h-60 w-60 mr-2" style={{objectFit: 'contain'}} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}>Home</Link>
            <Link to="/shop" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/shop') ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}>Shop</Link>
            <Link to="/story" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/story') ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}>Our Story</Link>
            {/* Join Us Dropdown */}
            <div className="relative" ref={dropdownRefs.join}>
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${openDropdown === 'join' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'join'}
                onClick={() => setOpenDropdown(openDropdown === 'join' ? null : 'join')}
                onKeyDown={e => handleDropdownKey(e, 'join')}
                tabIndex={0}
                type="button"
              >
                Join Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'join' && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-50 border border-gray-100 animate-fade-in">
                  {joinUsLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-3 text-gray-800 hover:bg-purple-50 first:rounded-t-xl last:rounded-b-xl"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Media & Info Dropdown */}
            <div className="relative" ref={dropdownRefs.media}>
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${openDropdown === 'media' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'media'}
                onClick={() => setOpenDropdown(openDropdown === 'media' ? null : 'media')}
                onKeyDown={e => handleDropdownKey(e, 'media')}
                tabIndex={0}
                type="button"
              >
                Media & Info <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'media' && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-50 border border-gray-100 animate-fade-in">
                  {mediaLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-3 text-gray-800 hover:bg-purple-50 first:rounded-t-xl last:rounded-b-xl"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/contact') ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-900 hover:text-purple-600'}`}>Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-900 hover:text-purple-600 p-2 transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <Link to="/shop" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors font-semibold">Shop Now</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-purple-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-50" onClick={handleNavClick}>
          <div className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col gap-2" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center" onClick={handleNavClick}>
                <Heart className="h-7 w-7 text-purple-600 mr-2" />
                <img src="/assets/logo.png" alt="Kottravai Logo" className="h-10 w-10 mr-2" style={{objectFit: 'contain'}} />
                </Link>
              <button onClick={handleNavClick} className="text-gray-900 hover:text-purple-600 p-2" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <Link to="/" className="block px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors" onClick={handleNavClick}>Home</Link>
            <Link to="/shop" className="block px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors" onClick={handleNavClick}>Shop</Link>
            <Link to="/story" className="block px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors" onClick={handleNavClick}>Our Story</Link>
            {/* Mobile Join Us Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors"
                onClick={() => setMobileDropdown(mobileDropdown === 'join' ? null : 'join')}
                aria-haspopup="true"
                aria-expanded={mobileDropdown === 'join'}
                type="button"
              >
                Join Us <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileDropdown === 'join' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'join' && (
                <div className="ml-4 border-l border-purple-100">
                  {joinUsLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-base text-gray-800 hover:bg-purple-50"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Media & Info Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors"
                onClick={() => setMobileDropdown(mobileDropdown === 'media' ? null : 'media')}
                aria-haspopup="true"
                aria-expanded={mobileDropdown === 'media'}
                type="button"
              >
                Media & Info <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileDropdown === 'media' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'media' && (
                <div className="ml-4 border-l border-purple-100">
                  {mediaLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-base text-gray-800 hover:bg-purple-50"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium rounded hover:bg-purple-50 transition-colors" onClick={handleNavClick}>Contact</Link>
            <div className="mt-6">
              <Link to="/shop" className="w-full block bg-purple-600 text-white px-4 py-2 rounded-md text-center font-semibold hover:bg-purple-700 transition-colors" onClick={handleNavClick}>Shop Now</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;