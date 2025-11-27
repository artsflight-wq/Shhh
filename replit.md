# Overview

This is a Discord bot documentation website built with React, TypeScript, and Express. The application provides a searchable command reference for a Discord bot called "YELL", featuring 250+ commands across multiple categories including security, moderation, info, utility, economy, and more. The site includes a modern, dark-themed UI with parallax effects, smooth scrolling navigation, and an interactive command browser.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter is used for lightweight client-side routing instead of React Router. The application has a minimal route structure with home, terms of service, and 404 pages.

**State Management**: TanStack Query (React Query) handles server state management for fetching and caching command data. No global state management library is used - component state is managed locally with React hooks.

**UI Component Library**: The application uses shadcn/ui components built on Radix UI primitives. This provides accessible, customizable components following the "New York" style variant. Components are styled with Tailwind CSS and use CSS variables for theming.

**Styling Approach**: Tailwind CSS with a custom dark theme as the default. The design uses a color palette centered around vibrant blue (`hsl(221 83% 53%)`) as the primary color against very dark backgrounds. Custom fonts include Inter for body text, Space Grotesk for headings, and JetBrains Mono for code.

**Design Patterns**: 
- Component composition with clearly separated presentational components (Hero, Navbar, Footer, CommandList, NavigationRail)
- Custom hooks for responsive behavior (useIsMobile) and toast notifications
- Performance optimizations including requestAnimationFrame throttling for scroll and mouse events, and React memo for preventing unnecessary re-renders

## Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript.

**Development vs Production**: The application has separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`). In development, Vite middleware is integrated into Express for HMR. In production, Express serves pre-built static assets.

**API Design**: RESTful API with the following endpoints:
- `GET /api/commands` - Retrieve all commands
- `GET /api/commands/category/:category` - Filter commands by category
- `GET /api/commands/search?q=` - Search commands by query string

**Storage Layer**: The application uses an abstraction pattern with an `IStorage` interface. Currently implements `MemoryStorage` for in-memory data storage as a fallback. The structure is designed to support database storage (Drizzle ORM with PostgreSQL) but the implementation uses memory storage in the current codebase.

**Data Seeding**: Commands are seeded from a hardcoded array in `server/seed.ts` on application startup. This happens once per server instance using a flag to prevent duplicate seeding.

**Error Handling**: API endpoints use try-catch blocks with appropriate HTTP status codes (400 for bad requests, 500 for server errors).

## Data Storage Solutions

**ORM**: Drizzle ORM is configured for PostgreSQL via the Neon serverless driver, though the active implementation uses in-memory storage.

**Database Schema**: Defined in `shared/schema.ts`:
- `users` table: id (UUID), username (unique), password
- `commands` table: id (UUID), name, aliases (array), arguments, description, category, usage

**Schema Validation**: Zod schemas are generated from Drizzle tables using `drizzle-zod` for runtime validation and type safety.

**Connection Pooling**: Uses `@neondatabase/serverless` Pool for database connections with connection string from environment variables.

**Migrations**: Drizzle Kit is configured to generate migrations in the `./migrations` directory, though no migration files are present in the current repository.

## External Dependencies

**Database**: PostgreSQL via Neon serverless (configured but not actively used - falls back to in-memory storage)

**UI Components**: 
- Radix UI primitives for accessible component foundations
- Lucide React for icons
- Embla Carousel for carousel functionality
- CMDK for command palette patterns

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for backend production builds
- Tailwind CSS for styling
- PostCSS with Autoprefixer

**Development Tools**:
- Replit-specific plugins for development (cartographer, dev banner, runtime error modal)
- Custom Vite plugin for meta image URL injection based on deployment domain

**Type Safety**: TypeScript with strict mode enabled across the entire codebase. Path aliases configured for cleaner imports (`@/`, `@shared/`, `@assets/`).

**Session Management**: `connect-pg-simple` is included as a dependency, suggesting session storage capability with PostgreSQL (not actively used in current implementation).

**Fonts**: Google Fonts (Inter, Space Grotesk, JetBrains Mono) loaded via CDN in the HTML template.