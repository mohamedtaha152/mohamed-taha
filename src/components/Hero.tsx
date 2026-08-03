"use client";

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
      <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-accent-2/18 blur-[110px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-3/14 blur-[100px] animate-float" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-5 sm:gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-5 sm:gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-muted shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-display text-lg font-medium text-muted"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t.hero.name}</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="font-display text-xl font-semibold text-muted sm:text-3xl lg:text-4xl"
          >
            {t.hero.role}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm leading-relaxed text-muted sm:text-base"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
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
        </motion.div>

        {/* Visual / Avatar */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-xs lg:max-w-sm"
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

            {/* Floating badges - hidden on mobile, shown on tablet+ */}
            <motion.div
              className="absolute -top-2 left-0 hidden sm:flex sm:items-center sm:gap-2 sm:rounded-2xl sm:border sm:border-line sm:bg-card sm:px-4 sm:py-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-500">
                <BoltIcon className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold">GSAP</p>
                <p className="text-xs text-muted">Animations</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 top-1/4 hidden sm:flex sm:items-center sm:gap-2 sm:rounded-2xl sm:border sm:border-line sm:bg-card sm:px-4 sm:py-3"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-500">
                <CodeIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">React.js</p>
                <p className="text-xs text-muted">Three.js</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-4 hidden sm:flex sm:items-center sm:gap-2 sm:rounded-2xl sm:border sm:border-line sm:bg-card sm:px-4 sm:py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-500">
                <SparkleIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Framer Motion</p>
                <p className="text-xs text-muted">Tailwind CSS</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar - responsive */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="show"
        className="relative mt-10 flex flex-col items-center gap-5 px-5 sm:absolute sm:inset-x-0 sm:bottom-8 sm:mx-auto sm:mt-0 sm:flex-row sm:w-full sm:max-w-6xl sm:items-end sm:justify-between sm:gap-10 lg:px-8"
      >
        <div className="flex items-center gap-6 sm:gap-10">
          <div>
            <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
              <CountUp to={2} suffix="+" duration={2} />
            </p>
            <p className="text-xs text-muted sm:text-sm">{t.hero.quickStats}</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
              <CountUp to={4} suffix="+" duration={2} delay={0.2} />
            </p>
            <p className="text-xs text-muted sm:text-sm">{t.hero.projectsBuilt}</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
              <CountUp to={3} duration={2} delay={0.4} />
            </p>
            <p className="text-xs text-muted sm:text-sm">{t.hero.languages}</p>
          </div>
        </div>

        <a
          href="#about"
          className="group hidden flex-col items-center gap-2 text-sm text-muted transition-colors hover:text-foreground sm:flex"
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
