import React from "react";
import Nav from "@/components/Nav";
import ReVoltlogo from "@/components/revoltlogo";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ForEnterprises from "@/components/ForEnterprises";
import TrustCompliance from "@/components/TrustCompliance";
import KioskSection from "@/components/KioskSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Skip-to-content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper focus:outline-none"
      >
        Skip to main content
      </a>

      {/* 1. Navigation — glassmorphism */}
      <Nav />

      {/* Main Content */}
      <main id="main-content">
        {/* 2. Hero — animated compliance manifest stamps */}
        <Hero />

        {/* 3. Problem — static, intentional restraint */}
        <Problem />

        {/* 4. How It Works — scroll-triggered custody stamps */}
        <HowItWorks />

        {/* 5. For Enterprises — claymorphism icon accents */}
        <ForEnterprises />

        {/* 6. Kiosk — scroll-triggered hardware diagram */}
        <KioskSection />

        {/* 7. Trust & Compliance — bento grid dossier */}
        <TrustCompliance />

        {/* 7. CTA / Lead Form — manifest intake document */}
        <ContactForm />
      </main>

      {/* 8. Footer — minimal */}
      <footer
        className="border-t border-ink/8 py-12"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <a
                href="#"
                className="font-display text-sm font-semibold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
              >
                ReVolt<span className="text-copper">AI</span>
              </a>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Certified IT asset disposition for enterprises. On-site
                collection, NIST 800-88 data wiping, and a signed chain-of-custody
                record before handoff to licensed recyclers.
              </p>
            </div>

            {/* Contact */}
            <div className="text-xs">
              <p className="stamp-mark font-semibold uppercase tracking-widest text-ink text-[10px]">
                Compliance Contact
              </p>
              <ul className="mt-2 space-y-1.5 text-steel">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:team.revoltai4ewaste@gmail.com"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    team.revoltai4ewaste@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+918445863004"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    +91 8445863004
                  </a>
                </li>
                <li>
                 whatsapp:{" "}
                  <a
                    href="https://wa.me/918218994010"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    click here to chat
                  </a>
                </li>
                <li> linkedin:{" "}
                  <a
                    href="https://www.linkedin.com/company/revoltindia"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    linkedin.com/company/revoltindia 
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="text-xs">
              <p className="stamp-mark font-semibold uppercase tracking-widest text-ink text-[10px]">
                Legal
              </p>
              <ul className="mt-2 space-y-1.5 text-steel">
                <li>
                  <a
                    href="#terms"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    Terms of Custody Transfer
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    Data Wiping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#retention"
                    className="underline decoration-copper/30 underline-offset-2 transition-colors hover:text-ink hover:decoration-copper"
                  >
                    Audit Retention Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-2 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[11px] text-steel">
              © 2026 ReVolt AI. All rights reserved. Ref: RVLT-WEB-2026
            </p>
            <p className="font-display text-[16px] text-steel">
              "ISO 27001-Aligned · NIST 800-88 · DPDP Act Ready" → "Building toward ISO 27001 · NIST 800-88 aligned · DPDP Act aware"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
