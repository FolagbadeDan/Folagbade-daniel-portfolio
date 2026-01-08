
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const portraitUrl = "https://i.ibb.co/Ps4vT8z4/folagbade-potrait.jpg";

  return (
    <section id="about" className="py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] glass border-8 border-white/5 shadow-2xl">
                {!imageError ? (
                  <img src={portraitUrl} alt="Folagbade Daniel" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                    <span className="text-6xl font-black opacity-10">FD</span>
                  </div>
                )}
                
                <div className="absolute -bottom-6 -right-6 glass rounded-[2.5rem] p-8 shadow-2xl z-20">
                   <p className="text-5xl font-black tracking-tighter italic">6+</p>
                   <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-400 mt-2">Years of Impact</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-8">The Visionary</h2>
            <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
              Architecture of <br />
              <span className="gradient-text italic">Success.</span>
            </h3>

            <div className="space-y-10 text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium tracking-tight">
              <p>
                With a fundamental background in <strong>Physics</strong>, I approach digital marketing as a science. Everything is a variable to be optimized, from conversion funnels to organic search visibility.
              </p>
              <p>
                Currently leading growth as the <strong>Digital Marketing Manager at PearMonie</strong>, I focus on bridging the gap between sophisticated fintech products and mass-market accessibility.
              </p>
              <p>
                My portfolio is a mix of high-traffic media platforms like <strong>Culbeed Media</strong>, personal SaaS ventures like <strong>Let-A-Header</strong>, and specialized client designs. I build <strong>revenue engines.</strong>
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-8">
               <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Base of Operations</span>
                  <span className="text-lg font-black tracking-tight">Lagos, Nigeria</span>
               </div>
               <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Primary Focus</span>
                  <span className="text-lg font-black tracking-tight">Digital Strategy & Venture Lab</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
