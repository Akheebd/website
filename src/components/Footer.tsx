import { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowRight, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isToothFairyHovered, setIsToothFairyHovered] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/7f2bee39-2209-42c8-89b4-9887db43dfa6.png" 
                alt="Devagirkar Dental" 
                className="h-20 md:h-24 mr-2 bg-white p-2 rounded-md"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Providing exceptional dental care with a gentle touch for the whole family. Your smile is our priority!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dental-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Single Visit Root Canal</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Dental Implants</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Dental Braces</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Kids Dental Treatment</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Smile Makeover</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Teeth Whitening</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue">Contact Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-dental-red">
                  <Phone size={16} />
                </div>
                <span className="text-gray-400">+91 97393 17266</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-dental-red">
                  <MessageCircle size={16} />
                </div>
                <a href="https://wa.me/919739317266" className="text-gray-400 hover:text-dental-red">WhatsApp: +91 97393 17266</a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-dental-red">
                  <Mail size={16} />
                </div>
                <span className="text-gray-400">info@devagirkardental.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-dental-red">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-400">Vijayapura, Karnataka 586103</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-4 text-dental-blue">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-dental-red focus:border-dental-red"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-dental-red text-white px-3 rounded-lg flex items-center justify-center"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Devagirkar Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-16 right-8 w-16 h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        onMouseEnter={() => setIsToothFairyHovered(true)}
        onMouseLeave={() => setIsToothFairyHovered(false)}
      >
        <div className={`relative transition-all duration-300 ${isToothFairyHovered ? 'transform -translate-y-2' : ''}`}>
          <div className="absolute w-12 h-12 bg-white/20 rounded-full blur-xl animate-pulse-gentle"></div>
          
          <div className="relative">
            <div className="w-8 h-10 bg-white rounded-t-lg mx-auto"></div>
            
            <div className={`absolute -left-2 top-1/4 w-4 h-8 bg-dental-blue/70 rounded-l-full transform transition-transform duration-300 ${isToothFairyHovered ? 'animate-bounce-gentle' : ''}`}></div>
            <div className={`absolute -right-2 top-1/4 w-4 h-8 bg-dental-blue/70 rounded-r-full transform transition-transform duration-300 delay-100 ${isToothFairyHovered ? 'animate-bounce-gentle' : ''}`}></div>
            
            <div className={`absolute -top-2 -right-3 w-6 h-1 bg-yellow-200 rounded transform rotate-45 transition-all duration-300 ${isToothFairyHovered ? 'bg-yellow-300' : ''}`}>
              <div className={`absolute right-0 -top-1 w-2 h-2 rounded-full transition-all duration-300 ${isToothFairyHovered ? 'bg-yellow-300 animate-pulse' : 'bg-yellow-200'}`}></div>
            </div>
            
            {isToothFairyHovered && (
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6">
                <div className="flex justify-center space-x-2 mb-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
                <div className="w-2 h-1 mx-auto border-b border-black rounded-b-sm"></div>
              </div>
            )}
          </div>
        </div>
        
        {isToothFairyHovered && (
          <div className="absolute -top-2 -right-1 w-3 h-3">
            <div className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-ping"></div>
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-50 top-2 left-1 animate-ping animation-delay-300"></div>
            <div className="absolute w-1 h-1 bg-yellow-100 rounded-full opacity-70 top-3 -left-1 animate-ping animation-delay-600"></div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
