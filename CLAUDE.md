# Claude Instructions for Minigolf Barcelona Website

## Project Overview
Single page website for an indoor minigolf in Barcelona. Frontend-only with modern tech stack focused on performance and SEO.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Internationalization**: next-intl (Catalan/Spanish/English)
- **Maps**: Google Maps API
- **Deployment**: Vercel

## Development Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting and type checking
npm run lint
npm run typecheck

# Format code
npm run format
```

## Project Structure
```
src/
├── app/                    # App Router pages and layouts
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── styles/               # Global styles and Tailwind config
├── types/                # TypeScript type definitions
├── messages/             # Internationalization files
└── public/               # Static assets
```

## Code Standards
- Use TypeScript for all components
- Follow Next.js App Router conventions
- Use Tailwind for styling (avoid custom CSS when possible)
- Implement responsive design mobile-first
- Use semantic HTML for accessibility
- Optimize images with Next.js Image component

## SEO Requirements
- Implement proper meta tags for local business
- Use structured data for business information
- Optimize for Barcelona minigolf keywords
- Ensure fast Core Web Vitals scores

## Internationalization
- Support Catalan, Spanish, and English
- Use next-intl for translations
- Implement locale-based routing

## Performance Goals
- Lighthouse score > 90 on all metrics
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

## Key Features
- Hero section with course preview
- Interactive course gallery
- Pricing information
- Location and contact details
- Mobile-optimized navigation
- Smooth scroll animations