import { sectionIds } from "../../data/site";
import { services, servicesNote } from "../../data/services";
import { scrollToSection } from "../../lib/scrollTo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";

export function Services() {
  return (
    <section id={sectionIds.services} className="section-pad bg-white">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="02 / Our Services"
            title={"Services offered."}
            description={servicesNote}
            displayStyle="architectural"
          />
        </div>

        <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <article className="group relative flex h-full flex-col border border-brand-dark/10 bg-brand-cream/40 p-7 transition duration-500 hover:-translate-y-1 hover:border-brand-primary/25 hover:bg-white hover:shadow-lg hover:shadow-brand-dark/5 md:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="text-display text-base font-medium tracking-[0.18em] text-brand-primary uppercase md:text-lg">
                      {service.coordinate}
                    </span>
                    <span className="text-display text-4xl font-semibold text-brand-dark/15 md:text-5xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-sm border border-brand-primary/15 text-brand-primary">
                    <Icon size={26} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-display text-balance text-2xl leading-snug font-semibold text-brand-dark uppercase md:text-3xl xl:text-[2rem] xl:leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-brand-text md:text-xl md:leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6 justify-start px-0 py-0 text-base text-brand-primary hover:text-brand-secondary md:text-lg"
                    onClick={() => scrollToSection(sectionIds.contact)}
                  >
                    Inquire about this service
                  </Button>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
