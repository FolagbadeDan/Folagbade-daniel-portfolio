
import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  // Map project titles to curated images
  const projectImages: Record<string, string> = {
    "Culbeed Media": "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=1600",
    "Let-A-Header": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    "Blockchain Brats": "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1600",
    "Cutler & Winston": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
    "Colours of Wellbeing": "https://images.unsplash.com/photo-1516302752625-fbb345ec1f39?auto=format&fit=crop&q=80&w=800",
    "Lands of Nigeria": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    "Youmaximize Blog": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    "Fudes Alpha Ent.": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-500">
      {/* Background atmosphere */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent3/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-block px-4 py-2 rounded-2xl glass border border-slate-300 dark:border-white/10 mb-6 bg-white/50 dark:bg-white/5 shadow-sm">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">My Work</h2>
          </div>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            Things I've <span className="text-accent3 italic">built.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed tracking-tight">
            Here is a selection of websites I've designed, marketing systems I've built, and brands I've helped grow.
          </p>
        </div>

        {/* ── ROW 1: Featured duo ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[380px] mb-6">

          {/* FEATURED: Culbeed Media — wide left */}
          <a
            href={PROJECTS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="md:col-span-8 md:row-span-2 bento-card relative rounded-3xl p-8 md:p-12 flex flex-col justify-end group overflow-hidden border border-slate-200 dark:border-white/10 glass bg-white/80 dark:bg-cardDark/80 shadow-xl"
          >
            <div className="glow-overlay"></div>
            <div className="absolute inset-0 z-0">
              <img
                src={projectImages["Culbeed Media"]}
                alt="Culbeed Media"
                className="w-full h-full object-cover opacity-20 dark:opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-cardDark dark:via-cardDark/80 to-transparent z-10"></div>
            </div>
            <div className="relative z-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 flex items-center justify-center glass group-hover:bg-primary group-hover:border-primary transition-colors shadow-sm">
                  <i className="fas fa-clapperboard text-2xl text-primary group-hover:text-white"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Media Platform</span>
                  <span className="text-slate-900 dark:text-white font-bold text-sm">Active Website</span>
                </div>
              </div>
              <h4 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {PROJECTS[0].title}
              </h4>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-medium mb-8">
                {PROJECTS[0].description}
              </p>
              <div className="flex items-center gap-3">
                {PROJECTS[0].tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">{tag}</span>
                ))}
              </div>
            </div>
          </a>

          {/* SAAS: Let-A-Header — right column */}
          <a
            href={PROJECTS[1].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="md:col-span-4 md:row-span-2 bento-card relative glass rounded-3xl p-8 flex flex-col group overflow-hidden bg-primary/5 dark:bg-primary/10 border border-primary/20 shadow-lg"
          >
            <div className="glow-overlay"></div>
            <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity mix-blend-luminosity">
              <img src={projectImages["Let-A-Header"]} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative z-20 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-3xl shadow-lg shadow-primary/40 text-white mb-8 group-hover:-translate-y-2 transition-transform">
                <i className="fas fa-file-signature"></i>
              </div>
              <h4 className="text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">{PROJECTS[1].title}</h4>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-10">{PROJECTS[1].description}</p>
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[1].tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-white/10 text-[10px] font-bold text-slate-700 dark:text-slate-300 shadow-sm">{tag}</span>
                  ))}
                </div>
                <div className="pt-6 border-t border-primary/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">View Tool</span>
                  <i className="fas fa-arrow-right text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* ── ROW 2: Blockchain Brats — full-width Web3 feature ── */}
        <div className="mb-6">
          <a
            href={PROJECTS[2].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="bento-card relative rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-end md:items-center gap-10 group overflow-hidden border border-accent4/30 bg-accent4/5 shadow-lg glass"
            style={{ minHeight: '320px' }}
          >
            <div className="glow-overlay"></div>
            {/* Neon green glow blob */}
            <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-accent4/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent4/20 transition-colors duration-700 mix-blend-screen"></div>

            <div className="absolute inset-0 z-0">
              <img
                src={projectImages["Blockchain Brats"]}
                alt="Blockchain Brats"
                className="w-full h-full object-cover opacity-10 dark:opacity-20 group-hover:opacity-15 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 dark:from-cardDark dark:via-cardDark/90 to-transparent z-10"></div>
            </div>

            <div className="relative z-20 flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-accent4/10 border border-accent4/40 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-accent4 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent4">Community App</span>
                </div>
              </div>

              <h4 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white group-hover:text-accent4 transition-colors duration-500">
                {PROJECTS[2].title}
              </h4>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-medium mb-8">
                {PROJECTS[2].description}
              </p>

              <div className="flex flex-wrap gap-3">
                {PROJECTS[2].tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="relative z-20 hidden md:flex flex-col items-center gap-4 mr-8">
              <div className="w-24 h-24 rounded-3xl bg-accent4/10 border border-accent4/30 flex items-center justify-center group-hover:bg-accent4/20 group-hover:-translate-y-2 transition-all duration-500 shadow-lg">
                <i className="fas fa-cube text-4xl text-accent4"></i>
              </div>
            </div>
          </a>
        </div>

        {/* ── ROW 3: Other works ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cutler & Winston */}
          <a
            href={PROJECTS[3].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="bento-card relative glass rounded-3xl p-8 group flex flex-col justify-between overflow-hidden bg-white/80 dark:bg-cardDark/80 border border-amber-500/20 shadow-lg"
          >
            <div className="glow-overlay"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-500">
                <i className="fas fa-shield-halved text-xl"></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{PROJECTS[3].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{PROJECTS[3].description}</p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-4">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Visit Site</span>
              <i className="fas fa-arrow-right text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"></i>
            </div>
          </a>

          {/* Fudes Alpha Ent. */}
          <a
            href={PROJECTS[5].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="bento-card relative glass rounded-3xl p-8 group flex flex-col justify-between overflow-hidden bg-white/80 dark:bg-cardDark/80 border border-slate-200 dark:border-white/10 shadow-lg"
          >
            <div className="glow-overlay"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-500">
                <i className="fas fa-compact-disc text-xl"></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{PROJECTS[5].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{PROJECTS[5].description}</p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-4">
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Visit Site</span>
              <i className="fas fa-arrow-right text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"></i>
            </div>
          </a>

          {/* Colours of Wellbeing */}
          <a
            href={PROJECTS[4].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="bento-card relative glass rounded-3xl p-8 group flex flex-col justify-between overflow-hidden bg-white/80 dark:bg-cardDark/80 border border-slate-200 dark:border-white/10 shadow-lg"
          >
            <div className="glow-overlay"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 text-rose-500">
                <i className="fas fa-heart-pulse text-xl"></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{PROJECTS[4].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{PROJECTS[4].description}</p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-4">
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Visit Site</span>
              <i className="fas fa-arrow-right text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all"></i>
            </div>
          </a>

          {/* Lands of Nigeria */}
          <a
            href={PROJECTS[7].url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="bento-card relative glass rounded-3xl p-8 group flex flex-col justify-between overflow-hidden bg-white/80 dark:bg-cardDark/80 border border-slate-200 dark:border-white/10 shadow-lg"
          >
            <div className="glow-overlay"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-500">
                <i className="fas fa-map-location-dot text-xl"></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{PROJECTS[7].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{PROJECTS[7].description}</p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-4">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Visit Site</span>
              <i className="fas fa-arrow-right text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"></i>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-10 py-5 rounded-2xl glass border border-slate-300 dark:border-white/10 hover:border-primary/50 transition-all group bg-white/50 dark:bg-cardDark/50 shadow-md hover:-translate-y-1"
          >
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">More Experience</p>
              <p className="text-sm md:text-base font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">See my full background</p>
            </div>
            <i className="fab fa-linkedin text-3xl text-primary group-hover:scale-110 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
