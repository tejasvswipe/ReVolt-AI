"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMotionSafe, stampVariants } from "@/lib/motion";

const steps = [
  {
    id: "contract",
    stamp: "CONTRACT",
    title: "Scope and liability transfer",
    detail:
      "You define device count, locations, and retention requirements. ReVolt accepts chain-of-custody responsibility from pickup.",
  },
  {
    id: "collection",
    stamp: "COLLECTED",
    title: "On-site pickup with signed intake",
    detail:
      "Devices are logged by serial number at your office. You receive an intake manifest the same day.",
  },
  {
    id: "wipe",
    stamp: "WIPED",
    title: "Certified data destruction",
    detail:
      "Each drive will be wiped to NIST 800-88 guidelines. Certificates are designed to tie to serial numbers, not batch guesses."
  },
  {
    id: "report",
    stamp: "REPORTED",
    title: "Audit-ready documentation",
    detail:
      "A consolidated report covers wipe results, handling dates, and personnel signatures — formatted for internal audit.",
  },
  {
    id: "recycler",
    stamp: "HANDOFF",
    title: "Licensed recycler transfer",
    detail:
       "Devices will move only to verified recyclers. Handoff records are designed to include license numbers and transfer timestamps, later on we will start our own unit"}
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { mounted, reduced, variants } = useMotionSafe();

  const shouldAnimate = mounted && !reduced;

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="how-heading"
    >
      <h2
        id="how-heading"
        className="font-display text-2xl font-semibold text-ink md:text-3xl"
      >
        How the audit trail is built
      </h2>
      <p className="mt-3 max-w-2xl text-steel">
        Each entry stamps in as custody passes — the same order your compliance
        team expects to see in a review.
      </p>

      <ol className="relative mt-12 space-y-0">
        {/* Vertical connector line */}
        <div
          className="absolute left-[1.125rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-ink/10 md:block"
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <motion.li
            key={step.id}
            className="relative flex gap-6 pb-10 last:pb-0 md:gap-8"
            initial={shouldAnimate ? "hidden" : "visible"}
            animate={shouldAnimate ? (inView ? "visible" : "hidden") : "visible"}
            variants={variants(stampVariants)}
            transition={{ delay: shouldAnimate ? index * 0.18 : 0 }}
          >
            {/* Step number bubble */}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-xs font-semibold text-copper">
              {index + 1}
            </div>

            {/* Step card */}
            <div className="min-w-0 flex-1 rounded border border-ink/10 bg-white/50 p-5 md:p-6">
              <span
                className="stamp-mark inline-block border border-copper/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-copper"
                aria-hidden="true"
              >
                {step.stamp}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {step.detail}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
