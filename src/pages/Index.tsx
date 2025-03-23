
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import BookingSection from '../components/BookingSection';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeethLoading from '../components/TeethLoading';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Smile, Brush, Shield, Sparkles, Copy, Heart, Zap, Coffee, PenTool, Scissors } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulating page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <TeethLoading />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-dental-red bg-opacity-10 text-dental-red text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Comprehensive Dental Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of dental services to keep your smile healthy and beautiful. Our team of experts is dedicated to providing the highest quality care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Single Visit Root Canal" 
              description="Complete your root canal treatment in just one visit with our advanced techniques and technology."
              icon={<Zap size={40} />}
              delay={0}
            />
            <ServiceCard 
              title="Dental Implants" 
              description="Replace missing teeth with permanent, natural-looking dental implants that function like your own teeth."
              icon={<Sparkles size={40} />}
              delay={1}
            />
            <ServiceCard 
              title="Dental Braces" 
              description="Straighten your teeth and correct bite issues with traditional braces or clear aligners."
              icon={<Copy size={40} />}
              delay={2}
            />
            <ServiceCard 
              title="Dentures" 
              description="Custom-made removable replacements for missing teeth that restore your smile and chewing ability."
              icon={<Smile size={40} />}
              delay={3}
            />
            <ServiceCard 
              title="Kids Dental Treatment" 
              description="Gentle, kid-friendly dental care to build positive dental experiences from an early age."
              icon={<Heart size={40} />}
              delay={4}
            />
            <ServiceCard 
              title="Smile Makeover" 
              description="Transform your smile with our comprehensive approach combining multiple cosmetic procedures."
              icon={<PenTool size={40} />}
              delay={5}
            />
            <ServiceCard 
              title="Teeth Cleaning & Polishing" 
              description="Professional cleaning to remove plaque and tartar, followed by polishing for a smooth, bright finish."
              icon={<Brush size={40} />}
              delay={6}
            />
            <ServiceCard 
              title="Full Mouth Rehabilitation" 
              description="Comprehensive treatment to restore function and aesthetics to severely damaged or worn teeth."
              icon={<Scissors size={40} />}
              delay={7}
            />
            <ServiceCard 
              title="Teeth Whitening" 
              description="Professional whitening treatments to remove stains and discoloration, giving you a brighter smile."
              icon={<Coffee size={40} />}
              delay={8}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dental-gradient opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="inline-block px-4 py-1 rounded-full bg-dental-blue bg-opacity-20 text-dental-blue text-sm font-medium mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Modern Dental Care with a Personal Touch</h2>
                <p className="text-gray-600 mb-6">
                  At Devagirkar Dental, we believe that dental care should be comfortable, personalized, and effective. Our state-of-the-art clinic combines the latest technology with a warm, welcoming atmosphere to ensure you receive the best possible care.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experienced dentists and dental professionals is dedicated to helping you achieve and maintain optimal oral health. We take the time to understand your unique needs and concerns, creating customized treatment plans that deliver results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-dental-red mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">Highly trained professionals with years of experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-dental-red mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Advanced Technology</h3>
                  <p className="text-sm text-gray-600">State-of-the-art equipment for precise care</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-dental-red mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Comfortable Care</h3>
                  <p className="text-sm text-gray-600">Patient comfort is our top priority</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-dental-red mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Comprehensive Services</h3>
                  <p className="text-sm text-gray-600">All your dental needs under one roof</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px]">
                {/* Treatment Progress Steps */}
                <div className="bg-white rounded-2xl shadow-3d p-6 max-w-sm mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Treatment Journey</h3>
                  
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 bg-dental-red text-white rounded-full font-medium">1</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800">Initial Consultation</h4>
                          <p className="text-sm text-gray-600">Comprehensive examination and treatment planning</p>
                        </div>
                      </div>
                      <div className="absolute top-8 left-4 w-[2px] h-[calc(100%+16px)] bg-gray-200 z-0"></div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="relative">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 bg-dental-red text-white rounded-full font-medium z-10 relative">2</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800">Treatment</h4>
                          <p className="text-sm text-gray-600">Personalized care based on your unique needs</p>
                        </div>
                      </div>
                      <div className="absolute top-8 left-4 w-[2px] h-[calc(100%+16px)] bg-gray-200 z-0"></div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="relative">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 bg-dental-red text-white rounded-full font-medium z-10 relative">3</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800">Follow-up</h4>
                          <p className="text-sm text-gray-600">Ensuring optimal results and satisfaction</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-dental-red h-full rounded-full animate-progress" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <LocationSection />
      <BookingSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
