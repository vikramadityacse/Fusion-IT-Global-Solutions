import React from 'react';
import { CheckCircle, Users, Award, TrendingUp, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ContactCTA from '../components/ContactCTA';

const AboutPage: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="ABOUT US" 
        subtitle="Leading SAP Implementation and Solutions Provider"
        buttonText="Our Services"
        buttonLink="/services"
      />

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Our Mission & Vision</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with innovative IT solutions that drive growth, 
                  enhance operational efficiency, and create lasting value through 
                  seamless implementation and ongoing support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Vision</h3>
                <p className="text-gray-700">
                  To be the global leader in SAP Implementation services, recognized for our 
                  expertise, innovation, and commitment to delivering exceptional results 
                  that transform businesses across industries.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Business team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Guiding principles that define our approach and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Client Focus</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, understanding their 
                unique needs and delivering solutions that exceed expectations.
              </p>
            </div>
            <div className="card text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from project 
                planning to implementation and ongoing support.
              </p>
            </div>
            <div className="card text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously seek new ways to leverage 
                technology to solve complex business challenges.
              </p>
            </div>
            <div className="card text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring timely implementation and 
                dependable support that businesses can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                alt="IT professionals working together" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Why Choose FUSION IT</h2>
              <p className="text-gray-700 mb-8">
                At FUSION IT GLOBAL SOLUTIONS, we combine deep industry expertise with 
                cutting-edge technical knowledge to deliver SAP Implementation services 
                that drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Expert Team</h3>
                    <p className="text-gray-600">
                      Our team of certified IT professionals brings years of experience 
                      across diverse industries and technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Proven Methodology</h3>
                    <p className="text-gray-600">
                      Our structured implementation approach ensures consistent, 
                      high-quality results across all projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      We customize our services to address your specific business 
                      challenges and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Our relationship extends beyond implementation with comprehensive 
                      support and maintenance services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Meet the experts leading our mission to transform businesses through technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg" 
                  alt="CEO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Robert Williams</h3>
                <p className="text-blue-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in IT leadership, Robert drives our vision 
                  for transformative technology solutions.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg" 
                  alt="CTO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Jennifer Chen</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Jennifer leads our technical strategy, bringing deep expertise in enterprise 
                  systems and emerging technologies.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                  alt="COO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Michael Rodriguez</h3>
                <p className="text-blue-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Michael ensures the seamless delivery of our implementation services, 
                  focusing on operational excellence.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3931634/pexels-photo-3931634.jpeg" 
                  alt="CSO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Chief Strategy Officer</p>
                <p className="text-gray-600 text-sm">
                  Sarah develops our strategic roadmap, identifying new opportunities for 
                  growth and innovation in IT services.
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

export default AboutPage;
