# Cathy Dolle — Awwwards-style monochrome portfolio

A premium editorial portfolio starter built with Next.js, GSAP, and Three.js.

## Included

- App Router structure for a portfolio website
- Cinematic homepage with animated hero and editorial project grid
- Reusable project detail template
- About and Contact pages
- GSAP-powered section reveals and looping marquee
- Three.js / React Three Fiber hero object for visual atmosphere
- Pure black-and-white palette

## Project structure

```text
app/
  about/page.tsx
  contact/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  home/
    home-contact-cta.tsx
    home-hero.tsx
    home-manifesto.tsx
    home-project-grid.tsx
    home-services.tsx
  motion/
    home-animations.tsx
  site/
    site-footer.tsx
    site-header.tsx
  three/
    editorial-canvas.tsx
content/
  projects.ts
```

## Run locally

```bash
npm install
npm run dev
```

## Best next steps

1. Replace placeholder visual panels with real photography.
2. Add page transitions and a custom loader.
3. Connect projects to a CMS such as Sanity or Contentful.
4. Add a custom cursor and refined mobile interaction states.
5. Build bespoke layouts for each case study instead of one shared template.
