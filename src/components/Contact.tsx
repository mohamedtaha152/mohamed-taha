"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/motion";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "mohamed.taha1562007@gmail.com";
  const phone = "+201099940939";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const cards = [
    {
      icon: MailIcon,
      label: t.contact.email,
      value: email,
      href: `mailto:${email}`,
      action: handleCopy,
      actionLabel: copied ? t.contact.copied : t.contact.copyEmail,
      actionIcon: copied ? CheckIcon : CopyIcon,
    },
    {
      icon: PhoneIcon,
      label: t.contact.phone,
      value: phone,
      href: `tel:${phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: MapPinIcon,
      label: t.contact.location,
      value: t.contact.locationValue,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          heading={t.contact.heading}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted sm:mb-14 sm:text-lg"
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accent-3/15 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-sm font-medium text-muted">{card.label}</p>
                <p
                  className="mt-1 break-all text-sm font-semibold"
                  dir="ltr"
                >
                  {card.value}
                </p>

                {card.action ? (
                  <button
                    onClick={card.action}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent-3"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? "check" : "copy"}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="inline-flex items-center gap-1.5"
                      >
                        <card.actionIcon className="h-3.5 w-3.5" />
                        {copied ? t.contact.copied : t.contact.copyEmail}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                ) : (
                  <>
                    {card.href && (
                      <a
                        href={card.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent-3"
                      >
                        {card.label === t.contact.phone
                          ? t.contact.callMe
                          : t.contact.sendMessage}
                        <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
                      </a>
                    )}
                  </>
                )}
              </>
            );

            return (
              <motion.div
                key={card.label}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:rounded-3xl sm:p-7"
              >
                <div className="flex flex-1 flex-col">{inner}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-5 sm:mt-14 sm:gap-6"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {t.contact.followMe}
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.a
              href="https://github.com/mohamedtaha152"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-card text-muted shadow-sm transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohamedtaha15"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-card text-muted shadow-sm transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ y: -4 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-card text-muted shadow-sm transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="Email"
            >
              <MailIcon className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}