
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3 md:mb-4 text-xs md:sm">Portfolio & Ventures</h2>
            <h3 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Active Platforms.</h3>
            <p className="mt-4 md:mt-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              From building high-traffic media portals like Culbeed Media to creating productivity tools for founders.
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-4">
             <a href="https://www.youmaximize.com/blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-indigo-600 dark:text-indigo-400 font-bold hover:underline group text-sm md:text-base">
              <span>Read growth insights on Youmaximize</span>
              <i className="fas fa-arrow-right lg:group-hover:translate-x-1 transition-transform"></i>
            </a>
             <a href="https://culbeedmedia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-emerald-600 dark:text-emerald-400 font-bold hover:underline group text-sm md:text-base">
              <span>Visit Culbeed Media</span>
              <i className="fas fa-external-link-alt lg:group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 md:p-10 transition-all duration-500 lg:hover:-translate-y-3 lg:hover:bg-white dark:lg:hover:bg-slate-900 hover:shadow-xl dark:hover:shadow-indigo-500/10"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br ${project.color} opacity-[0.05] dark:opacity-[0.08] blur-[60px] md:blur-[80px] lg:group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="mb-6 md:mb-10 relative">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl md:text-2xl shadow-lg transform lg:group-hover:scale-110 lg:group-hover:rotate-6 transition-all duration-500`}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>

              <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 text-slate-900 dark:text-white tracking-tight">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="mt-auto pt-6 md:pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap gap-2 md:gap-3">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white dark:bg-slate-800 text-[9px] md:text-[11px] font-black text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
