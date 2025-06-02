import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "FUSION IT GLOBAL SOLUTIONS transformed our outdated systems with a seamless implementation that increased our operational efficiency by 40%. Their team's expertise and dedication were outstanding throughout the entire process.",
    author: "Sarah Johnson",
    position: "CTO, Global Manufacturing Inc.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    quote: "Working with FUSION IT was a game-changer for our digital transformation journey. Their cloud solutions provided the scalability and security we needed while reducing our IT costs by 30%.",
    author: "Michael Chen",
    position: "IT Director, FinTech Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    quote: "The data analytics platform implemented by FUSION IT has given us unprecedented insights into our customer behavior, driving a 25% increase in customer retention. Their ongoing support has been exceptional.",
    author: "Emily Rodriguez",
    position: "CEO, Retail Innovations",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-600 mb-4">
                      <Quote className="w-10 h-10 opacity-30" />
                    </div>
                    <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-bold text-blue-900">{testimonial.author}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-md transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-md transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TestimonialSlider;