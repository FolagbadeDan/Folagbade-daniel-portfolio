
import React, { useRef } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  // Premium imagery for projects
  const projectImages = {
    "Culbeed Media": "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=1600",
    "Let-A-Header": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    "Colours of Wellbeing": "https://images.unsplash.com/photo-1516302752625-fbb345ec1f39?auto=format&fit=crop&q=80&w=800",
    "Lands of Nigeria": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    "Youmaximize Blog": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    "Fudes Alpha Ent.": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-indigo-500/20 mb-6">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400">Ventures & Architecture</h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
            Digital <span className="gradient-text italic">Engines.</span>
          </h3>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed tracking-tight">
            Purpose-built systems designed to disrupt markets and scale exponentially.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[380px]">
          {/* FEATURED: Culbeed Media */}
          <a 
            href={PROJECTS[0].url} 
            target="_blank"
            onMouseMove={handleMouseMove}
            className="md:col-span-8 md:row-span-2 bento-card relative rounded-[3.5rem] p-8 md:p-14 flex flex-col justify-end group overflow-hidden border border-white/5"
          >
             <div className="glow-overlay"></div>
             <div className="absolute inset-0 z-0">
                <img 
                  src={projectImages["Culbeed Media"]} 
                  alt="Culbeed Media" 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
             </div>

             <div className="relative z-20">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center glass group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-500">
                      <i className="fas fa-clapperboard text-2xl text-white"></i>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Featured Platform</span>
                      <span className="text-white font-bold">Active Platform</span>
                   </div>
                </div>
                <h4 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white group-hover:text-indigo-400 transition-colors duration-500">
                   {PROJECTS[0].title}
                </h4>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium">
                  {PROJECTS[0].description}
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="px-6 py-2 rounded-full glass border border-white/10 text-xs font-black uppercase tracking-widest text-white group-hover:bg-white/10 transition-all">Launch Venture</span>
                </div>
             </div>
          </a>

          {/* SAAS: Let-A-Header */}
          <a 
            href={PROJECTS[1].url} 
            target="_blank"
            onMouseMove={handleMouseMove}
            className="md:col-span-4 md:row-span-2 bento-card relative glass rounded-[3.5rem] p-10 flex flex-col group overflow-hidden bg-indigo-600/5"
          >
             <div className="glow-overlay"></div>
             <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={projectImages["Let-A-Header"]} className="w-full h-full object-cover" alt="" />
             </div>
             
             <div className="relative z-20 h-full flex flex-col">
                <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-4xl shadow-2xl shadow-indigo-600/40 text-white mb-10 group-hover:scale-110 transition-transform">
                   <i className="fas fa-file-signature"></i>
                </div>
                <h4 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">{PROJECTS[1].title}</h4>
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-12">
                   {PROJECTS[1].description}
                </p>
                
                <div className="mt-auto space-y-4">
                   <div className="flex flex-wrap gap-2">
                      {PROJECTS[1].tags.map(tag => (
                         <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-500">{tag}</span>
                      ))}
                   </div>
                   <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-400">LIVE PRODUCT</span>
                      <i className="fas fa-arrow-right text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"></i>
                   </div>
                </div>
             </div>
          </a>

          {/* GRID ITEM: Lands of Nigeria */}
          <a 
            href={PROJECTS[5].url} 
            target="_blank"
            onMouseMove={handleMouseMove}
            className="md:col-span-4 md:row-span-1 bento-card relative glass rounded-[2.5rem] p-8 group flex flex-col justify-between overflow-hidden"
          >
             <div className="glow-overlay"></div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                   <i className="fas fa-map-location-dot text-2xl text-emerald-500"></i>
                   <span className="text-[9px] font-black tracking-widest uppercase text-slate-500">PropTech Hub</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-2">{PROJECTS[5].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{PROJECTS[5].description}</p>
             </div>
             <div className="relative z-10 flex items-center justify-between mt-4">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Analytics Tool</span>
                <i className="fas fa-arrow-right text-white/40 group-hover:text-white transition-colors"></i>
             </div>
          </a>

          {/* GRID ITEM: Youmaximize Blog */}
          <a 
            href={PROJECTS[4].url} 
            target="_blank"
            onMouseMove={handleMouseMove}
            className="md:col-span-4 md:row-span-1 bento-card relative glass rounded-[2.5rem] p-8 group flex flex-col justify-between overflow-hidden"
          >
             <div className="glow-overlay"></div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                   <i className="fas fa-feather text-2xl text-purple-500"></i>
                   <span className="text-[9px] font-black tracking-widest uppercase text-slate-500">Growth Lab</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-2">{PROJECTS[4].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{PROJECTS[4].description}</p>
             </div>
             <div className="relative z-10 flex items-center justify-between mt-4">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Case Studies</span>
                <i className="fas fa-arrow-right text-white/40 group-hover:text-white transition-colors"></i>
             </div>
          </a>

          {/* GRID ITEM: Colours of Wellbeing */}
          <a 
            href={PROJECTS[2].url} 
            target="_blank"
            onMouseMove={handleMouseMove}
            className="md:col-span-4 md:row-span-1 bento-card relative glass rounded-[2.5rem] p-8 group flex flex-col justify-between overflow-hidden"
          >
             <div className="glow-overlay"></div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                   <i className="fas fa-heart-pulse text-2xl text-rose-500"></i>
                   <span className="text-[9px] font-black tracking-widest uppercase text-slate-500">UI/UX Craft</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-2">{PROJECTS[2].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{PROJECTS[2].description}</p>
             </div>
             <div className="relative z-10 flex items-center justify-between mt-4">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Wellness Project</span>
                <i className="fas fa-arrow-right text-white/40 group-hover:text-white transition-colors"></i>
             </div>
          </a>
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank"
            className="inline-flex items-center space-x-6 px-12 py-6 rounded-full glass border border-white/10 hover:bg-white/5 transition-all group"
          >
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Full Venture Log</p>
              <p className="text-sm font-bold text-white">Explore more on LinkedIn</p>
            </div>
            <i className="fab fa-linkedin text-2xl text-indigo-500 group-hover:scale-125 transition-transform duration-500"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
