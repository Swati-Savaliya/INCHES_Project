import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'The Azure Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Lumina Workspace',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Velvet Lounge',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'Oasis Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200'
  }
];

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  
  // Track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map the scroll progress (0 to 1) to horizontal movement (-75% or similar depending on the number of items)
  // 4 items means we need to move roughly -75% to show the last one, plus some padding.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section 
      ref={targetRef} 
      id="projects"
      className="relative h-[300vh] bg-[#1A1A1A]" 
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Section Title (Fixed on the left side) */}
        <div className="absolute top-12 md:top-1/2 md:-translate-y-1/2 left-6 md:left-12 z-20 pointer-events-none mix-blend-difference">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-white uppercase font-bold">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none">
            Selected <br/>
            <span className="italic font-light">Works.</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Track */}
        <motion.div 
          style={{ x }} 
          className="flex gap-8 md:gap-16 pl-[10%] md:pl-[35%] pr-12 md:pr-24"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="relative group w-[75vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] md:aspect-[3/4] flex-shrink-0 overflow-hidden"
            >
              {/* Image Container with inner parallax effect on hover */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out filter brightness-[0.85] group-hover:brightness-100"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl md:text-4xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HorizontalGallery;
