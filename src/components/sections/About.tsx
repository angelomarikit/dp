import { sectionIds, siteConfig } from "../../data/site";
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
              label="About Us"
              title="Professional land surveying you can depend on."
              displayStyle="architectural"
            />
            <Reveal delay={0.12} className="text-section-body mt-10 space-y-6">
              <p>
                D.P. Land Surveying Services is a professional land surveying firm
                committed to providing accurate, reliable, and dependable surveying
                solutions for property owners, developers, contractors, and other
                clients. Our hardworking and dedicated team includes researchers,
                surveyors, and engineers who work together to deliver quality land
                surveying services.
              </p>
              <p>
                Through careful research, precise field measurements, technical
                analysis, and professional engineering expertise, we ensure that
                every project is handled with accuracy, efficiency, and attention to
                detail. We specialize in land surveying services designed to
                establish, verify, and determine property boundaries, support
                construction activities, and provide essential survey data for land
                development and property transactions.
              </p>
              <p>
                With a commitment to professionalism, precision, teamwork, and client
                satisfaction, we strive to deliver quality surveying services that
                help our clients make informed decisions regarding their land and
                property investments. At D.P. Land Surveying Services, we understand
                that every property is valuable. Our goal is to provide dependable
                survey results and professional assistance tailored to the specific
                requirements of every project.
              </p>
              <p>
                Through the dedication and cooperation of our researchers, surveyors,
                and engineers, we work hard to provide trusted solutions and reliable
                results for every client.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 border-l-4 border-brand-primary pl-6">
              <p className="text-display text-2xl leading-snug font-semibold text-brand-dark uppercase md:text-3xl">
                {siteConfig.clientTagline}
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
