"use client";

import { useState } from "react";
import Image from "next/image";
import focusLogo from "../../public/focus-logo.png";
import { dict, type Locale } from "@/lib/i18n";

export default function LandingClient() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = dict[locale];

  return (
    <div className="min-h-screen text-[#1c1a16] marble-bg">
      {/* urgency banner */}
      <div className="bg-gradient-to-r from-[#a9812f] to-[#c8a24f] text-white text-center text-sm font-semibold py-2.5 px-4">
        {t.urgency}
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#f4f2ee]/90 border-b border-[#e2ddd3]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src={focusLogo} alt="Focus" className="h-24 w-auto" priority />
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-[#5c574c]">
            <a href="#pillars" className="hover:text-[#8a691f] transition-colors">
              {t.nav.pillars}
            </a>
            <a href="#pricing" className="hover:text-[#8a691f] transition-colors">
              {t.nav.pricing}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="border border-[#a9812f]/40 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#8a691f] hover:bg-[#a9812f] hover:text-white transition-colors"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#pricing"
              className="bg-[#a9812f] text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-[#8a691f] transition"
            >
              {t.nav.join}
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-3xl mx-auto text-center px-6 pt-16 pb-10">
        <Image
          src={focusLogo}
          alt="Focus"
          className="w-full max-w-2xl h-auto mx-auto mb-6 drop-shadow-[0_10px_40px_rgba(169,129,47,0.25)]"
          priority
        />
        <p className="uppercase tracking-[0.25em] text-[#8a691f] text-xs sm:text-sm font-semibold mb-5">
          {t.hero.kicker}
        </p>
        <h1 className="text-3xl sm:text-5xl font-black leading-[1.1] mb-6 text-balance">
          {t.hero.title}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-[#a9812f] text-white font-bold px-8 py-3.5 rounded-md hover:bg-[#8a691f] transition"
          >
            {t.hero.cta}
          </a>
          <a
            href="#pillars"
            className="w-full sm:w-auto border border-[#1c1a16]/15 px-8 py-3.5 rounded-md hover:border-[#a9812f] hover:text-[#8a691f] transition"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* pillars */}
      <section id="pillars" className="bg-white/55 backdrop-blur-sm border-y border-[#e2ddd3]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3">
            {t.pillars.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-16">
            {t.pillars.title}
          </h2>
          <div className="space-y-10">
            {t.pillars.items.map((item) => (
              <div
                key={item.num}
                className="flex flex-col sm:flex-row gap-6 sm:items-start border-t border-[#e2ddd3] pt-10 first:border-0 first:pt-0"
              >
                <div className="text-5xl font-black text-[#e2ddd3] sm:w-24 shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8a691f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5c574c] leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* community */}
      <section className="bg-white/55 backdrop-blur-sm border-y border-[#e2ddd3]">
        <div className="max-w-5xl mx-auto px-6 py-24 grid sm:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-5 text-balance">
              {t.community.title}
            </h2>
            <p className="text-[#5c574c] leading-relaxed mb-8">
              {t.community.desc}
            </p>
            <ul className="space-y-3">
              {t.community.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#3a362e]">
                  <span className="text-[#a9812f]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square rounded-xl border border-[#e2ddd3] bg-gradient-to-br from-[#f4f2ee] via-white to-[#f4f2ee] flex items-center justify-center">
            <p className="text-[#a49c8a] text-sm uppercase tracking-widest px-6 text-center">
              [ captura de los canales próximamente ]
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-center uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3">
          {t.pricing.kicker}
        </p>
        <h2 className="text-center text-3xl font-black mb-10 text-balance">
          {t.pricing.title}
        </h2>
        <div className="border border-[#a9812f]/30 rounded-2xl p-10 text-center bg-gradient-to-b from-[#a9812f]/[0.05] to-white">
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-6xl font-black text-[#a9812f]">
              {t.pricing.price}
            </span>
            <span className="text-[#5c574c] mb-2">{t.pricing.period}</span>
          </div>
          <p className="text-sm text-[#5c574c] mb-8 max-w-xs mx-auto">
            {t.pricing.warning}
          </p>
          <a
            href="#"
            className="inline-block bg-[#a9812f] text-white font-bold px-10 py-3.5 rounded-md hover:bg-[#8a691f] transition w-full sm:w-auto"
          >
            {t.pricing.cta}
          </a>
        </div>
      </section>

      {/* final cta */}
      <section className="border-t border-[#e2ddd3]">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-8 text-balance">
            {t.finalCta.title}
          </h2>
          <a
            href="#pricing"
            className="inline-block bg-[#a9812f] text-white font-bold px-10 py-4 rounded-md hover:bg-[#8a691f] transition"
          >
            {t.finalCta.cta}
          </a>
        </div>
      </section>

      <footer className="text-center text-[#a49c8a] text-xs py-10 border-t border-[#e2ddd3]">
        {t.footer}
      </footer>
    </div>
  );
}
