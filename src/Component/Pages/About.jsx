import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    // Warm plaster-like background for a cozy, authentic interior feel
    <section id="about" className="relative w-full bg-[#EFECE6] text-primary py-20 md:py-32 overflow-hidden">
      
      {/* Decorative architectural background lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-primary/5"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-primary/5"></div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left: Philosophy Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
                The Philosophy
              </span>
              <span className="w-12 h-[1px] bg-accent lg:hidden"></span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] mb-6">
              Spaces that feel like a warm <span className="italic font-light text-accent">embrace.</span>
            </h2>
            
            <p className="font-sans text-primary/70 text-sm leading-relaxed mb-8 mx-auto lg:mx-0 max-w-sm">
              We design homes, not just houses. Our approach is deeply sensory—focusing on the tactile feel of natural linen, the warmth of ambient lighting, and the quiet harmony of carefully curated materials.
            </p>

            <div>
              <a 
                href="#contact"
                className="inline-block px-8 py-3 border border-primary/20 text-primary font-sans text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-[#EFECE6] transition-all duration-500"
              >
                Begin Your Journey
              </a>
            </div>
          </motion.div>

          {/* Center: The Architectural Archway Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[85%] md:w-[60%] lg:w-full max-w-[400px] aspect-[2/3] rounded-t-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-8 border-[#F7F5F0]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Warm Interior Space"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Soft interior lighting gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right: Moodboard / Detail Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center order-3"
          >
            <div className="relative w-full max-w-[300px]">
              {/* Fabric/Texture Close-up */}
              <div className="w-full aspect-square overflow-hidden shadow-lg border-4 border-white mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
                  alt="Material Texture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Poetic quote */}
              <div className="bg-white/60 backdrop-blur-md p-6 shadow-sm border border-white relative -mt-16 lg:-ml-12 z-10">
                <p className="font-serif text-lg italic text-primary/80 leading-relaxed text-center">
                  "Architecture is the bone; styling is the soul."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
