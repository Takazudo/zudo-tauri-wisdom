# Tauri Wisdom

Comprehensive Tauri v2 knowledge base for macOS wrapper apps and Rust backend patterns, built with zudo-doc (Astro, MDX, Tailwind CSS v4).

## Architecture

- `/doc/` - Documentation site built with zudo-doc (Astro, MDX, Tailwind CSS v4)
- `/scripts/` - Build and utility scripts

## Commands

```bash
pnpm dev          # Start Astro dev server (port 4819)
pnpm build        # Build static site to doc/dist/
pnpm preview      # Preview built site
pnpm check        # Astro type checking
pnpm format:md    # Format MDX files
pnpm b4push       # Pre-push validation (format + typecheck + build)
```

## Content Structure

- English (default): `doc/src/content/docs/` -> `/docs/...`
- Japanese: `doc/src/content/docs-ja/` -> `/ja/docs/...`
- Japanese docs should mirror the English directory structure

## Content Categories

- `getting-started/` - Project setup, dev vs production mode
- `architecture/` - Sidecar pattern, loading screen, process lifecycle
- `rust-backend/` - Mutex safety, settings cache, file watchers, menus, windows
- `frontend/` - IPC commands, useEffect pitfalls, capabilities
- `dev-server/` - SSE live-reload, watcher loops, Vite integration
- `deployment/` - Build bundle, macOS pitfalls, cargo cache, node download
- `recipes/` - Real-world app patterns (doc viewer, text editor, multi-config)

## MDX Components

Available globally in MDX without imports:

- `<Note>`, `<Tip>`, `<Info>`, `<Warning>`, `<Danger>` - Admonitions
- `<HtmlPreview>` - Interactive HTML/CSS/JS preview with code display

## CI/CD

- PR checks: typecheck + build + Cloudflare Pages preview
- Main deploy: build + Cloudflare Pages production + IFTTT notification
- Secrets: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, IFTTT_PROD_NOTIFY
