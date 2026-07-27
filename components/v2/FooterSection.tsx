import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { PERSONAL_INFO } from '../../constants';

const SOCIALS = [
  { label: 'LinkedIn', url: PERSONAL_INFO.linkedin },
  { label: 'X / Twitter', url: PERSONAL_INFO.twitter },
  { label: 'GitHub', url: PERSONAL_INFO.github },
  { label: 'Instagram', url: PERSONAL_INFO.instagram },
];

const linkClass =
  'text-[#D7E2EA] opacity-70 transition-opacity duration-200 hover:opacity-100';

const headingClass =
  'text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA] opacity-40';

const FooterSection: React.FC = () => (
  <footer
    id="contact"
    className="border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 pb-12 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32"
    style={{ overflowX: 'clip' }}
  >
    <div className="mx-auto max-w-6xl">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
      >
        Let&apos;s talk
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={20}
        className="mt-8 flex flex-col gap-10 md:mt-12 md:flex-row md:items-start md:justify-between"
      >
        <p
          className="max-w-md font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
        >
          Hiring for a growth or marketing role, or need a site, campaign, or automation
          that moves numbers? Tell me what you&apos;re trying to grow.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <ContactButton />
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm md:text-base"
          >
            Download CV
          </a>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.25}
        y={20}
        className="mt-16 grid grid-cols-1 gap-10 border-t border-[#D7E2EA]/10 pt-12 sm:grid-cols-3 md:mt-20"
      >
        <div className="flex flex-col gap-4">
          <span className={headingClass}>Contact</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className={linkClass}>
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className={headingClass}>Elsewhere</span>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className={headingClass}>Based in</span>
          <span className="text-[#D7E2EA] opacity-70">{PERSONAL_INFO.locationLong}</span>
          <span className="text-[#D7E2EA] opacity-70">{PERSONAL_INFO.currentRole}</span>
        </div>
      </FadeIn>

      <div className="mt-16 flex flex-col gap-2 border-t border-[#D7E2EA]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs uppercase tracking-widest text-[#D7E2EA] opacity-40">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </span>
        <span className="text-xs uppercase tracking-widest text-[#D7E2EA] opacity-40">
          {PERSONAL_INFO.title}
        </span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
