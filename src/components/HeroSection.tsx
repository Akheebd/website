
import { useEffect, useRef, useState } from 'react';
import { PhoneCall, ChevronRight } from 'lucide-react';
import ToothModel from './ToothModel';
import DentalTool from './DentalTool';
import DentalScene from './DentalScene';

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="min-h-screen pt-24 px-4 md:px-6 relative overflow-hidden bg-dental-gradient"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="space-y-8 max-w-xl">
            <div 
              className={`transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-dental-red bg-opacity-10 text-dental-red text-sm font-medium mb-4">
                Modern Dental Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Your Smile, <br />
                Our <span className="text-dental-red">Priority</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience dental care that combines cutting-edge technology with a gentle, patient-centered approach. We're dedicated to giving you a smile you'll love to show off.
              </p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a 
                href="#booking" 
                className="button-3d flex items-center justify-center bg-dental-red text-white py-3 px-6 rounded-full font-medium shadow-lg hover:bg-opacity-90 transition-all"
              >
                <PhoneCall size={18} className="mr-2" />
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center bg-white text-dental-red py-3 px-6 rounded-full font-medium shadow-md hover:bg-gray-50 transition-all"
              >
                Explore Services
                <ChevronRight size={18} className="ml-1" />
              </a>
            </div>
            
            <div 
              className={`flex items-center gap-6 transition-all duration-700 delay-500 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Testimonial preview */}
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-gray-500"></div>
                </div>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-700">500+ happy patients</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            {/* 3D Elements */}
            <div className={`transition-all duration-1000 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative w-full h-full">
                {/* Circular gradient background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-dental-blue/30 to-white/80 blur-sm"></div>
                
                {/* Dental Scene - Doctor cleaning teeth */}
                <div 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <DentalScene size={280} />
                </div>
                
                {/* Tooth mascot */}
                <div 
                  className={`absolute bottom-10 right-10 transform transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <ToothModel size={120} isWaving={true} />
                </div>
                
                {/* Floating dental tools */}
                <div 
                  className={`absolute top-20 left-20 transition-all duration-500 delay-300 transform ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <DentalTool type="toothbrush" delay={0.5} />
                </div>
                
                <div 
                  className={`absolute bottom-40 left-40 transition-all duration-500 delay-700 transform ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <DentalTool type="toothpaste" delay={0.8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-20 bg-white rounded-2xl p-8 shadow-3d transition-all duration-700 delay-1000 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center">
            <div className="text-dental-red text-3xl font-bold mb-2">15+</div>
            <div className="text-gray-800 font-medium">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-dental-red text-3xl font-bold mb-2">5,000+</div>
            <div className="text-gray-800 font-medium">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-dental-red text-3xl font-bold mb-2">20+</div>
            <div className="text-gray-800 font-medium">Dental Services</div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-dental-red opacity-5"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-dental-blue opacity-10"></div>
    </section>
  );
};

export default HeroSection;
