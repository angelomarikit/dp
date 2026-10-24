import { navLinks, siteConfig } from "../../data/site";
import { scrollToSection } from "../../lib/scrollTo";
import { BrandLogo } from "../ui/BrandLogo";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-dark/10 bg-brand-dark text-white">
      <Container className="section-pad grid gap-12 lg:grid-cols-[1.45fr_0.75fr_0.8fr]">
        <div className="space-y-6">
          <BrandLogo variant="footer" onDark className="w-full sm:w-auto" />
          <p className="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Professional land surveying inquiries, field coordination, and
            measurement-focused service for property and project requirements in
            the Philippines.
          </p>
        </div>

        <div>
          <p className="text-display mb-4 text-sm tracking-[0.24em] text-white/50 uppercase sm:text-base">
            Navigation
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-base text-white/80 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 md:text-lg"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-display mb-4 text-sm tracking-[0.24em] text-white/50 uppercase sm:text-base">
            Contact
          </p>
          <ul className="space-y-3 text-base md:text-lg">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-white/85 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/85 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between md:text-base">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Owner: {siteConfig.owner}</p>
        </Container>
      </div>
    </footer>
  );
}
