"use client";

import { useReducedMotion, type Transition, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export function useMotionSafe() {
  const reduced = useReducedMotion();
  const mounted = useMounted();

  return {
    mounted,
    reduced: !!reduced,
    transition: (t: Transition = { duration: 0.5 }): Transition =>
      reduced ? { duration: 0 } : t,
    variants: (v: Variants): Variants =>
      reduced
        ? Object.fromEntries(
            Object.entries(v).map(([key, value]) => [
              key,
              typeof value === "object" && value !== null && "opacity" in value
                ? { opacity: 1, x: 0, y: 0, scale: 1 }
                : value,
            ])
          )
        : v,
  };
}

export const stampVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};
