# Portfolio Website - Full-Stack Web Application

## Overview

This is a modern full-stack web application built as a personal portfolio website for Muhammad Arslan, a Full-Stack Developer. The application showcases a developer's professional experience, skills, projects, and achievements through a clean, responsive interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage (development) with interface for database storage
- **API Structure**: RESTful API with /api prefix routing

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Development Server**: Vite dev server with HMR
- **Production Build**: Separate client and server builds
- **Database Migrations**: Drizzle Kit for schema management

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management with username/password authentication
- **Migrations**: Located in `./migrations` directory
- **Connection**: Neon Database serverless connection

### Authentication System
- **User Schema**: Users table with id, username, password fields
- **Validation**: Zod schema validation for user inputs
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### UI Component System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Neutral color palette with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Built on Radix UI primitives for keyboard navigation and screen reader support

### Portfolio Sections
- **Navigation**: Smooth scrolling navigation with mobile hamburger menu and blog link
- **Hero Section**: Professional introduction with call-to-action buttons including blog access
- **Skills Section**: Technical stack organized by categories
- **Experience Section**: Professional work history with achievements
- **Projects Section**: Showcase of development projects
- **Contact Section**: Professional contact information and links
- **Blog System**: Markdown-based blog with syntax highlighting and responsive design

## Data Flow

1. **Client Requests**: Browser loads React application from Vite dev server
2. **API Calls**: TanStack Query manages API requests to Express backend
3. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL
4. **Session Management**: Express handles user sessions and authentication
5. **Static Assets**: Vite serves static files and handles asset optimization

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI components, Lucide React icons
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns for date formatting
- **Carousel**: Embla Carousel for interactive components

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full type safety across client and server
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Module Replacement**: Vite HMR for fast development cycles
- **Database**: Local PostgreSQL or Neon Database development instance
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built frontend from `dist/public`
- **Database**: Production PostgreSQL instance via Neon Database

### Hosting Options
- **Platform**: Configured for deployment on Railway, Fly.io, or similar platforms
- **Database**: Neon Database serverless PostgreSQL
- **Process Management**: PM2 for production process management
- **Environment**: NODE_ENV=production for production optimizations

## User Preferences

Preferred communication style: Simple, everyday language.

### Blog System Architecture
- **Markdown Processing**: Server-side markdown parsing with syntax highlighting
- **File Storage**: Blog posts stored as .md files in `/blogs` directory
- **API Endpoints**: RESTful API for blog listing and individual post retrieval
- **Content Features**: Automatic excerpt generation, read time calculation, and tag extraction
- **Responsive Design**: Mobile-optimized blog layout with proper typography
- **Navigation Integration**: Seamless navigation between portfolio and blog sections

## Changelog

Changelog:
- July 04, 2025. Initial setup
- July 04, 2025. Added blog system with markdown support, syntax highlighting, and responsive design