<div align="center">

  <img src="public/favicon.svg" alt="PG Dekho Logo" width="84" height="84" />

  # PG Dekho (pgdekho)
  ### The Modern Rental Discovery & Transparency Platform for India

  <p align="center">
    <strong>Discover Verified PGs, Hostels, Rooms &amp; Flats with Zero Brokerage Drama.</strong><br />
    Transparent Rent • Real Amenity Specs • 100% Real Floor Plans • Upfront Deposit Policies
  </p>

  <p align="center">
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-Ready-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel Ready" /></a>
    <a href="https://lucide.dev/"><img src="https://img.shields.io/badge/Icons-Lucide_React-F56565?style=flat-square" alt="Lucide React" /></a>
    <img src="https://img.shields.io/badge/SEO-Optimized-10B981?style=flat-square" alt="SEO Optimized" />
    <img src="https://img.shields.io/badge/Author-Sohan-4F46E5?style=flat-square" alt="Author: Sohan" />
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-live-prototype-preview">Live Preview</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-deployment-guide">Deployment</a> •
    <a href="#-future-backend-api">Backend Integration</a>
  </p>

</div>

---

## 🌟 Overview

**PG Dekho** is an India-focused accommodation discovery platform designed from the ground up for students, interns, and working professionals moving to major student and IT hubs (Bengaluru, Pune, Delhi NCR, Hyderabad, Kota, Mumbai, Chennai).

Unlike conventional classifieds and broker-heavy platforms, PG Dekho focuses on **truth and transparency**:
- **Zero Hidden Maintenance**: Know the exact monthly rent breakdown before visiting.
- **Deposit Refund Guarantee**: Verified lock-in and security deposit terms upfront.
- **True Amenity Specs**: WiFi bandwidth tests, real meal menus, and plumbing verification.
- **Direct Owner Connection**: Zero broker intermediaries or commission markups.

---

## 🚀 Key Features

* 💎 **Interactive Platform Preview**: Live prototype card allowing users to preview Single Room PGs, 2-Sharing Hostels, and Studio Flats.
* 🔍 **Concept Discovery Bar**: Multi-city and budget filter prototype simulating future search capabilities.
* 🏢 **Dedicated Owner Portal**: Specialized section for PG and hostel owners to pre-register inventory with priority onboarding.
* 🗺️ **Upcoming Roadmap**: Clear 3-phase feature pipeline (AI Commute Matcher, 360° Tours, Digital Escrow, Food Reviews).
* 📝 **VIP Waitlist System**: Role-based waitlist (Renter vs Owner) with city selector, client-side validation, and queue ticket generation.
* ⚡ **Performance & SEO First**:
  * Clean semantic HTML5 structure with a single `<h1>`.
  * OpenGraph (`og:image`), Twitter Cards, Apple Touch Icons, and `manifest.json`.
  * Structured Data (JSON-LD) for `Organization`, `WebSite`, and `FAQPage`.
  * AI Search & GEO (Generative Engine Optimization) ready (`robots.txt` + `sitemap.xml`).
  * Medium-thick theme-matched scrollbar with `scrollbar-gutter: stable` to eliminate layout shift (CLS).
  * Vercel Web Analytics integration out of the box.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | Custom Vanilla CSS Design System with CSS Variables & Glassmorphism |
| **Icons** | [Lucide React](https://lucide.dev/) + Inline Scalable SVGs |
| **Typography** | Plus Jakarta Sans & Inter (Google Fonts) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **SEO & Schema** | Schema.org JSON-LD (FAQ, Org, WebSite) |

---

## 📁 Project Structure

```text
pgdekho/
├── public/
│   ├── favicon.svg          # Vector brand logo favicon
│   ├── apple-touch-icon.svg # iOS home-screen touch icon
│   ├── og-image.svg         # 1200x630 social share card
│   ├── manifest.json        # Web App Manifest (PWA)
│   ├── robots.txt           # Crawler configuration with AI bot access
│   └── sitemap.xml          # XML sitemap
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky blur navbar with mobile menu
│   │   ├── Hero.jsx             # Headline, value pills & concept search
│   │   ├── PlatformPreview.jsx  # Interactive property card mockup
│   │   ├── ValueStrip.jsx       # 4 Core value proposition cards
│   │   ├── HowItWorks.jsx       # 3-Step guided flow
│   │   ├── OwnerSection.jsx     # Dedicated property owner portal
│   │   ├── FutureFeatures.jsx   # Product roadmap with status tags
│   │   ├── MeetTheFounder.jsx   # Founder story, student mission & personal note
│   │   ├── FAQSection.jsx       # Interactive FAQ accordion
│   │   ├── Waitlist.jsx         # Waitlist form & success ticket
│   │   └── Footer.jsx           # Footer with links, socials & author credit
│   ├── pages/
│   │   └── Home.jsx             # Main assembled landing page
│   ├── services/
│   │   └── api.js               # Centralized placeholder API service layer
│   ├── App.jsx              # App entry point with Vercel Analytics
│   ├── index.css            # Design tokens, responsive grid & custom scrollbar
│   └── main.jsx             # React DOM root mounting
├── index.html               # Production HTML with SEO & JSON-LD schema
├── vercel.json              # Vercel deployment & caching configuration
├── package.json             # Dependencies and build scripts
└── vite.config.js           # Vite configuration
```

---

## 💻 Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+) installed.

### 2. Clone & Install
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/pgdekho.git
cd pgdekho
npm install
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## ☁️ Deployment Guide

### Deploy on Vercel (Recommended)
This project includes [`vercel.json`](./vercel.json) and `@vercel/analytics` pre-configured.

1. Push your code to your GitHub account:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/pgdekho.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your **`pgdekho`** repository.
4. Click **"Deploy"** — Vercel will automatically build and deploy the site in ~30 seconds.

---

## 🔌 Future Backend Integration

The [`src/services/api.js`](src/services/api.js) file is pre-configured with placeholder functions and documented endpoints ready for your future backend:

```javascript
// Submit waitlist entry (POST /api/v1/waitlist)
await submitWaitlist({ email, userType, city });

// Fetch properties with filters (GET /api/v1/properties)
await getProperties({ city: 'Bengaluru', type: 'pg', budget: '12000' });

// Fetch single property details (GET /api/v1/properties/:id)
await getPropertyById(propertyId);

// Owner property listing (POST /api/v1/owner/properties)
await registerOwnerProperty(propertyData);
```

---

## 👤 Author & Creator

Crafted by **Sohan** ([@visionarycoder7](https://github.com/visionarycoder7))  
Project: **PG Dekho Technologies**  
Contact: [hello@pgdekho.com](mailto:hello@pgdekho.com) | [sohan.ghosh666@gmail.com](mailto:sohan.ghosh666@gmail.com)

---

## 📄 License

© 2026 PG Dekho. All rights reserved.
