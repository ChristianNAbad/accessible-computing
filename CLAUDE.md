# Accessible Computing Website

Modern website for Accessible Computing, Inc. — full-service web development and accessibility consulting.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** TailwindCSS 4 + PostCSS
- **Animations:** Framer Motion (all respect `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Dark mode:** next-themes
- **Blog:** MDX files in `content/blog/` (next-mdx-remote + gray-matter)
- **Testing:** Vitest + Testing Library
- **Deployment:** Railway via NIXPACKS

## Commands

```bash
npm run dev          # Dev server on port 3001
npm run build        # Production build (uses --webpack flag)
npm run test         # Run Vitest tests
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
```

## Architecture

- Single-page homepage (`app/page.tsx`) with section components
- Blog system using MDX files in `content/blog/`
- All content data in `lib/constants.ts`
- WCAG 2.2 AAA compliant design system in `app/globals.css`
- CI via GitHub Actions (`.github/workflows/ci.yml`)
- Railway deployment config in `railway.toml`

## Key Directories

- `app/` — Next.js App Router pages and API routes
- `components/sections/` — Homepage section components
- `components/layout/` — Navbar, Footer
- `components/ui/` — Reusable UI components
- `content/blog/` — MDX blog posts
- `lib/` — Utilities, constants, blog helpers
- `test/` — Vitest setup and mocks

## Testing

Tests are in `components/__tests__/`. Run with `npm test`. Test setup mocks framer-motion, lucide-react, next-themes, next/link, next/image, and next/navigation.

## Build Note

Uses `--webpack` flag for build due to WASM-only SWC on this platform. Railway (Linux) will use native SWC automatically — the `--webpack` flag is harmless there.
