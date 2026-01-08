
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialLinks from './components/AIChat';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log("Toggling theme to:", !isDarkMode);
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
};

export default App;
