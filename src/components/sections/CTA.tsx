import { sectionIds } from "../../data/site";
import { scrollToSection } from "../../lib/scrollTo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CTA() {
  return (
    <section
      id={sectionIds.cta}
      className="section-pad bg-site-cta relative overflow-hidden text-white"
    >
      <Container className="relative">
        <Reveal>
          <p className="text-display text-sm tracking-[0.28em] text-white/70 uppercase sm:text-base">
            Ready to coordinate
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-display mt-4 max-w-4xl text-5xl leading-[0.95] font-semibold uppercase sm:text-6xl lg:text-7xl">
            Need a reliable land survey?
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Tell us about your property or project requirements, and let&apos;s
            discuss the next steps.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <Button variant="onDark" onClick={() => scrollToSection(sectionIds.contact)}>
            Contact Us Today
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
