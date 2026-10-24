export function HeroGridOverlay() {
  const columns = ["8%", "26%", "44%", "62%", "80%"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="survey-grid-light absolute inset-0 opacity-[0.22]" />
      {columns.map((left) => (
        <div
          key={left}
          className="absolute inset-y-0 w-px bg-white/[0.12]"
          style={{ left }}
        />
      ))}
      <div className="absolute inset-x-0 top-[22%] h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/55 via-brand-dark/20 to-brand-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/35 to-brand-dark/55" />
    </div>
  );
}
