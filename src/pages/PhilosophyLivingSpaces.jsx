import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Layers,
  Check,
  ChevronRight,
  Sliders,
  Maximize2
} from 'lucide-react';

const SPATIAL_SUITES = [
  {
    id: 'living',
    num: '01',
    name: 'The Living Pavilion',
    archetype: 'Volumetric Stillness',
    quote: 'Where natural stone mass anchors human stillness amidst boundless natural light.',
    spec: '1:1.618 Scale',
    lux: '2700K Amber',
    acoustic: 'NRC 0.82',
    tolerance: '0.5mm Flush',
    swatches: [
      { name: 'Roman Travertine', color: '#D6C8B4' },
      { name: 'Smoked Oak', color: '#4A3B32' },
      { name: 'Champagne Brass', color: '#C8A870' }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    blueprintNote: 'Calibrated double-height negative volume with concealed pocket pivots.'
  },
  {
    id: 'culinary',
    num: '02',
    name: 'The Culinary Atelier',
    archetype: 'Concealed Architecture',
    quote: 'Appliance mechanics vanish behind monolithic woodcraft to celebrate social gathering.',
    spec: 'Zero-Pore Stone',
    lux: '3000K Prep / 2200K Dine',
    acoustic: 'Silent Extractor',
    tolerance: 'Flush Joinery',
    swatches: [
      { name: 'Taj Mahal Quartzite', color: '#E4DDD3' },
      { name: 'Fumed Austrian Oak', color: '#3A2E26' },
      { name: 'Brushed Gunmetal', color: '#5A5856' }
    ],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
    blueprintNote: 'Integrated motorized bi-fold pantries with cantilevered monolithic island.'
  },
  {
    id: 'suite',
    num: '03',
    name: 'The Nocturnal Suite',
    archetype: 'Tactile Restoration',
    quote: 'A sensory acoustic cocoon sculpted in breathable lime wash to lower resting pulse.',
    spec: 'STC 55 Acoustic',
    lux: '2200K Circadian',
    acoustic: 'Multi-layer Damping',
    tolerance: 'Concealed Reveal',
    swatches: [
      { name: 'Lime Wash Plaster', color: '#DDD6CC' },
      { name: 'Belgian Raw Linen', color: '#C2B6A6' },
      { name: 'Dark Walnut', color: '#3B2F2F' }
    ],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1600',
    blueprintNote: 'Circadian dimming curve synchronized with natural solar sunset.'
  },
  {
    id: 'wellness',
    num: '04',
    name: 'The Bath & Wellness Haven',
    archetype: 'Monolithic Hydrology',
    quote: 'Sculpted from single blocks of stone beneath frameless skyward daylight portals.',
    spec: 'Zero-Step Drain',
    lux: 'Zenithal Skylight',
    acoustic: 'Water Soundscape',
    tolerance: 'Seamless Micro-coat',
    swatches: [
      { name: 'Ceppo di Gré Stone', color: '#B0A99F' },
      { name: 'Fluted Cast Glass', color: '#DCE4E3' },
      { name: 'Brushed Bronze PVD', color: '#8C6D4F' }
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
    blueprintNote: 'Continuous monolithic floor-to-wall microcement with zero grout lines.'
  }
];

const PhilosophyLivingSpaces = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = SPATIAL_SUITES[selectedIdx];

  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#1A1A1A] py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-[#E8E2D6] overflow-hidden">
      
      {/* Background Architectural Blueprint Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Warm ambient corner glow */}
      <div className="absolute -top-20 -right-20 w-[450px] h-[250px] bg-[#8A6D54]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[94rem] mx-auto relative z-10">

        {/* ===================== COMPACT EDITORIAL HEADER STRIP - CENTERED ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-8 pb-4 border-b border-[#E5DFD3]"
        >
          <div className="flex items-center justify-center space-x-2.5 mb-2">
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#8A6D54]" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8A6D54] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8A6D54]" />
              SPATIAL ATELIER • 04 LIVING REALMS
            </span>
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#8A6D54]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1A1A1A] tracking-tight mb-2 leading-[1.2]">
            Curated Living <span className="italic font-light text-[#8A6D54] font-serif">Realms &amp; Suites.</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-xs font-mono text-[#7D766C]">
            <span>Crafted for INCHES Residences</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A6D54]" />
            <span className="font-semibold text-[#1A1A1A]">Curated Edition 2026</span>
          </div>
        </motion.div>

        {/* ===================== 3-MODULE EDITORIAL MAGAZINE LAYOUT ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* MODULE 1 (Left 4.5 cols): Ethos, Swatches & Bespoke Inquire */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E2D6] shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* Number & Archetype Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#8A6D54]">
                      /{current.num}
                    </span>
                    <span className="text-[0.65rem] font-mono uppercase tracking-widest text-[#8A6D54] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#ECE5D9]">
                      {current.archetype}
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] text-[#A0988E]">
                    {current.tolerance}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-medium tracking-tight">
                  {current.name}
                </h3>

                {/* Poetic Architectural Quote */}
                <p className="font-serif italic text-xs sm:text-[0.82rem] text-[#6B645B] leading-relaxed border-l-2 border-[#8A6D54]/40 pl-3">
                  "{current.quote}"
                </p>

                {/* 3 Material Swatches */}
                <div className="pt-1">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#999288] block mb-1.5 font-semibold">
                    Curated Material Palette
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {current.swatches.map((swatch, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#ECE5D9] text-[0.68rem] text-[#3D3934] font-medium"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-inner"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <span>{swatch.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Inquire Action Button */}
            <div className="pt-3 border-t border-[#EFE9DF] flex items-center justify-between gap-3">
              <span className="font-mono text-[0.65rem] text-[#8A6D54] font-semibold tracking-wider">
                {current.spec} • {current.lux}
              </span>

              <a
                href={`https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20consult%20regarding%20the%20${encodeURIComponent(current.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-xl bg-[#1A1A1A] hover:bg-[#8A6D54] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow hover:scale-103 cursor-pointer shrink-0"
              >
                <span>Consult</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* MODULE 2 (Center 5 cols): Cinematic Photographic Canvas with Blueprint Layer */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#E8E2D6] relative bg-[#1A1A1A] h-[380px] shadow-[0_12px_35px_rgba(0,0,0,0.06)] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full h-full absolute inset-0"
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover brightness-[0.93] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Top Floating Golden Ratio Spec */}
            <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
              <div className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[0.65rem] font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-ping" />
                <span>INCHES Spatial Plate • {current.num}</span>
              </div>
            </div>

            {/* Blueprint Craft Note at Bottom */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E8E2D6] text-[#1A1A1A] shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#8A6D54] font-bold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#8A6D54]" />
                  Architectural Blueprint Note
                </span>
                <span className="font-mono text-[0.62rem] text-[#8A6D54] font-bold">
                  {current.acoustic}
                </span>
              </div>
              <p className="font-sans text-[0.72rem] text-[#4A453E] leading-snug font-normal line-clamp-1">
                {current.blueprintNote}
              </p>
            </div>
          </div>

          {/* MODULE 3 (Right 3 cols): 4 Vertical Interactive Selector Strips */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-2 h-[380px]">
            {SPATIAL_SUITES.map((suite, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={suite.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex-1 p-3 rounded-xl text-left transition-all duration-300 relative border cursor-pointer flex items-center justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#8A6D54] shadow-md ring-1 ring-[#8A6D54]/40'
                      : 'bg-white/60 hover:bg-white border-[#E8E2D6] hover:border-[#D5CDC0]'
                  }`}
                >
                  {/* Left Golden Accent Line when active */}
                  {isSelected && (
                    <motion.div
                      layoutId="module3ActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-[#8A6D54]"
                    />
                  )}

                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`font-mono text-[0.65rem] font-bold ${isSelected ? 'text-[#8A6D54]' : 'text-[#9E978D]'}`}>
                        {suite.num}
                      </span>
                      <span className="text-[0.62rem] font-mono uppercase tracking-wider text-[#7D766C] truncate">
                        {suite.archetype.split(' ')[0]}
                      </span>
                    </div>
                    <h4 className="font-serif text-xs font-semibold text-[#1A1A1A] truncate">
                      {suite.name.replace('The ', '')}
                    </h4>
                  </div>

                  <span className={`font-mono text-[0.62rem] px-2 py-0.5 rounded border shrink-0 ${
                    isSelected
                      ? 'bg-[#8A6D54]/15 border-[#8A6D54]/40 text-[#8A6D54] font-bold'
                      : 'bg-[#FAF7F2] border-[#E8E2D6] text-[#8A6D54]'
                  }`}>
                    {suite.spec.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};

export default PhilosophyLivingSpaces;
