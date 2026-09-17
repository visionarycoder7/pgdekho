# 🏠 PG Dekho (pgdekho)

> **Discover Verified PGs, Hostels & Room Rentals Across India.**  
> Zero Brokerage • Transparent Pricing & Deposits • 100% Real Floor Plans.

PG Dekho is a modern web platform built to help students, interns, and working professionals discover suitable accommodation with true transparency — food menus, accurate amenity specs, walking distance to transit hubs, and upfront deposit terms.

---

## 🚀 Current Status: Early Access / Coming Soon

The platform is currently in active development. The landing page showcases the live prototype preview, upcoming product roadmap, dedicated property owner onboarding, and VIP waitlist system.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS Design System with CSS Variables, Glassmorphism, and responsive grid
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Inter*)

---

## 📁 Project Architecture

```text
pgdekho/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Brand imagery and static visual assets
│   ├── components/        # Reusable UI sections and components
│   │   ├── Navbar.jsx         # Sticky header with responsive navigation
│   │   ├── Hero.jsx           # Hero headline, value chips & concept search bar
│   │   ├── PlatformPreview.jsx# Interactive mockup card with tabs & details
│   │   ├── ValueStrip.jsx     # 4 Core value proposition cards
│   │   ├── HowItWorks.jsx     # 3-Step guided flow (Discover, Compare, Move In)
│   │   ├── OwnerSection.jsx   # Dedicated section for PG / property owners
│   │   ├── FutureFeatures.jsx # Upcoming features roadmap with status badges
│   │   ├── FAQSection.jsx     # Interactive FAQ accordion
│   │   ├── Waitlist.jsx       # Email waitlist with role & city selector
│   │   └── Footer.jsx         # Footer with links, roadmap, and socials
│   ├── pages/
│   │   └── Home.jsx           # Assembled landing page
│   ├── services/
│   │   └── api.js             # API service layer with future REST endpoints
│   ├── index.css          # Design tokens, color palette, and utilities
│   ├── App.jsx            # Application root component
│   └── main.jsx           # React DOM root mounting
├── index.html             # HTML entrypoint with metadata and fonts
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite build configuration
```

---

## 🏃 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/pgdekho.git
   cd pgdekho
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🔌 Connecting Future Backend

The `src/services/api.js` file is structured to connect seamlessly to your future backend API (Node.js, Express, Python FastAPI, Firebase, Supabase, etc.).

Key future endpoints pre-configured with placeholder functions:
- `submitWaitlist()` → `POST /api/v1/waitlist`
- `getProperties()` → `GET /api/v1/properties`
- `getPropertyById()` → `GET /api/v1/properties/:id`
- `registerOwnerProperty()` → `POST /api/v1/owner/properties`
- `loginUser()` → `POST /api/v1/auth/login`

---

## 📄 License

© 2026 PG Dekho. All rights reserved.
