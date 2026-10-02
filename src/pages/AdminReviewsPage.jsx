import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Unlock,
  Key,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Star,
  Search,
  Filter,
  Plus,
  ArrowLeft,
  Eye,
  X,
  Upload,
  Image as ImageIcon,
  RotateCcw,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Building,
  MapPin
} from 'lucide-react';

// Default Reviews Data
const DEFAULT_REVIEWS_DATA = [
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
    images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];

const CATEGORY_IMAGES = {
  Penthouses: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  Villas: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
  Suites: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200',
  Kitchens: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
  Lounges: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
};

const CATEGORIES = ['All', 'Penthouses', 'Villas', 'Suites', 'Kitchens', 'Lounges'];

export default function AdminReviewsPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('inches_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [viewModalReview, setViewModalReview] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form State for creating new review as Admin
  const [newForm, setNewForm] = useState({
    client: '',
    project: '',
    location: 'Surat, Gujarat',
    area: '4,500 sq.ft',
    category: 'Penthouses',
    rating: 5,
    quote: '',
    materials: 'Honed Travertine, Champagne Brass, Smoked Oak',
    coverImage: '',
    customImages: []
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Load and sync live reviews list from localStorage
  const loadReviewsFromStorage = () => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const savedPublic = localStorage.getItem('inches_dynamic_reviews');
      const savedPrivate = localStorage.getItem('inches_concierge_feedback');
      
      let userPub = [];
      let userPriv = [];
      if (savedPublic) {
        const parsed = JSON.parse(savedPublic);
        if (Array.isArray(parsed)) userPub = parsed;
      }
      if (savedPrivate) {
        const parsedPriv = JSON.parse(savedPrivate);
        if (Array.isArray(parsedPriv)) userPriv = parsedPriv;
      }
      
      // All user submissions show at the top
      const combined = [...userPub, ...userPriv, ...DEFAULT_REVIEWS_DATA];
      setAllReviews(combined.filter((r) => !deletedIds.includes(r.id)));
    } catch (err) {
      console.error(err);
      setAllReviews(DEFAULT_REVIEWS_DATA);
    }
  };

  const [allReviews, setAllReviews] = useState(() => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const savedPublic = localStorage.getItem('inches_dynamic_reviews');
      const savedPrivate = localStorage.getItem('inches_concierge_feedback');
      
      let userPub = [];
      let userPriv = [];
      if (savedPublic) {
        const parsed = JSON.parse(savedPublic);
        if (Array.isArray(parsed)) userPub = parsed;
      }
      if (savedPrivate) {
        const parsedPriv = JSON.parse(savedPrivate);
        if (Array.isArray(parsedPriv)) userPriv = parsedPriv;
      }
      
      const combined = [...userPub, ...userPriv, ...DEFAULT_REVIEWS_DATA];
      return combined.filter((r) => !deletedIds.includes(r.id));
    } catch (err) {
      console.error(err);
      return DEFAULT_REVIEWS_DATA;
    }
  });

  // Real-time synchronization listeners across tabs & component updates
  useEffect(() => {
    const handleSync = () => {
      loadReviewsFromStorage();
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('inches_review_updated', handleSync);
    window.addEventListener('focus', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('inches_review_updated', handleSync);
      window.removeEventListener('focus', handleSync);
    };
  }, []);

  // Calculate stats
  const deletedIds = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
    } catch {
      return [];
    }
  }, [allReviews]);

  const publicCount = allReviews.filter((r) => r.rating >= 4).length;
  const privateCount = allReviews.filter((r) => r.rating < 4).length;

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const p = passcode.trim();
    if (p === 'admin123' || p === 'inches' || p === 'INCHES2026' || p === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('inches_admin_auth', 'true');
      setPasscode('');
      setPassError('');
      loadReviewsFromStorage();
      showToast('🛡️ Welcome, Administrator. Portal unlocked.');
    } else {
      setPassError('Invalid passkey. Try "admin123"');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('inches_admin_auth');
    showToast('Logged out of Admin Portal');
  };

  // Handle Permanent Delete
  const handleDeleteReview = (reviewItem) => {
    if (!reviewItem) return;

    const updated = allReviews.filter((r) => r.id !== reviewItem.id);
    setAllReviews(updated);

    try {
      const deleted = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      if (!deleted.includes(reviewItem.id)) {
        localStorage.setItem('inches_deleted_review_ids', JSON.stringify([...deleted, reviewItem.id]));
      }

      // If user-created, clean from public/private storages
      if (reviewItem.isUserCreated) {
        const savedPub = localStorage.getItem('inches_dynamic_reviews');
        if (savedPub) {
          const parsed = JSON.parse(savedPub).filter((r) => r.id !== reviewItem.id);
          localStorage.setItem('inches_dynamic_reviews', JSON.stringify(parsed));
        }
        const savedPriv = localStorage.getItem('inches_concierge_feedback');
        if (savedPriv) {
          const parsedPriv = JSON.parse(savedPriv).filter((r) => r.id !== reviewItem.id);
          localStorage.setItem('inches_concierge_feedback', JSON.stringify(parsedPriv));
        }
      }

      window.dispatchEvent(new Event('inches_review_updated'));
    } catch (err) {
      console.error(err);
    }

    if (viewModalReview && viewModalReview.id === reviewItem.id) {
      setViewModalReview(null);
    }
    setDeleteCandidate(null);
    showToast(`✓ Review #${reviewItem.id} by "${reviewItem.client}" deleted permanently.`);
  };

  // Handle Restore All
  const handleRestoreAll = () => {
    try {
      localStorage.removeItem('inches_deleted_review_ids');
      window.dispatchEvent(new Event('inches_review_updated'));
    } catch (err) {
      console.error(err);
    }
    loadReviewsFromStorage();
    showToast('✓ All default and dynamic reviews have been restored!');
  };

  // Handle Admin Add New Review
  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
    if (!newForm.client.trim() || !newForm.quote.trim()) return;

    const defaultImg = CATEGORY_IMAGES[newForm.category] || CATEGORY_IMAGES['Penthouses'];
    const cover = newForm.coverImage || defaultImg;
    const additional = (newForm.customImages || []).filter((img) => img !== cover);
    const finalImages = [cover, ...additional];

    const newReview = {
      id: Date.now(),
      client: newForm.client.trim(),
      project: newForm.project.trim() || `${newForm.category} Residence`,
      category: newForm.category,
      location: newForm.location.trim() || 'Surat, Gujarat',
      area: newForm.area.trim() || '4,500 sq.ft',
      rating: Number(newForm.rating),
      likes: 10,
      isUserCreated: true,
      source: 'Admin Portal',
      createdAt: new Date().toISOString(),
      quote: newForm.quote.trim(),
      materials: newForm.materials
        ? newForm.materials.split(',').map((m) => m.trim()).filter(Boolean)
        : ['Honed Travertine', 'Champagne Brass', 'Smoked Walnut'],
      image: finalImages[0],
      images: finalImages,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    };

    const isHigh = newReview.rating >= 4;

    if (isHigh) {
      try {
        const savedPub = localStorage.getItem('inches_dynamic_reviews');
        const parsed = savedPub ? JSON.parse(savedPub) : [];
        localStorage.setItem('inches_dynamic_reviews', JSON.stringify([newReview, ...parsed]));
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const savedPriv = localStorage.getItem('inches_concierge_feedback');
        const parsed = savedPriv ? JSON.parse(savedPriv) : [];
        localStorage.setItem('inches_concierge_feedback', JSON.stringify([newReview, ...parsed]));
      } catch (err) {
        console.error(err);
      }
    }

    setAllReviews((prev) => [newReview, ...prev]);

    try {
      window.dispatchEvent(new CustomEvent('inches_review_updated', { detail: newReview }));
    } catch (e) {
      console.error(e);
    }

    setIsAddModalOpen(false);
    setNewForm({
      client: '',
      project: '',
      location: 'Surat, Gujarat',
      area: '4,500 sq.ft',
      category: 'Penthouses',
      rating: 5,
      quote: '',
      materials: 'Honed Travertine, Champagne Brass, Smoked Oak',
      coverImage: '',
      customImages: []
    });
    showToast(`✓ Official review by "${newReview.client}" published!`);
  };

  // Filtered List for Table/Grid
  const filteredReviews = useMemo(() => {
    return allReviews.filter((item) => {
      // Search query filter
      const matchesSearch =
        searchQuery === '' ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCat = selectedFilter === 'All' || item.category === selectedFilter;

      // Rating filter
      const matchesRating =
        selectedRating === 'All' ||
        (selectedRating === 'public' && item.rating >= 4) ||
        (selectedRating === 'private' && item.rating < 4) ||
        Number(selectedRating) === item.rating;

      return matchesSearch && matchesCat && matchesRating;
    });
  }, [allReviews, searchQuery, selectedFilter, selectedRating]);

  // =========================================================================
  // VIEW 1: PASSKEY LOGIN SCREEN (IF NOT AUTHENTICATED)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] text-[#FAF8F5] flex flex-col items-center justify-center p-4 selection:bg-accent selection:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-[#161616] border border-accent/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/40 text-accent flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Shield className="w-8 h-8" />
            </div>

            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-semibold px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
              Administrative Gate
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-3 mb-1.5">
              INCHES Atelier
            </h1>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">
              Private Concierge &amp; Review Management Portal. Authorized administrative passkey required.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-[0.65rem] uppercase tracking-wider text-white/70 font-semibold mb-1.5">
                  Security Passkey
                </label>
                <div className="relative">
                  <input
                    type="password"
                    autoFocus
                    required
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setPassError('');
                    }}
                    placeholder="Enter admin passkey..."
                    className="w-full pl-10 pr-4 py-3 bg-[#1F1F1F] border border-white/10 focus:border-accent rounded-xl text-xs text-white placeholder-white/30 focus:outline-none transition-all shadow-inner"
                  />
                  <Key className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                </div>

                {passError && (
                  <p className="text-xs text-red-400 mt-2 flex items-center gap-1.5 font-medium">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{passError}</span>
                  </p>
                )}

                <div className="mt-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-[0.62rem] text-white/50">
                  <span>Default Passkey:</span>
                  <code className="px-2 py-0.5 rounded bg-accent/20 text-accent font-mono font-bold">
                    admin123
                  </code>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent/90 text-white text-xs uppercase tracking-widest font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mt-2 cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Management Portal</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center">
              <Link
                to="/reviews"
                className="text-xs text-white/50 hover:text-accent flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Reviews Gallery</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: FULL AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FAF8F5] font-sans selection:bg-accent selection:text-white">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#161616]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-[96rem] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shadow">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif text-base font-semibold text-white tracking-wide">
                  INCHES <span className="text-accent italic">Admin Portal</span>
                </h1>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[0.58rem] font-mono font-semibold uppercase">
                  Authenticated
                </span>
              </div>
              <p className="text-[0.65rem] text-white/50">
                Live Portfolio &amp; Client Feedback Moderation Console
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 flex-wrap">
            <button
              onClick={() => {
                loadReviewsFromStorage();
                showToast('🔄 Real-time reviews refreshed from live storage!');
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
              title="Refresh reviews from latest live submissions"
            >
              <RotateCcw className="w-3.5 h-3.5 text-accent" />
              <span>Refresh Feed</span>
            </button>

            <Link
              to="/reviews"
              target="_blank"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
              <span>Open Live Gallery</span>
            </Link>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-xs font-semibold shadow transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Review</span>
            </button>

            {deletedIds.length > 0 && (
              <button
                onClick={handleRestoreAll}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-800/60 text-xs font-medium transition-colors"
                title="Restore all deleted reviews"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restore ({deletedIds.length})</span>
              </button>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-semibold transition-colors"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-[96rem] mx-auto p-4 sm:p-8 space-y-6">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[0.65rem] uppercase tracking-wider text-white/60 font-semibold block mb-1">
                Public Live Reviews
              </span>
              <div className="font-serif text-3xl text-white font-light">{publicCount}</div>
              <span className="text-[0.62rem] text-emerald-400 font-mono mt-0.5 block">
                ★ 4 &amp; 5 Star Ratings
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center">
              <Star className="w-6 h-6 fill-emerald-400" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[0.65rem] uppercase tracking-wider text-white/60 font-semibold block mb-1">
                Private Feedback
              </span>
              <div className="font-serif text-3xl text-white font-light">{privateCount}</div>
              <span className="text-[0.62rem] text-amber-400 font-mono mt-0.5 block">
                ★ 1–3 Stars (Concierge Only)
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800 text-amber-400 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[0.65rem] uppercase tracking-wider text-white/60 font-semibold block mb-1">
                Total Deleted
              </span>
              <div className="font-serif text-3xl text-white font-light">{deletedIds.length}</div>
              <span className="text-[0.62rem] text-red-400 font-mono mt-0.5 block">
                Admin Removed Items
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800 text-red-400 flex items-center justify-center">
              <Trash2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[0.65rem] uppercase tracking-wider text-white/60 font-semibold block mb-1">
                Active Categories
              </span>
              <div className="font-serif text-3xl text-white font-light">5</div>
              <span className="text-[0.62rem] text-accent font-mono mt-0.5 block">
                Penthouses, Villas, Suites...
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client name, project, location..."
                className="w-full pl-9 pr-4 py-2.5 bg-[#202020] border border-white/10 focus:border-accent rounded-xl text-xs text-white placeholder-white/40 focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status & Rating Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center space-x-1 bg-[#202020] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setSelectedRating('All')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedRating === 'All' ? 'bg-accent text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  All ({allReviews.length})
                </button>
                <button
                  onClick={() => setSelectedRating('public')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedRating === 'public'
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Live 4-5★ ({publicCount})
                </button>
                <button
                  onClick={() => setSelectedRating('private')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedRating === 'private'
                      ? 'bg-amber-600 text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Private 1-3★ ({privateCount})
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pt-2 border-t border-white/5">
            <span className="text-[0.62rem] uppercase tracking-wider text-white/40 font-semibold mr-1">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                  selectedFilter === cat
                    ? 'bg-white text-black border-white font-semibold'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List Table / Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-white/50 px-1">
            <span>
              Showing <strong className="text-white">{filteredReviews.length}</strong> of{' '}
              <strong className="text-white">{allReviews.length}</strong> total reviews
            </span>
            <span>Click any card or action button to inspect / delete</span>
          </div>

          {filteredReviews.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#161616] border border-white/10">
              <Shield className="w-10 h-10 text-white/20 mx-auto mb-2" />
              <h3 className="font-serif text-lg text-white font-normal">No Reviews Match Filters</h3>
              <p className="text-xs text-white/50 mt-1 max-w-sm mx-auto">
                Try resetting your search query or category filters, or click "Restore All Reviews" if they were deleted.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredReviews.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="rounded-2xl bg-[#161616] border border-white/10 overflow-hidden shadow-lg hover:border-accent/40 transition-all flex flex-col justify-between group"
                >
                  {/* Top Image Preview & Badges */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.project}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-black/70 text-white text-[0.6rem] uppercase tracking-wider backdrop-blur-sm">
                        {item.category}
                      </span>
                      {item.isUserCreated && (
                        <span className="px-2 py-0.5 rounded bg-accent text-white text-[0.6rem] font-semibold tracking-wider flex items-center gap-1 shadow">
                          <Sparkles className="w-2.5 h-2.5" /> User Submitted
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {item.rating >= 4 ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-700 text-[0.6rem] font-medium backdrop-blur-sm">
                          Public Live
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-amber-950/90 text-amber-300 border border-amber-700 text-[0.6rem] font-medium backdrop-blur-sm">
                          Private Feedback
                        </span>
                      )}

                      {item.images && item.images.length > 1 && (
                        <span className="px-2 py-0.5 rounded bg-black/80 text-white text-[0.6rem] font-medium flex items-center gap-1 border border-white/20">
                          <ImageIcon className="w-2.5 h-2.5 text-accent" />
                          <span>{item.images.length}</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3">
                      <h4 className="font-serif text-sm font-semibold text-white truncate">{item.project}</h4>
                      <p className="text-[0.65rem] text-accent font-medium">{item.location} • {item.area}</p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <img
                            src={item.avatar}
                            alt={item.client}
                            className="w-7 h-7 rounded-full object-cover border border-accent"
                          />
                          <span className="text-xs font-semibold text-white">{item.client}</span>
                        </div>

                        <div className="flex text-amber-500">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                      </div>

                      <p className="font-serif text-xs italic text-white/80 leading-relaxed line-clamp-3 mb-3">
                        “{item.quote}”
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {(item.materials || []).map((m, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/[0.04] text-[0.58rem] text-white/60 border border-white/5"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Admin Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setViewModalReview(item);
                          setActiveImgIdx(0);
                        }}
                        className="inline-flex items-center space-x-1 text-xs text-white/60 hover:text-accent font-medium transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => setDeleteCandidate(item)}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-600 text-red-300 hover:text-white border border-red-800 text-xs font-semibold transition-all shadow"
                        title="Delete this review permanently"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete Review</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL: ADMIN REVIEW DETAIL & PHOTO GALLERY VIEWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {viewModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#161616] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8"
            >
              <button
                onClick={() => setViewModalReview(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Photo Display */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 shadow-inner">
                <img
                  src={
                    (viewModalReview.images && viewModalReview.images[activeImgIdx]) ||
                    viewModalReview.image
                  }
                  alt={viewModalReview.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/70 text-white text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
                  {viewModalReview.category}
                </div>
                {viewModalReview.images && viewModalReview.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/80 backdrop-blur-sm text-white text-xs font-mono">
                    Photo {activeImgIdx + 1} of {viewModalReview.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {viewModalReview.images && viewModalReview.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-thin">
                  {viewModalReview.images.map((imgUrl, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => setActiveImgIdx(imgIdx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImgIdx === imgIdx
                          ? 'border-accent ring-2 ring-accent/40 scale-105'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${imgIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Client & Project Details */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <img
                    src={viewModalReview.avatar}
                    alt={viewModalReview.client}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">{viewModalReview.client}</h3>
                    <p className="text-xs text-accent">{viewModalReview.project}</p>
                    <p className="text-[0.68rem] text-white/50">{viewModalReview.location} • {viewModalReview.area}</p>
                  </div>
                </div>

                <div className="flex text-amber-500">
                  {[...Array(viewModalReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              <p className="font-serif text-base italic text-white/90 leading-relaxed mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                “{viewModalReview.quote}”
              </p>

              <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5 mb-6 text-xs">
                <span className="text-[0.65rem] uppercase text-accent font-semibold block mb-1">
                  Materials Executed
                </span>
                <span className="text-white/70">
                  {Array.isArray(viewModalReview.materials)
                    ? viewModalReview.materials.join(' • ')
                    : viewModalReview.materials}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    const rev = viewModalReview;
                    setViewModalReview(null);
                    setDeleteCandidate(rev);
                  }}
                  className="px-4 py-2 rounded-xl bg-red-950 hover:bg-red-600 text-red-300 hover:text-white border border-red-800 text-xs font-semibold transition-all flex items-center gap-1.5 shadow"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete This Review Permanently</span>
                </button>

                <button
                  onClick={() => setViewModalReview(null)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: DELETE CONFIRMATION */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {deleteCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#161616] border border-red-800/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-950 border border-red-700 text-red-400 flex items-center justify-center mb-4 shadow-inner">
                <Trash2 className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-xl font-medium text-white mb-1.5">
                Confirm Permanent Deletion
              </h3>
              <p className="text-xs text-white/60 mb-5 leading-relaxed">
                Are you sure you want to permanently remove this review by <strong className="text-white">{deleteCandidate.client}</strong> from the living portfolio? This action cannot be undone.
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs space-y-1">
                <div className="text-white font-medium">{deleteCandidate.project} ({deleteCandidate.category})</div>
                <div className="text-white/50 text-[0.7rem] italic line-clamp-2">“{deleteCandidate.quote}”</div>
              </div>

              <div className="flex items-center justify-end space-x-2.5">
                <button
                  onClick={() => setDeleteCandidate(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteReview(deleteCandidate)}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-lg transition-all flex items-center gap-1.5"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Permanently</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: ADMIN ADD NEW REVIEW */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-[#161616] border border-accent/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8"
            >
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-5">
                <span className="text-[0.62rem] uppercase tracking-widest text-accent font-semibold px-2.5 py-0.5 bg-accent/15 rounded-md border border-accent/30">
                  Admin Direct Publish
                </span>
                <h3 className="font-serif text-2xl text-white font-normal mt-2">
                  Add Official Client Review
                </h3>
                <p className="text-xs text-white/50 mt-0.5">
                  Directly publish verified project handovers with cover and multi-photo galleries.
                </p>
              </div>

              <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-left">
                {/* 1. Cover Photo & Preset */}
                <div className="p-3.5 rounded-xl bg-[#202020] border border-white/10 space-y-2">
                  <label className="text-[0.65rem] uppercase tracking-wider text-white/70 font-semibold block">
                    Main Cover Image URL / Preset *
                  </label>
                  <input
                    type="text"
                    value={newForm.coverImage}
                    onChange={(e) => setNewForm({ ...newForm, coverImage: e.target.value })}
                    placeholder="Enter image URL or select preset below..."
                    className="w-full px-3 py-2 bg-[#161616] border border-white/10 rounded-lg text-xs text-white placeholder-white/30 focus:outline-none focus:border-accent"
                  />
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
                    <span className="text-[0.58rem] text-white/40 whitespace-nowrap">Presets:</span>
                    {Object.entries(CATEGORY_IMAGES).map(([catName, imgUrl]) => (
                      <button
                        type="button"
                        key={catName}
                        onClick={() => setNewForm({ ...newForm, category: catName, coverImage: imgUrl })}
                        className={`px-2 py-0.5 rounded text-[0.58rem] border transition-colors whitespace-nowrap ${
                          newForm.coverImage === imgUrl
                            ? 'bg-accent text-white border-accent'
                            : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        {catName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Client Name & Project */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newForm.client}
                      onChange={(e) => setNewForm({ ...newForm, client: e.target.value })}
                      placeholder="e.g. Vikram & Radhika Singhania"
                      className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                      Project Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={newForm.project}
                      onChange={(e) => setNewForm({ ...newForm, project: e.target.value })}
                      placeholder="e.g. Sky Villa Penthouse"
                      className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* 3. Category & Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                      Category
                    </label>
                    <select
                      value={newForm.category}
                      onChange={(e) => setNewForm({ ...newForm, category: e.target.value })}
                      className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    >
                      {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                      Rating Score ({newForm.rating} Stars)
                    </label>
                    <select
                      value={newForm.rating}
                      onChange={(e) => setNewForm({ ...newForm, rating: Number(e.target.value) })}
                      className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    >
                      <option value={5}>5 Stars (Public Showcase)</option>
                      <option value={4}>4 Stars (Public Live)</option>
                      <option value={3}>3 Stars (Private Feedback)</option>
                      <option value={2}>2 Stars (Private Feedback)</option>
                      <option value={1}>1 Star (Private Feedback)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Reflection Quote */}
                <div>
                  <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                    Client Reflection Quote *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newForm.quote}
                    onChange={(e) => setNewForm({ ...newForm, quote: e.target.value })}
                    placeholder="Enter verbatim architectural reflection and testimonial..."
                    className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                {/* 5. Materials */}
                <div>
                  <label className="block text-[0.65rem] uppercase text-white/70 font-semibold mb-1">
                    Materials Executed (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newForm.materials}
                    onChange={(e) => setNewForm({ ...newForm, materials: e.target.value })}
                    placeholder="e.g. Monolithic Travertine, Champagne Brass, Smoked Oak"
                    className="w-full px-3 py-2 bg-[#202020] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end space-x-2.5">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white text-xs font-semibold rounded-xl shadow-lg transition-colors flex items-center space-x-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Publish As Official Review</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#161616] text-white px-4 py-3 rounded-xl shadow-2xl border border-accent/40 flex items-center space-x-2.5 text-xs"
          >
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
