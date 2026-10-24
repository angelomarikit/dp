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

  return (
    <motion.header
      ref={navRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/10 bg-brand-dark/92 shadow-lg shadow-black/20 backdrop-blur-md"
          : "overflow-visible border-b border-transparent bg-transparent"
      }`}
    >
      <Container
        className={`relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 overflow-visible sm:gap-3 lg:grid-cols-[auto_1fr_auto] ${
          onHero
            ? "min-h-[15rem] py-3 md:min-h-[16rem] lg:min-h-[clamp(7rem,14vw,11rem)] lg:py-4 xl:min-h-[clamp(7.5rem,15vw,12rem)]"
            : "min-h-[15rem] py-2.5 md:min-h-[16rem] lg:h-[6rem] lg:min-h-0 lg:py-0"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNav(`#${sectionIds.home}`)}
          className="col-start-1 min-w-0 max-w-[calc(100%-3.5rem)] shrink justify-self-start self-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary lg:hidden"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandLogo variant="navMobile" onDark={onHero || solid} />
        </button>

        <button
          type="button"
          onClick={() => handleNav(`#${sectionIds.home}`)}
          className={`hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary lg:col-start-1 lg:block ${
            onHero
              ? "absolute top-1/2 z-30 -translate-y-1/2 left-[clamp(2.75rem,9vw,12rem)] xl:left-[clamp(3.5rem,11vw,15rem)] 2xl:left-[clamp(4rem,12vw,17rem)]"
              : "justify-self-start"
          }`}
          aria-label={`${siteConfig.name} home`}
        >
          <BrandLogo variant={onHero ? "navLarge" : "bar"} onDark />
        </button>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-11 2xl:gap-14"
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
                className={`text-hero text-xl tracking-[0.1em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-secondary xl:text-2xl xl:tracking-[0.11em] 2xl:text-3xl ${linkClass(isActive)}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center justify-self-end lg:col-start-3 lg:flex lg:gap-8 lg:-translate-x-8 xl:gap-10 xl:-translate-x-10 2xl:gap-12 2xl:-translate-x-12">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className={`inline-flex items-center gap-2.5 text-lg font-medium whitespace-nowrap transition-colors xl:text-xl ${
              solid ? "text-white/85 hover:text-white" : "text-white/80 hover:text-white"
            }`}
          >
            <Phone size={20} aria-hidden />
            {siteConfig.phoneDisplay}
          </a>

          <Button
            variant="primary"
            className="text-hero ml-1 shrink-0 px-8 py-4 text-lg tracking-[0.08em] uppercase xl:ml-2 xl:px-10 xl:py-[1.125rem] xl:text-xl 2xl:text-2xl"
            onClick={() => handleNav(`#${sectionIds.contact}`)}
          >
            Request a Survey
          </Button>
        </div>

        <div className="col-start-2 flex items-center justify-self-end gap-2 lg:col-start-3 lg:hidden">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-sm p-2 text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            className="rounded-sm p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
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
