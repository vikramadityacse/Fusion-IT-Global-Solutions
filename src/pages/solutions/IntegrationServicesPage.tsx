import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Cloud, Lock, CheckCircle, Zap, Shield } from 'lucide-react';
import ContactCTA from '../../components/ContactCTA';

const IntegrationServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Integration Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Seamlessly connect your SAP systems with third-party applications and cloud platforms
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our SAP integration services help organizations create a connected ecosystem where data flows seamlessly between SAP and non-SAP systems. We leverage industry-standard integration patterns and technologies to build robust, scalable integration solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Integration Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">API Integration</h3>
              <p className="text-gray-600">
                Connect SAP with external systems using REST APIs and web services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cloud Integration</h3>
              <p className="text-gray-600">
                Integrate SAP with cloud platforms and SaaS applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Data Exchange</h3>
              <p className="text-gray-600">
                Implement secure, reliable data exchange between systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Connectivity</h3>
                <p className="text-gray-600">
                  Enable smooth data flow between different systems and applications.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Automate data exchange and eliminate manual data entry.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Security</h3>
                <p className="text-gray-600">
                  Secure data transfer with encryption and access controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default IntegrationServicesPage;