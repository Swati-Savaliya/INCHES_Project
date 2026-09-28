import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  Home,
  Building2,
  Castle,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  ArrowUpRight,
  Calendar,
  Layers,
  Check
} from 'lucide-react';

const PROPERTY_TYPES = [
  {
    id: 'residence_4bhk',
    name: '3/4 BHK Luxury Flat',
    subtitle: 'Apartment',
    icon: Home,
    baseRate: 2200,
    defaultArea: 2400,
    minArea: 1200,
    maxArea: 4000
  },
  {
    id: 'penthouse',
    name: 'Sky Penthouse',
    subtitle: 'Duplex & Terrace',
    icon: Castle,
    baseRate: 2800,
    defaultArea: 4200,
    minArea: 2500,
    maxArea: 7000
  },
  {
    id: 'villa',
    name: 'Bespoke Villa',
    subtitle: 'Estate & Bungalow',
    icon: Building2,
    baseRate: 3200,
    defaultArea: 5500,
    minArea: 3000,
    maxArea: 10000
  },
  {
    id: 'boutique_commercial',
    name: 'Executive Studio',
    subtitle: 'Boutique Workspace',
    icon: Briefcase,
    baseRate: 2000,
    defaultArea: 1800,
    minArea: 800,
    maxArea: 4500
  }
];

const DESIGN_STYLES = [
  {
    id: 'quiet_luxury',
    name: 'Quiet Luxury',
    tag: 'Earthy Travertine & Brass',
    multiplier: 1.05,
    color: '#D4C4B5'
  },
  {
    id: 'neo_classical',
    name: 'Neo-Classical',
    tag: 'Statuario Marble & Boiserie',
    multiplier: 1.15,
    color: '#E8E4DF'
  },
  {
    id: 'modern_brutalist',
    name: 'Organic Modern',
    tag: 'Fluted Glass & Micro-Cement',
    multiplier: 1.08,
    color: '#9E978E'
  },
  {
    id: 'wabi_sabi',
    name: 'Wabi-Sabi Warmth',
    tag: 'Lime Plaster & Reclaimed Teak',
    multiplier: 1.10,
    color: '#8A6D54'
  }
];

const SCOPE_MODULES = [
  { id: 'civil', label: 'Turnkey Civil & Ceiling', cost: 500, default: true },
  { id: 'woodwork', label: 'Italian Millwork & Wardrobes', cost: 800, default: true },
  { id: 'lighting', label: 'Architectural Anti-Glare Lighting', cost: 300, default: true },
  { id: 'automation', label: 'Smart Home & HVAC Automation', cost: 380, default: false },
  { id: 'styling', label: 'Fine Art & Styling Décor', cost: 280, default: false }
];

const BespokeEstimator = () => {
  const [selectedProperty, setSelectedProperty] = useState(PROPERTY_TYPES[0]);
  const [area, setArea] = useState(PROPERTY_TYPES[0].defaultArea);
  const [selectedStyle, setSelectedStyle] = useState(DESIGN_STYLES[0]);
  const [activeModules, setActiveModules] = useState(
    SCOPE_MODULES.filter(m => m.default).map(m => m.id)
  );
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultForm, setConsultForm] = useState({ name: '', phone: '', city: 'Surat' });

  const handlePropertySelect = (prop) => {
    setSelectedProperty(prop);
    setArea(prop.defaultArea);
  };

  const toggleModule = (id) => {
    setActiveModules(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculation Logic
  const addedCost = SCOPE_MODULES
    .filter(m => activeModules.includes(m.id) && !m.default)
    .reduce((acc, curr) => acc + curr.cost, 0);

  const ratePerSqFt = Math.round((selectedProperty.baseRate + addedCost) * selectedStyle.multiplier);
  const totalCostLakhs = Math.round((ratePerSqFt * area) / 100000);
  const estimatedWeeks = Math.max(8, Math.min(24, Math.round(8 + area / 900 + activeModules.length * 1.2)));

  const handleWhatsAppQuote = () => {
    const included = SCOPE_MODULES.filter(m => activeModules.includes(m.id)).map(m => ` • ${m.label}`).join('\n');
    const msg = `*INCHES INTERIORS — BESPOKE ESTIMATE INQUIRY*\n━━━━━━━━━━━━━━━━━━━━━━\n• *Space:* ${selectedProperty.name} (${area.toLocaleString()} sq.ft)\n• *Aesthetic Theme:* ${selectedStyle.name} (${selectedStyle.tag})\n• *Scope Modules:*\n${included}\n• *Timeline:* ${estimatedWeeks}-${estimatedWeeks + 2} Weeks\n• *Estimated Investment:* ₹${totalCostLakhs} - ${Math.round(totalCostLakhs * 1.15)} Lakhs\n\nHello INCHES Studio, I would like to discuss this turnkey project.`;
    window.open(`https://wa.me/919702763876?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="consult" className="relative w-full bg-[#0d0d0d] text-surface py-7 md:py-9 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[250px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[200px] bg-[#8A6D54]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Ultra-Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1px] bg-accent" />
              <span className="font-sans text-[0.6rem] tracking-[0.3em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Calculator className="w-3 h-3" />
                Spatial Investment Studio
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-tight">
              Bespoke Turnkey <span className="italic font-light text-accent font-serif">Scope Planner</span>
            </h2>
          </div>

          <p className="font-sans text-xs text-surface/60 max-w-sm leading-snug">
            Configure property specifications &amp; aesthetics for an instant live turnkey estimate.
          </p>
        </div>

        {/* Compact 2-Column Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* Left Column: Interactive Controls (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3 bg-[#141414] border border-white/10 rounded-2xl p-4 sm:p-4.5 shadow-xl">

            {/* 1. Property Type Selector */}
            <div>
              <label className="block font-sans text-[0.65rem] uppercase tracking-wider text-surface/60 font-semibold mb-1.5 flex items-center justify-between">
                <span>1. Property Type</span>
                <span className="text-accent">{selectedProperty.name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {PROPERTY_TYPES.map((prop) => {
                  const Icon = prop.icon;
                  const isSelected = selectedProperty.id === prop.id;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => handlePropertySelect(prop)}
                      className={`p-2 rounded-xl border text-left transition-all flex flex-col justify-between h-[58px] cursor-pointer ${isSelected
                        ? 'border-accent bg-accent/15 ring-1 ring-accent/40 shadow-xs'
                        : 'border-white/10 bg-[#1A1A1A] hover:border-white/20'
                        }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent' : 'text-surface/60'}`} />
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      </div>
                      <span className="font-sans text-[0.68rem] text-white font-medium truncate w-full">
                        {prop.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Carpet Area Slider */}
            <div className="bg-[#181818] border border-white/5 rounded-xl p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-sans text-[0.65rem] uppercase tracking-wider text-surface/60 font-semibold">
                  2. Carpet Area
                </span>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-sans text-[0.7rem] font-bold">
                  {area.toLocaleString()} sq.ft
                </span>
              </div>

              <input
                type="range"
                min={selectedProperty.minArea}
                max={selectedProperty.maxArea}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
              />

              <div className="flex justify-between font-sans text-[0.6rem] text-surface/40 mt-1">
                <span>{selectedProperty.minArea.toLocaleString()} sq.ft</span>
                <span className="text-surface/70">~{Math.round(area * 0.35)} sq.ft Living • ~{Math.round(area * 0.40)} sq.ft Suites</span>
                <span>{selectedProperty.maxArea.toLocaleString()} sq.ft</span>
              </div>
            </div>

            {/* 3. Design Aesthetic Pills */}
            <div>
              <label className="block font-sans text-[0.65rem] uppercase tracking-wider text-surface/60 font-semibold mb-1.5 flex items-center justify-between">
                <span>3. Aesthetic Theme</span>
                <span className="text-accent">{selectedStyle.name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {DESIGN_STYLES.map((style) => {
                  const isSelected = selectedStyle.id === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`p-2 rounded-xl border text-left transition-all flex flex-col justify-between h-[54px] cursor-pointer ${isSelected
                        ? 'border-accent bg-accent/15 ring-1 ring-accent/40 shadow-xs'
                        : 'border-white/10 bg-[#1A1A1A] hover:border-white/20'
                        }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 border border-black/20"
                          style={{ backgroundColor: style.color }}
                        />
                        <span className="font-serif text-[0.72rem] text-white font-medium truncate">
                          {style.name}
                        </span>
                      </div>
                      <span className="font-sans text-[0.58rem] text-surface/50 truncate w-full">
                        {style.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Scope Deliverables (Compact Chips) */}
            <div>
              <label className="block font-sans text-[0.65rem] uppercase tracking-wider text-surface/60 font-semibold mb-1.5 flex items-center justify-between">
                <span>4. Scope Modules</span>
                <span className="text-surface/40 text-[0.6rem]">{activeModules.length} Modules Selected</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SCOPE_MODULES.map((mod) => {
                  const isActive = activeModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`px-2.5 py-1.5 rounded-lg border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${isActive
                        ? 'border-accent/50 bg-accent/10 text-white'
                        : 'border-white/10 bg-[#181818] text-surface/60 hover:border-white/20'
                        }`}
                    >
                      <span className="font-sans text-[0.65rem] truncate mr-2">{mod.label}</span>
                      <div className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center shrink-0 ${isActive ? 'bg-accent border-accent text-white' : 'border-white/20 bg-white/5'
                        }`}>
                        {isActive && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Turnkey Proposal Cockpit (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#1A1816] to-[#121110] border border-accent/35 rounded-2xl p-4 sm:p-4.5 shadow-2xl relative">

            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div>
              {/* Cockpit Header */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                <div>
                  <span className="font-sans text-[0.58rem] uppercase tracking-[0.25em] text-accent font-bold block">
                    Turnkey Proposal Cockpit
                  </span>
                  <h3 className="font-serif text-base text-white font-medium">
                    Investment Projection
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Investment Display */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 mb-3">
                <span className="font-sans text-[0.6rem] uppercase tracking-wider text-surface/55 block mb-0.5">
                  Estimated Turnkey Bracket
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    ₹{totalCostLakhs} - {Math.round(totalCostLakhs * 1.15)}
                  </span>
                  <span className="font-sans text-sm text-accent font-semibold">
                    Lakhs*
                  </span>
                </div>
                <p className="font-sans text-[0.58rem] text-surface/40 mt-0.5">
                  *Based on ₹{ratePerSqFt}/sq.ft for {area.toLocaleString()} sq.ft turnkey execution.
                </p>
              </div>

              {/* Execution Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div>
                    <span className="block font-sans text-[0.55rem] uppercase tracking-wider text-surface/50">Timeline</span>
                    <span className="font-serif text-xs text-white font-bold">{estimatedWeeks}-{estimatedWeeks + 2} Wks</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <div>
                    <span className="block font-sans text-[0.55rem] uppercase tracking-wider text-surface/50">Warranty</span>
                    <span className="font-serif text-xs text-white font-bold">10-Yr Assured</span>
                  </div>
                </div>
              </div>

              {/* Summary Spec Details */}
              <div className="space-y-1 font-sans text-[0.65rem] text-surface/65 pb-3 mb-3 border-b border-white/10">
                <div className="flex justify-between">
                  <span>Configuration:</span>
                  <span className="text-white font-medium">{selectedProperty.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Aesthetic Style:</span>
                  <span className="text-accent font-medium">{selectedStyle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scope Inclusions:</span>
                  <span className="text-white font-medium">{activeModules.length} of 5 modules</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-1.5">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-2.5 bg-accent hover:bg-accent/90 text-white font-sans text-[0.65rem] tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-accent/20 group cursor-pointer"
              >
                <span>Get Detailed Proposal on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="w-full py-2 bg-white/10 hover:bg-white/15 text-white font-sans text-[0.62rem] tracking-[0.2em] uppercase font-medium rounded-xl border border-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-accent" />
                <span>Book Private Studio Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#141414] border border-white/15 rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div>
                  <span className="font-sans text-[0.62rem] uppercase tracking-widest text-accent font-bold">
                    INCHES Concierge
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold">
                    Private Consultation
                  </h3>
                </div>
                <button
                  onClick={() => setIsConsultModalOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const text = `Hello INCHES, I want to book a private consultation for a ${selectedProperty.name} (${area} sq.ft) in ${consultForm.city}.\nName: ${consultForm.name}\nPhone: ${consultForm.phone}`;
                  window.open(`https://wa.me/919702763876?text=${encodeURIComponent(text)}`, '_blank');
                  setIsConsultModalOpen(false);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="block font-sans text-[0.68rem] uppercase tracking-wider text-surface/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Shah"
                    value={consultForm.name}
                    onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[0.68rem] uppercase tracking-wider text-surface/70 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={consultForm.phone}
                    onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[0.68rem] uppercase tracking-wider text-surface/70 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Surat, Mumbai..."
                    value={consultForm.city}
                    onChange={(e) => setConsultForm({ ...consultForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-accent hover:bg-accent/90 text-white font-sans text-[0.68rem] tracking-[0.2em] uppercase font-bold rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Studio Appointment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BespokeEstimator;
