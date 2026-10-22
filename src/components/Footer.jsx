import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

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
              <Link to="/" onClick={scrollToTop} className="flex items-center mb-6 group inline-flex" title="INCHES Interiors & Architecture">
                <svg
                  viewBox="50 85 400 290"
                  className="w-44 sm:w-52 lg:w-[210px] h-auto drop-shadow-sm brightness-0 invert opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                  aria-label="INCHES Interiors & Architecture"
                >
                  <image href="/logo_img.png" width="500" height="500" className="brightness-0 invert" />
                </svg>
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
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md relative transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(37,211,102,0.45)] active:scale-95"
                aria-label="WhatsApp Studio"
                title="WhatsApp: Nilesh Donga (Founder)"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] text-[#25D366] font-bold text-[0.6rem] rounded-full flex items-center justify-center border border-[#25D366] transition-transform duration-300 group-hover:scale-110">
                  1
                </span>
              </a>

              {/* WhatsApp 2 - Jignesh Mistry (CEO) */}
              <a
                href="https://wa.me/919699228269?text=Hello%20Jignesh%20Mistry,%20I%20would%20like%20to%20consult%20regarding%20an%20architectural%20project."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md relative transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(37,211,102,0.45)] active:scale-95"
                aria-label="WhatsApp Jignesh Mistry"
                title="WhatsApp: Jignesh Mistry (CEO)"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] text-[#25D366] font-bold text-[0.6rem] rounded-full flex items-center justify-center border border-[#25D366] transition-transform duration-300 group-hover:scale-110">
                  2
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(221,42,123,0.45)] active:scale-95"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(24,119,242,0.45)] active:scale-95"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(10,102,194,0.45)] active:scale-95"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
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
                <Link to="/" onClick={scrollToTop} className="hover:text-accent transition-colors">Home</Link>
              </li>
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
