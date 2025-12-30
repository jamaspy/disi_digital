# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 digital agency website for "disi digital", a Northern Beaches-based agency specializing in web development and SaaS platforms. The site uses the App Router architecture with TypeScript, React 18, and Tailwind CSS.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Overview

### Next.js App Router Structure

The app uses Next.js 14's App Router (`/app` directory):

- **`app/layout.tsx`**: Root layout with metadata, theme provider, analytics
- **`app/page.tsx`**: Homepage composed of section components
- **`app/posts/`**: Blog system with dynamic routes
  - `posts/page.tsx`: Blog listing page
  - `posts/[id]/page.tsx`: Individual post pages with SSG

### Content Management

**Blog Posts**: Markdown files in `/data/blog/` with frontmatter
- Each `.md` file includes: title, author, date, excerpt, image, tags, avatar
- Posts are read via `lib/posts.tsx` utility functions
- Rendered using `react-markdown` with custom styled components
- Syntax highlighting via `react-syntax-highlighter` with Dracula theme

### Component Architecture

Components follow a modular, section-based pattern:

```
components/ui/
├── about/          # About section components
├── articles/       # Articles/blog section
├── contact/        # Contact form section
├── pricing/        # Pricing section
├── services/       # Services section
└── [shared components]
```

Each major section has:
- `index.tsx`: Public exports
- `*-section.tsx`: Main section component
- Supporting components in subdirectories

### Styling System

- **Tailwind CSS** with shadcn/ui configuration
- Uses CSS variables for theme colors (HSL format)
- Custom Tailwind plugins for grid/dot backgrounds
- Custom animations (aurora, accordion)
- Dark mode via `next-themes` (forced dark mode by default)
- Poppins font loaded via `next/font/google`

### Key Dependencies

- **UI/Animation**: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `cobe`, `three-globe`
- **Forms**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **Markdown**: `gray-matter`, `react-markdown`, `remark`, `remark-html`
- **shadcn/ui**: Component system (New York style, RSC enabled)
- **Analytics**: `@vercel/analytics`, `@vercel/speed-insights`

### Path Aliases

```typescript
"@/*" maps to "./*"
```

Use `@/components`, `@/lib`, etc. for imports.

### SEO Implementation

- Structured data (JSON-LD) for Organization and BlogPosting schemas
- Dynamic metadata generation via `generateMetadata()`
- OpenGraph and Twitter card tags
- Sitemap and robots.txt via `app/sitemap.ts` and `app/robots.ts`
- Canonical URLs for all pages
- Google Search Console verification in layout metadata

### Static Site Generation

Blog posts use `generateStaticParams()` to pre-render all posts at build time. The `getFiles()` and `getPostBySlug()` utilities in `lib/posts.tsx` read markdown files synchronously during build.

### Image Configuration

Remote images allowed from:
- `assets.aceternity.com`
- `images.unsplash.com`

## Important Patterns

### Adding New Blog Posts

1. Create `.md` file in `data/blog/`
2. Include required frontmatter: title, author, date, excerpt, image, tags, avatar
3. Build automatically includes it via `generateStaticParams()`

### Creating New Sections

Follow the pattern in `components/ui/[section]/`:
1. Create directory with `index.tsx` for exports
2. Main component as `[section]-section.tsx`
3. Import and add to `app/page.tsx`

### Metadata Updates

Global metadata in `app/layout.tsx`, page-specific metadata via `generateMetadata()` in each route.
