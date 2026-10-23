# FluffyDoll — Official Game Website & Privacy Policy Documentation

A fast, responsive, and beautifully crafted official showcase website for **FluffyDoll**, an Android casual puzzle game engineered with **Google Flutter** and the **Flame 2D engine**.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, configured for instant 1-click deployment to **Vercel**.

---

## Architecture & Routes

| Route | Purpose | Description |
|---|---|---|
| `/` | **Official Game Website** | High-converting landing page with interactive mini-game demo, 6 core feature highlights, meet the dolls gallery, booster mechanics, Android specs, accessible FAQ, and Google Play download CTAs. |
| `/privacy-policy` | **Google Play Legal Policy** | Comprehensive 16-section legal Privacy Policy & Data Safety declaration required for Google Play Console submission. Includes quick print/PDF export and back-navigation. |
| `/robots.txt` | **SEO Crawler Directives** | Native Next.js Metadata Route dynamically resolving to the deployment domain. |
| `/sitemap.xml` | **Search Engine Sitemap** | Native Next.js Metadata Route for optimal Google search indexing. |

---

## Features Included

- **🎮 Interactive Hero Mini-Game (`GameShowcase.tsx`)**: Playable squish-physics puzzle preview directly in the browser with combos, points, and booster animations.
- **🧸 Meet the Dolls Gallery (`DollsGallery.tsx`)**: Interactive character showcase for BunBun, PuffBear, Mochi Kitty, and Dottie Pup with softness, bounce, and fluff stat bars.
- **⚡ Android & Flame Specs (`TechSpecs.tsx`)**: Device compatibility, Android 8.0+ support, 60/120 FPS high refresh rate notes, and offline-first performance specs.
- **❓ Accessible FAQ Accordion (`FaqSection.tsx`)**: Native semantic `<details name="faq">` elements supporting deep-linking, browser in-page search findability, and zero JavaScript bloat.
- **📜 Verified Legal Protection (`/privacy-policy`)**: Full 16-section COPPA/GDPR/Google Play compliance documentation, developer contact details, and data erasure request guidelines.
- **🚀 Vercel Production Optimized**: Includes `vercel.json` with security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and cross-platform native Tailwind CSS v4 bindings.

---

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: complete FluffyDoll official game website and privacy policy"
git push origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com/new](https://vercel.com/new).
2. Select repository **FluffyDoll-website**.
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**.

---

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the game landing page or [http://localhost:3000/privacy-policy](http://localhost:3000/privacy-policy) for the legal policy.
