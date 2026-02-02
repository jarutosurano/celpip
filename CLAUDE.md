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

The site has two main parts:
1. **Blog** - Personal diary entries (custom Astro pages)
2. **Docs** - Study guides (Starlight documentation)

```
src/
├── content/
│   ├── blog/           # Markdown diary entries
│   └── docs/           # Starlight documentation
│       ├── guides/     # Getting started guides
│       ├── listening/  # Listening section
│       ├── reading/    # Reading section
│       ├── writing/    # Writing section
│       ├── speaking/   # Speaking section
│       └── resources/  # Resource links
├── layouts/
│   ├── BaseLayout.astro    # Main blog layout
│   └── BlogPost.astro      # Blog post layout
├── pages/
│   ├── index.astro         # Homepage
│   ├── blog/               # Blog listing
│   └── about.astro         # About page
├── components/
│   ├── ThemeToggle.astro   # Light/dark/system toggle
│   └── StarlightSiteTitle.astro  # Custom docs header
└── styles/
    ├── global.css          # Blog styles
    └── starlight-custom.css # Docs customization

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

## Changelog Workflow

When making changes, update `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format:

1. Add changes under `## [Unreleased]` section
2. Use these categories:
   - **Added** - New features
   - **Changed** - Changes to existing features
   - **Fixed** - Bug fixes
   - **Removed** - Removed features
3. When releasing, move unreleased items to a new version section with date

Example:
```markdown
## [Unreleased]

### Added
- New feature description

## [1.1.0] - 2026-02-01
...
```

## Key Files

- `astro.config.mjs` - Astro configuration (base URL, integrations)
- `.github/workflows/ci.yml` - CI/CD pipeline
- `public/_headers` - Security headers for deployment
- `CHANGELOG.md` - Project changelog
