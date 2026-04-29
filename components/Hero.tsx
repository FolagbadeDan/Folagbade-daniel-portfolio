
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: 'fa-code', label: 'Websites & Code', color: 'text-accent2' },
    { icon: 'fa-chart-line', label: 'Marketing', color: 'text-accent1' },
    { icon: 'fa-robot', label: 'Automation', color: 'text-accent3' },
    { icon: 'fa-film', label: 'Creative Work', color: 'text-accent4' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-64 pb-20 md:pb-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[5%] right-[10%] w-[35rem] h-[35rem] bg-accent3/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-accent2/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[40%] w-[25rem] h-[25rem] bg-accent1/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Floating 3D shape */}
        <div className="hidden lg:flex absolute top-[25%] right-[12%] w-64 h-64 glass rounded-[3rem] float-3d shadow-2xl perspective-1000 rotate-12 items-center justify-center border-white/20 border-2 bg-gradient-to-br from-white/10 to-transparent">
          <div className="w-24 h-24 rounded-3xl bg-accent3/30 flex items-center justify-center border border-white/30 shadow-inner">
            <i className="fas fa-chart-line text-5xl text-accent3 drop-shadow-lg"></i>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Status badge */}
          <div className="inline-flex items-center space-x-3 mb-10 md:mb-12 px-5 py-2.5 bg-white/10 dark:bg-cardDark/80 border border-white/20 dark:border-white/10 rounded-full glass shadow-lg backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent4 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent4 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{PERSONAL_INFO.title} · {PERSONAL_INFO.location}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-8 md:mb-10 leading-[1.05] tracking-tighter text-slate-900 dark:text-white break-name">
            Hey, I'm <br className="xs:hidden sm:hidden" />
            <span className="gradient-text italic pr-4">{PERSONAL_INFO.name}.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-300 mb-10 md:mb-12 max-w-3xl leading-relaxed font-medium tracking-tight">
            I help businesses grow faster through{' '}
            <span className="text-slate-900 dark:text-white underline decoration-accent2 decoration-4 underline-offset-8">clear websites</span>,{' '}
            <span className="text-slate-900 dark:text-white underline decoration-accent1 decoration-4 underline-offset-8">effective marketing</span>, and{' '}
            <span className="text-slate-900 dark:text-white underline decoration-accent3 decoration-4 underline-offset-8">simple automation</span>.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-4 mb-12 md:mb-16">
            {services.map(s => (
              <div key={s.label} className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/20 hover:border-white/40 dark:border-white/10 dark:hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg bg-white/5 dark:bg-cardDark/50">
                <i className={`fas ${s.icon} ${s.color} text-sm drop-shadow-md`}></i>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 md:gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-primary text-white rounded-2xl font-black text-sm md:text-base uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-primary/30"
            >
              See my work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 glass border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-sm md:text-base uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95 shadow-lg bg-white/50 dark:bg-cardDark/50"
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-28 md:mt-40 pt-16 md:pt-20 border-t border-slate-200 dark:border-white/10">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-10 md:mb-12 text-center md:text-left font-bold">Brands I've Grown</p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 md:gap-14 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-400 dark:text-slate-500">PEARMONIE</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-400 dark:text-slate-500">CITISQUARE</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-400 dark:text-slate-500">CULBEED</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-400 dark:text-slate-500">YOUMAXIMIZE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
