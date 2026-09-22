import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200', 
    title: 'Modern Living',
    className: 'col-span-12 md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto h-full' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800', 
    title: 'Minimalist Dining',
    className: 'col-span-6 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto h-full min-h-[300px]' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', 
    title: 'Warm Textures',
    className: 'col-span-6 md:col-span-4 md:row-span-1 aspect-[3/4] md:aspect-auto h-full min-h-[400px]' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', 
    title: 'Lounge Area',
    className: 'col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto h-full min-h-[400px]' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200', 
    title: 'Master Bedroom',
    className: 'col-span-12 md:col-span-8 md:row-span-1 aspect-[16/9] md:aspect-auto h-full min-h-[400px]' 
  }
];

const EditorialGallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative w-full bg-surface py-32 px-4 md:px-8 lg:px-12">
      
      {/* Header */}
      <div className="max-w-[100rem] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
              Gallery
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight">
            Curated <span className="italic text-accent font-light">Spaces.</span>
          </h2>
        </div>
        <p className="font-sans text-primary/60 max-w-sm mt-6 md:mt-0 text-sm md:text-base">
          A visual journey through our most celebrated residential and commercial transformations.
        </p>
      </div>

      {/* CSS Grid Editorial Layout */}
      <div className="max-w-[100rem] mx-auto grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
        {galleryItems.map((item) => {
          const isHovered = hoveredId === item.id;
          const isAnotherHovered = hoveredId !== null && hoveredId !== item.id;

          return (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden group cursor-pointer ${item.className}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image Container with Parallax Zoom */}
              <div className="w-full h-full overflow-hidden bg-gray-200 rounded-sm">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] 
                    ${isHovered ? 'scale-110' : 'scale-100'}
                  `}
                />
              </div>

              {/* Dark Overlay when another item is hovered */}
              <div 
                className={`absolute inset-0 bg-[#FAF8F5]/40 transition-opacity duration-500 pointer-events-none
                  ${isAnotherHovered ? 'opacity-100' : 'opacity-0'}
                `}
              ></div>

              {/* Text Overlay on Hover */}
              <div 
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
              >
                <span className="font-serif text-white text-2xl md:text-4xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {item.title}
                </span>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default EditorialGallery;
