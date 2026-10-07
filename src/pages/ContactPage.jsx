import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  User,
  Smartphone,
  Building2,
  Clock,
  ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Surat',
    service: 'Interior Architecture & Design',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      const generatedRef = 'INC-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setFormStatus('success');
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const msg = `*New Contact Inquiry - INCHES Studio*%0A%0A` +
      `*Name:* ${formData.name || 'Prospective Client'}%0A` +
      `*Phone:* ${formData.phone || 'Not provided'}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Location:* ${formData.city}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message || 'I would like to discuss a design consultation.'}`;
    return `https://wa.me/919702763876?text=${msg}`;
  };

  return (
    <div className="min-h-screen font-sans bg-[#FAF6EE] text-primary selection:bg-accent selection:text-white flex flex-col justify-between">
      {/* Header */}
      <Header />

      {/* ========================================================================= */}
      {/* HERO BANNER SECTION (DARK LUXURY ARCHITECTURAL)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0E0E0E] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        
        {/* Ambient Warm Golden Glows */}
        <div className="absolute top-16 left-1/4 w-[500px] h-[280px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-[400px] h-[220px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Breadcrumb & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-white/50">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent font-semibold">Contact &amp; Atelier</span>
            </div>
            <span className="hidden sm:inline-block w-6 h-[1px] bg-white/20" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-[0.65rem] tracking-[0.25em] uppercase font-bold text-accent">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Private Consultations</span>
            </div>
          </motion.div>

          {/* Hero Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-[1.14] tracking-tight mb-4">
                Initiate Your <br />
                <span className="italic font-light text-accent font-serif">
                  Spatial Sanctuary.
                </span>
              </h1>

              <p className="font-sans text-xs sm:text-sm text-surface/75 leading-relaxed max-w-xl font-light">
                Connect directly with principal founders <strong className="text-white font-medium">Nilesh Donga</strong> &amp; <strong className="text-white font-medium">Ar. Bhavik Savaliya</strong> for turnkey luxury residences, penthouses, and bespoke architecture across Surat, Mumbai &amp; Pan-India.
              </p>
            </motion.div>

            {/* Quick Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-3"
            >
              <a
                href="tel:+919702763876"
                className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <PhoneCall className="w-4 h-4 text-accent" />
                  <span className="text-[0.6rem] uppercase tracking-wider text-accent font-semibold">Direct Call</span>
                </div>
                <div className="font-medium text-xs sm:text-sm text-white truncate">+91 97027 63876</div>
                <div className="text-[0.65rem] text-surface/50 mt-0.5">Mon–Sat (10AM–7PM)</div>
              </a>

              <a
                href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20turnkey%20interior%20project."
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#25D366]/40 backdrop-blur-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[0.6rem] uppercase tracking-wider text-[#25D366] font-semibold">WhatsApp</span>
                </div>
                <div className="font-medium text-xs sm:text-sm text-white">Instant Chat</div>
                <div className="text-[0.65rem] text-surface/50 mt-0.5">Direct Principal Line</div>
              </a>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="text-[0.6rem] uppercase tracking-wider font-semibold">Surat Studio</span>
                </div>
                <div className="text-xs text-white/90">Vesu, Surat</div>
                <div className="text-[0.65rem] text-surface/50 mt-0.5">Gujarat 395007</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[0.6rem] uppercase tracking-wider font-semibold">Mumbai Atelier</span>
                </div>
                <div className="text-xs text-white/90">Bandra West</div>
                <div className="text-[0.65rem] text-surface/50 mt-0.5">By Appointment</div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CLEAN SINGLE-FORM CARD (WARM SAND #FAF6EE)                     */}
      {/* ========================================================================= */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          {/* Form Header Note */}
          <div className="text-center mb-8">
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-bold text-accent block mb-1">
              Project Consultation Form
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
              Schedule Your Private Briefing
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-primary/70 font-light">
              Leave your details below and our team will connect with you within 4 business hours.
            </p>
          </div>

          {/* Single Clean Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-primary/10 shadow-xl shadow-primary/[0.03] relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />

            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-primary mb-2">
                  Thank You for Reaching Out
                </h3>
                <p className="text-primary/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your inquiry has been received. Reference ID: <span className="font-mono font-bold text-accent">{referenceId}</span>. We will get in touch with you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.18em] uppercase font-bold rounded-xl shadow-md shadow-accent/20 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Sync</span>
                  </a>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-5 py-3 border border-primary/20 hover:border-primary text-primary font-sans text-xs tracking-[0.15em] uppercase rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-primary/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Nilesh Patel"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Smartphone className="w-4 h-4 text-primary/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-primary/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                      City / Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-primary/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Surat, Mumbai, etc."
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Requirement */}
                <div>
                  <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Interior Architecture & Design">Interior Architecture & Design</option>
                    <option value="Turnkey Residential Project">Turnkey Residential Project</option>
                    <option value="Luxury Penthouse / Villa Design">Luxury Penthouse / Villa Design</option>
                    <option value="Architectural Renovation">Architectural Renovation</option>
                    <option value="Commercial / Boutique Space">Commercial / Boutique Space</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[0.7rem] font-bold tracking-wider text-primary uppercase mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your space, carpet area, requirements, or vision..."
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#FAF6EE]/50 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Form Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full sm:flex-1 py-3.5 px-6 bg-primary hover:bg-accent text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-101 active:scale-99"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white border border-[#25D366]/30 font-sans text-xs tracking-[0.15em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </motion.div>

          {/* Minimal Clean Contact Strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <a
              href="tel:+919702763876"
              className="bg-white/70 hover:bg-white p-3.5 rounded-2xl border border-primary/10 transition-all flex items-center justify-center gap-2.5 text-xs text-primary/80 hover:text-accent shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-accent" />
              <span>+91 97027 63876</span>
            </a>

            <a
              href="mailto:inchesdesignstudio@gmail.com"
              className="bg-white/70 hover:bg-white p-3.5 rounded-2xl border border-primary/10 transition-all flex items-center justify-center gap-2.5 text-xs text-primary/80 hover:text-accent shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>inchesdesignstudio@gmail.com</span>
            </a>

            <div className="bg-white/70 p-3.5 rounded-2xl border border-primary/10 flex items-center justify-center gap-2.5 text-xs text-primary/80 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Surat &amp; Mumbai</span>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
