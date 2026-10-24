import { useReducedMotion } from "motion/react";
import type { ShowcaseImage } from "../../data/showcase";

interface ShowcaseAutoScrollProps {
  images: ShowcaseImage[];
  onSelect: (index: number) => void;
}

function SlideCard({
  item,
  index,
  onSelect,
  sourceLength,
}: {
  item: ShowcaseImage;
  index: number;
  onSelect: (index: number) => void;
  sourceLength: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index % sourceLength)}
      className="showcase-marquee-slide group relative shrink-0 overflow-hidden rounded-sm ring-1 ring-brand-dark/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label={`View image: ${item.caption}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-display text-xs tracking-[0.2em] text-white/75 uppercase md:text-sm">
          Fieldwork
        </p>
        <p className="mt-1 line-clamp-2 text-left text-sm font-medium text-white md:text-base">
          {item.caption}
        </p>
      </div>
    </button>
  );
}

export function ShowcaseAutoScroll({ images, onSelect }: ShowcaseAutoScrollProps) {
  const reduced = useReducedMotion();
  const loop = [...images, ...images];

  if (reduced) {
    return (
      <div className="site-gutter flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {images.map((item, index) => (
          <SlideCard
            key={item.id}
            item={item}
            index={index}
            onSelect={onSelect}
            sourceLength={images.length}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-cream to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-cream to-transparent sm:w-16"
        aria-hidden
      />

      <div className="overflow-hidden">
        <div className="showcase-marquee-track">
          {loop.map((item, index) => (
            <SlideCard
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              onSelect={onSelect}
              sourceLength={images.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
