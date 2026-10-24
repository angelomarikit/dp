import { motion, useReducedMotion } from "motion/react";

const drawEase = [0.16, 1, 0.3, 1] as const;

/** Decorative hero coordinates (Manila reference — not a live GPS fix). */
const HERO_COORDS = {
  lat: "14.5995° N",
  lng: "120.9842° E",
} as const;

function AnimatedLine({
  d,
  delay = 0,
  reduced,
  className = "",
  strokeWidth = 1,
}: {
  d: string;
  delay?: number;
  reduced: boolean;
  className?: string;
  strokeWidth?: number;
}) {
  if (reduced) {
    return (
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className={className}
      />
    );
  }

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.1, delay, ease: drawEase }}
    />
  );
}

function SurveyReticle({ reduced }: { reduced: boolean }) {
  const r = 168;
  const axis = 192;

  const svgInner = (
    <>
      <defs>
        <filter id="hero-reticle-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#hero-reticle-glow)" className="text-white/55">
        <AnimatedLine
          reduced={reduced}
          delay={0.35}
          strokeWidth={0.85}
          d={`M 0 ${-axis} V ${axis}`}
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.42}
          strokeWidth={0.85}
          d={`M ${-axis} 0 H ${axis}`}
        />

        <AnimatedLine
          reduced={reduced}
          delay={0.52}
          strokeWidth={0.9}
          d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
        />

        <polygon points="0,-178 -5.5,-166 5.5,-166" fill="currentColor" className="opacity-90" />

        <rect
          x="-7"
          y="-7"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.85}
          className="opacity-95"
        />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="currentColor" strokeWidth={0.65} className="opacity-90" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeWidth={0.65} className="opacity-90" />
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="currentColor" strokeWidth={0.45} className="opacity-75" />
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="currentColor" strokeWidth={0.45} className="opacity-75" />

        <text
          x="-122"
          y="-96"
          fill="currentColor"
          fontSize="11.5"
          fontFamily="'IBM Plex Mono', ui-monospace, monospace"
          className="opacity-85"
        >
          {HERO_COORDS.lat}
        </text>
        <text
          x="-122"
          y="-82"
          fill="currentColor"
          fontSize="11.5"
          fontFamily="'IBM Plex Mono', ui-monospace, monospace"
          className="opacity-85"
        >
          {HERO_COORDS.lng}
        </text>

        <AnimatedLine
          reduced={reduced}
          delay={0.62}
          strokeWidth={0.75}
          d="M -122 -70 H -48"
          className="opacity-80"
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.72}
          strokeWidth={0.75}
          d="M -88 -70 L -10 -9"
          className="opacity-70"
        />

        <text
          x="0"
          y={-axis - 14}
          textAnchor="middle"
          fill="currentColor"
          fontSize="13"
          fontFamily="Manrope, system-ui, sans-serif"
          fontWeight={500}
          letterSpacing="0.12em"
          className="opacity-80"
        >
          N
        </text>
        <text
          x="0"
          y={axis + 22}
          textAnchor="middle"
          fill="currentColor"
          fontSize="13"
          fontFamily="Manrope, system-ui, sans-serif"
          fontWeight={500}
          letterSpacing="0.12em"
          className="opacity-80"
        >
          S
        </text>
        <text
          x={axis + 18}
          y="5"
          textAnchor="middle"
          fill="currentColor"
          fontSize="13"
          fontFamily="Manrope, system-ui, sans-serif"
          fontWeight={500}
          letterSpacing="0.12em"
          className="opacity-80"
        >
          E
        </text>
        <text
          x={-axis - 18}
          y="5"
          textAnchor="middle"
          fill="currentColor"
          fontSize="13"
          fontFamily="Manrope, system-ui, sans-serif"
          fontWeight={500}
          letterSpacing="0.12em"
          className="opacity-80"
        >
          W
        </text>
      </g>
    </>
  );

  if (reduced) {
    return (
      <svg
        className="h-[min(58vw,480px)] w-[min(58vw,480px)]"
        viewBox="-210 -210 420 420"
        aria-hidden
      >
        {svgInner}
      </svg>
    );
  }

  return (
    <motion.svg
      className="h-[min(58vw,480px)] w-[min(58vw,480px)]"
      viewBox="-210 -210 420 420"
      aria-hidden
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1, ease: drawEase }}
    >
      {svgInner}
    </motion.svg>
  );
}

export function HeroTechnicalOverlay() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden text-white"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <AnimatedLine
          reduced={reduced}
          delay={0.45}
          d="M 120 180 H 920"
          className="opacity-80"
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.55}
          d="M 120 180 V 620"
          className="opacity-80"
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.65}
          d="M 120 620 H 520"
          className="opacity-60"
        />

        <circle cx="120" cy="180" r="4" fill="currentColor" className="opacity-70" />
        <circle cx="920" cy="180" r="3" fill="currentColor" className="opacity-50" />

        <AnimatedLine
          reduced={reduced}
          delay={0.75}
          d="M 980 680 C 1040 650, 1100 710, 1160 680 S 1280 720, 1340 690"
          className="opacity-55"
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.85}
          d="M 960 730 C 1030 700, 1090 760, 1170 730 S 1290 770, 1360 740"
          className="opacity-40"
        />
        <AnimatedLine
          reduced={reduced}
          delay={0.95}
          d="M 940 780 C 1010 750, 1080 810, 1180 780 S 1310 820, 1380 790"
          className="opacity-30"
        />
      </svg>

      <div className="absolute top-[44%] right-[3%] hidden translate-x-2 -translate-y-1/2 md:block lg:right-[4%] lg:translate-x-4 xl:right-[5%] xl:translate-x-6">
        <SurveyReticle reduced={reduced} />
      </div>

      <div className="absolute bottom-24 left-[var(--site-gutter)] hidden flex-col gap-3 text-[10px] tracking-[0.28em] text-white/40 uppercase sm:flex">
        {["Land Surveying", "Site Assessment", "Boundary Mapping"].map((label, i) => (
          <motion.span
            key={label}
            initial={reduced ? false : { opacity: 0, x: -8 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.6, ease: drawEase }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
