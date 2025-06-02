import React from 'react';
import ServiceHero from '../../components/ServiceHero';
import RelatedServices from '../../components/RelatedServices';
import ContactCTA from '../../components/ContactCTA';
import { CheckCircle, Globe, Users, Clock, Calendar, Shield, MessageSquare } from 'lucide-react';

const OffshoreOnsitePage: React.FC = () => {
  return (
    <div>
      <ServiceHero 
        title="Offshore-Onsite Developments and Implementation" 
        subtitle="Optimize your SAP implementation with our blended delivery model that combines local expertise with global talent for cost-effective, high-quality solutions."
        breadcrumb="Offshore-Onsite Developments"
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our Offshore-Onsite SAP development and implementation model combines the best of both worlds: onsite teams that work closely with your business to understand requirements and manage the project, and offshore teams that provide cost-effective, scalable resources for development, testing, and support.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This hybrid approach delivers significant cost savings without compromising on quality or responsiveness. Our global delivery centers operate in multiple time zones, enabling round-the-clock productivity and faster project completion.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Model Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Blended Delivery Model</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 bg-blue-600 text-white">
                  <h3 className="text-2xl font-bold mb-4">Onsite Team</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Project management and governance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Business analysis and requirements gathering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solution architecture and design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stakeholder management and communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Change management and training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Critical decision-making and issue resolution</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Offshore Team</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Development and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unit and integration testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Documentation and knowledge base creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Support and maintenance activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Performance optimization and technical support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 coverage for critical systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Optimal Resource Distribution</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 bg-gradient-to-r from-blue-600 to-blue-300 rounded-md relative mb-4">
                  <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 h-8 w-1 bg-white"></div>
                  <div className="absolute top-0 left-[30%] transform -translate-x-1/2 bg-white text-blue-600 rounded-full px-4 py-1 font-bold text-sm">
                    30%
                  </div>
                  <div className="absolute top-0 right-0 bg-white text-blue-600 rounded-full px-4 py-1 font-bold text-sm">
                    70%
                  </div>
                </div>
                <div className="flex justify-between text-gray-600">
                  <div className="text-center">
                    <span className="font-semibold">Onsite Team</span>
                    <p className="text-sm">Strategic direction and client interaction</p>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold">Offshore Team</span>
                    <p className="text-sm">Execution and technical delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Global Delivery Centers</h3>
              <p className="text-gray-600">
                Strategic locations across multiple time zones enable 24/7 development and support capabilities for faster delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexible Team Scaling</h3>
              <p className="text-gray-600">
                Quickly adjust team size and composition based on project needs, without the overhead of hiring and training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Follow-the-Sun Model</h3>
              <p className="text-gray-600">
                Work continues around the clock with handoffs between teams in different time zones, accelerating project timelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Agile Methodology</h3>
              <p className="text-gray-600">
                Iterative development approach with regular sprints and demos to ensure continuous alignment with business objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Robust Governance</h3>
              <p className="text-gray-600">
                Comprehensive project management framework with clear roles, responsibilities, and escalation paths to ensure accountability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Seamless Communication</h3>
              <p className="text-gray-600">
                Integrated collaboration tools and regular touchpoints ensure effective communication between onsite and offshore teams.
              </p>
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Cost Savings</h3>
                <p className="text-gray-600">
                  Reduce implementation and development costs by 30-50% compared to traditional all-onsite models.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Faster Time-to-Market</h3>
                <p className="text-gray-600">
                  Accelerate project timelines by up to 30% through round-the-clock development and parallel workstreams.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Access to Global Talent</h3>
                <p className="text-gray-600">
                  Leverage specialized skills and expertise from a global talent pool not available locally.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Quality</h3>
                <p className="text-gray-600">
                  Benefit from specialized expertise and proven development methodologies that improve solution quality.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Scalability</h3>
                <p className="text-gray-600">
                  Rapidly scale resources up or down based on project phases and business needs without recruiting delays.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Focus on Core Business</h3>
                <p className="text-gray-600">
                  Free up your internal teams to focus on strategic initiatives while we handle implementation details.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Pharmaceutical Company</h3>
              <p className="text-gray-600 mb-6">
                A leading pharmaceutical company with operations in 40+ countries needed to implement SAP S/4HANA across their global organization while minimizing costs and accelerating delivery.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Challenges:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Complex, multi-country implementation with tight timelines</li>
                <li>Limited budget and internal resources</li>
                <li>Country-specific regulatory and compliance requirements</li>
                <li>Need for minimal business disruption during implementation</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Our Solution:</h4>
              <p className="text-gray-600 mb-4">
                We implemented a blended offshore-onsite delivery model that included:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>30% onsite team for business analysis, solution design, and stakeholder management</li>
                <li>70% offshore team for development, configuration, testing, and documentation</li>
                <li>Global program governance with clear roles and responsibilities</li>
                <li>Agile methodology with two-week sprints and regular demonstrations</li>
                <li>Template-based approach with local adaptations for country-specific requirements</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">40%</span>
                  <span className="text-gray-700">Cost Savings</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">25%</span>
                  <span className="text-gray-700">Faster Implementation</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">15</span>
                  <span className="text-gray-700">Countries Live in 18 Months</span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "The offshore-onsite model proposed by Fusion IT allowed us to implement SAP S/4HANA across our global operations much faster and at a lower cost than we initially anticipated. The quality of work and level of expertise from both the onsite and offshore teams exceeded our expectations."
              </p>
              <p className="text-gray-700 font-medium mt-2">- CIO, Global Pharmaceutical Company</p>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do you manage the communication between onsite and offshore teams?</h3>
              <p className="text-gray-600">
                We use a combination of daily stand-up meetings, weekly status reports, and collaboration tools (Microsoft Teams, JIRA, Confluence) to ensure seamless communication. We also establish overlapping working hours between teams to facilitate real-time collaboration.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Where are your offshore development centers located?</h3>
              <p className="text-gray-600">
                Our primary offshore development centers are located in India, Philippines, and Eastern Europe. These strategic locations allow us to provide round-the-clock service and support to clients worldwide.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do you ensure data security and confidentiality?</h3>
              <p className="text-gray-600">
                All our offshore centers comply with international security standards (ISO 27001) and industry-specific regulations. We implement strict access controls, secure VPN connections, and regular security audits. All team members sign confidentiality agreements, and we can accommodate client-specific security requirements.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the typical ratio of onsite to offshore resources?</h3>
              <p className="text-gray-600">
                The typical ratio is 30% onsite to 70% offshore, but this can be adjusted based on project requirements, complexity, and client preferences. During critical phases like requirements gathering and go-live, we may increase the onsite presence temporarily.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How do you handle cultural differences and language barriers?</h3>
              <p className="text-gray-600">
                We select team members with strong English language skills and cultural awareness. Our offshore teams receive training on client-specific business practices and cultural norms. We also establish clear communication protocols and documentation standards to minimize misunderstandings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentService="offshore-onsite-developments" />
      <ContactCTA />
    </div>
  );
};

export default OffshoreOnsitePage;