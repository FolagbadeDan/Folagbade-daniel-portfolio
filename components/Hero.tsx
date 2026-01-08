
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
    <section className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-64 pb-20 md:pb-24 overflow-hidden">
      {/* 3D Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[15%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px] opacity-60"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[150px] opacity-40"></div>
        
        {/* Floating 3D Shapes */}
        <div className="hidden lg:block absolute top-[30%] right-[12%] w-72 h-72 glass rounded-[4.5rem] float-3d shadow-2xl perspective-1000 rotate-12 flex items-center justify-center border-white/20 border-2">
           <div className="w-24 h-24 rounded-3xl bg-indigo-500/20 flex items-center justify-center border border-white/20 shadow-inner">
              <i className="fas fa-bolt text-5xl text-indigo-400"></i>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-3 mb-10 md:mb-12 px-4 py-2 bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Building digital systems that work</span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black mb-10 md:mb-14 leading-[1.1] tracking-tighter text-slate-900 dark:text-white break-name">
            Hey, I'm <br className="xs:hidden sm:hidden" />
            <span className="gradient-text italic">Folagbade Daniel.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="max-w-3xl">
              <p className="text-lg md:text-3xl text-slate-600 dark:text-slate-400 mb-12 md:mb-16 leading-relaxed font-medium tracking-tight">
                I help brands find their digital edge through <span className="text-slate-900 dark:text-white underline decoration-indigo-500 decoration-4 underline-offset-8">strategic growth</span>, purpose-built tech, and a human approach.
              </p>
              
              <div className="flex flex-wrap gap-5 md:gap-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-indigo-600 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-600/40"
                >
                  See my work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud / Trust Section */}
        <div className="mt-28 md:mt-48 pt-16 md:pt-24 border-t border-slate-200 dark:border-white/5">
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-10 md:mb-12 text-center md:text-left">Selected Ventures & Impact</p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-400">PEARMONIE</span>
             <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-400">CITISQUARE</span>
             <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-400">CULBEED</span>
             <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-400">YOUMAXIMIZE</span>
             <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-400">LANDSNIGERIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
