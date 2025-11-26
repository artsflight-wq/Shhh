# YELL Discord Bot - Web Documentation

## Overview

YELL is a premium Discord utility bot with an accompanying web documentation interface. The system consists of two main components:

1. **Discord Bot Backend** - A comprehensive Discord bot offering 300+ commands across categories like moderation, security, utility, and entertainment
2. **Web Frontend** - A modern documentation website built with React that displays bot features, commands, and usage information

The web application serves as a showcase and reference documentation for the Discord bot's extensive feature set.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **TailwindCSS** (v4) with custom theming for styling
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** for server state management and API data fetching
- **Radix UI** components for accessible, unstyled UI primitives
- **shadcn/ui** component system (New York variant) for pre-styled components

**Design System:**
- Dark-first color scheme with vibrant blue primary color (#5865F2 - Discord blue)
- Custom font stack: Inter (body), Space Grotesk (headings), JetBrains Mono (code)
- Component-based architecture with reusable UI primitives
- Responsive design with mobile-first approach

**Key Frontend Components:**
- `Hero` - Landing section with feature highlights and call-to-action
- `CommandList` - Searchable, filterable command documentation with category organization and pagination
- `NavigationRail` - Category navigation sidebar
- `ParallaxBackground` - Animated background effects
- `Navbar` - Fixed navigation with contact button
- `Footer` - Minimal footer with copyright and links

**UI Components (Minimized):**
Only essential shadcn/ui components are included:
- `badge` - Category and command badges
- `button` - Interactive buttons
- `card` - Content cards
- `input` - Search and form inputs
- `toaster` - Toast notifications
- `tooltip` - Hover tooltips

**State Management:**
- React Query for async data fetching and caching
- No global state management library (relies on React Query and local state)

### Backend Architecture

**Technology Stack:**
- **Node.js** with Express.js for HTTP server
- **TypeScript** for type safety across the stack
- **Drizzle ORM** for database interactions
- **PostgreSQL** (via Neon serverless) for data persistence
- **Zod** for runtime schema validation

**Server Structure:**
- Development server (`index-dev.ts`) with Vite middleware for HMR
- Production server (`index-prod.ts`) serving static build artifacts
- Modular routing system in `routes.ts`
- Shared schema definitions between client and server

**API Endpoints:**
- `GET /api/commands` - Retrieve all commands
- `GET /api/commands/category/:category` - Filter commands by category
- `GET /api/commands/search?q=<query>` - Search commands by name/description

**Database Design:**
- `users` table - User authentication (currently minimal, appears to be scaffolding)
- `commands` table - Command metadata with fields:
  - `id` - UUID primary key
  - `name` - Command name
  - `aliases` - Array of alternative command names
  - `arguments` - Argument specification string
  - `description` - Command description
  - `category` - Category classification
  - `usage` - Usage example string

**Data Seeding:**
- Commands are seeded from a predefined dataset on server startup
- Seed data includes 15+ categories with comprehensive command coverage
- Categories: security, moderation, info, utility, ticket, voice, custom roles, games, fun, settings, afk, family, snipe, lastfm, configuration

### Build and Deployment

**Build Process:**
1. Frontend builds to `dist/public` via Vite
2. Backend bundles to `dist/index.js` via esbuild
3. Production server serves static files and API routes

**Development Workflow:**
- Dual-process development: Vite dev server (port 5000) + Express API server
- Hot module replacement for frontend changes
- TypeScript type checking via `tsc --noEmit`

**Replit-Specific Features:**
- Custom Vite plugins for Replit integration (cartographer, dev banner, runtime error overlay)
- Meta image plugin for dynamic OpenGraph image URLs based on deployment domain
- Environment-based configuration for Replit vs. local development

## External Dependencies

### Database
- **Neon Serverless PostgreSQL** - Serverless Postgres database accessed via `@neondatabase/serverless`
- Connection configured via `DATABASE_URL` environment variable
- Drizzle ORM handles schema migrations and queries

### UI Component Libraries
- **Radix UI** - Complete suite of accessible, unstyled components (20+ packages)
- **shadcn/ui** - Pre-configured component library built on Radix primitives
- **Lucide React** - Icon library for UI icons
- **cmdk** - Command menu component (Command+K pattern)
- **embla-carousel-react** - Carousel/slider component
- **vaul** - Drawer component library

### Form Handling
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - Schema validation for forms and API data

### Styling
- **TailwindCSS** v4 with custom configuration
- **class-variance-authority** - Component variant styling
- **tailwind-merge** - Utility for merging Tailwind classes
- **clsx** - Conditional class name composition

### Development Tools
- **Vite** - Build tool and dev server
- **esbuild** - Production backend bundling
- **tsx** - TypeScript execution for development
- **Drizzle Kit** - Database schema migrations

### Replit Integrations
- `@replit/vite-plugin-cartographer` - Code navigation
- `@replit/vite-plugin-dev-banner` - Development environment banner
- `@replit/vite-plugin-runtime-error-modal` - Error display overlay

### Session Management
- **express-session** - Session middleware (referenced in package.json)
- **connect-pg-simple** - PostgreSQL session store

### Data Utilities
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation