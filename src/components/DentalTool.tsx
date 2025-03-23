
import { useEffect, useRef } from 'react';

type ToolType = 'toothbrush' | 'mirror' | 'toothpaste';

interface DentalToolProps {
  type: ToolType;
  className?: string;
  delay?: number;
  size?: number;
}

const DentalTool = ({ type, className = '', delay = 0, size = 80 }: DentalToolProps) => {
  const toolRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = toolRef.current;
    if (!el) return;
    
    // Random starting position for floating effect
    const startX = Math.random() * 20 - 10;
    const startY = Math.random() * 20 - 10;
    
    el.style.transform = `translate(${startX}px, ${startY}px)`;
    
    // Apply animation with delay
    setTimeout(() => {
      el.style.animation = 'float 6s ease-in-out infinite';
      el.style.animationDelay = `${delay}s`;
    }, 100);
  }, [delay]);
  
  // Render different tools based on type
  const renderTool = () => {
    switch (type) {
      case 'toothbrush':
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/6 bg-dental-blue rounded-md shadow-md transform rotate-45"></div>
            <div className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/12 bg-white rounded-md transform rotate-45"></div>
            <div className="absolute left-[38%] top-[60%] -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/12 bg-dental-red rounded-md transform rotate-45"></div>
          </div>
        );
      
      case 'mirror':
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white border-2 border-dental-blue rounded-full shadow-md"></div>
            <div className="absolute left-1/2 top-[70%] -translate-x-1/2 w-1/12 h-1/4 bg-dental-blue rounded-md"></div>
          </div>
        );
      
      case 'toothpaste':
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-dental-blue rounded-md shadow-md"></div>
            <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/6 bg-dental-red rounded-t-md"></div>
            <div className="absolute left-1/2 top-[25%] -translate-x-1/2 -translate-y-1/2 w-1/6 h-1/12 bg-white rounded-full"></div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div 
      ref={toolRef}
      className={`relative ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div className="absolute w-full h-full transition-transform duration-200 ease-out hover:scale-110">
        {renderTool()}
        
        {/* Shadow */}
        <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-1/2 h-2 bg-black/10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default DentalTool;
