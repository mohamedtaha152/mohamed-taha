"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";
import {
  ExternalLinkIcon,
  GithubIcon,
  LaptopIcon,
  BuildingIcon,
  GamepadIcon,
  InstitutionIcon,
} from "@/components/ui/Icons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const projectIcons: Record<string, ComponentType<IconProps>> = {
  laptop: LaptopIcon,
  institution: InstitutionIcon,
  game: GamepadIcon,
  building: BuildingIcon,
};

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          heading={t.projects.heading}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg"
        >
          {t.projects.description}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2"
        >
          {t.projects.projects.map((project) => {
            const Icon = projectIcons[project.icon] ?? LaptopIcon;
            return (
              <motion.article
                key={project.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-card shadow-sm transition-colors hover:border-accent/40"
              >
                {/* Card top visual */}
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-48`}
                >
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
                  <Icon className="relative h-16 w-16 text-white drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-20 sm:w-20" />

                  <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {t.projects.featured}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-lg transition-transform hover:scale-105"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      {t.projects.viewLive}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform hover:scale-105"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 p-5 sm:gap-4 sm:p-7">
                  <h3 className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-line bg-background px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}