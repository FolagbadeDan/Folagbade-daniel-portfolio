
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 md:mb-20 gap-8 md:gap-10">
          <div className="max-w-xl">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3 md:mb-4 text-xs md:sm">Technical Stack</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">Mastering Digital Efficiency.</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg lg:max-w-md">
            A comprehensive blend of marketing intelligence, strategic planning, and technical execution focused on conversion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className={`p-8 md:p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 lg:hover:border-indigo-500/50 transition-all shadow-sm group ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 md:mb-8 lg:group-hover:scale-110 transition-transform">
                 <i className={`fas ${idx === 0 ? 'fa-code' : idx === 1 ? 'fa-chart-pie' : 'fa-briefcase'}`}></i>
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-6 md:mb-8 text-slate-900 dark:text-white uppercase tracking-tighter">{skillGroup.category}</h4>
              <ul className="space-y-4 md:space-y-5">
                {skillGroup.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-3 md:space-x-4 text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
