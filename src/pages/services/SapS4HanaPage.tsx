import React from 'react';
import ServiceHero from '../../components/ServiceHero';
import RelatedServices from '../../components/RelatedServices';
import ContactCTA from '../../components/ContactCTA';
import { CheckCircle, Server, Database, BarChart2, Clock, Users, Shield } from 'lucide-react';

const SapS4HanaPage: React.FC = () => {
  return (
    <div>
      <ServiceHero 
        title="SAP S/4 HANA Implementation" 
        subtitle="Transform your business with next-generation ERP solutions that enable real-time analytics, simplified processes, and intelligent automation."
        breadcrumb="SAP S/4 HANA Implementation"
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 mb-6">
              SAP S/4HANA is the next-generation, intelligent ERP business suite designed specifically for in-memory computing. Our implementation services help organizations transition to this powerful platform, enabling real-time data processing, streamlined operations, and enhanced decision-making capabilities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With our SAP S/4HANA implementation expertise, your business can leverage advanced analytics, simplified data models, and intelligent automation to gain a competitive edge in today's digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">In-Memory Computing</h3>
              </div>
              <p className="text-gray-600">
                Lightning-fast processing speed with SAP HANA's in-memory database, enabling real-time analytics and transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Embedded Analytics</h3>
              </div>
              <p className="text-gray-600">
                Built-in reporting and analytics capabilities that provide instant insights for better decision-making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Server className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Simplified Data Model</h3>
              </div>
              <p className="text-gray-600">
                Streamlined data architecture that reduces complexity and improves system performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Intuitive User Experience</h3>
              </div>
              <p className="text-gray-600">
                Modern, role-based Fiori interface that enhances user productivity and adoption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Advanced Security</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive security features to protect sensitive business data and ensure compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Real-Time Processing</h3>
              </div>
              <p className="text-gray-600">
                Instantaneous data processing that eliminates batch jobs and accelerates business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Implementation Approach</h2>
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
                      Comprehensive analysis of your current systems, business processes, and requirements to develop a tailored implementation strategy.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Assessment & Planning</h3>
                    <p className="md:hidden text-gray-600">
                      Comprehensive analysis of your current systems, business processes, and requirements to develop a tailored implementation strategy.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Design & Configuration</h3>
                    <p className="md:hidden text-gray-600">
                      Detailed design of your S/4HANA solution, including system architecture, data migration strategy, and process configurations.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Design & Configuration</h3>
                    <p className="text-gray-600">
                      Detailed design of your S/4HANA solution, including system architecture, data migration strategy, and process configurations.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Development & Integration</h3>
                    <p className="text-gray-600">
                      Development of custom enhancements, integrations with existing systems, and implementation of business processes.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Development & Integration</h3>
                    <p className="md:hidden text-gray-600">
                      Development of custom enhancements, integrations with existing systems, and implementation of business processes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Testing & Quality Assurance</h3>
                    <p className="md:hidden text-gray-600">
                      Rigorous testing of all system components, processes, and integrations to ensure optimal performance and reliability.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Testing & Quality Assurance</h3>
                    <p className="text-gray-600">
                      Rigorous testing of all system components, processes, and integrations to ensure optimal performance and reliability.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Deployment & Support</h3>
                    <p className="text-gray-600">
                      Smooth transition to the new system with comprehensive training, go-live support, and ongoing maintenance services.
                    </p>
                  </div>
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h3 className="md:hidden text-xl font-semibold mb-2 text-gray-800">Deployment & Support</h3>
                    <p className="md:hidden text-gray-600">
                      Smooth transition to the new system with comprehensive training, go-live support, and ongoing maintenance services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Increased Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamlined processes and automation reduce manual work and operational costs by up to 30%.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-Time Business Insights</h3>
                <p className="text-gray-600">
                  Instant access to critical business data enables faster, more informed decision-making.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced User Experience</h3>
                <p className="text-gray-600">
                  Intuitive Fiori interface improves user adoption and productivity across the organization.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Future-Ready Platform</h3>
                <p className="text-gray-600">
                  Modern architecture supports emerging technologies like AI, machine learning, and IoT.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced Total Cost of Ownership</h3>
                <p className="text-gray-600">
                  Simplified landscape and reduced data footprint lower infrastructure and maintenance costs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Accelerated Innovation</h3>
                <p className="text-gray-600">
                  Agile platform enables faster deployment of new capabilities and business models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Success Story</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Manufacturing Company</h3>
              <p className="text-gray-600 mb-6">
                A leading manufacturing company with operations in 15 countries needed to modernize their legacy ERP systems to improve efficiency and gain better business insights.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Challenges:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Fragmented legacy systems across multiple regions</li>
                <li>Slow reporting and decision-making processes</li>
                <li>Limited visibility into global operations</li>
                <li>Rising maintenance costs for aging infrastructure</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Our Solution:</h4>
              <p className="text-gray-600 mb-4">
                We implemented SAP S/4HANA with a phased global rollout approach, including:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Comprehensive business process redesign</li>
                <li>Central finance implementation for unified financial reporting</li>
                <li>Integration with existing manufacturing systems</li>
                <li>Custom analytics dashboard for executive insights</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">40%</span>
                  <span className="text-gray-700">Faster Month-End Close</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">60%</span>
                  <span className="text-gray-700">Improved Reporting Speed</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">25%</span>
                  <span className="text-gray-700">Reduction in IT Costs</span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "The SAP S/4HANA implementation has transformed our business operations, providing us with real-time insights and the agility we need to stay competitive in today's global market."
              </p>
              <p className="text-gray-700 font-medium mt-2">- CIO, Global Manufacturing Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What is SAP S/4HANA?</h3>
              <p className="text-gray-600">
                SAP S/4HANA is SAP's next-generation, intelligent ERP business suite designed specifically for in-memory computing. It offers simplified data models, instant insight into data, and on-the-fly decision making.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How long does a typical SAP S/4HANA implementation take?</h3>
              <p className="text-gray-600">
                Implementation timelines vary based on the size and complexity of your organization. A typical implementation can range from 6 months for smaller, focused implementations to 18+ months for large, global deployments.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Can we implement SAP S/4HANA in phases?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible implementation approaches including phased rollouts by business unit, geography, or functionality. This allows organizations to manage change more effectively and realize benefits incrementally.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the difference between on-premise and cloud S/4HANA?</h3>
              <p className="text-gray-600">
                SAP S/4HANA can be deployed on-premise, in a private cloud, or as a public cloud solution. The primary differences relate to deployment flexibility, customization options, upgrade cycles, and cost structure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do we prepare for an S/4HANA migration?</h3>
              <p className="text-gray-600">
                Preparation typically includes a thorough assessment of your current landscape, data quality analysis, business process review, and defining your target architecture. Our team provides a comprehensive readiness assessment to guide this process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentService="sap-s4-hana-implementation" />
      <ContactCTA />
    </div>
  );
};

export default SapS4HanaPage;