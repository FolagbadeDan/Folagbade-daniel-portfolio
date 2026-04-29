
import React from 'react';
import { SKILLS } from '../constants';

const pillarColors: Record<string, { accent: string; glow: string; iconBg: string; border: string }> = {
  'Websites & Code':    { accent: 'text-accent2', glow: 'bg-accent2/5', iconBg: 'bg-accent2/10 border-accent2/20', border: 'group-hover:border-accent2/40' },
  'Marketing':          { accent: 'text-accent1', glow: 'bg-accent1/5', iconBg: 'bg-accent1/10 border-accent1/20', border: 'group-hover:border-accent1/40' },
  'Automation':         { accent: 'text-accent4', glow: 'bg-accent4/5', iconBg: 'bg-accent4/10 border-accent4/20', border: 'group-hover:border-accent4/40' },
  'Creative Work':      { accent: 'text-accent3', glow: 'bg-accent3/5', iconBg: 'bg-accent3/10 border-accent3/20', border: 'group-hover:border-accent3/40' },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] bg-accent1/5 rounded-full blur-[130px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent2 mb-6">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
              The full stack for <span className="text-accent1 italic pr-2">modern growth.</span>
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-sm font-medium leading-relaxed">
            I combine design, marketing, and automation to build systems that grow businesses without the manual grind.
          </p>
        </div>

        {/* 4-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => {
            const colors = pillarColors[skillGroup.category] ?? pillarColors['Websites & Code'];
            return (
              <div
                key={idx}
                className={`bento-card group relative rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-white/5 transition-all duration-500 overflow-hidden glass bg-white/40 dark:bg-cardDark/60 ${colors.border}`}
              >
                {/* Glow blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colors.glow}`}></div>

                {/* Top icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm ${colors.iconBg}`}>
                  <i className={`fas ${skillGroup.icon ?? 'fa-star'} text-2xl ${colors.accent}`}></i>
                </div>

                {/* Category label */}
                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-8 ${colors.accent}`}>{skillGroup.category}</h4>

                {/* Skills list */}
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 group-hover/item:bg-primary transition-colors"></span>
                      <span className="text-base md:text-lg font-bold tracking-tight text-slate-800 dark:text-slate-200">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom index */}
                <div className="absolute bottom-6 right-6 text-4xl font-black text-slate-200 dark:text-white/5 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tools callout */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl glass border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/30 dark:bg-cardDark/40 shadow-xl">
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">My Tech Stack</p>
            <p className="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              WordPress · Next.js · Make.com · n8n · Meta Ads · SEO
            </p>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent4 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent4">Ready for your project</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
