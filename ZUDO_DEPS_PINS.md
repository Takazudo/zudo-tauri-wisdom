# ZUDO_DEPS_PINS

Provenance for artifacts vendored or generated from first-party (takazudo/zudolab) upstreams.
Updated by /dev-bump-zudo-deps on every sync — keep `pinned:` accurate.

## create-zudo-doc scaffold

- repo: zudolab/zudo-doc
- what: generated doc-site scaffold, selectively customized and drift-gated
- files: pages/docs/[[...slug]].tsx, pages/index.tsx, pages/[locale]/docs/[[...slug]].tsx, public/favicon-16x16.png, public/favicon-32x32.png, public/favicon.ico, public/favicon.svg, scripts/check-links.js, scripts/setup-doc-skill.sh, src/styles/global.css, tsconfig.json
- source: packages/create-zudo-doc/templates/base/ -> repo root; packages/create-zudo-doc/templates/features/i18n/files/ -> repo root; both doc-route stubs are then rewritten by the docHistory feature transformer (packages/create-zudo-doc/src/features/doc-history.ts, shipped as dist/features/doc-history.js), so their tracked copies are the PATCHED output, not the raw templates
- track: releases
- pinned: 50cbd5c6c9e5a795d72a74a855e105e4939d4eab (v5.27.0)
- updated: 2026-09-25
- notes: Four divergences remain, all listed in .template-drift-allowlist; non-allowlisted files (pages/index.tsx, tsconfig.json, the favicon set, and now scripts/check-links.js) must match the scaffold exactly. Between v5.16.1 and v5.22.1 only two template files changed upstream (templates/base/scripts/check-links.js and setup-doc-skill.sh); there were no additions, deletions or renames, and the docHistory transformer is unchanged. Between v5.22.1 and v5.27.0 only templates/base/scripts/check-links.js changed (heading IDs now come from the package's extractAllHeadingIds; the MDX id scan ignores escaped `\<` and cannot cross a blank line inside a quoted value) — adopted verbatim; the four allowlisted templates and the docHistory transformer are byte-identical across that range, so no three-way edit was needed. (1) src/styles/global.css carries the Tauri brand tokens (Noto Sans JP body, Futura display face, [data-header-logo]); template unchanged since 5.13.1. (2)(3) Both doc-route stubs keep the docHistory host-binding patch as their sole divergence; templates unchanged in this sync. (4) scripts/setup-doc-skill.sh stays heavily forked for the tauri-wisdom skill name and the Claude + Codex targets, so upstream's worktree correctness (zudolab/zudo-doc#2918), its config-driven locale map, and the 5.17.2–5.22.1 symlink-safety / Bash 3.2 fixes are deliberately not adopted. check-links.js left the allowlist: zudo-doc 5.17.0 fixed protocol-relative (//host) hrefs upstream, so the v5.22.1 template was adopted verbatim and the local one-line patch dropped (scripts/check-links.test.mjs still passes). The allowlist gate returns before its existence check on an allowlisted path, so these four paths need a manual three-way compare (old template / new template / repo copy) on every bump.
