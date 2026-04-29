
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About',      id: 'about'      },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects',   id: 'projects'   },
    { name: 'Skills',     id: 'skills'     },
    { name: 'Contact',    id: 'contact'    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 pointer-events-none ${isScrolled ? 'py-3' : 'py-6 md:py-10'}`}>
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          <div className={`flex justify-between items-center transition-all duration-500 rounded-2xl ${isScrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/8 px-5 md:px-6 py-3 shadow-xl' : 'px-2'}`}>

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-lg md:text-xl font-black gradient-text tracking-tighter leading-none"
            >
              Folagbade Daniel
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 rounded-xl text-[11px] font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Hire me pill */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-[11px] font-bold hover:bg-indigo-700 transition-all"
              >
                Hire Me
              </button>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-slate-200 dark:border-white/10 transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Toggle Theme"
              >
                <i className={`fas ${isDarkMode ? 'fa-sun text-amber-400' : 'fa-moon text-indigo-600'} text-sm pointer-events-none`}></i>
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl glass border border-slate-200 dark:border-white/10 cursor-pointer"
                aria-label="Toggle Menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm pointer-events-none`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[4000] bg-white dark:bg-[#050505] transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-3xl md:text-5xl font-black tracking-tighter hover:text-indigo-600 dark:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 px-8 py-4 bg-indigo-600 text-white rounded-full font-black text-sm uppercase tracking-widest"
          >
            Hire Me
          </button>
          <div className="flex gap-8 pt-8 border-t border-slate-100 dark:border-white/10 w-full justify-center">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-linkedin"></i></a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-x-twitter"></i></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fab fa-github"></i></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl text-slate-400 hover:text-indigo-600"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
