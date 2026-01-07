
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-indigo-600 p-8 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/40">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 md:w-96 md:h-96 bg-black/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-7xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-tight">Let's build the <br className="hidden md:block"/> future of your brand.</h2>
            <p className="text-lg md:text-2xl text-indigo-100 mb-10 md:mb-14 max-w-2xl mx-auto font-medium">
              Available for strategic consulting, speaking engagements, and high-impact digital projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white text-indigo-600 rounded-2xl md:rounded-3xl font-black text-base md:text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-2xl">
                Get In Touch
              </a>
              <div className="flex space-x-6 md:space-x-8 text-2xl md:text-3xl text-white">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><i className="fab fa-linkedin"></i></a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><i className="fab fa-x-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <span className="text-2xl md:text-3xl font-black gradient-text">FD</span>
              <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-500 font-medium max-w-xs mx-auto md:mx-0">
                Maximizing value through digital strategy and venture building in Nigeria and beyond.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-black text-slate-400 dark:text-slate-600">
              <a href="https://www.youmaximize.com" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Youmaximize</a>
              <a href="https://www.landsofnigeria.com" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Lands of Nigeria</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href={PERSONAL_INFO.twitter} target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Twitter</a>
            </div>
          </div>
          <p className="mt-12 md:mt-16 text-center text-slate-400 dark:text-slate-600 text-[10px] md:text-sm font-medium">
            &copy; {new Date().getFullYear()} Folagbade Daniel. Crafted for Impact.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
