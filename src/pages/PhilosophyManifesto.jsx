import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const SPECIMENS = [
  {
    id: '01',
    code: 'Φ 1.618',
    title: 'Golden Geometry',
    tag: 'Sacred Scale',
    desc: 'Unbroken sightlines calculated according to the golden ratio to bring natural serenity and visual calm to spatial volume.',
    material: 'Roman Travertine & Shadow Gap',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    specLabel: 'Proportional Harmony'
  },
  {
    id: '02',
    code: '100% Bio',
    title: 'Tactile Patina',
    tag: 'Living Texture',
    desc: 'Hand-troweled lime plaster and fumed Austrian oak that age with enduring elegance and rich organic character.',
    material: 'Smoked Oak & Champagne Brass',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400',
    specLabel: 'Living Materiality'
  },
  {
    id: '03',
    code: '2700K',
    title: 'Circadian Light',
    tag: 'Amber Grazing',
    desc: 'Indirect low-glare grazes sculpting spatial depth and supporting natural human wellness cycles from dawn to dusk.',
    material: 'Diffused Fluted Glass & Amber LEDs',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400',
    specLabel: 'Sculptural Lighting'
  },
  {
    id: '04',
    code: '0.5mm',
    title: 'Zero-Fad Joinery',
    tag: 'Concealed Craft',
    desc: 'Monolithic floor-to-ceiling facades with invisible pivot mechanics and timeless architectural silhouettes.',
    material: 'Concealed Mechanics & Flush Trims',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1400',
    specLabel: 'Precision Joinery'
  }
];

const PhilosophyManifesto = () => {
  const [activeId, setActiveId] = useState('01');
  const activeSpecimen = SPECIMENS.find((s) => s.id === activeId) || SPECIMENS[0];

  return (
    <section className="relative w-full bg-[#0E0E0E] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-14 border-t border-white/10 overflow-hidden">
      {/* Ambient warm lighting glows */}
      <div className="absolute top-1/3 left-1/5 w-[420px] h-[220px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[180px] bg-[#C5A880]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[92rem] mx-auto relative z-10">

        {/* Clean Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-accent" />
            <span className="font-mono text-[0.68rem] sm:text-xs tracking-[0.3em] uppercase text-accent font-bold">
              SPATIAL MANIFESTO & PRECISION ANATOMY
            </span>
          </div>

          <div className="flex items-center gap-5 text-[0.68rem] font-mono text-white/50">
            <span className="flex items-center gap-2 text-white/80 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              0.5mm Precision
            </span>
            <span className="text-white/25">•</span>
            <span>100% Living Materials</span>
            <span className="text-white/25 hidden md:inline">•</span>
            <span className="hidden md:inline">Generational Longevity</span>
          </div>
        </div>

        {/* Main 2-Column Balanced Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: 4 Clean Minimal Specimen Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {SPECIMENS.map((specimen) => {
              const isSelected = activeId === specimen.id;
              return (
                <button
                  key={specimen.id}
                  onClick={() => setActiveId(specimen.id)}
                  className={`group p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer flex items-center justify-between overflow-hidden backdrop-blur-md ${
                    isSelected
                      ? 'bg-white/[0.07] border-accent/80 text-white shadow-[0_10px_35px_rgba(0,0,0,0.6)] ring-1 ring-accent/30'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {/* Active Indicator Strip */}
                  {isSelected && (
                    <motion.div
                      layoutId="manifestoActiveBar"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent"
                    />
                  )}

                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`font-mono text-sm font-bold shrink-0 transition-colors ${isSelected ? 'text-accent' : 'text-white/40 group-hover:text-accent/80'}`}>
                      {specimen.id}
                    </span>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-sm sm:text-base font-medium text-white tracking-wide truncate">
                          {specimen.title}
                        </h4>
                      </div>
                      <p className="font-sans text-[0.72rem] text-white/50 truncate font-light mt-0.5">
                        {specimen.material}
                      </p>
                    </div>
                  </div>

                  <span className={`font-mono text-xs px-3 py-1 rounded-lg border shrink-0 ml-3 transition-colors ${
                    isSelected
                      ? 'bg-accent/20 border-accent/50 text-accent font-semibold'
                      : 'bg-white/5 border-white/10 text-white/50 group-hover:border-white/20'
                  }`}>
                    {specimen.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Stage & Live Spec Focus */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/15 bg-[#141414] relative flex flex-col md:flex-row min-h-[340px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

            {/* Visual Image Preview */}
            <div className="w-full md:w-1/2 relative h-56 md:h-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecimen.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full absolute inset-0"
                >
                  <img
                    src={activeSpecimen.image}
                    alt={activeSpecimen.title}
                    className="w-full h-full object-cover brightness-[0.92] contrast-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
                </motion.div>
              </AnimatePresence>

              {/* Float Badge on Image */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-xl border border-white/20 text-xs font-mono text-white font-bold shadow-lg">
                  {activeSpecimen.code}
                </span>
              </div>
            </div>

            {/* Content & Action on Right */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between relative z-10 bg-[#141414]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecimen.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent font-bold">
                      {activeSpecimen.tag}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      Standard {activeSpecimen.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3 tracking-tight">
                    {activeSpecimen.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed font-light mb-6">
                    {activeSpecimen.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Minimal Specs & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[0.6rem] font-mono uppercase tracking-widest text-white/40 block font-medium">
                    Material Specification
                  </span>
                  <span className="font-serif text-xs sm:text-sm text-accent font-semibold truncate block mt-0.5">
                    {activeSpecimen.material}
                  </span>
                </div>

                <a
                  href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20exploring%20your%20design%20philosophy%20and%20would%20like%20to%20consult."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-wider uppercase font-bold transition-all flex items-center gap-2 shrink-0 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Consult</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PhilosophyManifesto;

