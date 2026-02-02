# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An Astro-based blog/diary documenting a CELPIP exam preparation journey. Deployed to GitHub Pages with automated CI/CD pipeline.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Type check + build for production
npm run preview      # Preview production build locally

# Testing
npm run test         # Run unit tests (Vitest)
npm run test:e2e     # Run E2E tests (Playwright)
npm run test:all     # Run all tests

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run typecheck    # Run Astro type checking
```

## Architecture

```
src/
├── content/
│   └── blog/           # Markdown diary entries (content collection)
├── layouts/
│   ├── BaseLayout.astro    # Main layout with nav/footer
│   └── BlogPost.astro      # Blog post layout
├── pages/
│   ├── index.astro         # Homepage
│   ├── blog/               # Blog listing and dynamic routes
│   ├── resources.astro     # CELPIP resources page
│   └── about.astro         # About page
├── components/             # Reusable Astro components
└── styles/
    └── global.css          # Global styles

tests/
├── unit/               # Vitest unit tests
└── e2e/                # Playwright E2E tests
```

## Content Collections

Blog posts live in `src/content/blog/` as Markdown files with frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2026-02-01
tags: ["tag1", "tag2"]
draft: false  # Set true to hide from production
---
```

## CI/CD Pipeline

On every push/PR to `main`:
1. **Lint** - ESLint checks
2. **Type Check** - Astro type validation
3. **Unit Tests** - Vitest
4. **Build** - Production build
5. **E2E Tests** - Playwright against built site
6. **Deploy** - GitHub Pages (only on main branch push)

## Key Files

- `astro.config.mjs` - Astro configuration (base URL, integrations)
- `.github/workflows/ci.yml` - CI/CD pipeline
- `public/_headers` - Security headers for deployment
