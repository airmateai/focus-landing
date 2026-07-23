export type Locale = "es" | "en";

export const dict = {
  es: {
    nav: { community: "Comunidad", pricing: "Precio", join: "Únete ahora" },
    urgency: "⚠ El precio sube pronto. Asegura tu plaza al precio actual.",
    hero: {
      kicker: "Escapa de la carrera de la rata",
      title: "FOCUS",
      subtitle:
        "La comunidad y plataforma para emprendedores de habla hispana. IA, marketing y mentalidad — sin filtros, sin excusas.",
      cta: "Unirme a Focus",
      ctaSecondary: "Ver qué incluye",
    },
    pillars: {
      title: "Tres pilares. Un solo camino.",
      items: [
        {
          title: "Inteligencia Artificial",
          desc: "Domina las herramientas que están redefiniendo quién gana dinero en 2026.",
        },
        {
          title: "Marketing",
          desc: "Aprende a vender, posicionarte y construir marca personal de verdad.",
        },
        {
          title: "Mentalidad",
          desc: "Disciplina, foco y la mentalidad que separa a quien ejecuta de quien sueña.",
        },
      ],
    },
    community: {
      title: "Una comunidad, no un curso más",
      desc: "Canales en vivo, gente construyendo de verdad, y acceso directo a Fabio y Fernando. Además, comunidad de WhatsApp para estar siempre conectado.",
    },
    pricing: {
      title: "Precio de fundador",
      price: "29,99€",
      period: "/mes",
      warning: "El precio subirá próximamente. Quien entra ahora, mantiene este precio para siempre.",
      cta: "Asegurar mi plaza",
    },
    footer: "Focus © 2026. Todos los derechos reservados.",
  },
  en: {
    nav: { community: "Community", pricing: "Pricing", join: "Join now" },
    urgency: "⚠ Price is going up soon. Lock in today's price.",
    hero: {
      kicker: "Escape the rat race",
      title: "FOCUS",
      subtitle:
        "The community and platform for Spanish-speaking entrepreneurs. AI, marketing and mindset — no filters, no excuses.",
      cta: "Join Focus",
      ctaSecondary: "See what's included",
    },
    pillars: {
      title: "Three pillars. One path.",
      items: [
        {
          title: "Artificial Intelligence",
          desc: "Master the tools redefining who makes money in 2026.",
        },
        {
          title: "Marketing",
          desc: "Learn to sell, position yourself, and build a real personal brand.",
        },
        {
          title: "Mindset",
          desc: "Discipline, focus, and the mindset that separates doers from dreamers.",
        },
      ],
    },
    community: {
      title: "A community, not just another course",
      desc: "Live channels, people actually building, and direct access to Fabio and Fernando. Plus a WhatsApp community to stay connected.",
    },
    pricing: {
      title: "Founder pricing",
      price: "€29.99",
      period: "/mo",
      warning: "Price is going up soon. Join now and keep this price forever.",
      cta: "Lock in my spot",
    },
    footer: "Focus © 2026. All rights reserved.",
  },
} as const;
