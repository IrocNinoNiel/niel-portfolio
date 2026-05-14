# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # type check without emitting files
```

## Stack

- **Next.js 16** (App Router) — `src/app/` layout
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css`, no `tailwind.config.js`
- **next-themes** — dark/light mode via `class` strategy; `ThemeProvider` wraps the root layout

## Architecture

Single-page portfolio site. All content lives in `src/app/page.tsx`, which composes section components in order:

```
Navbar → Hero → FadeIn<Skills> → FadeIn<Projects> → FadeIn<Experience> → FadeIn<Education> → Contact → Footer
```

**Dark mode:** Tailwind v4 uses `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`. The `ThemeProvider` (client component) sets `attribute="class"` on `<html>`. The `<html>` tag has `suppressHydrationWarning` to prevent SSR mismatch.

**Theme toggle:** Lives in `Navbar` (client component). Uses `useEffect` + `mounted` guard before rendering the sun/moon icon to avoid hydration mismatch.

**Scroll animations:** `FadeIn` (client component) uses `IntersectionObserver` to fade-up children when they enter the viewport. Wrap any section with `<FadeIn delay={ms}>` for staggered entry. Disconnects after first trigger.

**Active nav highlighting:** `Navbar` watches all section IDs via `IntersectionObserver` with `rootMargin: '-40% 0px -55% 0px'` to detect which section is centred in the viewport, then highlights that nav link.

**Mobile nav:** Slide-down dropdown controlled by `mobileOpen` state, animated via `max-h` transition. Closes automatically on link click.

**Static assets:** Profile photo at `public/profile.jpg`, resume PDF at `public/resume.pdf`.

## Content to update

All site content is hardcoded in the component files — no CMS or data layer:

| Component | What to edit |
|---|---|
| `src/components/Hero.tsx` | Name, title, bio |
| `src/components/Skills.tsx` | `skillGroups` array |
| `src/components/Projects.tsx` | `projects` array |
| `src/components/Experience.tsx` | Job entries |
| `src/components/Education.tsx` | Degree entry |
| `src/components/Contact.tsx` | `links` array |
| `src/components/Footer.tsx` | Contact links |
| `public/profile.jpg` | Profile photo |
| `public/resume.pdf` | Downloadable CV |
