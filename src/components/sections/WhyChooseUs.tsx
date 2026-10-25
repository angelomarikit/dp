import { sectionIds, siteConfig } from "../../data/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section
      id={sectionIds.approach}
      className="section-pad relative overflow-hidden bg-brand-dark text-white"
    >
      <div className="survey-grid-light pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          label="Why Choose Us?"
          title="We earn your trust through our work."
          description="At D.P. Land Surveying Services, we believe that being chosen is not something we ask for—it is something we earn."
        />

        <div className="mt-12 max-w-4xl space-y-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-white/85 md:text-xl md:leading-relaxed">
              We demonstrate our worth through our commitment to every project, the
              quality and accuracy of our outputs, and the value we provide to our
              clients. For us, every land surveying project is more than just a job.
              It is a responsibility that requires accuracy, integrity, and attention
              to detail.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-white/85 md:text-xl md:leading-relaxed">
              At D.P. Land Surveying Services, we do not simply ask for your trust.
              We work to earn it—through our actions, our outputs, and the value we
              bring to every project.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <blockquote className="border-l-4 border-brand-accent pl-6">
              <p className="text-display text-2xl leading-snug font-semibold text-white uppercase md:text-3xl">
                {siteConfig.clientTagline}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
