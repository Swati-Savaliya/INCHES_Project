import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroCurtain = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the curtain container completely after the animation finishes (approx 3.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Central Logo/Text that fades out first */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-[110]"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center">
               <h1 className="font-serif text-5xl md:text-7xl lg:text-[8rem] text-white tracking-[0.2em] uppercase drop-shadow-2xl">
                 Inches
               </h1>
               <div className="flex items-center mt-4">
                 <div className="w-12 h-[1px] bg-white/60 mr-4"></div>
                 <span className="font-sans text-xs tracking-[0.4em] text-white uppercase font-light">
                   Interiors
                 </span>
                 <div className="w-12 h-[1px] bg-white/60 ml-4"></div>
               </div>
            </div>
          </motion.div>

          {/* LEFT CURTAIN */}
          <motion.div 
            className="relative w-1/2 h-full bg-white z-[105] shadow-[20px_0_50px_rgba(0,0,0,0.6)] origin-left overflow-hidden"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.8, delay: 1.5, ease: [0.7, 0, 0.3, 1] }}
          >
            {/* Custom Curtain Image */}
            <img 
              src="/latest-curtain.jpg"
              alt="Custom Curtain"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'left center' }}
            />

            {/* Edge Shadow / Hemming */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-black/30 z-10 pointer-events-none"></div>
            {/* Center parting line */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#8A6D54]/50 shadow-[0_0_15px_rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
          </motion.div>

          {/* RIGHT CURTAIN */}
          <motion.div 
            className="relative w-1/2 h-full bg-white z-[105] shadow-[-20px_0_50px_rgba(0,0,0,0.6)] origin-right overflow-hidden"
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.8, delay: 1.5, ease: [0.7, 0, 0.3, 1] }}
          >
            {/* Custom Curtain Image */}
            <img 
              src="/latest-curtain.jpg"
              alt="Custom Curtain"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'scaleX(-1)', objectPosition: 'left center' }} 
            />

            {/* Edge Shadow / Hemming */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-l from-transparent to-black/30 z-10 pointer-events-none"></div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroCurtain;
