# D.P. Land Surveying Services

Premium single-page marketing site for **D.P. Land Surveying Services** (Philippines).

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Motion (scroll/UI animation)
- Lucide React icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
npm run process-logo
```

## Environment

Copy `.env.example` to `.env` and set your production URL:

```bash
VITE_SITE_URL=https://your-domain.vercel.app
```

This value is injected into `index.html` meta tags and JSON-LD at build time.

Update `public/robots.txt` and `public/sitemap.xml` with the same domain before launch.

## Images

Replace files under `public/images/` without changing component code when possible:

| Folder | Purpose |
|--------|---------|
| `public/images/logo/` | Transparent logo + emblem |
| `public/images/hero/` | Hero background |
| `public/images/about/` | About section |
| `public/images/showcase/` | Gallery (`src/data/showcase.ts`) |

## Deploy (Vercel)

1. Push this folder to GitHub (when ready).
2. Import the repository in Vercel.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `VITE_SITE_URL` in project environment variables.

SPA routing is configured via `vercel.json`.

## Contact form behavior

The inquiry form validates input and opens a **mailto** draft to `dplandsurveys@gmail.com`. It does not send email server-side. Integrate Formspree, Resend, or similar later if needed.

## Owner confirmation

Service categories in `src/data/services.ts` are marked as pending owner confirmation before production publishing.
