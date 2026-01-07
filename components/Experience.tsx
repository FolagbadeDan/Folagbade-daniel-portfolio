
import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3 md:mb-4 text-xs md:sm">Professional Journey</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
              A decade of <span className="text-indigo-600">innovation</span> in the digital sphere.
            </h3>
            <p className="mt-6 md:mt-8 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              From founding industry-leading growth agencies to pioneering real estate data transparency in Nigeria.
            </p>
            <div className="mt-8 md:mt-10">
               <a 
                 href={PERSONAL_INFO.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group hover:border-indigo-500 transition-all text-slate-900 dark:text-white"
               >
                 <span className="font-bold text-sm md:text-base">View Full Experience</span>
                 <i className="fas fa-external-link-alt text-indigo-500 lg:group-hover:scale-125 transition-transform text-sm md:text-base"></i>
               </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-12 md:space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-16 border-l-2 border-slate-100 dark:border-slate-800">
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-lg shadow-indigo-600/30"></div>
                
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div>
                    <h4 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">{exp.role}</h4>
                    <p className="text-lg md:text-xl font-bold text-indigo-600 mt-0.5">{exp.company}</p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 md:px-5 md:py-2 rounded-lg md:rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-[10px] md:text-xs font-black tracking-[0.1em] uppercase shadow-sm">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 md:mb-8 text-base md:text-lg leading-relaxed font-medium">
                  {exp.description}
                </p>
                
                <div className="space-y-4">
                   <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 md:mb-4">Impact & Achievements</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-3 p-3 md:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <i className="fas fa-check-circle text-indigo-500 mt-1 text-sm"></i>
                        <span className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-semibold leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
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
