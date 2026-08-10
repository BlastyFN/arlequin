# Arlequin

Sitio web en **Astro** preparado para conectar con **Sanity CMS**.

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Conectar Sanity

1. Copia `.env.example` a `.env`.
2. Rellena `PUBLIC_SANITY_PROJECT_ID` (y dataset si no es `production`).
3. Crea el Studio y usa los esquemas de referencia en `sanity/schemas/reference.ts`
   (`siteSettings` + `post`).
4. Publica contenido; la home lo leerá con las queries de `src/lib/queries.ts`.

Sin project ID, el sitio muestra contenido local de respaldo para poder diseñar y navegar.

## Estructura

- `src/lib/sanity.ts` — cliente Sanity
- `src/lib/queries.ts` — GROQ
- `src/components/` — Header, Hero, ContentSection
- `sanity/schemas/reference.ts` — esquemas guía para el Studio
