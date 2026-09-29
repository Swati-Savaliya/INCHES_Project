import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Ruler,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const CATEGORIES = [
  'All Spaces',
  'Living Lounges',
  'Master Suites',
  'Bespoke Kitchens',
  'Luxury Villas',
  'Commercial'
];

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'The Obsidian Pavilion',
    category: 'Living Lounges',
    location: 'Vesu, Surat',
    area: '4,850 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    tag: 'Living Space',
    description: 'An expansive open-concept living pavilion finished in Italian travertine, bronze slats, and bespoke upholstery.',
    materials: ['Italian Travertine', 'Brushed Bronze', 'Warm Walnut']
  },
  {
    id: 2,
    num: '02',
    title: 'Minimalist Horizon Suite',
    category: 'Master Suites',
    location: 'Dumas Road, Surat',
    area: '2,200 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200',
    tag: 'Master Suite',
    description: 'A tranquil bedroom retreat designed with acoustic fluted oak panelling and integrated panoramic walk-in wardrobe.',
    materials: ['Fluted White Oak', 'Bouclé Fabric', 'Calacatta Gold']
  },
  {
    id: 3,
    num: '03',
    title: 'Culinary Artistry Lab',
    category: 'Bespoke Kitchens',
    location: 'Pal, Surat',
    area: '1,650 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    tag: 'Gourmet Kitchen',
    description: 'Monolithic granite island with handleless matte black cabinetry and smart ergonomic zoned storage.',
    materials: ['Nero Marquina', 'Matte Black Lacquer', 'Smoked Glass']
  },
  {
    id: 4,
    num: '04',
    title: 'Sunken Courtyard Villa',
    category: 'Luxury Villas',
    location: 'Althan, Surat',
    area: '8,500 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    tag: 'Villa Residence',
    description: 'Contemporary architectural luxury harmonizing indoor-outdoor water elements and double-height glazing.',
    materials: ['Exposed Concrete', 'Teak Wood', 'Water Mirror Basins']
  },
  {
    id: 5,
    num: '05',
    title: 'Velvet Noir Lounge',
    category: 'Commercial',
    location: 'Ring Road, Surat',
    area: '3,400 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    tag: 'Executive Suite',
    description: 'Sophisticated corporate suite with moody acoustic finishes, custom brass lighting, and private alcoves.',
    materials: ['Acoustic Velvet', 'Satin Brass', 'Dark Oak Veneer']
  },
  {
    id: 6,
    num: '06',
    title: 'Aura Dining Sanctuary',
    category: 'Living Lounges',
    location: 'Piplod, Surat',
    area: '2,900 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    tag: 'Dining Lounge',
    description: 'Entertainment dining pavilion featuring a sculpted marble table, backlit onyx bar, and floor drapery.',
    materials: ['Backlit Onyx', 'Statuary Marble', 'Brushed Gold']
  },
  {
    id: 7,
    num: '07',
    title: 'Statuary Marble Spa Bath',
    category: 'Master Suites',
    location: 'Citylight, Surat',
    area: '1,450 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    tag: 'Private Spa',
    description: 'Ultra-luxury master bathroom featuring freestanding soaking tub, bookmatched marble, and rain shower suite.',
    materials: ['Bookmatched Marble', 'Champagne Gold', 'Acoustic Glass']
  },
  {
    id: 8,
    num: '08',
    title: 'Glasshouse Zenith Penthouse',
    category: 'Luxury Villas',
    location: 'Adajan, Surat',
    area: '6,200 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    tag: 'Penthouse View',
    description: 'Sky-high penthouse living space with panoramic skyline vistas, floating ceilings, and warm timber deck.',
    materials: ['Engineered Timber', 'Curved Glass', 'Raw Slate']
  },
  {
    id: 9,
    num: '09',
    title: 'The Solarium Conservatory',
    category: 'Living Lounges',
    location: 'VIP Road, Surat',
    area: '3,800 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    tag: 'Sunlit Living',
    description: 'Botanical glass pavilion with floor-to-ceiling iron casements, limewash walls, and bespoke lounge seating.',
    materials: ['Wrought Iron', 'Limewash Plaster', 'Raw Linen']
  },
  {
    id: 10,
    num: '10',
    title: 'Monochrome Luxe Dressing',
    category: 'Master Suites',
    location: 'Ghod Dod Road, Surat',
    area: '1,800 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    tag: 'Couture Closet',
    description: 'Bespoke walk-in wardrobe with glass vitrines, integrated micro-LED lighting, and velvet accessory drawers.',
    materials: ['Smoked Glass', 'Leather Inlays', 'Warm Champagne Metal']
  },
  {
    id: 11,
    num: '11',
    title: 'The Artisanal Wine Cave',
    category: 'Commercial',
    location: 'Athwa Lines, Surat',
    area: '2,100 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
    tag: 'Sommelier Vault',
    description: 'Climate-controlled private cellar and tasting salon with reclaimed terracotta bricks and brass racking.',
    materials: ['Terracotta Brick', 'Aged Brass', 'French Oak']
  },
  {
    id: 12,
    num: '12',
    title: 'The Celestial Terrace Villa',
    category: 'Luxury Villas',
    location: 'Pal-Gam, Surat',
    area: '9,200 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200',
    tag: 'Terrace Haven',
    description: 'Breathtaking rooftop lounge with infinity water channel, cantilevered pergola, and outdoor fireplace.',
    materials: ['Granite Pavers', 'Weathered Corten', 'Teak Decking']
  },
  {
    id: 13,
    num: '13',
    title: 'Minimalist Zen Courtyard',
    category: 'Luxury Villas',
    location: 'Vesu, Surat',
    area: '7,800 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    tag: 'Zen Architecture',
    description: 'Meditative internal courtyard featuring bonsai planting, monolithic basalt stepping stones, and reflecting pool.',
    materials: ['Basalt Stone', 'Bamboo Screens', 'Microcement']
  },
  {
    id: 14,
    num: '14',
    title: 'The Emerald Velvet Salon',
    category: 'Living Lounges',
    location: 'Citylight, Surat',
    area: '3,100 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
    tag: 'Jewel Lounge',
    description: 'Rich jewel-toned formal drawing room adorned with emerald mohair, aged brass coffered ceiling, and art lighting.',
    materials: ['Emerald Mohair', 'Brushed Brass', 'Ebony Wood']
  },
  {
    id: 15,
    num: '15',
    title: 'The Modernist Hearth Lounge',
    category: 'Living Lounges',
    location: 'Piplod, Surat',
    area: '4,200 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    tag: 'Hearth Pavilion',
    description: 'Double-height living space with a suspended circular steel hearth, bookmatched onyx accents, and bespoke seating.',
    materials: ['Raw Steel', 'Honed Onyx', 'Bouclé Wool']
  },
  {
    id: 16,
    num: '16',
    title: 'Platinum Horizon Suite',
    category: 'Master Suites',
    location: 'Dumas Road, Surat',
    area: '2,600 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    tag: 'Sky Sanctuary',
    description: 'Contemporary penthouse master suite with wrap-around balcony, floating platform bed, and motorized silk shears.',
    materials: ['Raw Silk', 'Smoked Eucalyptus', 'Brushed Platinum']
  },
  {
    id: 17,
    num: '17',
    title: 'Tuscan Linen Master Chamber',
    category: 'Master Suites',
    location: 'Althan, Surat',
    area: '2,400 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    tag: 'Earth Suite',
    description: 'Serene warm-minimalist bedroom with lime plaster curved walls, low-profile oak bed, and ambient niche lamps.',
    materials: ['Natural Linen', 'Lime Plaster', 'European White Oak']
  },
  {
    id: 18,
    num: '18',
    title: 'Cantilevered Sunset Villa',
    category: 'Luxury Villas',
    location: 'Dumas Beach Road, Surat',
    area: '10,500 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    tag: 'Grand Villa',
    description: 'Monolithic coastal villa design with cantilevered infinity pool terrace, glass bridge, and outdoor fire pit.',
    materials: ['Corten Steel', 'Travertine Slabs', 'Weatherproof Teak']
  },
  {
    id: 19,
    num: '19',
    title: 'Nordic Oak Culinary Studio',
    category: 'Bespoke Kitchens',
    location: 'Althan, Surat',
    area: '1,950 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
    tag: 'Modern Kitchen',
    description: 'Seamless minimalist kitchen island with white quartz counters, fluted timber tambour doors, and hidden pantry.',
    materials: ['Natural White Oak', 'Taj Mahal Quartzite', 'Matte Chrome']
  },
  {
    id: 20,
    num: '20',
    title: 'Statuario Brass Gourmet Kitchen',
    category: 'Bespoke Kitchens',
    location: 'Vesu, Surat',
    area: '2,100 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200',
    tag: 'Chef Atelier',
    description: 'Dramatic bookmatched marble backsplash, brass bar shelving, and integrated concealed appliances.',
    materials: ['Statuario Marble', 'Solid Brass', 'Charcoal Oak']
  },
  {
    id: 21,
    num: '21',
    title: 'The Sky Executive Boardroom',
    category: 'Commercial',
    location: 'Ring Road, Surat',
    area: '4,500 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    tag: 'Executive Space',
    description: 'High-end architectural conference space with acoustic ribbed walls, smart automated lighting, and bespoke walnut table.',
    materials: ['Ribbed Acoustic Wall', 'American Walnut', 'Satin Steel']
  },
  {
    id: 22,
    num: '22',
    title: 'Haute Couture Fashion Atelier',
    category: 'Commercial',
    location: 'Ghod Dod Road, Surat',
    area: '3,600 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    tag: 'Luxury Retail',
    description: 'Designer boutique showroom featuring sculptural display arches, microcement floors, and soft diffuse ceiling illumination.',
    materials: ['Microcement', 'Champagne Metal', 'Plaster Arches']
  }
];

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Spaces');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeModalIndex, setActiveModalIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All Spaces'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  // Reset to page 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openModal = (project) => {
    const index = filteredProjects.findIndex(p => p.id === project.id);
    setActiveModalIndex(index !== -1 ? index : 0);
    setActiveModalProject(project);
  };

  const closeModal = () => {
    setActiveModalProject(null);
  };

  const nextProject = () => {
    const nextIdx = (activeModalIndex + 1) % filteredProjects.length;
    setActiveModalIndex(nextIdx);
    setActiveModalProject(filteredProjects[nextIdx]);
  };

  const prevProject = () => {
    const prevIdx = (activeModalIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveModalIndex(prevIdx);
    setActiveModalProject(filteredProjects[prevIdx]);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModalProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject, activeModalIndex, filteredProjects]);

  return (
    <section id="gallery" className="relative w-full bg-[#0d0d0d] text-surface py-10 md:py-14 px-4 sm:px-8 lg:px-12 overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-[95rem] mx-auto relative z-10 flex flex-col items-center">

        {/* Section Header - Exact Center Aligned */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center mb-6 md:mb-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center space-x-3 mb-2.5"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-[0.65rem] tracking-[0.35em] text-accent uppercase font-bold flex items-center justify-center gap-1.5 text-center">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Curated Portfolio
            </span>
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-2.5"
          >
            Curated Spaces <span className="italic font-light text-accent font-serif">&amp; Architecture</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full text-center font-sans text-surface/65 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto"
          >
            Explore our residential and commercial transformations. Each space is tailored with meticulous attention to luxury materiality and proportion.
          </motion.p>
        </div>

        {/* Filter Tabs - Center Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full flex items-center justify-center pb-3 mb-6 md:mb-8 overflow-x-auto no-scrollbar border-b border-white/10"
        >
          <div className="flex items-center justify-center gap-1.5 min-w-max mx-auto px-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-surface/60 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-accent rounded-full -z-10 shadow-lg shadow-accent/25"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 4-Image Boxes Per Row Grid (Paginated) */}
        <div className="w-full">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group relative h-[290px] sm:h-[320px] md:h-[330px] rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-xl cursor-pointer flex flex-col justify-between"
                  onClick={() => openModal(project)}
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.2s] ease-out brightness-[0.85] group-hover:brightness-95"
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top Bar: Number & Category Badge */}
                  <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-accent tracking-wider">
                      {project.num}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[0.6rem] uppercase tracking-widest text-surface/90 font-medium">
                        {project.tag}
                      </span>

                      {/* Quick View Button */}
                      <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 hover:bg-accent hover:border-accent">
                        <Maximize2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-3.5 sm:p-4 flex flex-col gap-1.5">
                    {/* Location & Area Meta */}
                    <div className="flex items-center gap-2 text-accent text-[0.65rem] font-sans tracking-widest uppercase font-semibold">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-accent" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-2.5 h-2.5 text-accent" />
                        {project.area}
                      </span>
                    </div>

                    {/* Title & View Icon */}
                    <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-surface transition-colors flex items-center justify-between leading-tight">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent transform -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0" />
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-[0.75rem] text-surface/70 line-clamp-1 leading-normal">
                      {project.description}
                    </p>

                    {/* Materials Tags */}
                    <div className="flex flex-wrap gap-1 mt-0.5 pt-2 border-t border-white/10">
                      {project.materials.slice(0, 2).map((mat, i) => (
                        <span
                          key={i}
                          className="text-[0.55rem] uppercase tracking-wider text-surface/50 bg-white/5 px-1.5 py-0.5 rounded-sm"
                        >
                          {mat}
                        </span>
                      ))}
                      {project.materials.length > 2 && (
                        <span className="text-[0.55rem] text-accent font-medium self-center">
                          +{project.materials.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subtle Hover Gold Accent Border */}
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/60 rounded-2xl pointer-events-none transition-all duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Elegant Centered Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10 pt-4 border-t border-white/10"
          >
            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {/* Previous Page Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${currentPage === 1
                  ? 'border-white/10 text-white/25 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20'
                  }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative w-9 h-9 rounded-full font-sans text-xs font-semibold transition-all duration-300 flex items-center justify-center ${isActive ? 'text-white' : 'text-surface/60 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePagePill"
                          className="absolute inset-0 bg-accent rounded-full -z-10 shadow-md shadow-accent/30"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      {page < 10 ? `0${page}` : page}
                    </button>
                  );
                })}
              </div>

              {/* Next Page Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${currentPage === totalPages
                  ? 'border-white/10 text-white/25 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20'
                  }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Showing Count Indicator */}
            <span className="font-sans text-[0.7rem] uppercase tracking-widest text-surface/50">
              Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} Spaces
            </span>
          </motion.div>
        )}

      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[92vh] bg-[#141414] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Big Image Display with Prev/Next Controls */}
              <div className="relative w-full lg:w-3/5 h-[350px] sm:h-[450px] lg:h-auto bg-black flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeModalProject.id}
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Arrow Navigators */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Index badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-surface/80 font-sans tracking-widest">
                  {activeModalIndex + 1} / {filteredProjects.length}
                </div>
              </div>

              {/* Right Side: Project Detailed Specs */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none">
                <div>
                  <div className="flex items-center space-x-2 text-accent text-xs font-sans tracking-[0.25em] uppercase font-bold mb-2">
                    <span>{activeModalProject.category}</span>
                    <span>•</span>
                    <span>{activeModalProject.year}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-4 leading-snug">
                    {activeModalProject.title}
                  </h3>

                  <p className="font-sans text-surface/70 text-sm sm:text-base leading-relaxed mb-6">
                    {activeModalProject.description}
                  </p>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/10 mb-6">
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-widest text-surface/50 font-sans mb-1">
                        Location
                      </span>
                      <span className="text-white text-sm font-medium font-sans flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        {activeModalProject.location}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-widest text-surface/50 font-sans mb-1">
                        Total Area
                      </span>
                      <span className="text-white text-sm font-medium font-sans flex items-center gap-1.5">
                        <Ruler className="w-4 h-4 text-accent" />
                        {activeModalProject.area}
                      </span>
                    </div>

                    <div className="col-span-2">
                      <span className="block text-[0.7rem] uppercase tracking-widest text-surface/50 font-sans mb-1.5">
                        Material Palette
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeModalProject.materials.map((mat, i) => (
                          <span
                            key={i}
                            className="text-xs text-surface/90 bg-white/10 px-3 py-1 rounded-md border border-white/10"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                  >
                    <span>Inquire About This Design</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
