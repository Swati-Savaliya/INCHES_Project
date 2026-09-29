import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Compass,
  Layers,
  Wrench,
  KeyRound,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  HelpCircle,
  FileCheck
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'The Sensory Dialogue',
    timeline: 'Week 1 - 2',
    badge: 'Discovery & Light Study',
    description:
      'We begin with an in-depth lifestyle audit—studying your daily routines, natural sun angles, cross-ventilation, and acoustic preferences before touching the drawing board.',
    deliverables: [
      'Circadian Light & Space Audit',
      'Initial Concept Moodboards',
      'Structural Feasibility Report'
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '02',
    title: '1:1 Photoreal Digital Twin',
    timeline: 'Week 3 - 5',
    badge: 'Millimeter 3D Modeling',
    description:
      'Experience your unbuilt home through photorealistic 3D renders with exact materials, bespoke furniture models, and custom lighting temperature simulations.',
    deliverables: [
      'Full 3D Virtual Walkthrough',
      'Material & Texture Palette Lock',
      'Working MEP & Civil Blueprints'
    ],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '03',
    title: 'Curated Sourcing & Procurement',
    timeline: 'Week 6 - 8',
    badge: 'Rare Material Selection',
    description:
      'Direct hand-selection of Italian Statuario marble slabs, bio-fumed Austrian oak, and PVD-coated architectural metal inlays with zero third-party markups.',
    deliverables: [
      'Dry-Lay Marble Inspections',
      'Hardware & Veneer Swatch Approvals',
      'Fixed Pricing & Timeline Lock'
    ],
    image:
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '04',
    title: 'Master Artisan Execution',
    timeline: 'Week 9 - 14',
    badge: 'In-House Turnkey Crafting',
    description:
      'Executed under daily on-site supervision by our senior project architects. In-house carpentry, concealed false ceilings, and precision acoustic panelling.',
    deliverables: [
      'Daily Photographic Progress Logs',
      'Acoustic & Moisture Sealing',
      'Bespoke Joinery & Wardrobe Fitment'
    ],
    image:
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    step: '05',
    title: 'White-Glove Styling & Handover',
    timeline: 'Week 15',
    badge: 'Sensory Grand Reveal',
    description:
      'Complete deep-cleaning, fine-art placement, ambient lighting calibration, and handover of keys with your comprehensive 10-Year Assured Warranty Dossier.',
    deliverables: [
      'Complete Styling & Artwork Setup',
      'Smart Home Scene Programming',
      '10-Year Warranty & As-Built Docs'
    ],
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000'
  }
];

const FAQS = [
  {
    q: 'What is the typical turnaround for a 4 BHK or Villa?',
    a: 'Complete turnkey execution generally ranges from 12 to 16 weeks for luxury apartments and 16 to 22 weeks for bespoke villas, depending on custom millwork and imported stone selections.'
  },
  {
    q: 'Do you manage all civil, electrical, and MEP alterations in-house?',
    a: 'Yes. INCHES operates as a single-point turnkey architectural studio. We handle civil restructuring, HVAC ducting, plumbing, automation, and carpentry without external subcontractor hassles.'
  },
  {
    q: 'Can we inspect materials and stone slabs before installation?',
    a: 'Absolutely. We conduct full dry-lay stone inspections and physical tactile moodboard reviews at our Surat Studio before cutting or installing any natural material.'
  },
  {
    q: 'How does the 10-Year Assured Warranty work?',
    a: 'Our warranty covers structural joinery, hinge hardware, and waterproofing. It includes complimentary scheduled preventive maintenance checkups in Year 1, 3, and 5.'
  }
];

const ProcessRoadmap = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative w-full bg-[#101010] text-surface py-10 md:py-14 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/3 w-[450px] h-[300px] bg-accent/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[250px] bg-[#8A6D54]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Center-Aligned Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-8 pb-4 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2.5 mb-1.5"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.65rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-accent" />
              The Architectural Blueprint
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-2 text-center"
          >
            How We Sculpt <span className="italic font-light text-accent font-serif">Your Space</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-surface/65 max-w-lg mx-auto text-center leading-relaxed"
          >
            A disciplined 5-phase methodology engineered for total transparency, zero on-site delays, and millimeter craftsmanship.
          </motion.p>
        </div>

        {/* Step Navigation Ribbon */}
        <div className="flex items-center justify-between gap-1.5 mb-6 overflow-x-auto no-scrollbar pb-2">
          {PROCESS_STEPS.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 min-w-[130px] p-2.5 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'border-accent bg-accent/20 shadow-md ring-1 ring-accent/40'
                    : 'border-white/10 bg-[#171717] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-serif text-xs font-bold ${isActive ? 'text-accent' : 'text-surface/50'}`}>
                    {item.step}
                  </span>
                  <span className="font-sans text-[0.58rem] text-surface/40">
                    {item.timeline}
                  </span>
                </div>
                <span className={`font-serif text-xs block truncate ${isActive ? 'text-white font-medium' : 'text-surface/70'}`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Main Process Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-10">

          {/* LEFT: Active Step Details & Deliverables (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#161616] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl relative">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent text-white font-serif text-xs font-bold flex items-center justify-center shadow-xs">
                    {currentStep.step}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {currentStep.title}
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-accent font-sans text-[0.62rem] font-semibold">
                  {currentStep.badge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep.step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-sans text-xs sm:text-sm text-surface/70 leading-relaxed mb-5"
                >
                  {currentStep.description}
                </motion.p>
              </AnimatePresence>

              {/* Deliverable Checkpoints */}
              <div>
                <span className="block font-sans text-[0.62rem] uppercase tracking-wider text-surface/50 font-semibold mb-2">
                  Phase Deliverables &amp; Client Approvals
                </span>
                <div className="space-y-1.5">
                  {currentStep.deliverables.map((item, i) => (
                    <motion.div
                      key={`${currentStep.step}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="font-sans text-[0.72rem]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-surface/50 font-sans">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                Est. Duration: {currentStep.timeline}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                Architect Supervised
              </span>
            </div>
          </div>

          {/* RIGHT: Step Hero Image (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-[240px] sm:h-[280px] lg:h-auto shadow-xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.step}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
              <span className="font-sans text-[0.6rem] uppercase tracking-wider text-accent font-bold block">
                Milestone 0{activeStepIndex + 1} of 05
              </span>
              <span className="font-serif text-xs sm:text-sm text-white font-medium">
                {currentStep.title} — {currentStep.badge}
              </span>
            </div>
          </div>

        </div>

        {/* Curated Frequently Addressed Questions (Accordion) */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-accent" />
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                Frequently Addressed Inquiries
              </h3>
            </div>
            <span className="font-sans text-[0.62rem] text-surface/40">
              Clear Guidelines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isOpen
                      ? 'border-accent/50 bg-accent/10'
                      : 'border-white/10 bg-[#1A1A1A] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-xs sm:text-sm text-white font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-accent shrink-0 transition-transform duration-300 ${
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
                        transition={{ duration: 0.3 }}
                        className="font-sans text-xs text-surface/70 mt-2.5 leading-relaxed overflow-hidden"
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
