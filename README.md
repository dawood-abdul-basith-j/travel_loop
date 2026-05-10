# 🌍 Traveloop - Personalized Travel Planning

Traveloop is an intelligent, collaborative platform designed to transform the way individuals plan and experience travel. It empowers users to dream, design, and organize multi-city trips with ease, combining flexibility with high-end interactive visualization.

## 🚀 Features

- **Multi-City Itineraries**: Create customized plans by adding travel stops and specific durations.
- **Dynamic Search**: Discover cities and activities through an integrated search interface.
- **Budget Management**: Automatic estimation of trip costs with detailed breakdowns and over-budget alerts.
- **Visual Planning**: View itineraries through structured timelines and glassmorphism UI components.
- **Collaborative Sharing**: Share trip plans publicly via unique URLs or copy community itineraries.
- **Admin Oversight**: Dedicated dashboard for platform analytics and user engagement trends.

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **Styling**: Vanilla CSS (Premium Glassmorphism Design)
- **Database**: Prisma with SQLite
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion

---

## 🛠️ How to Run the Project

### **Prerequisites**
- **Node.js** (v18+)
- **npm** or **yarn**

### **1. Installation**
Clone the repository and install the dependencies:
```bash
npm install
```

### **2. Database Setup**
Initialize the relational database and run migrations:
```bash
npx prisma migrate dev --name init
```

### **3. Start the Development Server**
Run the following command to start the app locally:
```bash
npm run dev
```

### **4. Access the App**
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🎨 UI/UX Highlights
The application follows a premium **Glassmorphism** aesthetic:
- **Dashboard**: `src/app/page.tsx`
- **Itinerary Builder**: `src/app/trips/[id]/edit/page.tsx`
- **Admin Analytics**: `src/app/admin/page.tsx`
- **Packing Checklist**: `src/app/trips/[id]/checklist/page.tsx`

---
**Traveloop - Plan Smarter, Travel Better.**
