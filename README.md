# 🌟 Diponkor Roy — Developer Portfolio Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, highly responsive, and interactive **Full Stack Developer Portfolio Dashboard** designed and developed by **Diponkor Roy**. Built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**, this portfolio presents technical skills, featured full-stack projects, academic background, client testimonials, and direct contact options through a sleek vCard / dashboard aesthetic.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Featured Projects Showcased](#-featured-projects-showcased)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the App](#running-the-app)
- [Author & About](#-author--about)

---

## 🚀 Overview

This portfolio application departs from standard single-page scroll layouts by utilizing a **dynamic dashboard / vCard architecture**:
- **Left Panel (Profile Card / Sidebar):** Sticky personal card featuring an animated typewriter designation, avatar, quick bio, social links, resume download/preview modal trigger, and direct contact action.
- **Right Panel (Interactive Workspace):** Smooth tab-based navigation for **About**, **Resume & Education**, **Skills**, **Works (Projects)**, **Reviews**, and **Contact**.
- **Visual Aesthetics:** Dark slate theme with emerald/neon-green accents (`#6fc844`), backdrop blurs, glow lighting, and fluid Framer Motion micro-interactions.

---

## ✨ Key Features

- **⚡ Next.js 16 & React 19:** Powered by the Next.js App Router for optimal performance, server-side SEO metadata, and lightning-fast route transitions.
- **🎨 Modern Dark UI:** Styled with Tailwind CSS v4, custom ambient glows, and clean glassmorphism accents.
- **⌨️ Typewriter Effect:** Dynamic headline loop cycling through titles (*Full Stack Developer*, *MERN Stack Developer*, *Problem Solver*).
- **💼 Comprehensive Project Showcase:** Dynamic filtering and detailed project cards with live demo links, source code repositories, key engineering challenges, and tech tags.
- **🎓 Academic & Analytical Callout:** Highlights how an academic background in Agriculture from Sher-e-Bangla Agricultural University strengthens analytical and problem-solving capabilities in software development.
- **🛠️ Modular Skill Matrix:** Categorized technical skill pills across Frontend, Backend, Databases, and DevOps/Tools.
- **💬 Direct Contact Integration:** WhatsApp direct messaging integration and email triggers with feedback provided via Sonner toast notifications.
- **📱 Fully Responsive:** Optimized navigation and layout for mobile, tablet, and desktop viewports.

---

## 🛠 Tech Stack

### Frontend & UI
- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Library:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Typography:** Geist & Geist Mono (via `next/font`)

### Backend & Database (Project Ecosystem)
- **Runtime:** Node.js
- **Server Framework:** Express.js
- **Databases:** MongoDB, PostgreSQL, MySQL
- **Authentication:** JWT, Better Auth

---

## 📂 Project Architecture

```plaintext
client/
├── public/                 # Static assets, icons, project thumbnails, and resume PDF
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── assets/             # Images and local graphic assets
│   ├── components/         # Reusable UI components
│   │   ├── dashboard/      # DashboardLayout & panel navigation
│   │   ├── ui/             # TypewriterText, ThemeToggle, buttons
│   │   ├── ResumeButton.jsx
│   │   └── SocialLinks.jsx
│   ├── constants/          # Navigation links and social media endpoints
│   ├── data/               # Portfolio data (projects, skills, education, reviews)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── providers/          # Theme and application context providers
│   └── sections/           # Modular page sections
│       ├── about/          # Personal story, services, and fun facts
│       ├── contact/        # Contact channels and WhatsApp message form
│       ├── education/      # Academic degrees and university details
│       ├── hero/           # Hero elements and profile intro
│       ├── projects/       # Portfolio project gallery & filters
│       ├── resume/         # Resume view/download highlights
│       ├── reviews/        # Testimonials and peer feedback
│       └── skills/         # Interactive technical skill grids
├── .env                    # Environment configuration
├── package.json            # Project dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 💻 Featured Projects Showcased

1. **[StayNest](https://staynest-vert-beta.vercel.app)** — Rental property management platform with advanced search, filtering, and role-based property operations.
2. **[HireLoop](https://hireloop-client-five.vercel.app)** — Role-based job portal connecting recruiters, applicants, and admins with company management and job application workflows.
3. **[PetHaven](https://pet-adoption-platform-blush.vercel.app)** — Full-stack pet adoption platform connecting rescue animals with loving families through dedicated dashboards.
4. **[AgroLink](https://agrolink-nine-pied.vercel.app)** — Collaborative agricultural resource and knowledge-sharing platform for students, researchers, and farmers.
5. **[AgroMart AI](https://agromartai-client.vercel.app)** — Smart agricultural marketplace for farming supplies, seeds, and equipment with multi-tier role management.

---

## 🏁 Getting Started

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diponkorroy064-max/portfolio.git
   ```

2. Navigate to the client directory:
   ```bash
   cd portfolio/client
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env` file in the root of the `client` directory (or modify the existing one):

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:8000
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the dashboard.

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 👨‍💻 Author & About

### **Author:** Diponkor Roy

### **About Me:**
I am a passionate **Frontend & MERN Stack Developer** based in **Dhaka, Bangladesh**, specializing in building clean, intuitive, and high-performance digital experiences. 

Currently pursuing a **B.Sc. in Agriculture at Sher-e-Bangla Agricultural University**, I blend strong analytical discipline, scientific research methodologies, and problem-solving capabilities with modern web software engineering. I have hands-on experience architecting full-stack web applications, designing role-based dashboards, developing robust REST APIs, and implementing accessible, animated user interfaces with Next.js, React, Node.js, Express, and MongoDB.

- 📍 **Location:** Dhaka-1207, Bangladesh
- 💼 **Availability:** Open for Freelance & Full-time Engineering Opportunities
- 📧 **Email:** [diponkorroy064@gmail.com](mailto:diponkorroy064@gmail.com)
- 📞 **WhatsApp / Phone:** [+880 1744533593](https://wa.me/8801744533593)
- 🐙 **GitHub:** [@diponkorroy064-max](https://github.com/diponkorroy064-max)
- 💼 **LinkedIn:** [diponkorroy21010504](https://www.linkedin.com/in/diponkorroy21010504)
- 🌐 **X / Twitter:** [@diponkor2025](https://x.com/diponkor2025)
- 👤 **Facebook:** [diponkorroy.roy.92](https://www.facebook.com/diponkorroy.roy.92)

---

⭐️ *If you find this portfolio inspiring or helpful, feel free to give the repository a star!*
