import React from 'react';
import { Code, GitBranch, Puzzle, CheckCircle, Users, Zap } from 'lucide-react';
import ContactCTA from '../../components/ContactCTA';

const CustomSapDevPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom SAP Development</h1>
            <p className="text-xl text-blue-100 mb-8">
              Tailored SAP solutions designed to meet your unique business requirements and drive digital transformation
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
              Our custom SAP development services help organizations extend and enhance their SAP systems to meet specific business requirements. We combine deep technical expertise with industry best practices to deliver solutions that drive efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Custom ABAP Development</h3>
              <p className="text-gray-600">
                Develop custom ABAP programs, reports, and enhancements to extend SAP functionality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fiori App Development</h3>
              <p className="text-gray-600">
                Create modern, responsive user interfaces using SAP Fiori and UI5 technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Puzzle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Workflow Development</h3>
              <p className="text-gray-600">
                Automate business processes with custom workflows and approval chains.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tailored Solutions</h3>
                <p className="text-gray-600">
                  Custom-built solutions that perfectly match your business processes and requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced User Experience</h3>
                <p className="text-gray-600">
                  Intuitive interfaces that improve user adoption and productivity.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Increased Efficiency</h3>
                <p className="text-gray-600">
                  Streamlined processes and automation that reduce manual work and errors.
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

export default CustomSapDevPage;