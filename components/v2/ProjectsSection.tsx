import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { PROJECT_CARDS, PROJECT_TILES, ProjectCard } from './data';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface CardProps {
  card: ProjectCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Card: React.FC<CardProps> = ({ card, index, total, progress }) => {
  // Earlier cards shrink further, so the stack reads as depth: the last card
  // stays at 1 and each one before it settles a step smaller. The step is
  // capped by total shrink rather than fixed at 3%, otherwise a long list
  // drives the deepest card down to ~0.76 and its offset past 200px.
  const depth = total - 1 - index;
  const scaleStep = Math.min(0.03, 0.15 / Math.max(1, total - 1));
  const topStep = Math.min(28, 140 / Math.max(1, total - 1));

  const targetScale = 1 - depth * scaleStep;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${Math.round(index * topStep)}px` }}
        className={`relative flex w-full max-w-6xl flex-col gap-5 border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:p-6 md:p-8 ${RADIUS}`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {card.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-xs">
                {card.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.1rem)' }}
              >
                {card.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={card.url} />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={card.images.colOneTop}
              alt={`${card.name} detail`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={card.images.colOneBottom}
              alt={`${card.name} detail`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          <div className="w-[60%]">
            <img
              src={card.images.colTwo}
              alt={`${card.name} homepage`}
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
              style={{ minHeight: 'clamp(302px, 38.5vw, 586px)' }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

/**
 * Trailing padding matters here: the last card reaches its final scale at
 * scroll progress 1, so without space after it that state lands on the
 * document's last pixel and is never seen. The footer now supplies most of
 * that room, with some padding kept so the stack isn't flush against it.
 */
const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-32 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div ref={containerRef}>
        {PROJECT_CARDS.map((card, i) => (
          <Card
            key={card.number}
            card={card}
            index={i}
            total={PROJECT_CARDS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* Remaining work, without the 85vh-per-card scroll cost of the stack. */}
      <div className="mx-auto mt-20 max-w-6xl sm:mt-24 md:mt-28">
        <FadeIn
          as="h3"
          y={30}
          className="mb-8 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] opacity-50 sm:mb-10"
        >
          More work
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {PROJECT_TILES.map((tile, i) => (
            <FadeIn key={tile.number} delay={i * 0.08} y={30}>
              <a
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] transition-colors duration-300 hover:border-[#D7E2EA] sm:rounded-[40px]"
              >
                <img
                  src={tile.image}
                  alt={`${tile.name} homepage`}
                  loading="lazy"
                  className="h-[200px] w-full object-cover object-top sm:h-[240px] md:h-[280px]"
                />
                <div className="flex flex-1 items-end justify-between gap-4 p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black leading-none text-[#D7E2EA] opacity-30 sm:text-3xl">
                      {tile.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
                        {tile.category}
                      </span>
                      <span className="text-base font-medium uppercase leading-tight text-[#D7E2EA] sm:text-lg">
                        {tile.name}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs uppercase tracking-widest text-[#D7E2EA] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
