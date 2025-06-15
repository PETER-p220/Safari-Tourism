import React from 'react';
import { Link } from 'react-router-dom';
import { PalmtreeIcon, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <PalmtreeIcon size={32} className="text-primary-light mr-2" />
              <span className="font-display text-xl font-bold text-white">safari planner</span>
            </div>
            <p className="mb-4 text-sm">
              Experience the wild beauty of Africa with our expert guides and 
              unforgettable safaris. Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/packages" className="hover:text-primary-light transition-colors">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-light transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Safaris */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Popular Safaris</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/packages/1" className="hover:text-primary-light transition-colors">
                  Serengeti Migration Safari
                </Link>
              </li>
              <li>
                <Link to="/packages/2" className="hover:text-primary-light transition-colors">
                  Mt kilimanjaro ten days safari
                </Link>
              </li>
              <li>
                <Link to="/packages/3" className="hover:text-primary-light transition-colors">
                  Tarangire safaris
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-light hover:underline transition-colors">
                  View All Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-light" />
                <span>ngorongoro building , Arusha, Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-light" />
                <span>+255688040974</span>,
                <span>+255758010944</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-light" />
                <span>info@Safariplanner.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
          <p>
            &copy; {currentYear} Safari Planner . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;