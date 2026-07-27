
import React, { useState } from 'react';
import { PERSONAL_INFO, STATS } from '../constants';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const portraitUrl = "https://i.ibb.co/Ps4vT8z4/folagbade-potrait.jpg";

  const stats = STATS;
  const statAccents = ['border-b-accent3', 'border-b-accent1', 'border-b-accent2', 'border-b-accent4'];

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
              
              <div className={`grid gap-2 ${stats.length === 4 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {stats.map((s, i) => (
                  <div key={s.label} className={`text-center p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 border-b-2 ${statAccents[i % statAccents.length]}`}>
                    <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{s.value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 leading-tight">{s.label}</p>
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
                I build the system, <span className="text-accent2 italic pr-2">not just the pieces.</span>
              </h3>

              <div className="space-y-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <p>
                  {PERSONAL_INFO.bio}
                </p>
                <p>
                  I connect the whole journey: the ad that earns the click, the website that makes the case, and the automation that follows up and closes the sale. Over 6+ years I've done this for fintech products, real estate marketplaces, media platforms, and 50+ small brands — as an in-house manager and as a consultant.
                </p>
                <p>
                  If you need someone who can own growth end to end — strategy, build, launch, and the analytics to prove it worked — that's the job I do best.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 md:gap-6">
                <div className="flex-1 min-w-[220px] p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Location</span>
                  <span className="block text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.locationLong}</span>
                </div>
                <div className="flex-1 min-w-[220px] p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Current Role</span>
                  <span className="block text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.currentRole}</span>
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
