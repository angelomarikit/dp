import { fieldVideos } from "../../data/videos";
import { sectionIds } from "../../data/site";
import { Container } from "../ui/Container";
import { FieldVideoCard } from "../ui/FieldVideoCard";
import { FieldVideosBackdrop } from "../ui/FieldVideosBackdrop";
import { Reveal } from "../ui/Reveal";

export function FieldVideos() {
  return (
    <section
      id={sectionIds.videos}
      className="relative overflow-hidden bg-brand-dark py-16 text-white md:py-20"
    >
      <div className="survey-grid-light pointer-events-none absolute inset-0 opacity-15" aria-hidden />
      <FieldVideosBackdrop />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-display text-sm font-semibold tracking-[0.28em] text-white/55 uppercase sm:text-base">
            Field clips
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold uppercase md:text-5xl">
            Survey work in motion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            On-site footage from survey visits. Each player fits the full video frame—representative
            coordination, not formal deliverables.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:justify-items-stretch sm:gap-6 md:mt-12 lg:gap-8">
          {fieldVideos.map((video, index) => (
            <FieldVideoCard
              key={video.id}
              src={video.src}
              title={video.title}
              description={video.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
