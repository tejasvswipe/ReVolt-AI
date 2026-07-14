"use client";

import { motion } from "framer-motion";
import { useMotionSafe, stampVariants } from "@/lib/motion";

const manifestLines = [
  { label: "Device model", value: "Dell Latitude 7420 × 48 units" },
  { label: "Wipe certification", value: "NIST 800-88 Rev. 1 — 2026-07-14 09:41 IST" },
  { label: "Recycler handoff", value: "Licensed partner #MH-REC-2847" },
  { label: "Report ID", value: "RVLT-2026-07-14-004821" },
];

export default function Hero() {
  const { mounted, reduced, variants } = useMotionSafe();

  // On server and before mount: render everything visible (no animation state)
  // After mount: run the stamp-in animation if motion is allowed
  const shouldAnimate = mounted && !reduced;

  return (
    <section
      id="product"
      className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Left: copy */}
      <div>
        <p className="font-display text-xs uppercase tracking-widest text-copper">
          IT asset disposition
        </p>
        <h1
          id="hero-heading"
          className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-[2.75rem]"
        >
          When devices leave your office, the audit trail shouldn&apos;t leave
          with them.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-steel">
          You sign for every retirement. If data surfaces after handoff, you
          answer for it. ReVolt gives you on-site collection, certified wiping,
          and a documented chain of custody before devices reach a licensed
          recycler.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            Request a pilot conversation
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center text-sm font-medium text-ink underline decoration-copper/40 underline-offset-4 transition-colors hover:decoration-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            See the chain of custody →
          </a>
        </div>
      </div>

      {/* Right: animated compliance manifest */}
      <div
        className="rounded-lg border border-ink/10 bg-white/60 p-6 shadow-sm md:p-8"
        role="img"
        aria-label="Simulated device retirement compliance manifest"
      >
        {/* Manifest header */}
        <div className="flex items-start justify-between border-b border-ink/10 pb-4">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-steel">
              Retirement manifest
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">
              Batch #RVLT-2026-07-14
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-signal"
              aria-hidden="true"
            />
            Certified
          </span>
        </div>

        {/* Manifest lines - stamp in sequentially after mount */}
        <dl className="mt-6 space-y-0">
          {manifestLines.map((line, index) => (
            <motion.div
              key={line.label}
              className="manifest-line flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              initial={shouldAnimate ? "hidden" : "visible"}
              animate="visible"
              variants={variants(stampVariants)}
              transition={{
                delay: shouldAnimate ? 0.3 + index * 0.22 : 0,
              }}
            >
              <dt className="stamp-mark text-xs uppercase tracking-wide text-steel">
                {line.label}
              </dt>
              <dd className="font-display text-sm font-medium text-ink sm:text-right">
                {line.value}
              </dd>
            </motion.div>
          ))}
        </dl>

        <motion.p
          className="stamp-mark mt-6 border-t border-dashed border-ink/15 pt-4 text-xs text-steel"
          initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? 1.25 : 0, duration: 0.4 }}
        >
          Generated for audit retention · Immutable record · Do not discard
        </motion.p>
      </div>
    </section>
  );
}
