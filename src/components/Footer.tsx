"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";
import { HeartIcon } from "@/components/ui/FooterIcons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 sm:flex-row sm:justify-between sm:gap-6 sm:py-10 lg:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight sm:text-xl">
          <span className="text-gradient">Eng</span>
          <span className="text-muted">.Mohamed Taha</span>
        </a>

        <p className="flex items-center gap-1.5 text-center text-sm text-muted">
          © {year} {t.footer.name} — {t.footer.rights}
        </p>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/mohamedtaha152"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohamedtaha15"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="mailto:mohamed.taha1562007@gmail.com"
            whileHover={{ y: -3 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </motion.a>
        </div>
      </div>

      <div className="border-t border-line py-4">
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          {t.footer.madeWith}
          <HeartIcon className="h-3.5 w-3.5 text-accent-3" />
          · Eng. Mohamed Taha
        </p>
      </div>
    </footer>
  );
}
