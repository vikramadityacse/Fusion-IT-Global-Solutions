import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: 'Custom SAP Development',
      description: 'Tailoring SAP applications to meet unique business needs',
      path: '/solutions/custom-sap-development'
    },
    {
      title: 'Integration Services',
      description: 'Connecting SAP with third-party systems and cloud platforms',
      path: '/solutions/integration-services'
    },

  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-blue-700 font-bold text-2xl">FUSION IT</span>
            <span className="text-gray-500 text-sm">GLOBAL SOLUTIONS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link to="/services/sap-s4-hana-implementation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    SAP S/4 HANA Implementation
                  </Link>
                  <Link to="/services/hana-migration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    HANA Migration
                  </Link>
                  <Link to="/services/sap-support-ams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    SAP Support/AMS Services
                  </Link>
                  <Link to="/services/offshore-onsite-developments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Offshore-Onsite Developments
                  </Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-blue-600 font-medium border-t border-gray-100">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${solutionsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <div className="py-1">
                  {solutions.map((solution) => (
                    <Link 
                      key={solution.path}
                      to={solution.path} 
                      className="block px-4 py-3 hover:bg-blue-50"
                    >
                      <span className="block text-sm font-medium text-gray-900">{solution.title}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{solution.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/industry" className="text-gray-700 hover:text-blue-600 font-medium">
              Industry
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700">
              <Globe className="h-5 w-5 mr-1" />
              <span>EN</span>
            </button>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-300">
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              About
            </Link>
            <div className="px-3 py-2">
              <button 
                className="flex items-center w-full text-left text-base font-medium text-gray-700"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown className={`ml-auto h-5 w-5 transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  <Link to="/services/sap-s4-hana-implementation" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                    SAP S/4 HANA Implementation
                  </Link>
                  <Link to="/services/hana-migration" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                    HANA Migration
                  </Link>
                  <Link to="/services/sap-support-ams" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                    SAP Support/AMS Services
                  </Link>
                  <Link to="/services/offshore-onsite-developments" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                    Offshore-Onsite Developments
                  </Link>
                  <Link to="/services" className="block py-2 text-sm text-blue-600 font-medium">
                    View All Services
                  </Link>
                </div>
              )}
            </div>
            <div className="px-3 py-2">
              <button 
                className="flex items-center w-full text-left text-base font-medium text-gray-700"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              >
                Solutions <ChevronDown className={`ml-auto h-5 w-5 transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsDropdownOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  {solutions.map((solution) => (
                    <Link 
                      key={solution.path}
                      to={solution.path} 
                      className="block py-2"
                    >
                      <span className="block text-sm font-medium text-gray-900">{solution.title}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{solution.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/industry" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Industry
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <button className="flex items-center text-gray-700">
                  <Globe className="h-5 w-5 mr-1" />
                  <span>EN</span>
                </button>
                <Link to="/contact" className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;