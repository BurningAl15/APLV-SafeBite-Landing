# SafeBite Landing Page

A bilingual landing page for **SafeBite**, an informational mobile app that helps people review food labels for possible cow's-milk-related ingredients (CMPA/APLV context).

This project explores a modern tech stack focused on accessibility, internationalization (i18n), and SEO optimization.

## 📱 Product Overview: SafeBite

SafeBite is an informational mobile companion for people reviewing food labels for possible cow's-milk-related ingredients (CMPA/APLV context). It helps make label review quicker while keeping the full physical label as the source of truth.

- **Fast Ingredient Review:** On-device OCR and local term matching highlight possible milk-related ingredients and trace warnings.
- **Offline Main Scan:** The core image-to-text and ingredient review flow runs on the device without an internet connection.
- **Photo privacy:** Product photos are not uploaded for OCR or scan-history sync. Account, scan-history sync, analytics, diagnostics, ads, and purchase status can involve the services described on the localized Privacy page.
- **Guest or account use:** Scan without creating an account; guest scan history is temporary and device-local. An account can keep a cloud-synced scan history.
- **English and Spanish:** The app detects the device language on first launch and lets the user switch languages later.
- **Daily free use and Premium:** The free tier includes three scans per day, with optional extra-scan paths. Premium removes the scan limit and rewarded ads; current subscription options and prices are shown by the relevant store inside the app.
- **No safety certification:** Results are informational. Users must read the complete package label and consult qualified healthcare professionals for medical decisions.

## 🚀 Key Technical Features

### 🌍 Internationalization (i18n)
- **Framework:** Orchestrated with `next-intl`.
- **Routing:** Dynamic locale-based routing (`/en`, `/es`) with automatic browser language detection.
- **Client/Server Synergy:** Seamless translation integration across both Server Components and Client Components.
- **Dynamic Context:** Language switcher preserves the user's current route while toggling locales.

### 🔍 Search Engine Optimization (SEO)
- **Dynamic Metadata:** Implements `generateMetadata` for localized titles, descriptions, and OpenGraph tags.
- **Search Readiness:** Automated `sitemap.xml` and `robots.txt` generation via Next.js Metadata API.
- **Mobile Hook:** Integrated Apple Smart App Banners and localized meta keywords for niche market discovery.

### ⚡ UX & Modern Design
- **Smooth Navigation:** Global smooth-scroll implementation for high-fidelity transitions between sections.
- **Performance:** Leveraging Next.js App Router and Turbopack for near-instant page loads.
- **Responsive Layouts:** Mobile-first architecture with strict padding management for small devices.
- **Reusable Architecture:** Unified `LegalLayout` system for scalable creation of compliance pages (Privacy, Terms, Support, etc.).

- **Framework:** [Next.js 15+](https://nextjs.org) (App Router)
- **Logic:** TypeScript
- **Styling:** Tailwind CSS 4
- **i18n:** next-intl
- **Deployment:** Vercel

## 🏛️ App Store & Play Store Compliance

This landing page serves as the official metadata hub for SafeBite's store submissions:
- **Privacy Policy:** [Localized Privacy Policy](https://safe-bite-landing.vercel.app/en/privacy)
- **Terms of Service:** [Localized Terms](https://safe-bite-landing.vercel.app/en/terms)
- **Support:** [Support Center](https://safe-bite-landing.vercel.app/en/support)
- **Age Rating:** [Rating Declaration](https://safe-bite-landing.vercel.app/en/age-rating)
- **Smart App Banner:** Safari-integrated banner for seamless app discovery.

## 📍 Product state

The current app source is version `1.1.0`, with iOS build `86` and Android version code `86` configured. This repository describes implementation; it does not by itself confirm store approval, public rollout, or completion of physical-device purchase/OCR QA. See the app repository's `docs/RELEASE_CHECKPOINT.md` for the dated evidence and open validation items.

Household/family sharing is not currently available in the app. Do not advertise shared family history until the feature flag is re-enabled and the flow is tested.

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Deployment

Optimized for Vercel. Simply connect your repository and the project will auto-configure based on `next.config.ts`. The custom `middleware.ts` handles localized routing for all compliance pages.

---
*Developed by **Aldhair Vera** & **FatCat Game Studio** to promote digital solutions for health and safety.*
