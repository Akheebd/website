
import { useEffect, useRef, useState } from 'react';
import { MapPin as MapPinIcon } from 'lucide-react';

interface MapPinProps {
  className?: string;
  size?: number;
  pulsing?: boolean;
}

const MapPin = ({ className = '', size = 100, pulsing = true }: MapPinProps) => {
  const pinRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  
  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!pinRef.current || !hovering) return;
      
      const { left, top, width, height } = pinRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / width) * 20; // Max 20 degrees
      const rotateX = ((e.clientY - centerY) / height) * -20; // Max 20 degrees
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [hovering]);
  
  return (
    <div 
      ref={pinRef}
      className={`relative ${className}`} 
      style={{ 
        width: size, 
        height: size,
        perspective: '1000px',
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      <div 
        className="absolute w-full h-full transition-all duration-300 ease-out transform"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${hovering ? 'scale(1.05)' : ''}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Pin Body */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(10px)' }}>
          <div className="text-dental-red">
            <MapPinIcon size={size * 0.6} strokeWidth={2} />
          </div>
          
          {pulsing && (
            <>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-dental-red rounded-full opacity-30 animate-ping"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] bg-dental-red rounded-full"></div>
            </>
          )}
        </div>
        
        {/* Shadow */}
        <div 
          className={`absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-1/3 h-2 bg-black/10 rounded-full blur-sm transition-all duration-300 ${hovering ? 'w-1/4 opacity-70' : 'opacity-50'}`}
        ></div>
      </div>
    </div>
  );
};

export default MapPin;
