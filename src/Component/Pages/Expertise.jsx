import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Interior Architecture',
    subtitle: 'SPATIAL PLANNING',
    description: 'Structural reimagining to create the perfect flow and foundation for your lifestyle.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'Bespoke Furnishing',
    subtitle: 'CUSTOM DESIGN',
    description: 'Curating and designing custom furniture pieces that perfectly match your aesthetic.',
    image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'Lighting & Styling',
    subtitle: 'THE FINAL LAYER',
    description: 'We source exclusive art, accessories, and design lighting schemes to bring spaces to life.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'Project Management',
    subtitle: 'FLAWLESS EXECUTION',
    description: 'From concept to completion, we oversee every detail of the construction and installation.',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1200'
  }
];

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="expertise" className="relative w-full bg-surface text-primary py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
              Our Expertise
            </span>
            <span className="w-8 h-[1px] bg-accent"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Mastering every <span className="italic text-accent font-light">Detail.</span>
          </h2>
        </motion.div>
      </div>

      {/* Expanding Accordion Gallery */}
      <div className="max-w-[95rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[75vh] gap-2 lg:gap-4 w-full">

          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-t-[150px] rounded-b-3xl cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] 
                  ${isActive ? 'flex-[4] lg:flex-[5]' : 'flex-[1] lg:flex-[1]'}`}
              >
                {/* Background Image with Live Cinematic Effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-[115%] h-[115%] max-w-none object-cover origin-center"
                    animate={{
                      x: ['-5%', '0%', '-3%', '-5%'],
                      y: ['-2%', '-5%', '0%', '-2%'],
                      scale: [1, 1.08, 1],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{
                      duration: 12 + index * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Dark Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 
                  ${isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100' : 'bg-black/40 hover:bg-black/20'}`}
                ></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">

                  {/* Small vertical text when inactive (Desktop only) */}
                  <div
                    className={`hidden lg:flex absolute inset-0 items-center justify-center transition-opacity duration-500 pointer-events-none
                    ${isActive ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <span
                      className="font-sans text-sm tracking-[0.3em] text-white/90 uppercase font-bold whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* Active State Content */}
                  <div
                    className={`transition-all duration-700 transform flex flex-col items-start
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden lg:flex'}`}
                  >
                    <span className="font-sans text-[0.6rem] tracking-[0.3em] text-accent font-bold uppercase mb-3 bg-white/10 px-3 py-1 backdrop-blur-sm">
                      {service.id} // {service.subtitle}
                    </span>

                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight whitespace-nowrap">
                      {service.title}
                    </h3>

                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="font-sans text-white/70 text-sm leading-relaxed max-w-md overflow-hidden"
                    >
                      {service.description}
                    </motion.p>

                    {/* Read More button */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mt-6"
                    >
                      <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Expertise;
