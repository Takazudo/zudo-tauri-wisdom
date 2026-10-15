# ZUDO_DEPS_PINS

Provenance for artifacts vendored or generated from first-party (takazudo/zudolab) upstreams.
Updated by /dev-bump-zudo-deps on every sync — keep `pinned:` accurate.

## create-zudo-doc scaffold

- repo: zudolab/zudo-doc
- what: generated doc-site scaffold, selectively customized and drift-gated
- files: pages/docs/[[...slug]].tsx, pages/index.tsx, pages/[locale]/docs/[[...slug]].tsx, public/favicon-16x16.png, public/favicon-32x32.png, public/favicon.ico, public/favicon.svg, scripts/check-links.js, scripts/setup-doc-skill.sh, src/styles/global.css, tsconfig.json
- source: packages/create-zudo-doc/templates/base/ -> repo root; packages/create-zudo-doc/templates/features/i18n/files/ -> repo root; both doc-route stubs are then rewritten by the docHistory feature transformer (packages/create-zudo-doc/src/features/doc-history.ts, shipped as dist/features/doc-history.js), so their tracked copies are the PATCHED output, not the raw templates
- track: releases
- pinned: 82049856397927077c5288465db34e44d0939260 (v7.0.0; published create-zudo-doc@7.0.0 gitHead)
- updated: 2026-10-15
- notes: Reconciled published create-zudo-doc 6.0.0 → 7.0.0 tarball bytes for every base/i18n file. Only tsconfig.json changed upstream: removed baseUrl and made the @/* target explicitly relative (./src/*). Both retained route stubs exactly match the 7.0.0 docHistory transformer output, including DocHistoryBoundary and defineChromeBindings. Home route, favicons, check-links.js, setup-doc-skill.sh and package CSS imports/layers are unchanged upstream. Preserve Fjord configuration, Noto Sans JP/Futura fonts, normal title/logo weights, a[data-header-logo] and html:root[data-theme-pack] typography overrides. Preserve the local setup-doc-skill.sh fork, short tauri-wisdom name and Claude/Codex targets; historical worktree/locale/symlink-safety differences remain intentionally local. Node 24 frozen install and all ten b4push checks pass, including formatting, template drift, category metadata, pin/Wrangler parity, five link-checker tests, typecheck, build, HTML validation and built-site links/anchors. Browser verification is tracked separately; this provenance records scaffold reconciliation and does not assert deployment or integration.
