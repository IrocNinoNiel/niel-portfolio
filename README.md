# Niño Niel Iroc — Portfolio

Personal portfolio site built with Next.js 16, React 19, and Tailwind CSS v4. Single-page layout with dark mode, scroll-triggered fade animations, and active section highlighting in the navbar.

**Live site:** https://niel-portfolio-apgy.vercel.app

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Dark mode | next-themes (class strategy) |
| Animations | IntersectionObserver (no library) |
| Deployment | Vercel |

---

## Features

- **Dark / light mode** — persisted via next-themes, toggle in the navbar
- **Scroll animations** — `FadeIn` component uses `IntersectionObserver` to fade-up sections as they enter the viewport; disconnects after first trigger
- **Active nav highlighting** — tracks which section is centred in the viewport using `IntersectionObserver` with a tight `rootMargin`
- **Mobile nav** — slide-down dropdown with `max-h` CSS transition, closes on link click
- **Downloadable CV** — served from `public/resume.pdf`

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Section composition order
│   ├── layout.tsx        # Metadata + ThemeProvider
│   └── globals.css       # Tailwind import + dark variant
└── components/
    ├── Navbar.tsx         # Theme toggle + active nav + mobile menu
    ├── Hero.tsx           # Name, title, bio, CTA buttons
    ├── Skills.tsx         # skillGroups array
    ├── Projects.tsx       # projects array
    ├── Experience.tsx     # Job entries
    ├── Education.tsx      # Degree entry
    ├── Contact.tsx        # Email, LinkedIn, GitHub links
    ├── Footer.tsx         # Footer links
    └── FadeIn.tsx         # Scroll-triggered fade-up wrapper
```

---

## Updating Content

All content is hardcoded in component files — no CMS or data layer.

| What to change | File |
|---|---|
| Name, title, bio | `src/components/Hero.tsx` |
| Skill groups | `src/components/Skills.tsx` — edit `skillGroups` array |
| Projects | `src/components/Projects.tsx` — edit `projects` array |
| Work experience | `src/components/Experience.tsx` |
| Education | `src/components/Education.tsx` |
| Contact links | `src/components/Contact.tsx` — edit `links` array |
| Profile photo | `public/profile.jpg` |
| Downloadable CV | `public/resume.pdf` |

---

## Running Locally

```bash
git clone https://github.com/IrocNinoNiel/niel-portfolio
cd niel-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

```bash
npm run dev        # dev server with hot reload
npm run build      # production build
npm run lint       # ESLint
npx tsc --noEmit   # type check
```

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. No environment variables required — static content only
4. Vercel auto-deploys on every push to `main`

---

## Contact

- **Email:** iroc.niel123@gmail.com
- **LinkedIn:** [linkedin.com/in/niño-niel-iroc](https://www.linkedin.com/in/ni%C3%B1o-niel-iroc-446823250/)
- **GitHub:** [github.com/IrocNinoNiel](https://github.com/IrocNinoNiel)
