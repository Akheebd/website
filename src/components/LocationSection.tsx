
import MapPin from './MapPin';
import { Phone, Mail, MapPin as MapPinIcon, MessageCircle } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-4 md:px-6 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-dental-red bg-opacity-10 text-dental-red text-sm font-medium mb-4">
            Find Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Visit Our Clinic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conveniently located in Vijayapura, our modern facility is equipped with the latest dental technology to ensure your comfort and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-3d h-[400px] relative order-2 md:order-1">
            {/* Map placeholder */}
            <div className="bg-gray-100 w-full h-full relative">
              {/* This would be replaced with an actual map */}
              <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/10 to-white/80"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-xs">
                  <p className="text-gray-500 mb-4">Interactive map would be here</p>
                  <MapPin className="mx-auto scale-125" pulsing={true} /> {/* Added scale-125 to increase size */}
                  <p className="mt-4 font-medium text-gray-700">Behind Datri masjid, beside Mediscan Daignostics<br/>Vijayapura, Karnataka 586103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Location</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-dental-red bg-opacity-10 p-3 rounded-full text-dental-red shrink-0 mt-1">
                  <MapPinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Devagirkar Dental Clinic</h4>
                  <p className="text-gray-600">
                    Behind Datri masjid, beside<br/>
                    Mediscan Daignostics<br/>
                    Vijayapura, Karnataka 586103<br/>
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="pt-2">
                  <p className="text-dental-red font-medium">
                    Emergency services available 24/7
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red">
                    <Phone size={16} />
                  </div>
                  <span className="text-gray-600">+91 97393 17266</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red">
                    <MessageCircle size={16} />
                  </div>
                  <a href="https://wa.me/919739317266" className="text-gray-600 hover:text-dental-red transition-colors">
                    WhatsApp: +91 97393 17266
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-dental-red bg-opacity-10 p-2 rounded-full text-dental-red">
                    <Mail size={16} />
                  </div>
                  <span className="text-gray-600">info@devagirkardental.com</span>
                </div>
              </div>
              <a 
                href="#booking" 
                className="button-3d inline-block mt-4 bg-dental-red text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-opacity-90 transition-all"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
