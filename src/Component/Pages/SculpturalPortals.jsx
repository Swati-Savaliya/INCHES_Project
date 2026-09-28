import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Maximize2, Compass, MapPin, Layers, Eye } from 'lucide-react';

const INTERIOR_SHAPES = [
  {
    id: '01',
    name: 'French Arched Niche',
    subtitle: 'Classic Portal Archway',
    location: 'Surat Penthouse',
    material: 'Italian Travertine & Warm Sconce',
    shapeOuter: 'rounded-t-[260px] rounded-b-[28px]',
    shapeInner: 'rounded-t-[250px] rounded-b-[20px]',
    borderAccent: 'border-t-2 border-accent',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    category: 'Living Salon',
    hotspots: [
      { top: '35%', left: '50%', label: 'Fluted Alcove' },
      { top: '75%', left: '30%', label: 'Floating Marble Base' }
    ]
  },
  {
    id: '02',
    name: 'Capsule Vanity Suite',
    subtitle: 'Symmetrical Pill Silhouette',
    location: 'Mumbai Sea-Facing Duplex',
    material: 'Smoked Oak & Backlit Glass',
    shapeOuter: 'rounded-[160px]',
    shapeInner: 'rounded-[150px]',
    borderAccent: 'border-x-2 border-accent',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    category: 'Master Suite',
    hotspots: [
      { top: '40%', left: '60%', label: 'Halo Backlight' },
      { top: '80%', left: '50%', label: 'Bouclé Seating' }
    ]
  },
  {
    id: '03',
    name: 'Organic Pebble Alcove',
    subtitle: 'Asymmetric Fluid Mirror Form',
    location: 'VIP Road Villa',
    material: 'Lime Plaster & Brushed Brass',
    shapeOuter: 'rounded-[180px_40px_180px_40px]',
    shapeInner: 'rounded-[170px_32px_170px_32px]',
    borderAccent: 'border-l-2 border-accent',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    category: 'Artisanal Lounge',
    hotspots: [
      { top: '30%', left: '40%', label: 'Curved Plaster Wall' },
      { top: '70%', left: '65%', label: 'Monolithic Island' }
    ]
  },
  {
    id: '04',
    name: 'Inverted Vault Pavilion',
    subtitle: 'Modern Scalloped Horizon',
    location: 'Estate Sky Deck',
    material: 'Teak Ribs & Ambient Glow',
    shapeOuter: 'rounded-t-[32px] rounded-b-[260px]',
    shapeInner: 'rounded-t-[24px] rounded-b-[250px]',
    borderAccent: 'border-b-2 border-accent',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    category: 'Dining Atelier',
    hotspots: [
      { top: '25%', left: '50%', label: 'Recessed Linear Light' },
      { top: '75%', left: '45%', label: 'Sculpted Vault Base' }
    ]
  }
];

const SculpturalPortals = () => {
  const [activeShape, setActiveShape] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [showHotspots, setShowHotspots] = useState(false);

  return (
    <section id="sculptural-portals" className="relative w-full bg-[#0b0b0b] text-surface py-12 md:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Ambient background architectural halo */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Header with Luxury Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2.5 mb-1.5"
            >
              <span className="w-5 h-[1px] bg-accent" />
              <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-accent" />
                Interior Architectural Silhouettes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight"
            >
              Sculpted Interior <span className="italic font-light text-accent font-serif">Shapes &amp; Portals</span>
            </motion.h2>
          </div>

          {/* Toggle Interactive Hotspots / Specs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                showHotspots
                  ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                  : 'bg-white/5 text-surface/70 border-white/15 hover:border-white/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showHotspots ? 'Hide Details' : 'Show Details'}</span>
            </button>
          </div>
        </div>

        {/* 4 Architectural Interior Shapes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERIOR_SHAPES.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveShape(idx)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col group cursor-pointer"
              >
                {/* Shape Silhouette Frame */}
                <div
                  className={`relative w-full h-[380px] sm:h-[420px] ${item.shapeOuter} p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 shadow-2xl transition-all duration-700 group-hover:border-accent/80 group-hover:shadow-[0_0_30px_rgba(197,168,128,0.25)]`}
                >
                  {/* Inner Image Cutout */}
                  <div className={`w-full h-full overflow-hidden ${item.shapeInner} relative bg-[#171717]`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-sans text-[0.62rem] text-accent font-bold tracking-wider">
                        {item.id} // {item.category}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalItem(item);
                        }}
                        className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer"
                        title="Expand View"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Interactive Hotspots Pins */}
                    {showHotspots && item.hotspots && item.hotspots.map((pin, pIdx) => (
                      <motion.div
                        key={pIdx}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * pIdx }}
                        style={{ top: pin.top, left: pin.left }}
                        className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 group/pin pointer-events-auto"
                      >
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent border border-white" />
                        </span>
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-white/20 text-[0.58rem] font-sans text-white tracking-wide opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none">
                          {pin.label}
                        </span>
                      </motion.div>
                    ))}

                    {/* Bottom Architectural Info Card */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-black/75 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-sans text-[0.6rem] text-accent font-semibold tracking-wider uppercase">
                          {item.subtitle}
                        </span>
                        <span className="font-sans text-[0.58rem] text-surface/60 flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5 text-accent" />
                          {item.location}
                        </span>
                      </div>

                      <h4 className="font-serif text-base text-white font-medium truncate">
                        {item.name}
                      </h4>

                      <p className="font-sans text-[0.64rem] text-surface/70 truncate mt-0.5">
                        {item.material}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aesthetic Shape Name Underneath */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="font-sans text-[0.68rem] text-accent font-semibold tracking-widest uppercase">
                    {item.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:scale-150 group-hover:bg-accent transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-surface/50 pt-4 border-t border-white/10 gap-3">
          <span className="text-[0.72rem]">Custom-crafted interior niches, archways &amp; fluid bespoke geometries.</span>
          <a
            href="https://wa.me/919702763876?text=Hello%20INCHES,%20I%20am%20interested%20in%20custom%20interior%20archways%20and%20sculptural%20shapes."
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-white transition-colors flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[0.7rem]"
          >
            <span>Sculpt Your Space With INCHES</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalItem && (
          <div
            onClick={() => setModalItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#141414]"
            >
              <img
                src={modalItem.image}
                alt={modalItem.name}
                className="w-full h-[65vh] object-cover"
              />
              <div className="p-4 sm:p-5 bg-[#141414] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-semibold">
                    {modalItem.name} ({modalItem.subtitle})
                  </h4>
                  <span className="font-sans text-xs text-accent">
                    {modalItem.location} • {modalItem.material}
                  </span>
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="px-4 py-2 rounded-xl bg-accent text-white font-sans text-xs uppercase tracking-wider font-bold cursor-pointer hover:bg-accent/80 transition-colors"
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

export default SculpturalPortals;
