import React, { useEffect } from 'react';
import IntroCurtain from './Component/Pages/IntroCurtain'
import Header from './Component/Header'
import Hero from './Component/Pages/Hero'
import About from './Component/Pages/About'
import Expertise from './Component/Pages/Expertise'
import Transformation from './Component/Pages/Transformation'
import TextMaskReveal from './Component/Pages/TextMaskReveal'


import './App.css'

function App() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Fallback for some browsers that preserve scroll position
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
    </div>
  )
}

export default App
