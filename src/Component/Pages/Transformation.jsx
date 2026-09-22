import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Transformation = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // The base image used for both sides
  const imageUrl = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600";

  return (
    <section id="transformation" className="w-full bg-[#111] text-surface py-8 md:py-10 overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-8 md:mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-4 mb-3 md:mb-4">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
              The INCHES Magic
            </span>
            <span className="w-8 h-[1px] bg-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-3">
            Concept to <span className="italic text-accent font-light">Reality.</span>
          </h2>
          <p className="font-sans text-surface/60 max-w-lg mx-auto text-xs md:text-sm">
            Drag the slider to see how we transform a raw vision into a masterpiece.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <div 
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] lg:h-[40vh] cursor-ew-resize overflow-hidden rounded-sm"
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          
          {/* AFTER LAYER (Full Color) - Base Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <img 
              src={imageUrl} 
              alt="Completed Interior" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Label */}
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
              <span className="font-sans text-xs tracking-widest uppercase font-bold text-white">Reality</span>
            </div>
          </div>

          {/* BEFORE LAYER (Sketch/Raw) - Clipped Layer */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={imageUrl} 
              alt="Raw Concept" 
              className="w-full h-full object-cover pointer-events-none filter grayscale sepia-[0.2] contrast-125 brightness-90 blur-[1px]"
            />
            {/* Label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="font-sans text-xs tracking-widest uppercase font-bold text-white">Concept</span>
            </div>
          </div>

          {/* DRAGGER / DIVIDER LINE */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Custom Handle Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="flex space-x-1">
                {/* Left Arrow */}
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {/* Right Arrow */}
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Transformation;
