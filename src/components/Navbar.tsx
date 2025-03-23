
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7f2bee39-2209-42c8-89b4-9887db43dfa6.png" 
                alt="Devagirkar Dental" 
                className="h-20 md:h-24 mr-2"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="link-underline text-gray-800 hover:text-dental-red font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="link-underline text-gray-800 hover:text-dental-red font-medium transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="link-underline text-gray-800 hover:text-dental-red font-medium transition-colors">
              Testimonials
            </a>
            <a href="#location" className="link-underline text-gray-800 hover:text-dental-red font-medium transition-colors">
              Location
            </a>
            <a 
              href="#booking" 
              className="button-3d ml-2 bg-dental-red text-white font-medium px-5 py-2 rounded-full flex items-center"
            >
              <Phone size={16} className="mr-2" />
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-dental-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-800 hover:text-dental-red font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-dental-red font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-800 hover:text-dental-red font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#location" 
                className="text-gray-800 hover:text-dental-red font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="#booking" 
                className="bg-dental-red text-white font-medium px-5 py-2 rounded-full flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                Book Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
