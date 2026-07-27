import React from 'react';
import { motion } from 'framer-motion';

/**
 * Motion components resolved once at module scope. Reaching through the
 * `motion` proxy during render, or calling motion.create() there, yields a
 * fresh component type on every pass and trips React's invalid-hook-call guard.
 */
const TAGS = {
  div: motion.div,
  nav: motion.nav,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

export type FadeInTag = keyof typeof TAGS;

interface FadeInProps {
  children?: React.ReactNode;
  /** Element type to render. Defaults to 'div'. */
  as?: FadeInTag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Every section is wrapped in FadeIn, so an entrance that never runs would
 * leave the whole page blank at opacity 0. Users who ask for reduced motion
 * get the final state immediately rather than an animation — which also means
 * the content does not depend on the animation firing to become visible.
 */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-triggered entrance wrapper. Animates once, and starts as soon as any
 * part of the element is within 50px of the viewport (amount: 0).
 */
const FadeIn: React.FC<FadeInProps> = ({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}) => {
  const MotionTag = TAGS[as] ?? TAGS.div;
  const [reduced] = React.useState(prefersReducedMotion);

  if (reduced) {
    const Tag = as as React.ElementType;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
