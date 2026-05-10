# 🌍 Traveloop - Personalized Travel Planning Platform

**Traveloop** is an intelligent, collaborative platform designed to transform the way individuals plan and experience travel. Built for the Odoo Hackathon, it combines high-end aesthetics with powerful relational data management.

## ✨ What we did on this project

We have built a comprehensive travel ecosystem from the ground up, including:

1.  **Premium Glassmorphism UI**: A custom design system built with Vanilla CSS, featuring backdrop blurs, vibrant gradients, and smooth micro-animations.
2.  **Itinerary Builder**: An interactive planner for multi-city trips with dynamic section management and budget allocation.
3.  **Intelligent Budgeting**: Automated cost estimation with category-wise breakdowns and over-limit alerts using Recharts.
4.  **Auth System**: Stunning Login and Signup pages designed based on architectural mockups.
5.  **Relational Database**: A robust schema using Prisma and SQLite to manage Users, Trips, Stops, Expenses, and Checklists.
6.  **Admin Dashboard**: High-level analytics for tracking platform growth and destination popularity.
7.  **Community Hub**: A social platform for sharing and cloning successful itineraries.
8.  **Packing & Journaling**: Interactive checklists and per-trip journals for a complete travel experience.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router), TypeScript
- **Database**: Prisma ORM with SQLite
- **Styling**: Vanilla CSS (Custom Design System)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion

---

## 🚀 How to Run the Project

### **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### **1. Install Dependencies**
```bash
npm install
```

### **2. Setup the Database**
Initialize the database and run migrations to create the tables:
```bash
npx prisma migrate dev --name init
```

### **3. Launch the App**
Start the development server:
```bash
npm run dev
```

### **4. Access in Browser**
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## 🎨 UI/UX Highlights
- **Dashboard**: `src/app/page.tsx`
- **Login/Signup**: `src/app/login/page.tsx`, `src/app/signup/page.tsx`
- **Itinerary Builder**: `src/app/trips/[id]/edit/page.tsx`
- **Budget Tracking**: `src/app/trips/[id]/page.tsx`
- **Packing Checklist**: `src/app/trips/[id]/checklist/page.tsx`

---
**Traveloop - Plan Smarter, Travel Better.**
