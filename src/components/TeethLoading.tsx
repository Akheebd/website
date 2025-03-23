
import React, { useEffect, useState } from 'react';

const TeethLoading = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 10; // Max 10 degrees
      const rotateX = ((e.clientY - centerY) / window.innerHeight) * -10; // Max 10 degrees
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div 
          className="relative w-36 h-28 mb-6 transition-transform duration-200 ease-out"
          style={{ 
            transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Dental Scene */}
          <div className="absolute inset-0" style={{ transform: 'translateZ(10px)' }}>
            {/* Top teeth row */}
            <div className="flex justify-center">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`top-${i}`} 
                  className="w-4 h-7 bg-white border-2 border-dental-blue rounded-b-lg mx-0.5 animate-pulse"
                  style={{ 
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: '1.5s',
                    transform: `translateZ(${i % 2 ? 2 : 0}px)`,
                  }}
                />
              ))}
            </div>
            
            {/* Bottom teeth row */}
            <div className="flex justify-center mt-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`bottom-${i}`} 
                  className="w-4 h-7 bg-white border-2 border-dental-blue rounded-t-lg mx-0.5 animate-pulse"
                  style={{ 
                    animationDelay: `${(i * 0.08) + 0.3}s`,
                    animationDuration: '1.5s',
                    transform: `translateZ(${i % 2 ? 0 : 2}px)`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Dental mirror */}
          <div 
            className="absolute top-2 left-2 w-10 h-5 animate-float"
            style={{ transform: 'translateZ(20px) rotate(-30deg)' }}
          >
            <div className="w-2 h-12 bg-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2 rotate-12"></div>
            <div className="w-8 h-8 bg-gray-200 absolute bottom-0 left-0 rounded-full border-2 border-gray-300 shadow-md">
              <div className="w-full h-full rounded-full bg-dental-blue opacity-30"></div>
            </div>
          </div>
          
          {/* Dental Explorer Tool */}
          <div 
            className="absolute top-10 right-2 w-12 h-6 animate-bounce-gentle" 
            style={{ transform: 'translateZ(25px) rotate(20deg)' }}
          >
            <div className="w-2 h-12 bg-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-3 bg-gray-400 absolute bottom-0 left-2 transform rotate-45 origin-bottom"></div>
          </div>
          
          {/* Brush animation */}
          <div 
            className="absolute bottom-5 right-10 transform w-8 h-16 animate-bounce-gentle" 
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="w-2 h-12 bg-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-8 h-4 bg-dental-red absolute bottom-0 left-0 rounded shadow-md"></div>
            <div className="absolute bottom-0 left-0 w-8 h-2">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`bristle-${i}`} 
                  className="absolute bottom-0 w-0.5 h-1.5 bg-white"
                  style={{ left: `${i * 1.1 + 0.5}px` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Water spray effect */}
          <div className="absolute -right-4 -top-2" style={{ transform: 'translateZ(15px)' }}>
            {[...Array(6)].map((_, i) => (
              <div 
                key={`water-${i}`}
                className="absolute w-1 h-1 rounded-full bg-dental-blue opacity-70 animate-float"
                style={{ 
                  left: `${Math.random() * 20}px`,
                  top: `${Math.random() * 20}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* 3D shadow effect */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black/10 rounded-full blur-md"></div>
        </div>
        
        <div className="loading-text text-dental-red font-medium">
          <span className="mr-1">Loading</span>
          <div className="inline-block w-2 h-2 rounded-full animate-ping bg-dental-red"></div>
          <div className="inline-block w-2 h-2 ml-1 rounded-full animate-ping bg-dental-red" style={{ animationDelay: '0.3s' }}></div>
          <div className="inline-block w-2 h-2 ml-1 rounded-full animate-ping bg-dental-red" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        <p className="mt-4 text-gray-600">Preparing your smile experience...</p>
      </div>
    </div>
  );
};

export default TeethLoading;
