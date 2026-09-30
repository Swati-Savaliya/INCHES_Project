import React, { useEffect } from 'react';
import IntroCurtain from './IntroCurtain';
import Header from '../components/Header';
import Hero from './Hero';
import About from './About';
import Expertise from './Expertise';
import Transformation from './Transformation';
import TextMaskReveal from './TextMaskReveal';
import Gallery from './Gallery';
import InteractiveStudioVisualizer from './InteractiveStudioVisualizer';
import BespokeEstimator from './BespokeEstimator';
import Testimonials from './Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    // If there is a hash in the URL (e.g. #expertise), scroll smoothly to that element
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
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
  );
};

export default HomePage;
