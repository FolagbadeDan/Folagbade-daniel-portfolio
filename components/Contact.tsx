
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-500">
      <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">

        {/* CTA Bento Card */}
        <div className="max-w-6xl mx-auto bento-card relative rounded-3xl md:rounded-[4rem] overflow-hidden glass border border-slate-200 dark:border-white/10 shadow-2xl bg-white/40 dark:bg-cardDark/80">
          {/* Internal gradients */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent1/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent2/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 p-10 md:p-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent4/10 border border-accent4/20 text-accent4 text-[10px] font-black uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent4 animate-pulse"></span>
                  Available for new projects
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.05]">
                  Let's build <br />something <span className="text-accent1 italic">great.</span>
                </h2>
                <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Whether you need a high-converting website, a data-driven marketing strategy, or complex business automations—I can help you get results.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 whitespace-nowrap"
                >
                  <i className="fas fa-envelope"></i>
                  Send an Email
                </a>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1 shadow-md whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp text-accent4"></i>
                  Message on WhatsApp
                </a>
                
                <div className="flex items-center justify-center gap-8 pt-4">
                  {[
                    { icon: 'fa-linkedin', url: PERSONAL_INFO.linkedin },
                    { icon: 'fa-x-twitter', url: PERSONAL_INFO.twitter },
                    { icon: 'fa-github', url: PERSONAL_INFO.github },
                    { icon: 'fa-instagram', url: PERSONAL_INFO.instagram },
                  ].map(s => (
                    <a key={s.icon} href={s.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all hover:scale-125">
                      <i className={`fab ${s.icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-16 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-xs">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Folagbade<span className="text-primary italic">.</span></span>
              <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
                Digital Growth Manager based in Lagos, Nigeria. Building systems that scale brands.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-16">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Ventures</p>
                <div className="flex flex-col gap-3 font-bold text-sm text-slate-700 dark:text-slate-300">
                  <a href="https://www.youmaximize.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Youmaximize</a>
                  <a href="https://www.landsofnigeria.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lands of Nigeria</a>
                  <a href="https://www.cutlerandwinston.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cutler & Winston</a>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Socials</p>
                <div className="flex flex-col gap-3 font-bold text-sm text-slate-700 dark:text-slate-300">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                  <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 font-bold tracking-tight">
              © {new Date().getFullYear()} Folagbade Daniel.
            </p>
            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase opacity-50">
              Built for conversion · Designed for growth
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
