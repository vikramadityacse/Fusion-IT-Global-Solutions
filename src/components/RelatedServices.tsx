import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Database, BarChart, Globe } from 'lucide-react';

interface RelatedServicesProps {
  currentService: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentService }) => {
  const services = [
    {
      id: 'sap-s4-hana-implementation',
      title: 'SAP S/4 HANA Implementation',
      description: 'Real-time data processing, improved performance, and intelligent automation.',
      icon: <Server className="h-6 w-6" />,
      link: '/services/sap-s4-hana-implementation'
    },
    {
      id: 'hana-migration',
      title: 'HANA Migration',
      description: 'Move data and applications to enhance system performance and enable analytics.',
      icon: <Database className="h-6 w-6" />,
      link: '/services/hana-migration'
    },
    {
      id: 'sap-support-ams',
      title: 'SAP Support/AMS Services',
      description: 'Ongoing maintenance, monitoring, and enhancement of SAP systems.',
      icon: <BarChart className="h-6 w-6" />,
      link: '/services/sap-support-ams'
    },
    {
      id: 'offshore-onsite-developments',
      title: 'Offshore-Onsite Developments',
      description: 'Cost-effective, collaborative implementation through a blended delivery model.',
      icon: <Globe className="h-6 w-6" />,
      link: '/services/offshore-onsite-developments'
    }
  ];

  // Filter out the current service
  const relatedServices = services.filter(service => service.id !== currentService).slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;