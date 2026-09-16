import Image from "next/image";
import focusLogo from "../../../public/focus-logo.png";
import Countdown from "./Countdown";

export const metadata = { title: "Clase gratuita de Dropshipping — Focus" };

const LESSONS = [
  {
    title: "Dropshipping: cómo funciona y cómo empezar",
    desc: "Introducción al dropshipping: montar una tienda en Shopify, elegir opciones de proveedores y usar canales de marketing para llevar tráfico.",
    video: "https://zpwlpjtlcenlpfptvqof.supabase.co/storage/v1/object/public/lecciones-video/drop1.mp4",
  },
  {
    title: "¿Qué es el dropshipping?",
    desc: "La base del modelo de negocio, explicada de cero.",
    video: "https://zpwlpjtlcenlpfptvqof.supabase.co/storage/v1/object/public/lecciones-video/drop2.mp4",
  },
  {
    title: "Ventajas y retos",
    desc: "Lo bueno y lo que nadie te cuenta antes de empezar.",
    video: "https://zpwlpjtlcenlpfptvqof.supabase.co/storage/v1/object/public/lecciones-video/drop3.mp4",
  },
  {
    title: "Montar tu tienda con Shopify",
    desc: "Paso a paso para dejar tu tienda lista.",
    video: "https://zpwlpjtlcenlpfptvqof.supabase.co/storage/v1/object/public/lecciones-video/drop4.mp4",
  },
];

export default function ClaseGratisPage() {
  return (
    <div className="min-h-screen marble-section text-[#1c1a16]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-[#8a8478] hover:text-[#8a691f] transition">
          ← Focus
        </a>

        <div className="text-center mt-8 mb-8">
          <Image src={focusLogo} alt="Focus" className="w-full max-w-xs h-auto mx-auto mb-6" />
          <p className="uppercase tracking-[0.25em] text-[#8a691f] text-xs sm:text-sm font-semibold mb-3">
            Clase gratuita
          </p>
          <h1 className="text-2xl sm:text-4xl font-black leading-tight mb-4 text-balance">
            Las 4 primeras lecciones de Dropshipping, gratis
          </h1>
          <p className="text-[#5c574c] max-w-xl mx-auto mb-4">
            Sin registrarte, sin pagar nada. Esto es una muestra real del módulo completo — dentro de
            Focus hay 4 lecciones más y el resto de la plataforma (IA, marketing, mentalidad, trading,
            memecoins).
          </p>
          <div className="inline-flex items-center gap-2 bg-[#a9812f]/10 text-[#8a691f] text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a9812f] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a9812f]" />
            </span>
            482 alumnos ya la han visto y están aplicándolo
          </div>
        </div>

        <div className="mb-12 bg-[#100e0a] rounded-2xl px-6 py-8">
          <Countdown />
        </div>

        <div className="space-y-10">
          {LESSONS.map((l, i) => (
            <div key={l.title} className="border border-[#e2ddd3] rounded-2xl overflow-hidden bg-white">
              <video
                src={l.video}
                controls
                preload="metadata"
                className="w-full aspect-video bg-black"
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-[#a9812f] mb-1">
                  Lección {i + 1}
                </p>
                <h2 className="text-lg font-bold mb-1">{l.title}</h2>
                <p className="text-sm text-[#5c574c]">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center bg-[#100e0a] text-white rounded-2xl px-6 py-10">
          <h3 className="text-xl sm:text-2xl font-black mb-2">¿Te ha gustado?</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Dentro de Focus tienes el módulo completo de Dropshipping y todo lo demás — IA, marketing,
            trading, memecoins y comunidad activa 24/7.
          </p>
          <a
            href="/#pricing"
            className="inline-block bg-[#a9812f] text-white font-bold px-8 py-3.5 rounded-md hover:bg-[#8a691f] transition"
          >
            Únete a Focus
          </a>
        </div>
      </div>
    </div>
  );
}
