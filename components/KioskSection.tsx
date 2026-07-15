"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionSafe } from "@/lib/motion";
import Image from "next/image";

// Callout positions are expressed as % from left (x) and % from top (y)
// of the image bounding box, calibrated for the wide 3:2 kiosk render.
const kioskParts = [
  {
    id: "camera",
    label: "HD surveillance camera",
    detail: "Records every intake session. Footage tied to custody record ID.",
    side: "top" as const,
    xPct: 38,
    yPct: 4,
    delay: 0.1,
  },
  {
    id: "beacon",
    label: "Amber status beacon",
    detail: "Active during an open intake session. Idle when sealed.",
    side: "right" as const,
    xPct: 90,
    yPct: 8,
    delay: 0.22,
  },
  {
    id: "screen",
    label: "Compliance manifest screen",
    detail: "Displays custody receipt in real time. Operator-signs before any device leaves.",
    side: "left" as const,
    xPct: 10,
    yPct: 38,
    delay: 0.36,
  },
  {
    id: "brand",
    label: "ReVolt AI unit",
    detail: "Each kiosk is a registered custody point on your audit trail.",
    side: "right" as const,
    xPct: 75,
    yPct: 56,
    delay: 0.50,
  },
  {
    id: "intake",
    label: "Wide device intake slot",
    detail: "Accepts laptops, drives, phones. Serial number captured on insertion.",
    side: "left" as const,
    xPct: 8,
    yPct: 74,
    delay: 0.64,
  },
  {
    id: "keypad",
    label: "Keypad & badge reader",
    detail: "Authorised personnel only. Every session logged by employee ID.",
    side: "right" as const,
    xPct: 88,
    yPct: 44,
    delay: 0.78,
  },
  {
    id: "base",
    label: "Tamper-evident anchors",
    detail: "Floor-bolted. Sensor alerts on unauthorised tilt or removal attempt.",
    side: "bottom" as const,
    xPct: 55,
    yPct: 94,
    delay: 0.90,
  },
];

type Side = "left" | "right" | "top" | "bottom";

function CalloutPin({
  part,
  inView,
  shouldAnimate,
}: {
  part: (typeof kioskParts)[0];
  inView: boolean;
  shouldAnimate: boolean;
}) {
  const side = part.side as Side;

  const initX =
    side === "left" ? 16 : side === "right" ? -16 : 0;
  const initY =
    side === "top" ? 12 : side === "bottom" ? -12 : 0;

  const isLeft = side === "left";
  const isTop = side === "top" || side === "bottom";

  return (
    <motion.div
      className="absolute"
      style={{ left: `${part.xPct}%`, top: `${part.yPct}%` }}
      initial={shouldAnimate ? { opacity: 0, x: initX, y: initY } : { opacity: 1, x: 0, y: 0 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initX, y: initY }}
      transition={{
        delay: shouldAnimate ? part.delay : 0,
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Connector dot */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-copper bg-paper shadow-sm z-10" />

      {/* Label card — positioned based on side */}
      <div
        className={`absolute z-20 w-36 md:w-44 rounded border border-ink/10 bg-white/85 px-2.5 py-2 shadow-md backdrop-blur-sm
          ${isTop
            ? "left-1/2 -translate-x-1/2 " + (side === "top" ? "bottom-4" : "top-4")
            : isLeft
              ? "left-4 -translate-y-1/2"
              : "right-4 -translate-x-full -translate-y-1/2"
          }
        `}
      >
        <p className="font-display text-[9px] font-semibold uppercase tracking-widest text-copper leading-tight">
          {part.label}
        </p>
        <p className="mt-0.5 text-[10px] leading-snug text-steel">
          {part.detail}
        </p>
      </div>
    </motion.div>
  );
}

export default function KioskSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { mounted, reduced } = useMotionSafe();
  const shouldAnimate = mounted && !reduced;

  return (
    <section
      ref={ref}
      className="overflow-hidden border-y border-ink/8 bg-white/20 py-16 md:py-24"
      aria-labelledby="kiosk-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-widest text-copper">
            The hardware
          </p>
          <h2
            id="kiosk-heading"
            className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl"
          >
            A secure intake station you can place in your office
          </h2>
          <p className="mt-3 text-steel">
            Each ReVolt station is a registered custody transfer point. Devices
            inserted here are serial-logged, camera-witnessed, and chain-sealed
            from that moment forward.
          </p>
        </div>

        {/* Kiosk diagram — wide, with annotated callouts */}
        <div className="relative mx-auto mt-14 max-w-4xl">

          {/* Machine image slides up on scroll */}
          <motion.div
            className="relative w-full"
            initial={shouldAnimate ? { opacity: 0, y: 56 } : { opacity: 1, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
            transition={{ duration: 0.60, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/kiosk.png"
              alt="ReVolt AI wide secure e-waste retirement station — a graphite wide-format cabinet with HD camera, compliance manifest touchscreen, and wide device intake slot"
              width={1200}
              height={800}
              className="h-auto w-full rounded-lg drop-shadow-2xl"
              priority={false}
            />

            {/* Callout pins overlay — positioned over the image */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {kioskParts.map((part) => (
                <CalloutPin
                  key={part.id}
                  part={part}
                  inView={inView}
                  shouldAnimate={shouldAnimate}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spec bar */}
        <motion.div
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-0 divide-x divide-ink/8 rounded-lg border border-ink/10 bg-white/50 text-center sm:grid-cols-4"
          initial={shouldAnimate ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            delay: shouldAnimate ? 1.05 : 0,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {[
            { value: "IP65", label: "Ingress protection" },
            { value: "AES-256", label: "On-device encryption" },
            { value: "4K", label: "Camera resolution" },
            { value: "24 / 7", label: "Remote monitoring" },
          ].map((item) => (
            <div key={item.value} className="px-4 py-5">
              <p className="font-display text-xl font-semibold text-ink">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-steel">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
