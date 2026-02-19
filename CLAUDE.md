# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A MkDocs Material documentation site serving as a CELPIP exam preparation study guide. Deployed to GitHub Pages with automated CI/CD pipeline.

## Commands

```bash
# Development
pip install -r requirements.txt   # Install dependencies
mkdocs serve                      # Start dev server at localhost:8000
mkdocs build                      # Build for production
mkdocs build --strict             # Build with strict mode (fails on warnings)
```

## Architecture

Pure documentation site using MkDocs Material theme.

```
docs/
├── index.md              # Landing page
├── assets/
│   └── favicon.png       # Site favicon/logo
├── guides/               # Getting started guides
│   ├── introduction.md
│   ├── test-overview.md
│   └── study-plan.md
├── listening/            # Listening section
│   ├── overview.md
│   ├── strategies.md
│   └── practice-tips.md
├── reading/              # Reading section
│   ├── overview.md
│   ├── strategies.md
│   ├── practice-tips.md
│   ├── part-1-correspondence.md
│   ├── part-2-diagram.md
│   ├── part-3-information.md
│   └── part-4-viewpoints.md
├── writing/              # Writing section
│   ├── overview.md
│   ├── task-1-email.md
│   ├── task-1-email-template.md
│   ├── task-2-survey.md
│   └── templates.md
├── speaking/             # Speaking section
│   ├── overview.md
│   ├── all-tasks.md
│   └── strategies.md
└── resources/            # Resource links
    ├── free.md
    ├── paid.md
    ├── youtube.md
    ├── language-boosters.md
    ├── transition-expressions.md
    └── paraphrasing.md

mkdocs.yml                # MkDocs configuration
requirements.txt          # Python dependencies
```

## Content Format

All content is standard Markdown in `docs/`. MkDocs Material features used:

- **Frontmatter:** `title` and `description` in YAML
- **Admonitions:** `!!! note`, `!!! tip "Title"`, `!!! warning "Title"`, `!!! danger "Title"`
- **Standard Markdown:** tables, lists, code blocks, links
- **Material extensions:** grid cards, emoji icons, task lists

## CI/CD Pipeline

On every push/PR to `main`:
1. **Build** — `mkdocs build --strict` (catches broken links and warnings)
2. **Deploy** — GitHub Pages (only on main branch push)

## Changelog Workflow

When making changes, update `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format:

1. Add changes under `## [Unreleased]` section
2. Use these categories:
   - **Added** - New features
   - **Changed** - Changes to existing features
   - **Fixed** - Bug fixes
   - **Removed** - Removed features
3. When releasing, move unreleased items to a new version section with date

## Key Files

- `mkdocs.yml` - MkDocs configuration (theme, navigation, extensions)
- `.github/workflows/ci.yml` - CI/CD pipeline
- `requirements.txt` - Python dependencies
- `CHANGELOG.md` - Project changelog
