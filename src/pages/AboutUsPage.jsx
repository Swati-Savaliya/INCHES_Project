import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Eye,
  Ruler,
  Palette,
  ShieldCheck,
  ChevronRight,
  HeartHandshake,
  Lightbulb,
  Check,
  Gem,
  Sliders,
  ArrowRight,
  Building2,
  Hammer
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Clean Partner Data Profiles with Highlighted Designations & Expanded Definitions
const PARTNERS = [
  {
    id: 'nilesh',
    name: 'Nilesh Donga',
    phone: '919702763876',
    role: 'Founder',
    designationBadge: 'FOUNDER',
    discipline: 'Tactile Materiality & Sensorial Styling',
    degree: 'PTD in Interior Designing & Decoration',
    experience: 'Founder • 12+ Years Experience',
    portrait: '/Founder_img.png', // INCHES Founder Nilesh Donga
    philosophy: 'Curating living textures and warm 2700K ambient grazes that embrace you before words do.',
    specialties: ['Italian Lime Plaster', 'Fumed Oak Millwork', '2700K Lighting', 'Interior Couture'],
    bio: [
      'As the visionary Founder of INCHES, Nilesh Donga leads the interior couture and tactile design philosophy of the studio. Holding a professional degree in PTD in Interior Designing & Decoration with 12+ years of dedicated spatial practice, he transforms raw architectural shells into evocative, sensory living environments filled with enduring warmth.',
      'His hallmark style blends hand-troweled Italian lime plaster, rich fumed oak millwork, artisanal fabrics, and precision-tuned 2700K ambient lighting—creating bespoke turnkey luxury residences that resonate deeply with both intimacy and timeless grace.'
    ],
    seal: 'FOUNDER',
    signatureCode: 'N.D. FOUNDER // 01',
    portalStyle: 'rounded-t-[140px] rounded-b-[24px]',
    frameOffset: 'rounded-t-[148px] rounded-b-[32px]',
    whatsappMsg: 'Hello%20Nilesh%20Donga,%20I%20would%20like%20to%20consult%20regarding%20interior%20styling%20and%20materials.'
  },
  {
    id: 'jignesh',
    name: 'Jignesh Mistry',
    phone: '919699228269',
    role: 'CEO',
    designationBadge: 'CEO',
    discipline: 'Spatial Geometry & Structural Flow',
    degree: 'PTD in Interior Designing & Decoration',
    experience: 'CEO • 12+ Years Experience',
    portrait: '/ceo_img.png', // INCHES CEO Jignesh Mistry
    philosophy: 'Calibrating golden proportions and daylight channels to engineer effortless spatial calm.',
    specialties: ['1.618 Golden Ratio', 'Circadian Lightwells', 'Minimalist Volumes', 'Turnkey Precision'],
    bio: [
      'Serving as CEO, Jignesh Mistry brings architectural rigor, mathematical geometry, and structural harmony to every landmark project. Holding a professional degree in PTD in Interior Designing & Decoration with 12+ years of professional mastery, he governs the structural envelope and internal fluid dynamics.',
      'Jignesh meticulously choreographs golden-ratio proportions (1.618), natural circadian lightwells, and clean minimalist volumes—ensuring that every residence achieves structural perfection, optimal spatial utility, and effortless architectural peace.'
    ],
    seal: 'CEO',
    signatureCode: 'J.M. CEO // 02',
    portalStyle: 'rounded-t-[140px] rounded-b-[24px]',
    frameOffset: 'rounded-t-[148px] rounded-b-[32px]',
    whatsappMsg: 'Hello%20Jignesh%20Mistry,%20I%20would%20like%20to%20consult%20on%20an%20architectural%20project.'
  }
];

// Rich 3-Phase Synergy Steps with Visuals & Specs
const SYNERGY_CARDS = [
  {
    phase: 'PHASE 01',
    lead: 'Jignesh Mistry',
    badge: 'ARCHITECTURAL CORE',
    title: 'Spatial Bones & Light Channels',
    desc: 'Engineering golden-ratio volumetrics (1.618), unobstructed sightlines, and circadian lightwells before finishes are chosen.',
    spec: '1.618 Proportions',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    icon: Compass
  },
  {
    phase: 'PHASE 02',
    lead: 'NILESH DONGA',
    badge: 'INTERIOR COUTURE',
    title: 'Tactile Material Dressing',
    desc: 'Curating hand-troweled lime plaster, Italian smoked oak veneers, natural stone slabs, and warm 2700K indirect amber illumination.',
    spec: 'Sensory Patina',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    icon: Palette
  },
  {
    phase: 'PHASE 03',
    lead: 'COMBINED ATELIER',
    badge: 'TURNKEY MASTERWORK',
    title: 'The Living Sanctuary',
    desc: 'Delivering the complete turnkey residence with master artisans, heirloom millwork, zero contractor stress, and 100% fidelity to 3D design.',
    spec: '0.1mm Tolerances',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
    icon: Award
  }
];

// 4 Rich Connected Milestones
const MILESTONES = [
  {
    year: '2014',
    title: 'The Dual Genesis',
    subtitle: 'FOUNDATION OF INCHES',
    tag: 'Surat, Gujarat',
    icon: Compass,
    desc: 'Jignesh and Nilesh founded INCHES to bridge architectural structure with tactile interior soul.'
  },
  {
    year: '2017',
    title: 'Surat Flagship Atelier',
    subtitle: 'VESU DESIGN LAB',
    tag: '40+ Luxury Villas',
    icon: Building2,
    desc: 'Established flagship design studio and material lab in Vesu, crafting 40+ landmark villas.'
  },
  {
    year: '2021',
    title: 'Turnkey Luxury Standard',
    subtitle: 'IN-HOUSE FABRICATION',
    tag: 'Zero Sub-contracting',
    icon: Hammer,
    desc: 'In-house master artisanal team ensuring 100% precision from 3D sketch to key handover.'
  },
  {
    year: '2025+',
    title: 'Mumbai & 150+ Estates',
    subtitle: 'PRIVATE RESIDENCES',
    tag: 'Surat & Mumbai',
    icon: Sparkles,
    desc: 'Expanding private appointments across Maharashtra & Gujarat for bespoke luxury residences.'
  }
];

// 4 Core Pillars
const PILLARS = [
  {
    icon: Ruler,
    number: '01',
    title: 'Precision in Every Inch',
    desc: 'Strict alignment with the Golden Ratio (1.618) and millimeter-accurate joinery.'
  },
  {
    icon: Palette,
    number: '02',
    title: 'Living Materials',
    desc: 'Hand-troweled lime plaster, Italian smoked oak, and natural marbles that age with grace.'
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Direct Founders Care',
    desc: 'You work directly with the two co-founders from initial concept to final styling.'
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Restorative Calm',
    desc: 'Layouts intentionally sculpted to reduce daily friction and bring timeless serenity.'
  }
];

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#0E0E0E] text-white font-sans selection:bg-accent selection:text-white flex flex-col justify-between overflow-x-hidden min-h-screen">

      {/* Header */}
      <Header />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (DARK LUXURY - #0E0E0E)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0E0E0E] text-white pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">

        {/* Ambient Warm Golden Glows */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-accent/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 sm:w-12 h-[1.5px] bg-accent" />
            <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.35em] text-accent uppercase font-bold">
              THE DUO &amp; PRINCIPAL PARTNERS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-[1.12] tracking-tight mb-5">
                Two Distinct Disciplines. <br />
                <span className="italic font-light text-accent font-serif">
                  One Unified Mastery.
                </span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-surface/80 leading-relaxed max-w-xl font-light">
                INCHES is led by <strong className="text-white font-medium">Nilesh Donga</strong> and <strong className="text-white font-medium">Jignesh Mistry</strong>—fusing tactile interior warmth with architectural proportion.
              </p>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/[0.03] p-4 sm:p-5 rounded-3xl border border-white/10 backdrop-blur-md"
            >
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-center">
                <div className="font-serif text-2xl sm:text-3xl text-accent font-semibold mb-0.5">150+</div>
                <div className="font-sans text-[0.6rem] uppercase tracking-wider text-surface/60">Estates</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-center">
                <div className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-0.5">12+</div>
                <div className="font-sans text-[0.6rem] uppercase tracking-wider text-surface/60">Years</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-center">
                <div className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-0.5">02</div>
                <div className="font-sans text-[0.6rem] uppercase tracking-wider text-surface/60">Studios</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-center">
                <div className="font-serif text-2xl sm:text-3xl text-accent font-semibold mb-0.5">100%</div>
                <div className="font-sans text-[0.6rem] uppercase tracking-wider text-surface/60">Turnkey</div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SCULPTURAL ARCH PORTAL IMAGE BOXES (LIGHT WARM - #FDF9F1)       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FDF9F1] text-primary py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-b border-[#E8E2D6] overflow-hidden">

        {/* Subtle architectural background lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-primary/5 pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold">
                THE FOUNDING DUO
              </span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              The Masters of the Atelier
            </h2>
          </div>

          {/* 2 Sculptural Archway Portal Cards with Distinct Architectural Styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto items-stretch">

            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#F8F4EC] rounded-[32px] sm:rounded-[36px] border border-[#E5DFD4] hover:border-accent/70 shadow-[0_16px_40px_rgba(138,109,84,0.08)] hover:shadow-[0_24px_55px_rgba(138,109,84,0.16)] transition-all duration-700 p-5 sm:p-6 flex flex-col justify-between group overflow-hidden"
              >
                {/* Background Ambient Radial Glow on Hover */}
                <div className="absolute -top-24 -right-24 w-52 h-52 bg-accent/8 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />

                <div className="relative z-10">



                  {/* ================= DISTINCT SCULPTURAL ARCHWAY IMAGE BOX ================= */}
                  <div className="relative w-full pt-2 pb-2 flex justify-center">

                    {/* Floating Golden Architectural Portal */}
                    <div className={`relative w-[94%] sm:w-[90%] max-w-[370px] aspect-[4/4.5] ${partner.portalStyle} p-2 bg-[#F6F2EA] border-2 border-accent/40 shadow-[0_18px_38px_rgba(138,109,84,0.16)] group-hover:border-accent group-hover:shadow-[0_26px_58px_rgba(138,109,84,0.26)] transition-all duration-500`}>

                      {/* Inner Portal Image Container */}
                      <div className={`relative w-full h-full ${partner.portalStyle} overflow-hidden bg-[#1E1A16] shadow-inner`}>

                        {/* High-definition portrait */}
                        <img
                          src={partner.portrait}
                          alt={partner.name}
                          className="w-full h-full object-cover object-top contrast-[1.04] group-hover:scale-105 transition-all duration-700 ease-out"
                        />

                        {/* Warm bottom shadow vignette for badge legibility */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />

                        {/* PROMINENT HAUTE-COUTURE DESIGNATION BADGE */}
                        <div className="absolute bottom-2 left-2 right-2 z-20 py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#1E1915]/95 via-[#30261E]/95 to-[#1E1915]/95 text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)] border border-amber-300/40 backdrop-blur-md text-center">
                          <span className="font-sans text-[0.66rem] font-bold uppercase tracking-[0.22em] text-amber-200 flex items-center justify-center gap-1.5 drop-shadow-sm">
                            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{partner.designationBadge}</span>
                            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                          </span>
                        </div>

                        {/* Hover Light Flare */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                      </div>

                    </div>

                  </div>

                  {/* ================= DETAILS CONTAINER BELOW IMAGE ================= */}
                  <div className="pt-2.5 sm:pt-3">

                    {/* Name & Discipline */}
                    <div className="mb-2.5 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 mb-0.5">
                        <span className="w-3 h-[1.5px] bg-accent" />
                        <span className="font-sans text-[0.62rem] sm:text-[0.65rem] tracking-[0.2em] text-accent uppercase font-bold">
                          {partner.discipline}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-[1.7rem] text-primary font-medium leading-tight group-hover:text-accent transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>

                    {/* Experience & Degree Credentials Row - Compact Side-by-Side Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2.5 mb-2.5 border-b border-primary/10">

                      {/* Experience Stat Pill */}
                      <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-white/90 border border-[#E8E2D6] shadow-[0_1px_4px_rgba(138,109,84,0.04)]">
                        <div className="w-5 h-5 rounded-md bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
                          <Compass className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-[0.68rem] font-sans font-semibold text-primary/85 truncate" title={partner.experience}>
                          {partner.experience}
                        </span>
                      </div>

                      {/* Degree Qualification Pill */}
                      {partner.degree && (
                        <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-gradient-to-r from-[#FAF7F2] to-[#F5EFE6] border border-accent/25 shadow-[0_1px_4px_rgba(138,109,84,0.04)]">
                          <div className="w-5 h-5 rounded-md bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                            <Award className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-[0.68rem] font-sans font-semibold text-primary/90 truncate" title={partner.degree}>
                            {partner.degree}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* 1-Line Philosophy Quote */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-[#F5EFE6] border-l-3 border-accent relative mb-2.5 shadow-sm">
                      <Quote className="w-4 h-4 text-accent/20 absolute top-2 right-2" />
                      <p className="font-serif italic text-xs text-primary/90 leading-relaxed pr-4">
                        "{partner.philosophy}"
                      </p>
                    </div>

                    {/* Curated Specialties Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {partner.specialties?.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white border border-[#E7DFD3] text-[0.62rem] font-sans font-medium text-primary/75 tracking-wide shadow-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Profile Definition / Biography */}
                    <div className="space-y-1.5 mb-4 text-primary/80 font-sans text-[0.78rem] leading-relaxed">
                      {partner.bio.map((paragraph, i) => (
                        <p key={i} className="text-primary/75">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Direct WhatsApp Consultation Button */}
                <div className="pt-1 relative z-10">
                  <a
                    href={`https://wa.me/${partner.phone || '919702763876'}?text=${partner.whatsappMsg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn relative w-full py-3 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-[#1A1613] via-[#241F1A] to-[#1A1613] hover:from-accent hover:via-[#A7825C] hover:to-accent text-white font-sans text-xs tracking-[0.16em] uppercase font-bold flex items-center justify-between transition-all duration-500 shadow-[0_8px_18px_rgba(26,22,19,0.18)] hover:shadow-[0_12px_24px_rgba(167,130,92,0.32)] cursor-pointer overflow-hidden border border-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>Consult With {partner.name}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </a>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 50/50 CREATIVE SYNERGY (DARK ATELIER - #0B0B0B)                */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0B0B0B] text-white py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden">

        {/* Background Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/15 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-accent" />
              <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold">
                THE 50/50 CREATIVE SYNERGY
              </span>
              <span className="w-8 h-[1.5px] bg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              Where Architecture Meets Tactile Soul
            </h2>
            <p className="font-sans text-sm sm:text-base text-surface/75 leading-relaxed font-light">
              An unbroken continuum from structural column to the final fabric weave.
            </p>
          </div>

          {/* 3 Rich Visual Step Cards with Connecting Continuity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {SYNERGY_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 hover:border-accent/60 transition-all duration-500 p-6 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(138,109,84,0.2)] relative"
                >
                  <div>

                    {/* Top Architectural Visual with Specs */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-[0.62rem] font-sans font-bold text-accent uppercase tracking-wider backdrop-blur-md">
                        <IconComp className="w-3.5 h-3.5 text-accent" />
                        <span>{card.badge}</span>
                      </div>

                      {/* Spec Pill */}
                      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-[0.6rem] font-mono text-white/80 backdrop-blur-md">
                        {card.spec}
                      </div>
                    </div>

                    {/* Step Lead & Phase */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-accent font-bold tracking-wider">
                        {card.phase} // {card.lead}
                      </span>
                      <span className="font-mono text-[0.65rem] text-white/40 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white font-medium mb-3 leading-snug">
                      {card.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-surface/70 leading-relaxed font-light mb-4">
                      {card.desc}
                    </p>

                  </div>

                  {/* Bottom Connection Status Indicator */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[0.65rem] text-accent uppercase font-mono tracking-wider font-semibold">
                    <span>Atelier Precision</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: PROPER LUXURY CONNECTED MILESTONES (LIGHT WARM - #EFECE6)       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#EFECE6] text-primary py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-[#DDD7CC] overflow-hidden">

        {/* Subtle architectural backdrop lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-primary/5 pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">

          {/* Section Heading */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold">
                  A DECADE OF EVOLUTION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                Milestones of the Partnership
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-primary/70 max-w-sm leading-relaxed">
              From our first villa in Surat to orchestrating luxury multi-crore private estates across Gujarat &amp; Mumbai.
            </p>
          </div>

          {/* Connected Timeline Track Container */}
          <div className="relative max-w-6xl mx-auto">

            {/* Desktop Horizontal Gold Connecting Line */}
            <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-accent/20 via-accent to-accent/20 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {MILESTONES.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.12 }}
                    className="p-7 rounded-[28px] bg-white border border-[#DCD5C9] shadow-[0_15px_35px_rgba(138,109,84,0.06)] hover:shadow-[0_25px_50px_rgba(138,109,84,0.14)] hover:border-accent hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Gold Accent Strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>

                      {/* Milestone Year Header with Floating Icon Node */}
                      <div className="flex items-center justify-between mb-5">

                        {/* Circular Year Badge with Glow */}
                        <div className="w-12 h-12 rounded-2xl bg-[#F7F4EE] border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Step Number Tag */}
                        <span className="font-mono text-[0.68rem] text-primary/40 font-bold bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#EAE4D9]">
                          0{index + 1}
                        </span>

                      </div>

                      {/* Year Display */}
                      <div className="font-mono text-3xl sm:text-4xl font-semibold text-accent mb-2 tracking-tight">
                        {item.year}
                      </div>

                      {/* Subtitle Badge */}
                      <span className="text-[0.62rem] font-sans font-bold tracking-wider text-accent uppercase block mb-1.5">
                        {item.subtitle}
                      </span>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-xl text-primary font-medium mb-3 leading-snug">
                        {item.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="font-sans text-xs sm:text-[0.82rem] text-primary/75 leading-relaxed font-normal mb-5">
                        {item.desc}
                      </p>

                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-3.5 border-t border-primary/10 flex items-center justify-between text-[0.65rem] font-mono text-primary/60 font-medium">
                      <span>{item.tag}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-accent transform group-hover:translate-x-1 transition-transform" />
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: 4 CORE PILLARS (DARK OBSIDIAN - #0E0E0E)                       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0E0E0E] text-white py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden">

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-accent" />
              <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold">
                STUDIO ETHOS
              </span>
              <span className="w-8 h-[1.5px] bg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              The 4 Principles That Bind Us
            </h2>
            <p className="font-sans text-xs sm:text-sm text-surface/70 font-light">
              Every drawing, joinery detail, and site execution is held to these 4 non-negotiable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-[28px] bg-white/[0.03] border border-white/10 hover:border-accent/60 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-surface/40 font-bold">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-surface/70 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: PRIVATE APPOINTMENT CTA (LIGHT WARM PLASTER - #FDF9F1)          */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FDF9F1] text-primary py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-[#E8E2D6]">

        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-accent/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(138,109,84,0.1)]">

          <span className="font-sans text-[0.68rem] sm:text-xs tracking-[0.35em] text-accent uppercase font-bold block mb-3">
            DIRECT FOUNDER CONSULTATION
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-4">
            Begin Your Spatial Journey with the Founders
          </h2>

          <p className="font-sans text-xs sm:text-sm text-primary/75 max-w-lg mx-auto mb-8 leading-relaxed font-normal">
            Direct private appointments with Nilesh Donga &amp; Jignesh Mistry for upcoming luxury residential villas, penthouses, and bespoke architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20book%20a%20consultation%20with%20Nilesh%20Donga%20and%20Ar.%20Bhavik%20Savaliya."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-accent text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Line</span>
            </a>

            <Link
              to="/gallery"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#F7F4EE] hover:bg-primary hover:text-white text-primary border border-primary/20 font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-primary/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-sans text-xs text-primary/70 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Surat Studio: Vesu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Mumbai Atelier: Bandra West</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-accent" />
              <span>+91 97027 63876</span>
            </div>
          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default AboutUsPage;
