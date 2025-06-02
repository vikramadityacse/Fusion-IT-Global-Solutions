import React from 'react';
import { Link } from 'react-router-dom';

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

export default ContactCTA;