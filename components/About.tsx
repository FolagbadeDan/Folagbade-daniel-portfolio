
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const portraitUrl = "https://i.ibb.co/Ps4vT8z4/folagbade-potrait.jpg";

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Brands Helped' },
    { value: '10k', label: 'Blog Readers' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-accent3/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

          {/* Portrait Bento Card */}
          <div className="lg:col-span-5 h-full">
            <div className="bento-card h-full glass border border-white/20 dark:border-white/10 p-4 md:p-6 bg-white/10 dark:bg-cardDark/80 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-80 w-full mb-6 shadow-inner">
                {!imageError ? (
                  <img
                    src={portraitUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <span className="text-4xl font-black text-slate-400 opacity-50">FD</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {stats.map((s, i) => (
                  <div key={s.label} className={`text-center p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 ${i === 1 ? 'border-b-2 border-b-accent1' : i === 2 ? 'border-b-2 border-b-accent2' : 'border-b-2 border-b-accent3'}`}>
                    <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{s.value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy Bento Card */}
          <div className="lg:col-span-7 h-full">
            <div className="bento-card h-full glass border border-white/20 dark:border-white/10 p-8 md:p-12 bg-white/10 dark:bg-cardDark/80 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent1/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent1 mb-6">About Me</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                I build systems that <span className="text-accent2 italic pr-2">actually work.</span>
              </h3>

              <div className="space-y-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <p>
                  {PERSONAL_INFO.bio}
                </p>
                <p>
                  I don't just design pretty websites. I build complete digital machines—from the first click on an ad, to the website that explains your value, to the automated emails that close the sale. 
                </p>
                <p>
                  Whether you need a custom WordPress site, a marketing strategy that brings in real customers, or simple automations to save you hours of manual work every week, I can help you get it done.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 md:gap-6">
                <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Location</span>
                  <span className="block text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex-[2] min-w-[200px] p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Current Role</span>
                  <span className="block text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">Digital Marketing Manager @ PearMonie</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
