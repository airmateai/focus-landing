"use client";

import { useState } from "react";
import Image from "next/image";
import focusLogo from "../../public/focus-logo.png";
import { dict, type Locale } from "@/lib/i18n";

export default function LandingClient() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = dict[locale];

  return (
    <div className="min-h-screen bg-[#0a0908] text-white">
      {/* urgency banner */}
      <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-black text-center text-sm font-semibold py-2.5 px-4">
        {t.urgency}
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0a0908]/85 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-bold tracking-widest text-amber-400">
            FOCUS
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#pillars" className="hover:text-amber-400 transition-colors">
              {t.nav.pillars}
            </a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">
              {t.nav.pricing}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="border border-amber-500/40 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:bg-amber-500 hover:text-black transition-colors"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#pricing"
              className="bg-amber-500 text-black text-sm font-bold px-5 py-2 rounded-md hover:bg-amber-400 transition"
            >
              {t.nav.join}
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-3xl mx-auto text-center px-6 pt-20 pb-16">
        <Image
          src={focusLogo}
          alt="Focus"
          className="w-48 sm:w-56 h-auto mx-auto mb-8"
          priority
        />
        <p className="uppercase tracking-[0.25em] text-amber-400 text-xs sm:text-sm font-semibold mb-5">
          {t.hero.kicker}
        </p>
        <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] mb-6 text-balance">
          {t.hero.title}
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-amber-500 text-black font-bold px-8 py-3.5 rounded-md hover:bg-amber-400 transition"
          >
            {t.hero.cta}
          </a>
          <a
            href="#pillars"
            className="w-full sm:w-auto border border-white/20 px-8 py-3.5 rounded-md hover:border-amber-400 hover:text-amber-400 transition"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* hero image band */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1610] via-[#0a0908] to-[#1a1610] flex items-center justify-center">
          <p className="text-neutral-600 text-sm uppercase tracking-widest">
            [ imagen / vídeo de la comunidad próximamente ]
          </p>
        </div>
      </section>

      {/* stats bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* is this you */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-center uppercase tracking-[0.25em] text-amber-400 text-xs font-semibold mb-3">
          {t.isThisYou.kicker}
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-black mb-14">
          {t.isThisYou.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {t.isThisYou.items.map((item) => (
            <p key={item} className="flex gap-3 text-neutral-300 leading-relaxed">
              <span className="text-amber-400 shrink-0">⚡</span>
              {item}
            </p>
          ))}
        </div>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mt-14">
          {t.isThisYou.closing}
        </p>
      </section>

      {/* pillars */}
      <section id="pillars" className="bg-white/[0.02] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs font-semibold mb-3">
            {t.pillars.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-16">
            {t.pillars.title}
          </h2>
          <div className="space-y-10">
            {t.pillars.items.map((item) => (
              <div
                key={item.num}
                className="flex flex-col sm:flex-row gap-6 sm:items-start border-t border-white/10 pt-10 first:border-0 first:pt-0"
              >
                <div className="text-5xl font-black text-white/10 sm:w-24 shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why now */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-black mb-8 text-balance">
          {t.why.title}
        </h2>
        <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
          <p>{t.why.body1}</p>
          <p className="text-white font-semibold">{t.why.body2}</p>
          <p>{t.why.body3}</p>
        </div>
      </section>

      {/* community */}
      <section className="bg-white/[0.02] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24 grid sm:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-5 text-balance">
              {t.community.title}
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              {t.community.desc}
            </p>
            <ul className="space-y-3">
              {t.community.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="text-amber-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1610] via-[#0a0908] to-[#1a1610] flex items-center justify-center">
            <p className="text-neutral-600 text-sm uppercase tracking-widest px-6 text-center">
              [ captura de los canales próximamente ]
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-center uppercase tracking-[0.25em] text-amber-400 text-xs font-semibold mb-3">
          {t.pricing.kicker}
        </p>
        <h2 className="text-center text-3xl font-black mb-10 text-balance">
          {t.pricing.title}
        </h2>
        <div className="border border-amber-500/30 rounded-2xl p-10 text-center bg-gradient-to-b from-amber-500/[0.06] to-transparent">
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-6xl font-black text-amber-400">
              {t.pricing.price}
            </span>
            <span className="text-neutral-400 mb-2">{t.pricing.period}</span>
          </div>
          <p className="text-sm text-neutral-400 mb-8 max-w-xs mx-auto">
            {t.pricing.warning}
          </p>
          <a
            href="#"
            className="inline-block bg-amber-500 text-black font-bold px-10 py-3.5 rounded-md hover:bg-amber-400 transition w-full sm:w-auto"
          >
            {t.pricing.cta}
          </a>
        </div>
      </section>

      {/* final cta */}
      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-8 text-balance">
            {t.finalCta.title}
          </h2>
          <a
            href="#pricing"
            className="inline-block bg-amber-500 text-black font-bold px-10 py-4 rounded-md hover:bg-amber-400 transition"
          >
            {t.finalCta.cta}
          </a>
        </div>
      </section>

      <footer className="text-center text-neutral-600 text-xs py-10 border-t border-white/5">
        {t.footer}
      </footer>
    </div>
  );
}
