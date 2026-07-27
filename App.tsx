import React from 'react';
import HeroSection from './components/v2/HeroSection';
import MarqueeSection from './components/v2/MarqueeSection';
import AboutSection from './components/v2/AboutSection';
import ServicesSection from './components/v2/ServicesSection';
import ProjectsSection from './components/v2/ProjectsSection';

const App: React.FC = () => (
  <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    <HeroSection />
    <MarqueeSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
  </main>
);

export default App;
