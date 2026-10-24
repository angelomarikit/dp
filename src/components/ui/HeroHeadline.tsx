import { motion, useReducedMotion } from "motion/react";

export function HeroHeadline() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <h1 className="text-hero w-full uppercase text-white">
      <motion.span
        className="block text-[clamp(4.75rem,19vw,15.5rem)] leading-[0.82]"
        initial={reduced ? false : { opacity: 0, y: 36 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.85, ease }}
      >
        Precision
      </motion.span>
      <motion.span
        className="mt-1 block text-[clamp(2.15rem,7.4vw,5.75rem)] leading-[0.9] text-white/95"
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.85, ease }}
      >
        In every measurement.
      </motion.span>
    </h1>
  );
}
