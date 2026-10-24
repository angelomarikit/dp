import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-site-cta border text-white",
  secondary:
    "bg-transparent text-brand-dark border border-brand-dark/20 hover:border-brand-primary hover:text-brand-primary",
  ghost: "bg-transparent text-brand-dark hover:text-brand-primary",
  onDark:
    "bg-white text-brand-dark hover:bg-brand-cream border border-white/80",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.98] inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-base font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary md:px-7 md:py-4 md:text-lg ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
