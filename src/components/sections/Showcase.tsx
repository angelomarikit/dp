import { useState } from "react";
import { showcaseImages } from "../../data/showcase";
import { sectionIds } from "../../data/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ShowcaseAutoScroll } from "../ui/ShowcaseAutoScroll";
import { ShowcaseLightbox } from "../ui/ShowcaseLightbox";

export function Showcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id={sectionIds.showcase} className="relative z-0 w-full overflow-hidden bg-brand-cream">
      <Container className="section-pad pb-10 md:pb-14">
        <SectionHeading
          label="04 / Our Work"
          title="Surveying in practice."
          description="Representative fieldwork and equipment imagery. These panels illustrate how surveying work is performed— not verified client project case studies."
          displayStyle="architectural"
        />
      </Container>

      <Reveal className="pb-16 md:pb-20 lg:pb-24">
        <ShowcaseAutoScroll images={showcaseImages} onSelect={setLightboxIndex} />
      </Reveal>

      <ShowcaseLightbox
        images={showcaseImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </section>
  );
}
