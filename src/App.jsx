import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import AdminReviewsPage from './pages/AdminReviewsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Secret Dedicated Admin Portal Route */}
        <Route path="/admin_portal" element={<AdminReviewsPage />} />

        {/* Fallback to Home for unknown routes */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


