import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'The Azure Villa',
    category: 'Residential',
    description: 'A coastal retreat blending modern minimalism with natural warmth. Every element was designed to capture the breathtaking ocean views while maintaining intimate, comfortable living spaces.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'Lumina Workspace',
    category: 'Commercial',
    description: 'Redefining corporate environments with natural light and fluid spaces. We transformed a traditional office into a collaborative hub that boosts creativity and wellbeing.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'Velvet Lounge',
    category: 'Hospitality',
    description: 'An exclusive hospitality experience defined by rich textures and moody lighting. A perfect balance of luxury, comfort, and striking visual drama.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'Oasis Penthouse',
    category: 'Residential',
    description: 'Sky-high luxury with panoramic city views. Featuring bespoke furniture, rare marbles, and a seamless indoor-outdoor flow high above the bustling streets.',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200'
  }
];

const StickyGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Use Intersection Observer to detect which text item is currently in the center of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index from the data attribute of the intersecting element
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Triggers when the item is roughly in the middle 20% of the screen
        threshold: 0
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={containerRef} id="featured-projects" className="relative w-full bg-[#1A1A1A] text-white">
      <div className="flex flex-col lg:flex-row w-full max-w-[100rem] mx-auto">
        
        {/* LEFT SIDE: Sticky Image Container (Hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block lg:w-1/2 h-screen sticky top-0 p-12 lg:p-20 overflow-hidden">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl">
             {projects.map((project, index) => (
               <motion.img
                 key={project.id}
                 src={project.image}
                 alt={project.title}
                 className="absolute inset-0 w-full h-full object-cover"
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ 
                   opacity: activeIndex === index ? 1 : 0,
                   scale: activeIndex === index ? 1 : 1.1,
                   zIndex: activeIndex === index ? 10 : 0
                 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               />
             ))}
             
             {/* Decorative overlay border */}
             <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-2xl"></div>
          </div>
        </div>

        {/* RIGHT SIDE: Scrolling Text Content */}
        <div className="w-full lg:w-1/2 px-6 py-20 lg:py-[30vh]">
          
          {/* Section Header */}
          <div className="flex items-center space-x-4 mb-20 lg:mb-[20vh]">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
              Featured Portfolio
            </span>
          </div>

          {/* Project List */}
          <div className="flex flex-col space-y-[30vh] lg:space-y-[60vh] pb-[30vh]">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-30 lg:opacity-30 opacity-100'}`}
              >
                {/* Mobile Image (Visible only on small screens) */}
                <div className="block lg:hidden w-full aspect-square mb-8 rounded-xl overflow-hidden shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Text Content */}
                <span className="font-sans text-xl md:text-2xl text-accent font-bold tracking-widest mb-6 block">
                  {project.id}
                </span>
                <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white leading-tight">
                  {project.title}
                </h2>
                <div className="inline-block px-4 py-2 border border-white/20 rounded-full font-sans text-xs uppercase tracking-widest text-white/70 mb-8">
                  {project.category}
                </div>
                <p className="font-sans text-white/60 text-lg md:text-xl leading-relaxed max-w-lg">
                  {project.description}
                </p>
                
                <button className="mt-12 group flex items-center space-x-4 text-sm font-sans tracking-[0.2em] uppercase text-white hover:text-accent transition-colors">
                  <span>View Project</span>
                  <span className="w-8 h-[1px] bg-white group-hover:bg-accent transition-colors transform group-hover:translate-x-2 duration-300"></span>
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default StickyGallery;
