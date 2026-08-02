"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  staggerContainer,
  fadeUp,
  fadeLeft,
  scaleIn,
} from "@/lib/motion";
import {
  DownloadIcon,
  CodeIcon,
  BoltIcon,
  BrainIcon,
} from "@/components/ui/Icons";

const traitIcons = [CodeIcon, BoltIcon, BrainIcon];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.about.title}
          subtitle={t.about.subtitle}
          heading={t.about.heading}
        />

        <div className="grid items-start gap-10 sm:gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: visual + quick code card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-accent-3/10 to-accent-2/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-muted">
                  about-me.tsx
                </span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed sm:p-6 sm:text-[13px] lg:text-sm" dir="ltr">
                <p className="text-muted">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-accent-2">developer</span> = {"{"}
                </p>
                <p className="pl-5 text-muted">
                  <span className="text-accent-3">name</span>:{" "}
                  <span className="text-emerald-500">"Mohamed Taha"</span>,
                </p>
                <p className="pl-5 text-muted">
                  <span className="text-accent-3">role</span>:{" "}
                  <span className="text-emerald-500">
                    "Frontend Developer"
                  </span>,
                </p>
                <p className="pl-5 text-muted">
                  <span className="text-accent-3">stack</span>: [,
                </p>
                <p className="pl-8 text-muted">
                  <span className="text-emerald-500">"React.js"</span>,
                </p>
                <p className="pl-8 text-muted">
                  <span className="text-emerald-500">"Three.js"</span>,
                </p>
                <p className="pl-8 text-muted">
                  <span className="text-emerald-500">"GSAP"</span>,
                </p>
                <p className="pl-8 text-muted">
                  <span className="text-emerald-500">"Tailwind CSS"</span>,
                </p>
                <p className="pl-8 text-muted">
                  <span className="text-emerald-500">
                    "Framer Motion"
                  </span>,
                </p>
                <p className="pl-5 text-muted">],</p>
                <p className="pl-5 text-muted">
                  <span className="text-accent-3">location</span>:{" "}
                  <span className="text-emerald-500">"Egypt"</span>,
                </p>
                <p className="pl-5 text-muted">
                  <span className="text-accent-3">openToWork</span>:{" "}
                  <span className="text-amber-400">true</span>,
                </p>
                <p className="text-muted">{"};"}</p>
                <p className="mt-2">
                  <span className="text-accent">export default</span>{" "}
                  <span className="text-accent-2">developer</span>;
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -right-4 -top-5 flex items-center gap-2 rounded-2xl border border-line bg-card px-4 py-3 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm font-semibold">
                3D + Motion <span className="text-muted">Enthusiast</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: bio + traits */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-xl font-bold leading-snug sm:text-2xl lg:text-3xl"
            >
              {t.about.heading}
            </motion.h3>

            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {t.about.p1}
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {t.about.p2}
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {t.about.p3}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {t.about.traits.map((trait, i) => {
                const Icon = traitIcons[i % traitIcons.length];
                return (
                  <motion.div
                    key={trait.title}
                    variants={scaleIn}
                    className="group rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-5"
                  >
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-3/15 text-accent transition-colors group-hover:text-accent-3">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mb-1 font-semibold leading-snug">
                      {trait.title}
                    </h4>
                    <p className="text-sm text-muted">{trait.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="/cv/MT-CV.pdf"
                download="Mohamed-Taha-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-85"
              >
                <DownloadIcon className="h-4 w-4" />
                {t.about.downloadCv}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}