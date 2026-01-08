
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-6">Technical Stack</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">Mastering <span className="gradient-text italic">Efficiency.</span></h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-md font-medium leading-relaxed">
            A comprehensive blend of marketing intelligence, strategic planning, and technical execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-200 dark:bg-white/10 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-white dark:bg-black p-12 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
              <div className="mb-10 text-indigo-500">
                 <i className={`fas ${idx === 0 ? 'fa-code' : idx === 1 ? 'fa-chart-pie' : 'fa-briefcase'} text-3xl`}></i>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">{skillGroup.category}</h4>
              <ul className="space-y-6">
                {skillGroup.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-xl md:text-2xl font-black tracking-tight group flex items-center justify-between">
                    <span>{skill}</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
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
