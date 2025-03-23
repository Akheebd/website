
import { useEffect, useRef, useState } from 'react';

const ToothModel = ({ className = '', size = 120, isWaving = false }) => {
  const toothRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!toothRef.current) return;
      
      const { left, top, width, height } = toothRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / width) * 15; // Max 15 degrees
      const rotateX = ((e.clientY - centerY) / height) * -15; // Max 15 degrees
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={toothRef}
      className={`relative ${className}`} 
      style={{ 
        width: size, 
        height: size,
        perspective: '1000px',
      }}
    >
      <div 
        className="absolute w-full h-full transition-transform duration-200 ease-out"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Tooth body */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white rounded-xl shadow-3d" style={{ transform: 'translateZ(10px)' }}>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white rounded-b-xl">
            {/* Tooth roots */}
            <div className="absolute bottom-0 left-1/4 w-1/6 h-1/3 bg-white rounded-b-lg transform -translate-x-1/2 translate-y-[20%]"></div>
            <div className="absolute bottom-0 right-1/4 w-1/6 h-1/3 bg-white rounded-b-lg transform translate-x-1/2 translate-y-[20%]"></div>
          </div>
          
          {/* Face features */}
          <div className="absolute top-1/3 left-0 w-full">
            {/* Eyes */}
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            
            {/* Smile */}
            <div className="mx-auto w-10 h-5 border-b-2 border-black rounded-b-full"></div>
          </div>
          
          {/* Waving arm */}
          {isWaving && (
            <div className="absolute top-1/2 -right-4 w-8 h-2 bg-white rounded-full origin-left animate-bounce-gentle" style={{ transform: 'translateZ(5px)' }}>
              <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full"></div>
            </div>
          )}
        </div>
        
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default ToothModel;
