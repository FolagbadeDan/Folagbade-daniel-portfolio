import React from 'react';
import HeroSection from './components/v2/HeroSection';
import MarqueeSection from './components/v2/MarqueeSection';
import AboutSection from './components/v2/AboutSection';
import StatsSection from './components/v2/StatsSection';
import ExperienceSection from './components/v2/ExperienceSection';
import ServicesSection from './components/v2/ServicesSection';
import ProjectsSection from './components/v2/ProjectsSection';
import FooterSection from './components/v2/FooterSection';

const App: React.FC = () => (
  <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    <HeroSection />
    <MarqueeSection />
    <AboutSection />
    <StatsSection />
    <ExperienceSection />
    <ServicesSection />
    <ProjectsSection />
    <FooterSection />
  </main>
);

export default App;
