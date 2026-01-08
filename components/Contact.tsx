
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[4rem] bg-indigo-600 p-12 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/40">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-black/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">Let's build the <br className="hidden md:block"/> future together.</h2>
            <p className="text-xl md:text-3xl text-indigo-100 mb-14 max-w-2xl mx-auto font-medium tracking-tight">
              Available for strategic consulting, speaking engagements, and high-impact digital projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-full sm:w-auto px-12 py-6 bg-white text-indigo-600 rounded-full font-black text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-2xl">
                Get In Touch
              </a>
              <div className="flex space-x-8 text-3xl text-white">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><i className="fab fa-linkedin"></i></a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><i className="fab fa-x-twitter"></i></a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-20 border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <span className="text-3xl font-black gradient-text tracking-tighter">FolagbadeDan</span>
              <p className="mt-6 text-base text-slate-500 font-medium max-w-xs mx-auto md:mx-0">
                Maximizing value through digital strategy and venture building in Nigeria and beyond.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-600">
              <a href="https://www.youmaximize.com" target="_blank" className="hover:text-indigo-600 transition-colors">Youmaximize</a>
              <a href="https://www.landsofnigeria.com" target="_blank" className="hover:text-indigo-600 transition-colors">Lands of Nigeria</a>
              <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-indigo-600 transition-colors">GitHub Source</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center gap-4">
            <p className="text-center text-slate-400 dark:text-slate-700 text-sm font-medium font-mono uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Folagbade Daniel. Crafted for Impact.
            </p>
            <a href={PERSONAL_INFO.github} target="_blank" className="font-mono text-[9px] uppercase tracking-[0.3em] text-indigo-500/50 hover:text-indigo-500 transition-colors">
              Updated on GitHub
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
