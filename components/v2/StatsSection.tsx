import React from 'react';
import FadeIn from './FadeIn';
import { STATS, TRUSTED_BY } from '../../constants';

const StatsSection: React.FC = () => (
  <section
    className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    style={{ overflowX: 'clip' }}
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-10 border-y border-[#D7E2EA]/15 py-12 sm:grid-cols-3 sm:gap-6 md:py-16">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} y={30} className="flex flex-col gap-3">
            <span
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              {stat.value}
            </span>
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {stat.label}
            </span>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} y={20} className="mt-12 md:mt-16">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA] opacity-40">
          Trusted by brands across fintech, real estate &amp; media
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12">
          {TRUSTED_BY.map((brand) => (
            <span
              key={brand}
              className="text-sm font-black uppercase tracking-tight text-[#D7E2EA] opacity-40 transition-opacity duration-300 hover:opacity-80 sm:text-base md:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default StatsSection;
