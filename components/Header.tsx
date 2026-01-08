
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Ventures', id: 'projects' },
    { name: 'Expertise', id: 'skills' },
    { name: 'Connect', id: 'contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 pointer-events-none ${isScrolled ? 'py-3' : 'py-6 md:py-10'}`}>
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          <div className={`flex justify-between items-center transition-all duration-500 rounded-3xl ${isScrolled ? 'bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-slate-200 dark:border-white/10 px-5 md:px-6 py-3 shadow-2xl' : 'px-2'}`}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="text-lg md:text-2xl font-black gradient-text tracking-tighter leading-none"
            >
              FolagbadeDan
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3 md:space-x-4">
              <button 
                type="button"
                onClick={() => toggleTheme()}
                className="w-10 h-10 flex items-center justify-center rounded-2xl glass border border-slate-200 dark:border-white/10 transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Toggle Theme"
              >
                <i className={`fas ${isDarkMode ? 'fa-sun text-amber-400' : 'fa-moon text-indigo-600'} pointer-events-none`}></i>
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-2xl glass border border-slate-200 dark:border-white/10 cursor-pointer"
                aria-label="Toggle Menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} pointer-events-none`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[4000] bg-white dark:bg-black transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-3xl md:text-5xl font-black tracking-tighter hover:text-indigo-600 dark:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex space-x-8 pt-12 border-t border-slate-100 dark:border-white/10 w-full justify-center">
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-linkedin"></i></a>
            <a href={PERSONAL_INFO.twitter} target="_blank" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-x-twitter"></i></a>
            <a href={PERSONAL_INFO.github} target="_blank" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-github"></i></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
