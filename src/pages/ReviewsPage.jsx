import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  Sparkles,
  Award,
  ShieldCheck,
  Building,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
  Play,
  MessageSquarePlus,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  Heart,
  ArrowUpRight,
  Upload,
  Image as ImageIcon,
  Camera,
  Film,
  Volume2,
  Maximize2,
  Radio,
  Tv
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// 1. Featured Spotlight Carousel Data (Crisp, less text)
const SPOTLIGHT_ITEMS = [
  {
    id: 1,
    client: 'Rajesh & Ananya Shah',
    role: 'Homeowners',
    project: 'Sky Penthouse',
    location: 'Vesu, Surat',
    area: '5,800 sq.ft',
    year: '2025',
    rating: 5,
    quote: 'INCHES turned our penthouse into an architectural sanctuary. The travertine finishes and lighting are pure art.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    tag: 'Penthouse Living'
  },
  {
    id: 2,
    client: 'Vikram Singhania',
    role: 'Managing Director',
    project: 'Heritage Villa',
    location: 'Bandra West, Mumbai',
    area: '8,400 sq.ft',
    year: '2024',
    rating: 5,
    quote: 'Zero deviation from 3D renders and delivered 12 days ahead of schedule. Exceptional timeline discipline.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    tag: 'Turnkey Estate'
  },
  {
    id: 3,
    client: 'Dr. Meera & Devang Patel',
    role: 'Art Collectors',
    project: 'Sensory Pavilion Flat',
    location: 'VIP Road, Surat',
    area: '4,200 sq.ft',
    year: '2025',
    rating: 5,
    quote: 'Natural lime plaster, smoked oak, and glare-free museum lighting create unmatched daily peace.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    tag: 'Minimal Luxury'
  }
];

// Smooth Animated Counter component (Counts up from 0 when in view)
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
            // Smooth easeOutExpo transition
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

// 2. Metrics Bar Data (Configured with target values to count up from 0)
const KEY_METRICS = [
  { end: 150, decimals: 0, suffix: '+', label: 'Residences Handed Over', icon: Building },
  { end: 4.98, decimals: 2, suffix: '', label: 'Average Client Rating', icon: Star },
  { end: 99.4, decimals: 1, suffix: '%', label: 'On-Time Handover', icon: Award },
  { end: 10, decimals: 0, suffix: '-Yr', label: 'Assured Warranty', icon: ShieldCheck }
];

// 3. Review Cards (Rich, authentic luxury reviews for all categories)
const REVIEWS_DATA = [
  // --- PENTHOUSES ---
  {
    id: 1,
    client: 'Rajesh & Ananya Shah',
    project: 'Sky Penthouse',
    category: 'Penthouses',
    location: 'Vesu, Surat',
    area: '5,800 sq.ft',
    rating: 5,
    likes: 38,
    quote: 'Atmospheric sanctuary with flawless travertine work and custom brass pivot doors. Every guest is mesmerized.',
    materials: ['Honed Travertine', 'Champagne Brass', 'Smoked Walnut'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    client: 'Kunal & Riya Mehra',
    project: 'The Cantilever Duplex',
    category: 'Penthouses',
    location: 'Althan, Surat',
    area: '5,500 sq.ft',
    rating: 5,
    likes: 31,
    quote: 'Render to reality is 100% identical. The cantilevered staircase and fluted glass partitions are engineering marvels.',
    materials: ['Fluted Glass', 'Fumed Oak', 'Nero Marquina'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 9,
    client: 'Arjun & Radhika Kapoor',
    project: 'Grand Belvedere Penthouse',
    category: 'Penthouses',
    location: 'Worli, Mumbai',
    area: '6,200 sq.ft',
    rating: 5,
    likes: 52,
    quote: 'The 3.4-meter monolithic travertine island and invisible acoustic panelling exceed European luxury standards.',
    materials: ['Monolithic Travertine', 'Acoustic Panelling', 'Champagne Brass'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 10,
    client: 'Devendra & Meena Singhania',
    project: 'Cloud Horizon Skyhome',
    category: 'Penthouses',
    location: 'Piplod, Surat',
    area: '6,800 sq.ft',
    rating: 5,
    likes: 44,
    quote: 'Seamless floor-to-ceiling Italian marble joinery and customized home automation. Truly iconic living.',
    materials: ['Italian Statuario', 'Burmese Teak', 'Champagne Metal'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },

  // --- VILLAS ---
  {
    id: 2,
    client: 'Vikram Singhania',
    project: 'Bespoke Heritage Estate',
    category: 'Villas',
    location: 'Bandra, Mumbai',
    area: '8,400 sq.ft',
    rating: 5,
    likes: 45,
    quote: 'Delivered our 8,400 sq.ft villa 12 days early. The boiserie mouldings and circadian lighting are sheer perfection.',
    materials: ['Statuario Marble', 'White Oak', 'Champagne Metal'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 7,
    client: 'Pooja & Harshvardhan Doshi',
    project: 'The Palm Courtyard Villa',
    category: 'Villas',
    location: 'Piplod, Surat',
    area: '9,200 sq.ft',
    rating: 5,
    likes: 51,
    quote: 'Double-height water courtyard and motorized 14ft slimline glass created an enduring heirloom estate.',
    materials: ['Natural Basalt', 'Burmese Teak', 'Clear Low-E Glass'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 11,
    client: 'Siddharth & Priya Mehta',
    project: 'Atelier Minimal Villa',
    category: 'Villas',
    location: 'Althan, Surat',
    area: '7,100 sq.ft',
    rating: 5,
    likes: 34,
    quote: 'Absolute zero-tolerance joinery. Seamless transitions between Italian terrazzo and fluted walnut wall panels.',
    materials: ['Custom Terrazzo', 'Fluted Walnut', 'Brushed Gold'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 12,
    client: 'Pooja & Rohan Varma',
    project: 'Sky Villa Duplex',
    category: 'Villas',
    location: 'Juhu, Mumbai',
    area: '9,200 sq.ft',
    rating: 5,
    likes: 67,
    quote: 'A 6-meter floating cantilevered staircase clad in Calacatta Gold. INCHES delivered engineering mastery.',
    materials: ['Calacatta Gold', 'Blackened Steel', 'Engineered Oak'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },

  // --- SUITES ---
  {
    id: 5,
    client: 'Aarav & Sanjana Kapoor',
    project: 'Horizon Master Suite',
    category: 'Suites',
    location: 'Dumas Road, Surat',
    area: '2,600 sq.ft',
    rating: 5,
    likes: 42,
    quote: 'The walk-in wardrobe with smoked glass and suede drawers is pure luxury. We wake up inspired every day.',
    materials: ['Smoked Glass', 'Italian Suede', 'Milled Oak'],
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 13,
    client: 'Kavita & Harshwardhan Joshi',
    project: 'Executive Master Suite',
    category: 'Suites',
    location: 'Piplod, Surat',
    area: '3,800 sq.ft',
    rating: 5,
    likes: 21,
    quote: 'Bespoke walk-in wardrobe with integrated climate-controlled leather drawers and rimless glass vitrines.',
    materials: ['Saddle Leather', 'Smoked Eucalyptus', 'Rimless Glass'],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 14,
    client: 'Sameer & Natasha Merchant',
    project: 'Velvet & Walnut Suite',
    category: 'Suites',
    location: 'Althan, Surat',
    area: '2,900 sq.ft',
    rating: 5,
    likes: 39,
    quote: 'Acoustic padded bed headboard wall with integrated reading spotlights. Absolute hotel-standard retreat.',
    materials: ['Italian Velvet', 'Canaletto Walnut', 'Champagne Brass'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 15,
    client: 'Dr. Rajiv & Bela Trivedi',
    project: 'The Sanctuary Private Suite',
    category: 'Suites',
    location: 'Vesu, Surat',
    area: '3,100 sq.ft',
    rating: 5,
    likes: 28,
    quote: 'Custom marble ensuite bathroom with heated flooring and flush recessed cove lighting. Pure tranquility.',
    materials: ['Armani Grey Marble', 'Smoked Oak', 'Matte Black Metal'],
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },

  // --- KITCHENS ---
  {
    id: 6,
    client: 'Siddharth & Tanvi Merchant',
    project: 'Quartzite Culinary Atelier',
    category: 'Kitchens',
    location: 'Pal, Surat',
    area: '1,900 sq.ft',
    rating: 5,
    likes: 27,
    quote: 'Cantilevered Taj Mahal quartzite island and motorized pocket pantry make cooking and hosting effortless.',
    materials: ['Taj Mahal Quartzite', 'Black Oak', 'Bronze Plinth'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 16,
    client: 'Nirav & Shilpa Desai',
    project: 'Culinary Studio & Lounge',
    category: 'Kitchens',
    location: 'Dumas Road, Surat',
    area: '2,900 sq.ft',
    rating: 5,
    likes: 41,
    quote: 'Gaggenau motorized pocket doors and Dekton Laurent surfaces make hosting dinners an unforgettable spectacle.',
    materials: ['Dekton Laurent', 'Charcoal Oak', 'Satin Brass'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 17,
    client: 'Manish & Sweta Choksi',
    project: 'Monolithic Dekton Kitchen',
    category: 'Kitchens',
    location: 'Vesu, Surat',
    area: '2,200 sq.ft',
    rating: 5,
    likes: 33,
    quote: 'The seamless ceramic drawer fronts and flush downdraft hood blend architecture and cooking effortlessly.',
    materials: ['Dekton Zenith', 'Fluted Ash', 'Gunmetal Trim'],
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 18,
    client: 'Aditya & Gayatri Birla',
    project: 'Champagne Brass Chef Studio',
    category: 'Kitchens',
    location: 'Bandra, Mumbai',
    area: '2,400 sq.ft',
    rating: 5,
    likes: 48,
    quote: 'Sub-Zero built-in cooling columns and waterfall quartzite breakfast bar. Top-notch precision handover.',
    materials: ['Calacatta Marble', 'Brushed Brass', 'Smoked Elm'],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },

  // --- LOUNGES ---
  {
    id: 3,
    client: 'Dr. Meera & Devang Patel',
    project: 'Sensory Pavilion Residence',
    category: 'Lounges',
    location: 'VIP Road, Surat',
    area: '4,200 sq.ft',
    rating: 5,
    likes: 29,
    quote: 'Tactile lime plaster and museum-grade 2700K lighting turned our home into a serene private art gallery.',
    materials: ['Lime Plaster', 'Austrian Oak', 'Brushed Gunmetal'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 8,
    client: 'Rohan & Neha Kothari',
    project: 'Executive Private Lounge',
    category: 'Lounges',
    location: 'BKC, Mumbai',
    area: '3,400 sq.ft',
    rating: 5,
    likes: 34,
    quote: 'Custom acoustic leather panelling and concealed pivot doors offer sublime solitude and warmth.',
    materials: ['Saddle Leather', 'Canaletto Walnut', 'Brushed Gunmetal'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 19,
    client: 'Nikhil & Avantika Parekh',
    project: 'Basalt & Fluted Oak Lounge',
    category: 'Lounges',
    location: 'Citylight, Surat',
    area: '4,600 sq.ft',
    rating: 5,
    likes: 46,
    quote: 'Floor-recessed fireplace with honed basalt hearth. Our family gatherings have never felt more warm and grand.',
    materials: ['Honed Basalt', 'Fluted Oak', 'Bronze Mirror'],
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 20,
    client: 'Chirag & Mansi Shah',
    project: 'Travertine Fireplace Grand Lounge',
    category: 'Lounges',
    location: 'Vesu, Surat',
    area: '4,800 sq.ft',
    rating: 5,
    likes: 55,
    quote: 'Invisible Sonance acoustic wall panels and custom silk wool rugs. Flawless spatial acoustic tuning.',
    materials: ['Navona Travertine', 'Silk Wool', 'Champagne Brass'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];

// 4. Video Stories Data (Minimal, crisp, visual-first)
const VIDEO_STORIES = [
  {
    id: 1,
    title: 'Sky Penthouse',
    client: 'Rajesh & Ananya Shah',
    location: 'Vesu, Surat',
    category: 'Penthouse',
    duration: '2:15 min',
    quote: '“Atmospheric travertine and silent acoustic insulation.”',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    title: 'Heritage Villa',
    client: 'Vikram Singhania',
    location: 'Bandra, Mumbai',
    category: 'Villa',
    duration: '2:45 min',
    quote: '“Delivered early, 100% identical to 3D renders.”',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    title: 'Sensory Pavilion',
    client: 'Dr. Meera Patel',
    location: 'VIP Rd, Surat',
    category: 'Suite',
    duration: '1:50 min',
    quote: '“Natural lime plaster & glare-free museum lighting.”',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    title: 'Culinary Atelier',
    client: 'Siddharth Merchant',
    location: 'Pal, Surat',
    category: 'Kitchen',
    duration: '2:05 min',
    quote: '“Cantilevered quartzite island with motorized joinery.”',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];

// 5. 4-Step Process
const PROCESS_STEPS = [
  { num: '01', title: 'Spatial Discovery', desc: 'Lifestyle audit and sensory proportion mapping.' },
  { num: '02', title: '3D Photoreal CAD', desc: 'Millimeter-accurate 1:1 drawings and real material swatches.' },
  { num: '03', title: 'Atelier Build', desc: '85% offsite joinery manufacturing for zero on-site chaos.' },
  { num: '04', title: 'White-Glove Handover', desc: 'Deep cleaning, acoustic tuning, and 10-Yr warranty seal.' }
];

// 6. Crisp FAQs
const FAQS = [
  {
    q: 'How do you guarantee 0% deviation from 3D renders?',
    a: 'Every detail is pre-engineered into 1:1 construction blueprints and pre-fabricated in our offsite atelier with 0.1mm tolerances.'
  },
  {
    q: 'Can we visit completed projects or talk to past clients?',
    a: 'Yes, upon NDA signing we coordinate private escorted walkthroughs of completed showcase homes.'
  },
  {
    q: 'What does the 10-Year Assured Warranty include?',
    a: 'Complete coverage for bespoke joinery, structural cabinetry, hardware mechanisms, and moisture-seal protection.'
  }
];

const CATEGORY_IMAGES = {
  Penthouses: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  Villas: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
  Suites: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200',
  Kitchens: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
  Lounges: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
};

const AVATAR_OPTIONS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
];

const CATEGORIES = ['All', 'Penthouses', 'Villas', 'Suites', 'Kitchens', 'Lounges'];
const ITEMS_PER_PAGE = 8;

export default function ReviewsPage() {
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const [selectedCat, setSelectedCat] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [liked, setLiked] = useState({});
  const [modalReview, setModalReview] = useState(null);
  const [modalActiveImgIdx, setModalActiveImgIdx] = useState(0);
  const [videoModal, setVideoModal] = useState(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  // Dynamic reviews list with localStorage & Admin deletion persistence support
  const loadReviewsFromStorage = () => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]').map(String);
      const saved = localStorage.getItem('inches_dynamic_reviews');
      let combined = REVIEWS_DATA;
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const parsedIds = new Set(parsed.map((p) => String(p.id)));
          combined = [...parsed, ...REVIEWS_DATA.filter((r) => !parsedIds.has(String(r.id)))];
        }
      }
      const activeList = combined.filter((r) => !deletedIds.includes(String(r.id)));
      setReviewsList(activeList);
      return activeList;
    } catch (err) {
      console.error(err);
      setReviewsList(REVIEWS_DATA);
      return REVIEWS_DATA;
    }
  };

  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]').map(String);
      const saved = localStorage.getItem('inches_dynamic_reviews');
      let combined = REVIEWS_DATA;
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const parsedIds = new Set(parsed.map((p) => String(p.id)));
          combined = [...parsed, ...REVIEWS_DATA.filter((r) => !parsedIds.has(String(r.id)))];
        }
      }
      return combined.filter((r) => !deletedIds.includes(String(r.id)));
    } catch (err) {
      console.error(err);
      return REVIEWS_DATA;
    }
  });

  // Listen for storage events or custom review updates
  useEffect(() => {
    loadReviewsFromStorage();
    const handleUpdate = () => {
      loadReviewsFromStorage();
    };
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('inches_review_updated', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('inches_review_updated', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
    };
  }, []);

  // Helper to compress uploaded image files to lightweight WebP/JPEG data URLs to prevent localStorage quota errors
  const compressImageFile = (file, maxWidth = 1200, quality = 0.75) => {
    return new Promise((resolve) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            if (width > maxWidth || height > maxWidth) {
              if (width > height) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
              } else {
                width = Math.round((width * maxWidth) / height);
                height = maxWidth;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
            resolve(compressedBase64);
          } catch (err) {
            console.error(err);
            resolve(e.target.result);
          }
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  };

  // Reset to page 1 when category filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCat]);

  // Dynamic form state with dedicated cover image & additional custom images
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    location: 'Surat',
    area: '4,500 sq.ft',
    category: 'Penthouses',
    rating: 5,
    quote: '',
    coverImage: '',
    customImages: [],
    customAvatar: ''
  });

  // Handle Dedicated Cover Image Upload
  const handleCoverImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressed = await compressImageFile(file, 1200, 0.75);
      if (compressed) {
        setFormData((prev) => ({ ...prev, coverImage: compressed }));
      }
    }
  };

  // Handle Additional Project Gallery Images Upload (Multiple)
  const handleMultipleImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    for (const file of files) {
      const compressed = await compressImageFile(file, 1200, 0.75);
      if (compressed) {
        setFormData((prev) => ({
          ...prev,
          customImages: [...(prev.customImages || []), compressed]
        }));
      }
    }
  };

  // Remove a specific gallery image by index
  const removeCustomImage = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      customImages: prev.customImages.filter((_, idx) => idx !== indexToRemove)
    }));
  };

  // Handle Avatar Photo Upload
  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressed = await compressImageFile(file, 400, 0.8);
      if (compressed) {
        setFormData((prev) => ({ ...prev, customAvatar: compressed }));
      }
    }
  };

  // Auto carousel for spotlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSpotlight((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const filteredReviews = useMemo(() => {
    const visibleReviews = reviewsList;
    if (!selectedCat || selectedCat.toLowerCase() === 'all') return visibleReviews;
    return visibleReviews.filter((r) => {
      if (!r.category) return false;
      const rCat = r.category.trim().toLowerCase();
      const sCat = selectedCat.trim().toLowerCase();
      return rCat === sCat || rCat.includes(sCat) || sCat.includes(rCat);
    });
  }, [selectedCat, reviewsList]);

  // Pagination calculations (8 cards per page)
  const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE) || 1;
  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredReviews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredReviews, currentPage]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    const el = document.getElementById('reviews-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle Dynamic Review Submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formData.client.trim() || !formData.quote.trim()) return;

    const defaultImg =
      CATEGORY_IMAGES[formData.category] || CATEGORY_IMAGES['Penthouses'];
    const cover =
      formData.coverImage ||
      (formData.customImages.length > 0 ? formData.customImages[0] : defaultImg);
    const additional = (formData.customImages || []).filter((img) => img !== cover);
    const finalImages = [cover, ...additional];

    const newReview = {
      id: Date.now(),
      client: formData.client.trim(),
      project: formData.project.trim() || `${formData.category} Residence`,
      category: formData.category || 'Penthouses',
      location: formData.location.trim() || 'Surat, Gujarat',
      area: formData.area.trim() || '4,500 sq.ft',
      rating: formData.rating || 5,
      likes: 1,
      isUserCreated: true,
      source: 'Website Submission',
      createdAt: new Date().toISOString(),
      quote: formData.quote.trim(),
      materials: formData.materials
        ? formData.materials.split(',').map((m) => m.trim()).filter(Boolean)
        : ['Natural Stone', 'Fluted Oak', 'Champagne Brass'],
      image: finalImages[0],
      images: finalImages,
      avatar:
        formData.customAvatar ||
        AVATAR_OPTIONS[Math.floor(Math.random() * AVATAR_OPTIONS.length)]
    };

    // 1. Immediately update state so it appears in the gallery instantly
    const updatedList = [newReview, ...reviewsList.filter((r) => r.id !== newReview.id)];
    setReviewsList(updatedList);

    // 2. Save in public localStorage
    try {
      const saved = localStorage.getItem('inches_dynamic_reviews');
      const parsed = saved ? JSON.parse(saved) : [];
      const updatedSaved = [newReview, ...parsed.filter((r) => r.id !== newReview.id)];
      localStorage.setItem('inches_dynamic_reviews', JSON.stringify(updatedSaved));
    } catch (err) {
      console.error('Storage quota error fallback:', err);
      // If saving large array fails, save without heavy base64 or fallback
      try {
        const lightweight = { ...newReview, images: [newReview.image] };
        localStorage.setItem('inches_dynamic_reviews', JSON.stringify([lightweight]));
      } catch (e2) {
        console.error(e2);
      }
    }

    // 3. Trigger global instant event so Admin Portal immediately receives and renders it
    try {
      window.dispatchEvent(new CustomEvent('inches_review_updated', { detail: newReview }));
    } catch (err) {
      console.error(err);
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitOpen(false);

      // Auto-select 'All' or user category and go to page 1 to see the new review immediately
      setSelectedCat('All');
      setCurrentPage(1);

      const el = document.getElementById('reviews-gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setFormData({
        client: '',
        project: '',
        location: 'Surat',
        area: '4,500 sq.ft',
        category: 'Penthouses',
        rating: 5,
        quote: '',
        coverImage: '',
        customImages: [],
        customAvatar: ''
      });
    }, 1500);
  };

  const currentSpot = SPOTLIGHT_ITEMS[activeSpotlight];

  return (
    <div className="bg-[#FAF8F5] text-primary min-h-screen selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* ========================================================================= */}
      {/* SECTION 1: LIGHT BACKGROUND - HERO & EDITORIAL SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-4 sm:px-8 lg:px-12 max-w-[92rem] mx-auto bg-[#FAF8F5]">
        {/* Editorial Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-semibold">
              Client Testimonials
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary font-normal leading-tight">
            Voices of <span className="italic text-accent">Distinction</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-primary/70 mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Reflections from homeowners who entrusted their sanctuaries to INCHES.
          </p>
        </div>

        {/* Hero Spotlight Card */}
        <div className="bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
            {/* Left Content */}
            <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.65rem] uppercase tracking-widest text-accent font-semibold px-2.5 py-0.5 bg-accent/10 rounded">
                    {currentSpot.tag}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(currentSpot.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <Quote className="w-7 h-7 text-accent/30 mb-2" />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSpot.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-base sm:text-xl text-primary font-light leading-snug italic"
                  >
                    “{currentSpot.quote}”
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author & Slider Controls */}
              <div className="pt-6 mt-6 border-t border-accent/15 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={currentSpot.avatar}
                    alt={currentSpot.client}
                    className="w-10 h-10 rounded-full object-cover border border-accent"
                  />
                  <div>
                    <h2 className="font-serif text-sm font-semibold text-primary">
                      {currentSpot.client}
                    </h2>
                    <p className="text-[0.65rem] text-primary/60">
                      {currentSpot.location} • {currentSpot.area}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() =>
                      setActiveSpotlight((prev) =>
                        prev === 0 ? SPOTLIGHT_ITEMS.length - 1 : prev - 1
                      )
                    }
                    className="p-2 rounded-full border border-accent/20 hover:bg-accent hover:text-white transition-colors text-primary"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveSpotlight((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length)
                    }
                    className="p-2 rounded-full border border-accent/20 hover:bg-accent hover:text-white transition-colors text-primary"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:col-span-5 relative min-h-[220px] bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSpot.id}
                  src={currentSpot.image}
                  alt={currentSpot.project}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover opacity-90"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[0.7rem] flex justify-between items-center">
                <span className="font-serif">{currentSpot.project}</span>
                <span className="text-accent text-[0.65rem] uppercase">{currentSpot.year} Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: DARK BACKGROUND - KEY METRICS & TRUST STRIP */}
      {/* ========================================================================= */}
      <section className="bg-[#121212] text-[#FAF8F5] py-12 px-4 sm:px-8 lg:px-12 border-y border-[#262626]">
        <div className="max-w-[92rem] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div
                  key={i}
                  className="flex items-center space-x-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="p-2.5 rounded-lg bg-accent/20 text-accent flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl text-white font-light">
                      <AnimatedCounter
                        end={metric.end}
                        decimals={metric.decimals}
                        suffix={metric.suffix}
                        duration={2.2}
                      />
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/60 font-medium">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: LIGHT BACKGROUND - CURATED REVIEWS GALLERY */}
      {/* ========================================================================= */}
      <section id="reviews-gallery" className="py-20 px-4 sm:px-8 lg:px-12 max-w-[92rem] mx-auto bg-[#FAF8F5] scroll-mt-24">


        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-accent/10 text-accent text-[0.65rem] uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Living Portfolio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal">
            Client Reflections &amp; Spaces
          </h2>
          <p className="font-sans text-xs sm:text-sm text-primary/70 mt-2 max-w-md mx-auto font-light leading-relaxed">
            Authentic experiences shared by homeowners across luxury penthouses, villas, and bespoke suites.
          </p>
        </div>

        {/* Top Filter Tabs & Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCat.toLowerCase() === cat.toLowerCase();
              const count = cat === 'All'
                ? reviewsList.filter((r) => r.rating >= 4).length
                : reviewsList.filter((r) => {
                  if (r.rating < 4 || !r.category) return false;
                  const rCat = r.category.trim().toLowerCase();
                  const sCat = cat.trim().toLowerCase();
                  return rCat === sCat || rCat.includes(sCat) || sCat.includes(rCat);
                }).length;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCat(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap flex items-center space-x-1.5 cursor-pointer ${isSelected
                    ? 'bg-primary text-surface shadow-md font-semibold'
                    : 'bg-white text-primary/70 hover:text-primary hover:bg-accent/10 border border-accent/15'
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[0.62rem] px-1.5 py-0.2 rounded-full font-mono transition-colors ${isSelected ? 'bg-white/20 text-white font-bold' : 'bg-black/5 text-primary/60'
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clean Public Action Button */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsSubmitOpen(true)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-accent text-surface text-xs uppercase tracking-widest font-semibold rounded-lg transition-colors shadow-sm"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Clean Review Cards Grid (1 Row with 4 Columns on Large Screens, 8 Cards Per Page) */}
        {paginatedReviews.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-accent/20 p-8 shadow-xs max-w-md mx-auto my-6">
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
            <h3 className="font-serif text-lg text-primary font-medium">
              No Reviews In {selectedCat} Yet
            </h3>
            <p className="text-xs text-primary/60 mt-1 mb-4">
              Be the first client to share your living experience for this category.
            </p>
            <button
              onClick={() => {
                setFormData((prev) => ({ ...prev, category: selectedCat === 'All' ? 'Penthouses' : selectedCat }));
                setIsSubmitOpen(true);
              }}
              className="px-4 py-2 bg-primary hover:bg-accent text-surface text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
            >
              Write Review
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedReviews.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group ${item.isUserCreated
                  ? 'border-accent/50 ring-1 ring-accent/30 shadow-md'
                  : 'border-accent/15'
                  }`}
              >
                <div>
                  {/* Image */}
                  <div
                    onClick={() => {
                      setModalReview(item);
                      setModalActiveImgIdx(0);
                    }}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.project}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[0.6rem] uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.isUserCreated && (
                        <span className="px-2 py-0.5 rounded bg-accent text-white text-[0.6rem] font-semibold tracking-wider flex items-center gap-1 shadow">
                          <Sparkles className="w-2.5 h-2.5" /> Just Added
                        </span>
                      )}
                    </div>
                    {item.images && item.images.length > 1 && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-[0.6rem] font-medium flex items-center gap-1 shadow-sm border border-white/20">
                        <ImageIcon className="w-2.5 h-2.5 text-accent" />
                        <span>{item.images.length} Photos</span>
                      </div>
                    )}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="text-[0.65rem] text-accent font-semibold">{item.project}</div>
                      <div className="text-[0.65rem] text-white/70">{item.location} • {item.area}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-[0.6rem] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Verified Client
                      </span>
                    </div>

                    <p className="font-serif text-sm text-primary font-normal italic leading-relaxed mb-4">
                      “{item.quote}”
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {item.materials.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#FAF8F5] text-[0.6rem] text-primary/70 rounded border border-accent/10"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Row */}
                <div className="px-5 py-3 bg-[#FAF8F5] border-t border-accent/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={item.avatar}
                      alt={item.client}
                      className="w-8 h-8 rounded-full object-cover border border-accent/40"
                    />
                    <span className="text-xs font-medium text-primary">{item.client}</span>
                  </div>

                  <div className="flex items-center space-x-1.5">

                    <button
                      onClick={() => setLiked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                      className="p-1.5 text-primary/50 hover:text-red-500 transition-colors"
                      aria-label="Like"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${liked[item.id] ? 'fill-red-500 text-red-500' : ''}`}
                      />
                    </button>
                    <button
                      onClick={() => {
                        setModalReview(item);
                        setModalActiveImgIdx(0);
                      }}
                      className="p-1.5 text-primary/50 hover:text-accent transition-colors"
                      aria-label="Expand"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* LUXURY PAGINATION CONTROLS (8 ITEMS PER PAGE) */}
        {/* ========================================================================= */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-accent/15 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${currentPage === 1
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-60'
                  : 'bg-white text-primary hover:bg-accent hover:text-white border-accent/20 shadow-sm'
                  }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center space-x-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-lg text-xs font-medium transition-all ${currentPage === pageNum
                      ? 'bg-accent text-white shadow-md font-semibold ring-2 ring-accent/30'
                      : 'bg-white text-primary/70 hover:bg-accent/15 hover:text-primary border border-accent/20'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-60'
                  : 'bg-white text-primary hover:bg-accent hover:text-white border-accent/20 shadow-sm'
                  }`}
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MINIMAL LUXURY 4K VIDEO STORIES REELS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#0E0E0E] text-[#FAF8F5] border-y border-[#262626] relative overflow-hidden">
        {/* Subtle Ambient Studio Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[92rem] mx-auto relative z-10">
          {/* Minimal Centered Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-[0.65rem] uppercase tracking-widest font-semibold mb-2.5 border border-accent/30 shadow-sm">
              <Film className="w-3 h-3 text-accent" />
              <span>4K Video Stories</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal">
              Walkthroughs <span className="font-serif italic text-accent font-light">&amp;</span> Soundbites
            </h2>
            <p className="text-xs text-white/50 font-light mt-1.5">
              Click any residence to watch full 4K cinema walkthrough
            </p>
          </div>

          {/* 4 Clean Visual Story Cards in 1 Single Minimal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEO_STORIES.map((v) => (
              <div
                key={v.id}
                onClick={() => setVideoModal(v)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-accent/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between p-4"
              >
                {/* Background Photo with Smooth Hover Zoom */}
                <img
                  src={v.image}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-108 transition-all duration-700"
                />

                {/* Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

                {/* Top Pill Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 text-[0.6rem] uppercase tracking-wider font-semibold border border-white/15 shadow-sm">
                    {v.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-accent text-[0.6rem] font-mono border border-accent/30 flex items-center gap-1 shadow-sm">
                    <Play className="w-2 h-2 fill-accent" />
                    {v.duration}
                  </span>
                </div>

                {/* Center Glowing Play Button */}
                <div className="relative z-10 self-center">
                  <div className="w-12 h-12 rounded-full bg-accent/90 group-hover:bg-accent text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-all duration-300 border border-white/40">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                {/* Bottom Minimal Info Overlay */}
                <div className="relative z-10 bg-black/65 backdrop-blur-md p-3.5 rounded-xl border border-white/10 group-hover:border-accent/40 transition-colors shadow-lg">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-serif text-sm font-medium text-white group-hover:text-accent transition-colors">
                      {v.title}
                    </h3>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                    </div>
                  </div>

                  <p className="text-[0.65rem] text-white/60 mb-1.5">
                    {v.client} • {v.location}
                  </p>

                  <p className="font-serif text-[0.72rem] text-white/90 italic line-clamp-2 leading-tight">
                    {v.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: LIGHT BACKGROUND - 4-STEP CLIENT PROTOCOL */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-[92rem] mx-auto bg-[#FAF8F5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-accent/10 text-accent text-[0.65rem] uppercase tracking-widest font-semibold mb-2">
            <Layers className="w-3 h-3" />
            <span>Process Discipline</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal">
            Why Handover Quality is 99.4%
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-accent/15 flex flex-col justify-between shadow-sm hover:border-accent/40 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl text-accent/60 font-light block mb-2">
                  {step.num}
                </span>
                <h3 className="font-serif text-base text-primary font-medium mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-accent/10 flex items-center text-[0.65rem] uppercase tracking-wider text-accent font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: DARK BACKGROUND - DUE DILIGENCE FAQs */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#121212] text-[#FAF8F5] border-t border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-accent/20 text-accent text-[0.65rem] uppercase tracking-widest font-semibold mb-2">
              <HelpCircle className="w-3 h-3" />
              <span>Client Due Diligence</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal">
              Frequently Addressed
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1A] rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif text-white hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-accent text-lg ml-4">
                    {faqOpen === idx ? '−' : '+'}
                  </span>
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: LIGHT BACKGROUND - ATELIER CONSULTATION CTA */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] text-primary text-center">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-white border border-accent/20 shadow-lg">
          <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal mb-3">
            Begin Your Spatial Journey
          </h2>
          <p className="text-xs sm:text-sm text-primary/70 max-w-md mx-auto mb-6 font-light leading-relaxed">
            Schedule a private studio consultation for your upcoming penthouse, villa, or residence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/#consult"
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors"
            >
              Book Studio Consultation
            </Link>
            <button
              onClick={() => setIsSubmitOpen(true)}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-surface text-xs uppercase tracking-widest font-semibold rounded transition-colors"
            >
              Submit Review
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL: DETAIL REVIEW */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {modalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-7 text-primary my-8 border border-accent/20"
            >
              <button
                onClick={() => setModalReview(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-primary/60 hover:text-primary hover:bg-[#FAF8F5] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Main Photo */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black mb-4 border border-accent/20 shadow-inner">
                <img
                  src={
                    (modalReview.images && modalReview.images[modalActiveImgIdx]) ||
                    modalReview.image
                  }
                  alt={modalReview.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded bg-black/70 text-white text-[0.62rem] uppercase tracking-wider backdrop-blur-sm">
                    {modalReview.category}
                  </span>
                  {modalReview.isUserCreated && (
                    <span className="px-2.5 py-0.5 rounded bg-accent text-white text-[0.62rem] font-semibold tracking-wider flex items-center gap-1 shadow">
                      <Sparkles className="w-2.5 h-2.5" /> Just Added
                    </span>
                  )}
                </div>
                {modalReview.images && modalReview.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-[0.65rem] font-medium flex items-center gap-1.5 border border-white/20">
                    <ImageIcon className="w-3 h-3 text-accent" />
                    <span>Photo {modalActiveImgIdx + 1} of {modalReview.images.length}</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery Row if multiple images */}
              {modalReview.images && modalReview.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-thin">
                  {modalReview.images.map((imgUrl, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => setModalActiveImgIdx(imgIdx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${modalActiveImgIdx === imgIdx
                        ? 'border-accent ring-2 ring-accent/30 scale-105'
                        : 'border-accent/20 opacity-70 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Photo ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={modalReview.avatar}
                    alt={modalReview.client}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h3 className="font-serif text-base font-semibold">{modalReview.client}</h3>
                    <p className="text-xs text-accent font-medium">{modalReview.project}</p>
                    <p className="text-[0.65rem] text-primary/50">{modalReview.location} • {modalReview.area}</p>
                  </div>
                </div>

                <div className="flex text-amber-500">
                  {[...Array(modalReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              <p className="font-serif text-base italic text-primary/90 leading-relaxed mb-4 p-4 rounded-xl bg-[#FAF8F5] border border-accent/10">
                “{modalReview.quote}”
              </p>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-accent/15 mb-4 text-xs">
                <span className="text-[0.65rem] uppercase text-accent font-semibold block mb-1">
                  Materials Executed
                </span>
                <span className="text-primary/70 font-light">
                  {Array.isArray(modalReview.materials) ? modalReview.materials.join(' • ') : modalReview.materials}
                </span>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-2 text-xs text-primary/60 pt-2 border-t border-accent/10">
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Project Handover
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setModalReview(null)}
                    className="px-4 py-1.5 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: CINEMATIC THEATER VIDEO PLAYER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {videoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-4xl bg-[#121212] rounded-3xl overflow-hidden text-white border border-accent/30 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setVideoModal(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white/80 hover:text-white hover:bg-accent transition-colors border border-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Theater Screen */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={videoModal.image}
                  alt={videoModal.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Ambient Play Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl mb-4 border-2 border-white/30 animate-pulse">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-accent text-[0.65rem] font-semibold uppercase tracking-wider mb-2 border border-accent/40">
                    {videoModal.quality || '4K Cinema'} • {videoModal.duration}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-medium max-w-lg">
                    {videoModal.title}
                  </h4>
                  <p className="text-xs text-white/70 mt-1">
                    {videoModal.client} • {videoModal.location}
                  </p>
                </div>

                {/* Bottom Scrubbing Simulation Bar */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-accent" />
                    <span className="text-[0.65rem] font-mono">Dolby Atmos Acoustic Profile</span>
                  </div>
                  <div className="flex items-center space-x-1.5 h-3">
                    <span className="w-1 bg-accent rounded-full animate-pulse h-2" />
                    <span className="w-1 bg-accent rounded-full animate-pulse h-3" />
                    <span className="w-1 bg-accent rounded-full animate-pulse h-1.5" />
                  </div>
                </div>
              </div>

              {/* Quote & Reflection footer in modal */}
              <div className="p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={videoModal.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                    alt={videoModal.client}
                    className="w-10 h-10 rounded-full object-cover border border-accent"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{videoModal.client}</div>
                    <div className="text-[0.68rem] text-accent">{videoModal.role || 'Homeowner'} • {videoModal.area || 'Residence'}</div>
                  </div>
                </div>

                <button
                  onClick={() => setVideoModal(null)}
                  className="px-5 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  Close Theater
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: DYNAMIC SUBMIT REVIEW FORM */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isSubmitOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-primary border border-accent/20 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsSubmitOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-primary/50 hover:text-primary hover:bg-[#FAF8F5] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm ${formData.rating >= 4
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                    : 'bg-amber-50 border border-amber-200 text-amber-600'
                    }`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-primary font-medium mb-1">
                    {formData.rating >= 4 ? 'Review Published!' : 'Feedback Received'}
                  </h3>
                  <p className="text-xs text-primary/60 max-w-xs">
                    {formData.rating >= 4
                      ? `Thank you, ${formData.client}. Your review is now live.`
                      : `Thank you, ${formData.client}. Your feedback has been noted.`}
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-4 text-center flex flex-col items-center">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[0.6rem] uppercase tracking-widest font-semibold mb-1 border border-accent/20">
                      <Sparkles className="w-3 h-3" />
                      <span>Add Review</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal">
                      Share Your Experience
                    </h3>
                    <p className="text-[0.72rem] text-primary/50 mt-0.5">
                      Upload project photos &amp; your rating
                    </p>
                  </div>

                  <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                    {/* ======================================================== */}
                    {/* 1 ROW: 30% COVER PHOTO + 70% ADDITIONAL GALLERY PHOTOS */}
                    {/* ======================================================== */}
                    <div className="grid grid-cols-1 sm:grid-cols-10 gap-3 items-stretch">
                      {/* Left Box (30% WIDTH): COVER PHOTO */}
                      <div className="sm:col-span-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-accent/25 flex flex-col justify-between space-y-2">
                        <div>
                          <label className="text-[0.65rem] uppercase text-primary font-bold block mb-1.5">
                            Cover Photo *
                          </label>

                          {/* Cover Photo Preview & Upload */}
                          {formData.coverImage ? (
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black border border-accent/40 group shadow-sm mb-1">
                              <img
                                src={formData.coverImage}
                                alt="Cover"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                                <label className="px-2 py-0.5 rounded bg-accent text-white text-[0.58rem] font-semibold cursor-pointer hover:bg-accent/90 shadow transition-colors flex items-center gap-0.5">
                                  <Upload className="w-2.5 h-2.5" />
                                  <span>Edit</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleCoverImageUpload}
                                    className="hidden"
                                  />
                                </label>
                                <button
                                  type="button"
                                  onClick={() => setFormData((prev) => ({ ...prev, coverImage: '' }))}
                                  className="px-2 py-0.5 rounded bg-red-600 text-white text-[0.58rem] font-semibold hover:bg-red-700 shadow transition-colors"
                                >
                                  <X className="w-2.5 h-2.5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center p-2.5 border-2 border-dashed border-accent/30 hover:border-accent bg-white rounded-lg cursor-pointer transition-all group text-center min-h-[95px]">
                              <ImageIcon className="w-4 h-4 text-accent mb-1 group-hover:scale-110 transition-transform" />
                              <span className="text-[0.65rem] font-semibold text-primary">
                                Upload Cover
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleCoverImageUpload}
                                className="hidden"
                              />
                            </label>
                          )}
                        </div>

                        {/* Quick Cover Preset Selector */}
                        <div className="pt-1 border-t border-accent/15">
                          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none">
                            <span className="text-[0.5rem] text-primary/50 whitespace-nowrap">Presets:</span>
                            {Object.entries(CATEGORY_IMAGES).map(([catName, imgUrl]) => (
                              <button
                                type="button"
                                key={catName}
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    category: catName,
                                    coverImage: imgUrl
                                  }))
                                }
                                className={`px-1.5 py-0.2 rounded text-[0.5rem] font-medium border transition-colors whitespace-nowrap ${formData.coverImage === imgUrl
                                  ? 'bg-accent text-white border-accent'
                                  : 'bg-white border-accent/20 text-primary/60 hover:text-accent'
                                  }`}
                              >
                                {catName}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Box (70% WIDTH): ADDITIONAL GALLERY PHOTOS */}
                      <div className="sm:col-span-7 p-2.5 rounded-xl bg-white border border-accent/20 flex flex-col justify-between space-y-2">
                        <div>
                          <label className="text-[0.65rem] uppercase text-primary/80 font-bold block mb-1.5">
                            Gallery Photos ({formData.customImages.length})
                          </label>

                          {/* Thumbnail Grid */}
                          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1.5 min-h-[95px] content-start">
                            {formData.customImages.map((imgUrl, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="relative aspect-square rounded-lg overflow-hidden border border-accent/30 group bg-black shadow-xs"
                              >
                                <img
                                  src={imgUrl}
                                  alt={`Gallery ${imgIdx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeCustomImage(imgIdx)}
                                  className="absolute top-0.5 right-0.5 p-0.5 rounded bg-black/70 text-white hover:bg-red-600 transition-colors"
                                >
                                  <X className="w-2.5 h-2.5" />
                                </button>
                              </div>
                            ))}

                            {/* Add Photos Button */}
                            <label className="aspect-square rounded-lg border-2 border-dashed border-accent/30 hover:border-accent bg-[#FAF8F5] hover:bg-accent/5 cursor-pointer flex flex-col items-center justify-center p-1 text-center transition-all group">
                              <Upload className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform mb-0.5" />
                              <span className="text-[0.58rem] font-semibold text-primary">
                                + Photos
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleMultipleImageUpload}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>

                        <span className="text-[0.52rem] text-primary/40 italic">
                          Upload multiple angles &amp; details
                        </span>
                      </div>
                    </div>

                    {/* 2. Client Avatar & Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                      <div className="sm:col-span-4 flex items-center space-x-2">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent bg-[#FAF8F5] flex-shrink-0">
                          <img
                            src={formData.customAvatar || AVATAR_OPTIONS[0]}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="text-[0.62rem] text-accent hover:underline cursor-pointer font-semibold flex items-center gap-1">
                          <Camera className="w-3 h-3" />
                          <span>Photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <div className="sm:col-span-8">
                        <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.client}
                          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                          placeholder="e.g. Rajesh Shah"
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-accent/20 rounded-lg text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* 3. Project & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                          Project *
                        </label>
                        <input
                          type="text"
                          value={formData.project}
                          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                          placeholder="e.g. Sky Penthouse"
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-accent/20 rounded-lg text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                          Location &amp; Area
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Vesu, Surat • 5,800 sq.ft"
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-accent/20 rounded-lg text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* 4. Category & Rating */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-center">
                      <div>
                        <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                          Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-accent/20 rounded-lg text-xs text-primary focus:outline-none focus:border-accent cursor-pointer"
                        >
                          <option value="Penthouses">Penthouses</option>
                          <option value="Villas">Villas</option>
                          <option value="Suites">Suites</option>
                          <option value="Kitchens">Kitchens</option>
                          <option value="Lounges">Lounges</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                          Rating
                        </label>
                        <div className="flex items-center space-x-1 py-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setFormData({ ...formData, rating: star })}
                              className="p-0.5 hover:scale-110 transition-transform"
                            >
                              <Star
                                className={`w-4 h-4 ${formData.rating >= star
                                  ? 'fill-amber-500 text-amber-500'
                                  : 'text-gray-300'
                                  }`}
                              />
                            </button>
                          ))}
                          <span className="text-[0.68rem] text-primary/60 font-medium ml-1">
                            ({formData.rating}★)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 5. Review Quote */}
                    <div>
                      <label className="block text-[0.62rem] uppercase text-primary/70 font-semibold mb-0.5">
                        Review / Reflection *
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={formData.quote}
                        onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                        placeholder="Write your review here..."
                        className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-accent/20 rounded-lg text-xs text-primary focus:outline-none focus:border-accent resize-none"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="pt-1 flex justify-end items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsSubmitOpen(false)}
                        className="px-3.5 py-1.5 text-xs text-primary/60 hover:text-primary font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary hover:bg-accent text-surface text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors flex items-center space-x-1.5 shadow-sm"
                      >
                        <span>Submit Review</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Footer */}
      <Footer />
    </div>
  );
}
