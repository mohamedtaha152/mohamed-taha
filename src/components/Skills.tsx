"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";
import { CodeIcon, CheckIcon, GlobeIcon } from "@/components/ui/Icons";
import {
  Cube3DIcon,
  PaletteIcon,
  WrenchIcon,
} from "@/components/ui/SkillsIcons";

export function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      key: "core" as const,
      icon: CodeIcon,
      gradient: "from-violet-500 to-fuchsia-500",
      items: t.skills.core,
    },
    {
      key: "animation" as const,
      icon: Cube3DIcon,
      gradient: "from-cyan-500 to-blue-500",
      items: t.skills.animation,
    },
    {
      key: "styling" as const,
      icon: PaletteIcon,
      gradient: "from-pink-500 to-rose-500",
      items: t.skills.styling,
    },
    {
      key: "tools" as const,
      icon: WrenchIcon,
      gradient: "from-emerald-500 to-teal-500",
      items: t.skills.tools,
    },
    {
      key: "languages" as const,
      icon: GlobeIcon,
      gradient: "from-indigo-500 to-purple-500",
      items: t.skills.languages,
    },
  ];

  const marqueeItems = [
    ...t.skills.core,
    ...t.skills.animation,
    ...t.skills.styling,
    ...t.skills.tools,
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          heading={t.skills.heading}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:rounded-3xl sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg sm:h-12 sm:w-12`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.1em] text-muted sm:text-xs sm:tracking-[0.15em]">
                    {t.skills.categories[cat.key]}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted transition-colors group-hover:text-foreground"
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mt-20 overflow-hidden border-y border-line bg-card/60 py-5 backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4" dir="ltr">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={`${item}-${i}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-card px-5 py-2 font-display text-sm font-semibold text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-3" />
                {item}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}