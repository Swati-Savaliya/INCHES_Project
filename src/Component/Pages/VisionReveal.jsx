import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VisionReveal = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress over this 200vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animate the clip-path circle size from 10% (small window) to 150% (fully covers screen)
  const clipPathSize = useTransform(scrollYProgress, [0, 1], [15, 150]);
  
  // Create a template string for the clip-path because framer-motion needs it in the right format
  const clipPath = useTransform(clipPathSize, (size) => `circle(${size}% at 50% 50%)`);
  
  // Fade out the foreground text as the circle expands
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={containerRef} id="vision" className="relative h-[250vh] bg-surface">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Typography (Visible outside the circle) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ opacity: textOpacity }}
        >
          <span className="font-sans text-sm tracking-[0.4em] text-accent uppercase font-bold mb-6">
            Discover
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[9rem] text-primary leading-none text-center">
            The <br/>
            <span className="italic font-light">Vision.</span>
          </h2>
          <p className="mt-8 font-sans text-primary/60 max-w-md text-center text-sm md:text-base leading-relaxed px-4">
            Scroll down to step inside our world of meticulous design and unparalleled luxury.
          </p>
        </motion.div>

        {/* The Expanding Reveal Container */}
        <motion.div 
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{ clipPath }}
        >
          {/* Inside the reveal: A breathtaking full-screen image */}
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Interior Reveal" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8]"
            />
            
            {/* Content inside the revealed image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
               <motion.div 
                 // Fade in this text only when the circle is very large
                 style={{ opacity: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]) }}
                 className="text-center px-6"
               >
                 <h3 className="font-serif text-4xl md:text-6xl text-white mb-6">
                   Spaces that breathe.
                 </h3>
                 <p className="font-sans text-white/80 max-w-lg mx-auto text-sm md:text-lg leading-relaxed">
                   Every room we design is a living, breathing entity. Crafted with passion, built with precision, and designed for timeless elegance.
                 </p>
               </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionReveal;
