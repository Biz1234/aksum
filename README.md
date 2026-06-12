# Axum Tech Startups - Website

A modern, responsive, and performance-optimized corporate website for **Axum Tech Startups**, a technology company dedicated to building cutting-edge software solutions for enterprises and startups across Africa.

![Axum Tech Hero Preview](/images/slider-1.jpg) <!-- Optional banner preview logic if public paths are used -->

## Project Overview

The Axum Tech website is a single-page application (SPA) architecture built with Next.js App Router, featuring a highly dynamic and interactive user interface. It is designed to showcase the company's services, values, past projects, technology stack, and blog updates, serving as the digital storefront and a lead generation tool.

### Core Sections
- **Hero & Navigation**: Dynamic hero slider with CTA and sticky navigation with smooth scroll.
- **Values & About**: Context on the company mission to drive innovation in Africa.
- **Services**: Outline of software development, mobile apps, and enterprise solutions.
- **Projects & Products**: Grid showcase of latest deliverables (e.g., University Management System).
- **Tech Stack**: Animated marquee displaying the modern tools and frameworks used.
- **Blogs**: Recent insights and thought leadership.
- **Testimonials & Clients**: Social proof from industry partners.
- **Contact**: A functional inquiry form seamlessly integrated into the footer/contact section.

## Tech Stack

This project utilizes a robust modern web stack:
- **Framework:** [Next.js 16](https://nextjs.org/) (React 19, App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) (Headless accessible primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Animations:** Custom CSS and `tw-animate-css`
- **Type Checking:** TypeScript

## Folder Structure

```text
c:/Users/Administrator/Desktop/c/
├── app/                  # Next.js App Router root
│   ├── layout.tsx        # Global layout & metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Tailwind & custom global styles
├── components/           # Reusable UI components and sections
│   ├── ui/               # Base Radix UI components (buttons, dialogs, etc.)
│   ├── hero-section.tsx  
│   ├── navbar.tsx        
│   └── ...               # Other page sections
├── public/               # Static assets
│   ├── images/           # Images for hero slider, projects, logos
│   └── icons/            # App icons and favicons
└── ...                   # Config files (package.json, next.config.mjs, etc.)
```

## Getting Started

Follow these steps to run the development server locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) and [npm](https://www.npmjs.com/) installed on your machine.
*Note: The project currently uses `pnpm` and `npm` lockfiles. You can stick to `npm`.*

### 2. Installation
Clone the repository and install the dependencies:
```bash
# Navigate to the project directory
cd c:/Users/Administrator/Desktop/c/

# Install dependencies using npm
npm install
```

### 3. Run Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page will hot-reload as you make edits to the components or styles.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
Once the build is complete, you can start the production server:
```bash
npm run start
```

## Features & Customization
- **Theme Support:** Pre-configured for dark and light modes using Next Themes (`next-themes`) although the current design adopts a bespoke dark/gold premium aesthetic by default.
- **SEO Ready:** Global metadata is configured in `app/layout.tsx`. Update the open graph images or description there.
- **Adding Projects:** Edit the `projects` array within `components/projects-section.tsx` to add or remove portfolio items.

## License

This project is proprietary and confidential to Axum Tech.
