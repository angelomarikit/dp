import { useCallback, useEffect, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ShowcaseImage } from "../../data/showcase";

interface ShowcaseLightboxProps {
  images: ShowcaseImage[];
  index: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function ShowcaseLightbox({
  images,
  index,
  onClose,
  onChangeIndex,
}: ShowcaseLightboxProps) {
  const reduced = useReducedMotion();
  const titleId = useId();
  const open = index !== null && images[index] !== undefined;
  const current = open ? images[index!] : null;
  const total = images.length;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onChangeIndex((index - 1 + total) % total);
  }, [index, onChangeIndex, total]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onChangeIndex((index + 1) % total);
  }, [index, onChangeIndex, total]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col"
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <p id={titleId} className="text-sm text-white/75 md:text-base">
                {index! + 1} / {total}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-sm p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close"
              >
                <X size={22} aria-hidden />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-sm bg-black/40 shadow-2xl ring-1 ring-white/10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={current.id}
                  src={current.src}
                  alt={current.alt}
                  className="max-h-[min(72vh,720px)] w-full object-contain"
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  animate={reduced ? undefined : { opacity: 1, x: 0 }}
                  exit={reduced ? undefined : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  draggable={false}
                />
              </AnimatePresence>

              {total > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-sm bg-brand-dark/55 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand-dark/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4 sm:p-3"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-sm bg-brand-dark/55 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand-dark/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4 sm:p-3"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} aria-hidden />
                  </button>
                </>
              ) : null}
            </div>

            <div className="mt-4 px-1 text-white">
              <p className="text-display text-sm tracking-[0.2em] text-white/65 uppercase">
                Fieldwork & equipment
              </p>
              <p className="mt-1 text-lg font-medium md:text-xl">{current.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
