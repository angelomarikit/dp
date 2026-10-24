import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** `full` = edge-to-edge content with site gutters (Brixzon-style). `narrow` = optional reading width cap. */
  width?: "full" | "narrow";
}

export function Container({
  children,
  className = "",
  width = "full",
}: ContainerProps) {
  const cap = width === "narrow" ? "max-w-6xl" : "max-w-none";

  return (
    <div
      className={`site-gutter mx-auto w-full ${cap} ${className}`}
    >
      {children}
    </div>
  );
}
