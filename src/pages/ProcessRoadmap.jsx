import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Sensory Dialogue',
    timeline: 'Week 1-2',
    badge: 'Discovery & Audit',
    description: 'Circadian sun study, daily lifestyle audit, and acoustic mapping.',
    deliverables: ['Light & Space Audit', 'Concept Moodboards', 'Feasibility Lock'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '02',
    title: '1:1 Digital Twin',
    timeline: 'Week 3-5',
    badge: '3D Photoreal CAD',
    description: 'Millimeter-accurate 3D renders with exact materials and MEP blueprints.',
    deliverables: ['Virtual Walkthrough', 'Material Swatch Lock', 'Working Blueprints'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '03',
    title: 'Curated Sourcing',
    timeline: 'Week 6-8',
    badge: 'Direct Procurement',
    description: 'Direct quarry selection of Italian marble and bio-fumed Austrian oak.',
    deliverables: ['Dry-Lay Inspection', 'Veneer Approvals', 'Fixed Cost Lock'],
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '04',
    title: 'Artisan Execution',
    timeline: 'Week 9-14',
    badge: 'Turnkey Craft',
    description: 'Daily architect on-site oversight, custom joinery, and concealed civil MEP.',
    deliverables: ['Daily Photo Logs', 'Acoustic Sealing', 'Bespoke Fitment'],
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '05',
    title: 'White-Glove Handover',
    timeline: 'Week 15',
    badge: 'Grand Reveal',
    description: 'Fine-art placement, circadian calibration, and 10-Year Assured Warranty.',
    deliverables: ['Deep Clean & Styling', 'Scene Automation', '10-Yr Warranty'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000'
  }
];

const FAQS = [
  {
    q: 'Turnaround for 4 BHK or Villa?',
    a: '12-16 weeks for luxury apartments and 16-22 weeks for villas with bespoke millwork.'
  },
  {
    q: 'Are civil, electrical & MEP in-house?',
    a: 'Yes. 100% turnkey studio management without external subcontractor hassles.'
  },
  {
    q: 'Can we inspect slabs before cutting?',
    a: 'Yes, full dry-lay stone and veneer reviews are conducted at our Surat Studio.'
  },
  {
    q: 'How does the 10-Year Warranty work?',
    a: 'Covers joinery, hardware & waterproofing with free scheduled checkups in Year 1, 3 & 5.'
  }
];

const ProcessRoadmap = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative w-full bg-[#FDF9F1] text-primary py-8 sm:py-10 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-primary/10">

      {/* Subtle ambient warm glow */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[200px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Compact Centered Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-5 pb-3 border-b border-primary/10">
          <div className="flex items-center justify-center space-x-2.5 mb-1.5">
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-accent" />
              The Architectural Blueprint
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </div>

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary tracking-tight leading-tight mb-1.5 text-center">
            How We Sculpt <span className="italic font-light text-accent font-serif">Your Space</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-[0.65rem] font-sans text-primary/60">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-accent" /> 15-Week Turnkey
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-accent" /> Architect Supervised
            </span>
          </div>
        </div>

        {/* Compact Step Tabs Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-4">
          {PROCESS_STEPS.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-300 relative cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-white border-accent shadow-sm ring-1 ring-accent/30 text-primary'
                    : 'bg-white/50 hover:bg-white/80 border-primary/10 text-primary/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStepLine"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-accent"
                  />
                )}
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`font-mono text-[0.62rem] font-bold ${isActive ? 'text-accent' : 'text-primary/40'}`}>
                    {item.step}
                  </span>
                  <span className="font-sans text-[0.55rem] text-primary/40">
                    {item.timeline}
                  </span>
                </div>
                <span className={`font-serif text-[0.72rem] sm:text-xs block truncate ${isActive ? 'font-semibold text-primary' : 'text-primary/70'}`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Sleek 2-Column Stage (Reduced Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch mb-5">

          {/* LEFT: Compact Step Dossier (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-primary/10 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent text-white font-mono text-[0.62rem] font-bold flex items-center justify-center">
                    {currentStep.step}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-primary font-medium">
                    {currentStep.title}
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-sans text-[0.58rem] font-bold uppercase tracking-wider">
                  {currentStep.badge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep.step}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-sans text-xs text-primary/75 leading-relaxed mb-3.5 font-light"
                >
                  {currentStep.description}
                </motion.p>
              </AnimatePresence>

              {/* Compact Deliverables 3-Chip Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentStep.deliverables.map((item, i) => (
                  <div
                    key={`${currentStep.step}-${i}`}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-[#FAF6EE] border border-primary/5 text-primary text-[0.68rem] font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-2.5 mt-2.5 border-t border-primary/10 flex items-center justify-between text-[0.65rem] text-primary/50 font-sans">
              <span>Timeline: <strong className="text-primary/80">{currentStep.timeline}</strong></span>
              <span className="text-accent font-semibold">Phase 0{activeStepIndex + 1} of 05</span>
            </div>
          </div>

          {/* RIGHT: Compact Step Preview Image (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-primary/10 h-[160px] sm:h-[180px] lg:h-auto shadow-xs group bg-[#EFECE6]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.step}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-2.5 left-3 right-3 p-2 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <span className="font-serif text-xs text-white font-medium truncate">
                {currentStep.title}
              </span>
              <span className="font-mono text-[0.58rem] text-accent font-bold uppercase tracking-wider shrink-0 ml-2">
                {currentStep.badge}
              </span>
            </div>
          </div>

        </div>

        {/* Compact FAQs Grid */}
        <div className="bg-white border border-primary/10 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-primary/10">
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-accent" />
              <h4 className="font-serif text-xs sm:text-sm text-primary font-medium">
                Quick Clarifications &amp; Assurances
              </h4>
            </div>
            <span className="font-sans text-[0.58rem] text-primary/40 uppercase tracking-wider">
              Studio Policy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isOpen
                      ? 'border-accent/40 bg-[#FAF6EE]'
                      : 'border-primary/5 bg-[#FCF9F3] hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-xs text-primary font-medium truncate">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 text-accent shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-sans text-[0.68rem] text-primary/70 mt-1.5 leading-relaxed overflow-hidden font-light"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessRoadmap;
