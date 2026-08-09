"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  SunIcon,
  MoonIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/ui/Icons";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
] as const;

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  const navLabels: Record<(typeof sectionIds)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    experience: t.nav.experience,
    education: t.nav.education,
    contact: t.nav.contact,
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 lg:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight sm:text-xl"
        >
          <span className="text-gradient">ENG</span>
          <span className="text-muted">.MOHAMED TAHA</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{navLabels[id]}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href="/cv/MT-CV.pdf"
            download="Mohamed-Taha-CV.pdf"
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:opacity-85 md:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            <span className="hidden lg:inline">{t.nav.downloadCv}</span>
            <span className="lg:hidden">CV</span>
          </a>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="relative inline-flex h-9 items-center gap-1 rounded-full border border-line bg-card px-3 text-sm font-semibold text-muted transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            <span className={`text-xs ${lang === "en" ? "text-foreground" : "opacity-60"}`}>
              EN
            </span>
            <span className="text-muted/40">/</span>
            <span className={`text-xs ${lang === "ar" ? "text-foreground" : "opacity-60"}`}>
              ع
            </span>
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex"
                >
                  {isDark ? (
                    <SunIcon className="h-[18px] w-[18px]" />
                  ) : (
                    <MoonIcon className="h-[18px] w-[18px]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-card lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      activeSection === id
                        ? "bg-accent/10 text-foreground"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    {navLabels[id]}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3 border-t border-line pt-4">
                <a
                  href="https://github.com/mohamedtaha152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamedtaha15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="/cv/MT-CV.pdf"
                  download="Mohamed-Taha-CV.pdf"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background"
                >
                  <DownloadIcon className="h-4 w-4" />
                  {t.nav.downloadCv}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
