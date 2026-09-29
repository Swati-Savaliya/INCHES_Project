import React, { useEffect } from 'react';
import IntroCurtain from './pages/IntroCurtain';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Transformation from './pages/Transformation';
import TextMaskReveal from './pages/TextMaskReveal';
import Gallery from './pages/Gallery';
import InteractiveStudioVisualizer from './pages/InteractiveStudioVisualizer';
import BespokeEstimator from './pages/BespokeEstimator';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';


import './App.css'
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-surface">
      <IntroCurtain />
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Transformation />
      <TextMaskReveal />
      <Gallery />
      <InteractiveStudioVisualizer />
      <BespokeEstimator />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

