import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Check, Plus, Layers, Sliders, ShieldCheck, Compass } from 'lucide-react';

const MATERIALS_DATA = [
  {
    id: 'mat-1',
    name: 'Calacatta Oro Marble',
    category: 'Natural Stone',
    origin: 'Carrara, Italy',
    finish: 'Honed Silk & Micro-Bevel',
    accentColor: '#D8C3A5',
    textureImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
    description: 'Rare Italian marble with warm amber and gold veining on milky crystalline base.',
    pairings: ['Smoked Fluted Oak', 'Brushed Champagne Brass']
  },
  {
    id: 'mat-2',
    name: 'Smoked Fluted Oak',
    category: 'Architectural Wood',
    origin: 'Black Forest, Germany',
    finish: 'Matte Hardwax Oil & 12mm Ribs',
    accentColor: '#8C6747',
    textureImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    description: 'Deep fumed European oak providing acoustic warmth and architectural cadence.',
    pairings: ['Calacatta Oro', 'Textured Bouclé']
  },
  {
    id: 'mat-3',
    name: 'Tuscan Lime Plaster',
    category: 'Artisan Wall Finish',
    origin: 'Tuscany, Italy',
    finish: 'Hand-Troweled Velvet Texture',
    accentColor: '#D3C5B4',
    textureImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    description: 'Breathable, non-toxic mineral plaster creating soft shadow play under grazing light.',
    pairings: ['Brushed Champagne Brass', 'Ribbed Bronze Glass']
  },
  {
    id: 'mat-4',
    name: 'Brushed Champagne Brass',
    category: 'Artisan Metals',
    origin: 'Bespoke Studio PVD',
    finish: 'Directional Satin & Anti-Fingerprint',
    accentColor: '#C5A880',
    textureImg: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    description: 'Warm, low-luster architectural metal for bespoke cabinetry profiles and recessed trims.',
    pairings: ['Calacatta Oro', 'Smoked Oak']
  },
  {
    id: 'mat-5',
    name: 'Alpaca Bouclé Textile',
    category: 'Luxury Textiles',
    origin: 'Biella, Italy',
    finish: 'High-Density Tactile Weave',
    accentColor: '#E8E3DA',
    textureImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
    description: 'Heavyweight organic wool blend crafted for sculptural sofas and sensory comfort.',
    pairings: ['Tuscan Lime Plaster', 'Smoked Fluted Oak']
  },
  {
    id: 'mat-6',
    name: 'Bronze Ribbed Glass',
    category: 'Custom Glass',
    origin: 'Murano Heritage',
    finish: 'Fluted Reeded & Acoustically Laminated',
    accentColor: '#7A6248',
    textureImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
    description: 'Diffusion glass for privacy screens, walk-in closets, and spatial light refractions.',
    pairings: ['Brushed Champagne Brass', 'Calacatta Oro']
  }
];

const CATEGORIES = ['All Materials', 'Natural Stone', 'Architectural Wood', 'Artisan Metals', 'Luxury Textiles'];

const MaterialAtelier = () => {
  const [activeCategory, setActiveCategory] = useState('All Materials');
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS_DATA[0]);
  const [swatchTray, setSwatchTray] = useState([MATERIALS_DATA[0].id, MATERIALS_DATA[1].id]);

  const filteredMaterials = activeCategory === 'All Materials'
    ? MATERIALS_DATA
    : MATERIALS_DATA.filter(m => m.category === activeCategory);

  const toggleSwatch = (id, e) => {
    e.stopPropagation();
    if (swatchTray.includes(id)) {
      if (swatchTray.length > 1) {
        setSwatchTray(swatchTray.filter(item => item !== id));
      }
    } else {
      if (swatchTray.length < 4) {
        setSwatchTray([...swatchTray, id]);
      }
    }
  };

  const getWhatsAppSampleUrl = () => {
    const selectedNames = MATERIALS_DATA.filter(m => swatchTray.includes(m.id)).map(m => m.name).join(', ');
    const msg = `Hello INCHES Studio, I have curated a tactile material palette on your website consisting of: [${selectedNames}]. I would like to request physical samples and discuss interior specifications for my residence.`;
    return `https://wa.me/919702763876?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="material-atelier" className="relative w-full bg-[#111111] text-surface py-12 md:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#C5A880]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Centered Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-6 pb-4 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2.5 mb-1.5"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent" />
              Sensory Tactile Palette
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4 text-center"
          >
            Material <span className="italic font-light text-accent font-serif">Atelier &amp; Swatches</span>
          </motion.h2>

          {/* Category Filter Pills (Centered) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-sans text-xs transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? 'bg-accent text-white font-semibold shadow-md shadow-accent/20'
                    : 'bg-white/5 text-surface/70 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left Swatch Grid (7 Cols), Right Interactive Preview Studio (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left: Swatch Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {filteredMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              const isInTray = swatchTray.includes(mat.id);

              return (
                <motion.div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  whileHover={{ y: -4 }}
                  className={`relative group rounded-2xl p-3 bg-[#181818] border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${isSelected
                      ? 'border-accent shadow-[0_0_25px_rgba(197,168,128,0.25)] ring-1 ring-accent'
                      : 'border-white/10 hover:border-white/30'
                    }`}
                >
                  {/* Swatch Image with Texture Zoom */}
                  <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3 bg-[#222]">
                    <img
                      src={mat.textureImg}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    {/* Color dot & origin */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[0.58rem] text-surface/80">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mat.accentColor }} />
                      <span className="truncate max-w-[80px]">{mat.origin.split(',')[0]}</span>
                    </div>

                    {/* Tray Check / Plus Button */}
                    <button
                      onClick={(e) => toggleSwatch(mat.id, e)}
                      title={isInTray ? 'Remove from palette tray' : 'Add to palette tray'}
                      className={`absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${isInTray
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-black/60 text-white/80 hover:bg-white hover:text-black border border-white/20'
                        }`}
                    >
                      {isInTray ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>

                    {/* Category Label at bottom */}
                    <span className="absolute bottom-2 left-2.5 text-[0.58rem] font-sans text-accent font-semibold tracking-wider uppercase">
                      {mat.category}
                    </span>
                  </div>

                  {/* Swatch Info */}
                  <div>
                    <h4 className="font-serif text-sm text-white font-medium truncate mb-0.5">
                      {mat.name}
                    </h4>
                    <p className="font-sans text-[0.62rem] text-surface/60 truncate">
                      {mat.finish}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Curated Studio Moodboard Preview (Compact Height) */}
          <div className="lg:col-span-5 bg-[#161616] rounded-3xl border border-white/15 p-4 sm:p-5 shadow-2xl relative overflow-hidden">

            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedMaterial.accentColor }} />
                <span className="font-sans text-[0.68rem] text-accent font-semibold uppercase tracking-wider">
                  Material Detail &amp; Application
                </span>
              </div>
              <span className="font-sans text-[0.62rem] text-surface/60">
                {selectedMaterial.origin}
              </span>
            </div>

            {/* Selected Material Big Image in Application (Reduced Height) */}
            <div className="relative w-full h-36 sm:h-40 rounded-2xl overflow-hidden mb-3 border border-white/10 bg-[#222]">
              <img
                src={selectedMaterial.appImg}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="px-2 py-0.5 rounded bg-accent text-white font-sans text-[0.55rem] font-bold tracking-wider uppercase">
                  Installed In Living Space
                </span>
                <h3 className="font-serif text-base text-white font-medium mt-0.5">
                  {selectedMaterial.name}
                </h3>
              </div>
            </div>

            {/* Material Specifications */}
            <div className="space-y-2 mb-3">
              <p className="font-sans text-[0.72rem] text-surface/80 leading-relaxed font-light">
                {selectedMaterial.description}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-white/10">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-sans text-[0.56rem] text-accent uppercase tracking-wider mb-0.5">Finish Spec</span>
                  <span className="font-sans text-[0.68rem] text-white truncate block font-medium">{selectedMaterial.finish}</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-sans text-[0.56rem] text-accent uppercase tracking-wider mb-0.5">Recommended Pairing</span>
                  <span className="font-sans text-[0.68rem] text-white truncate block font-medium">{selectedMaterial.pairings.join(' + ')}</span>
                </div>
              </div>
            </div>

            {/* Custom Curated Palette Tray */}
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[0.62rem] text-accent uppercase font-bold tracking-wider flex items-center gap-1">
                  <Sliders className="w-3 h-3" />
                  Your Palette Tray ({swatchTray.length}/4)
                </span>
                <span className="font-sans text-[0.58rem] text-surface/50">Ready to sample</span>
              </div>

              {/* Swatch Chips */}
              <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto pb-0.5">
                {MATERIALS_DATA.filter(m => swatchTray.includes(m.id)).map(sw => (
                  <div
                    key={sw.id}
                    onClick={() => setSelectedMaterial(sw)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#222] border border-white/15 shrink-0 cursor-pointer hover:border-accent transition-colors"
                  >
                    <img src={sw.textureImg} alt={sw.name} className="w-3.5 h-3.5 rounded-full object-cover" />
                    <span className="font-sans text-[0.68rem] text-white font-medium">{sw.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppSampleUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans text-[0.68rem] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 shadow-md shadow-accent/20 transition-all cursor-pointer"
              >
                <span>Request Physical Sample Box</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MaterialAtelier;
