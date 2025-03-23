
import { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, Phone, ArrowRight } from 'lucide-react';

const BookingSection = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRotating(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsRotating(false);
      alert('Appointment request submitted! We will contact you shortly.');
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <section id="booking" className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-dental-gradient opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-dental-blue bg-opacity-20 text-dental-blue text-sm font-medium mb-4">
            Book Your Visit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Schedule Your Dental Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards a healthier smile. Book your appointment today and our team will get back to you promptly to confirm your visit.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-3d p-6 md:p-10 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Experienced dentists using latest techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Comfortable Environment</h4>
                    <p className="text-gray-600 text-sm">Relaxing atmosphere with modern amenities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Personalized Care</h4>
                    <p className="text-gray-600 text-sm">Treatments tailored to your unique needs</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative h-48 w-48 mx-auto md:mx-0">
              <div 
                className={`absolute w-full h-full transition-transform duration-1000 ${isRotating ? 'animate-rotate-slow' : ''}`}
              >
                <div className="relative w-full h-full">
                  {/* Dental chair - simple 3D representation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-24">
                    {/* Chair base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-dental-blue rounded-lg shadow-md"></div>
                    
                    {/* Chair seat */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-white rounded-t-lg shadow-md"></div>
                    
                    {/* Chair back */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rotate-10 w-24 h-20 bg-white rounded-t-lg shadow-md origin-bottom"></div>
                    
                    {/* Arm */}
                    <div className="absolute bottom-12 right-4 w-10 h-2 bg-dental-blue rounded-full shadow-sm"></div>
                    
                    {/* Light */}
                    <div className="absolute top-0 right-0 transform -translate-y-2">
                      <div className="w-2 h-12 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-8 h-3 bg-white rounded-full shadow-md flex justify-center items-center">
                        <div className="w-4 h-1 bg-yellow-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-dental-red focus:border-dental-red"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone size={16} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-dental-red focus:border-dental-red"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Calendar size={16} />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-dental-red focus:border-dental-red"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Clock size={16} />
                  </div>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-dental-red focus:border-dental-red"
                  />
                </div>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 text-gray-400">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-dental-red focus:border-dental-red"
                    placeholder="Tell us about your dental concerns..."
                  ></textarea>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="button-3d w-full flex items-center justify-center bg-dental-red text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-opacity-90 transition-all"
                >
                  <span>Book Appointment</span>
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
