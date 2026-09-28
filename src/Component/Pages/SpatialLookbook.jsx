import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Maximize2, MapPin, Eye } from 'lucide-react';

const LOOKBOOK_SPACES = [
  {
    id: '01',
    title: 'The Living Pavilion',
    location: 'Vesu, Surat',
    category: 'Penthouse Living',
    tag: 'Statuario Marble • 2400K Luminaire',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '02',
    title: 'Master Sanctuary',
    location: 'Bandra, Mumbai',
    category: 'Private Suite',
    tag: 'Lime Plaster • Smoked Oak',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '03',
    title: 'The Culinary Atelier',
    location: 'VIP Road, Surat',
    category: 'Dining & Kitchen',
    tag: 'Fluted Glass • Brushed Brass',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '04',
    title: 'Courtyard Spa & Bath',
    location: 'Althan, Surat',
    category: 'Bespoke Villa',
    tag: 'Honed Travertine • Rain Skylight',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '05',
    title: 'Twilight Sky Deck',
    location: 'Duplex Penthouse',
    category: 'Outdoor Lounge',
    tag: 'Teak Decking • Fire Pit Glow',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600',
  }
];

const SpatialLookbook = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="lookbook" className="relative w-full bg-[#0d0d0d] text-surface py-10 md:py-14 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Minimal Center Header (Very Low Content) */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-6 pb-3 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2.5 mb-1.5"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Spatial Lookbook
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight"
          >
            Atmospheric <span className="italic font-light text-accent font-serif">Signatures</span>
          </motion.h2>
        </div>

        {/* Expanding Accordion Horizontal Lookbook Deck */}
        <div className="flex flex-col lg:flex-row h-[500px] lg:h-[420px] gap-2.5 w-full">
          {LOOKBOOK_SPACES.map((space, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={space.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/15 ${
                  isActive ? 'flex-[4] lg:flex-[5]' : 'flex-[1] lg:flex-[1]'
                }`}
              >
                {/* Image Layer */}
                <motion.img
                  src={space.image}
                  alt={space.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/20'
                      : 'bg-black/50 hover:bg-black/30'
                  }`}
                />

                {/* Inactive Vertical Title (Desktop) */}
                <div
                  className={`hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2 transform -rotate-90 whitespace-nowrap">
                    <span className="font-serif text-sm text-white font-medium tracking-wider">
                      {space.title}
                    </span>
                    <span className="font-sans text-[0.65rem] text-accent font-bold">
                      // {space.id}
                    </span>
                  </div>
                </div>

                {/* Active Expanded Content (Minimal & Clean) */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-6 transition-all duration-500 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans text-[0.62rem] uppercase tracking-wider text-accent font-bold">
                      {space.id} • {space.category}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(space);
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Minimal Info */}
                  <div className="bg-black/60 backdrop-blur-md border border-white/15 p-4 rounded-xl">
                    <span className="font-sans text-[0.65rem] text-accent flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      {space.location}
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-1">
                      {space.title}
                    </h3>

                    <p className="font-sans text-xs text-surface/75">
                      {space.tag}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Minimal Bottom Action Pill */}
        <div className="mt-5 flex items-center justify-between text-xs font-sans text-surface/50 pt-3 border-t border-white/10">
          <span>Explore our spatial lookbook archive</span>
          <a
            href="https://wa.me/919702763876?text=Hello%20INCHES,%20I%20am%20interested%20in%20discussing%20a%20turnkey%20interior%20project."
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-white transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider text-[0.68rem]"
          >
            <span>Inquire for Bespoke Spaces</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Minimal Image Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <div
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <img
                src={modalImage.image}
                alt={modalImage.title}
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl text-white font-semibold">
                    {modalImage.title}
                  </h4>
                  <span className="font-sans text-xs text-accent">
                    {modalImage.location} • {modalImage.tag}
                  </span>
                </div>
                <button
                  onClick={() => setModalImage(null)}
                  className="px-4 py-2 rounded-xl bg-accent text-white font-sans text-xs uppercase tracking-wider font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SpatialLookbook;
