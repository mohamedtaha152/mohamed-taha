"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  heading: string;
};

export function SectionHeading({
  title,
  subtitle,
  heading,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center"
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm font-medium text-muted shadow-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {title}
      </motion.span>
      <motion.span
        variants={fadeUp}
        className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {heading}
      </motion.h2>
    </motion.div>
  );
}