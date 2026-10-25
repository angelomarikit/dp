import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, sectionIds, siteConfig } from "../../data/site";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../lib/scrollTo";
import { BrandLogo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const spyIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const active = useScrollSpy(spyIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuOpen || !navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    scrollToSection(href.replace("#", ""));
    setMenuOpen(false);
  };

  const solid = scrolled || menuOpen;
  const onHero = !solid;

  const linkClass = (isActive: boolean) => {
    if (solid) {
      return isActive
        ? "text-brand-accent"
        : "text-white/80 hover:text-white";
    }
    return isActive ? "text-white" : "text-white/75 hover:text-white";
  };

  const headerHeight = onHero
    ? "min-h-[15rem] py-3 lg:min-h-[16rem] lg:py-4"
    : "min-h-[14.5rem] py-2.5 lg:min-h-[15.5rem] lg:py-3";

  return (
    <motion.header
      ref={navRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/10 bg-brand-dark/92 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container
        className={`relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 lg:grid-cols-[minmax(18rem,40rem)_minmax(0,1fr)_auto] xl:grid-cols-[minmax(20rem,44rem)_minmax(0,1fr)_auto] 2xl:grid-cols-[minmax(22rem,48rem)_minmax(0,1fr)_auto] ${headerHeight}`}
      >
        <button
          type="button"
          onClick={() => handleNav(`#${sectionIds.home}`)}
          className="col-start-1 z-10 max-w-[calc(100%-4.25rem)] shrink-0 justify-self-start self-center lg:max-w-full lg:min-w-[16rem]"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandLogo
            variant="navMobile"
            onDark={onHero || solid}
            className="lg:hidden"
          />
          <BrandLogo variant="bar" onDark className="hidden lg:block" />
        </button>

        <nav
          className="col-start-1 col-end-3 row-start-1 hidden min-w-0 items-center justify-center gap-3 lg:col-start-2 lg:col-end-3 lg:flex xl:gap-6 2xl:gap-8"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className={`text-hero shrink-0 text-sm tracking-[0.08em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-secondary xl:text-base 2xl:text-lg ${linkClass(isActive)}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="col-start-2 flex shrink-0 items-center justify-self-end gap-1 sm:gap-2 lg:col-start-3 lg:gap-4 xl:gap-5">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className={`rounded-sm p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary lg:hidden ${
              solid ? "text-white/90" : "text-white/90"
            }`}
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone size={20} aria-hidden />
          </a>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className={`hidden items-center gap-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary lg:inline-flex xl:text-base ${
              solid ? "text-white/85 hover:text-white" : "text-white/80 hover:text-white"
            }`}
            title={siteConfig.phoneDisplay}
          >
            <Phone size={18} aria-hidden />
            <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
          </a>

          <Button
            variant="primary"
            className="text-hero hidden shrink-0 px-5 py-3 text-sm tracking-[0.08em] uppercase lg:inline-flex xl:px-7 xl:py-3.5 xl:text-base"
            onClick={() => handleNav(`#${sectionIds.contact}`)}
          >
            Request a Survey
          </Button>

          <button
            type="button"
            className="rounded-sm p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-brand-dark/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-hero rounded-sm px-2 py-3 text-left text-xl tracking-[0.08em] text-white/90 uppercase hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-secondary"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-hero rounded-sm px-2 py-3 text-left text-lg tracking-wide text-white/85 hover:bg-white/5"
              >
                {siteConfig.phoneDisplay}
              </a>
              <Button
                className="text-hero mt-2 w-full text-base tracking-[0.08em] uppercase"
                onClick={() => handleNav(`#${sectionIds.contact}`)}
              >
                Request a Survey
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
