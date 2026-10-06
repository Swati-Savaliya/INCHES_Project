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
  const [isDeleteAllPrivateConfirmOpen, setIsDeleteAllPrivateConfirmOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);
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

  // Reactive state for deleted review items
  const [deletedReviews, setDeletedReviews] = useState(() => {
    try {
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      if (savedTrash) {
        const parsed = JSON.parse(savedTrash);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      return DEFAULT_REVIEWS_DATA.filter((r) => deletedIds.includes(r.id));
    } catch {
      return [];
    }
  });

  // Load and sync live reviews list from localStorage
  const loadReviewsFromStorage = () => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const savedPublic = localStorage.getItem('inches_dynamic_reviews');
      const savedPrivate = localStorage.getItem('inches_concierge_feedback');
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      
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
      
      let trash = [];
      if (savedTrash) {
        const parsedTrash = JSON.parse(savedTrash);
        if (Array.isArray(parsedTrash)) trash = parsedTrash;
      } else {
        trash = DEFAULT_REVIEWS_DATA.filter((r) => deletedIds.includes(r.id));
      }
      setDeletedReviews(trash);

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
      const fromIds = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const fromTrash = deletedReviews.map((r) => r.id);
      return Array.from(new Set([...fromIds, ...fromTrash]));
    } catch {
      return deletedReviews.map((r) => r.id);
    }
  }, [allReviews, deletedReviews]);

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
      // 1. Update deleted IDs
      const deleted = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      if (!deleted.includes(reviewItem.id)) {
        localStorage.setItem('inches_deleted_review_ids', JSON.stringify([...deleted, reviewItem.id]));
      }

      // 2. Save full review object into persistent trash reviews storage
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      const parsedTrash = savedTrash ? JSON.parse(savedTrash) : [];
      const updatedTrash = [reviewItem, ...parsedTrash.filter((r) => r.id !== reviewItem.id)];
      localStorage.setItem('inches_trash_reviews', JSON.stringify(updatedTrash));
      setDeletedReviews(updatedTrash);

      // 3. Always clean from active dynamic reviews and concierge feedback
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

      window.dispatchEvent(new Event('inches_review_updated'));
    } catch (err) {
      console.error(err);
    }

    if (viewModalReview && viewModalReview.id === reviewItem.id) {
      setViewModalReview(null);
    }
    setDeleteCandidate(null);
    showToast(`✓ Review #${reviewItem.id} by "${reviewItem.client}" moved to Total Deleted.`);
  };

  // Handle Batch Delete All Private 1-3 Star Feedback
  const handleDeleteAllPrivate = () => {
    const privateReviews = allReviews.filter((r) => r.rating < 4);
    if (privateReviews.length === 0) {
      showToast('No 1-3 star private reviews to delete.');
      setIsDeleteAllPrivateConfirmOpen(false);
      return;
    }
    const privateIds = privateReviews.map((r) => r.id);
    const updated = allReviews.filter((r) => r.rating >= 4);
    setAllReviews(updated);

    try {
      const deleted = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const newDeleted = Array.from(new Set([...deleted, ...privateIds]));
      localStorage.setItem('inches_deleted_review_ids', JSON.stringify(newDeleted));

      // Save all deleted private reviews to persistent trash reviews
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      const parsedTrash = savedTrash ? JSON.parse(savedTrash) : [];
      const updatedTrash = [
        ...privateReviews,
        ...parsedTrash.filter((r) => !privateIds.includes(r.id))
      ];
      localStorage.setItem('inches_trash_reviews', JSON.stringify(updatedTrash));
      setDeletedReviews(updatedTrash);

      const savedPub = localStorage.getItem('inches_dynamic_reviews');
      if (savedPub) {
        const parsed = JSON.parse(savedPub).filter((r) => !privateIds.includes(r.id));
        localStorage.setItem('inches_dynamic_reviews', JSON.stringify(parsed));
      }
      localStorage.removeItem('inches_concierge_feedback');

      window.dispatchEvent(new Event('inches_review_updated'));
      showToast(`✓ All ${privateIds.length} private (1-3★) reviews moved to Total Deleted.`);
    } catch (err) {
      console.error(err);
    }
    setIsDeleteAllPrivateConfirmOpen(false);
  };

  // Handle Restore Single Review
  const handleRestoreSingle = (itemToRestore) => {
    if (!itemToRestore) return;
    const id = itemToRestore.id;

    try {
      // 1. Remove from deleted IDs
      const deleted = JSON.parse(localStorage.getItem('inches_deleted_review_ids') || '[]');
      const updatedIds = deleted.filter((delId) => delId !== id);
      localStorage.setItem('inches_deleted_review_ids', JSON.stringify(updatedIds));

      // 2. Remove from trash reviews
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      const parsedTrash = savedTrash ? JSON.parse(savedTrash) : [];
      const updatedTrash = parsedTrash.filter((r) => r.id !== id);
      localStorage.setItem('inches_trash_reviews', JSON.stringify(updatedTrash));
      setDeletedReviews(updatedTrash);

      // 3. If dynamic review or private feedback, restore to respective storage
      if (itemToRestore.isUserCreated || itemToRestore.source) {
        if (itemToRestore.rating >= 4) {
          const savedPub = localStorage.getItem('inches_dynamic_reviews');
          const parsedPub = savedPub ? JSON.parse(savedPub) : [];
          localStorage.setItem('inches_dynamic_reviews', JSON.stringify([itemToRestore, ...parsedPub.filter((r) => r.id !== id)]));
        } else {
          const savedPriv = localStorage.getItem('inches_concierge_feedback');
          const parsedPriv = savedPriv ? JSON.parse(savedPriv) : [];
          localStorage.setItem('inches_concierge_feedback', JSON.stringify([itemToRestore, ...parsedPriv.filter((r) => r.id !== id)]));
        }
      }

      window.dispatchEvent(new Event('inches_review_updated'));
      loadReviewsFromStorage();
      showToast(`✓ Review by "${itemToRestore.client}" restored successfully!`);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle Restore All
  const handleRestoreAll = () => {
    try {
      const savedTrash = localStorage.getItem('inches_trash_reviews');
      const parsedTrash = savedTrash ? JSON.parse(savedTrash) : [];

      // Restore user submissions
      const userPubToRestore = parsedTrash.filter((r) => (r.isUserCreated || r.source) && r.rating >= 4);
      const userPrivToRestore = parsedTrash.filter((r) => (r.isUserCreated || r.source) && r.rating < 4);

      if (userPubToRestore.length > 0) {
        const savedPub = localStorage.getItem('inches_dynamic_reviews');
        const parsedPub = savedPub ? JSON.parse(savedPub) : [];
        const pubIds = userPubToRestore.map((r) => r.id);
        localStorage.setItem(
          'inches_dynamic_reviews',
          JSON.stringify([...userPubToRestore, ...parsedPub.filter((r) => !pubIds.includes(r.id))])
        );
      }

      if (userPrivToRestore.length > 0) {
        const savedPriv = localStorage.getItem('inches_concierge_feedback');
        const parsedPriv = savedPriv ? JSON.parse(savedPriv) : [];
        const privIds = userPrivToRestore.map((r) => r.id);
        localStorage.setItem(
          'inches_concierge_feedback',
          JSON.stringify([...userPrivToRestore, ...parsedPriv.filter((r) => !privIds.includes(r.id))])
        );
      }

      localStorage.removeItem('inches_deleted_review_ids');
      localStorage.removeItem('inches_trash_reviews');
      setDeletedReviews([]);
      window.dispatchEvent(new Event('inches_review_updated'));
    } catch (err) {
      console.error(err);
    }
    loadReviewsFromStorage();
    showToast('✓ All deleted reviews have been restored to the live gallery!');
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
          className="w-full max-w-lg bg-[#161616] border border-accent/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="w-18 h-18 rounded-2xl bg-accent/15 border border-accent/40 text-accent flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Shield className="w-9 h-9" />
            </div>

            <span className="text-xs tracking-[0.25em] uppercase text-accent font-bold px-3.5 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              Administrative Gate
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-4 mb-2">
              INCHES Atelier
            </h1>
            <p className="text-sm text-white/70 mb-8 leading-relaxed">
              Private Concierge &amp; Review Management Portal. Authorized administrative passkey required.
            </p>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2">
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
                    className="w-full pl-11 pr-4 py-3.5 bg-[#1F1F1F] border border-white/15 focus:border-accent rounded-xl text-sm text-white placeholder-white/40 focus:outline-none transition-all shadow-inner font-medium"
                  />
                  <Key className="w-5 h-5 text-accent absolute left-3.5 top-3.5" />
                </div>

                {passError && (
                  <p className="text-sm text-red-400 mt-2.5 flex items-center gap-2 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{passError}</span>
                  </p>
                )}

                <div className="mt-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>Default Passkey:</span>
                  <code className="px-2.5 py-1 rounded bg-accent/20 text-accent font-mono font-bold text-xs">
                    admin123
                  </code>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white text-sm uppercase tracking-widest font-bold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mt-3 cursor-pointer"
              >
                <Unlock className="w-4.5 h-4.5" />
                <span>Unlock Management Portal</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center">
              <Link
                to="/reviews"
                className="text-sm text-white/60 hover:text-accent flex items-center gap-2 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
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
    <div className="min-h-screen bg-[#0E0E0E] text-[#FAF8F5] font-sans selection:bg-accent selection:text-white relative overflow-hidden">
      {/* Ambient Luxury Background Lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#0E0E0E]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-4 shadow-2xl">
        <div className="max-w-[96rem] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-white flex items-center justify-center shadow-lg shadow-accent/20 border border-accent/40">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="font-serif text-xl sm:text-2xl font-medium text-white tracking-wide">
                  INCHES <span className="text-accent italic font-normal">Admin Portal</span>
                </h1>
                <span className="px-3 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
                  ● Authenticated
                </span>
              </div>
              <p className="text-xs text-white/60 tracking-wide mt-0.5">
                Live Architectural Portfolio &amp; Client Feedback Moderation Console
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-wrap">
            <button
              onClick={() => {
                loadReviewsFromStorage();
                showToast('🔄 Real-time reviews refreshed from live storage!');
              }}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all shadow-sm"
              title="Refresh reviews from latest live submissions"
            >
              <RotateCcw className="w-4 h-4 text-accent" />
              <span>Refresh Feed</span>
            </button>

            <Link
              to="/reviews"
              target="_blank"
              className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium border border-white/10 hover:border-accent/40 transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-accent" />
              <span>Open Live Gallery</span>
            </Link>

            {deletedReviews.length > 0 && (
              <button
                onClick={handleRestoreAll}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-800/60 text-sm font-semibold transition-all shadow-sm"
                title="Restore all deleted reviews"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restore All ({deletedReviews.length})</span>
              </button>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/90 text-red-200 border border-red-800/80 hover:border-red-600 text-sm font-semibold transition-all shadow-sm"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="relative z-10 max-w-[96rem] mx-auto p-4 sm:p-8 space-y-6">
        {/* Metric Cards Row - Fully Interactive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* 1. Public Live Reviews */}
          <button
            type="button"
            onClick={() => {
              const next = selectedRating === 'public' ? 'All' : 'public';
              setSelectedRating(next);
              showToast(next === 'public' ? '✓ Filter applied: Showing Public Live Reviews (4-5★)' : '✓ Filter reset: Showing all reviews');
            }}
            className={`p-5 sm:p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
              selectedRating === 'public'
                ? 'bg-gradient-to-br from-emerald-950/50 to-[#121212] border-emerald-500/80 ring-2 ring-emerald-500/30 shadow-xl shadow-emerald-950/40'
                : 'bg-gradient-to-b from-[#181818] to-[#121212] border-white/[0.08] hover:border-emerald-500/40 hover:shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Public Live Reviews
                </span>
                {selectedRating === 'public' && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider shadow">
                    Active
                  </span>
                )}
              </div>
              <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-tight my-1">{publicCount}</div>
              <span className="text-xs text-emerald-400 font-mono mt-1 block flex items-center gap-1.5">
                <span className="font-medium">★ 4 &amp; 5 Star Ratings</span>
                <span className="text-white/40 text-[0.72rem] group-hover:text-emerald-300 transition-colors">
                  • {selectedRating === 'public' ? 'Click to reset' : 'Click to filter'}
                </span>
              </span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
              selectedRating === 'public'
                ? 'bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                : 'bg-emerald-950/60 border-emerald-800/80 text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500'
            }`}>
              <Star className="w-7 h-7 fill-current" />
            </div>
          </button>

          {/* 2. Private Feedback */}
          <button
            type="button"
            onClick={() => {
              const next = selectedRating === 'private' ? 'All' : 'private';
              setSelectedRating(next);
              showToast(next === 'private' ? '✓ Filter applied: Showing Private Feedback (1-3★)' : '✓ Filter reset: Showing all reviews');
            }}
            className={`p-5 sm:p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
              selectedRating === 'private'
                ? 'bg-gradient-to-br from-amber-950/50 to-[#121212] border-amber-500/80 ring-2 ring-amber-500/30 shadow-xl shadow-amber-950/40'
                : 'bg-gradient-to-b from-[#181818] to-[#121212] border-white/[0.08] hover:border-amber-500/40 hover:shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Private Feedback
                </span>
                {selectedRating === 'private' && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow">
                    Active
                  </span>
                )}
              </div>
              <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-tight my-1">{privateCount}</div>
              <span className="text-xs text-amber-400 font-mono mt-1 block flex items-center gap-1.5">
                <span className="font-medium">★ 1–3 Stars (Concierge Only)</span>
                <span className="text-white/40 text-[0.72rem] group-hover:text-amber-300 transition-colors">
                  • {selectedRating === 'private' ? 'Click to reset' : 'Click to filter'}
                </span>
              </span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
              selectedRating === 'private'
                ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30 scale-105'
                : 'bg-amber-950/60 border-amber-800/80 text-amber-400 group-hover:scale-105 group-hover:border-amber-500'
            }`}>
              <MessageSquare className="w-7 h-7" />
            </div>
          </button>

          {/* 3. Total Deleted */}
          <button
            type="button"
            onClick={() => setIsDeletedModalOpen(true)}
            className="p-5 sm:p-6 rounded-2xl text-left border border-white/[0.08] bg-gradient-to-b from-[#181818] to-[#121212] hover:border-red-500/50 hover:shadow-lg transition-all duration-300 flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/60 font-semibold block mb-1.5">
                Total Deleted
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-tight my-1">{deletedReviews.length}</div>
              <span className="text-xs text-red-400 font-mono mt-1 block flex items-center gap-1.5">
                <span className="font-medium">Admin Removed Items</span>
                <span className="text-white/40 text-[0.72rem] group-hover:text-red-300 transition-colors">
                  • Click to inspect &amp; restore
                </span>
              </span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-red-950/60 border border-red-800/80 text-red-400 flex items-center justify-center group-hover:scale-105 group-hover:border-red-500 transition-all">
              <Trash2 className="w-7 h-7" />
            </div>
          </button>

          {/* 4. Active Categories */}
          <button
            type="button"
            onClick={() => {
              setSelectedFilter('All');
              setSelectedRating('All');
              setSearchQuery('');
              showToast('✓ All filters reset: Showing all 5 categories');
            }}
            className={`p-5 sm:p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
              selectedFilter !== 'All'
                ? 'bg-gradient-to-br from-accent/30 to-[#121212] border-accent ring-2 ring-accent/30 shadow-xl shadow-accent/20'
                : 'bg-gradient-to-b from-[#181818] to-[#121212] border-white/[0.08] hover:border-accent/50 hover:shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Active Categories
                </span>
                {selectedFilter !== 'All' && (
                  <span className="px-2 py-0.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider shadow">
                    {selectedFilter}
                  </span>
                )}
              </div>
              <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-tight my-1">{CATEGORIES.length - 1}</div>
              <span className="text-xs text-accent font-mono mt-1 block flex items-center gap-1.5">
                <span className="font-medium">Penthouses, Villas, Suites...</span>
                <span className="text-white/40 text-[0.72rem] group-hover:text-accent/90 transition-colors">
                  • Click to reset all
                </span>
              </span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
              selectedFilter !== 'All'
                ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30 scale-105'
                : 'bg-accent/15 border border-accent/30 text-accent group-hover:scale-105 group-hover:border-accent'
            }`}>
              <Building className="w-7 h-7" />
            </div>
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#161616] to-[#121212] border border-white/[0.08] space-y-4.5 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client name, project, location..."
                className="w-full pl-10 pr-4 py-3 bg-[#1C1C1C] border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent/40 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none transition-all"
              />
              <Search className="w-4.5 h-4.5 text-white/40 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Status & Rating Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center space-x-1.5 bg-[#1C1C1C] p-1.5 rounded-xl border border-white/10">
                <button
                  onClick={() => setSelectedRating('All')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRating === 'All'
                      ? 'bg-accent text-white font-semibold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  All ({allReviews.length})
                </button>
                <button
                  onClick={() => setSelectedRating('public')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRating === 'public'
                      ? 'bg-emerald-600 text-white font-semibold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Live 4-5★ ({publicCount})
                </button>
                <button
                  onClick={() => setSelectedRating('private')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRating === 'private'
                      ? 'bg-amber-600 text-white font-semibold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Private 1-3★ ({privateCount})
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2.5 overflow-x-auto scrollbar-none pt-3 border-t border-white/[0.06]">
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold mr-1">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                  selectedFilter === cat
                    ? 'bg-white text-black border-white font-semibold shadow-md'
                    : 'bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List Table / Cards */}
        <div className="space-y-4">
          {/* Dedicated Moderation Banner for Private (1-3★) Feedback */}
          {selectedRating === 'private' && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/50 via-[#1A1A1A] to-amber-950/30 border border-amber-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-xl">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-950 border border-amber-700 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-amber-200 flex items-center gap-2">
                    <span>Private Client Feedback (1–3 Stars)</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-900/80 text-amber-300 border border-amber-700/60 text-xs font-mono font-bold">
                      {privateCount} Pending
                    </span>
                  </h4>
                  <p className="text-xs text-amber-300/80 mt-1">
                    These low-rating submissions are kept confidential from the public showcase. You have full admin permission to inspect or permanently delete them.
                  </p>
                </div>
              </div>

              {privateCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsDeleteAllPrivateConfirmOpen(true)}
                  className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-red-950/80 hover:bg-red-600 text-red-200 hover:text-white border border-red-800 text-sm font-semibold transition-all shadow-md whitespace-nowrap self-stretch sm:self-auto justify-center"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete All Private (1-3★)</span>
                </button>
              )}
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-white/60 px-1">
            <span>
              Showing <strong className="text-white font-semibold">{filteredReviews.length}</strong> of{' '}
              <strong className="text-white font-semibold">{allReviews.length}</strong> total reviews
              {selectedRating === 'private' && (
                <span className="text-amber-400 font-semibold ml-2">• [Private 1-3★ View]</span>
              )}
            </span>
            <span className="text-xs text-white/50">Click any card or action button to inspect / delete</span>
          </div>

          {filteredReviews.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-[#141414] border border-white/10 shadow-inner">
              <Shield className="w-12 h-12 text-white/20 mx-auto mb-3" />
              <h3 className="font-serif text-xl text-white font-normal">
                {selectedRating === 'private' ? 'No 1-3 Star Private Feedback' : 'No Reviews Match Filters'}
              </h3>
              <p className="text-sm text-white/50 mt-1.5 max-w-md mx-auto">
                {selectedRating === 'private'
                  ? 'All 1-3 star feedback items have been moderated or deleted.'
                  : 'Try resetting your search query or category filters, or click "Restore All Reviews" if they were deleted.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredReviews.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="rounded-2xl bg-gradient-to-b from-[#181818] via-[#141414] to-[#111111] border border-white/[0.08] hover:border-accent/50 shadow-xl hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Top Image Preview & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.project}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-black/40" />

                    {/* Top Left Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 text-white text-xs uppercase tracking-widest font-semibold backdrop-blur-md border border-white/15 shadow-sm">
                        {item.category}
                      </span>
                      {item.isUserCreated && (
                        <span className="px-2.5 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wider flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3" /> User Submitted
                        </span>
                      )}
                    </div>

                    {/* Top Right Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {item.rating >= 4 ? (
                        <span className="px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-600/70 text-xs font-semibold backdrop-blur-md shadow-sm">
                          Public Live
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-amber-950/90 text-amber-300 border border-amber-600/70 text-xs font-semibold backdrop-blur-md shadow-sm">
                          Private Feedback
                        </span>
                      )}

                      {item.images && item.images.length > 1 && (
                        <span className="px-2.5 py-1 rounded-full bg-black/80 text-white text-xs font-medium flex items-center gap-1 border border-white/20 backdrop-blur-md">
                          <ImageIcon className="w-3 h-3 text-accent" />
                          <span>{item.images.length}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <h4 className="font-serif text-base font-semibold text-white tracking-wide truncate drop-shadow">{item.project}</h4>
                      <p className="text-xs text-accent font-medium tracking-wide flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location} • {item.area}</span>
                      </p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-3">
                      {/* Client Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <img
                            src={item.avatar}
                            alt={item.client}
                            className="w-8 h-8 rounded-full object-cover ring-2 ring-accent/60 flex-shrink-0"
                          />
                          <span className="text-sm font-semibold text-white truncate">{item.client}</span>
                        </div>

                        <div className="flex text-amber-400 flex-shrink-0">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="font-serif text-sm italic text-white/90 leading-relaxed line-clamp-2">
                        “{item.quote}”
                      </p>

                      {/* Materials Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {(item.materials || []).slice(0, 3).map((m, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] text-xs text-white/70 border border-white/[0.08] tracking-wide"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Admin Action Buttons */}
                    <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setViewModalReview(item);
                          setActiveImgIdx(0);
                        }}
                        className="inline-flex items-center space-x-1.5 text-sm text-white/80 hover:text-accent font-medium transition-colors py-1 group/btn"
                      >
                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => setDeleteCandidate(item)}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 hover:border-red-600 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-red-950/50"
                        title="Delete this review permanently"
                      >
                        <Trash2 className="w-4 h-4" />
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
                <div className="flex items-center space-x-3.5">
                  <img
                    src={viewModalReview.avatar}
                    alt={viewModalReview.client}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white">{viewModalReview.client}</h3>
                    <p className="text-sm text-accent font-medium">{viewModalReview.project}</p>
                    <p className="text-xs text-white/60 mt-0.5">{viewModalReview.location} • {viewModalReview.area}</p>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(viewModalReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="font-serif text-base sm:text-lg italic text-white/95 leading-relaxed mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                “{viewModalReview.quote}”
              </p>

              <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5 mb-6 text-sm">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                  Materials Executed
                </span>
                <span className="text-white/80">
                  {Array.isArray(viewModalReview.materials)
                    ? viewModalReview.materials.join(' • ')
                    : viewModalReview.materials}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    const rev = viewModalReview;
                    setViewModalReview(null);
                    setDeleteCandidate(rev);
                  }}
                  className="px-4.5 py-2.5 rounded-xl bg-red-950 hover:bg-red-600 text-red-200 hover:text-white border border-red-800 text-sm font-semibold transition-all flex items-center gap-2 shadow"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete This Review Permanently</span>
                </button>

                <button
                  onClick={() => setViewModalReview(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
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

              <h3 className="font-serif text-2xl font-medium text-white mb-2">
                Confirm Permanent Deletion
              </h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                Are you sure you want to permanently remove this review by <strong className="text-white">{deleteCandidate.client}</strong> from the living portfolio? This action cannot be undone.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-sm space-y-1.5">
                <div className="text-white font-medium">{deleteCandidate.project} ({deleteCandidate.category})</div>
                <div className="text-white/60 text-xs italic line-clamp-2">“{deleteCandidate.quote}”</div>
              </div>

              <div className="flex items-center justify-end space-x-3">
                <button
                  onClick={() => setDeleteCandidate(null)}
                  className="px-4.5 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteReview(deleteCandidate)}
                  className="px-5.5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-lg transition-all flex items-center gap-2"
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
      {/* MODAL: BATCH DELETE ALL PRIVATE FEEDBACK (1-3★) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isDeleteAllPrivateConfirmOpen && (
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

              <h3 className="font-serif text-2xl font-medium text-white mb-2">
                Delete All Private Feedback?
              </h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                You are about to permanently remove all <strong className="text-amber-400 font-semibold">{privateCount} private feedback review(s) (1 to 3 stars)</strong>. They will be archived to your Trash Bin where you can restore them anytime.
              </p>

              <div className="flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsDeleteAllPrivateConfirmOpen(false)}
                  className="px-4.5 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAllPrivate}
                  className="px-5.5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-lg transition-all flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete All ({privateCount})</span>
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
                <span className="text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/15 rounded-md border border-accent/30">
                  Admin Direct Publish
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-2.5">
                  Add Official Client Review
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  Directly publish verified project handovers with cover and multi-photo galleries.
                </p>
              </div>

              <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-left">
                {/* 1. Cover Photo & Preset */}
                <div className="p-4 rounded-xl bg-[#202020] border border-white/10 space-y-2.5">
                  <label className="text-xs uppercase tracking-wider text-white/80 font-bold block">
                    Main Cover Image URL / Preset *
                  </label>
                  <input
                    type="text"
                    value={newForm.coverImage}
                    onChange={(e) => setNewForm({ ...newForm, coverImage: e.target.value })}
                    placeholder="Enter image URL or select preset below..."
                    className="w-full px-3.5 py-2.5 bg-[#161616] border border-white/10 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent font-medium"
                  />
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
                    <span className="text-xs text-white/50 whitespace-nowrap font-medium">Presets:</span>
                    {Object.entries(CATEGORY_IMAGES).map(([catName, imgUrl]) => (
                      <button
                        type="button"
                        key={catName}
                        onClick={() => setNewForm({ ...newForm, category: catName, coverImage: imgUrl })}
                        className={`px-2.5 py-1 rounded text-xs border transition-colors whitespace-nowrap font-medium ${
                          newForm.coverImage === imgUrl
                            ? 'bg-accent text-white border-accent font-semibold'
                            : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        {catName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Client Name & Project */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newForm.client}
                      onChange={(e) => setNewForm({ ...newForm, client: e.target.value })}
                      placeholder="e.g. Vikram & Radhika Singhania"
                      className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                      Project Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={newForm.project}
                      onChange={(e) => setNewForm({ ...newForm, project: e.target.value })}
                      placeholder="e.g. Sky Villa Penthouse"
                      className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* 3. Category & Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                      Category
                    </label>
                    <select
                      value={newForm.category}
                      onChange={(e) => setNewForm({ ...newForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent"
                    >
                      {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                      Rating Score ({newForm.rating} Stars)
                    </label>
                    <select
                      value={newForm.rating}
                      onChange={(e) => setNewForm({ ...newForm, rating: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent font-medium"
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
                  <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                    Client Reflection Quote *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newForm.quote}
                    onChange={(e) => setNewForm({ ...newForm, quote: e.target.value })}
                    placeholder="Enter verbatim architectural reflection and testimonial..."
                    className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent resize-none font-serif italic"
                  />
                </div>

                {/* 5. Materials */}
                <div>
                  <label className="block text-xs uppercase text-white/80 font-bold mb-1.5">
                    Materials Executed (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newForm.materials}
                    onChange={(e) => setNewForm({ ...newForm, materials: e.target.value })}
                    placeholder="e.g. Monolithic Travertine, Champagne Brass, Smoked Oak"
                    className="w-full px-3.5 py-2.5 bg-[#202020] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4.5 py-2.5 text-sm font-semibold text-white/60 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl shadow-lg transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish As Official Review</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: DELETED REVIEWS & TRASH BIN MANAGEMENT */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isDeletedModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#161616] border border-red-500/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white font-medium flex items-center gap-2.5">
                      <span>Deleted Reviews &amp; Trash Bin</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-mono font-bold">
                        {deletedIds.length} item{deletedIds.length !== 1 ? 's' : ''}
                      </span>
                    </h3>
                    <p className="text-sm text-white/60 mt-0.5">
                      View and restore previously removed testimonials
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsDeletedModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Action Toolbar if items exist */}
              {deletedIds.length > 0 && (
                <div className="flex items-center justify-between bg-red-950/30 border border-red-900/40 rounded-xl p-3.5 mb-4.5">
                  <span className="text-xs sm:text-sm text-red-200 leading-relaxed">
                    Restoring reviews will instantly bring them back to the active catalog and public gallery.
                  </span>
                  <button
                    onClick={() => {
                      handleRestoreAll();
                      setIsDeletedModalOpen(false);
                    }}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow transition-colors whitespace-nowrap ml-3"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Restore All</span>
                  </button>
                </div>
              )}

              {/* Deleted Reviews List */}
              {deletedReviews.length === 0 ? (
                <div className="py-12 text-center rounded-2xl bg-[#202020] border border-white/5 p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400/70 mx-auto mb-2.5" />
                  <h4 className="text-white font-medium text-base">Trash Bin is Empty</h4>
                  <p className="text-sm text-white/50 mt-1 max-w-sm mx-auto">
                    There are currently no deleted reviews in your system. All reviews are active in the live catalog.
                  </p>
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-1">
                  {deletedReviews.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-[#202020] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-3.5"
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img
                          src={item.image}
                          alt={item.project}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-white/10 opacity-80"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-semibold text-white truncate">
                              {item.client}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-xs uppercase tracking-wider font-medium">
                              {item.category}
                            </span>
                            <span className="text-xs text-amber-400 font-mono font-bold">
                              ★ {item.rating}
                            </span>
                          </div>
                          <p className="text-xs text-accent font-medium truncate">{item.project}</p>
                          <p className="text-xs text-white/70 italic line-clamp-1 mt-0.5">
                            “{item.quote}”
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRestoreSingle(item)}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-800 text-xs sm:text-sm font-semibold transition-all shadow flex-shrink-0"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Restore</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-5 mt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsDeletedModalOpen(false)}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Close Trash Bin
                </button>
              </div>
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
            className="fixed bottom-6 right-6 z-50 bg-[#161616] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-accent/40 flex items-center space-x-3 text-sm font-medium"
          >
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
