
import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-8">Professional Journey</h2>
            <h3 className="text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
              A decade of <span className="text-indigo-600">innovation.</span>
            </h3>
            <p className="mt-10 text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium">
              From founding growth agencies to pioneering real estate data transparency in Africa.
            </p>
            <div className="mt-12">
               <a 
                 href={PERSONAL_INFO.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl glass border border-slate-200 dark:border-white/10 group hover:border-indigo-500 transition-all"
               >
                 <span className="font-bold text-sm">Full Experience</span>
                 <i className="fas fa-arrow-right text-indigo-500 group-hover:translate-x-2 transition-transform"></i>
               </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20 border-l-2 border-slate-100 dark:border-white/5">
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-black shadow-lg shadow-indigo-600/30"></div>
                
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{exp.role}</h4>
                    <p className="text-xl font-bold text-indigo-600 mt-1">{exp.company}</p>
                  </div>
                  <span className="px-5 py-2 rounded-xl bg-indigo-50 dark:bg-white/5 text-indigo-600 dark:text-indigo-300 text-[10px] font-black tracking-widest uppercase border border-indigo-100 dark:border-white/5">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-xl leading-relaxed font-medium">
                  {exp.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <i className="fas fa-check-circle text-indigo-500 mt-1"></i>
                      <span className="text-base text-slate-600 dark:text-slate-300 font-semibold leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
