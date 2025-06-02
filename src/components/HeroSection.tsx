import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText = "Learn More",
  buttonLink = "/about"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
      
      {/* Data visualization elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="data-visualization">
          {/* These are just visual elements for the background */}
          <div className="data-point" style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            animation: 'pulse 4s infinite'
          }}></div>
          <div className="data-point" style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            animation: 'pulse 3s infinite'
          }}></div>
          <div className="data-line" style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(30deg)',
            animation: 'fadeInOut 3s infinite'
          }}></div>
          <div className="data-line" style={{
            position: 'absolute',
            bottom: '25%',
            right: '10%',
            width: '150px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(-20deg)',
            animation: 'fadeInOut 4s infinite'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content">
          <h1 
            className={`hero-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>
          <p 
            className={`hero-subtitle transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            {subtitle}
          </p>
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to={buttonLink} 
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg inline-flex items-center"
            >
              {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
{/*       
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
      `}</style> */}
    </section>
  );
};

export default HeroSection;