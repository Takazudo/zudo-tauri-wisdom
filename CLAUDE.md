# zudo-tauri

Takazudo's Tauri v2 dev notes, built with zudo-doc (Astro, MDX, Tailwind CSS v4).

## Commands

```bash
pnpm dev          # Start Astro dev server (port 4819)
pnpm build        # Build static site to dist/
pnpm preview      # Preview built site
pnpm check        # Astro type checking
pnpm format:md    # Format MDX files
pnpm b4push       # Pre-push validation (format + typecheck + build)
```

## Content Structure

- English (default): `src/content/docs/` -> `/docs/...`
- Japanese: `src/content/docs-ja/` -> `/ja/docs/...`
- Japanese docs should mirror the English directory structure

**Bilingual rule**: When creating or updating any doc page, ALWAYS update both the English (`docs/`) and Japanese (`docs-ja/`) versions in the same PR. Keep code blocks identical between languages -- only translate surrounding prose. If a Japanese version does not yet exist, create it.

## Content Categories

- `getting-started/` - Overview, project setup, dev vs production mode
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

## Typography

- Futura for page h1 titles and header site name (`font-futura` class)
- Noto Sans JP for body text
- Headings use font-weight 400 (normal), not bold

## Site Config

- Base path: `/pj/zudo-tauri`
- Settings: `src/config/settings.ts`

## CI/CD

- PR checks: typecheck + build + Cloudflare Pages preview
- Main deploy: build + Cloudflare Pages production + IFTTT notification
- Secrets: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, IFTTT_PROD_NOTIFY
