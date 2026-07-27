import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

/**
 * One character. The visible copy is absolutely positioned over an invisible
 * placeholder so the paragraph keeps normal text flow and wrapping.
 */
const Char: React.FC<CharProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};

/**
 * Visually hidden but still announced. The per-character markup paints each
 * letter twice (placeholder + animated copy), which assistive tech would
 * otherwise read as doubled text, so the split version is hidden from it and
 * this clean copy is exposed instead.
 */
const SrOnly: React.FC<{ text: string }> = ({ text }) => (
  <span
    style={{
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    }}
  >
    {text}
  </span>
);

/** Character-by-character reveal driven by the paragraph's scroll progress. */
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} style={style}>
      <SrOnly text={text} />
      <span aria-hidden="true">
        {chars.map((char, i) => {
          const start = i / chars.length;
          const end = (i + 1) / chars.length;
          return <Char key={i} char={char} range={[start, end]} progress={scrollYProgress} />;
        })}
      </span>
    </p>
  );
};

export default AnimatedText;
