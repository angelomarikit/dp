import { sectionIds } from "../../data/site";
import { scrollToSection } from "../../lib/scrollTo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";

const steps = [
  {
    step: "01",
    title: "Send Your Inquiry",
    copy: "Share your property or project context, location, and the type of survey you are exploring.",
  },
  {
    step: "02",
    title: "Discuss Your Survey Requirements",
    copy: "We review your needs, clarify scope questions, and outline information that will help planning.",
  },
  {
    step: "03",
    title: "Coordinate the Survey Details",
    copy: "Scheduling, site access, and field coordination are aligned before measurements proceed.",
  },
  {
    step: "04",
    title: "Proceed with the Agreed Service",
    copy: "Field work moves forward according to the agreed scope and communication plan.",
  },
];

export function Process() {
  return (
    <section
      id={sectionIds.process}
      className="section-pad relative isolate z-20 border-t border-brand-dark/10 bg-white shadow-[0_-24px_48px_rgba(16,38,27,0.06)]"
    >
      <Container className="relative bg-white">
        <SectionHeading
          label="05 / Our Process"
          title="From inquiry to site assessment."
          description="An indicative engagement flow for new inquiries. Specific technical steps may vary depending on your project."
        />

        <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {steps.map((item) => (
            <StaggerItem key={item.step}>
              <article className="relative flex h-full flex-col rounded-sm bg-white p-6 shadow-sm ring-1 ring-brand-dark/10 md:p-8">
                <div className="relative border-t-[3px] border-brand-primary pt-6">
                  <p className="text-display mb-4 inline-block bg-white pr-2 text-base font-semibold tracking-[0.22em] text-brand-primary uppercase md:text-lg">
                    Step {item.step}
                  </p>
                  <h3 className="text-display text-2xl leading-tight font-semibold text-brand-dark uppercase md:text-3xl lg:text-[1.65rem] xl:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed font-medium text-brand-text md:text-xl">
                    {item.copy}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12">
          <Button
            className="text-hero btn-site-cta tracking-[0.08em] uppercase"
            onClick={() => scrollToSection(sectionIds.contact)}
          >
            Discuss Your Survey Requirements
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
