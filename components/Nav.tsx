"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#for-enterprises", label: "For Enterprises" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
<a
  href="/"
  className="flex items-center transition-opacity hover:opacity-90"
>
  <Image
    src="/logo.png"
    alt="ReVolt AI"
    width={180}
    height={50}
    priority
    className="h-10 w-auto md:h-12"
  />
</a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-steel transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-md bg-ink px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper md:inline-flex"
        >
          Request a pilot
        </a>

        {/* Mobile hamburger (neumorphism) */}
        <button
          type="button"
          className="neu-control flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="2" y1="2" x2="14" y2="14" />
                <line x1="14" y1="2" x2="2" y2="14" />
              </>
            ) : (
              <>
                <line x1="2" y1="4" x2="14" y2="4" />
                <line x1="2" y1="8" x2="14" y2="8" />
                <line x1="2" y1="12" x2="14" y2="12" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/8 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-sm text-steel transition-colors hover:bg-ink/5 hover:text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-ink/8 pt-3">
                <a
                  href="#contact"
                  className="block rounded-md bg-ink px-3 py-2.5 text-center text-sm font-medium text-paper"
                  onClick={() => setOpen(false)}
                >
                  Request a pilot
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
