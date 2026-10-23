# FluffyDoll — Next.js (App Router) Project Guide

This project is fully structured and coded for **Next.js with App Router**, **TypeScript**, and **Tailwind CSS**, ready for immediate 1-click deployment to **Vercel** or any Next.js hosting provider.

---

## Next.js Project Structure

The project includes standard Next.js App Router files:

```
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO metadata & canonical tags
│   │   ├── page.tsx               # Main Privacy Policy page (/)
│   │   ├── privacy-policy/
│   │   │   └── page.tsx           # Canonical Privacy Policy route (/privacy-policy)
│   │   ├── globals.css            # Tailwind CSS v4 imports & @media print styles
│   │   ├── robots.ts              # Next.js Metadata Route for robots.txt
│   │   └── sitemap.ts             # Next.js Metadata Route for sitemap.xml
│   ├── components/
│   │   ├── FluffyDollLogo.tsx     # Clean SVG brand logo
│   │   ├── Header.tsx             # 'use client' header with PDF/Print trigger
│   │   ├── TableOfContents.tsx    # Compact in-page navigation grid
│   │   ├── PolicySectionCard.tsx  # Unboxed, high-legibility legal section
│   │   ├── ContactSection.tsx     # Verified contact & 30-day deletion notice
│   │   └── Footer.tsx             # Minimal legal footer
│   └── data/
│       └── policyData.ts          # Structured policy text (Sections 1–16) & placeholders
├── public/
│   ├── robots.txt                 # Fallback static robots.txt
│   └── sitemap.xml                # Fallback static sitemap.xml
├── next.config.mjs                # Next.js configuration
├── postcss.config.mjs             # PostCSS with @tailwindcss/postcss
├── tsconfig.json                  # Next.js & TypeScript configuration
└── PRIVACY_POLICY_REVIEW.md       # Pre-submission Google Play checklist
```

---

## Deploying to Vercel in 2 Steps

1. **Push to GitHub**:
   Push this repository to your GitHub account.

2. **Deploy on Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select this repository.
   - Vercel automatically detects **Next.js** and runs:
     - Framework: **Next.js**
     - Build Command: `next build`
     - Output Directory: `.next`
   - Click **Deploy**!

---

## Local Development with Next.js

To run the Next.js dev server locally on your machine:

```bash
npm run dev
# or
npx next dev -p 3000
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/privacy-policy](http://localhost:3000/privacy-policy) to view the site.
