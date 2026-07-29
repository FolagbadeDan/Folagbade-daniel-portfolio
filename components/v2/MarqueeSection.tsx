import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_ONE, MARQUEE_ROW_TWO } from './data';

/** Tripled so the strip can translate without exposing an end. */
const triple = <T,>(items: T[]) => [...items, ...items, ...items];

const rowOne = triple(MARQUEE_ROW_ONE);
const rowTwo = triple(MARQUEE_ROW_TWO);

// Smaller tiles on phones: 24 tiles at full desktop size meant a lot of
// decoded pixels to composite on every scroll frame, and the source captures
// are 840px wide so the smaller box is still a 2x source.
const Tile: React.FC<{ src: string }> = ({ src }) => (
  <img
    src={src}
    alt=""
    loading="lazy"
    decoding="async"
    className="h-[170px] w-[264px] shrink-0 rounded-xl object-cover sm:h-[220px] sm:w-[340px] sm:rounded-2xl md:h-[270px] md:w-[420px]"
  />
);

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {rowOne.map((src, i) => (
            <Tile key={`a-${i}`} src={src} />
          ))}
        </div>

        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {rowTwo.map((src, i) => (
            <Tile key={`b-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
