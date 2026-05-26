# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Slidev** presentation about "OpenClaw 与 AI 实践" — a guide for frontend developers to leverage AI tools (OpenClaw, Hermes, Claude Code, Cursor, etc.).

The project has **two output formats**:
1. **Slidev format** — [slides.md](slides.md) (Vite + Vue-based slide framework, `@slidev/cli`)
2. **Standalone HTML** — [index.html](index.html) (Reveal.js-based, self-contained)

## Commands

```bash
# Start dev server (Slidev)
pnpm dev

# Build static assets (Slidev)
pnpm build

# Export to PDF (Slidev)
pnpm export

# Start standalone Reveal.js dev server (Vite, port 3030)
node dev.mjs

# Start lightweight dev server (port 3030)
node start.mjs
```

## Architecture

- **Framework**: Slidev v0.50.0 (`@slidev/cli`) + Reveal.js v5.1.0 (standalone)
- **Language**: Chinese (zh-CN)
- **Package manager**: pnpm
- **Themes**: `slidev-theme-nord` (primary), `@slidev/theme-default`, `@slidev/theme-seriph`
- **Fonts**: Noto Sans SC, Noto Serif SC
- **Dark color scheme** with custom gradient backgrounds and CSS animations

### Key files

- [slides.md](slides.md) — Main Slidev presentation content (markdown with YAML frontmatter and embedded styles)
- [index.html](index.html) — Standalone Reveal.js version of the same presentation
- [dev.mjs](dev.mjs) — Custom Vite dev server script
- [start.mjs](start.mjs) — Lightweight Vite dev server
- [public/screenshots/](public/screenshots/) — Presentation screenshot assets

### Slide Sections

1. **OpenClaw** — Introduction, installation, configuration, use cases
2. **Hermes** — Agent execution engine capabilities
3. **Agent Tools Comparison** — OpenClaw vs Claude Code vs Codex vs Cursor vs Cline
4. **Claude Code Deep Dive** — Skills, Hooks, Sub-Agents
5. **Practical Tips** — AI strengths/weaknesses, multi-role collaboration patterns
6. **AI Vision Generation** — Workflow and toolchain

## Content Editing

- Edit [slides.md](slides.md) for Slidev content changes
- Edit [index.html](index.html) for Reveal.js content changes (keep in sync)
- Screenshots are in [public/screenshots/](public/screenshots/)
- Slidev uses [MDC (Markdown Components)](https://sli.dev/guide/mdc) syntax
- Slidev frontmatter controls layout, theme, transitions, fonts
