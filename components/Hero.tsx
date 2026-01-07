
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-purple-600/5 dark:bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 mb-6 md:mb-8 px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">Building digital systems that work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-10 leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
            Hey, I'm <br className="hidden sm:block" />
            <span className="gradient-text">Folagbade Daniel.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-4/5">
              <p className="text-lg sm:text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 leading-relaxed font-medium">
                I help brands find their digital edge through <span className="text-slate-900 dark:text-white underline decoration-indigo-500 decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 cursor-default">strategic growth</span>, <span className="text-slate-900 dark:text-white underline decoration-purple-500 decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 cursor-default">purpose-built tech</span>, and a human approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl md:rounded-3xl font-black text-base md:text-lg text-center transition-all shadow-xl shadow-indigo-600/20 hover:-translate-y-1 active:scale-95"
                >
                  See my work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
