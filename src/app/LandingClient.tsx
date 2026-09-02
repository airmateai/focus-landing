"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import focusLogo from "../../public/focus-logo.png";
import { dict, type Locale } from "@/lib/i18n";
import { trackPageView, joinPresence, analyticsClient } from "@/lib/analytics";

const MINDSET_VIDEO_ID = "wIesDiFYj1E";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 7 5.5z" />
    </svg>
  );
}

function TrendUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function MicIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4" />
      <path d="M8 22h8" />
    </svg>
  );
}

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function AlertIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3 2 20h20L12 3z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.2a3.2 3.2 0 0 1 0 6.2" />
      <path d="M18.5 14c2.4.5 4 2.2 4 6" />
    </svg>
  );
}

export default function LandingClient() {
  const [locale, setLocale] = useState<Locale>("es");
  const [memberCount, setMemberCount] = useState(122);
  const t = dict[locale];

  useEffect(() => {
    trackPageView();
    const channel = joinPresence();
    analyticsClient
      .rpc("member_count")
      .then(({ data }) => {
        if (typeof data === "number" && data > 0) setMemberCount(data);
      });
    return () => {
      channel.unsubscribe();
    };
  }, []);

  const tickerIcons = [UsersIcon, AlertIcon, MicIcon, TrendUpIcon];
  const tickerItems = t.ticker.map((item, i) => ({
    text: item.replace("122", String(memberCount)),
    Icon: tickerIcons[i] ?? UsersIcon,
  }));

  return (
    <div className="min-h-screen text-[#1c1a16] marble-bg">
      {/* live ticker */}
      <div className="bg-[#1c1a16] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="flex marquee-track w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm font-semibold px-8 flex items-center gap-2 shrink-0"
            >
              <item.Icon className="w-3.5 h-3.5 text-[#d9b876] shrink-0" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* urgency banner */}
      <div className="bg-gradient-to-r from-[#a9812f] to-[#c8a24f] text-white text-center text-sm font-semibold py-2.5 px-4">
        {t.urgency}
      </div>

      {/* memecoins launch banner */}
      <a
        href="#insiders"
        className="block bg-[#0a0f0d] text-[#1fe08a] text-center text-sm font-bold py-2 px-4 border-b border-[#1fe08a]/30 hover:bg-[#0f1613] transition"
      >
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1fe08a] animate-pulse" />
          {t.insiders.launchBanner}
        </span>
      </a>

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
      <section className="marble-section relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-3xl aspect-square rounded-full pointer-events-none aura-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(169,129,47,0.28) 0%, rgba(217,184,118,0.14) 35%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center px-6 pt-16 pb-16 relative">
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

      {/* trading banner */}
      <a
        href="#pricing"
        className="block bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 transition"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <span className="inline-flex items-center gap-1.5 text-white font-black text-sm sm:text-base">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {t.tradingBanner}
          </span>
        </div>
      </a>

      {/* mindset video */}
      <section className="relative bg-[#100e0a] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #d9b876 0%, transparent 40%), radial-gradient(circle at 80% 80%, #d9b876 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-[#a9812f]/15 border border-[#a9812f]/40 rounded-full px-4 py-1.5 text-[#d9b876] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d9b876] pulse-glow" />
            {t.mindsetVideo.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 text-balance">
            {t.mindsetVideo.title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            {t.mindsetVideo.desc}
          </p>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#a9812f]/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-video relative">
            <img
              src={`https://img.youtube.com/vi/${MINDSET_VIDEO_ID}/maxresdefault.jpg`}
              alt="Focus — vídeo de mentalidad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-[#a9812f] flex items-center justify-center pulse-glow shadow-lg">
                <LockIcon className="w-8 h-8 text-white" />
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* news */}
      <section className="bg-[#100e0a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="uppercase tracking-[0.25em] text-[#d9b876] text-xs font-semibold mb-3">
                {t.news.kicker}
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-balance max-w-xl">
                {t.news.title}
              </h2>
            </div>
            <p className="text-white/60 max-w-sm sm:text-right">
              {t.news.desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* featured */}
            <a
              href="#pricing"
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:row-span-2 border border-white/10"
            >
              <img
                src={t.news.items[0].image}
                alt={t.news.items[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <span className="inline-flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-[#100e0a] bg-[#d9b876] rounded-full px-2.5 py-1 mb-4">
                  {t.news.items[0].source}
                </span>
                <p className="text-xl sm:text-2xl font-bold leading-snug text-balance">
                  {t.news.items[0].title}
                </p>
              </div>
            </a>

            {/* secondary items */}
            {t.news.items.slice(1).map((item) => (
              <a
                key={item.title}
                href="#pricing"
                className="group relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="inline-flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-[#100e0a] bg-[#d9b876] rounded-full px-2.5 py-1 mb-3">
                    {item.source}
                  </span>
                  <p className="text-base font-bold leading-snug text-balance">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
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
              <span className="text-[#a9812f] shrink-0">—</span>
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

      {/* insiders memecoins */}
      <section id="insiders" className="relative bg-[#070a08] text-white overflow-hidden border-y border-[#1fe08a]/20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(31,224,138,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(31,224,138,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1fe08a] animate-pulse" />
            <p className="uppercase tracking-[0.25em] text-[#1fe08a] text-xs font-semibold">
              {t.insiders.kicker}
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-5 font-mono flex items-center gap-3 flex-wrap">
            {t.insiders.title}
            <span className="text-xs font-black bg-[#1fe08a] text-[#070a08] px-2.5 py-1 rounded-full tracking-normal">
              {t.insiders.newBadge}
            </span>
          </h2>
          <p className="text-[#c9f5df]/80 max-w-2xl text-lg leading-relaxed mb-14">
            {t.insiders.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {t.insiders.features.map((f, i) => {
              const Icon = [TrendUpIcon, MicIcon, UsersIcon, LockIcon][i];
              return (
                <div
                  key={f.title}
                  className="bg-[#0f1613] border border-[#1fe08a]/20 rounded-2xl p-5 hover:border-[#1fe08a]/60 transition"
                >
                  <Icon className="w-7 h-7 text-[#1fe08a] mb-3" />
                  <h3 className="font-bold mb-1">{f.title}</h3>
                  <p className="text-sm text-[#c9f5df]/60 leading-snug">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-[#0f1613] border border-[#1fe08a]/30 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-2">
              <AlertIcon className="w-5 h-5 text-[#1fe08a] shrink-0" />
              <p className="font-semibold text-[#1fe08a]">{t.insiders.urgency}</p>
            </div>
            <a
              href="#pricing"
              className="sm:ml-auto inline-flex items-center justify-center rounded-full bg-[#1fe08a] text-[#070a08] font-bold px-6 py-2.5 text-sm hover:bg-[#3fffa8] transition shrink-0"
            >
              {t.insiders.cta}
            </a>
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
                  <CheckIcon className="w-4 h-4 text-[#a9812f] shrink-0" />
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
          <p className="text-center uppercase tracking-[0.25em] text-[#8a691f] text-xs font-semibold mb-3 animate-pulse">
            {t.pricing.kicker}
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black mb-10 text-balance">
            {t.pricing.title}
          </h2>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#a9812f] via-[#f0d78c] to-[#a9812f] opacity-60 blur-lg pulse-glow" />
            <div className="relative border-2 border-[#a9812f] rounded-2xl p-10 text-center bg-gradient-to-b from-[#fff9ec] to-white shadow-[0_20px_60px_rgba(169,129,47,0.25)]">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a9812f] text-white text-[11px] font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                {t.pricing.kicker}
              </span>

              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-lg text-[#a49c8a] line-through decoration-2">
                  {t.pricing.nextPrice}
                </span>
              </div>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-8xl font-black text-[#a9812f] tracking-tight pulse-glow">
                  {t.pricing.price}
                </span>
                <span className="text-[#5c574c] mb-3 text-lg">{t.pricing.period}</span>
              </div>

              <p className="text-sm text-[#3a362e] font-medium mb-1 max-w-sm mx-auto">
                {t.pricing.warning}
              </p>
              <p className="text-xs text-[#a49c8a] mb-8">{t.pricing.subCta}</p>

              <a
                href="https://buy.stripe.com/7sY5kD59dayg1EGgit2Ry0q?prefilled_promo_code=FOCUS10"
                className="inline-block bg-[#a9812f] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-[#8a691f] hover:scale-[1.02] transition-all shadow-lg w-full sm:w-auto pulse-glow"
              >
                {t.pricing.cta} →
              </a>
            </div>
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
