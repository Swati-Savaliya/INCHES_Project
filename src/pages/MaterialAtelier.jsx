import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Plus, Layers, Sliders } from 'lucide-react';

const MATERIALS_DATA = [
  {
    id: 'mat-1',
    name: 'Calacatta Oro Marble',
    category: 'Natural Stone',
    origin: 'Carrara, Italy',
    finish: 'Honed Silk',
    accentColor: '#D8C3A5',
    textureImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
    description: 'Rare Italian marble with warm amber and gold veining on a milky crystalline base.'
  },
  {
    id: 'mat-2',
    name: 'Smoked Fluted Oak',
    category: 'Architectural Wood',
    origin: 'Black Forest, Germany',
    finish: 'Matte Hardwax Oil',
    accentColor: '#8C6747',
    textureImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    description: 'Deep fumed European oak providing acoustic warmth and architectural cadence.'
  },
  {
    id: 'mat-3',
    name: 'Tuscan Lime Plaster',
    category: 'Artisan Finishes',
    origin: 'Tuscany, Italy',
    finish: 'Hand-Troweled Velvet',
    accentColor: '#D3C5B4',
    textureImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    description: 'Mineral lime plaster creating soft, natural shadow play under grazing light.'
  },
  {
    id: 'mat-4',
    name: 'Brushed Champagne Brass',
    category: 'Artisan Metals',
    origin: 'Bespoke Studio PVD',
    finish: 'Directional Satin',
    accentColor: '#C5A880',
    textureImg: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    description: 'Low-luster warm metal for bespoke cabinetry trims and recessed architectural profiles.'
  },
  {
    id: 'mat-5',
    name: 'Alpaca Bouclé Textile',
    category: 'Luxury Textiles',
    origin: 'Biella, Italy',
    finish: 'Tactile Weave',
    accentColor: '#E8E3DA',
    textureImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
    description: 'Heavyweight organic wool blend crafted for sculptural seating and sensory comfort.'
  },
  {
    id: 'mat-6',
    name: 'Bronze Ribbed Glass',
    category: 'Custom Glass',
    origin: 'Murano Heritage',
    finish: 'Fluted Reeded',
    accentColor: '#7A6248',
    textureImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    appImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
    description: 'Diffusion glass for subtle partitions, walk-in robes, and architectural lighting.'
  }
];

const CATEGORIES = ['All', 'Natural Stone', 'Architectural Wood', 'Artisan Metals', 'Luxury Textiles'];

const MaterialAtelier = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS_DATA[0]);
  const [swatchTray, setSwatchTray] = useState([MATERIALS_DATA[0].id, MATERIALS_DATA[1].id]);

  const filteredMaterials = activeCategory === 'All'
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
    const msg = `Hello INCHES Studio, I would like to request physical material samples for: [${selectedNames}].`;
    return `https://wa.me/919702763876?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="material-atelier" className="relative w-full bg-[#FAF6EE] text-primary py-12 md:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-primary/10">
      
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Minimal Centered Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-[0.65rem] tracking-[0.25em] uppercase font-bold text-accent mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Tactile Material Palette</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-medium">
            Material <span className="italic font-light text-accent">Atelier &amp; Swatches</span>
          </h2>
          
          {/* Clean Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1 rounded-full font-sans text-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white font-medium shadow-xs'
                    : 'bg-white/70 text-primary/70 hover:text-primary hover:bg-white border border-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Swatch & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

          {/* Left: Swatch Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              const isInTray = swatchTray.includes(mat.id);

              return (
                <motion.div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  whileHover={{ y: -3 }}
                  className={`relative group rounded-2xl p-2.5 bg-white border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'border-accent shadow-md ring-1 ring-accent'
                      : 'border-primary/10 hover:border-accent/40 shadow-xs'
                  }`}
                >
                  {/* Swatch Image */}
                  <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden mb-2.5 bg-[#EFECE6]">
                    <img
                      src={mat.textureImg}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />

                    {/* Add to Tray Button */}
                    <button
                      onClick={(e) => toggleSwatch(mat.id, e)}
                      title={isInTray ? 'Remove from tray' : 'Add to tray'}
                      className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isInTray
                          ? 'bg-accent text-white shadow-xs'
                          : 'bg-black/60 text-white/90 hover:bg-accent'
                      }`}
                    >
                      {isInTray ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Clean Info */}
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm text-primary font-medium truncate">
                      {mat.name}
                    </h3>
                    <p className="font-sans text-[0.62rem] text-primary/60 truncate mt-0.5">
                      {mat.origin} • {mat.finish}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Condensed Clean Preview (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-primary/10 p-4 shadow-sm space-y-3">
            
            {/* Big Applied Image */}
            <div className="relative w-full h-40 rounded-xl overflow-hidden bg-[#FAF6EE]">
              <img
                src={selectedMaterial.appImg}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[0.6rem] uppercase tracking-wider text-accent font-semibold block">
                  {selectedMaterial.origin}
                </span>
                <h4 className="font-serif text-base font-medium">
                  {selectedMaterial.name}
                </h4>
              </div>
            </div>

            {/* Concise Description */}
            <p className="font-sans text-xs text-primary/75 leading-relaxed font-light">
              {selectedMaterial.description}
            </p>

            {/* Clean Spec Line */}
            <div className="py-2 px-3 rounded-xl bg-[#FAF6EE] border border-primary/10 flex items-center justify-between text-xs">
              <span className="text-primary/60 text-[0.68rem] uppercase font-medium">Surface Spec</span>
              <span className="font-medium text-primary text-[0.72rem]">{selectedMaterial.finish}</span>
            </div>

            {/* Minimal Palette Tray & WhatsApp Request */}
            <div className="pt-2 border-t border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[0.65rem] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                  <Sliders className="w-3 h-3" />
                  Palette Tray ({swatchTray.length}/4)
                </span>
                <span className="text-[0.6rem] text-primary/50">Selected swatches</span>
              </div>

              {/* Swatch Chips */}
              <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1">
                {MATERIALS_DATA.filter(m => swatchTray.includes(m.id)).map(sw => (
                  <div
                    key={sw.id}
                    onClick={() => setSelectedMaterial(sw)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FAF6EE] border border-primary/10 shrink-0 cursor-pointer hover:border-accent text-xs"
                  >
                    <img src={sw.textureImg} alt={sw.name} className="w-3 h-3 rounded-full object-cover" />
                    <span className="text-[0.68rem] font-medium text-primary">{sw.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppSampleUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 shadow-md shadow-accent/20 transition-all"
              >
                <span>Request Sample Box</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MaterialAtelier;
