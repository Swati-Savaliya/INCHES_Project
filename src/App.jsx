import React, { useEffect } from 'react';
import IntroCurtain from './Component/Pages/IntroCurtain'
import Header from './Component/Header'
import Hero from './Component/Pages/Hero'
import About from './Component/Pages/About'
import Expertise from './Component/Pages/Expertise'
import Transformation from './Component/Pages/Transformation'
import TextMaskReveal from './Component/Pages/TextMaskReveal'
import Gallery from './Component/Pages/Gallery'
import InteractiveStudioVisualizer from './Component/Pages/InteractiveStudioVisualizer'
import BespokeEstimator from './Component/Pages/BespokeEstimator'
import Testimonials from './Component/Pages/Testimonials'
import Footer from './Component/Pages/Footer'

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

