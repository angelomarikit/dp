import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  /** Brixzon-style spaced display title */
  displayStyle?: "default" | "architectural";
}

/** Architectural headings use normal word spacing for readability. */
function architecturalTitle(title: string): string {
  return title.replace(/\s+/g, " ").trim();
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
  displayStyle = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-brand-dark";
  const labelColor = light ? "text-brand-cream/70" : "text-brand-secondary";

  const titleClass =
    displayStyle === "architectural"
      ? "text-balance text-[clamp(3rem,6.8vw,5.5rem)] leading-[1.1] tracking-[0.02em] [word-spacing:0.05em] md:leading-[1.08]"
      : "text-balance text-6xl leading-[0.95] tracking-[0.02em] sm:text-7xl lg:text-8xl";

  const renderedTitle =
    displayStyle === "architectural" ? architecturalTitle(title) : title;

  return (
    <div className={`max-w-4xl ${alignClass}`}>
      <Reveal>
        <p
          className={`text-display mb-4 text-sm font-semibold tracking-[0.28em] uppercase sm:text-base ${labelColor}`}
        >
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`text-display font-semibold whitespace-pre-line uppercase ${titleClass} ${titleColor}`}
        >
          {renderedTitle}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-6 max-w-3xl text-xl leading-relaxed md:text-2xl md:leading-relaxed ${
              light ? "text-white/85" : "text-brand-text"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
