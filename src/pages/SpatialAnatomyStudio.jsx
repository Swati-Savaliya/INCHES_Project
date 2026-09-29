import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Layers,
  Ruler,
  Sun,
  Eye,
  CheckCircle2,
  Sparkles,
  Maximize2,
  Sliders,
  ChevronRight,
  Info,
  Building,
  ArrowUpRight
} from 'lucide-react';

const SPACES = [
  {
    id: 'living_pavilion',
    name: 'Living Pavilion',
    specs: '750 sq.ft • 3.8m Ceiling Height',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    layers: {
      cad: {
        filter: 'grayscale(0.8) contrast(1.6) brightness(0.7) hue-rotate(180deg)',
        overlay: 'blueprint',
        title: 'Layer 01: Structural & Spatial Grid',
        desc: 'Precision load-bearing calculations, concealed structural columns, and 12mm flush shadowline reveals.'
      },
      lighting: {
        filter: 'brightness(1.1) contrast(1.2) sepia(0.25)',
        overlay: 'lighting',
        title: 'Layer 02: Architectural Lighting Scheme',
        desc: 'Magnetic 48V low-voltage track spotlights, 2400K indirect ceiling cove wash, and deep anti-glare COBs (CRI 98+).'
      },
      joinery: {
        filter: 'contrast(1.15) saturate(1.1)',
        overlay: 'joinery',
        title: 'Layer 03: Italian Joinery & Millwork',
        desc: 'Marine-grade calibrated ply, bio-fumed smoked Austrian oak veneer, and PVD champagne brass perimeter inlays.'
      },
      final: {
        filter: 'none',
        overlay: 'none',
        title: 'Layer 04: The Sensory Masterpiece',
        desc: 'Silk-honed Statuario marble, pure Belgian linen drapes, and curated bespoke styling for timeless harmony.'
      }
    },
    hotspots: [
      {
        id: 1,
        top: '22%',
        left: '48%',
        label: 'Zero-Edge Shadowline Cove',
        spec: 'Concealed 2400K Warm Luminaire with aluminum heat-sink channel',
        category: 'Lighting'
      },
      {
        id: 2,
        top: '55%',
        left: '28%',
        label: 'Bookmatched Statuario Wall',
        spec: '20mm Italian marble slab with continuous bookmatched vein alignment',
        category: 'Stonecraft'
      },
      {
        id: 3,
        top: '78%',
        left: '68%',
        label: 'Smoked Oak Chevron Floor',
        spec: 'Acoustic-dampened biological wax finish (NRC 0.60 noise reduction)',
        category: 'Flooring'
      },
      {
        id: 4,
        top: '42%',
        left: '82%',
        label: 'PVD Champagne Profile',
        spec: '0.25mm CNC chamfered brass with anti-tarnish nano coating',
        category: 'Metallurgy'
      }
    ]
  },
  {
    id: 'master_suite',
    name: 'Master Sanctuary',
    specs: '620 sq.ft • 3.4m Ceiling Height',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    layers: {
      cad: {
        filter: 'grayscale(0.8) contrast(1.6) brightness(0.7) hue-rotate(180deg)',
        overlay: 'blueprint',
        title: 'Layer 01: Acoustic Isolation Grid',
        desc: 'Double-glazed soundproof acoustic wall framing and sub-floor vibration isolation barriers.'
      },
      lighting: {
        filter: 'brightness(1.1) contrast(1.2) sepia(0.25)',
        overlay: 'lighting',
        title: 'Layer 02: Circadian Mood Lighting',
        desc: 'Automated 1800K to 3000K circadian rhythm LED strips embedded in bedhead niches and wardrobe coves.'
      },
      joinery: {
        filter: 'contrast(1.15) saturate(1.1)',
        overlay: 'joinery',
        title: 'Layer 03: Fluted Leather & Oak Wardrobes',
        desc: 'Custom glass wardrobe enclosures with integrated sensor lighting and soft-closing Italian dampers.'
      },
      final: {
        filter: 'none',
        overlay: 'none',
        title: 'Layer 04: The Tactile Sanctuary',
        desc: 'Textured natural lime plaster walls, bouclé upholstery, and sheer Belgian flax curtains.'
      }
    },
    hotspots: [
      {
        id: 1,
        top: '35%',
        left: '52%',
        label: 'Lime Plaster Archway',
        spec: 'Hand-troweled Italian marmorino plaster with breathable natural minerals',
        category: 'Wall Finish'
      },
      {
        id: 2,
        top: '68%',
        left: '42%',
        label: 'Custom Floating Bedstead',
        spec: 'Integrated underglow lighting with concealed wireless charging docks',
        category: 'Furniture'
      },
      {
        id: 3,
        top: '48%',
        left: '86%',
        label: 'Fluted Glass Partition',
        spec: '8mm toughened fluted glass with slim matte black anodized framing',
        category: 'Glazing'
      }
    ]
  }
];

const LAYER_KEYS = [
  { id: 'cad', label: '1. CAD Blueprint', icon: Ruler },
  { id: 'lighting', label: '2. Lighting Scheme', icon: Sun },
  { id: 'joinery', label: '3. Bespoke Joinery', icon: Layers },
  { id: 'final', label: '4. Sensory Masterpiece', icon: Sparkles }
];

const SpatialAnatomyStudio = () => {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const [activeLayer, setActiveLayer] = useState('final');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const activeSpace = SPACES[activeSpaceIdx];
  const currentLayerData = activeSpace.layers[activeLayer];

  return (
    <section id="anatomy" className="relative w-full bg-[#0d0d0d] text-surface py-10 md:py-14 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#8A6D54]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Center-Aligned Architectural Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-6 pb-4 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2.5 mb-1.5"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.65rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-accent" />
              The Architectural Anatomy
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-2 text-center"
          >
            Deconstructing <span className="italic font-light text-accent font-serif">Interior Luxury</span>
          </motion.h2>

          <p className="font-sans text-xs sm:text-sm text-surface/65 max-w-xl mx-auto text-center leading-relaxed">
            Peel back the layers of our craft. Toggle between structural CAD blueprints, luminaire maps, custom millwork, and the tactile finish.
          </p>
        </div>

        {/* Top Space & Layer Selector Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 p-2 bg-[#161616] border border-white/10 rounded-2xl">
          
          {/* Space Picker */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            {SPACES.map((space, idx) => {
              const isSelected = activeSpaceIdx === idx;
              return (
                <button
                  key={space.id}
                  onClick={() => {
                    setActiveSpaceIdx(idx);
                    setActiveHotspot(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-sans text-xs transition-all cursor-pointer font-medium ${
                    isSelected
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-surface/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>

          {/* Layer Mode Switcher Pills */}
          <div className="grid grid-cols-2 sm:flex items-center gap-1 w-full sm:w-auto">
            {LAYER_KEYS.map((layer) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3 py-1.5 rounded-xl font-sans text-[0.68rem] tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-surface/60 hover:text-white bg-white/5'
                  }`}
                >
                  <Icon className="w-3 h-3 text-accent" />
                  <span>{layer.label.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Main Interactive Anatomy Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* Left: Interactive Canvas with Live Layers & Hotspots (8 Cols) */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/15 h-[320px] sm:h-[400px] md:h-[460px] shadow-2xl bg-black group">
            
            {/* Room Image with Layer Filter */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSpace.id}-${activeLayer}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
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

            {/* CAD Grid Simulation Overlay */}
            {activeLayer === 'cad' && (
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bcd425_1px,transparent_1px),linear-gradient(to_bottom,#00bcd425_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
            )}

            {/* Lighting Overlay Wash */}
            {activeLayer === 'lighting' && (
              <div className="absolute inset-0 bg-radial-gradient from-amber-400/20 via-transparent to-black/40 pointer-events-none" />
            )}

            {/* Top HUD Tag */}
            <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 font-sans text-[0.65rem] uppercase tracking-wider text-white font-medium flex items-center gap-1.5">
                <Building className="w-3 h-3 text-accent" />
                {activeSpace.name} • {activeSpace.specs}
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
                    className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isPinned
                        ? 'bg-white text-primary scale-125 shadow-lg'
                        : 'bg-accent/90 text-white hover:scale-110 shadow-md'
                    }`}
                  >
                    <span className="font-sans text-[0.65rem] font-bold">
                      {spot.id}
                    </span>
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40 pointer-events-none" />
                  </button>

                  {/* Floating Tooltip Card on Pinned */}
                  <AnimatePresence>
                    {isPinned && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-40 text-left pointer-events-none"
                      >
                        <span className="font-sans text-[0.58rem] uppercase tracking-wider text-accent font-bold block mb-0.5">
                          {spot.category} Spec
                        </span>
                        <h5 className="font-serif text-xs text-white font-semibold mb-1">
                          {spot.label}
                        </h5>
                        <p className="font-sans text-[0.65rem] text-surface/70 leading-tight">
                          {spot.spec}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Bottom Layer Status Bar */}
            <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <span className="font-sans text-[0.6rem] uppercase tracking-wider text-accent font-bold block">
                  Active Anatomy Layer
                </span>
                <span className="font-serif text-xs sm:text-sm text-white font-medium">
                  {currentLayerData.title}
                </span>
              </div>
              <span className="font-sans text-[0.65rem] text-surface/50 hidden sm:inline-block">
                Click numbered hotspots for technical specs
              </span>
            </div>

          </div>

          {/* Right: Technical Anatomy Dossier & Craft Specs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#151515] border border-white/10 rounded-2xl p-5 shadow-xl relative">
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div>
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <div>
                  <span className="font-sans text-[0.6rem] uppercase tracking-widest text-accent font-bold block">
                    Engineering Dossier
                  </span>
                  <h4 className="font-serif text-lg text-white font-semibold">
                    Layer Specifications
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Layers className="w-4 h-4" />
                </div>
              </div>

              {/* Layer Title & Description */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-4">
                <span className="font-serif text-sm text-white font-medium block mb-1">
                  {currentLayerData.title}
                </span>
                <p className="font-sans text-xs text-surface/65 leading-relaxed">
                  {currentLayerData.desc}
                </p>
              </div>

              {/* Hotspot Spec Highlights */}
              <div className="space-y-2 mb-4">
                <span className="font-sans text-[0.62rem] uppercase tracking-wider text-surface/50 font-semibold block">
                  Technical Joinery Milestones
                </span>
                {activeSpace.hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${
                      activeHotspot?.id === spot.id
                        ? 'border-accent bg-accent/15 text-white'
                        : 'border-white/5 bg-white/5 text-surface/70 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate mr-2">
                      <span className="w-4 h-4 rounded-full bg-accent/30 text-accent font-sans text-[0.6rem] font-bold flex items-center justify-center shrink-0">
                        {spot.id}
                      </span>
                      <span className="font-sans text-[0.7rem] truncate">{spot.label}</span>
                    </div>
                    <span className="text-[0.6rem] font-sans text-accent shrink-0">{spot.category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Consultation on Architecture */}
            <div className="pt-2">
              <a
                href={`https://wa.me/919702763876?text=${encodeURIComponent(`Hello INCHES Interiors, I want to discuss spatial architecture and turnkey planning for my ${activeSpace.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-accent hover:bg-accent/90 text-white font-sans text-[0.68rem] tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-accent/20 group"
              >
                <span>Consult On Architectural Plans</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpatialAnatomyStudio;
