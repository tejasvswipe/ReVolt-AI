const problems = [
  {
    id: "storage",
    title: "Devices pile up in storage rooms",
    body: "Retired laptops sit in unlocked closets because no one owns the handoff process. Every week they stay, your exposure grows.",
    number: "01",
  },
  {
    id: "proof",
    title: "You have no compliance proof",
    body: "Internal audits ask for wipe certificates and recycler licenses. A vendor receipt is not a chain-of-custody record.",
    number: "02",
  },
  {
    id: "liability",
    title: "You are personally on the hook",
    body: "IT and Facilities Managers sign retirement paperwork. If a drive resurfaces with client data, your name is on the disposition log.",
    number: "03",
  },
];

export default function Problem() {
  return (
    <section
      className="border-y border-ink/8 bg-white/40 py-16 md:py-20"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            id="problem-heading"
            className="font-display text-2xl font-semibold text-ink md:text-3xl"
          >
            What keeps you up before an audit
          </h2>
          <p className="mt-3 text-steel">
            This is not a sustainability pitch. It is a paperwork and liability
            problem you already manage — without the documentation to defend it.
          </p>
        </div>

        <ul className="mt-10 grid gap-0 divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {problems.map((item) => (
            <li key={item.id} className="group py-8 md:px-8 md:py-0 first:md:pl-0 last:md:pr-0">
              <span className="font-display text-2xl font-semibold text-ink/10 group-hover:text-copper/20 transition-colors duration-300">
                {item.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Supporting context bar */}
        <div className="mt-10 flex items-start gap-3 rounded border border-copper/20 bg-copper/5 px-5 py-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="mt-0.5 shrink-0 text-copper"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm text-ink/70">
            Under India&apos;s DPDP Act and enterprise information security policies,
            data controllers are accountable for personal data on disposed devices.
            &ldquo;The vendor handled it&rdquo; is not a defence without a signed chain-of-custody record.
          </p>
        </div>
      </div>
    </section>
  );
}
