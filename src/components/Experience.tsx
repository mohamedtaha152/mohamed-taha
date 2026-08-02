"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeRight, scaleIn } from "@/lib/motion";
import { BriefcaseIcon } from "@/components/ui/Icons";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-accent-3/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          heading={t.experience.heading}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Timeline line */}
          <div className="absolute inset-y-0 left-5 w-px bg-gradient-to-b from-accent/60 via-accent-3/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-8 sm:gap-12">
            {t.experience.items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  variants={fadeRight}
                  className="relative flex items-start gap-4 sm:gap-6 md:gap-0"
                >
                  {/* Node */}
                  <div className="absolute left-5 top-6 -translate-x-1/2 md:left-1/2">
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-accent shadow-lg shadow-accent/10 sm:h-10 sm:w-10">
                      <BriefcaseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/20" />
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    variants={scaleIn}
                    className={`ml-12 w-full rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:ml-14 sm:rounded-3xl sm:p-7 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto"
                    }`}
                  >
                    <span className="mb-2 inline-flex rounded-full border border-line bg-background px-3 py-1 text-xs font-semibold text-accent sm:mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mb-2 mt-0.5 text-sm font-medium text-accent-2 sm:mb-3">
                      {item.company}
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-muted sm:mb-4">
                      {item.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-3" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}