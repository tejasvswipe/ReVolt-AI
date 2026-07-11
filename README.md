# ReVolt AI — Landing Page

A premium, read-only MVP validation website for **ReVolt AI**, an AI-powered e-waste management and secure data destruction startup in India.

> Single self-contained `index.html`. No build step, no dependencies to install.

## Preview locally

The page is a static file — open it directly, or serve it with any static server:

```bash
# Option 1: open directly
open index.html            # macOS
xdg-open index.html        # Linux
start index.html           # Windows

# Option 2: serve over HTTP (recommended for full feature parity)
python3 -m http.server 8000
# → http://localhost:8000

# Option 3: with Node
npx serve .
```

## What's in it

| Section | What it covers |
|---|---|
| **Hero** | Mission headline, primary + secondary CTAs |
| **About** | India's e-waste problem, data risk, AI's role, circular vision |
| **Solution (Why ReVolt AI)** | 5-pillar value strip |
| **Services** | 6 concept cards, all marked "Coming Soon" |
| **Vision** | 5-phase timeline (Phase 1 = current) |
| **FAQ** | 5 questions in a smooth accordion |
| **Contact** | Glass form, toast confirmation on submit |
| **Footer** | Privacy / Terms / Contact / LinkedIn |

## Design choices

- **Dark theme** (`#050507` base) with **green + electric blue** accents (`#10B981` → `#38BDF8`)
- **Glassmorphism** cards with `backdrop-filter: blur(20px)` and hairline borders
- **Typography:** Space Grotesk (display) + DM Sans (body), via Google Fonts
- **Icons:** Lucide, via CDN
- **CSS:** Tailwind via CDN, with custom utilities for glass / gradient / reveal animations
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — Linear-style motion
- **Mobile-first:** tested at 375 / 768 / 1024 / 1440

## Editing

Everything lives in `index.html`. Helpful entry points:

- **Brand name, copy:** search for `ReVolt AI` or specific section headings
- **Colors:** change the Tailwind config block near the top, or update `--color-*` CSS vars
- **Nav items:** the `<nav>` block in `<header>`
- **Form submission:** currently logs to `console` and shows a toast — wire it to your backend, Formspree, or a Google Form by editing the `#contactForm` handler near the bottom of the file

## Deployment

The file is fully self-contained (CDN-loaded fonts, Tailwind, icons). Drop it on any static host:

- **Vercel / Netlify:** drag the folder onto the dashboard, or `vercel --prod` / `netlify deploy --prod`
- **GitHub Pages:** push to a repo, enable Pages on `main` branch
- **Cloudflare Pages:** connect the repo, no build command needed
- **S3 + CloudFront:** upload `index.html` to a public bucket with `index.html` as the default object

## License

© 2025 ReVolt AI. All rights reserved.
