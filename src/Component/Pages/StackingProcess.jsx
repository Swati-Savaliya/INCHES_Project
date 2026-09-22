import React from 'react';

const steps = [
  {
    id: '01',
    title: 'The Vision.',
    subtitle: 'Consultation & Concept',
    description: 'We begin by understanding your lifestyle, aspirations, and the unique soul of the space. It’s a collaborative dialogue where ideas are born and the foundation of your future sanctuary is laid.',
    image: 'https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&q=80&w=1200',
    bgColor: 'bg-[#F5F2EB]', // Light warm
    textColor: 'text-primary'
  },
  {
    id: '02',
    title: 'The Blueprint.',
    subtitle: 'Architecture & Design',
    description: 'Our architects and designers translate the vision into precise, breathtaking designs. Every texture, lighting fixture, and spatial flow is meticulously planned to create a symphony of elegance.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    bgColor: 'bg-[#E3DFD5]', // Slightly darker warm
    textColor: 'text-primary'
  },
  {
    id: '03',
    title: 'The Reality.',
    subtitle: 'Craftsmanship & Execution',
    description: 'Master craftsmen bring the blueprints to life. We oversee every detail, ensuring flawless execution. From bespoke furniture to flawless finishes, your space is realized perfectly.',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1200',
    bgColor: 'bg-[#1A1A1A]', // Dark contrast
    textColor: 'text-surface'
  }
];

const StackingProcess = () => {
  return (
    <section id="process" className="relative w-full bg-surface pb-32">
      
      {/* Section Header */}
      <div className="pt-24 pb-12 max-w-[90rem] mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
          <span className="w-8 h-[1px] bg-accent"></span>
          <span className="font-sans text-[0.65rem] tracking-[0.4em] text-accent uppercase font-bold">
            Methodology
          </span>
          <span className="w-8 h-[1px] bg-accent"></span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          How We <span className="italic text-accent font-light">Work.</span>
        </h2>
      </div>

      {/* Stacking Cards Container */}
      <div className="w-full max-w-[85rem] mx-auto px-4 md:px-8 relative">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="sticky w-full h-[75vh] md:h-[70vh] flex items-center justify-center mb-12 shadow-2xl overflow-hidden rounded-[2rem]"
            // Using pure CSS sticky positioning. Each subsequent card sticks slightly lower to create a layered stack.
            style={{ 
              top: `calc(10vh + ${index * 40}px)`, 
              zIndex: index + 10 
            }}
          >
            <div className={`w-full h-full ${step.bgColor} ${step.textColor} flex flex-col md:flex-row`}>
              
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <span className="font-sans text-lg md:text-2xl font-bold tracking-widest opacity-30 mb-4">
                  {step.id}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-none">
                  {step.title}
                </h3>
                <h4 className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-accent mb-6">
                  {step.subtitle}
                </h4>
                <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StackingProcess;
