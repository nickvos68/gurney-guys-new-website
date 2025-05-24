'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before cleaning',
  afterAlt = 'After cleaning'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const containerWidth = rect.width;
    
    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={afterImage} 
          alt={afterAlt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image 
          src={beforeImage} 
          alt={beforeAlt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Slider Control */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        Before
      </div>
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
