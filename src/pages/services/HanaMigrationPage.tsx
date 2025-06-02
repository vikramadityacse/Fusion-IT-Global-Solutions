import React from 'react';



import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { CheckCircle, Database, BarChart2, Clock, ArrowRight, BarChart, Shield, Globe, Server } from 'lucide-react';

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

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Contact our team of experts today to discuss how our services can help your organization achieve its goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <Link 
            to="/services" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};


const HanaMigrationPage: React.FC = () => {
  return (
    <div>
      {/* <ServiceHero 
        title="HANA Migration" 
        subtitle="Accelerate your digital transformation by migrating to SAP HANA's powerful in-memory platform for real-time analytics and processing."
        breadcrumb="HANA Migration"
      /> */}

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
            <span className="text-white">HANA Migration</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HANA Migration</h1>
          <p className="text-xl text-blue-100 max-w-3xl">Accelerate your digital transformation by migrating to SAP HANA's powerful in-memory platform for real-time analytics and processing.</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 mb-6">
              SAP HANA Migration involves moving your existing SAP and non-SAP data and applications to the powerful SAP HANA in-memory platform. This strategic transition enhances system performance, enables real-time analytics, and supports your organization's digital transformation initiatives.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our migration services provide a comprehensive approach to help you seamlessly transition to SAP HANA with minimal disruption to your business operations, while maximizing the benefits of this next-generation platform.
            </p>
          </div>
        </div>
      </section>

      {/* Migration Approaches Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Migration Approaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mr-4">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Database Migration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Migrate your existing database to SAP HANA while keeping your current SAP applications unchanged, providing immediate performance benefits.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Minimal impact on business processes</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Faster reporting and analytics</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>First step toward full S/4HANA</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mr-4">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">System Conversion</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Convert your existing SAP ERP system to SAP S/4HANA, preserving your historical data and customizations while gaining new functionality.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Maintains historical data</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Leverages existing investments</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Access to full S/4HANA capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">New Implementation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Start fresh with a new SAP S/4HANA implementation, allowing for complete process redesign and optimization.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Clean system landscape</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Opportunity to redesign processes</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Optimized for best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Migration Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Assessment & Planning</h3>
                    <p className="text-gray-600">
                      Evaluate your current landscape, custom code, and data volumes to develop a tailored migration strategy and roadmap.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Assessment & Planning</h3>
                    <p className="md:hidden text-gray-600">
                      Evaluate your current landscape, custom code, and data volumes to develop a tailored migration strategy and roadmap.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">System Preparation</h3>
                    <p className="md:hidden text-gray-600">
                      Clean up data, optimize custom code, and prepare your system for migration to minimize disruption.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">System Preparation</h3>
                    <p className="text-gray-600">
                      Clean up data, optimize custom code, and prepare your system for migration to minimize disruption.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Migration Execution</h3>
                    <p className="text-gray-600">
                      Implement the migration using SAP's proven tools and methodologies, with rigorous testing at each stage.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Migration Execution</h3>
                    <p className="md:hidden text-gray-600">
                      Implement the migration using SAP's proven tools and methodologies, with rigorous testing at each stage.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Validation & Optimization</h3>
                    <p className="md:hidden text-gray-600">
                      Verify system functionality, performance, and data integrity, with fine-tuning to maximize benefits.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Validation & Optimization</h3>
                    <p className="text-gray-600">
                      Verify system functionality, performance, and data integrity, with fine-tuning to maximize benefits.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Go-Live & Support</h3>
                    <p className="text-gray-600">
                      Manage the cutover to the new system with comprehensive go-live support and post-migration assistance.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Go-Live & Support</h3>
                    <p className="md:hidden text-gray-600">
                      Manage the cutover to the new system with comprehensive go-live support and post-migration assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Database Migration</h3>
              </div>
              <p className="text-gray-600">
                Expert migration of your existing database to SAP HANA with minimal business disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Custom Code Remediation</h3>
              </div>
              <p className="text-gray-600">
                Analysis and optimization of custom code to ensure compatibility with SAP HANA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Downtime Minimization</h3>
              </div>
              <p className="text-gray-600">
                Advanced techniques to reduce system downtime during migration to as little as a few hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Performance Optimization</h3>
              </div>
              <p className="text-gray-600">
                Fine-tuning of the migrated system to maximize performance benefits of SAP HANA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Data Security</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive data protection measures throughout the migration process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Data Cleansing</h3>
              </div>
              <p className="text-gray-600">
                Identification and correction of data quality issues prior to migration.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Performance</h3>
                <p className="text-gray-600">
                  Dramatically faster data processing and reporting with in-memory computing technology.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-Time Analytics</h3>
                <p className="text-gray-600">
                  Instant access to business insights for faster, more informed decision-making.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced TCO</h3>
                <p className="text-gray-600">
                  Lower total cost of ownership through simplified IT landscape and reduced data footprint.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Future-Ready Platform</h3>
                <p className="text-gray-600">
                  Foundation for digital transformation and innovation with the latest SAP technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Improved User Experience</h3>
                <p className="text-gray-600">
                  Modern, intuitive interfaces with SAP Fiori that enhance productivity and user satisfaction.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Data Management</h3>
                <p className="text-gray-600">
                  Advanced data compression and management capabilities that reduce storage requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Success Story</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Retail Corporation</h3>
              <p className="text-gray-600 mb-6">
                A multinational retail company with operations in 20+ countries needed to modernize their SAP landscape to support growth and improve analytics capabilities.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Challenges:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Slow reporting and analytics processes</li>
                <li>Growing data volumes impacting system performance</li>
                <li>Legacy custom code with compatibility issues</li>
                <li>Need for real-time inventory visibility across global operations</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Our Solution:</h4>
              <p className="text-gray-600 mb-4">
                We implemented a phased HANA migration strategy that included:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Initial database migration to SAP HANA</li>
                <li>Custom code remediation and optimization</li>
                <li>Development of real-time analytics dashboards</li>
                <li>Implementation of SAP Fiori apps for mobile access</li>
                <li>Subsequent conversion to full S/4HANA</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">85%</span>
                  <span className="text-gray-700">Faster Reporting</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">30%</span>
                  <span className="text-gray-700">Reduction in Storage</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">50%</span>
                  <span className="text-gray-700">Improved Batch Processing</span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "The migration to HANA has been a game-changer for our business. We now have real-time visibility into our operations and can make faster, data-driven decisions that have significantly improved our competitiveness."
              </p>
              <p className="text-gray-700 font-medium mt-2">- IT Director, Global Retail Corporation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How long does a typical HANA migration take?</h3>
              <p className="text-gray-600">
                The duration depends on the size and complexity of your SAP landscape. A database-only migration can take as little as a few weeks, while a full conversion to S/4HANA typically takes 3-9 months.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Will my custom code work with SAP HANA?</h3>
              <p className="text-gray-600">
                Many custom developments will require some level of remediation to be compatible with SAP HANA. Our code analysis tools identify issues early in the migration process, and our experts help optimize your custom code for HANA.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How much downtime is required for migration?</h3>
              <p className="text-gray-600">
                With our advanced migration techniques, system downtime can be minimized to as little as a weekend. For very large systems, we employ near-zero downtime approaches to reduce business impact.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Should we migrate directly to S/4HANA or take a phased approach?</h3>
              <p className="text-gray-600">
                This depends on your business priorities, timeline, and resources. Many organizations choose a phased approach, starting with a database migration to SAP HANA before moving to full S/4HANA. We help you evaluate the best strategy for your specific situation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What are the hardware requirements for SAP HANA?</h3>
              <p className="text-gray-600">
                SAP HANA requires specific certified hardware configurations. We help you assess your current infrastructure and recommend appropriate hardware sizing based on your data volumes and performance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentService="hana-migration" />
      <ContactCTA />
    </div>
  );
};

export default HanaMigrationPage;