## Joe's Tech Solutions LLC

Boutique software studio crafting premium mobile apps, web platforms, and private AI infrastructure for ambitious small and mid‑sized businesses.

Live site: https://joestechsolutions.com

> From Olympic‑level coaching apps to custom web platforms, the focus is on reliable engineering, premium UX, and long‑term partnerships.

---

## What This Repository Contains

- **Marketing website for Joe's Tech Solutions LLC**, built with modern Next.js best practices.
- **Portfolio and services pages** that showcase past work and clearly communicate offers.
- **Premium animation system** inspired by high‑end product sites, implemented with reusable utilities and components.
- **Production‑ready layout and theming**, including responsive typography, spacing, and consistent branding.

This repo is primarily maintained for:

- **Clients and partners** who want to understand the technical foundation of the site.
- **Developers and collaborators** who may work on future features, experiments, or internal tools.

---

## Key Features

1. **On‑brand marketing site**
   - Clear positioning for mobile apps, web development, and AI solutions.
   - Responsive layout tuned for desktop, tablet, and mobile.

2. **Premium animation system**
   - Centralized animation utilities in `src/lib/animations.ts`.
   - Curated easing functions (e.g., smooth Apple‑style transitions, spring physics).
   - Reusable motion patterns applied across hero sections, cards, and call‑to‑actions.

3. **Strong performance and UX defaults**
   - Optimized fonts, images, and metadata.
   - Favicon and Open Graph configuration aligned with Joe's Tech Solutions branding.
   - Accessibility and SEO‑friendly semantics where possible.

4. **Modern developer experience**
   - Next.js App Router architecture.
   - TypeScript support.
   - Clean project structure for extending pages, components, and layouts.

---

## Tech Stack

1. **Framework**
   - [Next.js](https://nextjs.org/) App Router
   - React with functional components and hooks

2. **Styling & UI**
   - Modern CSS with global styles in `src/app/globals.css`
   - Responsive layout primitives and typographic scale

3. **Animations**
   - Framer Motion‑style patterns implemented via utilities in `src/lib/animations.ts`
   - Consistent timing, easing, and motion curves used across the site

4. **Tooling & Infrastructure**
   - Node.js + npm / pnpm / yarn for dependency management
   - Vercel (or compatible Next.js hosting) for deployment

---

## Project Structure (High Level)

Key directories:

1. **`src/app`**
   - `layout.tsx` – Root layout, metadata, fonts, header/footer wiring.
   - `page.tsx` – Home page / primary marketing surface.
   - `about/`, `services/`, `portfolio/`, `contact/` – Core marketing and sales pages.

2. **`src/components`**
   - Reusable UI building blocks and layout components.

3. **`src/lib`**
   - `animations.ts` – Centralized animation utilities and variants.

4. **`public`**
   - Brand assets: logos, favicons, OG images, and supporting media.

---

## Getting Started (For Developers)

1. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

2. **Run the development server**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Then open http://localhost:3000 in your browser.

3. **Build for production**

```bash
npm run build
npm start
```

4. **Recommended workflow**

1. Create a feature branch.
2. Implement changes with a focus on:
   - Keeping animations consistent with the patterns in `src/lib/animations.ts`.
   - Preserving typography, spacing, and tone that matches the live site.
3. Run the app locally and check:
   - Home, Services, Portfolio, and Contact flows.
   - Favicon, social preview images, and responsive behavior.
4. Open a pull request and link it to the relevant story / task.

---

## Deployment

This project is designed to deploy cleanly to platforms that support Next.js (e.g., Vercel). A typical deployment flow:

1. Push the `main` (or configured production) branch.
2. CI/CD pipeline builds the Next.js app (`npm run build`).
3. Hosting provider serves the built app with appropriate rewrites and headers.

Environment‑specific configuration (analytics, logging, integrations, etc.) should be managed via environment variables on the hosting platform.

---

## Working With Joe's Tech Solutions LLC

If you're reviewing this repository as a potential client or partner and want to:

1. **Discuss a project** – mobile app, web platform, or AI infrastructure.
2. **Review technical capabilities** beyond the marketing site.
3. **Explore a long‑term product partnership.**

Visit https://joestechsolutions.com to get in touch via the contact page.

---

## License

This repository contains the marketing site and supporting assets for Joe's Tech Solutions LLC. Unless explicitly stated otherwise in a specific file or directory, all rights are reserved.

