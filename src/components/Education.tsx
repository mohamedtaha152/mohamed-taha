"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/motion";
import { GraduationCapIcon } from "@/components/ui/Icons";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.education.title}
          subtitle={t.education.subtitle}
          heading={t.education.heading}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2"
        >
          {t.education.items.map((item) => (
            <motion.div
              key={item.degree}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:rounded-3xl sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-accent-3/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-3 text-white shadow-lg sm:h-12 sm:w-12">
                    <GraduationCapIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="rounded-full border border-line bg-background px-3 py-1 text-xs font-semibold text-accent">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold leading-snug tracking-tight sm:text-lg">
                  {item.degree}
                </h3>
                <p className="mb-2 mt-1 text-sm font-medium text-accent-2 sm:mb-3">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}