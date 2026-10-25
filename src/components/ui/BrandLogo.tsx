import { siteConfig } from "../../data/site";

interface BrandLogoProps {
  variant?:
    | "full"
    | "compact"
    | "hero"
    | "bar"
    | "nav"
    | "navLarge"
    | "navMobile"
    | "footer";
  /** White / high-contrast treatment for dark hero backgrounds */
  onDark?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "full",
  onDark = false,
  className = "",
}: BrandLogoProps) {
  const onDarkImageClass = onDark
    ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
    : "";

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src="/images/logo/dp-land-surveying-emblem.png"
          alt=""
          aria-hidden
          className={`h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 ${onDarkImageClass}`}
        />
        <div className="leading-tight">
          <p
            className={`text-display text-base tracking-wide uppercase sm:text-lg ${onDark ? "text-white" : "text-brand-primary"}`}
          >
            D.P. Land
          </p>
          <p
            className={`text-display text-sm tracking-wide uppercase sm:text-base ${onDark ? "text-white/85" : "text-brand-primary"}`}
          >
            Surveying Services
          </p>
        </div>
      </div>
    );
  }

  const sizeClass =
    variant === "hero"
      ? "h-[clamp(5rem,18vw,9.5rem)] w-auto max-w-[min(92vw,46rem)] object-contain object-left sm:h-[clamp(5.5rem,16vw,10rem)] lg:h-[clamp(6.75rem,13vw,10.5rem)] lg:max-w-[min(46vw,44rem)] xl:h-[clamp(7.5rem,11vw,11rem)]"
      : variant === "navLarge"
        ? "h-[clamp(7rem,11vw,13rem)] w-auto max-w-[min(62vw,720px)] object-contain object-left lg:h-[clamp(8.5rem,12.5vw,16rem)] lg:max-w-[min(56vw,820px)] xl:h-[clamp(9.5rem,13.5vw,18rem)] xl:max-w-[900px] 2xl:h-[clamp(10.5rem,14vw,20rem)] 2xl:max-w-[980px]"
      : variant === "navMobile"
        ? "h-auto w-[min(calc(100vw-5rem),22rem)] max-h-[7rem] object-contain object-left sm:max-h-[7.5rem] sm:w-[min(calc(100vw-4.75rem),24rem)]"
      : variant === "nav"
        ? "h-10 w-auto max-w-[min(62vw,280px)] object-contain object-left md:h-11 md:max-w-[320px] lg:h-12 lg:max-w-[360px]"
      : variant === "bar"
        ? "h-16 w-auto max-w-[min(80vw,440px)] object-contain object-left md:h-[4.5rem] md:max-w-[480px] lg:h-[5.75rem] lg:max-w-[540px] xl:h-[6.5rem] xl:max-w-[600px]"
      : variant === "footer"
        ? "h-auto w-full max-h-[clamp(17rem,90vw,24rem)] object-contain object-left sm:max-h-[clamp(18rem,76vw,25rem)] md:h-[clamp(6rem,18vw,9rem)] md:w-auto md:max-h-none md:max-w-[720px] lg:h-[clamp(6.5rem,12vw,11rem)] lg:max-w-[780px] xl:h-[clamp(7rem,10vw,12rem)]"
        : "h-11 w-auto max-w-[min(100%,300px)] object-contain object-left sm:h-12 md:h-[3.25rem] md:max-w-[340px] lg:h-14 lg:max-w-[400px]";

  return (
    <img
      src="/images/logo/dp-land-surveying-transparent.png"
      alt={siteConfig.name}
      className={`${sizeClass} ${onDarkImageClass} ${className}`}
    />
  );
}
