# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture Overview

This is a static React marketing website for AMAREA Cosmetics (spinoff from Università Politecnica delle Marche). There is no backend, API integration, or external state management.

### Tech Stack
- **React 19** with functional components and hooks
- **Vite** for bundling and dev server
- **React Router 7** for client-side routing
- **TailwindCSS 4** for styling with custom theme
- **Embla Carousel** for team member carousel with autoplay
- **Lucide React** for icons

### Project Structure
- `src/pages/` - Route components (Homepage, Documentation, PrivacyPolicy, TermsConditions)
- `src/components/` - Shared components (Navbar, Footer, Carousel)
- `src/pages/Layout.jsx` - Root layout wrapper with Navbar and Footer
- `src/App.jsx` - Route definitions
- `public/images/` - Static images (hero, team photos)
- `src/assets/images/` - Product images, logos

### Routing
Routes are defined in `App.jsx`:
- `/` - Homepage
- `/docs` - Documentation (company info, team)
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions

### Styling
Custom TailwindCSS theme colors defined in `src/index.css`:
- `--color-primary: #aa6cbd` (purple)
- `--color-secondary: #e4e4e4` (light gray)
- `--color-accent: #E8C5C9` (rose)

Serif font family used throughout. Responsive design uses Tailwind `md:` and `sm:` breakpoints.

### Data Management
All content is hardcoded directly in components:
- Team member data in `Carousel.jsx` and `Documentation.jsx`
- Product information in `Homepage.jsx`
- No API calls or external data sources

### Content Language
All website content is in Italian.
