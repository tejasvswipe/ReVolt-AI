import Image from "next/image";

export default function KioskSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-100" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Hardware
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            Built for Secure
            <br />
            Device Retirement
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Enterprise-grade e-waste collection kiosk engineered for secure
            device intake, compliance, and automated asset tracking.
          </p>
        </div>

        {/* Kiosk Showcase */}
        <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          {/* Top Accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

          <Image
            src="/kiosk.png"
            alt="ReVolt AI Secure Device Retirement Kiosk"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>
      </div>
    </section>
  );
}