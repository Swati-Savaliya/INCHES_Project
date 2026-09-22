import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Modern Architecture',
    subtitle: 'Minimalist living spaces',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    title: 'Interior Design',
    subtitle: 'Warm and inviting atmospheres',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    title: 'Urban Landscapes',
    subtitle: 'Integrating nature with concrete',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    title: 'Commercial Spaces',
    subtitle: 'Inspiring work environments',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 5,
    title: 'Sustainable Living',
    subtitle: 'Eco-friendly materials',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200',
  }
];

const InteractiveGallery = () => {
  const [active, setActive] = useState(2); // Default active item

  return (
    <section className="py-24 bg-surface text-text w-full">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="font-sans text-[0.7rem] tracking-[0.4em] text-accent uppercase font-bold">
              Our Portfolio
            </span>
            <span className="w-12 h-[1px] bg-accent"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            Visual Harmony
          </h2>
          <p className="font-sans text-secondary max-w-2xl mx-auto text-lg">
            Explore our curated selection of spaces where design meets functionality, and every detail tells a unique story.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="flex flex-col md:flex-row h-[60vh] md:h-[70vh] gap-4 w-full">
          {galleryItems.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.id}
                className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group flex-1"
                onHoverStart={() => setActive(index)}
                onClick={() => setActive(index)}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    opacity: isActive ? 1 : 0.6
                  }}
                />

                {/* Text Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="overflow-hidden"
                  >
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-2 block font-bold">
                      {item.subtitle}
                    </span>
                    <h3 className="text-white font-serif text-2xl md:text-3xl font-medium whitespace-nowrap">
                      {item.title}
                    </h3>
                  </motion.div>

                  {/* Vertical text for non-active state (optional, can look cool) */}
                  <motion.div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap origin-bottom-left -rotate-90 text-white font-sans tracking-widest uppercase text-sm font-bold opacity-0 md:opacity-100"
                    animate={{
                      opacity: !isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left center' }}
                  >
                    {!isActive && item.title}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
