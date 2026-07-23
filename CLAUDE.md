# FOCUS — Landing Page

Landing page pública de Focus (repo separado de la plataforma principal `focus`, que vive en https://github.com/airmateai/focus — revisar su CLAUDE.md para contexto completo del proyecto/marca).

## Qué es
Landing muy visual, inspirada en el estilo de therealworld.net, pero con la identidad de Focus: mármol blanco/gris + dorado, logo con el reloj integrado.

## Requisitos clave
- **Precio de membresía:** 29,99€/mes. Incluir mensaje de urgencia visible indicando que el precio subirá pronto.
- **Idiomas:** español e inglés, con selector de idioma. Español como idioma por defecto.
- **Imágenes:** placeholders por ahora — Fabio y Fernando subirán imágenes propias más adelante.
- Logo disponible en `public/focus-logo.png`.

## Stack técnico
- Next.js (App Router) + TypeScript + Tailwind CSS.
- i18n simple (sin librería pesada de entrada): diccionarios ES/EN + selector cliente.
- Sin backend propio — es solo landing estática/marketing. El registro real de usuarios ocurre en la plataforma principal (repo `focus`).

## Notas de trabajo
- Prioridad: impacto visual y conversión (CTA claro hacia registro/checkout), no complejidad técnica.
- Mantener coherencia de marca con el repo `focus` (misma paleta, mismo logo, mismo tono).
