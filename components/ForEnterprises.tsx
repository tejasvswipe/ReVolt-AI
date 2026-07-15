import type { ReactNode } from "react";

function ClayIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className="clay-badge flex h-14 w-14 shrink-0 items-center justify-center text-copper"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

const benefits = [
  {
    id: "esg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 3h7v7H3z" />
        <path d="M14 3h7v7h-7z" />
        <path d="M3 14h7v7H3z" />
        <path d="M17.5 14a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
      </svg>
    ),
    title: "ESG reporting you can actually file",
    body: "Disposition volumes, wipe rates, and recycler credentials export in formats your sustainability team already uses — no spreadsheet rebuild.",
    tag: "Sustainability",
  },
  {
    id: "facilities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Zero extra work for facilities teams",
    body: "ReVolt handles intake logging, device tagging, and pickup coordination. Your team points us to the storage room and signs the manifest.",
    tag: "Facilities",
  },
  {
    id: "pickup",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "On-site or scheduled pickup",
    body: "Single-floor startups or multi-site enterprises — collection runs on your calendar, with intake completed before devices leave the building.",
    tag: "Logistics",
  },
];

const stats = [
  { value: "Target: 48hr custody-to-report turnaround", label: "Average custody-to-report turnaround" },
  { value: "Goal: 100% per-serial wipe certificates", label: "Per-serial wipe certificates" },
  { value:  "Planned: 7yr audit record retention", label: "Audit record retention option" },
];

export default function ForEnterprises() {
  return (
    <section
      id="for-enterprises"
      className="py-16 md:py-24"
      aria-labelledby="enterprises-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-widest text-copper">
            For enterprises
          </p>
          <h2
            id="enterprises-heading"
            className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl"
          >
            Built for the person who signs the retirement log
          </h2>
          <p className="mt-3 text-steel">
            You need defensible records, not another vendor dashboard. ReVolt
            fits how IT and Facilities teams already operate.
          </p>
        </div>

        {/* Benefits grid with claymorphism icons */}
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col gap-4 rounded-lg border border-ink/8 bg-white/30 p-6 transition-colors duration-200 hover:border-ink/15 hover:bg-white/50"
            >
              <div className="flex items-start gap-4">
                <ClayIcon>{item.icon}</ClayIcon>
                <span className="mt-3.5 font-display text-[10px] uppercase tracking-widest text-copper/70">
                  {item.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 divide-x divide-ink/8 rounded-lg border border-ink/10 bg-white/40">
          {stats.map((stat) => (
            <div key={stat.value} className="px-6 py-6 text-center">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-steel">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
