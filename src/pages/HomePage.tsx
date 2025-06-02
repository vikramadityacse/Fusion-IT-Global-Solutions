import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Database,BarChart,ArrowRight, CheckCircle, Globe} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-10 h-10" />,
      title: "SAP S/4 HANA Implementation",
      description: "SAP S/4HANA Implementation enables real-time data processing, improved performance, and intelligent automation across core business functions.",
      link: "/pages/services/SapS4HanaPage"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "HANA Migration",
      description: "SAP HANA Migration involves moving data and applications to enhance system performance, enables real-time analytics, and supports digital transformation initiatives.",
      link: "/pages/services/HanaMigrationPage"
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "SAP Support/AMS Services",
      description: "SAP Support/AMS (Application Management Services) provide ongoing maintenance, monitoring, and enhancement of SAP systems.",
      link: "/pages/services/SapSupportPage"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Offshore-Onsite Developments and Implementation",
      description: "Offshore-Onsite SAP Developments enable cost-effective, collaborative implementation through a blended delivery model across global teams.",
      link: "/pages/OffshoreOnsitePage"
    }
  ];

  // const industries = [
  //   {
  //     icon: <Building className="w-8 h-8" />,
  //     title: "Manufacturing",
  //     link: "/industry/manufacturing"
  //   },
  //   {
  //     icon: <BarChart className="w-8 h-8" />,
  //     title: "Finance",
  //     link: "/industry/finance"
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Healthcare",
  //     link: "/industry/healthcare"
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Retail",
  //     link: "/industry/retail"
  //   }
  // ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Enterprise Clients" },
    { number: "10+", label: "Countries Served" },
    { number: "97%", label: "Client Satisfaction" }
  ];

  return (
    <div>
      <HeroSection 
        title="Enterprise SAP Solutions for Digital Transformation" 
        subtitle="Comprehensive SAP solutions designed to transform your business operations and drive growth"
        buttonText="Our Services"
        buttonLink="/services"
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title slide-in">Accelerate Your Business Growth</h2>
              <p className="text-gray-600 mb-6 slide-in">
                FUSION IT GLOBAL SOLUTIONS provides comprehensive IT services throughout the application lifecycle, 
                encompassing design, development, implementation, ongoing management, and evolution of applications 
                aligned with your business objectives.
              </p>
              <p className="text-gray-600 mb-6 slide-in">
                Our adept consultants specializing in SAP Implementation prioritize operational excellence, 
                aiming to enhance your workflow, eliminate inefficiencies, boost productivity, and enable 
                data-driven decision-making for improved savings and efficiency by incorporating flexible and adaptable solutions.
              </p>
              <div className="space-y-4 slide-in">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-700">Experienced team of SAP professionals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-700">Tailored solutions for your specific business needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-700">End-to-end implementation and support services</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary mt-8 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                alt="Business team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive SAP solutions designed to transform your business operations and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                link={service.link} 
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline inline-flex items-center">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Specialized IT solutions tailored for diverse industry requirements
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} to={industry.link} className="card hover:bg-blue-50 text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-800">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{industry.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our solutions
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Partner with FUSION IT GLOBAL SOLUTIONS to unlock your business potential 
            with our expert SAP Implementation services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-blue-700">
              Contact Us
            </Link>
            <Link to="/services" className="btn bg-transparent border-2 border-white hover:bg-blue-700">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;