import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Ruler,
  Layers,
  Sun
} from 'lucide-react';

const SPECIMENS = [
  {
    id: '01',
    code: 'Φ 1.618',
    title: 'Golden Geometry',
    tag: 'Sacred Scale',
    material: 'Roman Travertine',
    tolerance: '1.618 Scale Proportions',
    swatches: ['#D5C9B7', '#8A6D54', '#2C2825'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    icon: Compass
  },
  {
    id: '02',
    code: '100% Bio',
    title: 'Tactile Patina',
    tag: 'Living Texture',
    material: 'Smoked Oak & Brass',
    tolerance: 'Zero Synthetic Materials',
    swatches: ['#4A3C32', '#C6A972', '#E2DCD2'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    icon: Layers
  },
  {
    id: '03',
    code: '2700K',
    title: 'Circadian Light',
    tag: 'Amber Grazing',
    material: 'Fluted Amber Optics',
    tolerance: 'Low-Glare 98+ CRI Spec',
    swatches: ['#FFD18C', '#2A241F', '#8C8276'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    icon: Sun
  },
  {
    id: '04',
    code: '0.5mm',
    title: 'Zero-Fad Joinery',
    tag: 'Concealed Craft',
    material: 'Flush Concealed CNC',
    tolerance: '0.5mm Precision Reveal',
    swatches: ['#1C1A17', '#C6A972', '#5A524A'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
    icon: Ruler
  }
];

const PhilosophyManifesto = () => {
  return (
    <section className="relative w-full bg-[#0E0E0E] text-white py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
      
      {/* Ambient soft lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[94rem] mx-auto relative z-10">

        {/* ===================== MINIMAL CENTERED HEADER ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center max-w-xl mx-auto mb-7 pb-3.5 border-b border-white/10"
        >
          <div className="flex items-center justify-center space-x-2.5 mb-1.5">
            <span className="w-6 sm:w-10 h-[1.5px] bg-accent" />
            <span className="font-mono text-[0.62rem] sm:text-xs tracking-[0.3em] uppercase text-accent font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent" />
              SPATIAL MANIFESTO • 04 SPECIMENS
            </span>
            <span className="w-6 sm:w-10 h-[1.5px] bg-accent" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
            Architectural Poise &amp; <span className="italic font-light text-accent font-serif">Living Specimen.</span>
          </h2>
        </motion.div>

        {/* ===================== PROPER ARCHITECTURAL 4-CARD MATRIX ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIMENS.map((specimen, sIdx) => {
            const Icon = specimen.icon;

            return (
              <motion.div
                key={specimen.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group relative bg-[#131313]/90 hover:bg-[#181818] border border-white/10 hover:border-accent/60 rounded-2xl p-4 backdrop-blur-xl transition-all duration-400 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(138,109,84,0.18)]"
              >
                {/* Top Animated Gold Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent/40 via-accent to-accent/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Top Bar: Index & Standard Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-accent">
                      {specimen.id} //
                    </span>
                    <span className="font-sans text-[0.65rem] uppercase tracking-wider text-white/50 font-semibold">
                      {specimen.tag}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Architectural Visual Container */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3.5 bg-black">
                  <img
                    src={specimen.image}
                    alt={specimen.title}
                    className="w-full h-full object-cover brightness-[0.88] contrast-[1.08] group-hover:scale-106 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Corner Accent Ticks */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-accent/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-accent/60 pointer-events-none" />

                  {/* Float Spec Code Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="font-mono text-[0.65rem] text-white font-bold bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/20 shadow-md">
                      {specimen.code}
                    </span>
                  </div>

                  {/* Material Overlay on Image Bottom */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] text-accent font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-accent/30">
                      {specimen.material}
                    </span>
                    <div className="flex items-center gap-1">
                      {specimen.swatches.map((col, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: col }}
                          className="w-2.5 h-2.5 rounded-full border border-white/30 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Title & Tolerance Footer */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h3 className="font-serif text-base text-white font-normal group-hover:text-accent transition-colors duration-300">
                      {specimen.title}
                    </h3>
                    <span className="font-mono text-[0.65rem] text-white/40 block mt-0.5">
                      {specimen.tolerance}
                    </span>
                  </div>

                  <a
                    href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20exploring%20your%20design%20philosophy."
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-accent border border-white/10 group-hover:border-accent text-white/60 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PhilosophyManifesto;
