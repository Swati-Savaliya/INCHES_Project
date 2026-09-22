import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
    {
        id: 1,
        title: 'Timeless Elegance',
        subtitle: 'INTERIOR ARCHITECTURE',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000',
    },
    {
        id: 2,
        title: 'Modern Simplicity',
        subtitle: 'BESPOKE DESIGN',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000',
    },
    {
        id: 3,
        title: 'Refined Living',
        subtitle: 'MASTER PLANNING',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
    }
];

// 3D Animation Variants for Image Transition
const slideVariants = {
    enter: (direction) => ({
        opacity: 0,
        rotateY: direction > 0 ? 45 : -45,
        z: -800,
        x: direction > 0 ? 500 : -500,
        scale: 0.8
    }),
    center: {
        opacity: 1,
        rotateY: 0,
        z: 0,
        x: 0,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1] // Very smooth custom ease
        }
    },
    exit: (direction) => ({
        opacity: 0,
        rotateY: direction < 0 ? 45 : -45,
        z: -800,
        x: direction < 0 ? 500 : -500,
        scale: 0.8,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

// 3D Text Reveal Variants
const textVariants = {
    hidden: { opacity: 0, rotateX: 60, y: 50, z: -100 },
    visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        z: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    },
    exit: {
        opacity: 0,
        rotateX: -60,
        y: -50,
        z: -100,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const Hero = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);
    const imageIndex = Math.abs(page % sliderData.length);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDirection(1);
            setPage(page + 1);
        }, 6000);
        return () => clearTimeout(timer);
    }, [page]);

    const handleThumbnailClick = (idx) => {
        const newDirection = idx > imageIndex ? 1 : -1;
        setDirection(newDirection);
        setPage(idx);
    };

    return (
        // Added perspective to the main container for 3D depth
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-primary flex flex-col justify-end" style={{ perspective: '1200px' }}>

            {/* Background Images with 3D Carousel Transition */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full transform-gpu"
                >
                    {/* Subtle Continuous Zoom Effect inside the 3D slide */}
                    <motion.img
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                        src={sliderData[imageIndex].image}
                        alt={sliderData[imageIndex].title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-primary/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30"></div>
                </motion.div>
            </AnimatePresence>

            {/* Centered Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-12 pointer-events-none" style={{ perspective: '1000px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center transform-gpu"
                    >
                        {/* Accent Subtitle */}
                        <h3 className="font-sans text-[0.65rem] md:text-xs tracking-[0.4em] uppercase font-bold mb-6 drop-shadow-md">
                            <span className="bg-surface/90 text-primary px-4 py-1.5 inline-block">
                                {sliderData[imageIndex].subtitle}
                            </span>
                        </h3>

                        {/* Massive Centered Title */}
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] text-surface leading-[1.1] mb-10 drop-shadow-2xl max-w-4xl">
                            {sliderData[imageIndex].title}
                        </h1>

                        {/* Discover Button */}
                        <div className="pointer-events-auto">
                            <a
                                href="#portfolio"
                                className="group relative flex items-center justify-center space-x-4 pb-2"
                            >
                                <span className="font-sans text-xs tracking-[0.2em] text-surface uppercase group-hover:text-accent transition-colors duration-300">
                                    Discover Our Work
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-surface/50 group-hover:bg-accent transition-colors duration-300">
                                    <span className="absolute top-0 left-0 w-0 h-full bg-accent group-hover:w-full transition-all duration-500 ease-out"></span>
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Luxury Thumbnail Navigation (Bottom Right) */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 flex items-center space-x-4 pointer-events-auto">
                {sliderData.map((slide, idx) => (
                    <button
                        key={slide.id}
                        onClick={() => handleThumbnailClick(idx)}
                        className={`relative overflow-hidden transition-all duration-500 focus:outline-none ${imageIndex === idx
                            ? 'w-24 h-16 border-2 border-surface/80 shadow-lg scale-110'
                            : 'w-16 h-10 border border-surface/20 opacity-50 hover:opacity-100 hover:scale-105'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title1}
                            className="w-full h-full object-cover"
                        />
                        {imageIndex === idx && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 6, ease: "linear" }}
                                className="absolute bottom-0 left-0 h-1 bg-accent"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:flex flex-col items-center pointer-events-none">
                <span className="font-sans text-[0.55rem] tracking-[0.3em] text-surface/60 uppercase mb-2">Scroll</span>
                <div className="w-[1px] h-8 bg-surface/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-surface"
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
