import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-12 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
                <svg width="34" height="42" viewBox="0 0 40 50" className="text-accent group-hover:scale-105 transition-transform duration-300">
                  <path d="M5,50 L5,20 C5,10 15,5 25,5 C35,5 35,25 35,35 L35,50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="20" y1="5" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,50 L10,50" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl tracking-[0.25em] text-white uppercase leading-none">
                    INCHES
                  </span>
                  <span className="font-sans text-[0.6rem] tracking-[0.45em] text-accent uppercase font-light mt-1">
                    Interiors &amp; Architecture
                  </span>
                </div>
              </Link>

              <p className="font-sans text-xs sm:text-sm text-surface/60 leading-relaxed max-w-sm mb-6">
                Pioneering bespoke interior architecture and sensory spatial design. We sculpt living environments that blend tactile luxury with refined engineering.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919702763876"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center text-surface/80 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center text-surface/80 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:inchesdesignstudio@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center text-surface/80 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Studio Locations (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-accent font-bold mb-6">
              Studio Locations
            </h4>
            <div className="space-y-5 font-sans text-xs">
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Surat Design Studio</span>
                </div>
                <p className="text-surface/60 pl-5.5 leading-relaxed">
                  VIP Road, Vesu, Surat, Gujarat 395007
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Mumbai Atelier (By Appt.)</span>
                </div>
                <p className="text-surface/60 pl-5.5 leading-relaxed">
                  Bandra West, Mumbai, Maharashtra 400050
                </p>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-accent font-bold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs text-surface/70">
              <li>
                <Link to="/philosophy" className="hover:text-accent transition-colors">Philosophy</Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-accent transition-colors">Expertise</Link>
              </li>
              <li>
                <a href="/#transformation" className="hover:text-accent transition-colors">Before &amp; After</a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-accent transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="/#visualizer" className="hover:text-accent transition-colors">Studio Visualizer</a>
              </li>
              <li>
                <a href="/#consult" className="hover:text-accent transition-colors">Cost Estimator</a>
              </li>
            </ul>
          </div>

          {/* Direct Consultation Box (3 Cols) */}
          <div className="lg:col-span-3 bg-[#141414] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[0.65rem] uppercase tracking-wider text-accent font-bold block mb-1">
                Direct Line
              </span>
              <h4 className="font-serif text-lg text-white font-medium mb-3">
                Speak with Principal Architect
              </h4>
              <p className="font-sans text-xs text-surface/60 mb-4 leading-relaxed">
                Available Mon – Sat, 10 AM to 7 PM IST for private project inquiries.
              </p>
            </div>

            <a
              href="https://wa.me/919702763876?text=Hello%20INCHES,%20I%20would%20like%20to%20inquire%20about%20interior%20architecture%20services."
              target="_blank"
              rel="noreferrer"
              className="py-3 px-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-wider uppercase font-bold flex items-center justify-between transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-surface/40">
          <p>© {new Date().getFullYear()} INCHES Interiors. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <span className="text-sm">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
