
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // Directly using your provided high-resolution portrait
  const portraitUrl = "https://i.ibb.co/Ps4vT8z4/folagbade-potrait.jpg";

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Professional Image Frame with Beauty Enhancements */}
          <div className="lg:col-span-5 relative group px-4 md:px-0">
            <div className="relative z-10 max-w-sm mx-auto lg:max-w-none">
              {/* Soft Ambient Halo for Depth */}
              <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-tr from-indigo-500/15 to-purple-500/15 rounded-[3rem] md:rounded-[5rem] blur-[60px] md:blur-[100px] opacity-50 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Image Container with Custom Framing */}
              <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-2xl md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-8 md:border-[12px] border-white dark:border-slate-900 transition-all duration-700 lg:group-hover:shadow-indigo-500/20">
                {!imageError ? (
                  <img 
                    src={portraitUrl} 
                    alt="Folagbade Daniel" 
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-all duration-1000 scale-100 lg:group-hover:scale-105 contrast-[1.1] brightness-[1.05] saturate-[1.08]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center">
                    <span className="text-6xl md:text-8xl font-black text-slate-300 dark:text-slate-700">FD</span>
                    <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Image Unavailable</p>
                  </div>
                )}
                
                {/* Modern Glassmorphism Badge - Fixed Contrast and Responsive sizing */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 backdrop-blur-xl bg-white/95 dark:bg-black/70 border border-slate-200 dark:border-white/20 p-3 md:p-5 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-between lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out shadow-2xl">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-[8px] md:text-[10px] text-white font-black shadow-lg">FD</div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-indigo-600 dark:text-indigo-400 leading-none">Growth Catalyst</p>
                      <p className="text-xs md:text-sm font-black text-slate-900 dark:text-white mt-1 md:mt-1.5 tracking-tight">Strategic Architect</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/30">
                    <i className="fas fa-bolt text-indigo-600 dark:text-indigo-400 text-[10px] md:text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Dynamic Experience Counter Badge - Repositioned for mobile */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 bg-slate-900 dark:bg-indigo-600 text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl z-20 transition-all duration-500 hover:scale-105">
                <div className="relative">
                   <p className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none">6+</p>
                   <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3 opacity-60">Years Impact</p>
                </div>
              </div>
            </div>
            
            {/* Artistic Geometric Accents */}
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-48 h-48 md:w-64 md:h-64 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="mb-8 md:mb-12">
              <h2 className="text-indigo-600 dark:text-indigo-400 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 text-xs md:sm flex items-center gap-3 md:gap-4">
                <span className="w-8 md:w-12 h-[2px] bg-indigo-600"></span>
                The Visionary
              </h2>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                Architecture of <span className="text-indigo-600">Success.</span>
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8 text-slate-700 dark:text-slate-400 text-base md:text-xl leading-relaxed font-medium">
              <p>
                With a fundamental background in <strong>Physics</strong>, I approach digital marketing as a science. Everything is a variable to be optimized, from conversion funnels to organic search visibility.
              </p>
              <p>
                Currently leading growth as the <strong>Digital Marketing Manager at PearMonie</strong>, I focus on bridging the gap between sophisticated fintech products and mass-market accessibility. 
              </p>
              <p>
                My portfolio is a mix of high-traffic media platforms like <strong>Culbeed Media</strong>, personal SaaS ventures like <strong>Let-A-Header</strong>, and specialized client designs. I don't just build websites; I build <strong>revenue engines.</strong>
              </p>
            </div>
            
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2.2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
                <i className="fab fa-x-twitter text-lg md:text-xl"></i>
                <span className="text-sm md:text-base">Latest Strategy</span>
              </a>
              <a href="https://www.youmaximize.com/blog" target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2.2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm">
                <i className="fas fa-feather-pointed text-lg md:text-xl"></i>
                <span className="text-sm md:text-base">Read the Blog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
