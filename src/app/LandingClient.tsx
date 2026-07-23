"use client";

import { useState } from "react";
import Image from "next/image";
import { dict, type Locale } from "@/lib/i18n";

export default function LandingClient() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = dict[locale];

  return (
    <div className="min-h-screen marble-texture">
      {/* urgency banner */}
      <div className="bg-gold text-marble-900 text-center text-sm font-medium py-2 px-4">
        <span className="text-[#14130f]">{t.urgency}</span>
      </div>

      {/* nav */}
      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <span className="text-gold">FOCUS</span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#pillars" className="hover:text-gold transition-colors">
            {t.nav.community}
          </a>
          <a href="#pricing" className="hover:text-gold transition-colors">
            {t.nav.pricing}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="gold-border rounded-full px-3 py-1 text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-[#14130f] transition-colors"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#pricing"
            className="bg-gold text-[#14130f] text-sm font-semibold px-4 py-2 rounded-full hover:brightness-110 transition"
          >
            {t.nav.join}
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.3em] text-gold text-xs mb-6">
          {t.hero.kicker}
        </p>
        <div className="flex justify-center mb-6">
          <Image
            src="/focus-logo.png"
            alt="Focus"
            width={320}
            height={220}
            className="w-64 sm:w-80 h-auto"
            priority
          />
        </div>
        <p className="text-lg text-neutral-300 max-w-xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-gold text-[#14130f] font-semibold px-8 py-3 rounded-full hover:brightness-110 transition w-full sm:w-auto"
          >
            {t.hero.cta}
          </a>
          <a
            href="#pillars"
            className="gold-border text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-[#14130f] transition w-full sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* pillars */}
      <section id="pillars" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14">
          {t.pillars.title}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {t.pillars.items.map((item) => (
            <div
              key={item.title}
              className="gold-border rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition"
            >
              <h3 className="text-gold font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* community */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          {t.community.title}
        </h2>
        <p className="text-neutral-300 max-w-2xl mx-auto">{t.community.desc}</p>
      </section>

      {/* pricing */}
      <section id="pricing" className="max-w-2xl mx-auto px-6 py-24">
        <div className="gold-border rounded-3xl p-10 text-center bg-white/[0.03]">
          <h2 className="text-xl font-semibold mb-4">{t.pricing.title}</h2>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-gold">
              {t.pricing.price}
            </span>
            <span className="text-neutral-400 mb-1">{t.pricing.period}</span>
          </div>
          <p className="text-sm text-neutral-400 mb-8">{t.pricing.warning}</p>
          <a
            href="#"
            className="inline-block bg-gold text-[#14130f] font-semibold px-10 py-3 rounded-full hover:brightness-110 transition"
          >
            {t.pricing.cta}
          </a>
        </div>
      </section>

      <footer className="text-center text-neutral-500 text-xs py-10 border-t border-white/5">
        {t.footer}
      </footer>
    </div>
  );
}
