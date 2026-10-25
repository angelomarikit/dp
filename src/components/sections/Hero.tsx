import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { sectionIds, siteConfig } from "../../data/site";
import { HeroRegionBar } from "../ui/HeroRegionBar";
import { scrollToSection } from "../../lib/scrollTo";
import { Container } from "../ui/Container";
import { HeroHeadline } from "../ui/HeroHeadline";
import { HeroTechnicalOverlay } from "../ui/HeroTechnicalOverlay";

export function Hero() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id={sectionIds.home}
      className="relative w-full min-h-[100svh] overflow-hidden bg-brand-dark text-white"
    >
      <div className="absolute inset-0 w-full">
        <motion.img
          src="/images/hero/cinematic-sunset-survey.jpg"
          alt="Land surveyor with total station at sunset during field surveying work"
          className="h-full w-full object-cover object-[85%_center] md:object-[72%_center]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={reduced ? false : { scale: 1.05 }}
          animate={reduced ? undefined : { scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/92 via-brand-dark/55 to-brand-dark/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-brand-dark/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-950/25" />
        <HeroTechnicalOverlay />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-28 pt-[clamp(16rem,32vw,18rem)] md:pb-32 md:pt-[clamp(17rem,28vw,19rem)] lg:pt-[clamp(10rem,16vw,13rem)]">
        <div className="mx-auto w-full max-w-[min(96vw,64rem)] translate-x-[clamp(0.75rem,5vw,4.5rem)] text-left md:max-w-[58rem] lg:max-w-[62rem] xl:max-w-[68rem]">
          <HeroRegionBar />

          <HeroHeadline />

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 md:mt-7 md:max-w-xl md:text-xl"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.75, ease }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.75, ease }}
          >
            <button
              type="button"
              onClick={() => scrollToSection(sectionIds.contact)}
              className="text-hero btn-site-cta motion-safe:hover:-translate-y-0.5 group inline-flex items-center justify-center gap-2.5 rounded-sm border px-8 py-4 text-base tracking-[0.08em] text-white uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-9 md:py-[1.125rem] md:text-lg"
            >
              Request a Survey
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(sectionIds.services)}
              className="text-hero motion-safe:hover:-translate-y-0.5 group inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/45 bg-transparent px-8 py-4 text-base tracking-[0.08em] text-white/92 uppercase transition hover:border-white hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-9 md:py-[1.125rem] md:text-lg"
            >
              Explore Our Services
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
          </motion.div>
        </div>
      </Container>

      <motion.button
        type="button"
        onClick={() => scrollToSection(sectionIds.about)}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] text-white/50 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        initial={reduced ? false : { opacity: 0 }}
        animate={
          reduced
            ? undefined
            : { opacity: [0.45, 0.85, 0.45] }
        }
        transition={
          reduced
            ? { delay: 0.7, duration: 0.5 }
            : { delay: 0.85, duration: 2.8, repeat: Infinity, ease: "easeInOut" }
        }
        aria-label="Scroll to explore"
      >
        Scroll to explore
        <span className="h-8 w-px bg-white/35" aria-hidden />
        <ChevronDown size={14} />
      </motion.button>
    </section>
  );
}
