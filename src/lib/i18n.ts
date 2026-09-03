export type Locale = "es" | "en";

export const dict = {
  es: {
    nav: { pillars: "Módulos", pricing: "Precio", login: "Entrar", join: "Únete ahora" },
    urgency: "El precio sube pronto. Asegura tu plaza al precio actual.",
    tradingBanner: "Nuevo — Clases de Trading + señales en vivo de Fernando, con 88% de acierto",
    ticker: [
      "122 miembros ya dentro de Focus",
      "El precio sube pronto — asegura tu plaza",
      "Insiders de memecoins en directo cada semana",
      "IA · Marketing · Mentalidad · Trading",
    ],
    hero: {
      kicker: "Ganar dinero es una habilidad",
      title: "Nosotros te enseñamos a dominarla",
      subtitle:
        "La comunidad y plataforma para emprendedores de habla hispana. IA, marketing y mentalidad — sin filtros, sin excusas.",
      cta: "Únete a Focus",
      ctaSecondary: "Ver qué incluye",
    },
    stats: [
      { value: "3", label: "Áreas de dominio" },
      { value: "24/7", label: "Comunidad activa" },
      { value: "100%", label: "En español" },
      { value: "2", label: "Fundadores construyendo contigo" },
    ],
    mindsetVideo: {
      kicker: "Ya disponible dentro",
      title: "El vídeo de mentalidad que está cambiando cómo piensa la comunidad",
      desc: "Esto es lo primero que ves al entrar en Focus. Realidad sin filtros, cero motivación de postureo.",
    },
    news: {
      kicker: "Apartado de Noticias",
      title: "Esto es lo que os ponemos",
      desc: "Dentro de la comunidad estarás al día con todo lo que pasa en el mundo y afecta a tu negocio — economía, mercados, IA y cripto. Se actualiza solo, sin que tengas que buscarlo tú.",
      items: [
        {
          source: "Mercados",
          title: "La Fed mueve tipos y las bolsas reaccionan en minutos — lo que significa para tu cartera",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
        },
        {
          source: "Cripto",
          title: "Nueva ola de capital institucional entra en el mercado de memecoins",
          image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          source: "IA",
          title: "El último modelo que está cambiando cómo se construyen negocios online",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    isThisYou: {
      title: "¿ERES TÚ?",
      kicker: "Sé honesto contigo mismo",
      items: [
        "Estás harto de ir justo de dinero mientras ves a otros vivir la vida que quieres.",
        "Sabes que vales para más, pero nadie a tu alrededor lo entiende.",
        "Has intentado aprender con YouTube gratis, pero nada se te queda.",
        "Estás dispuesto a currar si alguien te enseña exactamente qué hacer.",
        "Quieres habilidades reales que generen ingresos, no un diploma que acumula polvo.",
        "Quieres escapar del sueldo a fin de mes y construir algo tuyo.",
      ],
      closing: "Si eso eres tú, Focus se construyó para ti. No para gente que se lo piensa. Para gente lista para moverse.",
    },
    pillars: {
      title: "Lo que vas a aprender",
      kicker: "Siete caminos. Un solo objetivo.",
      items: [
        {
          num: "01",
          title: "Inteligencia Artificial",
          desc: "Domina las herramientas que están redefiniendo quién gana dinero en 2026. Automatización, agentes, productos con IA.",
        },
        {
          num: "02",
          title: "Marketing",
          desc: "Aprende a vender, posicionarte y construir marca personal de verdad. Sin humo, sin plantillas genéricas.",
        },
        {
          num: "03",
          title: "Mentalidad",
          desc: "Disciplina, foco y la mentalidad que separa a quien ejecuta de quien sueña. Esto es la base de todo lo demás.",
        },
        {
          num: "04",
          title: "Dropshipping",
          desc: "Encuentra producto ganador, monta tu tienda y vende sin tocar stock ni invertir en inventario.",
        },
        {
          num: "05",
          title: "E-commerce",
          desc: "Construye tu propia tienda online, desde el producto hasta el checkout, y escálala con tráfico pagado.",
        },
        {
          num: "06",
          title: "Trading",
          desc: "Gestión de riesgo, análisis técnico y disciplina para operar en los mercados sin dejarte llevar por la emoción. Incluye memecoins, con acceso a Insiders — la comunidad hispanohablante donde se analizan runners y wallets en directo.",
        },
        {
          num: "07",
          title: "Clipping",
          desc: "Monetiza contenido viral para creadores: corta, edita y distribuye clips que generan ingresos reales.",
        },
      ],
    },
    insiders: {
      kicker: "Exclusivo dentro de Focus",
      title: "Insiders — Memecoins",
      subtitle: "La primera comunidad hispanohablante de memecoins con plataforma propia. Nada de grupos de Telegram con 5.000 personas gritando \"compra ya\".",
      features: [
        { title: "Runners en vivo", desc: "Feed automático de lo que está corriendo ahora, con datos reales." },
        { title: "Salas de voz", desc: "Analiza monedas en directo con el resto de insiders." },
        { title: "Ranking real", desc: "Se ve quién de verdad está dentro, con puntos e insignias." },
        { title: "Acceso exclusivo", desc: "Zona separada del resto, solo para quien va en serio." },
      ],
      urgency: "Precio de fundador — sube pronto.",
      cta: "Entra antes de que suba",
      newBadge: "Nuevo",
      launchBanner: "Novedad — clases de memecoins ya disponibles dentro de la comunidad",
    },
    why: {
      title: "El sistema educativo tradicional te está frenando",
      body1: "Años en el colegio. Miles de euros en formación. Y al final — un sueldo que apenas cubre tus gastos.",
      body2: "Eso no es un camino a la libertad. Es una jaula.",
      body3: "Focus se construyó para la gente que lo ve venir. Los que tienen hambre de más. Los que se niegan a aceptar que vivir mes a mes es el techo.",
    },
    community: {
      title: "Una comunidad, no un curso más",
      desc: "Canales en vivo, gente construyendo de verdad, y acceso directo a Fabio y Fernando. Además, comunidad de Telegram para estar siempre conectado.",
      features: [
        "Canales de chat en tiempo real",
        "Acceso directo a los fundadores",
        "Comunidad de Telegram paralela",
        "Contenido nuevo cada semana",
      ],
    },
    access: {
      kicker: "Lo que incluye tu acceso",
      title: "Todo lo que necesitas. En un solo sitio.",
      items: [
        {
          title: "Aprendizaje paso a paso",
          desc: "7 módulos con lecciones organizadas, sin relleno ni teoría vacía. Aprendes haciendo, no memorizando.",
        },
        {
          title: "Acceso directo a los fundadores",
          desc: "Fabio y Fernando dentro de la comunidad todos los días — no son gurús desconectados, están construyendo esto contigo.",
        },
        {
          title: "Una comunidad de verdad",
          desc: "Canales para hablar, compartir wins, pedir consejo y ponerte tareas. Gente construyendo, no un grupo de Facebook muerto.",
        },
      ],
    },
    howItWorks: {
      kicker: "Cómo funciona",
      title: "Tu camino dentro de Focus",
      steps: [
        {
          num: "01",
          title: "Elige tu módulo",
          desc: "IA, Marketing, Mentalidad, Dropshipping, E-commerce, Trading o Clipping. Empieza por el que más te llame.",
        },
        {
          num: "02",
          title: "Sigue el camino",
          desc: "Lecciones ordenadas, sin perderte. Márcalas como completadas y sube de nivel dentro de la comunidad.",
        },
        {
          num: "03",
          title: "Aplica y pregunta",
          desc: "Lleva lo aprendido a la acción, y cuando te atasques, pregunta directamente en los canales. Nadie avanza solo.",
        },
      ],
      closing: "Sin pasos ocultos, sin proceso complicado. La velocidad de tus resultados depende de la velocidad con la que actúes.",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito experiencia previa?",
          a: "No. Los módulos están pensados para empezar desde cero. Lo único que necesitas es estar dispuesto a currar.",
        },
        {
          q: "¿Cuánto tiempo necesito al día?",
          a: "Con 30 minutos al día ya puedes avanzar. Lo importante es la constancia, no las horas.",
        },
        {
          q: "¿Puedo cancelar cuando quiera?",
          a: "Sí. Cancela cuando quieras desde tu cuenta, sin permanencia ni letra pequeña.",
        },
        {
          q: "¿Funciona desde cualquier país?",
          a: "Sí, Focus es 100% online. Solo necesitas conexión a internet.",
        },
        {
          q: "¿Qué pasa si tengo dudas dentro de un módulo?",
          a: "Preguntas directamente en los canales de la comunidad — Fabio, Fernando y el resto de miembros están ahí.",
        },
        {
          q: "¿Hay contenido nuevo con el tiempo?",
          a: "Sí, seguimos añadiendo lecciones y módulos según lo que la comunidad necesita.",
        },
        {
          q: "¿Por qué el precio va a subir?",
          a: "Cuantos más módulos y funciones añadimos, más sube el valor. Quien entra ahora con precio de fundador lo mantiene para siempre.",
        },
      ],
    },
    pricing: {
      kicker: "Precio de fundador",
      title: "Únete ahora, antes de que suba el precio",
      price: "1€",
      nextPrice: "29,99€",
      period: "primer mes",
      warning: "Después, 29,99€/mes. El precio sube pronto — quien entra ahora con precio de fundador lo mantiene para siempre.",
      cta: "Activar Focus por 1€",
      subCta: "Cancela cuando quieras. Sin permanencia.",
    },
    finalCta: {
      title: "¿Listo para escapar de la carrera de la rata?",
      cta: "Únete a Focus ahora",
    },
    footer: "Focus © 2026. Todos los derechos reservados.",
  },
  en: {
    nav: { pillars: "Modules", pricing: "Pricing", login: "Log in", join: "Join now" },
    urgency: "Price is going up soon. Lock in today's price.",
    tradingBanner: "New — Trading classes + live signals from Fernando, 88% win rate",
    ticker: [
      "122 members already inside Focus",
      "Price going up soon — lock in your spot",
      "Live memecoin insiders sessions every week",
      "AI · Marketing · Mindset · Trading",
    ],
    hero: {
      kicker: "Money making is a skill",
      title: "We will teach you how to master it",
      subtitle:
        "The community and platform for Spanish-speaking entrepreneurs. AI, marketing and mindset — no filters, no excuses.",
      cta: "Join Focus",
      ctaSecondary: "See what's included",
    },
    stats: [
      { value: "3", label: "Areas of mastery" },
      { value: "24/7", label: "Active community" },
      { value: "100%", label: "In Spanish" },
      { value: "2", label: "Founders building with you" },
    ],
    mindsetVideo: {
      kicker: "Available inside now",
      title: "The mindset video that's changing how the community thinks",
      desc: "This is the first thing you see when you join Focus. Unfiltered reality, zero fake motivation.",
    },
    news: {
      kicker: "News section",
      title: "This is what we post",
      desc: "Inside the community you'll stay up to date with everything happening in the world that affects your business — economy, markets, AI, and crypto. It updates itself, no digging required.",
      items: [
        {
          source: "Markets",
          title: "The Fed moves rates and stocks react within minutes — what it means for your portfolio",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
        },
        {
          source: "Crypto",
          title: "A new wave of institutional capital is entering the memecoin market",
          image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          source: "AI",
          title: "The latest model that's changing how online businesses are built",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    isThisYou: {
      title: "IS THIS YOU?",
      kicker: "Be honest with yourself",
      items: [
        "You're tired of being broke while watching others live the life you want.",
        "You know you're capable of more but nobody around you gets it.",
        "You've tried learning from free YouTube content — but nothing sticks.",
        "You're willing to put in the work if someone shows you exactly what to do.",
        "You want real skills that generate income — not a certificate that collects dust.",
        "You want to escape the paycheck-to-paycheck life and build something of your own.",
      ],
      closing: "If that's you — Focus was built for you. Not for people who sit and think about it. For people ready to move.",
    },
    pillars: {
      title: "What you'll learn",
      kicker: "Seven paths. One goal.",
      items: [
        {
          num: "01",
          title: "Artificial Intelligence",
          desc: "Master the tools redefining who makes money in 2026. Automation, agents, AI-powered products.",
        },
        {
          num: "02",
          title: "Marketing",
          desc: "Learn to sell, position yourself, and build a real personal brand. No smoke, no generic templates.",
        },
        {
          num: "03",
          title: "Mindset",
          desc: "Discipline, focus, and the mindset that separates doers from dreamers. This is the base for everything else.",
        },
        {
          num: "04",
          title: "Dropshipping",
          desc: "Find a winning product, build your store, and sell without ever touching stock or investing in inventory.",
        },
        {
          num: "05",
          title: "E-commerce",
          desc: "Build your own online store, from product to checkout, and scale it with paid traffic.",
        },
        {
          num: "06",
          title: "Trading",
          desc: "Risk management, technical analysis, and the discipline to trade the markets without letting emotion drive you. Includes memecoins, with access to Insiders — the Spanish-speaking community analyzing runners and wallets live.",
        },
        {
          num: "07",
          title: "Clipping",
          desc: "Monetize viral content for creators: cut, edit, and distribute clips that generate real income.",
        },
      ],
    },
    insiders: {
      kicker: "Exclusive inside Focus",
      title: "Insiders — Memecoins",
      subtitle: "The first Spanish-speaking memecoins community with its own platform. Not another Telegram group with 5,000 people yelling \"buy now\".",
      features: [
        { title: "Live Runners", desc: "Automated feed of what's moving right now, real data." },
        { title: "Voice rooms", desc: "Analyze coins live with the rest of the insiders." },
        { title: "Real ranking", desc: "See who's actually in it, with points and badges." },
        { title: "Exclusive access", desc: "A separate zone, only for those who are serious." },
      ],
      urgency: "Founder pricing — going up soon.",
      cta: "Join before it goes up",
      newBadge: "New",
      launchBanner: "New — memecoins classes now available inside the community",
    },
    why: {
      title: "The traditional education system is holding you back",
      body1: "Years in school. Thousands spent on tuition. And at the end of it — a salary that barely covers your bills.",
      body2: "That is not a path to freedom. That is a cage.",
      body3: "Focus was built for people who see it coming. The ones who are hungry for more. Who refuse to accept that living paycheck to paycheck is the ceiling.",
    },
    community: {
      title: "A community, not just another course",
      desc: "Live channels, people actually building, and direct access to Fabio and Fernando. Plus a Telegram community to stay connected.",
      features: [
        "Real-time chat channels",
        "Direct access to the founders",
        "Parallel Telegram community",
        "New content every week",
      ],
    },
    access: {
      kicker: "What your access includes",
      title: "Everything you need. In one place.",
      items: [
        {
          title: "Step-by-step learning",
          desc: "7 modules with organized lessons, no filler, no empty theory. You learn by doing, not memorizing.",
        },
        {
          title: "Direct access to the founders",
          desc: "Fabio and Fernando are inside the community every day — not distant gurus, they're building this with you.",
        },
        {
          title: "A real community",
          desc: "Channels to talk, share wins, ask for advice and set tasks. People building, not a dead Facebook group.",
        },
      ],
    },
    howItWorks: {
      kicker: "How it works",
      title: "Your path inside Focus",
      steps: [
        {
          num: "01",
          title: "Pick your module",
          desc: "AI, Marketing, Mindset, Dropshipping, E-commerce, Trading or Clipping. Start with whichever calls to you.",
        },
        {
          num: "02",
          title: "Follow the path",
          desc: "Organized lessons, no guesswork. Mark them complete and level up inside the community.",
        },
        {
          num: "03",
          title: "Apply and ask",
          desc: "Take what you learn into action, and when you get stuck, ask directly in the channels. Nobody moves forward alone.",
        },
      ],
      closing: "No hidden steps, no complicated process. The speed of your results depends on the speed of your action.",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need prior experience?",
          a: "No. The modules are designed to start from zero. All you need is willingness to put in the work.",
        },
        {
          q: "How much time do I need per day?",
          a: "30 minutes a day is enough to make progress. Consistency matters more than hours.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes. Cancel whenever you want from your account, no commitment, no fine print.",
        },
        {
          q: "Does it work from any country?",
          a: "Yes, Focus is 100% online. You only need an internet connection.",
        },
        {
          q: "What if I have questions inside a module?",
          a: "You ask directly in the community channels — Fabio, Fernando, and the rest of the members are there.",
        },
        {
          q: "Is new content added over time?",
          a: "Yes, we keep adding lessons and modules based on what the community needs.",
        },
        {
          q: "Why is the price going up?",
          a: "As we add more modules and features, the value goes up. Whoever joins now at founder pricing keeps it forever.",
        },
      ],
    },
    pricing: {
      kicker: "Founder pricing",
      title: "Join now, before the price goes up",
      price: "€1",
      nextPrice: "€29.99",
      period: "first month",
      warning: "Then €29.99/month. The price is going up soon — whoever joins now at founder pricing keeps it forever.",
      cta: "Activate Focus for €1",
      subCta: "Cancel anytime. No commitment.",
    },
    finalCta: {
      title: "Ready to escape the rat race?",
      cta: "Join Focus now",
    },
    footer: "Focus © 2026. All rights reserved.",
  },
} as const;
