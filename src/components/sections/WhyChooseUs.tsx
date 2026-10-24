import { sectionIds } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";

const principles = [
  {
    number: "01",
    title: "Detailed and careful measurement",
    copy: "Field work is approached methodically, with attention to site conditions and the measurements your inquiry requires.",
  },
  {
    number: "02",
    title: "Clear project communication",
    copy: "Requirements, scope, and next steps are discussed in straightforward language so expectations stay aligned.",
  },
  {
    number: "03",
    title: "Professional, site-focused service",
    copy: "Surveying support is delivered with a practical, on-the-ground mindset suited to property and construction contexts.",
  },
  {
    number: "04",
    title: "Organized surveying workflows",
    copy: "From inquiry through coordination, processes are structured to keep information organized and progress visible.",
  },
];

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
          label="03 / Our Approach"
          title="Confidence starts with clarity."
          description="Our positioning focuses on how surveying work is planned, communicated, and carried out—not unsupported claims about awards or volume."
        />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <StaggerItem key={item.number}>
              <article className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                <p className="text-display text-5xl leading-none font-semibold text-white/15">
                  {item.number}
                </p>
                <h3 className="text-display mt-4 text-3xl font-semibold uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-white/80 md:text-xl">
                  {item.copy}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
