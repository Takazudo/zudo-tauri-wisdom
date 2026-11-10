# ZUDO_DEPS_PINS

Provenance for artifacts vendored or generated from first-party (takazudo/zudolab) upstreams.
Updated by /dev-bump-zudo-deps on every sync — keep `pinned:` accurate.

## create-zudo-doc scaffold

- repo: zudolab/zudo-doc
- what: generated doc-site scaffold, selectively customized and drift-gated
- files: pages/docs/[[...slug]].tsx, pages/index.tsx, pages/[locale]/docs/[[...slug]].tsx, public/favicon-16x16.png, public/favicon-32x32.png, public/favicon.ico, public/favicon.svg, scripts/check-links.js, scripts/setup-doc-skill.sh, src/styles/global.css, tsconfig.json
- source: packages/create-zudo-doc/templates/base/ -> repo root; packages/create-zudo-doc/templates/features/i18n/files/ -> repo root; both doc-route stubs are then rewritten by the docHistory feature transformer (packages/create-zudo-doc/src/features/doc-history.ts, shipped as dist/features/doc-history.js), so their tracked copies are the PATCHED output, not the raw templates
- track: releases
- pinned: 70c574747e498c47f35fa9051ab36b0a69ac808d (v10.0.0; create-zudo-doc 10.0.0 release tag)
- updated: 2026-11-10
- notes: Reconciled published create-zudo-doc 7.0.0 → 10.0.0 tarball bytes. Base and i18n templates are byte-identical except scripts/setup-doc-skill.sh. doc-history.js is byte-identical, and both retained route stubs still match its patched output (DocHistoryBoundary + defineChromeBindings). Home route, favicons, check-links.js, tsconfig.json, and package CSS imports/layers are unchanged. Theme is Graphite by omitting themePack (zudo-doc 10 light/dark default); preserve Noto Sans JP/Futura, normal title/logo weights, a[data-header-logo], and html:root[data-theme-pack] typography overrides. Preserve the local setup-doc-skill.sh fork, short tauri-wisdom name, Claude/Codex targets, fixed EN/JA directories, and pnpm format:md. The fork now reads the main worktree from porcelain `git worktree list` so a path containing a space is not truncated (9.1.4). It still skips the upstream AUTHORING.md placement essay, config-based locale discovery, symlink-overwrite refusal, and Bash 3.2 support. Wrangler stays on the exact version embedded in the zfb 6.0.1 binary (4.85.0 at the v6.0.1 tag; zfb 6 release notes say the pin is unchanged). This repo does not enable the design-token panel or MCP, so it does not take the generated ZDTP 0.9.3 or Wrangler 4.160.0 / workers-types pins (those are feature-gated in the 10.0.0 scaffolder). npm packages in this release publish without gitHead; the pin is the v10.0.0 tag commit.
