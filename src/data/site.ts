export const siteConfig = {
  name: "D.P. Land Surveying Services",
  owner: "Randy Palmones",
  tagline: "Professional land surveying services built on accuracy, reliability, and attention to detail.",
  clientTagline:
    "We Don't Ask to Be Chosen. We Earn It Through Our Work.",
  phoneDisplay: "+63 915 160 8590",
  phoneTel: "+639151608590",
  email: "dplandsurveys@gmail.com",
  regionLabel: "D.P. LAND SURVEYING SERVICES / PHILIPPINES",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const sectionIds = {
  home: "home",
  about: "about",
  services: "services",
  approach: "approach",
  showcase: "showcase",
  videos: "videos",
  process: "process",
  cta: "cta",
  contact: "contact",
} as const;
