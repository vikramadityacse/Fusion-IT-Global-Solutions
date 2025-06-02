import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const IndustryPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const industries: Industry[] = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Covers both discrete (e.g., automotive, machinery) and process industries (e.g., chemicals, food & beverage) focused on producing goods at scale.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      benefits: [
        'Real-time monitoring of shop floor operations',
        'Improved demand forecasting and inventory management',
        'Faster time-to-market for new products',
        'Cost savings through automation and efficient planning'
      ]
    },
    {
      id: 'retail & consumer products',
      title: 'Retail and Consumer Products',
      description: 'Serves supermarkets, fashion retailers, electronics stores, and companies producing packaged goods.',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg',
      benefits: [
        'Personalized customer experiences across all channels',
        'Optimized pricing and promotions',
        'Real-time inventory and supply chain visibility',
        'Agile response to market trends and consumer demand'
      ]
    },
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Caters to banks, insurance companies, and capital markets with solutions for transactions, compliance, and customer management.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      benefits: [
        'Robust financial compliance and risk management',
        'Streamlined digital banking services',
        'Enhanced customer engagement and reporting',
        'Agile product development (e.g., new insurance plans, loans)'
      ]
    },
    {
      id: 'energy & natural-resources',
      title: 'Energy and Natural Resources',
      description: 'Supports utilities, oil & gas, mining, and chemical companies in managing large-scale operations and sustainability.',
      image: 'https://images.pexels.com/photos/18962706/pexels-photo-18962706.jpeg',
      benefits: [
        'Real-time asset and infrastructure management',
        'Regulatory compliance and emissions monitoring',
        'Improved workforce safety and incident tracking',
        'Forecasting and optimization of resource usage'
      ]
    },
    {
      id: 'transportation-logistics',
      title: 'Transportation and Logistics',
      description: 'Achieve operational excellence and agility in the automotive industry with SAP solutions for efficient supply chain management and manufacturing processes.',
      image: 'https://images.pexels.com/photos/32343566/pexels-photo-32343566.jpeg',
      benefits: [
        'End-to-end visibility across the supply chain',
        'Efficient route and load planning',
        'Reduced shipping costs and delivery delays',
        'Real-time tracking of goods and inventory'
      ]
    },
    {
      id: 'life-sciences',
      title: 'Life Sciences',
      description: "Supports pharmaceutical companies, biotechnology firms, and medical device manufacturers.",
      image: 'https://images.pexels.com/photos/25626515/pexels-photo-25626515.jpeg',
      benefits: [
        'Compliance with strict regulatory standards (e.g., FDA)',
        'Full traceability and product serialization',
        'Efficient R&D and clinical trial management',
        'Cost-effective and secure product launches'
      ]
    },
    {
      id: 'telecommunications-media',
      title: ' Telecommunications and Media',
      description: 'Covers telecom providers, internet service companies, broadcasters, and content creators.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
      benefits: [
        'Flexible billing and subscription services',
        'Personalization of content and offers',
        'Real-time data for network performance and user behavior',
        'Monetization of digital and OTT platforms'
      ]
    },
    {
      id: 'renewable-energy',
      title: 'Renewable Energy',
      description: 'Manage the renewable energy project lifecycle with SAP\'s comprehensive suite of solutions for project planning, resource management, and performance tracking.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      benefits: [
        'Project lifecycle management',
        'Resource optimization',
        'Performance monitoring',
        'Compliance management'
      ]
    },
    {
      id: 'engineering-construction-operations',
      title: ' Engineering, Construction & Operations (EC&O)',
      description: 'Covers construction companies, real estate developers, and infrastructure operators.',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg',
      benefits: [
        'Accurate project planning, budgeting, and scheduling',
        'Resource optimization and risk mitigation',
        'Real-time visibility into project progress',
        'Better contract and vendor management'
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="INDUSTRY EXPERTISE" 
        subtitle="Specialized IT Solutions Across Multiple Industries"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Industries Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Industry Solutions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Delivering tailored SAP Implementation services across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <button
                    onClick={() => toggleSection(industry.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    View Benefits
                    <Plus 
                      className={`ml-2 w-4 h-4 transform transition-transform ${
                        expandedSection === industry.id ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === industry.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-blue-800 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Why Choose Our Industry Solutions?</h2>
            <p className="text-gray-600 mb-8">
              Our deep industry expertise combined with cutting-edge IT solutions enables 
              us to deliver transformative results across various sectors. We understand 
              the unique challenges and requirements of each industry, allowing us to 
              provide tailored solutions that drive real business value.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-primary inline-flex items-center"
            >
              Discuss Your Industry Needs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;