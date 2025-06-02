import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, Cloud, Database, Cpu, ShieldCheck,
  Code, Headphones, CheckCircle, Plus, Zap, BarChart, Shield, Users} from 'lucide-react';
import HeroSection from '../components/HeroSection';

const ServicesPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

   const additionalServices = [
    {
      id: 'sap-business-transformation',
      title: 'SAP Business Transformation',
      description: 'Reinvent your business processes and operating models with SAP-enabled digital transformation strategies.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'sap-analytics',
      title: 'SAP Analytics Solutions',
      description: 'Harness the power of your data with advanced analytics, reporting, and business intelligence solutions.',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      id: 'sap-integration',
      title: 'SAP Integration Services',
      description: 'Seamlessly connect SAP with other enterprise systems and cloud applications for unified business processes.',
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 'sap-cloud-migration',
      title: 'SAP Cloud Migration',
      description: 'Modernize your infrastructure and reduce costs by moving your SAP applications to the cloud.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      id: 'sap-security',
      title: 'SAP Security & Compliance',
      description: 'Protect your critical business data and ensure regulatory compliance with our comprehensive security services.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 'sap-training',
      title: 'SAP Training & Change Management',
      description: 'Maximize user adoption and ROI with tailored training programs and effective change management strategies.',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const implementationServices = [
    {
      id: 'private-cloud',
      title: 'Enterprise SAP Implementation - Private Cloud',
      content: 'Comprehensive private cloud implementation services tailored for enterprises, ensuring secure and controlled environments with maximum customization capabilities.'
    },
    {
      id: 'public-cloud',
      title: 'Enterprise SAP Implementation - Public Cloud',
      content: 'Expert public cloud implementation services leveraging leading platforms to deliver scalable, cost-effective solutions for your business.'
    },
    {
      id: 'hybrid-rollouts',
      title: 'Enterprise IT & Cloud Rollouts',
      content: 'Strategic rollout services for enterprise IT and cloud solutions, ensuring smooth transitions and minimal business disruption.'
    },
    {
      id: 'migration',
      title: 'Legacy to Modern IT Migration',
      content: 'Specialized migration services to help organizations transition from legacy systems to modern IT infrastructure seamlessly.'
    }
  ];

  const services = [
    {
      icon: <Server className="w-10 h-10" />,
      title: "SAP S/4 HANA Implementation ",
      description: "Expert implementation of enterprise IT solutions tailored to your business needs, ensuring seamless integration with existing systems.",
      benefits: [
        "Reduced implementation time and costs",
        "Minimized business disruption",
        "Enhanced system performance",
        "Comprehensive training and knowledge transfer"
      ],
      link: "/services/implementation"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "HANA Migrations",
      description: "Secure and scalable cloud infrastructure for modern business applications, from migration to ongoing management and optimization.",
      benefits: [
        "Improved scalability and flexibility",
        "Reduced infrastructure costs",
        "Enhanced security and compliance",
        "Disaster recovery and business continuity"
      ],
      link: "/services/cloud-solutions"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "SAP Support/AMS Services",
      description: "Comprehensive data solutions from storage to analytics and insights, helping you harness the full value of your data assets.",
      benefits: [
        "Centralized data management",
        "Enhanced data quality and governance",
        "Advanced analytics capabilities",
        "Data-driven decision making"
      ],
      link: "/services/data-management"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "SAP Upgrades",
      description: "Strategic digital transformation to modernize your business processes and create new digital capabilities and business models.",
      benefits: [
        "Streamlined business processes",
        "Improved customer experience",
        "New revenue opportunities",
        "Enhanced competitive advantage"
      ],
      link: "/services/digital-transformation"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Offshore-Onsite Developments and Implementation",
      description: "Robust security solutions to protect your critical assets, ensure compliance, and mitigate risks in an evolving threat landscape.",
      benefits: [
        "Comprehensive threat protection",
        "Regulatory compliance",
        "Reduced security incidents",
        "Security awareness and training"
      ],
      link: "/services/cybersecurity"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and create unique competitive advantages.",
      benefits: [
        "Perfectly aligned with business needs",
        "Increased operational efficiency",
        "Competitive differentiation",
        "Scalable and adaptable solutions"
      ],
      link: "/services/custom-development"
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "SAP Support & Maintenance",
      description: "Reliable technical support and maintenance services to ensure your IT systems operate at peak performance levels.",
      benefits: [
        "Reduced system downtime",
        "Proactive maintenance and monitoring",
        "Fast issue resolution",
        "Predictable IT support costs"
      ],
      link: "/services/support-maintenance"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="OUR SERVICES" 
        subtitle="Comprehensive IT Solutions to Drive Your Business Forward"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      {/* Implementation Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Enterprise SAP Implementation Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {implementationServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(service.id)}
                >
                  <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                  <Plus 
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${
                      expandedSection === service.id ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {expandedSection === service.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700">{service.content}</p>
                    <div className="mt-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Implementation Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Committed to simplify and speed up SAP Implementation
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At FUSION IT GLOBAL SOLUTIONS, we understand that successful SAP Implementation 
            is the key to unlocking your business's full potential. With our customer-centric 
            approach, we strive to deliver tailored solutions that align with your strategic goals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Transformative IT Services</h2>
            <p className="text-gray-700 text-lg">
              FUSION IT GLOBAL SOLUTIONS offers a comprehensive suite of IT services designed 
              to help businesses leverage technology for growth, efficiency, and competitive 
              advantage. Our expert team delivers tailored solutions that address your unique 
              challenges and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-semibold text-blue-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8">
            {services.slice(6, 8).map((service, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-semibold text-blue-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Implementation Methodology</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              A structured approach to ensure successful SAP Implementation
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business objectives, current systems, 
                    and requirements to develop a comprehensive implementation plan.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Requirements gathering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">System assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Project scope definition</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-6 md:mb-0">
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Solution design</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Architecture planning</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Technology selection</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                  </ul>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Design & Architecture</h3>
                  <p className="text-gray-600">
                    We design a tailored solution architecture that meets your requirements 
                    and integrates with your existing systems.
                  </p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Implementation & Configuration</h3>
                  <p className="text-gray-600">
                    Our experts deploy and configure the solution according to the design 
                    specifications, ensuring minimal disruption to your operations.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">System deployment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Data migration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Integration with existing systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-6 md:mb-0">
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">System testing</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">User acceptance testing</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Performance validation</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                  </ul>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  4
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Testing & Quality Assurance</h3>
                  <p className="text-gray-600">
                    We conduct comprehensive testing to ensure the solution meets all 
                    requirements and performs optimally.
                  </p>
                </div>
              </div>
              
              {/* Phase 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Training & Deployment</h3>
                  <p className="text-gray-600">
                    We provide thorough training for your team and manage the transition 
                    to the new system to ensure successful adoption.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  5
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">User training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Go-live support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Knowledge transfer</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 6 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-6 md:mb-0">
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Ongoing maintenance</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Performance monitoring</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-gray-700 md:order-2">Continuous improvement</span>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 mr-2 mt-0.5 md:order-1" />
                    </li>
                  </ul>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10">
                  6
                </div>
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg mb-4">
                  6
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Support & Optimization</h3>
                  <p className="text-gray-600">
                    We provide ongoing support and continually optimize your solution to 
                    ensure it delivers maximum value over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your IT Infrastructure?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Contact us today to discuss how our comprehensive IT services can help your 
            business achieve its goals and overcome challenges.
          </p>
          <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-blue-700">
            Hire US
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;