# SafeBite Landing Page

A high-performance, production-ready landing page for **SafeBite**, a mobile application designed for families managing Cow's Milk Protein Allergy (CMPA/APLV). 

This project explores a modern tech stack focused on accessibility, internationalization (i18n), and SEO optimization.

## 📱 Product Overview: SafeBite

SafeBite is an essential mobile companion for families living with **Cow's Milk Protein Allergy (CMPA/APLV)**. The app simplifies grocery shopping by providing:

- **Instant Ingredient Scanning:** Using local OCR to identify hidden dairy derivatives (casein, whey, etc.) in seconds.
- **100% Offline Intelligence:** No internet required—works perfectly inside supermarkets or basements where signal is weak.
- **Privacy-First Design:** All image processing happens on-device; no personal data or photos are ever sent to external servers.
- **Peace of Mind:** Designed to reduce the anxiety of label reading and prevent accidental allergic reactions.

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

## 🏗️ Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org) (App Router)
- **Logic:** TypeScript
- **Styling:** Tailwind CSS 4
- **i18n:** next-intl
- **Deployment:** Vercel

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

Optimized for Vercel. Simply connect your repository and the project will auto-configure based on `next.config.ts`.

---
*Developed by **Aldhair Vera** & **FatCat Game Studio** to promote digital solutions for health and safety.*
