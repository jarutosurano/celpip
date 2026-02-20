# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- Writing Task 2 Practice Prompts page with 5 prompts, fill-in tables, model answers, and grammar reminders
- Writing Task 2 Quick System page with 3-step method, 5 memorizable themes, pre-loaded sentences for each theme, and printable cheat sheet
- Writing Task 2 Survey Template page with step-by-step structure, grammar boosters, model answer, universal sentence starters, and argument themes
- Writing Task 2 Reusable Template page with fill-in-the-blank skeleton, formula, placeholder reference table, and theme picker
- Writing Task 1 Reusable Template page with fill-in-the-blank email skeleton, purpose verb picker, transition phrases, and salutation/sign-off pairs

## [3.0.0] - 2026-02-19

### Added
- MkDocs Material documentation framework
- Navigation tabs with sticky header for skill-based browsing
- Built-in dark/light mode toggle
- Built-in search with suggestions and highlighting
- Grid cards on landing page for quick navigation
- Writing Task 1 Email Template page with step-by-step structure, grammar boosters, model answer, and universal templates

### Changed
- Migrated entire site from Astro/Starlight to MkDocs Material
- Converted all Starlight callout syntax to MkDocs admonitions
- Converted all internal links to relative markdown paths
- Rewrote CI/CD pipeline from Node.js to Python/MkDocs
- Simplified deployment pipeline (build + deploy)

### Removed
- Blog/diary section (day-0-preparation, day-2-reading posts)
- About page
- All Astro components (ThemeToggle, StarlightSiteTitle, FormattedDate)
- All Astro layouts, pages, and styles
- All Node.js configuration (package.json, tsconfig, eslint, prettier)
- All tests (Vitest unit tests, Playwright E2E tests)
- RSS feed and custom homepage

## [2.0.0] - 2026-02-01

### Added
- Starlight documentation integration for study guides
- Complete CELPIP study documentation:
  - Getting Started guides (Introduction, Test Overview, Study Plan)
  - Listening section (Overview, Strategies, Practice Tips)
  - Reading section (Overview, Strategies, Practice Tips)
  - Writing section (Overview, Task 1 Email, Task 2 Survey, Templates)
  - Speaking section (Overview, All 8 Tasks, Strategies)
  - Resources (Free, Paid, YouTube Channels)
- Search functionality via Pagefind
- Documentation sidebar navigation
- Back-to-blog link in docs header
- Changelog workflow documentation in CLAUDE.md

### Changed
- Updated navigation to include Study Guide link
- Split site into blog (diary) and docs (study guide)

## [1.1.0] - 2026-02-01

### Added
- Theme toggle with Light/Dark/System options
- CSS variables for consistent theming
- Theme preference persisted in localStorage
- Smooth theme transition animations
- Flash prevention on page load

### Changed
- Updated global styles to use CSS variables
- Updated page components to support dark mode

## [1.0.0] - 2026-02-01

### Added
- Initial Astro blog setup
- Home, Diary, Resources, and About pages
- Blog content collection with MDX support
- Day 0 diary entry
- CI/CD pipeline with GitHub Actions
- Unit tests (Vitest) and E2E tests (Playwright)
- ESLint and Prettier configuration
- Security headers
- RSS feed and sitemap
- GitHub Pages deployment
