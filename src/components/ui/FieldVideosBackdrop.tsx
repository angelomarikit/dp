/** Decorative surveying graphics for the field videos section background. */
export function FieldVideosBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden text-white"
      aria-hidden
    >
      {/* Left — compass */}
      <svg
        className="absolute -left-8 top-[12%] h-[min(42vw,280px)] w-[min(42vw,280px)] opacity-[0.14] md:-left-4 md:top-[10%] md:h-72 md:w-72 lg:left-[2%] lg:opacity-[0.18]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <line x1="100" y1="22" x2="100" y2="178" stroke="currentColor" strokeWidth="0.65" />
        <line x1="22" y1="100" x2="178" y2="100" stroke="currentColor" strokeWidth="0.65" />
        <path
          d="M 100 36 L 92 68 L 100 62 L 108 68 Z"
          fill="currentColor"
          className="opacity-90"
        />
        <text x="100" y="16" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="Manrope, sans-serif">
          N
        </text>
        <text x="100" y="196" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="Manrope, sans-serif">
          S
        </text>
        <text x="186" y="104" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="Manrope, sans-serif">
          E
        </text>
        <text x="14" y="104" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="Manrope, sans-serif">
          W
        </text>
        <rect x="94" y="94" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      {/* Right — total station / tripod hint */}
      <svg
        className="absolute -right-6 bottom-[18%] h-56 w-56 opacity-[0.12] md:right-[1%] md:bottom-[15%] md:h-64 md:w-64 lg:opacity-[0.16]"
        viewBox="0 0 160 160"
      >
        <line x1="80" y1="28" x2="48" y2="132" stroke="currentColor" strokeWidth="0.7" />
        <line x1="80" y1="28" x2="112" y2="132" stroke="currentColor" strokeWidth="0.7" />
        <line x1="80" y1="28" x2="80" y2="132" stroke="currentColor" strokeWidth="0.7" />
        <line x1="40" y1="132" x2="120" y2="132" stroke="currentColor" strokeWidth="0.65" />
        <circle cx="80" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="0.65" />
        <line x1="80" y1="14" x2="80" y2="34" stroke="currentColor" strokeWidth="0.5" />
        <line x1="70" y1="24" x2="90" y2="24" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Top right — crosshair arc */}
      <svg
        className="absolute top-8 right-[8%] hidden h-32 w-32 opacity-[0.15] md:block lg:right-[12%]"
        viewBox="0 0 120 120"
      >
        <path d="M 12 60 A 48 48 0 0 1 108 60" fill="none" stroke="currentColor" strokeWidth="0.65" />
        <line x1="60" y1="8" x2="60" y2="112" stroke="currentColor" strokeWidth="0.55" />
        <line x1="8" y1="60" x2="112" y2="60" stroke="currentColor" strokeWidth="0.55" />
      </svg>

      {/* Bottom left — contour lines */}
      <svg
        className="absolute bottom-6 left-[6%] h-24 w-48 opacity-[0.12] lg:left-[10%] lg:opacity-[0.15]"
        viewBox="0 0 200 80"
      >
        <path
          d="M 0 52 C 40 38, 80 62, 120 48 S 200 42, 200 42"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M 0 64 C 45 50, 90 70, 140 56 S 200 58, 200 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M 0 40 C 35 28, 70 44, 110 32 S 180 36, 200 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
        />
      </svg>

      {/* Bottom right — prism pole */}
      <svg
        className="absolute right-[5%] bottom-8 h-28 w-16 opacity-[0.13] lg:right-[8%] lg:opacity-[0.17]"
        viewBox="0 0 40 120"
      >
        <line x1="20" y1="8" x2="20" y2="112" stroke="currentColor" strokeWidth="0.75" />
        <rect x="14" y="4" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <line x1="12" y1="112" x2="28" y2="112" stroke="currentColor" strokeWidth="0.65" />
        <line x1="16" y1="40" x2="24" y2="40" stroke="currentColor" strokeWidth="0.45" />
        <line x1="16" y1="70" x2="24" y2="70" stroke="currentColor" strokeWidth="0.45" />
      </svg>
    </div>
  );
}
