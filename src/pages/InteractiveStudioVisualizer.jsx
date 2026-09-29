import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  CloudSun,
  Flame,
  Layers,
  Sparkles,
  ArrowUpRight,
  Compass,
  Ruler,
  SlidersHorizontal,
  Volume2
} from 'lucide-react';

const SPACES = [
  {
    id: 'living',
    name: 'The Obsidian Pavilion',
    type: 'Living Lounge',
    area: '4,850 sq.ft',
    ceiling: '14.5 ft Double Height',
    acoustics: 'NRC 0.85',
    location: 'Vesu, Surat',
    baseImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1400',
    description: 'Monolithic Italian travertine, brushed bronze framing, and warm walnut acoustic baffles.'
  },
  {
    id: 'bedroom',
    name: 'Minimalist Horizon Suite',
    type: 'Master Suite',
    area: '2,200 sq.ft',
    ceiling: '11.0 ft Floating Tray',
    acoustics: 'NRC 0.92',
    location: 'Dumas Road, Surat',
    baseImage: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1400',
    description: 'Acoustically fluted oak, custom bouclé platform bed, and panoramic dressing suites.'
  },
  {
    id: 'kitchen',
    name: 'Monolithic Culinary Lab',
    type: 'Gourmet Kitchen',
    area: '1,650 sq.ft',
    ceiling: '12.0 ft Recessed Channel',
    acoustics: 'NRC 0.70',
    location: 'Pal, Surat',
    baseImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1400',
    description: 'Nero Marquina marble island with handleless cabinetry and smoked glass vitrines.'
  },
  {
    id: 'penthouse',
    name: 'Zenith Glasshouse Penthouse',
    type: 'Skyline Penthouse',
    area: '6,200 sq.ft',
    ceiling: '16.0 ft Vaulted Glazing',
    acoustics: 'NRC 0.88',
    location: 'Adajan, Surat',
    baseImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400',
    description: 'Sky-high living space featuring panoramic views and bookmatched statuary accents.'
  }
];

const LIGHTING_MODES = [
  {
    id: 'golden',
    name: 'Golden Hour',
    temp: '2700K',
    subtitle: 'Warm Sunset Glow',
    icon: Sun,
    filterStyle: 'sepia(0.22) saturate(1.2) brightness(0.96) contrast(1.04)',
    ambientColor: 'from-amber-500/15 via-orange-500/5 to-transparent',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'midnight',
    name: 'Midnight Noir',
    temp: '2200K',
    subtitle: 'Intimate Accent & Onyx',
    icon: Moon,
    filterStyle: 'brightness(0.75) contrast(1.2) saturate(0.9) hue-rotate(-8deg)',
    ambientColor: 'from-indigo-950/25 via-black/20 to-transparent',
    badgeBg: 'bg-indigo-900 text-indigo-100 border-indigo-700'
  },
  {
    id: 'daylight',
    name: 'Diffused Daylight',
    temp: '4000K',
    subtitle: 'Crisp Architecture Light',
    icon: CloudSun,
    filterStyle: 'brightness(1.04) contrast(1.06) saturate(1.0)',
    ambientColor: 'from-sky-300/15 via-white/5 to-transparent',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-300'
  },
  {
    id: 'candlelit',
    name: 'Candlelit Dusk',
    temp: '1900K',
    subtitle: 'Sensory Fireplace Glow',
    icon: Flame,
    filterStyle: 'sepia(0.35) saturate(1.3) brightness(0.88) contrast(1.12)',
    ambientColor: 'from-rose-500/15 via-amber-600/10 to-transparent',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-300'
  }
];

const MATERIAL_OPTIONS = {
  primaryWall: [
    { name: 'Roman Travertine', color: '#C8B89E', origin: 'Italy' },
    { name: 'Limewash Plaster', color: '#DFDACF', origin: 'France' },
    { name: 'Fluted White Oak', color: '#9B7853', origin: 'Germany' },
    { name: 'Raw Microcement', color: '#88847E', origin: 'Spain' }
  ],
  accentMetal: [
    { name: 'Satin Bronze', color: '#8A6D54', finish: 'Satin PVD' },
    { name: 'Champagne Gold', color: '#C5A059', finish: 'Brushed' },
    { name: 'Matte Gunmetal', color: '#2B2B2B', finish: 'Anodized' }
  ],
  flooring: [
    { name: 'Basalt Slab', color: '#3A3935', finish: 'Matte' },
    { name: 'Smoked Walnut', color: '#563B27', finish: 'Oiled' },
    { name: 'Statuary Marble', color: '#E8E5DF', finish: 'Honed' }
  ]
};

const InteractiveStudioVisualizer = () => {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const [activeLighting, setActiveLighting] = useState(LIGHTING_MODES[0]);
  const [viewMode, setViewMode] = useState('render'); // 'render' | 'blueprint'
  const [selectedMaterials, setSelectedMaterials] = useState({
    primaryWall: MATERIAL_OPTIONS.primaryWall[0],
    accentMetal: MATERIAL_OPTIONS.accentMetal[0],
    flooring: MATERIAL_OPTIONS.flooring[0]
  });

  const activeSpace = SPACES[activeSpaceIndex];

  const handleShareWhatsApp = () => {
    const text = `Hello INCHES Interiors, I customized a room moodboard for ${activeSpace.name}:\n• Lighting Mood: ${activeLighting.name} (${activeLighting.temp})\n• Wall Material: ${selectedMaterials.primaryWall.name}\n• Accent Metal: ${selectedMaterials.accentMetal.name}\n• Flooring: ${selectedMaterials.flooring.name}\n\nI would like to discuss this concept for my home.`;
    window.open(`https://wa.me/919702763876?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="visualizer" className="relative w-full bg-[#F5F2EB] text-primary py-12 md:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#E3DFD5]">

      {/* Soft warm background glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[250px] bg-[#E5DFD3] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Section Header (Compact) */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-2"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.65rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
              Spatial Studio Visualizer
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight leading-tight"
          >
            Experience Light, Texture <span className="italic font-light text-accent font-serif">&amp; Proportion.</span>
          </motion.h2>
        </div>

        {/* Space Selection Pills (Compact) */}
        <div className="flex items-center justify-center mb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 bg-white/70 backdrop-blur-md border border-[#E3DFD5] rounded-full shadow-sm">
            {SPACES.map((space, idx) => {
              const isActive = activeSpaceIndex === idx;
              return (
                <button
                  key={space.id}
                  onClick={() => setActiveSpaceIndex(idx)}
                  className={`relative px-3.5 sm:px-5 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-primary/70 hover:text-primary hover:bg-black/5'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSpaceTabLight"
                      className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{space.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Visualizer Interactive Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* Left: Compact Interactive Room Canvas + Lighting Bar (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">

            {/* Main Stage Canvas (Height Expanded) */}
            <div className="relative w-full h-[300px] sm:h-[380px] md:h-[430px] bg-[#EBE7DF] rounded-2xl overflow-hidden border border-[#DDD6C8] shadow-lg group">

              {/* Scene Image with Lighting Filter */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeSpace.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeSpace.baseImage}
                    alt={activeSpace.name}
                    style={{
                      filter: viewMode === 'blueprint'
                        ? 'invert(1) hue-rotate(190deg) contrast(1.8) brightness(0.9) grayscale(0.4)'
                        : activeLighting.filterStyle,
                      transition: 'filter 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Atmospheric Light Glow Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${activeLighting.ambientColor} transition-all duration-500 pointer-events-none`}
              />

              {/* Blueprint Grid Overlay Mode */}
              {viewMode === 'blueprint' && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bcd420_1px,transparent_1px),linear-gradient(to_bottom,#00bcd420_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
              )}

              {/* TOP HUD: Room Metadata & Active Mood Pill */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans text-[0.65rem] uppercase tracking-widest text-white font-medium flex items-center gap-1.5">
                    <Compass className="w-3 h-3 text-accent" />
                    {activeSpace.type}
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans text-[0.65rem] text-white/90">
                    {activeSpace.location}
                  </span>
                </div>

                <span className={`px-2.5 py-1 rounded-full backdrop-blur-md border font-sans text-[0.65rem] uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-sm ${activeLighting.badgeBg}`}>
                  <activeLighting.icon className="w-3 h-3" />
                  {activeLighting.name} • {activeLighting.temp}
                </span>
              </div>

              {/* BOTTOM HUD: Architectural Specs & View Mode Switcher */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-20">

                {/* Tech Specs */}
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-[0.7rem] text-white">
                  <div className="flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-accent" />
                    <span>{activeSpace.area}</span>
                  </div>
                  <span className="text-white/30">|</span>
                  <div className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-accent" />
                    <span>{activeSpace.ceiling}</span>
                  </div>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-black/70 backdrop-blur-md border border-white/15 rounded-lg">
                  <button
                    onClick={() => setViewMode('render')}
                    className={`px-2.5 py-0.5 rounded-md text-[0.65rem] font-sans tracking-wider uppercase font-semibold transition-all ${viewMode === 'render' ? 'bg-accent text-white shadow-sm' : 'text-white/70 hover:text-white'
                      }`}
                  >
                    Photoreal
                  </button>
                  <button
                    onClick={() => setViewMode('blueprint')}
                    className={`px-2.5 py-0.5 rounded-md text-[0.65rem] font-sans tracking-wider uppercase font-semibold transition-all ${viewMode === 'blueprint' ? 'bg-cyan-600 text-white shadow-sm' : 'text-white/70 hover:text-white'
                      }`}
                  >
                    Blueprint
                  </button>
                </div>

              </div>

            </div>

            {/* Lighting Scenarios Strip (Compact Light Theme) */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E3DFD5] rounded-xl p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[0.65rem] uppercase tracking-widest text-primary/60 font-bold flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-accent" />
                  Live Lighting Scenarios
                </span>
                <span className="font-serif italic text-xs text-accent">
                  {activeLighting.temp}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LIGHTING_MODES.map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = activeLighting.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveLighting(mode)}
                      className={`p-2 rounded-lg border text-left transition-all duration-300 flex items-center justify-between ${isSelected
                        ? 'bg-[#EFECE6] border-accent shadow-sm'
                        : 'bg-[#FAF7F2] border-[#EAE5DA] hover:border-accent/40'
                        }`}
                    >
                      <div className="truncate mr-1">
                        <span className="font-serif text-xs text-primary font-semibold block leading-tight truncate">
                          {mode.name}
                        </span>
                        <span className="font-sans text-[0.6rem] text-primary/50 block truncate">
                          {mode.temp}
                        </span>
                      </div>
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-accent' : 'text-primary/40'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Tactile Material Swapper & WhatsApp Share (4 Cols - Light Theme) */}
          <div className="lg:col-span-4 flex flex-col gap-3 h-full">

            <div className="bg-white/90 backdrop-blur-md border border-[#E3DFD5] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full min-h-[480px] lg:min-h-[520px]">

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#EAE5DA]">
                    <div>
                      <span className="font-sans text-[0.65rem] uppercase tracking-widest text-accent font-bold">
                        Material Moodboard
                      </span>
                      <h3 className="font-serif text-xl text-primary font-medium">
                        Tactile Swatches
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#EFECE6] text-[0.65rem] text-primary/70 font-sans font-medium">
                      Customizer
                    </span>
                  </div>

                  <p className="font-sans text-[0.75rem] text-primary/70 leading-relaxed mb-4">
                    {activeSpace.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3.5 my-auto">
                  {/* 1. Primary Wall Finish */}
                  <div>
                    <label className="font-sans text-[0.68rem] uppercase tracking-wider text-primary/60 mb-2 flex items-center justify-between">
                      <span>1. Wall Surface</span>
                      <span className="text-accent font-semibold">{selectedMaterials.primaryWall.name}</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {MATERIAL_OPTIONS.primaryWall.map((mat) => {
                        const isSelected = selectedMaterials.primaryWall.name === mat.name;
                        return (
                          <button
                            key={mat.name}
                            onClick={() => setSelectedMaterials(prev => ({ ...prev, primaryWall: mat }))}
                            className={`p-2 rounded-xl border flex items-center gap-2.5 text-left transition-all ${isSelected ? 'border-accent bg-accent/10 shadow-xs ring-1 ring-accent/30' : 'border-[#EAE5DA] bg-[#FAF7F2] hover:border-accent/40'
                              }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-black/15 shrink-0 shadow-xs"
                              style={{ backgroundColor: mat.color }}
                            />
                            <span className="text-[0.7rem] text-primary font-medium truncate">{mat.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Accent Metal */}
                  <div>
                    <label className="font-sans text-[0.68rem] uppercase tracking-wider text-primary/60 mb-2 flex items-center justify-between">
                      <span>2. Metal Inlays</span>
                      <span className="text-accent font-semibold">{selectedMaterials.accentMetal.name}</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {MATERIAL_OPTIONS.accentMetal.map((mat) => {
                        const isSelected = selectedMaterials.accentMetal.name === mat.name;
                        return (
                          <button
                            key={mat.name}
                            onClick={() => setSelectedMaterials(prev => ({ ...prev, accentMetal: mat }))}
                            className={`p-2 rounded-xl border flex items-center justify-center gap-2 transition-all ${isSelected ? 'border-accent bg-accent/10 shadow-xs ring-1 ring-accent/30' : 'border-[#EAE5DA] bg-[#FAF7F2] hover:border-accent/40'
                              }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0 shadow-xs"
                              style={{ backgroundColor: mat.color }}
                            />
                            <span className="text-[0.65rem] text-primary font-medium truncate">{mat.name.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Flooring */}
                  <div>
                    <label className="font-sans text-[0.68rem] uppercase tracking-wider text-primary/60 mb-2 flex items-center justify-between">
                      <span>3. Flooring</span>
                      <span className="text-accent font-semibold">{selectedMaterials.flooring.name}</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {MATERIAL_OPTIONS.flooring.map((mat) => {
                        const isSelected = selectedMaterials.flooring.name === mat.name;
                        return (
                          <button
                            key={mat.name}
                            onClick={() => setSelectedMaterials(prev => ({ ...prev, flooring: mat }))}
                            className={`p-2 rounded-xl border flex items-center justify-center gap-2 transition-all ${isSelected ? 'border-accent bg-accent/10 shadow-xs ring-1 ring-accent/30' : 'border-[#EAE5DA] bg-[#FAF7F2] hover:border-accent/40'
                              }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0 shadow-xs"
                              style={{ backgroundColor: mat.color }}
                            />
                            <span className="text-[0.65rem] text-primary font-medium truncate">{mat.name.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-[#EAE5DA]">
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-3 bg-primary hover:bg-accent text-white font-sans text-[0.7rem] tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group hover:shadow-md"
                >
                  <span>Share Moodboard on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveStudioVisualizer;
