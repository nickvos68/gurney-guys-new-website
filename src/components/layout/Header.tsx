import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServiceAreas = () => {
    setIsServiceAreasOpen(!isServiceAreasOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="The Gurney Guys Logo" 
            width={180} 
            height={60}
            priority
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-gray-800 hover:text-emerald-500 transition-colors">
            Services
          </Link>
          <Link href="/results" className="text-gray-800 hover:text-emerald-500 transition-colors">
            Results
          </Link>
          <div className="relative group">
            <button 
              className="text-gray-800 hover:text-emerald-500 transition-colors flex items-center"
              onClick={toggleServiceAreas}
            >
              Service Areas
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div className="py-1 grid grid-cols-1 gap-1">
                <Link href="/service-areas/city-east" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  City & East
                </Link>
                <Link href="/service-areas/inner-west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Inner West
                </Link>
                <Link href="/service-areas/north-shore-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  North Shore & Beaches
                </Link>
                <Link href="/service-areas/northern-districts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Northern Districts
                </Link>
                <Link href="/service-areas/hills-greater-west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Hills & Greater West
                </Link>
                <Link href="/service-areas/south-west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  South West Sydney
                </Link>
                <Link href="/service-areas/penrith-blue-mtns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Penrith/Blue Mtns
                </Link>
                <Link href="/service-areas/hawkesbury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Hawkesbury
                </Link>
                <Link href="/service-areas/southern-sydney" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Southern Sydney
                </Link>
                <Link href="/service-areas/shire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  The Shire
                </Link>
              </div>
            </div>
          </div>
          <Link href="/testimonials" className="text-gray-800 hover:text-emerald-500 transition-colors">
            Testimonials
          </Link>
          <Link href="/faq" className="text-gray-800 hover:text-emerald-500 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-emerald-500 transition-colors">
            Contact
          </Link>
          <Link href="/#quote-form" className="btn-primary">
            Get Free Quote
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/services" className="text-gray-800 hover:text-emerald-500 transition-colors py-2">
                Services
              </Link>
              <Link href="/results" className="text-gray-800 hover:text-emerald-500 transition-colors py-2">
                Results
              </Link>
              <button 
                className="text-left text-gray-800 hover:text-emerald-500 transition-colors py-2 flex justify-between items-center"
                onClick={toggleServiceAreas}
              >
                Service Areas
                <svg className={`w-4 h-4 transform ${isServiceAreasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isServiceAreasOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/service-areas/city-east" className="block text-gray-700 hover:text-emerald-500 py-1">
                    City & East
                  </Link>
                  <Link href="/service-areas/inner-west" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Inner West
                  </Link>
                  <Link href="/service-areas/north-shore-beaches" className="block text-gray-700 hover:text-emerald-500 py-1">
                    North Shore & Beaches
                  </Link>
                  <Link href="/service-areas/northern-districts" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Northern Districts
                  </Link>
                  <Link href="/service-areas/hills-greater-west" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Hills & Greater West
                  </Link>
                  <Link href="/service-areas/south-west" className="block text-gray-700 hover:text-emerald-500 py-1">
                    South West Sydney
                  </Link>
                  <Link href="/service-areas/penrith-blue-mtns" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Penrith/Blue Mtns
                  </Link>
                  <Link href="/service-areas/hawkesbury" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Hawkesbury
                  </Link>
                  <Link href="/service-areas/southern-sydney" className="block text-gray-700 hover:text-emerald-500 py-1">
                    Southern Sydney
                  </Link>
                  <Link href="/service-areas/shire" className="block text-gray-700 hover:text-emerald-500 py-1">
                    The Shire
                  </Link>
                </div>
              )}
              <Link href="/testimonials" className="text-gray-800 hover:text-emerald-500 transition-colors py-2">
                Testimonials
              </Link>
              <Link href="/faq" className="text-gray-800 hover:text-emerald-500 transition-colors py-2">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-emerald-500 transition-colors py-2">
                Contact
              </Link>
              <Link href="/#quote-form" className="btn-primary text-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
