
import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    
    // Entrance animation with delay
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay * 100);
  }, [delay]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position in card
    // Value between -10 and 10 degrees
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <div
      ref={cardRef}
      className="w-full h-[300px] md:h-[340px] perspective relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full h-full rounded-2xl p-6 shadow-card bg-white border border-gray-100 flex flex-col justify-between transition-all duration-300 ${isHovered ? 'shadow-card-hover' : ''}`}
        style={{
          transform: isHovered ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'rotateX(0) rotateY(0)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? '0 25px 50px rgba(0, 0, 0, 0.1)' : '',
        }}
      >
        <div>
          <div 
            className="mb-4 text-dental-red"
            style={{ transform: 'translateZ(30px)' }}
          >
            {icon}
          </div>
          
          <h3 
            className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300"
            style={{
              transform: 'translateZ(20px)',
              textShadow: isHovered ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            {title}
          </h3>
          
          <p 
            className="text-gray-600"
            style={{ transform: 'translateZ(10px)' }}
          >
            {description}
          </p>
        </div>
        
        <div
          className={`flex items-center mt-4 text-dental-red font-medium transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-80'
          }`}
          style={{ transform: 'translateZ(15px)' }}
        >
          <span className="mr-1">Learn more</span>
          <ChevronRight 
            size={16} 
            className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
