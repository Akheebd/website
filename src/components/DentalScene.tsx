
import { useEffect, useRef, useState } from 'react';

const DentalScene = ({ size = 250 }: { size?: number }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      
      const { left, top, width, height } = sceneRef.current.getBoundingClientRect();
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
      ref={sceneRef}
      className="relative" 
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
        {/* Dental Chair */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/5 bg-white rounded-lg shadow-md" style={{ transform: 'translateZ(5px)' }}>
          {/* Chair Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-gray-200 rounded"></div>
          
          {/* Patient */}
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-3/5 h-[30px]">
            {/* Patient Body */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80px] bg-dental-blue rounded-lg"></div>
            
            {/* Patient Head */}
            <div className="absolute bottom-[75px] left-1/2 -translate-x-1/2 w-[35px] h-[35px] bg-[#FFD6B0] rounded-full">
              {/* Patient Face */}
              <div className="flex justify-center items-center h-full">
                <div className="flex space-x-3 mt-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Doctor */}
          <div className="absolute top-[-30px] right-[-30px] w-[40px] h-[80px]" style={{ transform: 'translateZ(15px)' }}>
            {/* Doctor Body */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50px] bg-white rounded-lg"></div>
            
            {/* Doctor Head */}
            <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2 w-[35px] h-[35px] bg-[#FFD6B0] rounded-full">
              {/* Doctor Face */}
              <div className="flex justify-center items-center h-full">
                <div className="flex space-x-3 mt-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Doctor Hair */}
              <div className="absolute top-0 left-0 w-full h-[15px] bg-[#6B3E2E] rounded-t-full"></div>
            </div>
            
            {/* Doctor Arm */}
            <div className="absolute top-1/2 left-0 w-[30px] h-[5px] bg-[#FFD6B0] rounded-full animate-pulse-gentle"></div>
            
            {/* Dental Tool */}
            <div className="absolute top-[40px] left-[-10px] w-[20px] h-[5px] bg-dental-red rounded-full animate-pulse-gentle"></div>
          </div>
        </div>
        
        {/* Dental Light */}
        <div className="absolute top-[-10px] right-[50px] w-[15px] h-[40px]" style={{ transform: 'translateZ(20px)' }}>
          <div className="w-full h-full bg-gray-300 rounded"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[15px] bg-dental-blue rounded-b-full">
            {/* Light Beam */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] bg-yellow-100 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        {/* Shadow */}
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default DentalScene;
