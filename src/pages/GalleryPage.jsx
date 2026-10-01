import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Ruler,
  Sparkles,
  ArrowUpRight,
  Compass,
  Layers,
  Filter,
  Search,
  Eye,
  Calendar,
  PhoneCall,
  SlidersHorizontal,
  Grid3X3,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CATEGORIES = [
  'All Spaces',
  'Living Lounges',
  'Master Suites',
  'Bespoke Kitchens',
  'Luxury Villas',
  'Penthouses',
  'Commercial'
];

const GALLERY_PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'The Obsidian Pavilion',
    category: 'Living Lounges',
    location: 'Vesu, Surat',
    area: '4,850 sq.ft',
    year: '2025',
    spec: '1.618 Golden Scale',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    tag: 'Formal Living Space',
    desc: 'An expansive open-concept living pavilion finished in honed Roman travertine, champagne bronze slats, and bespoke acoustic upholstery.',
    materials: ['Roman Travertine', 'Brushed Bronze', 'Warm Walnut', 'Bouclé Wool'],
    lux: '2700K Amber Graze'
  },
  {
    id: 2,
    num: '02',
    title: 'Minimalist Horizon Suite',
    category: 'Master Suites',
    location: 'Dumas Road, Surat',
    area: '2,400 sq.ft',
    year: '2025',
    spec: 'STC 55 Sound Barrier',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1600',
    tag: 'Master Sanctuary',
    desc: 'A tranquil bedroom retreat designed with acoustic fluted oak panelling, indirect circadian glow, and integrated panoramic walk-in wardrobe.',
    materials: ['Fluted White Oak', 'Bouclé Fabric', 'Calacatta Gold', 'Raw Linen'],
    lux: '2200K Circadian Night'
  },
  {
    id: 3,
    num: '03',
    title: 'Monolithic Culinary Atelier',
    category: 'Bespoke Kitchens',
    location: 'Pal, Surat',
    area: '1,850 sq.ft',
    year: '2025',
    spec: '0.5mm Shadow Trims',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
    tag: 'Gourmet Kitchen',
    desc: 'Cantilevered Taj Mahal quartzite island with motorized bi-fold pantries and smart ergonomic downdraft extraction.',
    materials: ['Taj Mahal Quartzite', 'Smoked Oak', 'Champagne Brass', 'Smoked Glass'],
    lux: '3000K Prep / 2400K Ambient'
  },
  {
    id: 4,
    num: '04',
    title: 'The Sunken Courtyard Villa',
    category: 'Luxury Villas',
    location: 'Althan, Surat',
    area: '8,500 sq.ft',
    year: '2025',
    spec: 'Indoor-Outdoor Biophilic',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    tag: 'Villa Architecture',
    desc: 'Contemporary architectural estate harmonizing reflecting water channels, double-height glazing, and cantilevered pergola shading.',
    materials: ['Exposed Concrete', 'Teak Wood', 'Basalt Stone', 'Water Glass'],
    lux: 'Dynamic Daylighting'
  },
  {
    id: 5,
    num: '05',
    title: 'Glasshouse Zenith Penthouse',
    category: 'Penthouses',
    location: 'Citylight, Surat',
    area: '6,200 sq.ft',
    year: '2026',
    spec: '360° Skyline Views',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    tag: 'Sky Residence',
    desc: 'Sky-high penthouse living space with panoramic skyline vistas, floating ceilings, and warm fumed timber deck integration.',
    materials: ['Engineered Timber', 'Curved Glass', 'Raw Slate', 'Brushed Steel'],
    lux: 'Sunset Circadian Scene'
  },
  {
    id: 6,
    num: '06',
    title: 'Statuary Marble Wellness Spa',
    category: 'Master Suites',
    location: 'Dumas Beach, Surat',
    area: '1,450 sq.ft',
    year: '2025',
    spec: 'Zero-Threshold Hydrology',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
    tag: 'Private Spa Suite',
    desc: 'Ultra-luxury master bathroom featuring freestanding monolithic carved soaking tub, bookmatched marble, and zenithal rainfall skylight.',
    materials: ['Ceppo di Gré Stone', 'Bookmatched Marble', 'Gunmetal PVD', 'Fluted Glass'],
    lux: 'Zenith Skylight + 2400K'
  },
  {
    id: 7,
    num: '07',
    title: 'The Solarium Conservatory',
    category: 'Living Lounges',
    location: 'VIP Road, Surat',
    area: '3,800 sq.ft',
    year: '2025',
    spec: 'Biophilic Microclimate',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    tag: 'Sunlit Living',
    desc: 'Botanical glass conservatory with floor-to-ceiling slender casements, lime wash walls, and bespoke low-slung lounge seating.',
    materials: ['Wrought Steel', 'Lime Plaster', 'Belgian Linen', 'Travertine'],
    lux: 'Natural Diffused Sunlight'
  },
  {
    id: 8,
    num: '08',
    title: 'The Artisanal Private Cellar',
    category: 'Commercial',
    location: 'Athwa Lines, Surat',
    area: '2,100 sq.ft',
    year: '2024',
    spec: 'Climate Precision Controlled',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600',
    tag: 'Private Tasting Vault',
    desc: 'Acoustically isolated private wine salon and tasting chamber with reclaimed European terracotta bricks and custom satin brass racking.',
    materials: ['Terracotta Brick', 'Aged Brass', 'French Oak', 'Acoustic Velvet'],
    lux: '2000K Candle Warmth'
  },
  {
    id: 9,
    num: '09',
    title: 'Cantilevered Sunset Estate',
    category: 'Luxury Villas',
    location: 'Dumas Coast, Surat',
    area: '10,500 sq.ft',
    year: '2026',
    spec: 'Cantilevered Infinity Edge',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
    tag: 'Grand Coastal Villa',
    desc: 'Monolithic coastal villa design with cantilevered infinity pool terrace, glass bridge transition, and sunken outdoor fire amphitheater.',
    materials: ['Corten Steel', 'Travertine Slabs', 'Weatherproof Teak', 'Frameless Glass'],
    lux: 'Architectural Uplighting'
  },
  {
    id: 10,
    num: '10',
    title: 'Couture Monolithic Wardrobe',
    category: 'Master Suites',
    location: 'Ghod Dod Road, Surat',
    area: '1,800 sq.ft',
    year: '2025',
    spec: 'Concealed LED Vitrines',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600',
    tag: 'Walk-in Atelier',
    desc: 'Bespoke dressing salon with tinted glass vitrines, micro-optical lighting, Italian leather inlays, and custom velvet jewelry displays.',
    materials: ['Smoked Glass', 'Leather Inlays', 'Champagne Brass', 'Eucalyptus Wood'],
    lux: '98+ CRI Color-True LED'
  },
  {
    id: 11,
    num: '11',
    title: 'Statuario Brass Culinary Lab',
    category: 'Bespoke Kitchens',
    location: 'Vesu, Surat',
    area: '2,200 sq.ft',
    year: '2025',
    spec: 'Zero-Handle Pocket Architecture',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1600',
    tag: 'Chef Atelier',
    desc: 'Dramatic bookmatched marble backsplash with floating brass shelving, concealed appliances, and seamless induction cooktop integration.',
    materials: ['Statuario Marble', 'Solid Brass', 'Charcoal Oak', 'Matte Lacquer'],
    lux: '3000K Task / 2200K Mood'
  },
  {
    id: 12,
    num: '12',
    title: 'Haute Fashion Atelier Showroom',
    category: 'Commercial',
    location: 'Ghod Dod Road, Surat',
    area: '3,600 sq.ft',
    year: '2025',
    spec: 'Curved Plaster Acoustics',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600',
    tag: 'Luxury Retail Showroom',
    desc: 'Designer boutique showroom featuring sculptural display arches, seamless microcement floors, and soft diffuse ceiling illumination.',
    materials: ['Microcement', 'Champagne Metal', 'Plaster Arches', 'Velvet Drapery'],
    lux: 'Soft Diffuse Daylight'
  },
  {
    id: 13,
    num: '13',
    title: 'The Riverfront Solarium Estate',
    category: 'Luxury Villas',
    location: 'Tapi Riverfront, Surat',
    area: '9,400 sq.ft',
    year: '2025',
    spec: 'Curved Double Glazing',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    tag: 'Waterfront Villa',
    desc: 'Majestic riverfront estate with floor-to-ceiling glass solarium, sunken firepit terrace, and floating teak wood stairs.',
    materials: ['River Stone', 'Burma Teak', 'Reflective Glass', 'Cast Bronze'],
    lux: 'Circadian River Glow'
  },
  {
    id: 14,
    num: '14',
    title: 'Aura Executive Headquarters',
    category: 'Commercial',
    location: 'SG Highway, Ahmedabad',
    area: '5,800 sq.ft',
    year: '2025',
    spec: 'Smart Glass Privacy',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    tag: 'Corporate Atelier',
    desc: 'High-end boardroom and private executive suite featuring fluted acoustics, custom leather conference table, and ambient concealed LED coves.',
    materials: ['Smoked Walnut', 'Anodized Titanium', 'Full Grain Leather', 'Switchable Glass'],
    lux: 'Automated 4000K Focus / 2700K Relax'
  },
  {
    id: 15,
    num: '15',
    title: 'Emerald Terraces Master Wing',
    category: 'Master Suites',
    location: 'Gotri, Vadodara',
    area: '3,100 sq.ft',
    year: '2024',
    spec: 'Private Garden Balcony',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&q=80&w=1600',
    tag: 'Garden Suite',
    desc: 'Lush master retreat opening to a private landscaped terrace, featuring silk wallpaper, bespoke vanity mirror, and acoustic ceiling baffles.',
    materials: ['Raw Silk Wallcovering', 'Verde Guatemala Marble', 'Oiled Oak', 'Linen'],
    lux: '2400K Warm Ambient'
  },
  {
    id: 16,
    num: '16',
    title: 'The Glass Horizon Penthouse',
    category: 'Penthouses',
    location: 'Bodakdev, Ahmedabad',
    area: '7,500 sq.ft',
    year: '2025',
    spec: 'Wraparound Sunset Deck',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1600',
    tag: 'Panoramic Penthouse',
    desc: 'Architectural duplex crowning Ahmedabad skyline with private wellness deck, cantilevered outdoor jacuzzi, and custom wine vault.',
    materials: ['Statuary White Marble', 'Charcoal Steel', 'Low-Iron Glass', 'Brushed Copper'],
    lux: 'Sunset Sensor Glow'
  }
];

const GALLERY_BANNER_DATA = [
  {
    id: 1,
    number: '01',
    category: 'FORMAL RESIDENTIAL ARCHITECTURE',
    title: 'The Obsidian Living Pavilion',
    desc: 'Harmonious double-height proportions finished in Italian travertine, bronze reveals, and bespoke acoustic upholstery in Vesu, Surat.',
    spec: '4,850',
    specLabel: 'Living Pavilion',
    areaUnit: 'sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 2,
    number: '02',
    category: 'NOCTURNAL SANCTUARY',
    title: 'Horizon Master Penthouse Suite',
    desc: 'Tranquil bedroom suite on Dumas Road crafted with acoustic fluted oak, Calacatta gold marble, and 2200K circadian glow.',
    spec: '2,400',
    specLabel: 'Master Suite',
    areaUnit: 'sq.ft',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 3,
    number: '03',
    category: 'GOURMET KITCHEN CRAFT',
    title: 'Monolithic Quartzite Atelier',
    desc: 'Seamless Taj Mahal quartzite cantilever island in Pal with motorized bi-fold pantries and 0.5mm shadow trims.',
    spec: '1,850',
    specLabel: 'Bespoke Kitchen',
    areaUnit: 'sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 4,
    number: '04',
    category: 'BIOPHILIC VILLA ARCHITECTURE',
    title: 'The Sunken Courtyard Estate',
    desc: '8,500 sq.ft architectural residence in Althan harmonizing water reflection mirrors, exposed concrete, and double-height glazing.',
    spec: '8,500',
    specLabel: 'Luxury Villa',
    areaUnit: 'sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000'
  }
];

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

// 3D Perspective Text Reveal Variants with spring depth
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

const STATS_BAR = [
  { val: '250+', label: 'Luxury Residences', sub: 'Completed across Gujarat' },
  { val: '0.1mm', label: 'Precision Tolerances', sub: 'Engineered bespoke joinery' },
  { val: '100%', label: 'Living Natural Materials', sub: 'Stone, timber & lime plaster' },
  { val: '14', label: 'Design Citations', sub: 'National architecture recognition' }
];

const GalleryPage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [selectedCategory, setSelectedCategory] = useState('All Spaces');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const gallerySectionRef = useRef(null);

  const activeBanner = GALLERY_BANNER_DATA[currentIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset to first page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Auto-play timer (6s)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIdx((prev) => (prev + 1) % GALLERY_BANNER_DATA.length);
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
    setCurrentIdx((prev) => (prev === 0 ? GALLERY_BANNER_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % GALLERY_BANNER_DATA.length);
  };

  const filteredProjects = GALLERY_PROJECTS.filter((p) => {
    const matchCat = selectedCategory === 'All Spaces' || p.category === selectedCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const openModal = (project) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    setActiveModalProject(null);
  };

  const nextProject = () => {
    if (!activeModalProject) return;
    const currentIdx = filteredProjects.findIndex((p) => p.id === activeModalProject.id);
    const nextIdx = (currentIdx + 1) % filteredProjects.length;
    setActiveModalProject(filteredProjects[nextIdx]);
  };

  const prevProject = () => {
    if (!activeModalProject) return;
    const currentIdx = filteredProjects.findIndex((p) => p.id === activeModalProject.id);
    const prevIdx = (currentIdx - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveModalProject(filteredProjects[prevIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModalProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject, filteredProjects]);

  return (
    <div className="w-full bg-[#0E0E0E] text-white font-sans selection:bg-accent selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Global Header */}
      <Header />

      {/* ===================== FULL-WIDTH 3D CINEMATIC GALLERY HERO BANNER ===================== */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[68vh] sm:h-[72vh] md:h-[75vh] min-h-[480px] max-h-[680px] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 mt-16 sm:mt-18 select-none border-b border-white/10"
        style={{ perspective: '1400px' }}
      >
        {/* 3D Background Carousel */}
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
              <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1.02 }}
                transition={{ duration: 7, ease: 'linear' }}
                src={activeBanner.image}
                alt={activeBanner.title}
                className="w-full h-full object-cover object-center brightness-[0.93] contrast-[1.06]"
                style={{ transform: 'translateZ(-50px)' }}
              />

              {/* Holographic blueprint micro grid */}
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

        {/* Main 3D Content Overlay Container */}
        <div
          className="relative z-20 w-full px-4 sm:px-8 lg:px-12 flex-1 flex items-center"
          style={{ perspective: '1200px' }}
        >
          <div className="max-w-[94rem] mx-auto w-full flex items-center justify-between">
            {/* Left Text Block */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBanner.id}
                  variants={textVariants3D}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  animateTransform={{
                    rotateX: -mousePos.y * 10,
                    rotateY: mousePos.x * 10
                  }}
                  className="transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Category Pill */}
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

                  {/* Action CTA */}
                  <motion.div
                    style={{ transform: 'translateZ(80px)' }}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <a
                      href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20exploring%20your%20Gallery%20and%20would%20like%20to%20consult%20for%20my%20residence."
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

            {/* Right Floating 3D Holographic Gyroscope Card */}
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-2xl border border-dashed border-accent/30 pointer-events-none"
              />

              <div
                style={{ transform: 'translateZ(45px)' }}
                className="text-center mb-3"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold block mb-1">
                  Carpet Dimension
                </span>
                <div className="font-serif text-3xl text-white font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {activeBanner.spec}{' '}
                  <span className="text-xs font-sans text-accent font-light">
                    {activeBanner.areaUnit}
                  </span>
                </div>
              </div>

              <div
                style={{ transform: 'translateZ(30px)' }}
                className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[0.62rem] font-sans font-semibold text-accent uppercase tracking-wider text-center"
              >
                {activeBanner.specLabel}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Tabs & Controls */}
        <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 pt-3">
          <div className="max-w-[94rem] mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/15 pt-3">
              
              {/* 4 Progress Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl">
                {GALLERY_BANNER_DATA.map((item, idx) => {
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

      {/* ===================== GALLERY STATS STRIP ===================== */}
      <section className="w-full bg-[#FAF7F2] text-[#1A1A1A] py-8 sm:py-10 px-4 sm:px-8 lg:px-12 border-b border-[#E8E2D6] relative overflow-hidden">
        <div className="max-w-[94rem] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS_BAR.map((stat, sIdx) => (
              <div key={sIdx} className="space-y-0.5">
                <div className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-medium">
                  {stat.val}
                </div>
                <div className="font-sans text-xs font-bold text-accent uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="font-sans text-[0.7rem] text-[#666059] font-light truncate">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MAIN ARCHITECTURAL PROJECT GALLERY GRID ===================== */}
      <section ref={gallerySectionRef} className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 scroll-mt-20">
        <div className="max-w-[94rem] mx-auto w-full">
          
          {/* Section Header Strip - Centered with Increased Font Sizes */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 pb-7 border-b border-white/10">
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <span className="w-8 sm:w-12 h-[2px] bg-accent" />
              <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-accent font-bold">
                CURATED SPATIAL PORTFOLIO
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-accent" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-normal leading-[1.15]">
              Distinctive Living <span className="italic font-light text-accent">Spaces &amp; Architecture.</span>
            </h2>
          </div>

          {/* ===================== LUXURY FILTER & SEARCH CONTROL DOCK (1 SINGLE ROW) ===================== */}
          <div className="mb-10 w-full bg-[#131313]/90 backdrop-blur-xl border border-white/10 p-2.5 sm:p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-row items-center justify-between gap-3 overflow-hidden">
            
            {/* Category Filter Pills (Single Row) */}
            <div
              className="flex flex-row flex-nowrap items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scrollbar-none flex-1 py-0.5"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-sans tracking-wide uppercase transition-all duration-300 relative shrink-0 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent to-[#A38264] text-white font-bold shadow-lg shadow-accent/30 border border-accent/70 scale-[1.02]'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white font-medium border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Box */}
            <div className="relative w-[220px] sm:w-[280px] lg:w-[320px] shrink-0">
              <Search className="w-4 h-4 text-accent absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by space, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 sm:py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Gallery Grid - 4 Cards Per Row */}
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Compass className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-serif text-xl text-white">No matching spaces found</h3>
              <p className="text-xs text-white/50 font-sans">
                Try selecting "All Spaces" or clearing your search query.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {paginatedProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                    className="group rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#FAF8F5] hover:border-accent hover:shadow-[0_20px_45px_rgba(138,109,84,0.18)] transition-all duration-500 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
                  >
                    {/* Image Container with Zoom & Hover Overlay */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => openModal(project)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover brightness-[0.96] contrast-[1.04] group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-neutral-200 font-mono text-xs font-bold text-accent shadow-sm">
                          /{project.num}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-xs font-sans uppercase tracking-wider text-white font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Inspect Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[2px]">
                        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Bottom Image Caption */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between text-white">
                        <span className="flex items-center gap-1.5 font-sans text-xs sm:text-[0.82rem] text-white/95 truncate font-medium">
                          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate drop-shadow-sm">{project.location}</span>
                        </span>
                        <span className="font-mono text-xs sm:text-[0.8rem] text-amber-300 font-semibold shrink-0 drop-shadow-sm">
                          {project.area}
                        </span>
                      </div>
                    </div>

                    {/* Body Content with Clean Spacing and Increased Font Size */}
                    <div className="p-5 flex flex-col justify-between flex-1 space-y-4 bg-[#FAF8F5]">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                            {project.tag}
                          </span>
                          <span className="text-xs font-mono text-neutral-500 font-medium">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl text-neutral-900 font-semibold group-hover:text-accent transition-colors tracking-tight mb-2 line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="font-sans text-sm text-neutral-600 leading-relaxed font-normal line-clamp-2">
                          {project.desc}
                        </p>
                      </div>

                      {/* Action Row */}
                      <div className="pt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                        <button
                          onClick={() => openModal(project)}
                          className="text-xs sm:text-sm font-sans uppercase tracking-wider text-accent hover:text-neutral-900 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>Inspect Space</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <a
                          href={`https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(project.title)}.`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-1.5 rounded-lg bg-accent hover:bg-[#745740] text-white text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center gap-1 shadow-sm cursor-pointer"
                        >
                          <span>Inquire</span>
                        </a>
                      </div>

                    </div>

                  </motion.div>
                ))}
              </div>

              {/* ===================== LUXURY GALLERY PAGINATION ===================== */}
              {totalPages > 1 && (
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Results Summary */}
                  <div className="text-xs sm:text-sm font-sans text-white/60 text-center sm:text-left">
                    Showing <span className="text-accent font-semibold">{startIndex + 1}</span> -{' '}
                    <span className="text-accent font-semibold">{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}</span> of{' '}
                    <span className="text-white font-semibold">{filteredProjects.length}</span> luxury spaces
                  </div>

                  {/* Page Controls */}
                  <div className="flex items-center gap-2">
                    {/* Prev Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 ${
                        currentPage === 1
                          ? 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
                          : 'bg-white/10 hover:bg-accent text-white border border-white/15 hover:border-accent cursor-pointer shadow-sm active:scale-95'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Prev</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        const isActive = currentPage === pageNum;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center ${
                              isActive
                                ? 'bg-gradient-to-r from-accent to-[#A38264] text-white shadow-lg shadow-accent/40 border border-accent scale-105'
                                : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10'
                            }`}
                          >
                            {pageNum.toString().padStart(2, '0')}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 ${
                        currentPage === totalPages
                          ? 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
                          : 'bg-white/10 hover:bg-accent text-white border border-white/15 hover:border-accent cursor-pointer shadow-sm active:scale-95'
                      }`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Page Info */}
                  <div className="font-mono text-xs text-white/50 hidden md:block">
                    Page {currentPage} of {totalPages}
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* ===================== FULLSCREEN LUXURY PROJECT MODAL (LIGHTBOX) ===================== */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-10"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#141414] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-accent text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Prev / Next Modal Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-accent text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-3 top-1/2 -translate-y-1/2 lg:right-[410px] z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-accent text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Left Modal Image */}
              <div className="w-full lg:w-3/5 relative min-h-[300px] lg:min-h-full bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white shadow">
                    Standard {activeModalProject.num} • {activeModalProject.year}
                  </span>
                </div>
              </div>

              {/* Right Modal Specs */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#141414]">
                <div className="space-y-4">
                  <div>
                    <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                      {activeModalProject.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight">
                      {activeModalProject.title}
                    </h2>
                  </div>

                  <p className="font-sans text-xs text-white/75 leading-relaxed font-light">
                    {activeModalProject.desc}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[0.6rem] font-mono uppercase text-accent block font-bold">
                        Location
                      </span>
                      <span className="text-xs font-sans text-white font-semibold truncate block">
                        {activeModalProject.location}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[0.6rem] font-mono uppercase text-accent block font-bold">
                        Carpet Area
                      </span>
                      <span className="text-xs font-sans text-white font-semibold truncate block">
                        {activeModalProject.area}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[0.6rem] font-mono uppercase text-accent block font-bold">
                        Acoustic &amp; Scale
                      </span>
                      <span className="text-xs font-sans text-white font-semibold truncate block">
                        {activeModalProject.spec}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[0.6rem] font-mono uppercase text-accent block font-bold">
                        Illumination
                      </span>
                      <span className="text-xs font-sans text-white font-semibold truncate block">
                        {activeModalProject.lux}
                      </span>
                    </div>
                  </div>

                  {/* Materials List */}
                  <div className="pt-2">
                    <span className="text-[0.65rem] font-mono uppercase tracking-widest text-white/40 block font-bold mb-2">
                      Material Palette Specification
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-sans text-white/80"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Modal CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.65rem] text-white/50">
                    INCHES Archive #2026
                  </span>
                  <a
                    href={`https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20am%20consulting%20regarding%20the%20${encodeURIComponent(activeModalProject.title)}%20(${encodeURIComponent(activeModalProject.location)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:scale-103 cursor-pointer"
                  >
                    <span>Consult On This Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== BESPOKE COMMISSION CALLOUT STRIP ===================== */}
      <section className="w-full bg-[#FAF7F2] text-[#1A1A1A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-t border-[#E8E2D6] relative overflow-hidden">
        <div className="max-w-[94rem] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-accent" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent font-bold">
                COMMISSION YOUR RESIDENCE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-tight">
              Ready to create your <span className="italic font-light text-accent">architectural sanctuary?</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666059] max-w-xl mt-2 font-light leading-relaxed">
              We take on a limited number of residential commissions each year to maintain pure craftsmanship, 0.1mm joinery precision, and complete digital-twin fidelity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919702763876?text=Hello%20INCHES%20Studio,%20I%20would%20like%20to%20commission%20a%20new%20interior%20architecture%20project."
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-accent text-white font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Schedule Atelier Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

    </div>
  );
};

export default GalleryPage;
