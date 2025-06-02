import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm mb-4">
          <Link to="/\" className="text-blue-200 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-blue-300" />
          <Link to="/services" className="text-blue-200 hover:text-white transition-colors duration-300">
            Services
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-blue-300" />
          <span className="text-white">{breadcrumb}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-blue-100 max-w-3xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceHero;