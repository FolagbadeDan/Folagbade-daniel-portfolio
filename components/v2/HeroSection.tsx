import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { NAV_LINKS, HERO_TAGLINE } from './data';

/**
 * Hero portrait. The source upload is a 1484x1060 photo on a white studio
 * background, so `e_background_removal` does the cut-out server-side —
 * dropping the white block that would otherwise sit on the dark hero — and
 * `f_auto,q_auto,w_*` emit per-width WebP/AVIF variants.
 *
 * Serving one fixed asset meant mobile downloaded the full-size file for a
 * 340px slot; the srcset below lets a phone take the 22KB variant instead of
 * the 215KB one, and retina screens still get a 2x source.
 */
const CLOUDINARY = 'https://res.cloudinary.com/dx7j2i7bo/image/upload';
const PORTRAIT_ID = 'v1785366038/new_hero_zjfyg4.png';
const portraitAt = (w: number) =>
  `${CLOUDINARY}/e_background_removal/f_auto,q_auto,w_${w}/${PORTRAIT_ID}`;

const PORTRAIT_SRCSET = [340, 460, 580, 680, 960, 1360]
  .map((w) => `${portraitAt(w)} ${w}w`)
  .join(', ');

/** Mirrors the w-[...] classes on the image wrapper below. */
const PORTRAIT_SIZES =
  '(min-width: 1024px) 680px, (min-width: 768px) 580px, (min-width: 640px) 460px, 340px';

/**
 * Heading scale note: the source design used 17.5vw for a 12-character name.
 * "hi, i'm folagbade" is 17 characters and would be clipped at that size.
 *
 * The string measures ~8.42em wide in Kanit 900 uppercase, so each breakpoint
 * is solved against its own horizontal padding (24px below md, 40px from md)
 * to land just under 100% of the content box at the narrowest width in range.
 * Verified by measuring range rects, not scrollWidth — the overflow-hidden
 * wrapper and the page's `overflow-x: clip` both make scrollWidth report no
 * overflow even while text is being cut off.
 */
const HeroSection: React.FC = () => (
  // h-svh, not h-screen: 100vh on mobile measures the viewport as if the
  // browser chrome were hidden, so the bottom bar sat under the address bar.
  <section className="relative flex h-svh flex-col" style={{ overflowX: 'clip' }}>
    {/* Navbar. Links carry their own py for a 44px-ish tap target, so the
        container's top padding is trimmed to keep the visual position. */}
    <FadeIn as="nav" delay={0} y={-20} className="relative z-20 px-6 pt-3 md:px-10 md:pt-5">
      <ul className="flex list-none items-center justify-between">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block py-3 text-[11px] font-medium uppercase tracking-wide text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm sm:tracking-wider md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </FadeIn>

    <div className="flex-1" />

    {/* Display heading */}
    <div className="relative z-20 overflow-hidden px-6 md:px-10">
      <FadeIn
        as="h1"
        delay={0.15}
        y={40}
        className="hero-heading mt-6 w-full whitespace-nowrap text-[10.1vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[10.3vw] md:-mt-5 md:text-[10.2vw] lg:text-[10.7vw]"
      >
        Hi, i&apos;m folagbade
      </FadeIn>
    </div>

    {/* Bottom bar */}
    <div className="relative z-20 flex items-end justify-between gap-6 px-6 pb-7 md:px-10 md:pb-10 sm:pb-8">
      <FadeIn
        delay={0.35}
        y={20}
        className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
      >
        {HERO_TAGLINE}
      </FadeIn>

      <FadeIn delay={0.5} y={20} className="shrink-0">
        <ContactButton />
      </FadeIn>
    </div>

    {/*
      Portrait. Positioning lives on this static wrapper, not on the FadeIn:
      framer-motion writes its own `transform` for the entrance, which silently
      overrides Tailwind's -translate-x-1/2 and leaves the image sitting with
      its left edge on the centre line. Centring via flex avoids transforms.
    */}
    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center sm:bottom-0 sm:top-auto sm:translate-y-0">
      <FadeIn
        delay={0.6}
        y={30}
        className="w-[340px] sm:w-[460px] md:w-[580px] lg:w-[680px]"
      >
        <Magnet padding={150} strength={3}>
          <img
            src={portraitAt(680)}
            srcSet={PORTRAIT_SRCSET}
            sizes={PORTRAIT_SIZES}
            alt="Folagbade Daniel"
            width={1484}
            height={1060}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full"
          />
        </Magnet>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
