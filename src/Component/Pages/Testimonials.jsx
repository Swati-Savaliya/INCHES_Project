import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building,
  ShieldCheck,
  Award,
  CheckCircle2
} from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    clientName: 'Rajesh & Ananya Shah',
    role: 'Homeowners',
    project: '4,800 sq.ft Sky Penthouse',
    location: 'Vesu, Surat',
    style: 'Quiet Luxury & Warm Minimalism',
    year: '2025',
    rating: 5,
    quote:
      'INCHES transformed our penthouse into an atmospheric sanctuary. Their understanding of natural light, acoustic balance, and custom Italian joinery is unparalleled. Every guest is mesmerized by the craftsmanship.',
    heroImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    tag: 'Penthouse'
  },
  {
    id: 2,
    clientName: 'Vikram Singhania',
    role: 'Managing Director',
    project: '7,200 sq.ft Bespoke Villa',
    location: 'Bandra West, Mumbai',
    style: 'Neo-Classical with Statuario Marble',
    year: '2024',
    rating: 5,
    quote:
      'Strict timeline discipline and zero compromise on materials. Delivered our 7,200 sq.ft estate right on schedule. The boiserie wall mouldings and architectural lighting are absolute perfection.',
    heroImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    tag: 'Turnkey Villa'
  },
  {
    id: 3,
    clientName: 'Dr. Meera & Devang Patel',
    role: 'Founders & Collectors',
    project: '3,600 sq.ft Luxury Apartment',
    location: 'VIP Road, Surat',
    style: 'Wabi-Sabi Warmth & Raw Teak',
    year: '2025',
    rating: 5,
    quote:
      'The tactile richness of natural lime plaster, smoked Austrian oak, and ambient track lights created a home that feels like a timeless art gallery. Their millimeter precision exceeded all our expectations.',
    heroImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    tag: 'Sensory Flat'
  },
  {
    id: 4,
    clientName: 'Kunal & Riya Mehra',
    role: 'Entrepreneurs',
    project: '5,500 sq.ft Duplex Residence',
    location: 'Althan, Surat',
    style: 'Organic Modern & Fluted Glass',
    year: '2024',
    rating: 5,
    quote:
      'From 3D photoreal renders to actual site handover, there was zero deviation. The team handled civil restructuring, smart automation, and bespoke furniture with effortless perfection.',
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    tag: 'Duplex Haven'
  }
];

const METRICS = [
  { value: '140+', label: 'Bespoke Residences', icon: Building },
  { value: '99.4%', label: 'On-Time Handover', icon: Award },
  { value: '10-Yr', label: 'Assured Warranty', icon: ShieldCheck },
  { value: '4.98', label: 'Average Satisfaction', icon: Star }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const current = TESTIMONIALS[activeIndex];

  // Auto-slide every 7 seconds
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoplay(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoplay(false);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#F6F3EC] text-primary py-8 md:py-10 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#E5E0D4]"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Soft warm background glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-10 w-[350px] h-[200px] bg-[#E5DFD3] rounded-full blur-[90px] pointer-events-none"
      />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Center-Aligned Animated Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-6 pb-4 border-b border-[#E2DDD0]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2.5 mb-1.5"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-sans text-[0.65rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Client Testimonials &amp; Stories
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight leading-tight mb-2 text-center"
          >
            Voices of <span className="italic font-light text-accent font-serif">Inches</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-primary/65 max-w-lg mx-auto text-center leading-relaxed"
          >
            Real experiences from discerning homeowners whose living spaces were sculpted with tactile luxury and timeless elegance.
          </motion.p>
        </div>

        {/* Compact 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-5">

          {/* LEFT: Project Image with Smooth Transitions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDD6C8] h-[220px] sm:h-[260px] md:h-[280px] shadow-sm group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={current.heroImage}
                  alt={current.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Top Project Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 z-20 flex items-center gap-1.5"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans text-[0.6rem] uppercase tracking-wider text-white font-medium shadow-xs">
                {current.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent/80 backdrop-blur-md font-sans text-[0.6rem] uppercase tracking-wider text-white font-bold shadow-xs">
                {current.year} Handover
              </span>
            </motion.div>

            {/* Bottom Floating Info Pill */}
            <motion.div
              key={`info-${current.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between"
            >
              <div className="truncate mr-2">
                <span className="font-serif text-xs sm:text-sm text-white font-semibold block truncate">
                  {current.project}
                </span>
                <span className="font-sans text-[0.65rem] text-white/75 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-2.5 h-2.5 text-accent shrink-0" />
                  {current.location} • {current.style}
                </span>
              </div>

              <div className="flex items-center gap-0.5 text-accent shrink-0">
                {[...Array(current.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <Star className="w-3 h-3 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Light Theme Editorial Quotation with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between bg-white/90 backdrop-blur-md border border-[#E3DFD5] rounded-2xl p-4 sm:p-5 shadow-sm relative"
          >
            <div>
              {/* Quotation mark & Verified badge */}
              <div className="flex items-center justify-between mb-2">
                <motion.div
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote className="w-7 h-7 text-accent/40" />
                </motion.div>
                <span className="px-2 py-0.5 rounded-full bg-[#EFECE6] border border-[#E0DBD0] font-sans text-[0.6rem] uppercase tracking-wider text-primary/70 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  Verified Homeowner
                </span>
              </div>

              {/* Animated Quote Text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="font-serif text-sm sm:text-base md:text-lg text-primary font-normal leading-relaxed italic mb-4"
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom Client Info & Animated Controls */}
            <div className="pt-3 border-t border-[#EAE5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">

              {/* Client Profile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    src={current.avatar}
                    alt={current.clientName}
                    className="w-9 h-9 rounded-full object-cover border-2 border-accent shrink-0 shadow-xs"
                  />
                  <div>
                    <h4 className="font-serif text-sm text-primary font-semibold">
                      {current.clientName}
                    </h4>
                    <span className="font-sans text-[0.65rem] text-accent font-medium">
                      {current.role} • {current.location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Arrows & Animated Stepper Dots */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <div className="flex items-center gap-1 mr-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => {
                        setActiveIndex(i);
                        setIsAutoplay(false);
                      }}
                      animate={{
                        width: activeIndex === i ? 22 : 6,
                        backgroundColor: activeIndex === i ? '#8A6D54' : 'rgba(0,0,0,0.18)',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      className="h-1.5 rounded-full cursor-pointer focus:outline-none"
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#8A6D54', color: '#ffffff' }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E0DBD0] text-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#8A6D54', color: '#ffffff' }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E0DBD0] text-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>

            </div>

          </motion.div>

        </div>

        {/* 4 Trust Metrics Ribbon with Staggered Entrance Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-3 border-t border-[#E2DDD0]">
          {METRICS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-2.5 rounded-xl bg-white/80 border border-[#E3DFD5] flex items-center gap-2.5 transition-shadow hover:shadow-md cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-serif text-sm sm:text-base text-primary font-bold block leading-none">
                    {m.value}
                  </span>
                  <span className="font-sans text-[0.58rem] text-primary/60 mt-0.5 block">
                    {m.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
