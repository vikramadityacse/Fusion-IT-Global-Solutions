import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link to="/" className="flex flex-col">
                <span className="text-white font-bold text-xl">FUSION IT</span>
                <span className="text-blue-300 text-sm">GLOBAL SOLUTIONS</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive SAP solutions designed to transform your business operations and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/sap-s4-hana-implementation" className="text-gray-400 hover:text-white transition-colors duration-300">
                  SAP S/4 HANA Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/hana-migration" className="text-gray-400 hover:text-white transition-colors duration-300">
                  HANA Migration
                </Link>
              </li>
              <li>
                <Link to="/services/sap-support-ams" className="text-gray-400 hover:text-white transition-colors duration-300">
                  SAP Support/AMS Services
                </Link>
              </li>
              <li>
                <Link to="/services/offshore-onsite-developments" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Offshore-Onsite Developments
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Industry
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Business Avenue, Technology Park, CA 94103</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@fusionit-global.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Fusion IT Global Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;