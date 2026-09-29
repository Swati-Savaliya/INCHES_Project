import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Compass,
  Layers,
  Eye,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Volume2,
  VolumeX,
  Maximize2,
  Check,
  ChevronRight,
  Award,
  Flame,
  Feather,
  Droplets,
  MapPin,
  MessageCircle
} from 'lucide-react';

const MATERIAL_SAMPLES = [
  {
    id: 'statuario',
    name: 'Italian Statuario Marble',
    origin: 'Carrara, Italy',
    category: 'Natural Stone',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    macroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Silk-Honed Bookmatched Purity',
    description: 'Quarried in the Apuan Alps. Characterized by dramatic grey-gold veining on an alabaster canvas. Hand-honed to a velvety matte finish that absorbs ambient light without harsh glare.',
    specs: [
      { label: 'Surface Finish', value: 'Silk Honed 800-Grit' },
      { label: 'Porosity Grade', value: '< 0.12% Sealed' },
      { label: 'Thermal Touch', value: 'Cool Organic' },
      { label: 'Longevity', value: 'Generational' }
    ],
    acousticNote: 'Dense crystalline resonance',
    colorHex: '#EAE6DF'
  },
  {
    id: 'austrian_oak',
    name: 'Smoked Austrian Oak',
    origin: 'Salzburg, Austria',
    category: 'Architectural Timber',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    macroImage: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Deep Tonal Warmth & Open Grain',
    description: 'Naturally fumed with ammonia-free biological vapors to bring tannins to the surface. Finished with organic beeswax for a rich tactile grain that warms any spatial acoustic profile.',
    specs: [
      { label: 'Grain Texture', value: 'Deep Wire-Brushed' },
      { label: 'Treatment', value: 'Bio-Fumed Smoked' },
      { label: 'Acoustic Dampening', value: 'NRC 0.65' },
      { label: 'Origin Cert.', value: '100% FSC Forest' }
    ],
    acousticNote: 'Warm, sound-absorbing timber tone',
    colorHex: '#8C6C4F'
  },
  {
    id: 'champagne_brass',
    name: 'Brushed Champagne Brass',
    origin: 'Brescia, Italy',
    category: 'Custom Metallurgy',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    macroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200',
    tagline: 'PVD Coated Zero-Fingerprint Sheen',
    description: 'Solid billet brass precision-milled and brushed in linear satin strokes. Electro-PVD treated for a subtle champagne warmth that resists tarnishing, fingerprints, and oxidation over decades.',
    specs: [
      { label: 'Coating Tech', value: 'Ion Vapor PVD' },
      { label: 'Sheen Level', value: '25% Muted Satin' },
      { label: 'Corrosion Shield', value: 'Grade A5 Anti-Oxidant' },
      { label: 'Bevel Precision', value: '0.25mm CNC Chamfer' }
    ],
    acousticNote: 'High-frequency crisp metallic ring',
    colorHex: '#C5A880'
  },
  {
    id: 'belgian_linen',
    name: 'Pure Belgian Organic Linen',
    origin: 'Flanders, Belgium',
    category: 'Sensory Textiles',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    macroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Master-Woven Natural Slub Drape',
    description: 'Cultivated from zero-waste flax crops. Master-spun on heirloom European looms to preserve the organic slub texture. Curates softness, light diffusion, and acoustic intimacy in living pavilions.',
    specs: [
      { label: 'Weave Weight', value: '480 GSM Heavy Slub' },
      { label: 'Light Diffusion', value: '55% Ambient Filter' },
      { label: 'Drape Memory', value: 'Zero-Sag Weave' },
      { label: 'Eco Standard', value: 'OEKO-TEX 100' }
    ],
    acousticNote: 'Soft micro-whisper texture',
    colorHex: '#DCD4C6'
  }
];

const CRAFT_PILLARS = [
  {
    number: '01',
    title: 'Sensory Spatial Dialogue',
    desc: 'We map natural sun angles, circadian rhythms, and acoustic zones before drawing the first line.',
    metric: '100% Tailored'
  },
  {
    number: '02',
    title: '1:1 Photoreal Digital Twin',
    desc: 'Walk through every millimeter of your residence with realistic materials and lighting simulations.',
    metric: '0.5mm Accuracy'
  },
  {
    number: '03',
    title: 'Master Artisan Execution',
    desc: 'Direct oversight by dedicated principal architects with in-house bespoke carpentry and stonecraft.',
    metric: '10-Yr Guarantee'
  }
];

const SensoryAtelier = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [viewMode, setViewMode] = useState('ambient'); // 'ambient' | 'macro'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeSample = MATERIAL_SAMPLES[activeSampleIndex];

  const toggleSoundEffect = () => {
    setIsPlayingAudio(prev => !prev);
  };

  return (
    <section id="sensory-atelier" className="relative w-full bg-[#0A0A0A] text-surface py-14 md:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[300px] bg-[#8A6D54]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-8 h-[1px] bg-accent" />
              <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Material Atelier
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Tactile Resonance <span className="italic font-light text-accent font-serif">&amp; Rare Materiality</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-surface/65 max-w-md leading-relaxed">
            Every surface is chosen for its emotional touch, longevity, and acoustic character. Inspect our signature materials in ambient and macro resolution.
          </p>
        </div>

        {/* 2-Column Interactive Atelier Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">

          {/* LEFT: Material Canvas & Macro Inspector (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-[#141414] border border-white/10 rounded-3xl p-5 sm:p-6 shadow-2xl relative">

            {/* Top Bar: Active Material Header + View Mode Toggle */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div>
                <span className="font-sans text-[0.62rem] uppercase tracking-widest text-accent font-bold block">
                  {activeSample.category} • {activeSample.origin}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {activeSample.name}
                </h3>
              </div>

              {/* View Switcher: Ambient Room vs Macro Zoom */}
              <div className="flex items-center gap-1.5 p-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/15">
                <button
                  onClick={() => setViewMode('ambient')}
                  className={`px-3 py-1.5 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                    viewMode === 'ambient'
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-surface/60 hover:text-white'
                  }`}
                >
                  Ambient View
                </button>
                <button
                  onClick={() => setViewMode('macro')}
                  className={`px-3 py-1.5 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'macro'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-surface/60 hover:text-white'
                  }`}
                >
                  <Maximize2 className="w-3 h-3" />
                  Macro 10x
                </button>
              </div>
            </div>

            {/* Main Stage Image with Cinematic Zoom */}
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeSample.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={viewMode === 'macro' ? activeSample.macroImage : activeSample.image}
                    alt={activeSample.name}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${
                      viewMode === 'macro' ? 'scale-110 group-hover:scale-125' : 'group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Tagline Badge on Canvas */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div className="bg-black/70 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
                  <span className="font-serif italic text-xs sm:text-sm text-white/90">
                    "{activeSample.tagline}"
                  </span>
                </div>

                {/* Acoustic Sound Pill */}
                <button
                  onClick={toggleSoundEffect}
                  className="pointer-events-auto px-3 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 hover:border-accent text-white font-sans text-xs flex items-center gap-2 transition-all cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-accent animate-pulse" />
                      <span className="font-sans text-[0.68rem] text-accent font-semibold">{activeSample.acousticNote}</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-surface/60" />
                      <span className="font-sans text-[0.68rem] text-surface/70">Acoustic Tone</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Material Selection Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {MATERIAL_SAMPLES.map((sample, idx) => {
                const isSelected = activeSampleIndex === idx;
                return (
                  <button
                    key={sample.id}
                    onClick={() => {
                      setActiveSampleIndex(idx);
                      setIsPlayingAudio(false);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'border-accent bg-accent/20 ring-1 ring-accent/40 shadow-sm'
                        : 'border-white/10 bg-[#1C1C1C] hover:border-white/20 hover:bg-[#222]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/30 shrink-0 shadow-xs"
                      style={{ backgroundColor: sample.colorHex }}
                    />
                    <div className="truncate">
                      <span className="font-serif text-xs text-white font-medium block truncate">
                        {sample.name.split(' ')[0]} {sample.name.split(' ')[1]}
                      </span>
                      <span className="font-sans text-[0.58rem] text-surface/50 block truncate">
                        {sample.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Sensory Dossier & Architectural Spec Sheet (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#181614] to-[#101010] border border-accent/30 rounded-3xl p-5 sm:p-6 shadow-2xl relative">

            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div>
                  <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-accent font-bold block">
                    Curator's Dossier
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold">
                    Material Specification
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-surface/75 leading-relaxed mb-5">
                {activeSample.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {activeSample.specs.map((spec) => (
                  <div key={spec.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="block font-sans text-[0.6rem] uppercase tracking-wider text-surface/50 font-medium mb-0.5">
                      {spec.label}
                    </span>
                    <span className="font-serif text-xs sm:text-sm text-white font-bold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Provenance & Quality Badges */}
              <div className="space-y-2 font-sans text-[0.7rem] text-surface/70 pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    Provenance:
                  </span>
                  <span className="text-white font-medium">{activeSample.origin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    Quality Tier:
                  </span>
                  <span className="text-white font-medium">Bespoke Architectural Grade</span>
                </div>
              </div>
            </div>

            {/* Inquire on WhatsApp for Samples */}
            <div className="pt-2">
              <a
                href={`https://wa.me/919702763876?text=${encodeURIComponent(`Hello INCHES Interiors, I am interested in exploring ${activeSample.name} for my luxury interior project.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 bg-accent hover:bg-accent/90 text-white font-sans text-[0.68rem] tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 group"
              >
                <span>Request Physical Sample Box</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

        {/* 3 Pillars of The INCHES Standard (Bottom Feature Ribbon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          {CRAFT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between transition-all hover:border-accent/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-2xl text-accent/60 font-light group-hover:text-accent transition-colors">
                    {pillar.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-surface/70 font-sans text-[0.62rem] font-semibold border border-white/10">
                    {pillar.metric}
                  </span>
                </div>
                <h4 className="font-serif text-base sm:text-lg text-white font-medium mb-1.5">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs text-surface/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default SensoryAtelier;
