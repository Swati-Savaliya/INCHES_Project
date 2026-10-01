import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhilosophyPage from './pages/PhilosophyPage';
import ExpertisePage from './pages/ExpertisePage';

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
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />

        {/* Fallback to Home for unknown routes */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


