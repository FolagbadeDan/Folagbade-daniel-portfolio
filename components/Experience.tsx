
import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';

const companyColors: Record<string, string> = {
  'PearMonie':       'text-accent1 bg-accent1/10 border-accent1/20',
  'CITISQUARE AFRICA': 'text-accent2 bg-accent2/10 border-accent2/20',
  'YouMaximize':     'text-accent3 bg-accent3/10 border-accent3/20',
};

const companyBorders: Record<string, string> = {
  'PearMonie':       'group-hover:border-accent1/40',
  'CITISQUARE AFRICA': 'group-hover:border-accent2/40',
  'YouMaximize':     'group-hover:border-accent3/40',
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] bg-accent2/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent2 mb-4">Work Experience</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
              Where I've <span className="text-accent1 italic pr-2">worked.</span>
            </h3>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-slate-300 dark:border-white/10 hover:border-primary/50 transition-all self-start md:self-auto bg-white/50 dark:bg-cardDark/50 shadow-sm hover:-translate-y-1"
            >
              <i className="fab fa-linkedin text-primary text-lg"></i>
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Full profile on LinkedIn</span>
              <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* Experience cards — modern bento grid */}
        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((exp, idx) => {
            const badgeClasses = companyColors[exp.company] ?? 'text-primary bg-primary/10 border-primary/20';
            const borderHover = companyBorders[exp.company] ?? 'group-hover:border-primary/40';
            
            return (
              <div
                key={idx}
                className={`group bento-card p-6 md:p-10 glass border border-white/20 dark:border-white/5 bg-white/10 dark:bg-cardDark/60 ${borderHover}`}
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Index number */}
                    <span className="text-4xl font-black text-slate-300 dark:text-white/10 tracking-tighter select-none mt-1 hidden sm:block">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{exp.role}</h4>
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className={`px-3 py-1 rounded-xl border text-[10px] md:text-xs font-black uppercase tracking-widest shadow-sm ${badgeClasses}`}>
                          {exp.company}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold tracking-wide">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium mb-8 sm:pl-16">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:pl-16">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 transition-colors shadow-sm">
                      <i className="fas fa-check text-accent4 mt-1 text-xs flex-shrink-0 drop-shadow-md"></i>
                      <span className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-semibold leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
