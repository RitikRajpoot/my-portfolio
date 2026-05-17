# Ritik Kumar Singh — Portfolio

Production-grade Next.js 14 portfolio with SSR, full SEO, and scroll-triggered animations.

## Quick Start
```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```

## Structure
```
src/
├── app/
│   ├── globals.css        # Design system (CSS variables)
│   ├── layout.tsx         # Root layout + SEO metadata
│   ├── page.tsx           # Home page (Server Component)
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── layout/Header.tsx  # Sticky nav, active section tracking
│   ├── layout/Footer.tsx  # Social links
│   ├── sections/          # Hero, Skills, Experience, Projects, Education, Contact
│   └── ui/AnimateIn.tsx   # Scroll-triggered animation wrapper
└── lib/
    ├── resume.ts          # Single source of truth — edit data here
    └── useInView.ts       # Intersection Observer hook
```

## SEO Features
- Full OpenGraph + Twitter Cards
- JSON-LD structured data (Person schema)
- robots.txt + dynamic sitemap.xml
- Semantic HTML + ARIA labels
- Skip-to-content (accessibility)
- Core Web Vitals optimised (SSR, font preloading, no layout shift)

## Customise
Edit `src/lib/resume.ts` to update all content. Edit `globals.css` to change theme colors.

## Deploy
Push to GitHub → Connect to Vercel → Done. Update `metadataBase` in layout.tsx with your domain.
