# Modern 3D Digital Agency Website

## Overview

This is a full-stack React application for a modern digital agency website featuring interactive 3D elements, smooth animations, and a sophisticated black-and-white design theme. The application uses React for the frontend, Express.js for the backend, and is designed to showcase digital agency services with high visual appeal and user engagement.

## System Architecture

### Frontend Architecture
- **React 18**: Component-based UI with TypeScript support
- **Vite**: Build tool and development server for fast development
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **ShadCN/UI**: Pre-built accessible UI components with Radix UI primitives
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Data fetching and state management
- **Custom Hooks**: Mouse position tracking and scroll-based animations

### Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **Node.js**: Runtime environment with ES modules
- **In-memory Storage**: Simple data persistence using Map-based storage
- **Database Ready**: Configured for PostgreSQL with Drizzle ORM

### Design System
- **Color Scheme**: Primary black (#000000) and white (#FFFFFF) with teal/green gradient accents
- **Typography**: Inter font family with modern, clean styling
- **Animations**: Smooth transitions and interactive elements
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Key Components

### Interactive Elements
- **3D Background**: Canvas-based particle system with mouse interaction
- **Animated Sections**: Scroll-triggered animations for content reveals
- **Interactive Navigation**: Smooth scrolling with dynamic styling
- **Card Hover Effects**: 3D transformations and gradient overlays

### Content Sections
- **Hero Section**: Interactive 3D background with main CTA
- **Services**: Web Development, SEO, PPC, UI/UX Design
- **Team**: Horizontal scrolling team member cards
- **Portfolio**: Project showcase with category filtering
- **Testimonials**: Client feedback with profile images
- **FAQ**: Expandable question/answer interface
- **Contact**: Multi-channel contact options

### UI Components
- **Reusable Components**: Button, Card, Dialog, Toast, and form elements
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Dark Theme**: Consistent dark mode implementation
- **Cookie Consent**: GDPR-compliant cookie notification

## Data Flow

### Frontend Data Flow
1. **Component Rendering**: React components render with initial state
2. **API Calls**: TanStack Query manages server communication
3. **State Updates**: Local state changes trigger re-renders
4. **Animation Triggers**: Scroll events and user interactions drive animations

### Backend Data Flow
1. **Request Handling**: Express routes process incoming requests
2. **Data Operations**: In-memory storage handles CRUD operations
3. **Response Formatting**: JSON responses with proper error handling
4. **Middleware**: Request logging and error handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: react, react-dom, react-hook-form
- **UI Libraries**: @radix-ui components, lucide-react icons
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Animations**: Custom scroll-based and mouse-following animations
- **Routing**: wouter for client-side navigation

### Backend Dependencies
- **Database**: @neondatabase/serverless, drizzle-orm
- **Session Management**: connect-pg-simple
- **Development**: tsx, esbuild for build process

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code formatting and linting
- **Vite Plugins**: Hot reload, error overlay, and development features

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx for TypeScript execution
- **Database**: PostgreSQL with Drizzle migrations
- **File Structure**: Monorepo with shared schemas

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: esbuild compilation to `dist/index.js`
- **Static Assets**: Served from build directory
- **Database**: Production PostgreSQL instance

### Environment Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Build Scripts**: Separate dev, build, and production commands
- **Type Checking**: TypeScript compilation validation

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```