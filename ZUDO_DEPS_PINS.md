# ZUDO_DEPS_PINS

Provenance for artifacts vendored or generated from first-party (takazudo/zudolab) upstreams.
Updated by /dev-bump-zudo-deps on every sync — keep `pinned:` accurate.

## create-zudo-doc scaffold

- repo: zudolab/zudo-doc
- what: generated doc-site scaffold, selectively customized and drift-gated
- files: pages/docs/[[...slug]].tsx, pages/index.tsx, pages/[locale]/docs/[[...slug]].tsx, public/favicon-16x16.png, public/favicon-32x32.png, public/favicon.ico, public/favicon.svg, scripts/check-links.js, scripts/setup-doc-skill.sh, src/styles/global.css, tsconfig.json
- source: packages/create-zudo-doc/templates/base/ -> repo root; packages/create-zudo-doc/templates/features/i18n/files/ -> repo root; both doc-route stubs are then rewritten by the docHistory feature transformer (packages/create-zudo-doc/src/features/doc-history.ts, shipped as dist/features/doc-history.js), so their tracked copies are the PATCHED output, not the raw templates
- track: releases
- pinned: 82811a8b7e6030fa759d823bd739307bca1480c3 (v5.16.1)
- updated: 2026-09-03
- notes: Five divergences remain, all listed in .template-drift-allowlist; non-allowlisted files (pages/index.tsx, tsconfig.json, the favicon set) must match the scaffold exactly. (1) src/styles/global.css carries the Tauri brand tokens (Noto Sans JP body, Futura display face, [data-header-logo]); template unchanged since 5.13.1. (2)(3) Both doc-route stubs keep the docHistory host-binding patch; the 5.16.1 templates changed comment prose only, and that prose HAS been adopted verbatim in this sync, so the docHistory patch is now the sole divergence in both stubs. (4) scripts/setup-doc-skill.sh stays heavily forked for the tauri-wisdom skill name and the Claude + Codex targets, so upstream's worktree correctness (zudolab/zudo-doc#2918) and its 5.14.0+ config-driven locale map are deliberately not adopted. (5) check-links.js is no longer a fork of the 5.13.1 checker — zudolab/zudo-doc#3720 landed the unquoted href/id parsing and entity decoding upstream, so the file is now the 5.16.1 template plus a single line skipping protocol-relative (//host) hrefs. The allowlist gate returns before its existence check on an allowlisted path, so these five paths need a manual three-way compare (old template / new template / repo copy) on every bump.
