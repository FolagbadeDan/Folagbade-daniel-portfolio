
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold gradient-text tracking-tight">FD</a>
        
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Ventures</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Expertise</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Connect</a>
        </nav>

        <div className="flex items-center space-x-5">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <div className="flex items-center space-x-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
              <i className="fab fa-x-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
