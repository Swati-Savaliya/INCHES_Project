import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Compass } from 'lucide-react';

const PILLARS = [
  {
    id: '01',
    title: 'Proportion & Harmony',
    tag: 'Sacred Scale',
    desc: 'Golden ratio mathematics calibrated to induce effortless mental stillness.',
    spec: '1.618 Φ',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'Tactile Materiality',
    tag: 'Raw & Living',
    desc: 'Hand-troweled lime plaster, fumed oak, and unlacquered champagne brass.',
    spec: '100% Pure',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'Sculptural Light',
    tag: 'Chiaroscuro',
    desc: 'Indirect circadian amber grazes sculpting spatial depth without glare.',
    spec: '2700K Glow',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'Quiet Restraint',
    tag: 'Timeless Space',
    desc: 'Concealed monolithic joinery stripping away chaos to reveal sanctuary.',
    spec: '0-Fad',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  }
];

const PhilosophyPillarsGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#FDF9F1] text-primary py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-t border-primary/10 overflow-hidden">

      {/* Ambient subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Minimal Light Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-primary/10">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-5 h-[1.5px] bg-accent" />
              <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Compass className="w-3 h-3 text-accent" />
                Design Principles
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight">
              The Four Spatial <span className="italic font-light text-accent">Disciplines.</span>
            </h2>
          </div>

          <a
            href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20consult%20about%20your%20design%20philosophy."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-accent/90 text-xs font-sans uppercase tracking-[0.2em] transition-all font-bold self-start sm:self-auto shadow-md hover:shadow-lg hover:scale-103 cursor-pointer"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ===================== LIGHT 4-PORTAL EXPANDABLE ACCORDION GRID ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[460px] md:h-[500px]">
          {PILLARS.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
                layout
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 ${isHovered
                  ? 'border-accent md:flex-[1.6] shadow-[0_25px_50px_rgba(138,109,84,0.22)] ring-1 ring-accent/40'
                  : 'border-primary/10 md:flex-[1] hover:border-primary/25 shadow-sm'
                  }`}
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#EFECE6]">
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover brightness-[0.88] contrast-[1.08]"
                  />
                  {/* Subtle Grain & Gradient Vignette for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                </div>

                {/* Top Number & Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent drop-shadow-md">
                    {pillar.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[0.62rem] font-sans tracking-widest uppercase text-white font-semibold shadow-sm">
                    {pillar.tag}
                  </span>
                </div>

                {/* Bottom Content (Minimal & Punchy) */}
                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium drop-shadow-md">
                      {pillar.title}
                    </h3>
                    <span className="font-mono text-xs text-accent font-semibold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-accent/40 shadow-sm">
                      {pillar.spec}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-white/80 leading-relaxed font-light line-clamp-2 drop-shadow-sm">
                    {pillar.desc}
                  </p>

                  <div className="pt-1 flex items-center gap-1.5 text-accent text-[0.68rem] font-sans font-bold tracking-widest uppercase">
                    <span>Studio Principle</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Active Glow Bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-white/80 to-accent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default PhilosophyPillarsGrid;
