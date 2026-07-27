import React from 'react';
import FadeIn from './FadeIn';
import { EXPERIENCE, PERSONAL_INFO } from '../../constants';

/** Roles still awaiting confirmed dates carry `draft` and stay hidden. */
const roles = EXPERIENCE.filter((role) => !role.draft);

const ExperienceSection: React.FC = () => (
  <section
    id="experience"
    className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    style={{ overflowX: 'clip' }}
  >
    <div className="mx-auto max-w-5xl">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-4 font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Experience
      </FadeIn>

      <FadeIn
        delay={0.1}
        y={20}
        className="mb-14 max-w-xl font-light uppercase leading-snug tracking-wide text-[#D7E2EA] opacity-60 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)' }}
      >
        Six years owning growth in-house and as a consultant.
      </FadeIn>

      {roles.map((role, i) => (
        <FadeIn
          key={`${role.company}-${role.period}`}
          delay={i * 0.1}
          className="flex flex-col gap-6 border-t border-[#D7E2EA]/15 py-8 last:border-b sm:py-10 md:flex-row md:gap-10 md:py-12"
        >
          <div className="flex items-start gap-4 md:w-[42%] md:shrink-0">
            <span
              className="font-black leading-none text-[#D7E2EA] opacity-25"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}
              >
                {role.role}
              </h3>
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {role.company}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA] opacity-40 sm:text-xs">
                {role.period}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p
              className="font-light leading-relaxed text-[#D7E2EA] opacity-80"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
            >
              {role.description}
            </p>
            <ul className="flex flex-col gap-3">
              {role.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-sm font-light leading-relaxed text-[#D7E2EA] opacity-60"
                >
                  <span aria-hidden="true" className="select-none opacity-50">
                    —
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}

      <FadeIn delay={0.2} y={20} className="mt-12">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm"
        >
          Full profile on LinkedIn
        </a>
      </FadeIn>
    </div>
  </section>
);

export default ExperienceSection;
