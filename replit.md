# Rest Express - База отдыха "ПРЕСТИЖ"

## Overview

This is a full-stack web application for a Russian resort/recreation center called "ПРЕСТИЖ" (Prestige). The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, designed to showcase the resort's services, amenities, and provide booking functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Theme**: Light/dark theme support with custom theme provider
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Store**: PostgreSQL-backed session storage
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with resort introduction
   - About section with resort features
   - Services section showcasing accommodation types
   - Gallery section with resort images
   - Contact section with booking form
   - Footer with navigation and social links

2. **UI Components**:
   - Complete shadcn/ui component library
   - Custom theme toggle functionality
   - Responsive navigation with mobile support
   - Toast notifications system
   - Form components with validation

3. **Layout & Styling**:
   - Responsive design optimized for all devices
   - Glass effect navigation header
   - Smooth scrolling between sections
   - Custom CSS variables for theming

### Backend Components
1. **Server Setup**:
   - Express.js server with middleware
   - Development mode with Vite integration
   - Production build with esbuild
   - Request logging and error handling

2. **Database Layer**:
   - User authentication schema
   - Storage interface for CRUD operations
   - Migration system with Drizzle Kit
   - Connection pooling with Neon Database

3. **API Structure**:
   - RESTful API endpoints (to be implemented)
   - Type-safe request/response handling
   - Session management
   - Error handling middleware

## Data Flow

1. **Client-Side Rendering**: React application serves as SPA with client-side routing
2. **API Communication**: React Query manages server state and API calls
3. **Database Operations**: Drizzle ORM handles type-safe database interactions
4. **Session Management**: PostgreSQL stores user sessions for authentication
5. **Development Workflow**: Vite provides hot reloading and fast builds

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Components**: Radix UI primitives and shadcn/ui
- **State Management**: TanStack React Query
- **Routing**: Wouter for lightweight routing
- **Date Handling**: date-fns for date utilities
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Server**: Express.js with TypeScript
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across stack
- **Linting**: ESLint configuration
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with nodemon-like functionality
- **Database**: Neon Database with development credentials
- **Integration**: Vite proxy for API calls during development

### Production Build
- **Frontend**: Vite build generating optimized static assets
- **Backend**: esbuild compilation to ESM bundle
- **Database**: Production Neon Database instance
- **Deployment**: Single server deployment with static file serving

### Environment Configuration
- **Database**: Environment variable for DATABASE_URL
- **Session**: PostgreSQL-backed session storage
- **Assets**: Static file serving for production builds
- **API**: RESTful API with /api prefix

## Changelog

- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.