// "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  staggerContainer,
  fadeUp,
  fadeLeft,
  fadeRight,
} from "@/lib/motion";
import {
  ArrowRightIcon,
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SparkleIcon,
  BoltIcon,
  CodeIcon,
} from "@/components/ui/Icons";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-24 sm:pb-16"
    >
      {/* Background decor */}
      <div className="absolute inset-0 bg-grid mask-fade-bottom" />
      <div className="absolute -top-20 -left-20 h-[20rem] w-[20rem] rounded-full bg-accent/20 blur-[100px] animate-float sm:h-[30rem] sm:w-[30rem] sm:blur-[120px] sm:-top-32 sm:-left-32" />
      <div className="absolute top-1/3 -right-20 h-[20rem] w-[20rem] rounded-full bg-accent-2/18 blur-[90px] animate-float-slow sm:h-[26rem] sm:w-[26rem] sm:blur-[110px] sm:-right-32" />
      <div className="absolute bottom-0 left-1/3 h-[18rem] w-[18rem] rounded-full bg-accent-3/14 blur-[80px] animate-float sm:h-[22rem] sm:w-[22rem] sm:blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 sm:gap-12 md:grid md:grid-cols-[1.2fr_0.8fr] md:items-start md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center gap-5 sm:gap-6 md:items-start"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-2 text-sm font-medium text-muted shadow-sm sm:px-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-display text-center text-lg font-medium text-muted"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-center text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t.hero.name}</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="font-display text-center text-xl font-semibold text-muted sm:text-3xl lg:text-4xl"
          >
            {t.hero.role}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xs text-center text-base leading-relaxed text-muted sm:max-w-lg sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-center text-sm leading-relaxed text-muted sm:max-w-xl sm:text-base"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-85"
            >
              {t.hero.viewWork}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:text-accent"
            >
              {t.hero.getInTouch}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="https://github.com/mohamedtaha152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedtaha15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohamed.taha1562007@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stats - in flow on mobile, hidden on desktop (shown absolute below) */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-10 md:hidden"
          >
            <div>
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                <CountUp to={2} suffix="+" duration={2} />
              </p>
              <p className="text-xs text-muted sm:text-sm">
                {t.hero.quickStats}
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                <CountUp to={4} suffix="+" duration={2} delay={0.2} />
              </p>
              <p className="text-xs text-muted sm:text-sm">
                {t.hero.projectsBuilt}
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                <CountUp to={3} duration={2} delay={0.4} />
              </p>
              <p className="text-xs text-muted sm:text-sm">
                {t.hero.languages}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual / Avatar - appears after text on mobile, right column on desktop */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-xs lg:max-w-sm"
        >
          <div className="relative aspect-square">
            {/* Rotating gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--accent), var(--accent-3), var(--accent-2), var(--accent))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 rounded-full bg-background" />
            <div className="absolute inset-6 overflow-hidden rounded-full bg-gradient-to-br from-card to-card/60 shadow-2xl shadow-accent/10 ring-1 ring-line">
              <Image
                src="/profile.jpeg"
                alt="Mohamed Taha"
                fill
                sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badges - shown on all screens */}
            <motion.div
              className="absolute -top-2 left-0 flex items-center gap-1.5 rounded-xl border border-line bg-card px-2.5 py-2 shadow-lg sm:-top-2 sm:-left-6 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 text-violet-500 sm:h-9 sm:w-9 sm:rounded-xl">
                <BoltIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold sm:text-sm">GSAP</p>
                <p className="hidden text-xs text-muted sm:block">Animations</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/4 flex items-center gap-1.5 rounded-xl border border-line bg-card px-2.5 py-2 shadow-lg sm:-right-4 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-500 sm:h-9 sm:w-9 sm:rounded-xl">
                <CodeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold sm:text-sm">React.js</p>
                <p className="hidden text-xs text-muted sm:block">Three.js</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-1 -left-2 flex items-center gap-1.5 rounded-xl border border-line bg-card px-2.5 py-2 shadow-lg sm:-bottom-3 sm:-left-4 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-fuchsia-500/15 text-fuchsia-500 sm:h-9 sm:w-9 sm:rounded-xl">
                <SparkleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold sm:text-sm">Framer Motion</p>
                <p className="hidden text-xs text-muted sm:block">Tailwind CSS</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar - absolute on desktop only */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="show"
        className="absolute inset-x-0 bottom-8 hidden w-full max-w-6xl items-end justify-between gap-10 px-5 md:flex lg:px-8"
      >
        <div className="flex items-center gap-10">
          <div>
            <p className="font-display text-3xl font-bold text-gradient">
              <CountUp to={2} suffix="+" duration={2} />
            </p>
            <p className="text-sm text-muted">{t.hero.quickStats}</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-gradient">
              <CountUp to={4} suffix="+" duration={2} delay={0.2} />
            </p>
            <p className="text-sm text-muted">{t.hero.projectsBuilt}</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-gradient">
              <CountUp to={3} duration={2} delay={0.4} />
            </p>
            <p className="text-sm text-muted">{t.hero.languages}</p>
          </div>
        </div>

        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          {t.hero.scroll}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card"
          >
            <ArrowDownIcon className="h-4 w-4" />
          </motion.span>
        </a>
      </motion.div>

      {/* Mobile-only scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute inset-x-0 bottom-4 flex justify-center sm:hidden"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted"
        >
          <ArrowDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
