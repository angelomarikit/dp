import { motion, useReducedMotion } from "motion/react";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 origin-left bg-brand-dark"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={reduced ? false : { scale: 1.08 }}
        whileInView={reduced ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={reduced ? undefined : { scale: 1.04 }}
      />
    </div>
  );
}
