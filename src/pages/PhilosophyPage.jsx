import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhilosophyPillarsGrid from './PhilosophyPillarsGrid';

const BANNER_DATA = [
  {
    id: 1,
    number: '01',
    category: 'ARCHITECTURAL PROPORTION',
    title: 'Precision in Every Inch',
    desc: 'Harmonious golden proportions and unhurried sightlines calibrated to bring immediate serenity.',
    spec: '1.618',
    specLabel: 'Golden Ratio',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 2,
    number: '02',
    category: 'TACTILE MATERIALITY',
    title: 'Interiors Made to Be Felt',
    desc: 'Honest, living materials—hand-troweled lime plaster, fumed oak, and brushed brass that age with grace.',
    spec: '100%',
    specLabel: 'Natural Finishes',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 3,
    number: '03',
    category: 'LIGHT & CHIAROSCURO',
    title: 'Sculpting Space with Light',
    desc: 'Sculptural circadian illumination and warm 2700K ambient grazes that nurture daily human rhythms.',
    spec: '2700K',
    specLabel: 'Warm Amber Glow',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 4,
    number: '04',
    category: 'TIMELESS RESTRAINT',
    title: 'Elegance Through Subtraction',
    desc: 'Eliminating visual clutter with concealed joinery and timeless architectural silhouettes.',
    spec: '0-Fad',
    specLabel: 'Enduring Architecture',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000'
  }
];

// 3D Perspective Image Transition Variants
const slideVariants3D = {
  enter: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? 35 : -35,
    z: -600,
    x: direction > 0 ? 350 : -350,
    scale: 0.85
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    z: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: (direction) => ({
    opacity: 0,
    rotateY: direction < 0 ? 35 : -35,
    z: -600,
    x: direction < 0 ? 350 : -350,
    scale: 0.85,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// 3D Perspective Text Reveal Variants
const textVariants3D = {
  hidden: {
    opacity: 0,
    rotateX: 45,
    y: 35,
    z: -80
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    z: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15
    }
  },
  exit: {
    opacity: 0,
    rotateX: -40,
    y: -25,
    z: -80,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const PhilosophyPage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const activeBanner = BANNER_DATA[currentIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play timer (6s)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIdx((prev) => (prev + 1) % BANNER_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentIdx]);

  const handleSelectBanner = (idx) => {
    setIsAutoPlay(false);
    setDirection(idx > currentIdx ? 1 : -1);
    setCurrentIdx(idx);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? BANNER_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % BANNER_DATA.length);
  };

  return (
    <div className="w-full bg-[#0E0E0E] text-white font-sans selection:bg-accent selection:text-white flex flex-col justify-between overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* ===================== FULL-WIDTH 3D CINEMATIC BANNER SECTION ===================== */}
      <section
        className="relative w-full h-[65vh] sm:h-[70vh] md:h-[72vh] min-h-[460px] max-h-[640px] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 mt-16 sm:mt-18"
        style={{ perspective: '1400px' }}
      >

        {/* 3D Background Images Carousel */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black" style={{ perspective: '1200px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeBanner.id}
              custom={direction}
              variants={slideVariants3D}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Clear, High-Resolution Architectural Image with Subtle Ken-Burns scale */}
              <motion.img
                initial={{ scale: 1.06 }}
                animate={{ scale: 1.01 }}
                transition={{ duration: 7, ease: 'linear' }}
                src={activeBanner.image}
                alt={activeBanner.title}
                className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05]"
              />

              {/* Minimal Side-Vignette on Left for Crisp Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 sm:via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Warm Accent Glow */}
        <div className="absolute top-1/4 left-1/6 w-[350px] h-[250px] bg-accent/20 rounded-full blur-[130px] pointer-events-none z-10" />

        {/* ===================== MAIN 3D CONTENT OVERLAY ===================== */}
        <div
          className="relative z-20 w-full px-6 sm:px-12 lg:px-16 flex-1 flex flex-col justify-center"
          style={{ perspective: '1000px' }}
        >
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBanner.id}
                variants={textVariants3D}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >

                {/* Category Pill */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="w-5 h-[1.5px] bg-accent" />
                  <span className="font-sans text-[0.62rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold drop-shadow-sm">
                    {activeBanner.category}
                  </span>
                  <span className="font-mono text-[0.65rem] text-white/50 ml-1">
                    [{activeBanner.number}/04]
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white leading-[1.12] tracking-tight mb-2.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                  {activeBanner.title.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="italic font-light text-accent font-serif">
                    {activeBanner.title.split(' ').slice(-2).join(' ')}
                  </span>
                </h1>

                {/* Brief & Clean Description */}
                <p className="font-sans text-xs sm:text-sm md:text-[0.92rem] text-surface/85 leading-relaxed max-w-lg mb-5 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  {activeBanner.desc}
                </p>

                {/* Action Row - Single Clean CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20exploring%20your%20Philosophy%20and%20would%20like%20to%20consult%20for%20my%20residence."
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-3 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-lg shadow-accent/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-103"
                  >
                    <span>Consult Studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Spec Badge */}
                  <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/15">
                    <span className="font-serif text-sm font-semibold text-accent leading-none">
                      {activeBanner.spec}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-surface/70 font-sans">
                      {activeBanner.specLabel}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===================== BOTTOM FULL-WIDTH TABS & CONTROLS ===================== */}
        <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 pt-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/15 pt-3">

            {/* 4 Interactive Progress Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl">
              {BANNER_DATA.map((item, idx) => {
                const isActive = currentIdx === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectBanner(idx)}
                    className={`p-2 sm:p-2.5 rounded-xl text-left transition-all duration-300 relative border cursor-pointer overflow-hidden backdrop-blur-md ${isActive
                      ? 'bg-black/80 border-accent text-white shadow-lg ring-1 ring-accent/40'
                      : 'bg-black/40 hover:bg-black/60 border-white/10 text-white/70 hover:text-white'
                      }`}
                  >
                    {/* Active Timer Line */}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 6, ease: 'linear' }}
                        className="absolute top-0 left-0 h-[2px] bg-accent"
                      />
                    )}

                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-mono text-[0.6rem] font-bold text-accent">
                        {item.number}
                      </span>
                      <span className="text-[0.52rem] font-sans tracking-wider uppercase text-white/50">
                        {item.category.split(' ')[0]}
                      </span>
                    </div>

                    <h4 className="font-serif text-[0.72rem] sm:text-xs text-white font-medium truncate">
                      {item.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center space-x-1.5 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-xl bg-black/50 hover:bg-accent border border-white/15 hover:border-accent text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-8 h-8 rounded-xl bg-black/50 hover:bg-accent border border-white/15 hover:border-accent text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ===================== PHILOSOPHY PILLARS & SENSORY LAB SECTION ===================== */}
      <PhilosophyPillarsGrid />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default PhilosophyPage;
