import { Reveal } from "./Reveal";

interface FieldVideoCardProps {
  src: string;
  title: string;
  description: string;
  index: number;
}

export function FieldVideoCard({ src, title, description, index }: FieldVideoCardProps) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="flex h-full flex-col">
        <div className="relative mx-auto w-full max-w-[15.5rem] sm:max-w-none">
          <div className="relative overflow-hidden rounded-sm bg-black/95 ring-1 ring-white/10">
            <div className="relative aspect-[9/16] w-full max-h-[min(22rem,48vh)] sm:max-h-[min(24rem,52vh)] lg:max-h-[26rem]">
              <video
                className="absolute inset-0 h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label={title}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-display mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase md:text-xs">
            Clip {String(index + 1).padStart(2, "0")}
          </p>
        </div>
        <div className="mt-3 text-center sm:text-left">
          <h3 className="text-display text-base font-semibold text-white uppercase md:text-lg">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/70 md:text-base">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}
