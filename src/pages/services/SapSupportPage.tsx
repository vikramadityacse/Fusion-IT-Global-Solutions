import React from 'react';
import ServiceHero from '../../components/ServiceHero';
import RelatedServices from '../../components/RelatedServices';
import ContactCTA from '../../components/ContactCTA';
import { CheckCircle, Clock, BarChart, Shield, Headset, Wrench, Zap, Laptop } from 'lucide-react';

const SapSupportPage: React.FC = () => {
  return (
    <div>
      <ServiceHero 
        title="SAP Support/AMS Services" 
        subtitle="Ensure the continuous performance, availability, and evolution of your SAP systems with our comprehensive support and application management services."
        breadcrumb="SAP Support/AMS Services"
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our SAP Support and Application Management Services (AMS) provide comprehensive, end-to-end support for your SAP landscape. We help you maximize the value of your SAP investment through proactive monitoring, issue resolution, system optimization, and continuous improvement.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With our flexible support models, you can choose the level of service that best fits your business needs, from basic technical support to full application management. Our team of certified SAP consultants ensures your systems run smoothly, allowing your internal teams to focus on strategic initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Support Service Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <div className="bg-blue-50 w-full rounded-lg p-4 mb-6 text-center">
                <h3 className="text-xl font-bold text-blue-700">Essential Support</h3>
              </div>
              <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incident management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Problem resolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic system monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>8x5 support coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Service desk access</span>
                </li>
              </ul>
              <p className="text-center text-gray-800 font-semibold">
                Ideal for: Small to medium businesses with basic SAP support needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 transition-all duration-300 hover:shadow-lg flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-1 px-4 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="bg-blue-600 w-full rounded-lg p-4 mb-6 text-center">
                <h3 className="text-xl font-bold text-white">Advanced Support</h3>
              </div>
              <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All Essential Support features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Proactive system monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>16x5 support coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular health checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Minor enhancements</span>
                </li>
              </ul>
              <p className="text-center text-gray-800 font-semibold">
                Ideal for: Medium to large businesses with complex SAP landscapes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <div className="bg-gray-800 w-full rounded-lg p-4 mb-6 text-center">
                <h3 className="text-xl font-bold text-white">Premium AMS</h3>
              </div>
              <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All Advanced Support features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24x7 support coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Major enhancements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quarterly business reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Innovation workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Continuous improvement</span>
                </li>
              </ul>
              <p className="text-center text-gray-800 font-semibold">
                Ideal for: Large enterprises with mission-critical SAP systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Components Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Headset className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Service Desk</h3>
              <p className="text-gray-600">
                Single point of contact for all SAP-related issues, with multilingual support and defined SLAs for incident resolution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Support</h3>
              <p className="text-gray-600">
                Expert assistance with system issues, performance optimization, security management, and technical monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Laptop className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Functional Support</h3>
              <p className="text-gray-600">
                Business process expertise to help with configuration, user support, reports, and functional enhancements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Enhancement Services</h3>
              <p className="text-gray-600">
                Development of new reports, interfaces, forms, workflows, and features to extend system capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our AMS Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">SAP Certified Expertise</h3>
              </div>
              <p className="text-gray-600">
                Our team of consultants holds numerous SAP certifications across various modules and technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Flexible Engagement Models</h3>
              </div>
              <p className="text-gray-600">
                Choose from fixed price, time & materials, or hybrid models to fit your budget and requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Proactive Approach</h3>
              </div>
              <p className="text-gray-600">
                We don't just fix issues—we prevent them through proactive monitoring and regular system health checks.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced Total Cost of Ownership</h3>
                <p className="text-gray-600">
                  Lower support costs through our global delivery model, with average savings of 30-40% compared to in-house support.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Improved System Performance</h3>
                <p className="text-gray-600">
                  Proactive monitoring and tuning keep your systems running at peak efficiency, reducing downtime and improving user experience.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Focus on Core Business</h3>
                <p className="text-gray-600">
                  Free up your internal IT resources to focus on strategic initiatives while we handle day-to-day support and maintenance.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Improvement</h3>
                <p className="text-gray-600">
                  Ongoing optimization and enhancement of your SAP landscape to adapt to changing business needs and leverage new technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Knowledge Continuity</h3>
                <p className="text-gray-600">
                  Eliminate the risk of knowledge loss due to staff turnover, with comprehensive documentation and knowledge management.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Predictable Costs</h3>
                <p className="text-gray-600">
                  Fixed monthly or quarterly fees make budgeting easier and more predictable, eliminating unexpected support costs.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Multinational Financial Services Company</h3>
              <p className="text-gray-600 mb-6">
                A global financial services firm with operations in 25 countries needed to optimize their SAP support model while improving system performance and reducing costs.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Challenges:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Fragmented support across multiple vendors and internal teams</li>
                <li>Inconsistent service levels and response times</li>
                <li>Rising support costs and resource constraints</li>
                <li>Increasing number of incidents affecting business operations</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Our Solution:</h4>
              <p className="text-gray-600 mb-4">
                We implemented a comprehensive AMS solution that included:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Consolidated global support under a single service desk</li>
                <li>24x7 monitoring and support for critical systems</li>
                <li>Proactive performance optimization and preventive maintenance</li>
                <li>Standardized processes and KPIs across all regions</li>
                <li>Knowledge management and transition from existing vendors</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">35%</span>
                  <span className="text-gray-700">Reduction in Support Costs</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">60%</span>
                  <span className="text-gray-700">Fewer Critical Incidents</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">99.9%</span>
                  <span className="text-gray-700">System Availability</span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "The transition to Fusion IT's AMS services has been seamless and has exceeded our expectations. We've seen significant improvements in system performance and stability, with a notable reduction in support costs."
              </p>
              <p className="text-gray-700 font-medium mt-2">- Global Head of IT Operations, Financial Services Company</p>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What SAP modules do you support?</h3>
              <p className="text-gray-600">
                We provide support for the entire SAP ecosystem, including SAP S/4HANA, SAP ECC, SAP SuccessFactors, SAP Ariba, SAP CRM, SAP SRM, SAP BW/BI, and all major SAP modules (FI/CO, MM, SD, PP, PM, QM, HCM, etc.).
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do you handle the transition from our current support model?</h3>
              <p className="text-gray-600">
                We follow a structured knowledge transfer process that includes shadowing existing support staff, documenting processes and systems, and a phased handover approach to ensure continuity of service. Typically, transitions take 4-12 weeks depending on complexity.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What are your service level agreements (SLAs)?</h3>
              <p className="text-gray-600">
                Our standard SLAs include response times ranging from 30 minutes for critical issues to 8 hours for low-priority requests. Resolution times vary based on the complexity of the issue. We can customize SLAs to meet your specific business requirements.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Can you support our custom developments and integrations?</h3>
              <p className="text-gray-600">
                Yes, we provide support for both standard SAP functionality and custom developments. During the transition phase, we document and analyze your custom code to ensure effective support and identify potential optimization opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do you ensure knowledge continuity for our systems?</h3>
              <p className="text-gray-600">
                We maintain comprehensive documentation in our knowledge management system, implement cross-training within our support teams, and ensure proper handover procedures. This approach minimizes the impact of any staff changes and ensures consistent service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentService="sap-support-ams" />
      <ContactCTA />
    </div>
  );
};

export default SapSupportPage;