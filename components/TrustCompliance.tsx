const trustItems = [
  {
    id: "iso",
    span: "md:col-span-7",
    label: "Certification",
    title: "ISO 27001-aligned handling",
    body: "Information security controls mapped to asset disposition workflows. Documentation structured for SOC and ISO audit requests.",
    emphasis: true,
    tag: "Information Security",
  },
  {
    id: "nist",
    span: "md:col-span-5",
    label: "Wipe standard",
    title: "NIST 800-88 Rev. 1",
    body: "Clear, Purge, or Destroy methods applied per device type with per-serial certificates. No batch averages.",
    tag: "Data Destruction",
  },
  {
    id: "r2",
    span: "md:col-span-4",
    label: "Recycler licensing",
    title: "R2 & e-Stewards partners",
    body: "Handoff only to licensed recyclers with verifiable registration numbers on every transfer record.",
    tag: "Downstream Control",
  },
  {
    id: "dpdp",
    span: "md:col-span-4",
    label: "Data protection",
    title: "DPDP Act readiness",
    body: "Custody records support India's Digital Personal Data Protection Act obligations for enterprise device retirement.",
    tag: "Regulatory",
  },
  {
    id: "audit",
    span: "md:col-span-4",
    label: "Audit package",
    title: "7-year retention option",
    body: "Manifests, wipe certs, and handoff logs archived in exportable format for your records team.",
    tag: "Retention",
  },
  {
    id: "insurance",
    span: "md:col-span-6",
    label: "Coverage",
    title: "Liability insurance on file",
    body: "Certificate of insurance available for vendor onboarding and procurement review.",
    tag: "Risk Transfer",
  },
  {
    id: "chain",
    span: "md:col-span-6",
    label: "Documentation",
    title: "Full chain-of-custody record",
    body: "Every device is trackable from intake manifest → wipe certificate → recycler transfer. One file, your auditor's name already knows it.",
    tag: "Auditability",
  },
];

export default function TrustCompliance() {
  return (
    <section
      className="border-y border-ink/8 bg-white/30 py-16 md:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-xs uppercase tracking-widest text-copper">
              Compliance dossier
            </p>
            <h2
              id="trust-heading"
              className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl"
            >
              What your auditors will ask for — already organized
            </h2>
            <p className="mt-3 text-steel">
              Every item in this dossier maps to a real document. Nothing here
              is a marketing promise.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            Request documentation →
          </a>
        </div>

        {/* Bento grid */}
        <div className="bento-grid mt-10">
          {trustItems.map((item) => (
            <article
              key={item.id}
              className={`group rounded-lg border border-ink/10 bg-white/60 p-5 transition-colors duration-200 hover:border-copper/25 hover:bg-white/80 ${item.span} ${item.emphasis ? "md:p-8" : "md:p-6"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-[10px] uppercase tracking-widest text-copper">
                  {item.label}
                </p>
                <span className="shrink-0 rounded-full border border-ink/10 bg-ink/4 px-2 py-0.5 font-display text-[9px] uppercase tracking-widest text-steel">
                  {item.tag}
                </span>
              </div>
              <h3
                className={`mt-3 font-display font-semibold text-ink ${item.emphasis ? "text-xl md:text-2xl" : "text-base"}`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-steel ${item.emphasis ? "text-sm md:text-base" : "text-sm"}`}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
