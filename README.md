# zudo-tauri-wisdom

Takazudo's Tauri v2 dev notes, built with zudo-doc (zfb stack, MDX, Tailwind CSS v4).

**Live site**: <https://zudo-tauri-wisdom.takazudomodular.com/>

## Commands

```bash
pnpm dev              # Start zfb dev server (port 4321)
pnpm build            # Build static site via zfb build
pnpm preview          # Preview built site
pnpm check            # zfb type checking
pnpm format:md        # Format MDX files
pnpm b4push           # Pre-push validation (format + typecheck + build)
pnpm setup:doc-skill  # Generate tauri-wisdom skill + symlink all skills
```

## Project Layout

```
pages/          # Host-app routing layer (zfb entry points)
src/
  components/   # Shared UI components
  config/       # settings.ts — site-wide config
  content/      # MDX doc pages (docs/ + docs-ja/)
  utils/        # Shared utilities
plugins/        # zfb integration plugins (.mjs)
zfb.config.ts   # Build config (framework, collections, plugins, adapter)
```

## Content Structure

- English (default): `src/content/docs/` -> `/docs/...`
- Japanese: `src/content/docs-ja/` -> `/ja/docs/...`
- Japanese docs mirror the English directory structure

**Bilingual rule**: When creating or updating any doc page, ALWAYS update both the English (`docs/`) and Japanese (`docs-ja/`) versions in the same PR. Keep code blocks identical between languages -- only translate surrounding prose.

**Exception**: Pages with `generated: true` in frontmatter (e.g., claude-resources auto-generated pages) do not require Japanese translations.

## Content Categories

Top-level directories under `src/content/docs/`. Directories with header nav entries are mapped via `categoryMatch` in `src/config/settings.ts`:

- `getting-started/` - Overview, project setup, dev vs production mode
- `architecture/` - Sidecar pattern, loading screen, process lifecycle
- `rust-backend/` - Mutex safety, settings cache, file watchers, menus, windows
- `frontend/` - IPC commands, useEffect pitfalls, capabilities
- `dev-server/` - SSE live-reload, watcher loops, Vite integration
- `deployment/` - Build bundle, macOS pitfalls, cargo cache, node download
- `mobile/` - Mobile (iOS/Android) Tauri setup and patterns
- `recipes/` - Real-world app patterns (doc viewer, text editor, multi-config)
- `claude/` - Claude Code integration docs

Auto-generated directories (no header nav entry, managed by claude-resources integration):

- `claude-md/` - CLAUDE.md file documentation (`noPage: true`)
- `claude-skills/` - Claude Skills documentation (`noPage: true`)

## Topics

- Project setup, dev vs production mode
- Sidecar pattern, loading screen, process lifecycle
- Rust backend: Mutex safety, settings cache, file watchers, menus, windows
- Frontend: IPC commands, useEffect pitfalls, capabilities
- Dev server: SSE live-reload, watcher loops, Vite integration
- Deployment: build bundle, macOS pitfalls, cargo cache, node download
- Mobile: iOS/Android Tauri setup and patterns
- Recipes: doc viewer app, text editor app, multi-config

## Typography

- Futura for page h1 titles and header site name (`font-futura` class)
- Noto Sans JP for body text
- Headings use font-weight 400 (normal), not bold

## Hosting & CI/CD

- **Hosting**: Cloudflare Workers static assets (not Pages)
- **PR checks**: typecheck + build + Workers preview (`*.workers.dev` URL posted as PR comment)
- **Main deploy**: build -> `wrangler deploy` -> Workers production + IFTTT notification
- **Secrets**: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `IFTTT_PROD_NOTIFY`

## License

Content is personal notes. Use at your own risk.
