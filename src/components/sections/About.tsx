import { sectionIds } from "../../data/site";
import { Container } from "../ui/Container";
import { ImageReveal } from "../ui/ImageReveal";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id={sectionIds.about} className="section-pad survey-grid bg-brand-cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              label="[About D.P. Land Surveying]"
              title="Accuracy begins with a solid foundation."
              displayStyle="architectural"
            />
            <Reveal delay={0.12} className="text-section-body mt-10 space-y-6">
              <p>
                D.P. Land Surveying Services supports property owners, builders,
                and project teams with professional land surveying focused on
                careful measurement, clear communication, and organized field
                workflows.
              </p>
              <p>
                Whether you are preparing for construction, resolving boundary
                questions, or coordinating site requirements, our team works
                with you to understand the scope and align on the next steps
                before measurements begin.
              </p>
              <p>
                We emphasize precision in the field and clarity in how survey
                information is discussed—so decisions can move forward with
                confidence.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 rounded-full border border-brand-primary/20">
                <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-brand-primary" />
                <span className="text-display absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-brand-secondary">
                  N
                </span>
                <span className="text-display absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-brand-secondary">
                  S
                </span>
                <span className="text-display absolute top-1/2 right-1 -translate-y-1/2 text-[10px] text-brand-secondary">
                  E
                </span>
                <span className="text-display absolute top-1/2 left-1 -translate-y-1/2 text-[10px] text-brand-secondary">
                  W
                </span>
              </div>
              <p className="text-lg font-medium text-brand-text md:text-xl">
                Engineering precision, communicated in plain language.
              </p>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <ImageReveal
              src="/images/about/survey-field-01.jpg"
              alt="Surveyors coordinating GNSS and field measurements on site"
              className="aspect-[4/5] rounded-sm shadow-xl shadow-brand-dark/10"
              imgClassName="object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
