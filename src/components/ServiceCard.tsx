import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="card service-box bg-white">
      <div className="service-icon text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Learn More <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;