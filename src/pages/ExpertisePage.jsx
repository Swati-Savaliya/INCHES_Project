import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Ruler,
  Sun,
  Eye,
  Sliders,
  PhoneCall,
  Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpatialAnatomyStudio from './SpatialAnatomyStudio';
import MaterialAtelier from './MaterialAtelier';

const EXPERTISE_BANNER_DATA = [
  {
    id: 1,
    number: '01',
    category: 'SPATIAL ARCHITECTURE',
    title: 'Precision Flow & Proportions',
    desc: 'Golden-ratio spatial planning and structural flow calibrated for effortless living.',
    spec: '1.618',
    specLabel: 'Golden Ratio',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 2,
    number: '02',
    category: 'BESPOKE JOINERY',
    title: 'Heirloom Millwork & Craft',
    desc: 'Custom Italian-grade veneers and concealed joinery engineered to 0.1mm tolerances.',
    spec: '0.1mm',
    specLabel: 'Atelier Precision',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 3,
    number: '03',
    category: 'LIGHT & CHIAROSCURO',
    title: 'Sculpting Space with Light',
    desc: '2700K warm ambient grazes and glare-free 98+ CRI optics synced to natural rhythms.',
    spec: '2700K',
    specLabel: 'Circadian Light',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 4,
    number: '04',
    category: 'TURNKEY EXECUTION',
    title: 'Flawless Digital-Twin Delivery',
    desc: 'Rigorous site oversight and 100% BIM fidelity delivered strictly on schedule.',
    spec: '100%',
    specLabel: 'BIM Compliance',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000'
  }
];

// 3D Perspective Image Transition Variants
// 3D Perspective Image Transition Variants with deeper volumetric depth
const slideVariants3D = {
  enter: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
    rotateX: direction > 0 ? -10 : 10,
    z: -800,
    x: direction > 0 ? 450 : -450,
    scale: 0.78
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
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
    rotateY: direction < 0 ? 45 : -45,
    rotateX: direction < 0 ? -10 : 10,
    z: -800,
    x: direction < 0 ? 450 : -450,
    scale: 0.78,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// 3D Perspective Text Reveal Variants
const textVariants3D = {
  hidden: {
    opacity: 0,
    rotateX: 55,
    y: 45,
    z: -120
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
    rotateX: -45,
    y: -30,
    z: -120,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Smooth Animated Counter component for Expertise metrics (Counts up from 0 when in view)
function AnimatedCounter({ end, duration = 2.2, decimals = 0, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const nodeRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const startValue = 0;
          const endValue = parseFloat(end);

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = startValue + (endValue - startValue) * easeProgress;

            setCount(current);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
}

// 3D Interactive Tilt Metric Card Component
const Metric3DCard = ({ num, unit, label, sublabel, icon: Icon, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    // Calculate 3D tilt angle
    const rX = -(mouseY / (card.height / 2)) * 14;
    const rY = (mouseX / (card.width / 2)) * 14;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative group cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.04 : 1,
          z: isHovered ? 30 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
        className={`relative p-5 sm:p-6 rounded-2xl bg-white/85 hover:bg-white border transition-colors duration-500 overflow-hidden backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.04)] ${
          isHovered
            ? 'border-accent shadow-[0_20px_45px_rgba(138,109,84,0.18)] ring-1 ring-accent/30'
            : 'border-primary/10'
        }`}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Dynamic Holographic / Glass Glare Sheen */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent transition-opacity duration-700 pointer-events-none transform -rotate-45 translate-y-[-100%] group-hover:translate-y-[100%] ${
            isHovered ? 'opacity-100 duration-1000' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'transform, opacity' }}
        />

        {/* 3D Gold Corner Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40 rounded-tl-sm group-hover:border-accent group-hover:scale-125 transition-all" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/40 rounded-tr-sm group-hover:border-accent group-hover:scale-125 transition-all" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/40 rounded-bl-sm group-hover:border-accent group-hover:scale-125 transition-all" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40 rounded-br-sm group-hover:border-accent group-hover:scale-125 transition-all" />

        {/* 3D Background Watermark Architectural Icon */}
        <div
          className="absolute -right-3 -bottom-3 text-accent/10 group-hover:text-accent/20 group-hover:scale-110 transition-all duration-500 pointer-events-none"
          style={{ transform: 'translateZ(10px)' }}
        >
          <Icon className="w-20 h-20" />
        </div>

        {/* Top Tag & Number */}
        <div className="flex items-center justify-between mb-3 relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <span className="font-mono text-[0.62rem] font-bold text-accent tracking-wider">
            0{index + 1} //
          </span>
          <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <Icon className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Sculpted 3D Number */}
        <div className="relative z-10 mb-2" style={{ transform: 'translateZ(35px)' }}>
          <div className="font-serif text-3xl sm:text-4xl text-primary font-medium tracking-tight flex items-baseline">
            <AnimatedCounter
              end={parseFloat(num)}
              decimals={num.includes('.') ? num.split('.')[1].length : 0}
              duration={2.2}
            />
            <span className="text-accent text-lg sm:text-xl font-sans font-light ml-1">
              {unit}
            </span>
          </div>
        </div>

        {/* Label and Subtitle */}
        <div className="relative z-10" style={{ transform: 'translateZ(25px)' }}>
          <h4 className="font-sans text-[0.65rem] sm:text-[0.7rem] tracking-[0.18em] text-primary/90 uppercase font-bold mb-1 leading-snug">
            {label}
          </h4>
          <p className="font-sans text-[0.62rem] text-primary/50 font-light truncate">
            {sublabel}
          </p>
        </div>

        {/* Bottom Expanding 3D Progress Line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[#C5A880] to-accent transform transition-transform duration-500 ${
            isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />
      </motion.div>
    </div>
  );
};

const METRICS_DATA = [
  {
    num: '0.1',
    unit: 'mm',
    label: 'Millimeter Joinery Tolerance',
    sublabel: 'German Blum & CNC Precision',
    icon: Ruler
  },
  {
    num: '98+',
    unit: 'CRI',
    label: 'Circadian Optical Index',
    sublabel: 'Museum Glare-Free Optics',
    icon: Sun
  },
  {
    num: '100',
    unit: '%',
    label: 'BIM 3D Photoreal Compliance',
    sublabel: 'Exact Digital-Twin Fidelity',
    icon: Layers
  },
  {
    num: '250',
    unit: '+',
    label: 'Luxury Residences Delivered',
    sublabel: 'Bespoke Penthouses & Villas',
    icon: ShieldCheck
  }
];

const ExpertisePage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeBanner = EXPERTISE_BANNER_DATA[currentIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play timer (6s)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIdx((prev) => (prev + 1) % EXPERTISE_BANNER_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentIdx]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleSelectBanner = (idx) => {
    setIsAutoPlay(false);
    setDirection(idx > currentIdx ? 1 : -1);
    setCurrentIdx(idx);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? EXPERTISE_BANNER_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % EXPERTISE_BANNER_DATA.length);
  };

  return (
    <div className="w-full bg-[#0E0E0E] text-white font-sans selection:bg-accent selection:text-white flex flex-col justify-between overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* ===================== FULL-WIDTH 3D CINEMATIC EXPERTISE HERO SECTION WITH 3D PARALLAX ===================== */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[68vh] sm:h-[72vh] md:h-[75vh] min-h-[480px] max-h-[680px] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 mt-16 sm:mt-18 select-none"
        style={{ perspective: '1400px' }}
      >

        {/* 3D Background Images Carousel with Parallax Tilt */}
        <motion.div
          animate={{
            rotateX: -mousePos.y * 6,
            rotateY: mousePos.x * 6,
            scale: 1.04
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
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
              {/* Architectural Image with Ken-Burns scale and depth */}
              <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1.02 }}
                transition={{ duration: 7, ease: 'linear' }}
                src={activeBanner.image}
                alt={activeBanner.title}
                className="w-full h-full object-cover object-center brightness-[0.93] contrast-[1.06]"
                style={{ transform: 'translateZ(-50px)' }}
              />

              {/* Holographic blueprint micro grid lines overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                  transform: 'translateZ(-20px)'
                }}
              />

              {/* Minimal Contrast Vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 sm:via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Ambient Warm Accent Glow */}
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[300px] bg-accent/20 rounded-full blur-[140px] pointer-events-none z-10" />

        {/* ===================== MAIN 3D CONTENT OVERLAY ===================== */}
        <div
          className="relative z-20 w-full px-4 sm:px-8 lg:px-12 flex-1 flex items-center"
          style={{ perspective: '1200px' }}
        >
          <div className="max-w-[94rem] mx-auto w-full flex items-center justify-between">
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

                  {/* Category & Discipline Pill */}
                  <motion.div
                    style={{ transform: 'translateZ(40px)' }}
                    className="flex items-center gap-2 mb-2 sm:mb-3"
                  >
                    <span className="w-5 h-[1.5px] bg-accent" />
                    <span className="font-sans text-[0.62rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold drop-shadow-sm">
                      {activeBanner.category}
                    </span>
                    <span className="font-mono text-[0.65rem] text-white/50 ml-1">
                      [{activeBanner.number}/04]
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    style={{ transform: 'translateZ(65px)' }}
                    className="font-serif text-2xl sm:text-4xl md:text-5xl text-white leading-[1.12] tracking-tight mb-3 drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
                  >
                    {activeBanner.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <span className="italic font-light text-accent font-serif">
                      {activeBanner.title.split(' ').slice(-2).join(' ')}
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    style={{ transform: 'translateZ(45px)' }}
                    className="font-sans text-xs sm:text-sm md:text-[0.92rem] text-surface/85 leading-relaxed max-w-lg mb-6 font-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
                  >
                    {activeBanner.desc}
                  </motion.p>

                  {/* Action Row - Single Clean CTA */}
                  <motion.div
                    style={{ transform: 'translateZ(80px)' }}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <a
                      href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20exploring%20your%20Expertise%20and%20would%20like%20to%20consult%20for%20my%20residence."
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-[0_10px_30px_rgba(138,109,84,0.4)] hover:shadow-[0_15px_40px_rgba(138,109,84,0.6)] transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      <span>Consult Studio</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Floating 3D Holographic Specimen Gyroscope Card (Desktop) */}
            <motion.div
              animate={{
                rotateX: -mousePos.y * 22,
                rotateY: mousePos.x * 22,
                z: 60
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 22 }}
              className="hidden lg:flex flex-col items-center justify-center relative p-6 rounded-3xl bg-black/40 border border-white/15 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] ring-1 ring-white/10 w-[240px] transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Rotating Golden Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-2xl border border-dashed border-accent/30 pointer-events-none"
              />

              {/* Spec Numerical Badge */}
              <div
                style={{ transform: 'translateZ(45px)' }}
                className="text-center mb-3"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold block mb-1">
                  Engineering Standard
                </span>
                <div className="font-serif text-4xl text-white font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {activeBanner.spec}
                </div>
              </div>

              {/* Spec Label */}
              <div
                style={{ transform: 'translateZ(30px)' }}
                className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[0.62rem] font-sans font-semibold text-accent uppercase tracking-wider text-center"
              >
                {activeBanner.specLabel}
              </div>
            </motion.div>
          </div>

        </div>

        {/* ===================== BOTTOM TABS & CONTROLS ===================== */}
        <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 pt-3">
          <div className="max-w-[94rem] mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/15 pt-3">

              {/* 4 Interactive Progress Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl">
                {EXPERTISE_BANNER_DATA.map((item, idx) => {
                  const isActive = currentIdx === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectBanner(idx)}
                      className={`p-2 sm:p-2.5 rounded-xl text-left transition-all duration-300 relative border cursor-pointer overflow-hidden backdrop-blur-md ${
                        isActive
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
        </div>

      </section>


      {/* ===================== 3D INTERACTIVE METRICS STRIP (LIGHT) ===================== */}
      <section className="w-full bg-[#FDF9F1] text-primary border-y border-primary/10 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[95rem] mx-auto relative z-10">
          
          {/* Section Header Strip - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 pb-6 border-b border-primary/10"
          >
            <div className="flex items-center justify-center space-x-2.5 mb-2.5">
              <span className="w-6 sm:w-10 h-[1.5px] bg-accent" />
              <span className="font-mono text-[0.68rem] sm:text-xs tracking-[0.3em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Technical Rigor &amp; Benchmarks
              </span>
              <span className="w-6 sm:w-10 h-[1.5px] bg-accent" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-primary tracking-tight mb-2.5 leading-[1.2]">
              Engineered Precision &amp; <span className="italic font-light text-accent">Craft Standards.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-primary/70 max-w-xl font-light leading-relaxed">
              Every millimeter, lighting spectrum, and 3D architectural twin held to uncompromising German engineering benchmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {METRICS_DATA.map((item, idx) => (
              <Metric3DCard key={idx} index={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SPATIAL ANATOMY BLUEPRINT STUDIO (DARK) ===================== */}
      <div id="blueprint-viewer">
        <SpatialAnatomyStudio />
      </div>

      {/* ===================== MATERIAL ATELIER (DARK) ===================== */}
      <MaterialAtelier />

      {/* ===================== LUXURY ATELIER CONSULTATION CTA (LIGHT) ===================== */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FDF9F1] text-primary border-t border-primary/10 relative overflow-hidden">
        {/* Subtle warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Framed Luxury Architectural Card */}
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-primary/10 p-7 sm:p-10 md:p-12 text-center shadow-[0_20px_50px_rgba(138,109,84,0.12)] overflow-hidden">
            
            {/* 4 Golden Architectural Corner Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent/50 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent/50 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent/50 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent/50 pointer-events-none" />

            {/* Symmetrical Top Tag */}
            <div className="flex items-center justify-center space-x-2.5 mb-3">
              <span className="w-5 h-[1px] bg-accent" />
              <span className="font-sans text-[0.62rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-accent" />
                Begin Your Spatial Journey
              </span>
              <span className="w-5 h-[1px] bg-accent" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary leading-tight mb-3">
              Ready to Translate Vision into <span className="italic text-accent font-light font-serif">Enduring Luxury?</span>
            </h2>

            {/* Brief 1-Line Description */}
            <p className="font-sans text-xs sm:text-sm text-primary/70 leading-relaxed max-w-lg mx-auto mb-6 font-light">
              Book a private 1-on-1 consultation with our principal architect to review floorplans, spatial flow, and curated material palettes.
            </p>

            {/* 3 Quick Studio Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-7 text-[0.65rem] font-sans text-primary/70">
              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-primary/5 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 100% Turnkey Delivery
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-primary/5 font-medium flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-accent" /> Complimentary 3D Audit
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-primary/5 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" /> Surat Flagship Atelier
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20book%20an%20architectural%20consultation."
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-lg shadow-accent/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-103 active:scale-98"
              >
                <span>Book Studio Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/aboutus"
                className="px-6 py-3 bg-[#FAF6EE] hover:bg-white border border-primary/15 hover:border-accent text-primary font-sans text-xs tracking-[0.18em] uppercase font-semibold rounded-xl shadow-xs transition-all"
              >
                About Our Studio
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default ExpertisePage;
