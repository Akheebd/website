
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919739317266"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white font-medium p-4 rounded-full shadow-3d-hover transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="mr-2" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
