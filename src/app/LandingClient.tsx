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
      <section className="marble-section">
        <div className="max-w-3xl mx-auto text-center px-6 pt-16 pb-16">
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
        </div>
      </section>

      {/* is this you */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-center uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3">
          {t.isThisYou.kicker}
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-black mb-12">
          {t.isThisYou.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {t.isThisYou.items.map((item) => (
            <p key={item} className="flex gap-3 text-[#3a362e] leading-relaxed">
              <span className="text-[#a9812f] shrink-0">⚡</span>
              {item}
            </p>
          ))}
        </div>
        <p className="text-center text-[#5c574c] max-w-2xl mx-auto mt-10">
          {t.isThisYou.closing}
        </p>
      </section>

      {/* why */}
      <section className="border-y border-[#e2ddd3] bg-white/50">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-balance">
            {t.why.title}
          </h2>
          <div className="space-y-3 text-[#5c574c] text-lg leading-relaxed">
            <p>{t.why.body1}</p>
            <p className="text-[#1c1a16] font-semibold">{t.why.body2}</p>
            <p>{t.why.body3}</p>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section id="pillars" className="border-y border-[#e2ddd3]">
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

      {/* showcase videos */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden border border-[#e2ddd3] aspect-[3/4]">
            <video
              src="/showcase-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#e2ddd3] aspect-[3/4]">
            <video
              src="/showcase-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#e2ddd3] aspect-[3/4] col-span-2 sm:col-span-1">
            <video
              src="/showcase-3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* access */}
      <section className="border-y border-[#e2ddd3] bg-white/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-center uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3">
            {t.access.kicker}
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black mb-14 text-balance">
            {t.access.title}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.access.items.map((item) => (
              <div
                key={item.title}
                className="border border-[#e2ddd3] bg-white rounded-2xl p-7"
              >
                <h3 className="font-bold text-[#8a691f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5c574c] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-center uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3">
          {t.howItWorks.kicker}
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-black mb-14 text-balance">
          {t.howItWorks.title}
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="text-4xl font-black text-[#e2ddd3] mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-[#1c1a16] mb-2">{step.title}</h3>
              <p className="text-sm text-[#5c574c] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8a8478] text-sm max-w-lg mx-auto mt-14">
          {t.howItWorks.closing}
        </p>
      </section>

      {/* community */}
      <section className="border-y border-[#e2ddd3]">
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
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#e2ddd3]">
              <img
                src="/fabio-dubai.jpg"
                alt="Fabio, fundador de Focus"
                className="w-full h-full object-cover aspect-[3/4]"
              />
              <p className="text-center text-xs uppercase tracking-widest text-[#8a691f] py-2 bg-white">
                Fabio
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e2ddd3]">
              <img
                src="/fernando-dubai.jpg"
                alt="Fernando, fundador de Focus"
                className="w-full h-full object-cover aspect-[3/4]"
              />
              <p className="text-center text-xs uppercase tracking-widest text-[#8a691f] py-2 bg-white">
                Fernando
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e2ddd3]">
              <img
                src="/fabio-burj.jpg"
                alt="Fabio en Dubái"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e2ddd3]">
              <img
                src="/fabio-lounge.jpg"
                alt="Fabio en Dubái"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* pricing + final cta */}
      <section id="pricing" className="marble-section border-t border-[#e2ddd3]">
        <div className="max-w-2xl mx-auto px-6 py-24">
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
              href="https://buy.stripe.com/6oU7sL31549S0AC0jv2Ry0m"
              className="inline-block bg-[#a9812f] text-white font-bold px-10 py-3.5 rounded-md hover:bg-[#8a691f] transition w-full sm:w-auto"
            >
              {t.pricing.cta}
            </a>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-center text-3xl font-black mb-12">{t.faq.title}</h2>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <details
              key={item.q}
              className="border border-[#e2ddd3] bg-white rounded-xl px-5 py-4 group"
              open={i === 0}
            >
              <summary className="font-semibold text-[#1c1a16] cursor-pointer list-none flex items-center justify-between gap-4">
                {item.q}
                <span className="text-[#a9812f] text-lg group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="text-sm text-[#5c574c] leading-relaxed mt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 border-t border-[#e2ddd3] space-y-2">
        <p className="font-serif italic text-[#a9812f] text-sm tracking-wide">
          In proud honor to the Tates
        </p>
        <p className="text-[#a49c8a] text-xs">{t.footer}</p>
        <p className="text-[#a49c8a] text-xs">
          <a href="/terminos" className="hover:text-[#8a691f] underline">
            Términos
          </a>
          {" · "}
          <a href="/privacidad" className="hover:text-[#8a691f] underline">
            Privacidad
          </a>
        </p>
      </footer>
    </div>
  );
}
