import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <header
            className={`w-full fixed top-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm py-2' : 'bg-surface py-5'
                }`}
        >
            {/* Top thin line for extra elegance */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group">
                        {/* Elegant SVG Graphic representing an interior arch/lamp */}
                        <svg width="40" height="50" viewBox="0 0 40 50" className="mr-3 transform group-hover:scale-105 transition-transform duration-500">
                            <path d="M5,50 L5,20 C5,10 15,5 25,5 C35,5 35,25 35,35 L35,50" fill="none" stroke="#8A6D54" strokeWidth="1.5" />
                            <circle cx="20" cy="18" r="4" fill="none" stroke="#1A1A1A" strokeWidth="1" />
                            <line x1="20" y1="5" x2="20" y2="14" stroke="#1A1A1A" strokeWidth="1" />
                            <path d="M0,50 L10,50" stroke="#1A1A1A" strokeWidth="1.5" />
                        </svg>
                        <div className="flex flex-col items-center">
                            <span className="font-serif text-3xl tracking-[0.25em] text-primary uppercase leading-none">
                                Inches
                            </span>
                            <div className="flex items-center mt-2 w-full justify-center">
                                <div className="w-12 h-[1px] bg-accent/60 mr-2"></div>
                                <span className="font-sans text-[0.6rem] tracking-[0.4em] text-accent uppercase font-light">
                                    Interiors
                                </span>
                                <div className="w-12 h-[1px] bg-accent/60 ml-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-primary font-sans text-xs tracking-[0.15em] uppercase px-2 py-2"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                                    {link.name}
                                </span>
                                {/* Minimalist dot indicator on hover */}
                                <span className="absolute left-1/2 -bottom-1 w-1 h-1 bg-accent rounded-full opacity-0 transform -translate-x-1/2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button & Search/Menu Icons */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#consult"
                            className="group flex items-center px-6 py-2.5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-surface transition-all duration-500 font-sans text-[0.65rem] tracking-[0.25em] uppercase overflow-hidden relative"
                        >
                            <span className="relative z-10 flex items-center">
                                Consult Now
                                <svg className="w-3 h-3 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-accent focus:outline-none transition-colors"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M4 7h16M4 12h16M4 17h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden bg-surface absolute w-full transition-all duration-500 ease-in-out border-b border-accent/10 ${isOpen ? 'opacity-100 max-h-[400px] shadow-2xl py-6' : 'opacity-0 max-h-0 overflow-hidden py-0'
                    }`}
            >
                <div className="px-6 space-y-6 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block w-full text-center text-primary hover:text-accent font-sans text-xs tracking-[0.2em] uppercase transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-full pt-6 flex justify-center">
                        <a
                            href="#consult"
                            className="flex justify-center items-center w-3/4 px-8 py-4 border border-primary bg-primary text-surface transition-all duration-300 font-sans text-xs tracking-[0.2em] uppercase"
                            onClick={() => setIsOpen(false)}
                        >
                            Consult Now
                            <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
