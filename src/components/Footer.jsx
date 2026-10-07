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

            <div className="flex flex-wrap items-center gap-3">
              {/* WhatsApp 1 - Nilesh Donga / Studio Line */}
              <a
                href="https://wa.me/919702763876?text=Hello%20Nilesh%20Donga,%20I%20would%20like%20to%20consult%20for%20an%20interior%20couture%20project."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] flex items-center justify-center text-[#25D366] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_18px_rgba(37,211,102,0.45)] relative group/wa1"
                aria-label="WhatsApp Studio"
                title="WhatsApp: Nilesh Donga (Founder)"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] text-[#0A0A0A] font-bold text-[0.55rem] rounded-full flex items-center justify-center border border-[#0A0A0A]">
                  1
                </span>
              </a>

              {/* WhatsApp 2 - Ar. Bhavik Savaliya / Architectural Line */}
              <a
                href="https://wa.me/919702763876?text=Hello%20Ar.%20Bhavik%20Savaliya,%20I%20would%20like%20to%20consult%20regarding%20architectural%20layout."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] flex items-center justify-center text-[#25D366] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_18px_rgba(37,211,102,0.45)] relative group/wa2"
                aria-label="WhatsApp Architecture"
                title="WhatsApp: Ar. Bhavik Savaliya (Co-Founder)"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] text-[#0A0A0A] font-bold text-[0.55rem] rounded-full flex items-center justify-center border border-[#0A0A0A]">
                  2
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#E1306C]/15 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] border border-[#E1306C]/40 hover:border-transparent flex items-center justify-center text-[#E1306C] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_18px_rgba(225,48,108,0.5)]"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2]/15 hover:bg-[#1877F2] border border-[#1877F2]/40 hover:border-[#1877F2] flex items-center justify-center text-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_18px_rgba(24,119,242,0.45)]"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2]/15 hover:bg-[#0A66C2] border border-[#0A66C2]/40 hover:border-[#0A66C2] flex items-center justify-center text-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
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
                <Link to="/aboutus" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-accent transition-colors">Expertise</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="/#transformation" className="hover:text-accent transition-colors">Before &amp; After</a>
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
