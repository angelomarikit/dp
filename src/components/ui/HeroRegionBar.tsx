import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "../../data/site";

const [brandLine, locationLine] = (() => {
  const parts = siteConfig.regionLabel.split(/\s+\/\s+/);
  return [parts[0] ?? siteConfig.regionLabel, parts[1] ? `/ ${parts[1]}` : ""] as const;
})();

function CrosshairMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 ${className}`}
      viewBox="0 0 16 16"
      aria-hidden
    >
      <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="8" y1="1.5" x2="8" y2="14.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function HeroRegionBar() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      className="mb-8 flex w-full min-w-0 items-center gap-4 sm:mb-9 sm:gap-5 md:mb-10"
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.65, ease }}
    >
      <p className="shrink-0 text-xs font-medium tracking-[0.24em] uppercase sm:text-sm sm:tracking-[0.28em] md:text-base md:tracking-[0.3em] lg:text-lg lg:tracking-[0.32em]">
        <span className="text-white/92">{brandLine}</span>
        {locationLine ? (
          <span className="text-white/48"> {locationLine}</span>
        ) : null}
      </p>

      <div className="relative flex min-w-[4rem] flex-1 items-center sm:min-w-[6rem]">
        <div
          className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-white/40 md:h-0.5"
          aria-hidden
        />
        <CrosshairMark className="relative ml-auto text-white/55" />
      </div>
    </motion.div>
  );
}
