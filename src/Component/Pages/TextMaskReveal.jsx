import React from 'react';
import { motion } from 'framer-motion';

const TextMaskReveal = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-surface overflow-hidden flex items-center justify-center">
      
      {/* Background Image with slow continuous panning animation (simulating a video) */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: ['0%', '-5%', '0%'],
          y: ['0%', '-2%', '0%']
        }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior Background" 
          className="w-full h-full object-cover filter brightness-90 contrast-125"
        />
      </motion.div>

      {/* The Mask Layer: White background with Black text. 
          Using mix-blend-screen, the White stays white (blocking the image), 
          and the Black text becomes transparent (revealing the panning image inside). */}
      <div className="absolute inset-0 z-10 bg-surface mix-blend-screen flex flex-col items-center justify-center pointer-events-none">
        <h1 className="font-serif text-[18vw] md:text-[22vw] text-black font-black leading-[0.8] tracking-tighter uppercase text-center mt-12">
          INCHES
        </h1>
        <h2 className="font-sans text-[4vw] md:text-[5vw] text-black font-bold tracking-[0.5em] uppercase mt-2">
          Interiors
        </h2>
      </div>

      {/* Foreground Content (Optional elegant typography outside the mask) */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-12 z-20 pointer-events-none">
        <div className="flex flex-col">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-bold mb-1">
            Redefining Space
          </span>
          <span className="font-serif text-sm italic text-primary/60">
            Crafting timeless environments.
          </span>
        </div>
        
        <div className="hidden md:flex flex-col text-right">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-bold mb-1">
            Est. 2024
          </span>
          <span className="font-serif text-sm italic text-primary/60">
            Surat, Gujarat
          </span>
        </div>
      </div>

    </section>
  );
};

export default TextMaskReveal;
