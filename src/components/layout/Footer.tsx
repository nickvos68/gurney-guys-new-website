import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Glenmore Park, NSW 2745
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:0405624153" className="hover:text-emerald-400 transition-colors">
                  0405 624 153
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@gurneyguys.com.au" className="hover:text-emerald-400 transition-colors">
                  info@gurneyguys.com.au
                </a>
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com/thegurneyguys" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/thegurneyguys" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/thegurneyguys" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-emerald-400 transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-emerald-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#quote-form" className="hover:text-emerald-400 transition-colors">
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/service-areas/city-east" className="hover:text-emerald-400 transition-colors">
                City & East
              </Link>
              <Link href="/service-areas/inner-west" className="hover:text-emerald-400 transition-colors">
                Inner West
              </Link>
              <Link href="/service-areas/north-shore-beaches" className="hover:text-emerald-400 transition-colors">
                North Shore & Beaches
              </Link>
              <Link href="/service-areas/northern-districts" className="hover:text-emerald-400 transition-colors">
                Northern Districts
              </Link>
              <Link href="/service-areas/hills-greater-west" className="hover:text-emerald-400 transition-colors">
                Hills & Greater West
              </Link>
              <Link href="/service-areas/south-west" className="hover:text-emerald-400 transition-colors">
                South West Sydney
              </Link>
              <Link href="/service-areas/penrith-blue-mtns" className="hover:text-emerald-400 transition-colors">
                Penrith/Blue Mtns
              </Link>
              <Link href="/service-areas/hawkesbury" className="hover:text-emerald-400 transition-colors">
                Hawkesbury
              </Link>
              <Link href="/service-areas/southern-sydney" className="hover:text-emerald-400 transition-colors">
                Southern Sydney
              </Link>
              <Link href="/service-areas/shire" className="hover:text-emerald-400 transition-colors">
                The Shire
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="mb-4 space-x-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms-conditions" className="hover:text-emerald-400 transition-colors">
              Terms and Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">
              FAQ
            </Link>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Gurney Guys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
