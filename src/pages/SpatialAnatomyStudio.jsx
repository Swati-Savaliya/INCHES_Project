import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Layers,
  Ruler,
  Sun,
  Sparkles,
  CheckCircle2,
  Building,
  ArrowUpRight
} from 'lucide-react';

const SPACES = [
  {
    id: 'living_pavilion',
    name: 'Living Pavilion',
    specs: '750 sq.ft • 3.8m Height',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    layers: {
      cad: {
        filter: 'grayscale(0.85) contrast(1.5) brightness(0.7) hue-rotate(180deg)',
        title: '01. Structural Grid & Load Lines',
        desc: 'Concealed columns and 12mm flush shadowline engineering.',
        highlight: '12mm Shadowline'
      },
      lighting: {
        filter: 'brightness(1.1) contrast(1.2) sepia(0.3)',
        title: '02. Circadian Lighting Scheme',
        desc: 'Magnetic 48V tracks & 2400K indirect amber ceiling grazes.',
        highlight: '2400K Warm Glaze'
      },
      joinery: {
        filter: 'contrast(1.15) saturate(1.1)',
        title: '03. Italian Millwork & Joinery',
        desc: 'Bio-fumed smoked oak veneer with PVD champagne brass inlays.',
        highlight: '0.1mm Tolerances'
      },
      final: {
        filter: 'none',
        title: '04. The Sensory Masterpiece',
        desc: 'Silk-honed Statuario marble, pure Belgian linen & bespoke calm.',
        highlight: '100% Living Finishes'
      }
    },
    hotspots: [
      {
        id: 1,
        top: '25%',
        left: '46%',
        label: 'Zero-Edge Cove',
        spec: '2400K indirect cove grazing',
        category: 'Lighting'
      },
      {
        id: 2,
        top: '55%',
        left: '26%',
        label: 'Statuario Wall',
        spec: '20mm bookmatched Italian marble',
        category: 'Stonecraft'
      },
      {
        id: 3,
        top: '78%',
        left: '66%',
        label: 'Smoked Oak Chevron',
        spec: 'Acoustic biological wax finish',
        category: 'Flooring'
      },
      {
        id: 4,
        top: '42%',
        left: '84%',
        label: 'PVD Champagne Profile',
        spec: '0.25mm CNC chamfered brass',
        category: 'Metalcraft'
      }
    ]
  },
  {
    id: 'master_suite',
    name: 'Master Sanctuary',
    specs: '620 sq.ft • 3.4m Height',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    layers: {
      cad: {
        filter: 'grayscale(0.85) contrast(1.5) brightness(0.7) hue-rotate(180deg)',
        title: '01. Acoustic Isolation Grid',
        desc: 'Double-glazed soundproof framing and acoustic subfloor barriers.',
        highlight: 'NRC 0.85 Acoustic'
      },
      lighting: {
        filter: 'brightness(1.1) contrast(1.2) sepia(0.3)',
        title: '02. Circadian Ambient Wash',
        desc: '1800K to 2700K automated circadian relaxation illumination.',
        highlight: 'Circadian Dimming'
      },
      joinery: {
        filter: 'contrast(1.15) saturate(1.1)',
        title: '03. Fluted Oak Wardrobes',
        desc: 'Glass enclosure wardrobes with integrated sensor luminaires.',
        highlight: 'Soft-Close Blum'
      },
      final: {
        filter: 'none',
        title: '04. Tactile Sanctuary',
        desc: 'Textured Venetian lime plaster walls and bouclé upholstery.',
        highlight: 'Venetian Plaster'
      }
    },
    hotspots: [
      {
        id: 1,
        top: '32%',
        left: '50%',
        label: 'Marmorino Arch',
        spec: 'Hand-troweled Italian plaster',
        category: 'Wall Finish'
      },
      {
        id: 2,
        top: '66%',
        left: '42%',
        label: 'Floating Bedstead',
        spec: 'Concealed LED underglow base',
        category: 'Joinery'
      },
      {
        id: 3,
        top: '46%',
        left: '84%',
        label: 'Fluted Partition',
        spec: '8mm fluted acoustic glazing',
        category: 'Glazing'
      }
    ]
  }
];

const LAYER_KEYS = [
  { id: 'cad', label: 'CAD Grid', icon: Ruler },
  { id: 'lighting', label: 'Lighting', icon: Sun },
  { id: 'joinery', label: 'Joinery', icon: Layers },
  { id: 'final', label: 'Sensory Finish', icon: Sparkles }
];

const SpatialAnatomyStudio = () => {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const [activeLayer, setActiveLayer] = useState('final');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const activeSpace = SPACES[activeSpaceIdx];
  const currentLayerData = activeSpace.layers[activeLayer];

  return (
    <section id="anatomy" className="relative w-full bg-[#0E0E0E] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#8A6D54]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Minimal High-Fashion Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-5 h-[1.5px] bg-accent" />
              <span className="font-mono text-[0.62rem] tracking-[0.3em] text-accent uppercase font-bold">
                SPATIAL ANATOMY STUDIO
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Blueprint to <span className="italic font-light text-accent font-serif">Sensory Reality.</span>
            </h2>
          </div>

          {/* Space Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md self-start sm:self-auto">
            {SPACES.map((space, idx) => {
              const isSelected = activeSpaceIdx === idx;
              return (
                <button
                  key={space.id}
                  onClick={() => {
                    setActiveSpaceIdx(idx);
                    setActiveHotspot(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-all cursor-pointer font-medium ${
                    isSelected
                      ? 'bg-accent text-white shadow-md'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive 4-Layer Mode Switcher Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          {LAYER_KEYS.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`p-3 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer overflow-hidden backdrop-blur-md flex items-center justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FAF6EE] to-white text-primary border-white shadow-[0_8px_25px_rgba(255,255,255,0.18)] ring-1 ring-white/60'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-white/70 hover:text-white'
                }`}
              >
                {/* Active Top Gold Line */}
                {isSelected && (
                  <motion.div
                    layoutId="activeLayerLine"
                    className="absolute top-0 left-0 right-0 h-[2.5px] bg-accent"
                  />
                )}

                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-primary text-accent shadow-sm' : 'bg-white/10 text-accent'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className={`font-mono text-[0.56rem] block uppercase tracking-wider font-bold ${
                      isSelected ? 'text-accent' : 'text-accent/80'
                    }`}>
                      Layer 0{index + 1}
                    </span>
                    <span className={`font-serif text-xs sm:text-sm font-medium truncate block ${
                      isSelected ? 'text-primary font-semibold' : 'text-white'
                    }`}>
                      {layer.label}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0 ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* Left Canvas with Live Layer Blend & Hotspot Pins (8 Cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/20 h-[360px] sm:h-[430px] md:h-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black group select-none">
            
            {/* Visual Image with Smooth Layer CSS Filter */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSpace.id}-${activeLayer}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeSpace.image}
                  alt={activeSpace.name}
                  style={{
                    filter: currentLayerData.filter,
                    transition: 'filter 0.5s ease-in-out'
                  }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Corner Luxury Golden Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent/60 pointer-events-none z-20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent/60 pointer-events-none z-20" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent/60 pointer-events-none z-20" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent/60 pointer-events-none z-20" />

            {/* Holographic CAD Blueprint Grid */}
            {activeLayer === 'cad' && (
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff20_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff20_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
            )}

            {/* Warm Lighting Wash */}
            {activeLayer === 'lighting' && (
              <div className="absolute inset-0 bg-radial-gradient from-amber-400/25 via-transparent to-black/30 pointer-events-none" />
            )}

            {/* Top Room Specs Floating Tag */}
            <div className="absolute top-4 left-5 z-20 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 font-sans text-[0.65rem] uppercase tracking-wider text-white font-medium flex items-center gap-2 shadow-lg">
                <Building className="w-3.5 h-3.5 text-accent" />
                <span>{activeSpace.name}</span>
                <span className="text-white/40">•</span>
                <span className="text-accent">{activeSpace.specs}</span>
              </span>
            </div>

            {/* Interactive Hotspot Pins */}
            {activeSpace.hotspots.map((spot) => {
              const isPinned = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => setActiveHotspot(isPinned ? null : spot)}
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer font-bold ${
                      isPinned
                        ? 'bg-white text-primary scale-125 shadow-[0_0_25px_rgba(255,255,255,0.9)] ring-4 ring-accent/60'
                        : 'bg-accent/95 text-white hover:scale-115 shadow-lg border border-white/40'
                    }`}
                  >
                    <span className="font-sans text-[0.68rem] font-bold">
                      {spot.id}
                    </span>
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40 pointer-events-none" />
                  </button>

                  {/* Floating Micro-Tooltip */}
                  <AnimatePresence>
                    {isPinned && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3.5 bg-black/95 backdrop-blur-2xl border border-accent/40 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-40 text-left pointer-events-none"
                      >
                        <span className="font-mono text-[0.58rem] uppercase tracking-wider text-accent font-bold block mb-1">
                          {spot.category}
                        </span>
                        <h5 className="font-serif text-xs sm:text-sm text-white font-semibold mb-1">
                          {spot.label}
                        </h5>
                        <p className="font-sans text-[0.68rem] text-surface/80 leading-snug">
                          {spot.spec}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Bottom Floating Layer Indicator */}
            <div className="absolute bottom-4 left-5 right-5 z-20 p-3 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-serif text-xs sm:text-sm text-white font-medium">
                  {currentLayerData.title}
                </span>
              </div>
              <span className="font-sans text-[0.62rem] text-accent font-semibold px-2.5 py-0.5 rounded-md bg-accent/20 border border-accent/40">
                {currentLayerData.highlight}
              </span>
            </div>

          </div>

          {/* Right Sleek Specifications & Direct Action Card (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#141414] border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl relative">
            
            <div>
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div>
                  <span className="font-mono text-[0.58rem] uppercase tracking-widest text-accent font-bold block">
                    ENGINEERING DOSSIER
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                    Technical Blueprint
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shadow-sm">
                  <Layers className="w-4 h-4" />
                </div>
              </div>

              {/* Active Layer Brief Box */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-3.5">
                <span className="font-serif text-xs text-accent font-semibold block mb-1">
                  {currentLayerData.title}
                </span>
                <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                  {currentLayerData.desc}
                </p>
              </div>

              {/* Compact Hotspot Specs List */}
              <div className="space-y-2 mb-3.5">
                <span className="font-mono text-[0.58rem] uppercase tracking-wider text-white/40 font-semibold block mb-1">
                  Key Craft Milestones
                </span>
                {activeSpace.hotspots.map((spot) => {
                  const isSelected = activeHotspot?.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(isSelected ? null : spot)}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${
                        isSelected
                          ? 'border-accent bg-accent/20 text-white ring-1 ring-accent/40 shadow-sm'
                          : 'border-white/5 bg-white/[0.03] text-white/70 hover:border-white/15 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate mr-2">
                        <span className="w-4 h-4 rounded-full bg-accent/30 text-accent font-mono text-[0.58rem] font-bold flex items-center justify-center shrink-0">
                          {spot.id}
                        </span>
                        <span className="font-sans text-[0.7rem] truncate font-medium">{spot.label}</span>
                      </div>
                      <span className="text-[0.6rem] font-mono text-accent shrink-0 font-medium">{spot.category}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/919702763876?text=${encodeURIComponent(`Hello INCHES Interiors, I want to review spatial blueprints and interior planning for my ${activeSpace.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/25 cursor-pointer hover:scale-102 active:scale-98"
              >
                <span>Consult On Blueprints</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpatialAnatomyStudio;
